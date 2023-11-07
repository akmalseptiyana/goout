import { cn } from "@/utils/classnames";
import { Logo as LogoIcon } from "./icons";

interface LogoProps {
  className?: string;
  withText?: boolean;
}

export function Logo({ className, withText }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-x-2", className)}>
      <LogoIcon />
      <span
        className={cn(
          "text-2xl font-semibold text-primary",
          withText ? "inline-block" : "hidden",
        )}
      >
        Goout
      </span>
    </div>
  );
}
