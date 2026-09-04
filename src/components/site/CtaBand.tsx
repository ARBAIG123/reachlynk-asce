import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { cn } from "@/lib/utils";
import { MaskLine, Reveal } from "@/components/site/motion";
import { buttonVariants } from "@/components/ui/button";

export function CtaBand() {
  return (
    <section className="shell pb-24 pt-8 md:pb-32">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] border border-border/80 bg-secondary px-6 py-16 sm:px-12 md:rounded-[2.5rem] md:px-16 md:py-24">
          {/* subtle oversized asterisk */}
          <span
            aria-hidden
            className="serif-accent pointer-events-none absolute -right-6 -top-14 select-none text-[16rem] leading-none text-brand/15 md:text-[24rem]"
          >
            *
          </span>
          <div className="relative max-w-3xl">
            <p className="eyebrow text-brand">Ready when you are</p>
            <h2 className="mt-5 text-[clamp(2.2rem,5.4vw,4.4rem)] font-extrabold leading-[1.02] tracking-[-0.035em] text-foreground">
              <MaskLine>Let&apos;s make your website</MaskLine>
              <MaskLine delay={0.08}>
                work <span className="serif-accent font-normal text-brand">as hard</span> as you do.
              </MaskLine>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Tell us a little about your business and we&apos;ll come back with honest
              thoughts and a fixed quote — usually within one business day.
            </p>
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
                <ArrowRight className="size-5" />
              </Link>
            </div>
            <p className="mt-7 text-sm font-medium text-muted-foreground">
              No pressure, no spam — and the audit is genuinely free.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
