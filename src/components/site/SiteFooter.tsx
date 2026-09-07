import { ArrowUp, ArrowUpRight, Mail } from "lucide-react";
import { Link } from "react-router";
import { SITE } from "@/lib/content";
import { smoothScrollTo } from "@/lib/scroll";
import { Brand } from "@/components/site/Brand";

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Twitter / X", href: "https://x.com" },
  { label: "Dribbble", href: "https://dribbble.com" },
];

export function SiteFooter() {
  return (
    <footer className="bg-secondary">
      {/* Main footer content */}
      <div className="shell py-14 md:py-18">
        <div className="grid gap-10 md:grid-cols-[1.4fr_0.8fr_1fr_auto]">
          {/* Brand + blurb + email */}
          <div>
            <Brand />
            <p className="mt-5 max-w-xs text-[0.88rem] leading-relaxed text-muted-foreground">
              {SITE.blurb}
            </p>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-5 inline-flex items-center gap-2 text-[0.88rem] font-bold text-foreground transition-colors hover:text-brand"
            >
              <Mail className="size-4 text-brand" />
              {SITE.email}
              <ArrowUpRight className="size-3.5 text-brand/60" />
            </a>
          </div>

          {/* Pages */}
          <div>
            <h3 className="eyebrow text-brand">Pages</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {[
                ["Home", "/"],
                ["Team", "/team"],
                ["Pricing", "/pricing"],
                ["About", "/about"],
                ["Contact", "/contact"],
              ].map(([label, to]) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-[0.92rem] font-semibold text-foreground/75 transition-colors hover:text-foreground"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Let's Connect */}
          <div>
            <h3 className="eyebrow text-brand">Let&apos;s Connect</h3>
            <ul className="mt-5 flex flex-col gap-3.5">
              {SOCIALS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 text-[0.92rem] font-semibold text-foreground/75 transition-colors hover:text-foreground"
                  >
                    <span className="flex size-8 items-center justify-center rounded-full border border-border/80 bg-card text-muted-foreground transition-colors group-hover:border-foreground/40 group-hover:text-foreground">
                      <svg className="size-3.5" viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="12" cy="12" r="10" fillOpacity="0.1" />
                      </svg>
                    </span>
                    {label}
                    <ArrowUpRight className="size-3.5 text-muted-foreground/50 transition-colors group-hover:text-brand" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Back to top */}
          <div className="flex items-start justify-end">
            <button
              type="button"
              onClick={() => smoothScrollTo(0)}
              className="group inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.12em] text-foreground/60 transition-colors hover:text-foreground"
            >
              <span className="hidden sm:inline">Back to top</span>
              <span className="flex size-11 items-center justify-center rounded-full border border-border bg-card transition-all duration-300 group-hover:border-foreground/40 group-hover:bg-foreground group-hover:text-background">
                <ArrowUp className="size-4" />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border/60">
        <div className="shell flex flex-col items-center justify-between gap-4 py-5 sm:flex-row">
          <Brand className="opacity-60" />
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-muted-foreground/60">
            We build digital experiences
          </p>
          <div className="flex items-center gap-4 text-[0.78rem] font-medium text-muted-foreground/60">
            <span>© {new Date().getFullYear()} Reachlynk. Made with care — clean, fast, human.</span>
            <span className="hidden sm:inline">·</span>
            <Link to="/terms" className="transition-colors hover:text-foreground">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
