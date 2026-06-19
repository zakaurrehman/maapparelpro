import * as React from "react";
import { cn } from "@/lib/utils";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  tone?: "brand" | "muted";
};

export function Badge({ className, tone = "brand", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold",
        tone === "brand"
          ? "bg-brand/15 text-brand ring-1 ring-brand/30"
          : "bg-fg/[0.06] text-muted ring-1 ring-line/10",
        className
      )}
      {...props}
    />
  );
}
