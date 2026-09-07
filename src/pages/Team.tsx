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

function TeamCard({ member, index }: { member: TeamMember; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Reveal delay={index * 0.1} className="h-full">
      <div
        className="group relative flex h-full flex-col overflow-hidden rounded-[1.8rem] border border-border bg-card transition-all duration-500 hover:border-foreground/40"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setHovered((v) => !v)}
      >
        {/* Photo placeholder */}
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-secondary">
          {/* Initials as placeholder avatar */}
          <div className="flex h-full w-full items-center justify-center">
            <span
              className={cn(
                "flex size-24 items-center justify-center rounded-full text-[2.4rem] font-extrabold text-background transition-transform duration-500 group-hover:scale-110",
                "bg-foreground",
                index === 1 && "bg-brand",
                index === 2 && "bg-muted-foreground",
              )}
            >
              {member.initials}
            </span>
          </div>

          {/* Social overlay */}
          <div
            className={cn(
              "absolute inset-0 flex items-center justify-center gap-4 bg-foreground/80 backdrop-blur-sm transition-opacity duration-400",
              hovered ? "opacity-100" : "opacity-0",
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
                  className="flex size-12 items-center justify-center rounded-full bg-background/90 text-foreground transition-transform duration-300 hover:scale-110"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Icon className="size-5" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col gap-1.5 p-6">
          <h3 className="text-[1.3rem] font-extrabold tracking-tight text-foreground">
            {member.name}
          </h3>
          <p className="text-sm font-semibold text-brand">{member.role}</p>
        </div>
      </div>
    </Reveal>
  );
}

export default function Team() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="pb-10 pt-36 md:pb-16 md:pt-44">
        <div className="shell">
          <p className="eyebrow flex items-center gap-3 text-brand">
            <span className="h-px w-8 bg-brand/60" />
            Our team
          </p>
          <h1 className="mt-7 max-w-3xl text-[clamp(2.8rem,6.4vw,5.4rem)] font-extrabold leading-[0.99] tracking-[-0.04em]">
            <MaskLine>The people</MaskLine>
            <MaskLine delay={0.1}>
              behind the{" "}
              <span className="serif-accent font-normal text-brand">work</span>.
            </MaskLine>
          </h1>
          <Reveal delay={0.35}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
              A small, focused team that cares about building something meaningful — not
              just another website.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ================= TEAM GRID ================= */}
      <section className="shell pb-16 md:pb-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} />
          ))}
        </div>
      </section>
    </>
  );
}
