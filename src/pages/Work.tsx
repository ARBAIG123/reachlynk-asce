import { ArrowRight, ArrowUpRight, Star } from "lucide-react";
import { Link } from "react-router";
import { BrowserMock, MetricChip } from "@/components/site/SiteMock";
import {
  ClipReveal,
  CountUp,
  MaskLine,
  Parallax,
  Reveal,
} from "@/components/site/motion";
import { cn } from "@/lib/utils";
import { PROJECTS, STATS } from "@/lib/content";
import { buttonVariants } from "@/components/ui/button";

const FEATURE_STORY = [
  {
    k: "The challenge",
    t: "Sable & Thyme's menu hid behind a PDF, the site took six seconds to load, and every reservation arrived by phone — usually during the lunch rush. The food was the draw; the website was the obstacle.",
  },
  {
    k: "The approach",
    t: "We rebuilt the site around what a hungry person actually wants: a menu that loads in under a second, photography that makes them book, and a reservation flow short enough to finish between courses elsewhere.",
  },
  {
    k: "The result",
    t: "Reservation requests nearly tripled in the first quarter, the phone stopped ringing mid-service, and the team updates the seasonal menu themselves — in minutes, without touching code.",
  },
];

export default function Work() {
  const featured = PROJECTS[0];
  const rest = PROJECTS.slice(1);

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden pb-14 pt-36 md:pb-20 md:pt-44">
        <span
          aria-hidden
          className="animate-spin-slower absolute -right-28 -top-24 hidden size-[26rem] rounded-full border-[1.5px] border-dashed border-foreground/10 lg:block"
        />
        <div className="shell relative">
          <p className="eyebrow flex items-center gap-3 text-brand">
            <span className="h-px w-8 bg-brand/60" />
            Case studies
          </p>
          <div className="mt-7 max-w-4xl">
            <h1 className="text-[clamp(3rem,7.4vw,6.4rem)] font-extrabold leading-[0.98] tracking-[-0.04em]">
              <MaskLine>Websites that</MaskLine>
              <MaskLine delay={0.1}>
                <span className="serif-accent font-normal text-brand">work</span> — and the
              </MaskLine>
              <MaskLine delay={0.2}>receipts to prove it.</MaskLine>
            </h1>
            <Reveal delay={0.35}>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                A small sample of recent launches, each with the numbers they moved —
                restaurants, cafés, hotels, and local shops. Real venues, real results,
                no stock photography.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.5} y={16}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              {[
                "Restaurants",
                "Cafés",
                "Hotels",
                "Local shops & services",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-card px-4 py-2 text-[0.78rem] font-bold uppercase tracking-[0.12em] text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= FEATURED CASE ================= */}
      <section className="shell pb-20 md:pb-28">
        <div className="overflow-hidden rounded-[2.5rem] border border-border/80 bg-card">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            {/* details */}
            <div className="flex flex-col justify-between gap-10 p-7 sm:p-10 lg:p-12">
              <div>
                <Reveal>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="eyebrow rounded-full bg-brand-soft px-3.5 py-1.5 text-brand">
                      Featured project
                    </span>
                    <span className="text-sm font-semibold text-muted-foreground">
                      {featured.industry} · {featured.year}
                    </span>
                  </div>
                </Reveal>
                <Reveal delay={0.08}>
                  <h2 className="mt-7 text-[clamp(2.4rem,4.4vw,4rem)] font-extrabold leading-[1.02] tracking-[-0.035em]">
                    {featured.name}
                  </h2>
                </Reveal>
                <Reveal delay={0.16}>
                  <p className="serif-accent mt-4 text-[1.4rem] leading-snug text-foreground/85">
                    {featured.tagline}
                  </p>
                </Reveal>
                <div className="mt-8 flex items-baseline gap-4 border-y border-border/70 py-6">
                  <span className="text-[clamp(2.8rem,5vw,4.4rem)] font-extrabold tracking-tight text-brand">
                    {featured.metric}
                  </span>
                  <span className="max-w-[15rem] text-sm font-semibold leading-snug text-muted-foreground">
                    {featured.metricLabel}
                  </span>
                </div>
                <div className="mt-7 space-y-5">
                  {FEATURE_STORY.map((s, i) => (
                    <Reveal key={s.k} delay={0.1 + i * 0.07} y={14}>
                      <div className="grid grid-cols-[6.5rem_1fr] gap-4">
                        <span className="eyebrow pt-0.5 text-brand">{s.k}</span>
                        <p className="text-[0.95rem] leading-relaxed text-muted-foreground">
                          {s.t}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>

              <Reveal delay={0.2}>
                <div className="flex flex-wrap items-center gap-2">
                  {featured.services.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border px-3.5 py-1.5 text-xs font-bold text-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* visual */}
            <div className="relative bg-secondary/70 p-6 sm:p-8 lg:p-10">
              <div className="lg:sticky lg:top-28">
                <ClipReveal>
                  <Parallax distance={22}>
                    <BrowserMock project={featured} />
                  </Parallax>
                </ClipReveal>
                <MetricChip
                  project={featured}
                  className="mt-6 max-w-[18rem] sm:absolute sm:-right-2 sm:top-10 sm:mt-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ALL CASES ================= */}
      <section className="shell pb-20 md:pb-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="text-[clamp(2rem,4.4vw,3.6rem)] font-extrabold leading-[1.02] tracking-[-0.035em]">
            More recent{" "}
            <span className="serif-accent font-normal text-brand">launches</span>
          </h2>
          <Reveal>
            <Link
              to="/contact?mode=project"
              className="inline-flex items-center gap-2 font-bold text-foreground underline decoration-brand/60 decoration-2 underline-offset-8 transition-colors hover:decoration-brand"
            >
              Start a project like these <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-8">
          {rest.map((project, i) => (
            <article
              key={project.slug}
              className="grid items-center gap-10 border-t border-border/80 py-14 lg:grid-cols-[1fr_1.05fr] lg:gap-16 lg:py-20"
            >
              {/* copy */}
              <div className={cn(i % 2 === 1 && "lg:order-2")}>
                <Reveal y={16}>
                  <span className="serif-accent text-[clamp(3rem,6vw,5rem)] leading-none text-brand/25">
                    0{i + 2}
                  </span>
                </Reveal>
                <Reveal delay={0.06}>
                  <p className="eyebrow mt-3 text-muted-foreground">
                    {project.category} · {project.industry} · {project.year}
                  </p>
                </Reveal>
                <Reveal delay={0.12}>
                  <h3 className="mt-4 text-[clamp(1.9rem,3.6vw,3.2rem)] font-extrabold tracking-[-0.03em]">
                    {project.name}
                    <span className="text-brand">.</span>
                  </h3>
                </Reveal>
                <Reveal delay={0.18}>
                  <p className="serif-accent mt-3 text-[1.3rem] leading-snug text-foreground/85">
                    {project.tagline}
                  </p>
                </Reveal>
                <Reveal delay={0.24}>
                  <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-muted-foreground">
                    {project.summary}
                  </p>
                </Reveal>
                <Reveal delay={0.3}>
                  <div className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-4">
                    <div>
                      <p className="text-[2.2rem] font-extrabold leading-none tracking-tight text-brand">
                        {project.metric}
                      </p>
                      <p className="mt-1.5 max-w-[13rem] text-xs font-semibold leading-snug text-muted-foreground">
                        {project.metricLabel}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.services.map((s) => (
                        <span
                          key={s}
                          className="rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-bold"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* visual */}
              <div className={cn("relative", i % 2 === 1 && "lg:order-1")}>
                <span
                  aria-hidden
                  className={cn(
                    "absolute inset-0 -z-10 rounded-[2.2rem] bg-secondary",
                    i % 2 === 0 ? "rotate-2" : "-rotate-2",
                  )}
                />
                <ClipReveal>
                  <Parallax distance={26}>
                    <BrowserMock project={project} />
                  </Parallax>
                </ClipReveal>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ================= RESULTS STRIP ================= */}
      <section className="border-y border-border/70 bg-secondary/70 py-16 md:py-20">
        <div className="shell grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.07} className="text-center lg:text-left">
              <p className="text-[clamp(2.4rem,4.6vw,3.6rem)] font-extrabold leading-none tracking-[-0.03em] text-foreground">
                <CountUp
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={"decimals" in stat ? (stat.decimals as number) : 0}
                />
              </p>
              <p className="mx-auto mt-2.5 max-w-[12rem] text-xs font-semibold leading-snug text-muted-foreground lg:mx-0">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= CLOSING QUOTE + CTA ================= */}
      <section className="shell py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <div className="flex justify-center gap-1.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-5 fill-brand text-brand" />
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <blockquote className="mt-8 text-[clamp(1.5rem,3.2vw,2.6rem)] font-extrabold leading-snug tracking-[-0.02em]">
              “The website books more tables than our best server ever did — and it
              never takes a day off.”
            </blockquote>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-sm font-bold text-muted-foreground">
              — A restaurant owner, after a Reachlynk launch
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <Link
              to="/contact?mode=project"
              className={cn(
                buttonVariants({ variant: "default" }),
                "group mx-auto mt-12 inline-flex h-[54px] gap-2.5 rounded-full px-8 text-base font-bold",
              )}
            >
              Your project could be case #141
              <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
            </Link>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="mt-6 flex items-center justify-center gap-6 text-sm font-bold text-muted-foreground">
              <Link to="/process" className="underline decoration-brand/60 decoration-2 underline-offset-4 transition-colors hover:text-foreground">
                How we work
              </Link>
              <span className="size-1 rounded-full bg-brand" />
              <Link to="/pricing" className="underline decoration-brand/60 decoration-2 underline-offset-4 transition-colors hover:text-foreground">
                What it costs
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
