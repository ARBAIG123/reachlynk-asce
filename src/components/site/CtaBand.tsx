import { ArrowUpRight, Clock, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "react-router";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/site/motion";
import { Brand } from "@/components/site/Brand";
import { buttonVariants } from "@/components/ui/button";

const FEATURES = [
  {
    icon: Clock,
    title: "Quick response",
    desc: "We'll get back to you within 24 hours.",
  },
  {
    icon: ShieldCheck,
    title: "No spam",
    desc: "Your details stay with us, always.",
  },
  {
    icon: Sparkles,
    title: "100% free audit",
    desc: "Get real insights, no strings attached.",
  },
];

export function CtaBand() {
  return (
    <section className="shell pb-8 pt-4 md:pb-12">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] border border-border/80 bg-secondary md:rounded-[2.5rem]">
          <div className="grid gap-0 md:grid-cols-[1.2fr_0.8fr]">
            {/* Left — copy + CTAs */}
            <div className="relative px-8 py-10 sm:px-12 md:px-14 md:py-12">
              <p className="eyebrow text-brand">Ready when you are</p>
              <h2 className="mt-5 max-w-lg text-[clamp(1.6rem,3.5vw,2.4rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-foreground">
                Tell us a little about your{" "}
                <span className="serif-accent font-normal text-brand">venue or business</span>{" "}
                and we&apos;ll come back with{" "}
                <span className="serif-accent font-normal text-brand">honest thoughts and a fixed quote</span>.
              </h2>
              <p className="mt-4 max-w-md text-[0.92rem] leading-relaxed text-muted-foreground">
                No pressure, no spam — and the audit is genuinely free.
                Usually within one business day.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  to="/contact?mode=project"
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "group h-[50px] gap-2 rounded-full px-7 text-[0.95rem] font-bold",
                  )}
                >
                  Start a project
                  <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
                </Link>
                <Link
                  to="/contact?mode=audit"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "h-[50px] rounded-full border-foreground/25 bg-transparent px-7 text-[0.95rem] font-bold",
                  )}
                >
                  Get a free website audit
                  <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
                </Link>
              </div>
            </div>

            {/* Right — features */}
            <div className="flex flex-col justify-center gap-7 border-t border-border/60 px-8 py-8 md:border-l md:border-t-0 md:px-10 md:py-12">
              {FEATURES.map((feature) => (
                <div key={feature.title} className="flex items-start gap-4">
                  <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full border border-brand/20 text-brand">
                    <feature.icon className="size-4" />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-foreground/70">
                      {feature.title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex items-center justify-between border-t border-border/60 px-8 py-4 sm:px-12 md:px-14">
            <Brand className="opacity-60" />
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-muted-foreground/50">
              Let&apos;s build something great.
              <ArrowUpRight className="ml-1 inline size-3.5" />
            </span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
