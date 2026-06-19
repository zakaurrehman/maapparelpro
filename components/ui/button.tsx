import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        whatsapp:
          "bg-brand text-navy-900 hover:bg-brand-dark hover:shadow-glow active:scale-[0.98]",
        email:
          "bg-fg/[0.06] text-fg ring-1 ring-line/20 backdrop-blur hover:bg-fg/10 active:scale-[0.98]",
        solid:
          "bg-fg text-bg hover:bg-fg/90 active:scale-[0.98]",
        outline:
          "border border-brand/50 text-brand hover:bg-brand/10 active:scale-[0.98]",
        ghost: "text-muted hover:text-fg hover:bg-fg/5",
      },
      size: {
        sm: "h-9 px-4",
        md: "h-11 px-5",
        lg: "h-14 px-8 text-base",
      },
    },
    defaultVariants: {
      variant: "whatsapp",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
);
Button.displayName = "Button";

export { Button, buttonVariants };
