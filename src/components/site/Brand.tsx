import { cn } from "@/lib/utils";
import logo from "@/assets/logo.svg";
import { Link } from "react-router";

export function Brand({ className }: { className?: string }) {
  return (
    <Link
      to="/"
      aria-label="Reachlynk — home"
      className={cn("group flex items-center gap-2.5", className)}
    >
      <img
        src={logo}
        alt=""
        width={36}
        height={36}
        className="h-9 w-9 rounded-[10px] transition-transform duration-500 group-hover:rotate-[8deg]"
      />
      <span className="flex items-baseline gap-[0.2em] text-[1.22rem] font-extrabold tracking-[-0.02em] text-foreground">
        Reachlynk
        <span className="h-[0.34em] w-[0.34em] rounded-full bg-brand transition-transform duration-500 group-hover:translate-y-[-2px]" />
      </span>
    </Link>
  );
}
