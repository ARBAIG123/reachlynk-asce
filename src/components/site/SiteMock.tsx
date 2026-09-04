import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/content";

/**
 * A stylised "screenshot" of a client website, drawn with flat shapes in the
 * project's colorway. Everything is sized in `em` off a scale that roughly
 * follows the container width, so the mock stays crisp at any size.
 */
export function BrowserMock({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  const c = project.colors;
  return (
    <div
      aria-hidden
      className={cn(
        "w-full overflow-hidden rounded-2xl text-left ring-1 ring-black/[0.08]",
        className,
      )}
      style={
        {
          fontSize: "clamp(7px, 1.6vw, 11px)",
          background: c.paper,
          color: c.ink,
        } as CSSProperties
      }
    >
      {/* window chrome */}
      <div
        className="flex items-center gap-[1.4em] border-b px-[1.4em] py-[0.9em]"
        style={{ borderColor: "color-mix(in srgb, " + c.ink + " 10%, transparent)" }}
      >
        <div className="flex gap-[0.45em]">
          <span className="h-[0.85em] w-[0.85em] rounded-full bg-ink/15" />
          <span className="h-[0.85em] w-[0.85em] rounded-full bg-ink/15" />
          <span className="h-[0.85em] w-[0.85em] rounded-full bg-ink/15" />
        </div>
        <div
          className="mx-auto flex h-[2em] w-[58%] items-center justify-center overflow-hidden truncate whitespace-nowrap rounded-full px-[1.4em] text-[0.95em] font-medium"
          style={{ background: c.surface, color: "color-mix(in srgb, " + c.ink + " 62%, transparent)" }}
        >
          {project.domain}
        </div>
        <div className="w-[3.6em]" />
      </div>

      <div className="p-[1.9em]">
        {/* site nav */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[0.7em]">
            <span
              className="flex h-[2.4em] w-[2.4em] items-center justify-center rounded-[0.7em] text-[1.15em] font-extrabold"
              style={{ background: c.accent, color: c.paper }}
            >
              {project.name.charAt(0)}
            </span>
            <span className="text-[1.5em] font-extrabold tracking-tight">
              {project.name.toLowerCase()}
            </span>
          </div>
          <div className="hidden items-center gap-[1.5em] sm:flex">
            <span className="h-[0.5em] w-[3.4em] rounded-full bg-ink/15" />
            <span className="h-[0.5em] w-[3.4em] rounded-full bg-ink/15" />
            <span className="h-[0.5em] w-[3.4em] rounded-full bg-ink/15" />
            <span
              className="flex h-[2.2em] items-center rounded-full px-[1.4em] text-[1em] font-bold"
              style={{ background: c.ink, color: c.paper }}
            >
              {project.layout === "local" ? "Order now" : "Get started"}
            </span>
          </div>
        </div>

        {/* layout variants */}
        <MockBody project={project} />
      </div>
    </div>
  );
}

function MockBody({ project }: { project: Project }) {
  const c = project.colors;
  const bar = (w: string, h = "0.55em", color?: string) => (
    <span
      className="block rounded-full"
      style={{
        width: w,
        height: h,
        background: color ?? "color-mix(in srgb, " + c.ink + " 18%, transparent)",
      }}
    />
  );
  const chip = (w: string, bg?: string) => (
    <span
      className="block h-[1.9em] rounded-full"
      style={{ width: w, background: bg ?? c.surface }}
    />
  );

  const common = (
    <>
      <div className="mt-[2.6em] grid grid-cols-[1.15fr_1fr] items-center gap-[3em]">
        <div className="flex flex-col gap-[1.1em]">
          {bar("96%", "1.35em", c.ink)}
          {bar("72%", "1.35em", c.ink)}
          {bar("86%", "0.6em")}
          {bar("60%", "0.6em")}
          <div className="mt-[0.6em] flex items-center gap-[1em]">
            <span
              className="flex h-[2.5em] items-center rounded-full px-[1.8em] text-[1em] font-bold"
              style={{ background: c.accent, color: c.paper }}
            >
              {project.layout === "commerce" ? "Shop now" : "Book a call"}
            </span>
            <span className="flex h-[2.5em] items-center rounded-full px-[1.8em] text-[1em] font-bold" style={{ border: "1px solid color-mix(in srgb, " + c.ink + " 25%, transparent)" }}>
              Learn more
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-[1.2em]">
          <div className="flex gap-[1.2em]">
            <span className="aspect-[1/1] flex-1 rounded-[1.1em]" style={{ background: c.surface }} />
            <span className="aspect-[1/1] flex-1 rounded-[1.1em]" style={{ background: "color-mix(in srgb, " + c.surface + " 55%, " + c.accent + " 45%)" }} />
          </div>
          <span className="flex h-[7em] w-full rounded-[1.1em] p-[1.2em]" style={{ background: c.wash }}>
            <span className="flex w-full flex-col justify-between">
              {bar("52%", "0.5em")}
              {bar("38%", "0.5em")}
            </span>
          </span>
        </div>
      </div>
      <div className="mt-[2.2em] grid grid-cols-3 gap-[1.2em]">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="flex h-[5.6em] flex-col justify-between rounded-[1em] p-[1.1em]"
            style={{ background: c.surface }}
          >
            {bar("42%", "0.5em", c.accent)}
            {bar("70%", "0.45em")}
          </span>
        ))}
      </div>
    </>
  );

  if (project.layout === "saas") {
    return (
      <>
        <div className="mt-[2.6em] flex flex-col items-center gap-[1.2em] text-center">
          {bar("58%", "1.35em", c.ink)}
          {bar("34%", "1.35em", c.ink)}
          {bar("46%", "0.6em")}
          <div className="mt-[0.4em] flex items-center gap-[1em]">
            <span className="flex h-[2.5em] items-center rounded-full px-[1.9em] text-[1em] font-bold" style={{ background: c.accent, color: c.paper }}>
              Start free trial
            </span>
            <span className="flex h-[2.5em] items-center rounded-full px-[1.9em] text-[1em] font-bold" style={{ border: "1px solid color-mix(in srgb, " + c.ink + " 25%, transparent)" }}>
              See a demo
            </span>
          </div>
        </div>
        <div
          className="mt-[2.4em] overflow-hidden rounded-[1.2em] border"
          style={{ borderColor: "color-mix(in srgb, " + c.ink + " 12%, transparent)", background: c.surface }}
        >
          <div className="flex h-[2.6em] items-center gap-[1.4em] border-b px-[1.5em]" style={{ borderColor: "color-mix(in srgb, " + c.ink + " 12%, transparent)" }}>
            {bar("3.4em", "0.45em")}
            {bar("3.4em", "0.45em")}
            {bar("3.4em", "0.45em", c.accent)}
            <div className="ml-auto h-[1.6em] w-[7em] rounded-full" style={{ background: c.paper }} />
          </div>
          <div className="flex gap-[1.6em] p-[1.5em]">
            <div className="flex w-[16%] flex-col gap-[1em]">
              {[0, 1, 2, 3].map((i) => (
                <span key={i} className="h-[1.4em] rounded-[0.5em]" style={{ background: "color-mix(in srgb, " + c.ink + " 10%, transparent)" }} />
              ))}
            </div>
            <div className="flex-1">
              <svg viewBox="0 0 400 120" className="h-[10em] w-full" preserveAspectRatio="none">
                <path
                  d="M0 100 C40 92 55 60 90 64 C130 68 145 30 190 34 C235 38 250 78 295 72 C335 66 350 20 400 26"
                  fill="none"
                  stroke={c.accent}
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <path
                  d="M0 100 C40 96 60 80 100 84 C150 89 170 58 210 60 C260 62 275 88 320 82 C355 78 375 60 400 62"
                  fill="none"
                  stroke={`color-mix(in srgb, ${c.ink} 25%, transparent)`}
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-[1.2em] p-[1.5em] pt-0">
            {[0, 1, 2].map((i) => (
              <span key={i} className="flex h-[4.6em] flex-col justify-between rounded-[0.9em] p-[1em]" style={{ background: c.paper }}>
                {bar("40%", "0.5em", c.accent)}
                {bar("65%", "0.45em")}
              </span>
            ))}
          </div>
        </div>
      </>
    );
  }

  if (project.layout === "editorial") {
    return (
      <>
        <div className="mt-[2.8em] flex flex-col items-center gap-[1.2em] text-center">
          <span
            className="rounded-full px-[1.6em] py-[0.5em] text-[0.95em] font-bold tracking-wide"
            style={{ background: c.wash, color: c.ink }}
          >
            {project.category === "Services" ? project.industry.toUpperCase() : "EST. 2014 · AWARD-WINNING"}
          </span>
          {bar("64%", "1.3em", c.ink)}
          {bar("42%", "1.3em", c.ink)}
          {bar("48%", "0.6em")}
        </div>
        <div className="mt-[2.6em] flex flex-col gap-[2em]">
          <div
            className="flex flex-col gap-[1.1em] rounded-[1.1em] p-[1.8em]"
            style={{ background: c.wash, borderLeft: "0.45em solid " + c.accent }}
          >
            {bar("90%", "0.55em")}
            {bar("82%", "0.55em")}
            {bar("56%", "0.55em")}
            <span className="mt-[0.6em] text-[1.15em] font-bold" style={{ color: c.accent }}>
              — {project.name}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-[2em]">
            {[0, 1].map((col) => (
              <div key={col} className="flex flex-col gap-[0.9em]">
                {[94, 100, 88, 62].map((w, i) => (
                  <span
                    key={i}
                    className="block h-[0.5em] rounded-full"
                    style={{ width: w + "%", background: "color-mix(in srgb, " + c.ink + " 15%, transparent)" }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-[2.4em] flex items-center justify-between rounded-[1.1em] px-[1.7em] py-[1.3em]" style={{ background: c.surface }}>
          <div className="flex items-center gap-[1.1em]">
            <span className="flex h-[2.4em] w-[2.4em] items-center justify-center rounded-full text-[1.1em] font-extrabold" style={{ background: c.paper, color: c.accent }}>
              {project.name.charAt(0)}
            </span>
            <div className="flex flex-col gap-[0.6em]">
              {bar("10em", "0.5em", c.ink)}
              {bar("7em", "0.45em")}
            </div>
          </div>
          <span className="flex h-[2.3em] items-center rounded-full px-[1.6em] text-[1em] font-bold" style={{ background: c.accent, color: c.paper }}>
            Book consultation
          </span>
        </div>
      </>
    );
  }

  if (project.layout === "local") {
    return (
      <>
        <div className="mt-[2.4em] grid grid-cols-[1fr_1.05fr] items-center gap-[2.8em]">
          <div className="flex flex-col gap-[1.2em]">
            <span className="aspect-[4/3] w-full rounded-[1.2em]" style={{ background: c.surface }} />
            <div
              className="-mt-[2.2em] ml-[1.2em] mr-[14%] flex flex-col gap-[0.8em] rounded-[1em] p-[1.2em]"
              style={{ background: c.paper, border: "1px solid color-mix(in srgb, " + c.ink + " 12%, transparent)" }}
            >
              <span className="flex gap-[0.35em]">
                {[0, 1, 2, 3, 4].map((i) => (
                  <span key={i} className="h-[1em] w-[1em] rounded-full" style={{ background: c.accent }} />
                ))}
              </span>
              {bar("70%", "0.5em")}
            </div>
          </div>
          <div className="flex flex-col gap-[1em]">
            {bar("90%", "1.2em", c.ink)}
            {bar("62%", "1.2em", c.ink)}
            {bar("86%", "0.55em")}
            {bar("70%", "0.55em")}
            <div className="mt-[0.4em] flex items-center gap-[1em]">
              {chip("9em", c.accent)}
              {chip("9em")}
            </div>
          </div>
        </div>
        <div className="mt-[2.2em] grid grid-cols-3 gap-[1.2em]">
          {["Signature roast", "Brunch menu", "Events"].map((t, i) => (
            <span key={t} className="flex h-[5.8em] flex-col justify-between rounded-[1em] p-[1.1em]" style={{ background: i === 1 ? c.surface : c.wash }}>
              <span className="text-[1.05em] font-bold">{t}</span>
              {bar("55%", "0.45em")}
            </span>
          ))}
        </div>
      </>
    );
  }

  return common;
}

/** Floating proof chip shown beside mockups ("+41% online sales"). */
export function MetricChip({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "animate-float-slow flex items-center gap-[1.15em] rounded-2xl border border-border/80 bg-card py-[1.1em] pl-[1.15em] pr-[1.5em]",
        className,
      )}
    >
      <span
        className="flex h-[2.9em] w-[2.9em] shrink-0 items-center justify-center rounded-full text-[1.05em] font-extrabold"
        style={{ background: project.colors.wash, color: project.colors.accent }}
      >
        {project.metric.replace(/[^0-9.+×-]/g, "").trim()}
      </span>
      <span className="flex flex-col leading-tight">
        <span className="max-w-[12em] text-[0.82em] font-semibold tracking-tight text-foreground">
          {project.metricLabel}
        </span>
        <span className="mt-[0.15em] text-[0.72em] font-medium text-muted-foreground">
          {project.name} · after launch
        </span>
      </span>
    </div>
  );
}
