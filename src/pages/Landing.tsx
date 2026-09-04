import { ArrowRight, ArrowUpRight, Star } from "lucide-react";
import { Link } from "react-router";
import { BrowserMock, MetricChip } from "@/components/site/SiteMock";
import {
  ClipReveal,
  CountUp,
  HorizontalScroll,
  Marquee,
  MaskLine,
  Parallax,
  PinnedPhrases,
  Reveal,
  VelocityWord,
} from "@/components/site/motion";
import { cn } from "@/lib/utils";
import {
  CLIENT_MARQUEE,
  PROCESS,
  PROJECTS,
  SERVICES,
  STATS,
  TESTIMONIALS,
} from "@/lib/content";
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
  const workProjects = PROJECTS.slice(0, 4);

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden pb-16 pt-36 md:pb-24 md:pt-44">
        {/* faint oversized backdrop word */}
        <VelocityWord
          strength={0.8}
          className="absolute -right-[6%] top-16 hidden select-none lg:block"
        >
          <span className="text-outline block text-[11rem] font-extrabold uppercase leading-none tracking-[-0.03em]">
            Reach
          </span>
        </VelocityWord>
        <span
          aria-hidden
          className="animate-spin-slower absolute -left-24 top-40 hidden size-[22rem] rounded-full border-[1.5px] border-dashed border-foreground/10 lg:block"
        />

        <div className="shell relative">
          <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10">
            {/* copy */}
            <div className="relative z-10">
              <Reveal y={14}>
                <p className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card/70 px-4 py-2 text-[0.82rem] font-bold text-foreground">
                  <span className="size-2 rounded-full bg-brand" />
                  Websites for restaurants, cafés, hotels &amp; local businesses
                </p>
              </Reveal>

              <h1 className="mt-7 text-[clamp(2.9rem,7vw,6rem)] font-extrabold leading-[0.98] tracking-[-0.04em] text-foreground">
                <MaskLine>Websites that bring</MaskLine>
                <MaskLine delay={0.09}>
                  customers{" "}
                  <span className="serif-accent font-normal text-brand">through the door</span>
                </MaskLine>
                <MaskLine delay={0.18}>— online and in person.</MaskLine>
              </h1>

              <Reveal delay={0.35} y={22}>
                <p className="mt-7 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
                  Reachlynk designs and builds fast, honest websites that turn
                  browsers into reservations, orders and regulars — without the
                  bloat, the jargon, or the mystery invoices.
                </p>
              </Reveal>

              <Reveal delay={0.45} y={22}>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Link
                    to="/contact?mode=project"
                    className={cn(
                      buttonVariants({ variant: "default" }),
                      "group h-[54px] gap-2.5 rounded-full px-7 text-base font-bold",
                    )}
                  >
                    Start a project
                    <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
                  </Link>
                  <Link
                    to="/contact?mode=audit"
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "h-[54px] rounded-full border-foreground/25 bg-transparent px-7 text-base font-bold",
                    )}
                  >
                    Get a free website audit
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={0.58} y={16}>
                <div className="mt-10 flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {["EM", "TO", "SL", "JC"].map((initials, i) => (
                      <span
                        key={initials}
                        className={cn(
                          "flex size-9 items-center justify-center rounded-full border-2 border-background text-[0.62rem] font-extrabold text-background",
                          ["bg-foreground", "bg-brand", "bg-muted-foreground", "bg-foreground/70"][i],
                        )}
                      >
                        {initials}
                      </span>
                    ))}
                  </div>
                  <div className="text-sm font-medium text-muted-foreground">
                    <span className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="size-3.5 fill-brand text-brand" />
                      ))}
                    </span>
                    Trusted by 40+ venues &amp; local businesses
                  </div>
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
                <MetricChip
                  project={heroProject}
                  className="absolute -left-4 bottom-14 z-10 hidden max-w-[17rem] md:flex lg:-left-12"
                />
                <div className="animate-float-slower absolute -right-3 top-8 z-10 hidden items-center gap-2 rounded-2xl border border-border/80 bg-card px-4 py-3 md:flex">
                  <span className="text-[1.5rem] font-extrabold text-brand">98</span>
                  <span className="text-[0.72rem] font-bold leading-tight text-muted-foreground">
                    Avg. Lighthouse
                    <br />
                    performance score
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CLIENT MARQUEE ================= */}
      <section className="border-y border-border/70 bg-secondary/70 py-7">
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

      {/* ================= SERVICES ================= */}
      <section className="shell py-24 md:py-36">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <SectionEyebrow>What we do</SectionEyebrow>
            <h2 className="mt-6 text-[clamp(2.2rem,4.6vw,3.9rem)] font-extrabold leading-[1.02] tracking-[-0.035em]">
              <MaskLine>Everything a website</MaskLine>
              <MaskLine delay={0.08}>
                needs to{" "}
                <span className="serif-accent font-normal text-brand">earn its keep</span>.
              </MaskLine>
            </h2>
          </div>
          <Reveal delay={0.15}>
            <p className="max-w-md leading-relaxed text-muted-foreground lg:justify-self-end">
              One small team from strategy to launch — design, code, words and care.
              Restaurants, cafés, hotels, shops and local businesses: no hand-offs to
              strangers, no scope creep, no 40-page decks.
            </p>
            <Link
              to="/services"
              className="mt-5 inline-flex items-center gap-2 font-bold text-foreground underline decoration-brand/60 decoration-2 underline-offset-8 transition-colors hover:decoration-brand"
            >
              Explore all services <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 border-t border-border/80">
          {SERVICES.map((service, i) => (
            <Reveal key={service.num} delay={i * 0.05} y={18}>
              <Link
                to="/services"
                className="group grid grid-cols-[2.6rem_1fr_auto] items-baseline gap-x-4 gap-y-1 border-b border-border/80 py-6 transition-colors duration-300 hover:bg-secondary/60 md:grid-cols-[4rem_1fr_auto] md:gap-x-8 md:py-8 md:px-4"
              >
                <span className="eyebrow text-muted-foreground transition-colors group-hover:text-brand">
                  {service.num}
                </span>
                <span className="flex flex-col gap-1.5">
                  <span className="text-[clamp(1.45rem,3vw,2.4rem)] font-extrabold tracking-[-0.02em] text-foreground transition-transform duration-500 group-hover:translate-x-1">
                    {service.title}
                  </span>
                  <span className="hidden max-w-2xl text-[0.95rem] leading-relaxed text-muted-foreground md:block">
                    {service.description}
                  </span>
                </span>
                <span className="flex size-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all duration-500 group-hover:rotate-45 group-hover:border-foreground group-hover:bg-foreground group-hover:text-background">
                  <ArrowUpRight className="size-5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= SELECTED WORK — pinned horizontal ================= */}
      <section className="bg-secondary/55 py-24 md:py-32">
        <div className="shell flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionEyebrow>Selected work</SectionEyebrow>
            <h2 className="mt-6 text-[clamp(2.2rem,4.6vw,3.9rem)] font-extrabold leading-[1.02] tracking-[-0.035em]">
              Recent launches,{" "}
              <span className="serif-accent font-normal text-brand">real results</span>.
            </h2>
          </div>
          <Reveal>
            <Link
              to="/work"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "group h-12 rounded-full border-foreground/25 bg-transparent px-6 font-bold",
              )}
            >
              All case studies
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
            </Link>
          </Reveal>
        </div>

        {/* pinned horizontal — desktop */}
        <div className="mt-16 hidden lg:block">
          <HorizontalScroll height="320vh">
            {workProjects.map((project, i) => (
              <WorkCard key={project.slug} project={project} index={i} />
            ))}
            {/* end card */}
            <Link
              to="/work"
              className="group ml-8 flex h-[70vh] w-[34rem] shrink-0 flex-col items-center justify-center gap-6 rounded-[2rem] border-2 border-dashed border-foreground/25 p-12 text-center transition-colors duration-500 hover:border-brand hover:bg-brand-soft/50"
            >
              <span className="serif-accent text-[3.4rem] leading-none text-brand">*</span>
              <span className="text-[1.6rem] font-extrabold tracking-tight">
                Your website could be next.
              </span>
              <span className="max-w-[20rem] text-sm leading-relaxed text-muted-foreground">
                We take on a handful of projects each quarter. See the full portfolio —
                or start yours today.
              </span>
              <span className="mt-2 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-bold text-background transition-transform duration-500 group-hover:scale-[1.03]">
                Explore the work <ArrowRight className="size-4" />
              </span>
            </Link>
          </HorizontalScroll>
        </div>

        {/* stacked fallback — mobile / tablet */}
        <div className="shell mt-12 grid gap-8 sm:grid-cols-2 lg:hidden">
          {workProjects.map((project, i) => (
            <WorkCard key={project.slug} project={project} index={i} className="w-full" />
          ))}
          <Link
            to="/work"
            className="flex min-h-52 flex-col items-center justify-center gap-3 rounded-[2rem] border-2 border-dashed border-foreground/25 p-8 text-center"
          >
            <span className="serif-accent text-4xl leading-none text-brand">*</span>
            <span className="text-xl font-extrabold">Your website could be next.</span>
            <span className="text-sm text-muted-foreground">See the full portfolio.</span>
          </Link>
        </div>
      </section>

      {/* ================= PINNED MANIFESTO ================= */}
      <PinnedPhrases
        kicker="What we believe"
        phrases={[
          <>
            A hungry visitor should{" "}
            <span className="serif-accent font-normal text-brand">never wait</span> for your
            menu.
          </>,
          <>
            Booking a table should never take more than{" "}
            <span className="serif-accent font-normal text-brand">two taps</span>.
          </>,
          <>
            Design that can&apos;t be measured is just{" "}
            <span className="serif-accent font-normal text-brand">decoration</span>.
          </>,
          <>
            The best website keeps{" "}
            <span className="serif-accent font-normal text-brand">filling tables</span> long
            after launch.
          </>,
        ]}
      />

      {/* ================= STATS + PROOF ================= */}
      <section className="shell py-24 md:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.15fr]">
          <div>
            <SectionEyebrow>Proof, not promises</SectionEyebrow>
            <h2 className="mt-6 text-[clamp(2rem,4vw,3.4rem)] font-extrabold leading-[1.03] tracking-[-0.035em]">
              Numbers we&apos;re happy to{" "}
              <span className="serif-accent font-normal text-brand">stand behind</span>.
            </h2>
            <Reveal delay={0.15}>
              <div className="mt-8 rounded-[1.6rem] border border-border bg-card p-7">
                <p className="serif-accent text-[clamp(1.5rem,2.4vw,2rem)] leading-snug text-foreground">
                  “{TESTIMONIALS[0].quote}”
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-full bg-foreground text-xs font-extrabold text-background">
                    ME
                  </span>
                  <div>
                    <p className="text-sm font-bold">{TESTIMONIALS[0].name}</p>
                    <p className="text-xs font-medium text-muted-foreground">{TESTIMONIALS[0].role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
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
      <section className="border-t border-border/70 bg-card/60 py-24 md:py-28">
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <SectionEyebrow>How it works</SectionEyebrow>
              <h2 className="mt-6 text-[clamp(2rem,4.2vw,3.4rem)] font-extrabold tracking-[-0.035em]">
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

          <div className="mt-14 grid gap-px overflow-hidden rounded-[1.6rem] border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
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
      <section className="overflow-hidden py-14 md:py-20" aria-hidden>
        <VelocityWord className="w-full">
          <p className="text-outline whitespace-nowrap text-[clamp(4rem,13vw,12rem)] font-extrabold uppercase leading-none tracking-[-0.02em]">
            Clean · Fast · Human&nbsp;&nbsp;Clean · Fast · Human
          </p>
        </VelocityWord>
      </section>
    </>
  );
}

// ---------------------------------------------------------------------------

function WorkCard({
  project,
  index,
  className,
}: {
  project: (typeof PROJECTS)[number];
  index: number;
  className?: string;
}) {
  return (
    <Link
      to="/work"
      className={cn(
        "group flex w-[min(82vw,52rem)] shrink-0 flex-col overflow-hidden rounded-[2rem] border border-border/70 bg-card transition-colors duration-500 hover:border-foreground/30",
        className,
      )}
    >
      <div className="relative overflow-hidden bg-secondary p-4 sm:p-6">
        <div className="w-full transition-transform duration-700 ease-out group-hover:scale-[1.02]">
          <BrowserMock project={project} />
        </div>
        <span className="absolute left-7 top-7 z-10 flex items-center gap-2 rounded-full bg-background/90 px-3.5 py-1.5 text-[0.7rem] font-extrabold uppercase tracking-[0.14em] text-foreground backdrop-blur">
          {project.category}
        </span>
      </div>
      <div className="flex flex-col gap-4 p-6 md:p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-[1.35rem] font-extrabold tracking-tight text-foreground">
              {project.name}
            </h3>
            <p className="mt-1 text-sm font-medium text-muted-foreground">{project.tagline}</p>
          </div>
          <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border text-foreground transition-all duration-500 group-hover:rotate-45 group-hover:border-foreground group-hover:bg-foreground group-hover:text-background">
            <ArrowUpRight className="size-5" />
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-x-5 gap-y-2 border-t border-border/70 pt-4">
          <div className="flex items-baseline gap-3">
            <span className="text-[1.7rem] font-extrabold tracking-tight text-brand">
              {project.metric}
            </span>
            <span className="max-w-[15rem] text-xs font-semibold leading-snug text-muted-foreground">
              {project.metricLabel}
            </span>
          </div>
          <span className="eyebrow text-muted-foreground/60">
            0{index + 1} · {project.year}
          </span>
        </div>
      </div>
    </Link>
  );
}
