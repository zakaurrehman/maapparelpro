"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Category } from "@/lib/data";
import { iconForCategory } from "@/components/category-icons";
import SpotlightCard from "@/components/SpotlightCard";

export default function CategoryCard({ category }: { category: Category }) {
  const Icon = iconForCategory(category.slug);

  return (
    <SpotlightCard className="h-full">
      <Link
        href={`/categories/${category.slug}`}
        className="relative flex h-full flex-col"
      >
        {/* Cover image */}
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={category.cover}
            alt={`${category.name} uniforms`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-100 via-navy-100/30 to-transparent" />
          <div
            className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-100`}
          />

          {/* Icon chip */}
          <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-navy/50 backdrop-blur-md">
            <Icon className="h-5 w-5 text-brand" />
          </div>
          {category.count > 0 && (
            <span className="absolute right-4 top-4 rounded-full border border-white/15 bg-navy/50 px-2.5 py-1 text-xs font-semibold text-white/80 backdrop-blur-md">
              {category.count} styles
            </span>
          )}
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col p-5">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-lg font-bold text-white">{category.name}</h3>
            <ArrowUpRight className="h-5 w-5 shrink-0 text-white/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
          </div>
          <p className="mt-1.5 flex-1 text-sm leading-relaxed text-white/60">
            {category.tagline}
          </p>
          <span className="mt-4 text-sm font-semibold text-brand">
            {category.count > 0 ? "View Collection" : "Request a Quote"}
          </span>
        </div>
      </Link>
    </SpotlightCard>
  );
}
