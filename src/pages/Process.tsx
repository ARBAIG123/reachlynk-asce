import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Link } from "react-router";
import { MaskLine, Reveal } from "@/components/site/motion";
import { PROCESS } from "@/lib/content";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const GUARANTEES = [
  "Fixed price, agreed before we start — and unchanged after",
  "A launch date in your proposal, treated as a promise",
  "Unlimited revision rounds while we build",
  "You own everything: code, content, domain, accounts",
];

export default function Process() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="pb-12 pt-36 md:pb-16 md:pt-44">
        <div className="shell">
          <p className="eyebrow flex items-center gap-3 text-brand">
            <span className="h-px w-8 bg-brand/60" />
            Our process
          </p>
          <h1 className="mt-7 max-w-5xl text-[clamp(2.9rem,6.8vw,5.8rem)] font-extrabold leading-[0.99] tracking-[-0.04em]">
            <MaskLine>A process you can</MaskLine>
            <MaskLine delay={0.1}>
              <span className="serif-accent font-normal text-brand">actually follow</span> — no
            </MaskLine>
            <MaskLine delay={0.2}>black boxes, no jargon.</MaskLine>
          </h1>
          <Reveal delay={0.35}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              From first call to launch day, here&apos;s exactly what happens, when, and what
              you get at every step. Most projects run five to six weeks total.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ================= STEPS ================= */}
      <section className="shell pb-24 md:pb-32">
        <div className="grid gap-16 lg:grid-cols-[0.72fr_1.28fr]">
          {/* sticky rail */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[1.8rem] border border-border bg-card p-8">
              <p className="eyebrow text-muted-foreground">The journey</p>
              <ol className="mt-6 flex flex-col">
                {PROCESS.map((step, i) => (
                  <li key={step.num} className="flex items-baseline gap-4 border-t border-border/70 py-4 first:border-0 first:pt-0">
                    <span className="serif-accent text-[1.35rem] leading-none text-brand">
                      {step.num}
                    </span>
                    <span className="text-[1.15rem] font-extrabold tracking-tight">
                      {step.title}
                    </span>
                    <span className="ml-auto text-[0.7rem] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                      {step.duration}
                    </span>
                  </li>
                ))}
              </ol>
              <div className="mt-6 rounded-2xl bg-secondary p-5">
                <p className="text-[0.85rem] leading-relaxed text-muted-foreground">
                  <span className="font-extrabold text-foreground">Total: 5–6 weeks</span>{" "}
                  from kickoff to launch — most sites go live in month one.
                </p>
              </div>
            </div>
            <div className="mt-6 hidden rounded-[1.8rem] bg-secondary p-8 lg:block">
              <p className="serif-accent text-[1.5rem] leading-snug">
                “The calmest project we&apos;ve ever run. We always knew what was happening
                next.”
              </p>
              <p className="mt-4 text-xs font-bold text-muted-foreground">
                — A very relieved client
              </p>
            </div>
          </div>

          {/* steps */}
          <div>
            {PROCESS.map((step, i) => (
              <article
                key={step.num}
                className="group grid gap-8 border-b border-border/80 py-14 first:pt-0 md:py-16 lg:grid-cols-[8rem_1fr] lg:gap-12"
              >
                <div>
                  <Reveal y={16}>
                    <span className="serif-accent block text-[clamp(3.6rem,6vw,5.4rem)] leading-none text-brand/25 transition-colors duration-500 group-hover:text-brand/60">
                      {step.num}
                    </span>
                  </Reveal>
                </div>
                <div>
                  <Reveal delay={0.06}>
                    <div className="flex flex-wrap items-center gap-4">
                      <h2 className="text-[clamp(1.8rem,3.4vw,2.9rem)] font-extrabold tracking-[-0.03em]">
                        {step.title}
                      </h2>
                      <span className="rounded-full border border-border bg-card px-3.5 py-1.5 text-[0.7rem] font-extrabold uppercase tracking-[0.14em] text-muted-foreground">
                        {step.duration}
                      </span>
                    </div>
                  </Reveal>
                  <Reveal delay={0.12}>
                    <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </Reveal>
                  <Reveal delay={0.18}>
                    <ul className="mt-6 flex flex-wrap gap-2.5">
                      {step.deliverables.map((d) => (
                        <li
                          key={d}
                          className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-[0.85rem] font-bold text-foreground/85"
                        >
                          <Check className="size-3.5 text-brand" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                </div>
              </article>
            ))}

            <Reveal delay={0.1}>
              <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-[1.8rem] border border-border bg-secondary/60 p-8 sm:flex-row sm:items-center md:p-10">
                <div>
                  <h3 className="text-[1.5rem] font-extrabold tracking-tight">
                    Week six looks good on you.
                  </h3>
                  <p className="mt-2 text-sm font-medium text-muted-foreground">
                    Tell us about your project and we&apos;ll map it onto this process — with
                    dates.
                  </p>
                </div>
                <Link
                  to="/contact?mode=project"
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "group h-[52px] shrink-0 gap-2 rounded-full px-7 text-base font-bold",
                  )}
                >
                  Start the process <ArrowRight className="size-5" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= GUARANTEES ================= */}
      <section className="border-t border-border/70 bg-card/60 py-24 md:py-28">
        <div className="shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="eyebrow flex items-center gap-3 text-brand">
              <span className="h-px w-8 bg-brand/60" />
              Written down
            </p>
            <h2 className="mt-6 text-[clamp(2rem,4.2vw,3.4rem)] font-extrabold leading-[1.02] tracking-[-0.035em]">
              Four promises, in{" "}
              <span className="serif-accent font-normal text-brand">your proposal</span>.
            </h2>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {GUARANTEES.map((g, i) => (
              <Reveal key={g} delay={i * 0.06}>
                <li className="flex h-full items-start gap-4 rounded-2xl border border-border bg-card p-6">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
                    <Check className="size-4 text-brand" />
                  </span>
                  <p className="pt-1 text-[0.95rem] font-bold leading-relaxed text-foreground/85">
                    {g}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
        <div className="shell mt-14 flex justify-center">
          <Link
            to="/contact?mode=audit"
            className="group inline-flex items-center gap-2.5 rounded-full border border-foreground/25 bg-transparent px-7 py-4 text-base font-bold transition-colors hover:border-foreground/50"
          >
            See how your site scores first
            <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
          </Link>
        </div>
      </section>
    </>
  );
}
