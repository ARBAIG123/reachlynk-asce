import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { ClipReveal, CountUp, MaskLine, Reveal, VelocityWord } from "@/components/site/motion";
import { BrowserMock, MetricChip } from "@/components/site/SiteMock";
import { cn } from "@/lib/utils";
import { PROJECTS, STATS, TEAM, TIMELINE, VALUES } from "@/lib/content";
import { buttonVariants } from "@/components/ui/button";

export default function About() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="pb-10 pt-36 md:pb-16 md:pt-44">
        <div className="shell grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="eyebrow flex items-center gap-3 text-brand">
              <span className="h-px w-8 bg-brand/60" />
              About Reachlynk
            </p>
            <h1 className="mt-7 text-[clamp(2.8rem,6.4vw,5.4rem)] font-extrabold leading-[0.99] tracking-[-0.04em]">
              <MaskLine>Small studio,</MaskLine>
              <MaskLine delay={0.1}>
                <span className="serif-accent font-normal text-brand">zero</span> corporate
              </MaskLine>
              <MaskLine delay={0.2}>nonsense.</MaskLine>
            </h1>
            <Reveal delay={0.35}>
              <p className="mt-7 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
                We&apos;re eight designers, developers and writers building for
                restaurants, cafés, hotels and local businesses — because we believe
                most websites are overpriced, overbuilt and under-thought. Reachlynk
                exists to fix that, one clean launch at a time.
              </p>
            </Reveal>
            <Reveal delay={0.45}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/contact?mode=project"
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "group h-[52px] gap-2.5 rounded-full px-7 text-base font-bold",
                  )}
                >
                  Start a project
                  <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
                </Link>
                <Link
                  to="/work"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "h-[52px] rounded-full border-foreground/25 bg-transparent px-7 text-base font-bold",
                  )}
                >
                  See our work
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <span
                aria-hidden
                className="absolute -left-5 -top-5 hidden h-full w-full rounded-[2rem] bg-secondary md:block md:-rotate-2"
              />
              <ClipReveal>
                <div className="relative rounded-[2rem] border border-border bg-card p-5">
                  <BrowserMock project={PROJECTS[3]} />
                  <p className="serif-accent mt-4 px-2 pb-2 text-[1.15rem] text-muted-foreground">
                    The studio wall, probably — mockups everywhere.
                  </p>
                </div>
              </ClipReveal>
              <MetricChip
                project={PROJECTS[3]}
                className="absolute -bottom-6 -right-2 z-10 hidden max-w-[17rem] lg:flex"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= STORY ================= */}
      <section className="shell py-20 md:py-24">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="serif-accent text-[clamp(1.7rem,3.4vw,2.7rem)] leading-snug text-foreground">
              Reachlynk started in 2019 when two friends kept watching brilliant
              restaurants, cafés and local shops get fleeced by agencies that charged
              fortunes for bloated, broken websites.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-8 leading-relaxed text-muted-foreground">
              So we built the studio we wished existed: fixed prices written on the
              first call, launch dates treated like promises, and design that
              prioritizes your customer&apos;s time over our portfolio&apos;s drama. Seven
              years later the team is eight people, the standard hasn&apos;t moved, and most
              of our work — from reservations to direct bookings to neighborhood
              orders — still arrives by word of mouth.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 leading-relaxed text-muted-foreground">
              We stay deliberately small and take a limited number of projects each
              quarter. That&apos;s not scarcity theatre — it&apos;s the only way the person you
              talk to on day one is still the person building your site on day forty.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="bg-secondary/70 py-24 md:py-32">
        <div className="shell">
          <p className="eyebrow flex items-center gap-3 text-brand">
            <span className="h-px w-8 bg-brand/60" />
            What we believe
          </p>
          <h2 className="mt-6 max-w-3xl text-[clamp(2rem,4.2vw,3.6rem)] font-extrabold leading-[1.02] tracking-[-0.035em]">
            Four rules we don&apos;t break,{" "}
            <span className="serif-accent font-normal text-brand">even for big clients</span>.
          </h2>
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {VALUES.map((value, i) => (
              <Reveal key={value.title} delay={(i % 2) * 0.08} className="h-full">
                <div className="group flex h-full flex-col rounded-[1.8rem] border border-border bg-card p-8 transition-all duration-500 hover:border-foreground/40 md:p-9">
                  <span className="serif-accent text-[2.4rem] leading-none text-brand">
                    0{i + 1}
                  </span>
                  <h3 className="mt-5 text-[1.5rem] font-extrabold tracking-tight">
                    {value.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{value.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TIMELINE ================= */}
      <section className="shell py-24 md:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow flex items-center gap-3 text-brand">
              <span className="h-px w-8 bg-brand/60" />
              The story so far
            </p>
            <h2 className="mt-6 text-[clamp(2rem,4.2vw,3.6rem)] font-extrabold leading-[1.02] tracking-[-0.035em]">
              Seven years,{" "}
              <span className="serif-accent font-normal text-brand">one standard</span>.
            </h2>
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-sm leading-relaxed text-muted-foreground">
                No acquisition stories, no "growth hacking". Just a slow, deliberate
                build of a studio that keeps its promises — and fills its clients&apos;
                tables.
              </p>
            </Reveal>
          </div>

          <ol className="relative border-l border-border/80">
            {TIMELINE.map((item, i) => (
              <Reveal key={item.year} delay={i * 0.06} y={16}>
                <li className="relative pb-12 pl-10 last:pb-0">
                  <span
                    className={cn(
                      "absolute -left-[5px] top-1.5 size-2.5 rounded-full ring-4 ring-background",
                      i === TIMELINE.length - 1 ? "bg-brand" : "bg-foreground/40",
                    )}
                  />
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <span className="serif-accent text-[1.6rem] text-brand">{item.year}</span>
                    <h3 className="text-[1.35rem] font-extrabold tracking-tight">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-2.5 max-w-xl leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="border-y border-border/70 bg-card/60 py-16 md:py-20">
        <div className="shell grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.07} className="text-center lg:text-left">
              <p className="text-[clamp(2.4rem,4.6vw,3.6rem)] font-extrabold leading-none tracking-[-0.03em]">
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

      {/* ================= TEAM ================= */}
      <section className="shell py-24 md:py-32">
        <p className="eyebrow flex items-center gap-3 text-brand">
          <span className="h-px w-8 bg-brand/60" />
          The humans
        </p>
        <h2 className="mt-6 text-[clamp(2rem,4.2vw,3.6rem)] font-extrabold leading-[1.02] tracking-[-0.035em]">
          The people you&apos;ll{" "}
          <span className="serif-accent font-normal text-brand">actually talk to</span>.
        </h2>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.06} className="h-full">
              <div className="group flex h-full flex-col rounded-[1.8rem] border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-foreground/40">
                <span
                  className={cn(
                    "flex size-20 items-center justify-center rounded-2xl text-[1.7rem] font-extrabold text-background transition-transform duration-500 group-hover:rotate-6",
                    ["bg-foreground", "bg-brand", "bg-muted-foreground", "bg-foreground/70"][i % 4],
                  )}
                >
                  {member.initials}
                </span>
                <h3 className="mt-6 text-[1.2rem] font-extrabold tracking-tight">{member.name}</h3>
                <p className="mt-1 text-sm font-semibold text-brand">{member.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= OUTRO VELOCITY ================= */}
      <section className="overflow-hidden pb-6" aria-hidden>
        <VelocityWord strength={0.7} className="w-full">
          <p className="text-outline whitespace-nowrap text-[clamp(4rem,13vw,12rem)] font-extrabold uppercase leading-none tracking-[-0.02em]">
            Human-sized&nbsp;&nbsp;Human-sized&nbsp;&nbsp;Human-sized
          </p>
        </VelocityWord>
      </section>
    </>
  );
}
