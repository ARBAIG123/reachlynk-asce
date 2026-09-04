import { useReducedMotion } from "framer-motion";
import Lenis from "lenis";
import { useEffect, useRef, type ReactNode } from "react";
import { useLocation } from "react-router";
import { setLenis } from "@/lib/scroll";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { CtaBand } from "@/components/site/CtaBand";

export default function SiteLayout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const reducedMotion = useReducedMotion();
  const lenisRef = useRef<Lenis | null>(null);

  // Lenis — buttery smooth scrolling (skipped for reduced-motion users)
  useEffect(() => {
    if (reducedMotion) return;
    const lenis = new Lenis({ lerp: 0.095, smoothWheel: true, wheelMultiplier: 1 });
    lenisRef.current = lenis;
    setLenis(lenis);
    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
      setLenis(null);
    };
  }, [reducedMotion]);

  // Jump to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
    const lenis = lenisRef.current;
    if (lenis) lenis.scrollTo(0, { immediate: true, force: true });
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* film grain — subtle print texture over the whole experience */}
      <div
        aria-hidden
        className="noise-overlay pointer-events-none fixed inset-0 z-[80] opacity-[0.05] mix-blend-multiply"
      />
      <SiteHeader />
      <main className="flex-1">{children}</main>
      {pathname !== "/contact" && <CtaBand />}
      <SiteFooter />
    </div>
  );
}
