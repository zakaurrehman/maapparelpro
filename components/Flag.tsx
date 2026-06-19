import { cn } from "@/lib/utils";

type FlagProps = {
  /** ISO 3166-1 alpha-2 code, lowercase (e.g. "us", "gb", "ae"). "eu" also supported. */
  code: string;
  className?: string;
  /** Height in pixels; width follows the 4:3 flag ratio. */
  size?: number;
};

/**
 * SVG-based flag (via flag-icons) — renders consistently on every OS,
 * including Windows, which does NOT support emoji flags.
 */
export default function Flag({ code, className, size = 22 }: FlagProps) {
  return (
    <span
      className={cn(
        "inline-block shrink-0 overflow-hidden rounded-[3px] ring-1 ring-white/15 shadow-sm",
        className
      )}
      style={{ width: size * 1.35, height: size }}
      aria-hidden="true"
    >
      <span
        className={`fi fi-${code}`}
        style={{
          display: "block",
          width: "100%",
          height: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </span>
  );
}
