"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { Layers, Shirt, Globe2, PenTool } from "lucide-react";

type Stat = {
  Icon: typeof Layers;
  /** Numeric target for count-up; omit for text values */
  to?: number;
  prefix?: string;
  suffix?: string;
  text?: string;
  label: string;
};

const STATS: Stat[] = [
  { Icon: Layers, to: 12, label: "Sport Categories" },
  { Icon: Shirt, to: 200, suffix: "+", label: "Uniform Styles" },
  { Icon: Globe2, text: "Worldwide", label: "Shipping" },
  { Icon: PenTool, text: "Free", label: "Custom Design" },
];

function Counter({ to, prefix = "", suffix = "" }: { to: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref}>
      {prefix}
      {val}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  return (
    <section className="relative z-10 border-y border-line/10 bg-surface backdrop-blur-xl">
      <div className="bg-dots absolute inset-0 opacity-50" />
      <div className="container relative grid grid-cols-2 divide-line/5 py-10 md:grid-cols-4 md:divide-x">
        {STATS.map(({ Icon, to, prefix, suffix, text, label }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="flex flex-col items-center px-4 py-4 text-center"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 ring-1 ring-brand/25">
              <Icon className="h-6 w-6 text-brand" />
            </div>
            <span className="mt-4 text-3xl font-extrabold tracking-tight text-fg">
              {typeof to === "number" ? (
                <Counter to={to} prefix={prefix} suffix={suffix} />
              ) : (
                text
              )}
            </span>
            <span className="mt-1 text-sm text-muted">{label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
