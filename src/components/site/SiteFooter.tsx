import { ArrowUp, Dribbble, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router";
import { SITE } from "@/lib/content";
import { smoothScrollTo } from "@/lib/scroll";
import { Brand } from "@/components/site/Brand";

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com", Icon: Instagram },
  { label: "LinkedIn", href: "https://linkedin.com", Icon: Linkedin },
  { label: "Twitter / X", href: "https://x.com", Icon: Twitter },
  { label: "Dribbble", href: "https://dribbble.com", Icon: Dribbble },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/80 bg-background">
      <div className="shell py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Brand />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {SITE.blurb}
            </p>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-5 inline-block text-[0.95rem] font-bold text-foreground underline decoration-brand/60 decoration-2 underline-offset-4 transition-colors hover:decoration-brand"
            >
              {SITE.email}
            </a>
          </div>

          <div>
            <h3 className="eyebrow text-muted-foreground">Pages</h3>
            <ul className="mt-5 flex flex-col gap-2.5">
              {[
                ["Home", "/"],
                ["Work", "/work"],
                ["Services", "/services"],
                ["Pricing", "/pricing"],
                ["Process", "/process"],
                ["About", "/about"],
                ["Contact", "/contact"],
              ].map(([label, to]) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm font-medium text-foreground/75 transition-colors hover:text-foreground"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-muted-foreground">Services</h3>
            <ul className="mt-5 flex flex-col gap-2.5">
              {[
                "Website design & build",
                "E-commerce",
                "Redesigns",
                "Brand & identity",
                "Care plans",
              ].map((label) => (
                <li key={label}>
                  <Link
                    to="/services"
                    className="text-sm font-medium text-foreground/75 transition-colors hover:text-foreground"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-muted-foreground">Elsewhere</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {SOCIALS.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 text-sm font-medium text-foreground/75 transition-colors hover:text-foreground"
                  >
                    <Icon className="size-4" aria-hidden />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => smoothScrollTo(0)}
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 text-sm font-semibold text-foreground transition-all hover:border-foreground/30"
            >
              Back to top
              <ArrowUp className="size-4" />
            </button>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border/70 pt-7 text-[0.8rem] font-medium text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Reachlynk Studio. Made with care — clean, fast,
            human.
          </p>
          <p>
            Working worldwide · Amsterdam &amp; Portland ·{" "}
            <span className="serif-accent text-[0.95rem] text-foreground/80">est. 2019</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
