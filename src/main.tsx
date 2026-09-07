import '@vly-ai/integrations';
import { Toaster } from "@/components/ui/sonner";
import { RequireAuth } from "@/components/RequireAuth";
import { VlyToolbar } from "../vly-toolbar-readonly.tsx";
import { ConvexAuthProvider } from "@convex-dev/auth/react";
import { ConvexReactClient } from "convex/react";
import React, { StrictMode, useEffect, useRef, useState, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import "./index.css";

// Lazy load route components for better code splitting
const Landing = lazy(() => import("./pages/Landing.tsx"));
const Team = lazy(() => import("./pages/Team.tsx"));

const Pricing = lazy(() => import("./pages/Pricing.tsx"));
const About = lazy(() => import("./pages/About.tsx"));
const Process = lazy(() => import("./pages/Process.tsx"));
const Contact = lazy(() => import("./pages/Contact.tsx"));
const AuthPage = lazy(() => import("./pages/Auth.tsx"));
const Dashboard = lazy(() => import("./pages/Dashboard.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));
const Terms = lazy(() => import("./pages/Terms.tsx"));
const SiteLayout = lazy(() => import("./components/site/SiteLayout.tsx"));

// Simple loading fallback for route transitions


function RouteLoading() {
  const [pct, setPct] = useState(0);
  const rafRef = useRef(0);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    const totalMs = 3200; // full fill duration
    const step = (ts: number) => {
      if (startRef.current === null) startRef.current = ts;
      const elapsed = ts - startRef.current;
      // ease-out-cubic for a natural fill
      const raw = Math.min(elapsed / totalMs, 1);
      const eased = 1 - Math.pow(1 - raw, 3);
      setPct(Math.round(eased * 100));
      if (raw < 1) rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // wave path — animated via CSS
  const fillY = 100 - (pct / 100) * 100; // 100 = empty, 0 = full (in viewBox %)

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background">
      <style>{`
        @keyframes rl-wave {
          0%, 100% { d: path("M0 12 Q25 8 50 12 Q75 16 100 12 L100 100 L0 100Z"); }
          50% { d: path("M0 12 Q25 16 50 12 Q75 8 100 12 L100 100 L0 100Z"); }
        }
        @keyframes rl-fill-label {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
      `}</style>

      {/* ---- Main text with water fill ---- */}
      <div className="relative select-none">
        {/* Base text (outline / unfilled) */}
        <h1
          className="text-[clamp(4rem,12vw,10rem)] font-extrabold uppercase tracking-[-0.03em] text-foreground/[0.08]"
          aria-hidden
        >
          Reachlynk
        </h1>

        {/* Fill overlay — clipped by percentage */}
        <h1
          className="absolute inset-0 text-[clamp(4rem,12vw,10rem)] font-extrabold uppercase tracking-[-0.03em]"
          style={{
            clipPath: `inset(${100 - pct}% 0 0 0)`,
          }}
        >
          {/* Text color fill */}
          <span className="text-foreground">Reachlynk</span>
          {/* Water surface wave at the fill line */}
          {pct > 2 && pct < 98 && (
            <svg
              className="absolute left-0 w-full"
              style={{
                bottom: `${pct}%`,
                height: "12px",
                transform: "translateY(50%)",
              }}
              viewBox="0 0 100 20"
              preserveAspectRatio="none"
              aria-hidden
            >
              <path
                d="M0 12 Q25 8 50 12 Q75 16 100 12 L100 20 L0 20Z"
                className="fill-brand/30"
                style={{ animation: "rl-wave 2.5s ease-in-out infinite" }}
              />
            </svg>
          )}
        </h1>
      </div>

      {/* ---- Percentage counter ---- */}
      <div className="mt-8 flex items-center gap-4">
        <div className="h-px w-12 bg-foreground/15" />
        <span
          className="text-sm font-bold tabular-nums text-muted-foreground"
          style={{ animation: "rl-fill-label 2s ease-in-out infinite" }}
        >
          {String(pct).padStart(3, "0")}%
        </span>
        <div className="h-px w-12 bg-foreground/15" />
      </div>

      {/* ---- Thin progress bar ---- */}
      <div className="mt-4 h-[2px] w-48 overflow-hidden rounded-full bg-foreground/10">
        <div
          className="h-full rounded-full bg-brand transition-none"
          style={{ width: `${pct}%` }}
        />
      </div>

      {/* ---- Tagline ---- */}
      <p className="mt-6 text-[0.7rem] font-bold uppercase tracking-[0.22em] text-muted-foreground/50">
        From clicks to clients
      </p>
    </div>
  );
}

/** Silent error boundary — if VlyToolbar crashes it renders nothing instead of
 *  crashing the whole app (e.g. hook errors in WebContainer environment). */
class ToolbarErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(err: Error) {
    console.warn("[VlyToolbar] Caught error, toolbar disabled:", err.message);
  }
  render() {
    return this.state.hasError ? null : this.props.children;
  }
}

/** Hard guard so runtime errors never leave the preview as a blank page. */
class RootErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; message: string; stack: string }
> {
  state = { hasError: false, message: "", stack: "" };
  static getDerivedStateFromError(error: Error) {
    return {
      hasError: true,
      message: error.message || "Unknown runtime error",
      stack: error.stack || "",
    };
  }
  componentDidCatch(err: Error) {
    console.error("[WebContainer preview] Root crash:", err);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-background text-foreground p-6">
          <div className="max-w-lg text-center">
            <p className="text-sm font-semibold">Preview runtime error</p>
            <p className="mt-2 text-xs text-muted-foreground break-words">
              {this.state.message}
            </p>
            {this.state.stack && (
              <pre className="mt-3 text-left text-[10px] leading-4 text-muted-foreground/80 max-h-40 overflow-auto rounded border border-border/60 p-2">
                {this.state.stack}
              </pre>
            )}
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);



function RouteSyncer() {
  const location = useLocation();
  useEffect(() => {
    window.parent.postMessage(
      { type: "iframe-route-change", path: location.pathname },
      "*",
    );
  }, [location.pathname]);

  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (event.data?.type === "navigate") {
        if (event.data.direction === "back") window.history.back();
        if (event.data.direction === "forward") window.history.forward();
      }
    }
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return null;
}


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RootErrorBoundary>
      <ToolbarErrorBoundary>
        <VlyToolbar />
      </ToolbarErrorBoundary>
      <ConvexAuthProvider client={convex}>
        <BrowserRouter>
          <RouteSyncer />
          <Suspense fallback={<RouteLoading />}>
            <Routes>
              {/* Public marketing site — shares the site chrome (nav/footer/CTA) */}
              <Route
                path="/"
                element={
                  <SiteLayout>
                    <Landing />
                  </SiteLayout>
                }
              />
              <Route
                path="/team"
                element={
                  <SiteLayout>
                    <Team />
                  </SiteLayout>
                }
              />

              <Route
                path="/pricing"
                element={
                  <SiteLayout>
                    <Pricing />
                  </SiteLayout>
                }
              />
              <Route
                path="/about"
                element={
                  <SiteLayout>
                    <About />
                  </SiteLayout>
                }
              />
              <Route
                path="/process"
                element={
                  <SiteLayout>
                    <Process />
                  </SiteLayout>
                }
              />
              <Route
                path="/contact"
                element={
                  <SiteLayout>
                    <Contact />
                  </SiteLayout>
                }
              />
              <Route
                path="/auth"
                element={<AuthPage redirectAfterAuth="/dashboard" />}
              />
              <Route
                path="/dashboard"
                element={
                  <RequireAuth>
                    <Dashboard />
                  </RequireAuth>
                }
              />
              <Route path="/terms" element={<SiteLayout><Terms /></SiteLayout>} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
        <Toaster />
      </ConvexAuthProvider>
    </RootErrorBoundary>
  </StrictMode>,
);
