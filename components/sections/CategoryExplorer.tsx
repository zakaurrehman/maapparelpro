"use client";

import { useMemo, useState } from "react";
import { Search, SearchX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CategoryCard from "@/components/CategoryCard";
import type { Category } from "@/lib/data";

export default function CategoryExplorer({
  categories,
}: {
  categories: Category[];
}) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return categories;
    return categories.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.tagline.toLowerCase().includes(q) ||
        c.groups.some((g) => g.items.some((p) => p.name.toLowerCase().includes(q)))
    );
  }, [categories, query]);

  return (
    <div>
      {/* Search */}
      <div className="mx-auto mt-10 max-w-xl">
        <div className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search categories or products (e.g. football, gloves)…"
            className="w-full rounded-xl border border-line/10 bg-card py-3.5 pl-12 pr-4 text-sm text-fg placeholder:text-muted outline-none transition focus:border-brand/50 focus:ring-2 focus:ring-brand/20"
          />
        </div>
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <motion.div
          layout
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((category) => (
              <motion.div
                key={category.slug}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
              >
                <CategoryCard category={category} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <div className="mt-16 flex flex-col items-center text-center text-muted">
          <SearchX className="h-10 w-10" />
          <p className="mt-4">No categories match “{query}”.</p>
        </div>
      )}
    </div>
  );
}
