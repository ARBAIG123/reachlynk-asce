import { ArrowRight, ArrowUpRight, Check, X } from "lucide-react";
import { Link } from "react-router";
import { MaskLine, Reveal } from "@/components/site/motion";
import { cn } from "@/lib/utils";
import { SERVICES } from "@/lib/content";
import { buttonVariants } from "@/components/ui/button";

const NOT_OUR_THING = [
  "Snake-oil 'guaranteed page-one' SEO",
  "Six-month timelines for a five-page site",
  "Template reskins sold as custom design",
  "Websites only the developer who built them can edit",
  "'We'll figure out the scope later' agreements",
  "Design by committee across ten stakeholders",
];

const MODELS = [
  {
    title: "Fixed-price projects",
    desc: "The most popular way to work with us. Clear scope, clear price, clear date. What we quote is what you pay.",
    tag: "Most projects",
  },
  {
    title: "Care retainers",
    desc: "Already happy with your site? A monthly plan keeps it fast, fresh and secure — with a real human on call.",
    tag: "After launch",
  },
  {
    title: "Focused sprints",
    desc: "A landing page for a campaign, a pricing page rebuild, a conversion audit. One clear deliverable in two weeks or less.",
    tag: "Quick wins",
  },
];

export default function Services() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="pb-10 pt-36 md:pb-14 md:pt-44">
        <div className="shell">
          <p className="eyebrow flex items-center gap-3 text-brand">
            <span className="h-px w-8 bg-brand/60" />
            Services
          </p>
          <div className="mt-7 max-w-4xl">
            <h1 className="text-[clamp(2.9rem,6.8vw,5.8rem)] font-extrabold leading-[0.99] tracking-[-0.04em]">
              <MaskLine>Everything a website</MaskLine>
              <MaskLine delay={0.1}>
                needs to{" "}
                <span className="serif-accent font-normal text-brand">earn its keep</span> —
              </MaskLine>
              <MaskLine delay={0.2}>nothing it doesn&apos;t.</MaskLine>
            </h1>
          </div>
          <Reveal delay={0.35}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              One team from the first conversation to the launch toast: design, code,
              words and care. Everything below is available standalone or bundled into
              a single fixed-price project.
            </p>
          </Reveal>
          <Reveal delay={0.45}>
            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm font-bold text-foreground">
              <span className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5">
                <Check className="size-4 text-brand" /> Fixed quotes, no hourly meters
              </span>
              <span className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5">
                <Check className="size-4 text-brand" /> Launch dates we actually keep
              </span>
              <span className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5">
                <Check className="size-4 text-brand" /> Built so you can edit it
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= SERVICE CARDS ================= */}
      <section className="shell pb-24 md:pb-32">
        <div className="grid gap-5 md:grid-cols-2">
          {SERVICES.map((service, i) => (
            <Reveal
              key={service.num}
              delay={(i % 2) * 0.08}
              className={cn("h-full", i === 0 && "md:col-span-2")}
            >
              <Link
                to="/contact?mode=project"
                className="group relative flex h-full flex-col overflow-hidden rounded-[1.8rem] border border-border bg-card p-8 transition-all duration-500 hover:border-foreground/40 md:p-10"
              >
                <span
                  aria-hidden
                  className="serif-accent pointer-events-none absolute -right-2 -top-10 select-none text-[10rem] leading-none text-foreground/[0.05] transition-colors duration-500 group-hover:text-brand/15 md:text-[13rem]"
                >
                  {service.num}
                </span>

                <div className="relative flex h-full flex-col">
                  <div className="flex items-center gap-4">
                    <span className="eyebrow text-brand">{service.num}</span>
                    <span className="h-px flex-1 bg-border" />
                    <span className="flex size-10 items-center justify-center rounded-full border border-border transition-all duration-500 group-hover:rotate-45 group-hover:border-foreground group-hover:bg-foreground group-hover:text-background">
                      <ArrowUpRight className="size-4" />
                    </span>
                  </div>
                  <h2 className="mt-5 max-w-xl text-[clamp(1.6rem,3vw,2.3rem)] font-extrabold tracking-[-0.02em] text-foreground">
                    {service.title}
                  </h2>
                  <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                    {service.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2.5 text-[0.88rem] font-semibold text-foreground/80"
                      >
                        <Check className="mt-0.5 size-4 shrink-0 text-brand" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <p className="serif-accent mt-auto pt-8 text-[1.1rem] text-foreground/75">
                    {service.note}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= NOT OUR THING ================= */}
      <section className="bg-secondary/70 py-24 md:py-32">
        <div className="shell grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow flex items-center gap-3 text-brand">
              <span className="h-px w-8 bg-brand/60" />
              Straight talk
            </p>
            <h2 className="mt-6 text-[clamp(2rem,4.2vw,3.6rem)] font-extrabold leading-[1.02] tracking-[-0.035em]">
              What we{" "}
              <span className="serif-accent font-normal text-brand">don&apos;t</span> do is
              part of the service.
            </h2>
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
                Every agency has a list of things they sell. Ours is shorter and more
                honest — because saying no to the wrong work is how the right work stays good.
              </p>
            </Reveal>
          </div>
          <ul className="flex flex-col border-t border-border/80">
            {NOT_OUR_THING.map((item, i) => (
              <Reveal key={item} delay={i * 0.05} y={14}>
                <li className="group flex items-center gap-4 border-b border-border/80 py-5">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-foreground/15 text-muted-foreground transition-all duration-300 group-hover:border-destructive group-hover:text-destructive">
                    <X className="size-4" />
                  </span>
                  <span className="text-[1.05rem] font-bold text-foreground/85 transition-transform duration-300 group-hover:translate-x-1 md:text-[1.2rem]">
                    {item}
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ================= ENGAGEMENT MODELS ================= */}
      <section className="shell py-24 md:py-32">
        <p className="eyebrow flex items-center gap-3 text-brand">
          <span className="h-px w-8 bg-brand/60" />
          Ways to work with us
        </p>
        <h2 className="mt-6 max-w-3xl text-[clamp(2rem,4.2vw,3.6rem)] font-extrabold leading-[1.02] tracking-[-0.035em]">
          Three ways in,{" "}
          <span className="serif-accent font-normal text-brand">one standard</span> of work.
        </h2>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {MODELS.map((model, i) => (
            <Reveal key={model.title} delay={i * 0.08} className="h-full">
              <div className="group flex h-full flex-col rounded-[1.8rem] border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-foreground/40">
                <span className="serif-accent text-[1.2rem] text-brand">0{i + 1}</span>
                <span className="mt-4 inline-flex w-fit rounded-full bg-brand-soft px-3 py-1 text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-brand">
                  {model.tag}
                </span>
                <h3 className="mt-4 text-[1.5rem] font-extrabold tracking-tight">{model.title}</h3>
                <p className="mt-3 text-[0.92rem] leading-relaxed text-muted-foreground">
                  {model.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-14 flex flex-col items-center justify-between gap-6 rounded-[2rem] border border-border bg-secondary/60 px-8 py-9 text-center md:flex-row md:text-left md:px-12">
            <div>
              <h3 className="text-[1.6rem] font-extrabold tracking-tight">
                Not sure which fits?{" "}
                <span className="serif-accent font-normal text-brand">Start with a free audit.</span>
              </h3>
              <p className="mt-2 text-sm font-medium text-muted-foreground">
                We'll tell you what your site needs — even if the answer is "nothing yet."
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <Link
                to="/contact?mode=audit"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "h-[52px] rounded-full border-foreground/25 bg-transparent px-7 text-base font-bold",
                )}
              >
                Get a free audit
              </Link>
              <Link
                to="/pricing"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "group h-[52px] rounded-full px-7 text-base font-bold",
                )}
              >
                See pricing <ArrowRight className="size-5" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
