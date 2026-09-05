import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/content";
import { EASE } from "@/components/site/motion";
import { Brand } from "@/components/site/Brand";
import { buttonVariants } from "@/components/ui/button";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes
  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled || open
            ? "border-b border-border/70 bg-background/85 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="shell flex h-[68px] items-center justify-between gap-4 md:h-[76px]">
          <Brand />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    "group relative rounded-full px-4 py-2 text-[0.92rem] font-semibold transition-colors duration-300",
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    <span
                      className={cn(
                        "absolute -bottom-[2px] left-1/2 h-[3px] -translate-x-1/2 rounded-full bg-brand transition-all duration-300",
                        isActive ? "w-4 opacity-100" : "w-0 opacity-0 group-hover:w-4 group-hover:opacity-100",
                      )}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <Link
              to="/contact?mode=audit"
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "h-11 rounded-full px-5 text-[0.92rem] font-semibold text-foreground",
              )}
            >
              Free audit
            </Link>
            <Link
              to="/contact?mode=project"
              className={cn(
                buttonVariants({ variant: "default" }),
                "group h-11 gap-2 rounded-full px-6 text-[0.92rem] font-bold",
              )}
            >
              Start a project
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
            </Link>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-full text-foreground transition-colors hover:bg-accent md:hidden"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="fixed inset-0 z-40 bg-background/98 pt-[68px] backdrop-blur-xl md:hidden"
          >
            <nav className="shell flex h-full flex-col justify-between overflow-y-auto pb-8 pt-6" aria-label="Mobile">
              <div className="flex flex-col">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 + i * 0.05, duration: 0.5, ease: EASE }}
                  >
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        cn(
                          "group flex items-center justify-between border-b border-border/70 py-4",
                          isActive ? "text-foreground" : "text-foreground/80",
                        )
                      }
                    >
                      <span className="text-[1.7rem] font-extrabold tracking-[-0.02em]">
                        {link.label}
                      </span>
                      <ArrowUpRight
                        className={cn(
                          "size-6 text-brand transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1",
                        )}
                      />
                    </NavLink>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.36, duration: 0.5, ease: EASE }}
                  className="mt-6 flex flex-col gap-3"
                >
                  <Link
                    to="/contact?mode=project"
                    className={cn(
                      buttonVariants({ variant: "default" }),
                      "h-[52px] rounded-full text-base font-bold",
                    )}
                  >
                    Start a project
                    <ArrowUpRight className="size-5" />
                  </Link>
                  <Link
                    to="/contact?mode=audit"
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "h-[52px] rounded-full text-base font-bold",
                    )}
                  >
                    Get a free website audit
                  </Link>
                </motion.div>
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-sm font-medium text-muted-foreground"
              >
hello@reachlynk@gmail.com · replies within one business day
              </motion.p>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
