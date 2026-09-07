import { ArrowRight, ArrowUpRight, ExternalLink } from "lucide-react";
import { Link } from "react-router";
import { BrowserMock } from "@/components/site/SiteMock";
import {
  ClipReveal,
  CountUp,
  Marquee,
  MaskLine,
  Parallax,
  Reveal,
  VelocityWord,
} from "@/components/site/motion";
import { cn } from "@/lib/utils";
import { CLIENT_MARQUEE, PROCESS, PROJECTS, STATS } from "@/lib/content";
import { buttonVariants } from "@/components/ui/button";
import { Brand } from "@/components/site/Brand";

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="eyebrow flex items-center gap-3 text-brand">
      <span className="h-px w-8 bg-brand/60" />
      {children}
    </p>
  );
}

const SERVICES_TAGS = ["Web Design", "Development", "E-Commerce", "UI/UX"];

export default function Landing() {
  const heroProject = PROJECTS[0];

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden pb-6 pt-10 md:pb-12 md:pt-16">
        {/* Slow-moving Reachlynk background text */}
        <VelocityWord
          strength={0.3}
          className="absolute -right-[6%] top-8 hidden select-none lg:block"
        >
          <span className="text-outline block text-[14rem] font-extrabold uppercase leading-none tracking-[-0.03em] opacity-[0.07]">
            Reachlynk
          </span>
        </VelocityWord>

        {/* Decorative curved line — bottom left */}
        <svg
          className="pointer-events-none absolute -left-8 bottom-12 hidden h-48 w-48 opacity-30 lg:block"
          viewBox="0 0 200 200"
          fill="none"
          aria-hidden
        >
          <path
            d="M10 190 Q10 10 190 10"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-brand/40"
          />
          <circle cx="10" cy="190" r="4" className="fill-brand/30" />
        </svg>

        {/* Decorative star — bottom right */}
        <svg
          className="pointer-events-none absolute -right-4 bottom-8 hidden h-6 w-6 opacity-40 lg:block"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden
        >
          <path
            d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z"
            className="fill-brand/50"
          />
        </svg>

        <div className="shell relative">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6">
            {/* ---- LEFT: copy ---- */}
            <div className="relative z-10">
              <Reveal y={14}>
                <p className="inline-flex items-center gap-3 text-[0.78rem] font-bold uppercase tracking-[0.2em] text-brand">
                  Modern websites that help businesses grow
                  <span className="h-px w-10 bg-brand/50" />
                </p>
              </Reveal>

              <h1 className="mt-6 text-[clamp(2.6rem,6.5vw,5.2rem)] font-extrabold leading-[1.02] tracking-[-0.035em] text-foreground">
                <MaskLine>Websites that make</MaskLine>
                <MaskLine delay={0.08}>
                  businesses{" "}
                  <span className="serif-accent font-normal text-brand">impossible</span>
                </MaskLine>
                <MaskLine delay={0.16}>to ignore.</MaskLine>
              </h1>

              <Reveal delay={0.3} y={20}>
                <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground md:text-xl">
                  We design and build modern websites for restaurants, cafés,
                  hotels and local businesses that want to grow online — and get
                  noticed.
                </p>
              </Reveal>

              <Reveal delay={0.4} y={20}>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <Link
                    to="/contact?mode=project"
                    className={cn(
                      buttonVariants({ variant: "default" }),
                      "group h-[56px] gap-2.5 rounded-full px-8 text-[0.98rem] font-bold",
                    )}
                  >
                    Start a project
                    <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
                  </Link>
                  <Link
                    to="/contact?mode=audit"
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "h-[56px] rounded-full border-foreground/25 bg-transparent px-8 text-[0.98rem] font-bold",
                    )}
                  >
                    Get a free web audit
                    <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </Reveal>

              {/* Service tags */}
              <Reveal delay={0.5} y={16}>
                <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
                  {SERVICES_TAGS.map((tag, i) => (
                    <span key={tag} className="flex items-center gap-6 text-[0.75rem] font-bold uppercase tracking-[0.18em] text-muted-foreground/70">
                      {tag}
                      {i < SERVICES_TAGS.length - 1 && (
                        <span className="h-[3px] w-[3px] rounded-full bg-brand/50" />
                      )}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* ---- RIGHT: mockup area ---- */}
            <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
              <div className="relative">
                {/* Floating project card — above the mockup */}
                <Reveal delay={0.25} y={16} className="absolute -left-4 -top-6 z-20 hidden sm:block">
                  <div className="flex items-center gap-3 rounded-2xl border border-border/80 bg-card/95 px-4 py-3 shadow-lg backdrop-blur-sm">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
                      <span className="serif-accent text-sm font-bold">T</span>
                    </span>
                    <div>
                      <p className="text-[0.82rem] font-bold text-foreground">{heroProject.name}</p>
                      <p className="text-[0.68rem] font-medium text-muted-foreground">Website Design + Development</p>
                    </div>
                    <ArrowUpRight className="ml-2 size-4 text-brand/50" />
                  </div>
                </Reveal>

                {/* Tilted browser mockup */}
                <div className="relative">
                  <span
                    aria-hidden
                    className="absolute -left-4 -top-4 hidden rounded-[1.6rem] bg-secondary md:block md:h-full md:w-full md:rotate-[-2deg]"
                  />
                  <ClipReveal className="relative">
                    <Parallax distance={14}>
                      <div className="md:rotate-[1.5deg] transition-transform">
                        <BrowserMock project={heroProject} />
                      </div>
                    </Parallax>
                  </ClipReveal>
                </div>

                {/* "Live Website" badge — bottom right */}
                <Reveal delay={0.4} y={10} className="absolute -bottom-3 right-0 z-20 hidden sm:block">
                  <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/95 px-4 py-2 text-[0.75rem] font-bold text-foreground shadow-md backdrop-blur-sm">
                    <span className="size-2 rounded-full bg-emerald-500" />
                    Live Website
                    <ArrowUpRight className="size-3.5 text-muted-foreground" />
                  </span>
                </Reveal>

                {/* Decorative flower — bottom right corner */}
                <svg
                  className="pointer-events-none absolute -bottom-6 -right-8 h-32 w-32 opacity-15 sm:h-40 sm:w-40 sm:opacity-20"
                  viewBox="0 0 200 200"
                  fill="none"
                  aria-hidden
                >
                  <g className="text-brand">
                    <path d="M100 30 Q130 60 120 100 Q130 140 100 170 Q70 140 80 100 Q70 60 100 30Z" fill="currentColor" fillOpacity="0.25" />
                    <path d="M150 60 Q130 80 110 100 Q130 120 150 140 Q170 120 160 100 Q170 80 150 60Z" fill="currentColor" fillOpacity="0.15" />
                    <path d="M50 60 Q70 80 90 100 Q70 120 50 140 Q30 120 40 100 Q30 80 50 60Z" fill="currentColor" fillOpacity="0.15" />
                    <circle cx="100" cy="100" r="5" fill="currentColor" fillOpacity="0.4" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CLIENT MARQUEE ================= */}
      <section className="border-y border-border/70 bg-secondary/70 py-5">
        <Marquee duration={38}>
          {CLIENT_MARQUEE.map((name, i) => (
            <span key={name} className="flex shrink-0 items-center">
              <span
                className={cn(
                  "whitespace-nowrap text-[1.05rem] font-bold uppercase tracking-[0.2em] text-foreground/50",
                  i % 3 === 1 && "serif-accent lowercase tracking-normal text-[1.4rem] text-foreground/60",
                  i % 3 === 2 && "font-extrabold italic",
                )}
              >
                {name}
              </span>
              <span aria-hidden className="serif-accent mx-10 text-[1.3rem] text-brand/60">
                *
              </span>
            </span>
          ))}
        </Marquee>
      </section>

      {/* ================= STATS + PROOF ================= */}
      <section className="shell py-10 md:py-14">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.15fr]">
          <div>
            <SectionEyebrow>Proof, not promises</SectionEyebrow>
            <h2 className="mt-5 text-[clamp(2rem,4.2vw,3.4rem)] font-extrabold leading-[1.05] tracking-[-0.035em]">
              Numbers we&apos;re happy to{" "}
              <span className="serif-accent font-normal text-brand">stand behind</span>.
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {STATS.map((stat, i) => (
              <Reveal
                key={stat.label}
                delay={i * 0.08}
                className="flex flex-col justify-between gap-3 rounded-[1.4rem] border border-border bg-secondary/60 p-6 md:p-8"
              >
                <span className="serif-accent text-[1.1rem] text-brand">0{i + 1}</span>
                <span className="text-[clamp(2.4rem,4.5vw,3.8rem)] font-extrabold leading-none tracking-[-0.03em] text-foreground">
                  <CountUp
                    value={stat.value}
                    suffix={stat.suffix}
                    decimals={"decimals" in stat ? (stat.decimals as number) : 0}
                  />
                </span>
                <span className="text-sm font-medium leading-snug text-muted-foreground">
                  {stat.label}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROCESS STRIP ================= */}
      <section className="border-t border-border/70 bg-card/60 py-10 md:py-14">
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <SectionEyebrow>How it works</SectionEyebrow>
              <h2 className="mt-5 text-[clamp(2rem,4.2vw,3.4rem)] font-extrabold tracking-[-0.035em]">
                From brief to launch,{" "}
                <span className="serif-accent font-normal text-brand">calmly</span>.
              </h2>
            </div>
            <Link
              to="/process"
              className="inline-flex items-center gap-2 font-bold text-foreground underline decoration-brand/60 decoration-2 underline-offset-8 transition-colors hover:decoration-brand"
            >
              See the full process <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="mt-8 grid gap-px overflow-hidden rounded-[1.4rem] border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
            {PROCESS.map((step, i) => (
              <Reveal key={step.num} delay={i * 0.07} className="h-full">
                <Link
                  to="/process"
                  className="group flex h-full flex-col gap-4 bg-card p-6 transition-colors duration-500 hover:bg-secondary"
                >
                  <div className="flex items-center justify-between">
                    <span className="serif-accent text-[1.8rem] leading-none text-brand">
                      {step.num}
                    </span>
                    <span className="rounded-full border border-border px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                      {step.duration}
                    </span>
                  </div>
                  <div className="mt-auto">
                    <h3 className="text-base font-extrabold tracking-tight transition-transform duration-300 group-hover:translate-x-1">
                      {step.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-[0.82rem] leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= VELOCITY OUTRO STRIP ================= */}
      <section className="overflow-hidden py-6 md:py-10" aria-hidden>
        <VelocityWord className="w-full">
          <p className="text-outline whitespace-nowrap text-[clamp(4rem,13vw,12rem)] font-extrabold uppercase leading-none tracking-[-0.02em]">
            Clean · Fast · Human&nbsp;&nbsp;Clean · Fast · Human
          </p>
        </VelocityWord>
      </section>
    </>
  );
}
