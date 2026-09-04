import { motion } from "framer-motion";
import { ArrowUpRight, CalendarCheck, Clock3, FileSearch, Mail, MapPin, Sparkles } from "lucide-react";
import { Link, useSearchParams } from "react-router";
import { ProjectInquiryForm, type InquiryMode } from "@/components/site/ProjectInquiryForm";
import { MaskLine, Reveal } from "@/components/site/motion";
import { SITE } from "@/lib/content";
import { cn } from "@/lib/utils";

const NEXT_STEPS = [
  {
    title: "We read it, personally",
    desc: "A real person replies within one business day — usually Elena or Tomás, not a sales queue.",
  },
  {
    title: "A 20-minute call",
    desc: "We ask sharp questions about your goals, audience and budget. You'll leave clearer than you arrived.",
  },
  {
    title: "A fixed proposal",
    desc: "Within a week: scope, price, dates — in writing. No obligation, and the advice stands even if you walk.",
  },
];

const AUDIT_COVERS = [
  "Menu, booking & contact paths — where customers get stuck",
  "Speed & mobile experience on real phones",
  "Google visibility: maps, reviews & local search",
  "Design & trust signals on your key pages",
  "The three highest-impact fixes, prioritized",
];

function ModeSwitcher({ mode }: { mode: InquiryMode }) {
  const [, setSearchParams] = useSearchParams();
  return (
    <div className="inline-flex rounded-full border border-border bg-card p-1.5">
      {(
        [
          { key: "project", label: "Start a project" },
          { key: "audit", label: "Get a free audit" },
        ] as { key: InquiryMode; label: string }[]
      ).map((item) => {
        const active = mode === item.key;
        return (
          <button
            key={item.key}
            type="button"
            onClick={() => setSearchParams({ mode: item.key }, { replace: true })}
            className={cn(
              "relative rounded-full px-5 py-2.5 text-[0.92rem] font-bold transition-colors duration-300",
              active ? "text-background" : "text-muted-foreground hover:text-foreground",
            )}
          >
            {active && (
              <motion.span
                layoutId="contact-mode-pill"
                transition={{ type: "spring", bounce: 0.18, duration: 0.55 }}
                className="absolute inset-0 rounded-full bg-foreground"
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              {item.key === "audit" && <Sparkles className="size-4" />}
              {item.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}

export default function Contact() {
  const [searchParams] = useSearchParams();
  const mode: InquiryMode = searchParams.get("mode") === "audit" ? "audit" : "project";
  const isAudit = mode === "audit";

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="pb-8 pt-36 md:pt-44">
        <div className="shell">
          <p className="eyebrow flex items-center gap-3 text-brand">
            <span className="h-px w-8 bg-brand/60" />
            {isAudit ? "Free website audit" : "Contact"}
          </p>
          <h1 className="mt-7 max-w-4xl text-[clamp(2.7rem,6.2vw,5.4rem)] font-extrabold leading-[0.99] tracking-[-0.04em]">
            <MaskLine key={`${mode}-line-1`}>
              {isAudit ? (
                <>Let&apos;s find out why your site</>
              ) : (
                <>Tell us about your</>
              )}
            </MaskLine>
            <MaskLine key={`${mode}-line-2`} delay={0.1}>
              {isAudit ? (
                <>
                  isn&apos;t <span className="serif-accent font-normal text-brand">working</span>.
                </>
              ) : (
                <>
                  project — we&apos;ll take it{" "}
                  <span className="serif-accent font-normal text-brand">from there</span>.
                </>
              )}
            </MaskLine>
          </h1>
          <Reveal delay={0.3} y={16}>
            <div className="mt-9">
              <ModeSwitcher mode={mode} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= FORM + RAIL ================= */}
      <section className="shell pb-16 md:pb-24">
        <div className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr]">
          <Reveal delay={0.15}>
            <ProjectInquiryForm mode={mode} />
          </Reveal>

          {/* rail */}
          <div className="flex flex-col gap-5">
            {isAudit ? (
              <>
                <div className="rounded-3xl border border-border bg-card p-7">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                    <FileSearch className="size-6" />
                  </span>
                  <h2 className="mt-5 text-xl font-extrabold tracking-tight">
                    What your audit covers
                  </h2>
                  <ul className="mt-4 flex flex-col gap-3">
                    {AUDIT_COVERS.map((item, i) => (
                      <li key={item} className="flex items-start gap-3 text-[0.92rem] font-semibold text-foreground/85">
                        <span className="serif-accent mt-[-2px] text-[1.1rem] leading-none text-brand">
                          0{i + 1}
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex items-center gap-3 rounded-2xl bg-secondary p-4">
                    <Clock3 className="size-5 shrink-0 text-brand" />
                    <p className="text-xs font-semibold leading-relaxed text-muted-foreground">
                      Delivered within two business days, in plain English — whether or not
                      you hire us.
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="rounded-3xl border border-border bg-card p-7">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                    <CalendarCheck className="size-6" />
                  </span>
                  <h2 className="mt-5 text-xl font-extrabold tracking-tight">
                    What happens next
                  </h2>
                  <ol className="mt-5 flex flex-col gap-5">
                    {NEXT_STEPS.map((step, i) => (
                      <li key={step.title} className="relative flex gap-4">
                        <span className="serif-accent text-[1.5rem] leading-none text-brand">
                          0{i + 1}
                        </span>
                        <div>
                          <h3 className="text-[0.95rem] font-extrabold">{step.title}</h3>
                          <p className="mt-1 text-[0.85rem] leading-relaxed text-muted-foreground">
                            {step.desc}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="rounded-3xl bg-secondary p-7">
                  <h2 className="text-lg font-extrabold tracking-tight">In a hurry?</h2>
                  <a
                    href={`mailto:${SITE.email}?subject=${encodeURIComponent("Project inquiry — ")}`}
                    className="mt-3 flex items-center gap-3 font-bold text-brand underline decoration-brand/40 underline-offset-4"
                  >
                    <Mail className="size-4" />
                    {SITE.email}
                  </a>
                  <p className="mt-4 text-xs font-medium leading-relaxed text-muted-foreground">
                    Or skip the form and book a call directly — mention this page and we&apos;ll
                    find 20 minutes this week.
                  </p>
                </div>
              </>
            )}

            <div className="rounded-3xl border border-border bg-card p-7">
              <h2 className="text-lg font-extrabold tracking-tight">Reachlynk Studio</h2>
              <ul className="mt-4 flex flex-col gap-3 text-sm font-semibold text-foreground/80">
                <li className="flex items-center gap-3">
                  <Mail className="size-4 text-brand" />
                  <a href={`mailto:${SITE.email}`} className="hover:text-foreground">
                    {SITE.email}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Clock3 className="size-4 text-brand" />
                  Replies within one business day
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="size-4 text-brand" />
                  Amsterdam · Portland · everywhere
                </li>
              </ul>
              <div className="mt-6 flex items-center gap-2.5 border-t border-border/70 pt-5">
                <span className="serif-accent text-[1.05rem] text-foreground/70">
                  Prefer to browse first?
                </span>
                <Link
                  to="/work"
                  className="inline-flex items-center gap-1 text-sm font-extrabold text-brand underline decoration-brand/40 underline-offset-4"
                >
                  See our work <ArrowUpRight className="size-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
