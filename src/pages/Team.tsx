import { useState } from "react";
import { Github, Instagram, Linkedin } from "lucide-react";
import { MaskLine, Reveal } from "@/components/site/motion";
import { TEAM, type TeamMember } from "@/lib/content";
import { cn } from "@/lib/utils";

const SOCIAL_ICONS: Record<string, React.FC<{ className?: string }>> = {
  linkedin: Linkedin,
  instagram: Instagram,
  github: Github,
};

const CARD_COLORS = [
  { bg: "bg-foreground", ring: "ring-foreground/10" },
  { bg: "bg-brand", ring: "ring-brand/15" },
  { bg: "bg-muted-foreground", ring: "ring-muted-foreground/10" },
];

function TeamCard({ member, index }: { member: TeamMember; index: number }) {
  const [hovered, setHovered] = useState(false);
  const color = CARD_COLORS[index % CARD_COLORS.length];

  return (
    <Reveal delay={index * 0.12} className="h-full">
      <div
        className="group relative flex h-full flex-col overflow-hidden rounded-[1.8rem] border border-border bg-card transition-all duration-500 hover:border-foreground/40 hover:shadow-lg"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setHovered((v) => !v)}
      >
        {/* Card top — decorative pattern + large circle */}
        <div className="relative flex h-72 items-center justify-center overflow-hidden bg-secondary sm:h-80">
          {/* Subtle decorative lines */}
          <div className="absolute inset-0 opacity-[0.04]" aria-hidden>
            <div className="absolute left-8 top-0 h-full w-px bg-foreground" />
            <div className="absolute right-8 top-0 h-full w-px bg-foreground" />
            <div className="absolute left-0 top-8 h-px w-full bg-foreground" />
            <div className="absolute bottom-8 left-0 h-px w-full bg-foreground" />
          </div>

          {/* Brand label — top left */}
          <span className="absolute left-6 top-6 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-foreground/40">
            Reachlynk
          </span>

          {/* Large photo circle */}
          <div className="relative">
            <div
              className={cn(
                "flex size-36 items-center justify-center rounded-full text-[3.2rem] font-extrabold text-background transition-all duration-500 group-hover:scale-110",
                color.bg,
                "ring-8",
                color.ring,
              )}
            >
              {member.initials}
            </div>
            {/* Decorative ring */}
            <div
              className={cn(
                "absolute -inset-3 rounded-full border border-dashed transition-all duration-700",
                "border-foreground/10",
                "group-hover:rotate-45 group-hover:scale-105",
              )}
            />
          </div>

          {/* Role label — bottom */}
          <span className="absolute bottom-6 left-6 right-6 text-center text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-foreground/50">
            {member.role}
          </span>

          {/* Social overlay */}
          <div
            className={cn(
              "absolute inset-0 flex items-center justify-center gap-4 bg-foreground/85 backdrop-blur-sm transition-all duration-400",
              hovered ? "opacity-100" : "opacity-0 pointer-events-none",
            )}
          >
            {member.socials.map((social) => {
              const Icon = SOCIAL_ICONS[social.platform];
              if (!Icon) return null;
              return (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-14 items-center justify-center rounded-full bg-background/90 text-foreground transition-transform duration-300 hover:scale-110"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Icon className="size-6" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col gap-2 p-6 pt-5">
          <h3 className="text-[1.2rem] font-extrabold tracking-tight text-foreground">
            {member.name}
          </h3>
          <p className="text-[0.85rem] font-semibold text-brand">{member.role}</p>
        </div>
      </div>
    </Reveal>
  );
}

export default function Team() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="pb-6 pt-2 md:pb-10 md:pt-3">
        <div className="shell">
          <p className="eyebrow flex items-center gap-3 text-brand">
            <span className="h-px w-8 bg-brand/60" />
            Our team
          </p>
          <h1 className="mt-5 max-w-3xl text-[clamp(2.6rem,6vw,4.8rem)] font-extrabold leading-[0.99] tracking-[-0.04em]">
            <MaskLine>The people</MaskLine>
            <MaskLine delay={0.1}>
              behind the{" "}
              <span className="serif-accent font-normal text-brand">work</span>.
            </MaskLine>
          </h1>
          <Reveal delay={0.3}>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              A small, focused team that cares about building something meaningful — not
              just another website.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ================= TEAM GRID ================= */}
      <section className="shell pb-14 md:pb-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} />
          ))}
        </div>
      </section>
    </>
  );
}
