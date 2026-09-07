import { Link } from "react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Brand } from "@/components/site/Brand";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Simple header */}
      <header className="flex items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        <Brand />
        <nav className="hidden items-center gap-6 md:flex">
          {["Home", "Pricing", "About", "Contact"].map((label) => (
            <Link
              key={label}
              to={label === "Home" ? "/" : `/${label.toLowerCase()}`}
              className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              {label}
            </Link>
          ))}
        </nav>
      </header>

      {/* Main content */}
      <main className="flex flex-1 flex-col items-center justify-center px-5 pb-16 pt-8">
        <div className="relative text-center">
          {/* Decorative curves */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Background decorative elements */}
            <div className="pointer-events-none absolute inset-0" aria-hidden>
              {/* Curved lines around 404 */}
              <svg
                className="absolute -left-16 top-1/2 h-40 w-40 -translate-y-1/2 opacity-20"
                viewBox="0 0 100 100"
                fill="none"
              >
                <path
                  d="M80 10 C20 10, 10 50, 10 90"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-brand/40"
                />
              </svg>
              <svg
                className="absolute -right-8 top-1/2 h-32 w-32 -translate-y-1/2 opacity-20"
                viewBox="0 0 100 100"
                fill="none"
              >
                <path
                  d="M20 10 C80 10, 90 50, 90 90"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-brand/40"
                />
                <circle cx="88" cy="88" r="3" className="fill-brand/30" />
              </svg>
            </div>

            {/* Large 404 text */}
            <h1 className="relative text-[clamp(8rem,22vw,16rem)] font-extrabold leading-none tracking-[-0.04em] text-brand/90">
              404
            </h1>
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h2 className="mt-4 text-[clamp(1.6rem,3.5vw,2.4rem)] font-bold tracking-tight text-foreground">
              Looks like this link went{" "}
              <span className="serif-accent font-normal text-brand">somewhere else</span>.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
              The page you&apos;re looking for doesn&apos;t exist or may have moved.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "group h-[52px] gap-2 rounded-full px-7 text-base font-bold",
                )}
              >
                Back to Home
                <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
              </Link>
              <Link
                to="/contact?mode=project"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "h-[52px] rounded-full border-foreground/25 bg-transparent px-7 text-base font-bold",
                )}
              >
                Start a Project
                <ArrowRight className="size-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Simple footer bar */}
      <footer className="border-t border-border/60 bg-secondary/50 px-5 py-5 sm:px-8 lg:px-12">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <Brand />
          <div className="flex items-center gap-5">
            {["Home", "Pricing", "About", "Contact"].map((label) => (
              <Link
                key={label}
                to={label === "Home" ? "/" : `/${label.toLowerCase()}`}
                className="text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground"
              >
                {label}
              </Link>
            ))}
          </div>
          <p className="text-xs font-medium text-muted-foreground/70">
            © 2026 Reachlynk. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
