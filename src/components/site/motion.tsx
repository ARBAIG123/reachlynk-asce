import {
  animate,
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  type MotionValue,
  type Variants,
} from "framer-motion";
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

/** Signature easing used across the site — smooth, expensive-feeling. */
export const EASE = [0.22, 1, 0.36, 1] as const;

// ---------------------------------------------------------------------------
// Scroll-triggered fade/slide reveal
// ---------------------------------------------------------------------------
export function Reveal({
  children,
  className,
  delay = 0,
  y = 26,
  once = true,
  amount = 0.25,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
  amount?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.85, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// Text masking — words rise out of an overflow-hidden mask
// ---------------------------------------------------------------------------
export function MaskText({
  text,
  className,
  delay = 0,
  stagger = 0.045,
  once = true,
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
}) {
  const words = text.split(" ");
  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };
  const word: Variants = {
    hidden: { y: "118%", rotate: 2 },
    show: { y: "0%", rotate: 0, transition: { duration: 0.85, ease: EASE } },
  };
  return (
    <motion.span
      className={cn("inline-flex flex-wrap", className)}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.6 }}
      aria-label={text}
      role="text"
    >
      {words.map((w, i) => (
        <span
          key={i}
          aria-hidden
          className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom"
        >
          <motion.span
            className="inline-block pr-[0.26em] will-change-transform"
            variants={word}
          >
            {w}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

/** Masks arbitrary children inside a single clipping line. */
export function MaskLine({
  children,
  className,
  delay = 0,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
}) {
  return (
    <span className={cn("block overflow-hidden pb-[0.14em] -mb-[0.14em]", className)}>
      <motion.span
        className="block will-change-transform"
        initial={{ y: "118%" }}
        whileInView={{ y: "0%" }}
        viewport={{ once, amount: 0.8 }}
        transition={{ duration: 0.9, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}

// ---------------------------------------------------------------------------
// Image clipping — a panel un-clips from the bottom while the art settles
// ---------------------------------------------------------------------------
export function ClipReveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={cn("overflow-hidden", className)}
      initial={{ clipPath: "inset(0 0 100% 0)" }}
      whileInView={{ clipPath: "inset(0 0 0% 0)" }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 1.05, delay, ease: EASE }}
    >
      <motion.div
        initial={{ scale: 1.18 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 1.35, delay, ease: EASE }}
        className="h-full w-full will-change-transform"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// Parallax — inner content drifts against its frame while scrolling
// ---------------------------------------------------------------------------
export function Parallax({
  children,
  className,
  distance = 44,
}: {
  children: ReactNode;
  className?: string;
  distance?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }} className="will-change-transform">
        {children}
      </motion.div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Horizontal pinned section — tall scroll drives a horizontal track
// ---------------------------------------------------------------------------
export function HorizontalScroll({
  children,
  className,
  height = "300vh",
  once = true,
}: {
  children: ReactNode;
  className?: string;
  /** extra CSS height for the scroll journey */
  height?: string;
  once?: boolean;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [range, setRange] = useState(0);

  useEffect(() => {
    if (!once) return;
    const measure = () => {
      const track = trackRef.current;
      if (!track) return;
      setRange(Math.max(0, track.scrollWidth - window.innerWidth));
    };
    measure();
    const id = window.setTimeout(measure, 400);
    window.addEventListener("resize", measure);
    // Re-measure once webfonts have settled — text widths change slightly
    document.fonts?.ready?.then(measure).catch(() => {});
    return () => {
      window.clearTimeout(id);
      window.removeEventListener("resize", measure);
    };
  }, [once]);

  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -range]);
  const pad = "max(1.25rem, calc((100vw - 1440px) / 2 + 2.5rem))";

  return (
    <div
      ref={wrapRef}
      className={cn("relative", className)}
      style={{ height }}
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div
          ref={trackRef}
          style={{ x, paddingLeft: pad, paddingRight: pad }}
          className="flex w-max items-center will-change-transform"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Pinned phrases — statements swap while a tall section is pinned
// ---------------------------------------------------------------------------
function PinnedPhrase({
  text,
  index,
  total,
  progress,
}: {
  text: ReactNode;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const from = index / total;
  const to = (index + 1) / total;
  const fade = 0.12;
  const opacity = useTransform(
    progress,
    [Math.max(0, from - fade), from, to, Math.min(1, to + fade)],
    [0, 1, 1, 0],
  );
  const y = useTransform(progress, [from, to], [46, -46]);
  const scale = useTransform(progress, [from, to], [0.96, 1.03]);
  return (
    <motion.p
      style={{ opacity, y, scale }}
      className="absolute inset-0 flex items-center justify-center px-2 text-center text-[clamp(2rem,5.6vw,4.6rem)] leading-[1.05] font-extrabold tracking-[-0.03em]"
    >
      {text}
    </motion.p>
  );
}

function PinnedDot({
  index,
  total,
  progress,
}: {
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const p = useTransform(progress, [index / total, (index + 1) / total], [0, 1]);
  const opacity = useTransform(p, [0, 1], [0.3, 1]);
  return (
    <motion.span
      style={{ scaleX: p, opacity }}
      className="h-1.5 w-8 origin-left rounded-full bg-foreground/60"
    />
  );
}

export function PinnedPhrases({
  phrases,
  className,
  height = "280vh",
  kicker,
}: {
  phrases: ReactNode[];
  className?: string;
  height?: string;
  /** optional label pinned above the phrases */
  kicker?: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={ref} className={cn("relative", className)} style={{ height }}>
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="relative mx-auto w-full max-w-5xl px-5 sm:px-8">
          {kicker && (
            <div className="mb-10 flex justify-center">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-foreground/30" />
                <span className="eyebrow text-muted-foreground">{kicker}</span>
                <span className="h-px w-8 bg-foreground/30" />
              </div>
            </div>
          )}
          <div className="relative flex min-h-[16rem] items-center justify-center sm:min-h-[19rem]">
            {phrases.map((phrase, i) => (
              <PinnedPhrase
                key={i}
                text={phrase}
                index={i}
                total={phrases.length}
                progress={scrollYProgress}
              />
            ))}
          </div>
          {/* progress dots */}
          <div className="mt-10 flex items-center justify-center gap-2.5">
            {phrases.map((_, i) => (
              <PinnedDot
                key={i}
                index={i}
                total={phrases.length}
                progress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Velocity-driven distortion — big typography strains subtly with scroll speed
// ---------------------------------------------------------------------------
export function VelocityWord({
  children,
  className,
  strength = 1,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const { scrollY } = useScroll();
  const smooth = useSpring(scrollY, { stiffness: 140, damping: 30, mass: 0.4 });
  const velocity = useVelocity(smooth);
  const skewX = useTransform(velocity, [-1600, 1600], [-5.5 * strength, 5.5 * strength], {
    clamp: true,
  });
  const scaleX = useTransform(velocity, [-1600, 1600], [0.985, 1.015], {
    clamp: true,
  });
  const opacity = useTransform(velocity, [-1600, 0, 1600], [0.75, 1, 0.75]);
  return (
    <motion.div
      aria-hidden
      style={{ skewX, scaleX, opacity }}
      className={cn("pointer-events-none select-none will-change-transform", className)}
    >
      {children}
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// Infinite marquee (content is duplicated, animation shifts -50%)
// ---------------------------------------------------------------------------
export function Marquee({
  children,
  className,
  duration = 42,
}: {
  children: ReactNode;
  className?: string;
  duration?: number;
}) {
  return (
    <div className={cn("marquee-paused relative flex w-full overflow-hidden", className)}>
      <div
        className="animate-marquee flex w-max shrink-0 items-center"
        style={{ animationDuration: `${duration}s` } as CSSProperties}
      >
        {children}
        {children}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Count-up number
// ---------------------------------------------------------------------------
export function CountUp({
  value,
  suffix = "",
  prefix = "",
  decimals = 0,
  className,
  duration = 1.9,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [inView, value, duration]);

  const formatted = decimals > 0 ? display.toFixed(decimals) : Math.round(display).toString();

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

// ---------------------------------------------------------------------------
// Gentle scroll-driven float for pricing cards
// ---------------------------------------------------------------------------
export function FloatOnScroll({
  children,
  className,
  amplitude = 16,
}: {
  children: ReactNode;
  className?: string;
  amplitude?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [amplitude, -amplitude * 0.4, amplitude],
  );
  return (
    <motion.div ref={ref} style={{ y }} className={cn("will-change-transform", className)}>
      {children}
    </motion.div>
  );
}
