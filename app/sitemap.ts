import type { MetadataRoute } from "next";
import { CATEGORIES } from "@/lib/data";
import { SITE } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${SITE.DOMAIN}`;
  const routes = ["", "/categories", "/about", "/contact"].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const categoryRoutes = CATEGORIES.map((c) => ({
    url: `${base}/categories/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...routes, ...categoryRoutes];
}
