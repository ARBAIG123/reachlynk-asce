import '@vly-ai/integrations';
import { Toaster } from "@/components/ui/sonner";
import { RequireAuth } from "@/components/RequireAuth";
import { VlyToolbar } from "../vly-toolbar-readonly.tsx";
import { ConvexAuthProvider } from "@convex-dev/auth/react";
import { ConvexReactClient } from "convex/react";
import React, { StrictMode, useEffect, lazy, Suspense } from "react";
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
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background">
      {/* Logo mark */}
      <div className="relative mb-6">
        <svg
          className="size-14 animate-spin-slower opacity-20"
          viewBox="0 0 200 200"
          fill="none"
          aria-hidden
        >
          <path
            d="M100 30 Q130 60 120 100 Q130 140 100 170 Q70 140 80 100 Q70 60 100 30Z"
            className="fill-brand/30"
          />
          <path
            d="M150 60 Q130 80 110 100 Q130 120 150 140 Q170 120 160 100 Q170 80 150 60Z"
            className="fill-brand/20"
          />
          <path
            d="M50 60 Q70 80 90 100 Q70 120 50 140 Q30 120 40 100 Q30 80 50 60Z"
            className="fill-brand/20"
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="size-2.5 rounded-full bg-brand/70" />
        </span>
      </div>
      {/* Brand name */}
      <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-foreground/40">
        Reachlynk
      </p>
      {/* Animated dots */}
      <div className="mt-4 flex items-center gap-1.5">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="size-1 rounded-full bg-brand/50"
            style={{
              animation: `rl-dot-pulse 1.4s ease-in-out ${i * 0.2}s infinite`,
            }}
          />
        ))}
      </div>
      <style>{`
        @keyframes rl-dot-pulse {
          0%, 80%, 100% { opacity: 0.3; transform: scale(0.8); }
          40% { opacity: 1; transform: scale(1.2); }
        }
      `}</style>
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
