import { ArrowRight, ArrowUpRight } from "lucide-react";
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

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="eyebrow flex items-center gap-3 text-brand">
      <span className="h-px w-8 bg-brand/60" />
      {children}
    </p>
  );
}

export default function Landing() {
  const heroProject = PROJECTS[0];

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden pb-12 pt-32 md:pb-20 md:pt-40">
        {/* Slow-moving Reachlynk background text */}
        <VelocityWord
          strength={0.4}
          className="absolute -right-[8%] top-10 hidden select-none lg:block"
        >
          <span className="text-outline block text-[12rem] font-extrabold uppercase leading-none tracking-[-0.03em] opacity-[0.12]">
            Reachlynk
          </span>
        </VelocityWord>
        <span
          aria-hidden
          className="animate-spin-slower absolute -left-24 top-40 hidden size-[22rem] rounded-full border-[1.5px] border-dashed border-foreground/10 lg:block"
        />

        <div className="shell relative">
          <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10">
            {/* copy */}
            <div className="relative z-10">
              <Reveal y={14}>
                <p className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card/70 px-4 py-2 text-[0.85rem] font-bold text-foreground">
                  <span className="size-2 rounded-full bg-brand" />
                  Modern websites that help businesses grow
                </p>
              </Reveal>

              <h1 className="mt-7 text-[clamp(3rem,7.5vw,6.5rem)] font-extrabold leading-[0.97] tracking-[-0.04em] text-foreground">
                <MaskLine>Websites that help</MaskLine>
                <MaskLine delay={0.09}>
                  businesses{" "}
                  <span className="serif-accent font-normal text-brand">grow</span>
                </MaskLine>
                <MaskLine delay={0.18}>— fast, clean &amp; human.</MaskLine>
              </h1>

              <Reveal delay={0.35} y={22}>
                <p className="mt-7 max-w-lg text-lg leading-relaxed text-muted-foreground md:text-xl">
                  Reachlynk builds modern, high-performance websites for restaurants,
                  cafés, hotels, and local businesses — without the bloat, the jargon,
                  or the mystery invoices.
                </p>
              </Reveal>

              <Reveal delay={0.45} y={22}>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <Link
                    to="/contact?mode=project"
                    className={cn(
                      buttonVariants({ variant: "default" }),
                      "group h-[60px] gap-2.5 rounded-full px-9 text-lg font-bold",
                    )}
                  >
                    Start a project
                    <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
                  </Link>
                  <Link
                    to="/contact?mode=audit"
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "h-[60px] rounded-full border-foreground/25 bg-transparent px-9 text-lg font-bold",
                    )}
                  >
                    Get a free website audit
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* visual */}
            <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
              <div className="relative">
                <span
                  aria-hidden
                  className="absolute -right-5 -top-5 hidden rounded-[1.6rem] bg-secondary md:block md:h-full md:w-full md:rotate-[3.5deg]"
                />
                <ClipReveal className="relative">
                  <Parallax distance={18}>
                    <BrowserMock project={heroProject} />
                  </Parallax>
                </ClipReveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CLIENT MARQUEE ================= */}
      <section className="border-y border-border/70 bg-secondary/70 py-6">
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
      <section className="shell py-16 md:py-22">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.15fr]">
          <div>
            <SectionEyebrow>Proof, not promises</SectionEyebrow>
            <h2 className="mt-5 text-[clamp(2.2rem,4.5vw,3.8rem)] font-extrabold leading-[1.03] tracking-[-0.035em]">
              Numbers we&apos;re happy to{" "}
              <span className="serif-accent font-normal text-brand">stand behind</span>.
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {STATS.map((stat, i) => (
              <Reveal
                key={stat.label}
                delay={i * 0.08}
                className="flex flex-col justify-between gap-3 rounded-[1.4rem] border border-border bg-secondary/60 p-7 md:p-9"
              >
                <span className="serif-accent text-[1.15rem] text-brand">0{i + 1}</span>
                <span className="text-[clamp(2.6rem,5vw,4.2rem)] font-extrabold leading-none tracking-[-0.03em] text-foreground">
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
      <section className="border-t border-border/70 bg-card/60 py-16 md:py-22">
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <SectionEyebrow>How it works</SectionEyebrow>
              <h2 className="mt-5 text-[clamp(2.2rem,4.5vw,3.8rem)] font-extrabold tracking-[-0.035em]">
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

          <div className="mt-10 grid gap-px overflow-hidden rounded-[1.6rem] border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
            {PROCESS.map((step, i) => (
              <Reveal key={step.num} delay={i * 0.07} className="h-full">
                <Link
                  to="/process"
                  className="group flex h-full flex-col gap-5 bg-card p-7 transition-colors duration-500 hover:bg-secondary"
                >
                  <div className="flex items-center justify-between">
                    <span className="serif-accent text-[2rem] leading-none text-brand">
                      {step.num}
                    </span>
                    <span className="rounded-full border border-border px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                      {step.duration}
                    </span>
                  </div>
                  <div className="mt-auto">
                    <h3 className="text-lg font-extrabold tracking-tight transition-transform duration-300 group-hover:translate-x-1">
                      {step.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-[0.85rem] leading-relaxed text-muted-foreground">
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
      <section className="overflow-hidden py-8 md:py-12" aria-hidden>
        <VelocityWord className="w-full">
          <p className="text-outline whitespace-nowrap text-[clamp(4rem,13vw,12rem)] font-extrabold uppercase leading-none tracking-[-0.02em]">
            Clean · Fast · Human&nbsp;&nbsp;Clean · Fast · Human
          </p>
        </VelocityWord>
      </section>
    </>
  );
}
