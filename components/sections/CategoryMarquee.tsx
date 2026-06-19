"use client";

import Link from "next/link";
import { CATEGORIES } from "@/lib/data";
import { iconForCategory } from "@/components/category-icons";

export default function CategoryMarquee() {
  // Duplicate the list so the -50% translate loops seamlessly.
  const items = [...CATEGORIES, ...CATEGORIES];

  return (
    <div className="mask-fade-x relative flex overflow-hidden py-2">
      <div className="flex shrink-0 animate-marquee gap-4 pr-4">
        {items.map((c, i) => {
          const Icon = iconForCategory(c.slug);
          return (
            <Link
              key={`${c.slug}-${i}`}
              href={`/categories/${c.slug}`}
              className="glass group flex items-center gap-2.5 rounded-full px-5 py-2.5 transition-colors hover:border-brand/40"
            >
              <Icon className="h-4 w-4 text-brand" />
              <span className="whitespace-nowrap text-sm font-semibold text-white/80 transition group-hover:text-white">
                {c.name}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
