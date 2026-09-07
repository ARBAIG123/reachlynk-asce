import { ArrowUpRight, Check, Crown, Rocket, ShieldCheck, Star } from "lucide-react";
import { Link } from "react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { ADDONS, PLANS, PRICING_FAQS, type Plan } from "@/lib/content";
import { FloatOnScroll, MaskLine, Reveal } from "@/components/site/motion";
import { buttonVariants } from "@/components/ui/button";

const ICONS = { rocket: Rocket, star: Star, crown: Crown } as const;

function PlanCard({ plan, index }: { plan: Plan; index: number }) {
  const Icon = ICONS[plan.icon];
  return (
    <FloatOnScroll amplitude={[14, 24, 18][index]} className="h-full">
      <div
        className={cn(
          "relative flex h-full flex-col rounded-[2rem] bg-card p-8 pt-14 transition-all duration-500 md:p-9 md:pt-16",
          plan.popular
            ? "border-2 border-foreground"
            : "border border-border hover:border-foreground/40",
        )}
      >
        {/* floating tier icon */}
        <span
          className={cn(
            "animate-float-slow absolute -top-7 left-8 flex size-14 items-center justify-center rounded-2xl ring-4 ring-background",
            plan.popular
              ? "bg-foreground text-background"
              : "border border-border bg-brand text-background",
          )}
          style={{ animationDelay: `${index * 1.1}s` }}
        >
          <Icon className="size-6" />
        </span>

        <div className="flex items-center justify-between gap-3">
          <h2 className="text-[1.35rem] font-extrabold tracking-tight">{plan.name}</h2>
          {plan.popular && (
            <span className="flex items-center gap-1.5 rounded-full bg-brand px-3.5 py-1.5 text-[0.68rem] font-extrabold uppercase tracking-[0.12em] text-background">
              <Star className="size-3 fill-background" />
              Most popular
            </span>
          )}
        </div>
        <p className="serif-accent mt-2 text-[1.05rem] leading-snug text-muted-foreground">
          {plan.tagline}
        </p>

        <div className="mt-6 flex items-baseline gap-2">
          <span
            className={cn(
              "text-[clamp(2.7rem,4.4vw,3.7rem)] font-extrabold leading-none tracking-[-0.03em]",
              plan.popular ? "text-brand" : "text-foreground",
            )}
          >
            {plan.price}
          </span>
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
            {plan.cadence}
          </span>
        </div>

        <ul className="mt-7 flex flex-col gap-3 border-t border-border/70 pt-7">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-[0.92rem] font-semibold text-foreground/85">
              <span
                className={cn(
                  "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full",
                  plan.popular ? "bg-brand text-background" : "bg-brand-soft text-brand",
                )}
              >
                <Check className="size-3" />
              </span>
              {feature}
            </li>
          ))}
        </ul>

        <p className="serif-accent mt-7 text-[0.98rem] text-muted-foreground">{plan.note}</p>

        <div className="mt-7 flex flex-1 items-end">
          <Link
            to="/contact?mode=project"
            className={cn(
              buttonVariants({ variant: plan.popular ? "default" : "outline" }),
              "group h-[52px] w-full gap-2 rounded-full text-[0.98rem] font-bold",
              !plan.popular && "border-foreground/30 bg-transparent",
            )}
          >
            {plan.popular ? "Start with Business" : `Choose ${plan.name}`}
            <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
          </Link>
        </div>
      </div>
    </FloatOnScroll>
  );
}

export default function Pricing() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="pb-6 pt-36 md:pt-44">
        <div className="shell text-center">
          <p className="eyebrow inline-flex items-center gap-3 text-brand">
            <span className="h-px w-8 bg-brand/60" />
            Pricing
            <span className="h-px w-8 bg-brand/60" />
          </p>
          <h1 className="mx-auto mt-7 max-w-4xl text-[clamp(2.9rem,6.8vw,5.8rem)] font-extrabold leading-[0.99] tracking-[-0.04em]">
            <MaskLine>Honest prices,</MaskLine>
            <MaskLine delay={0.1}>
              printed <span className="serif-accent font-normal text-brand">before</span> we start.
            </MaskLine>
          </h1>
          <Reveal delay={0.35}>
            <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Fixed quotes, no hourly meters, no "while we're in there" invoices. Pick a
              lane — we&apos;ll tell you if it&apos;s the wrong one, free of charge.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ================= PLANS ================= */}
      <section className="shell pb-8 pt-16 md:pt-22">
        <div className="grid gap-14 sm:gap-10 lg:grid-cols-3 lg:items-stretch lg:gap-6 lg:pt-8">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.12} className="h-full" y={34}>
              <PlanCard plan={plan} index={i} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mx-auto mt-12 flex max-w-2xl flex-wrap items-center justify-center gap-3 text-center">
            {ADDONS.map((addon) => (
              <span
                key={addon.name}
                className="flex items-baseline gap-2.5 rounded-full border border-border bg-card px-4 py-2.5"
              >
                <span className="text-sm font-bold">{addon.name}</span>
                <span className="text-sm font-extrabold text-brand">{addon.price}</span>
                <span className="hidden text-xs text-muted-foreground sm:inline">— {addon.desc}</span>
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mx-auto mt-14 flex max-w-3xl flex-col items-center gap-4 rounded-[1.8rem] border border-border bg-secondary/70 p-8 text-center sm:flex-row sm:gap-8 sm:text-left md:p-10">
            <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-card text-brand">
              <ShieldCheck className="size-7" />
            </span>
            <div>
              <h3 className="text-[1.35rem] font-extrabold tracking-tight">
                Every plan is a fixed-price promise
              </h3>
              <p className="mt-1.5 text-sm font-medium leading-relaxed text-muted-foreground">
                Not sure which fits? Send us your site and we&apos;ll audit it free and point
                you at the right plan — even when that plan is smaller than you expected.
              </p>
            </div>
            <Link
              to="/contact?mode=audit"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "h-[50px] shrink-0 rounded-full border-foreground/25 bg-transparent px-6 font-bold sm:ml-auto",
              )}
            >
              Get a free audit
            </Link>
          </div>
        </Reveal>
      </section>

      {/* ================= FAQ ================= */}
      <section className="shell py-14 md:py-18">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="eyebrow text-brand">Questions</p>
            <h2 className="mt-5 text-[clamp(2rem,4.2vw,3.4rem)] font-extrabold tracking-[-0.035em]">
              Asked <span className="serif-accent font-normal text-brand">often</span>,
              answered honestly.
            </h2>
          </div>
          <Reveal delay={0.15}>
            <Accordion type="single" collapsible className="mt-12">
              {PRICING_FAQS.map((faq, i) => (
                <AccordionItem key={faq.q} value={`faq-${i}`} className="border-b border-border/80">
                  <AccordionTrigger className="py-6 text-left text-[1.05rem] font-extrabold tracking-tight hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-[0.95rem] leading-relaxed text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>
    </>
  );
}
