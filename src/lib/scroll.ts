import type Lenis from "lenis";

let lenisInstance: Lenis | null = null;

export function setLenis(lenis: Lenis | null) {
  lenisInstance = lenis;
}

export function getLenis() {
  return lenisInstance;
}

/** Smoothly scroll to a pixel offset or CSS selector (for in-page anchors). */
export function smoothScrollTo(
  target: number | string,
  opts: { offset?: number; immediate?: boolean } = {},
) {
  const lenis = lenisInstance;
  if (lenis) {
    lenis.scrollTo(target as never, {
      offset: opts.offset ?? 0,
      duration: opts.immediate ? 0 : 1.1,
      immediate: opts.immediate ?? false,
    });
    return;
  }
  if (typeof target === "number") {
    window.scrollTo({ top: target, behavior: opts.immediate ? "auto" : "smooth" });
    return;
  }
  document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
}

/** Instantly jump to the top (used on route changes). */
export function scrollToTopImmediate() {
  const lenis = lenisInstance;
  if (lenis) {
    lenis.scrollTo(0, { immediate: true, force: true });
    return;
  }
  window.scrollTo(0, 0);
}
