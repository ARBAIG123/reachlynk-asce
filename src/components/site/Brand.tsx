import { cn } from "@/lib/utils";
import wordmark from "@/assets/logo-wordmark.svg";
import icon from "@/assets/logo.svg";
import { Link } from "react-router";

export function Brand({ className, wordmark: showWordmark = true }: { className?: string; wordmark?: boolean }) {
  return (
    <Link
      to="/"
      aria-label="Reachlynk — home"
      className={cn("group flex items-center gap-2.5", className)}
    >
      {showWordmark ? (
        <img
          src={wordmark}
          alt="Reachlynk"
          className="h-8 w-auto md:h-9 transition-transform duration-500 group-hover:scale-[1.02]"
        />
      ) : (
        <img
          src={icon}
          alt="Reachlynk"
          width={36}
          height={36}
          className="h-9 w-9 transition-transform duration-500 group-hover:rotate-[8deg]"
        />
      )}
    </Link>
  );
}
