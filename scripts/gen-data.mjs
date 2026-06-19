// ============================================================
//  Catalog generator — scans /public and writes lib/data.ts
//  Run:  node scripts/gen-data.mjs
// ============================================================
import { readdirSync, statSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const PUBLIC = join(ROOT, "public");

// folder name -> category meta (order defines display order)
const CATS = [
  { folder: "american football uniform", slug: "american-football", name: "American Football", icon: "Shield", gradient: "from-emerald-500/25 to-brand/5", cover: "AMERICAN FOOTBALL.png" },
  { folder: "basketball uniform", slug: "basketball", name: "Basketball", icon: "Dribbble", gradient: "from-orange-500/25 to-brand/5", cover: "BASKETBALL.png" },
  { folder: "baseball uniform", slug: "baseball", name: "Baseball", icon: "CircleDot", gradient: "from-amber-500/25 to-brand/5", cover: "BASEBALL.png" },
  { folder: "cosser unifrom", slug: "soccer", name: "Soccer", icon: "Goal", gradient: "from-lime-500/25 to-brand/5", cover: "SOCCER.png" },
  { folder: "softball uniform", slug: "softball", name: "Softball", icon: "CircleDot", gradient: "from-yellow-500/25 to-brand/5", cover: "SOFTBALL.png" },
  { folder: "volleyball uniform", slug: "volleyball", name: "Volleyball", icon: "Disc", gradient: "from-rose-500/25 to-brand/5", cover: "VOLLEYBALL.png" },
  { folder: "ice hocky uniform", slug: "ice-hockey", name: "Ice Hockey", icon: "Snowflake", gradient: "from-cyan-500/25 to-brand/5", cover: "ICE HOCKEY.png" },
  { folder: "lacrosse uniform", slug: "lacrosse", name: "Lacrosse", icon: "Slice", gradient: "from-teal-500/25 to-brand/5", cover: "LACROSSE.png" },
  { folder: "rugby uniform", slug: "rugby", name: "Rugby", icon: "Swords", gradient: "from-red-500/25 to-brand/5", cover: "RUGBY.png" },
  { folder: "flag football uniform", slug: "flag-football", name: "Flag Football", icon: "Flag", gradient: "from-violet-500/25 to-brand/5", cover: "FLAG FOOTBALL.png" },
  { folder: "esports uniform", slug: "esports", name: "Esports", icon: "Gamepad2", gradient: "from-fuchsia-500/25 to-brand/5", cover: "ESPORTS.png" },
  { folder: "wrestling uniform", slug: "wrestling", name: "Wrestling", icon: "Medal", gradient: "from-sky-500/25 to-brand/5", cover: "WRESTLING.png" },
];

const GROUPS = [
  { id: "uniforms", label: "Full Uniforms", quality: "Pro Kit", match: (n) => n.includes("product") },
  { id: "jerseys", label: "Jerseys & Shirts", quality: "Custom Fit", match: (n) => n.includes("shirt") },
  { id: "bottoms", label: "Shorts & Pants", quality: "Performance", match: (n) => n.includes("short") || n.includes("pent") || n.includes("pant") },
  { id: "outerwear", label: "Hoodies & Outerwear", quality: "Team Wear", match: (n) => n.includes("hood") || n.includes("hodi") },
  { id: "accessories", label: "Accessories", quality: "Team Gear", match: (n) => n.includes("access") },
];

const VIEW_RE = /^(back|side|front)(\s*\(\d+\))?$/i;

function titleCase(file) {
  return file
    .replace(/\.[^.]+$/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\s*\(\d+\)\s*$/, "")
    .replace(/\s+\d+\s*$/, "")
    .trim()
    .split(/\s+/)
    .map((w) => (w.length <= 2 ? w.toUpperCase() : w[0].toUpperCase() + w.slice(1)))
    .join(" ");
}

function groupFor(dirName) {
  const n = dirName.toLowerCase();
  return GROUPS.find((g) => g.match(n));
}

function listDirs(p) {
  return readdirSync(p).filter((e) => {
    try { return statSync(join(p, e)).isDirectory(); } catch { return false; }
  });
}
function listFiles(p) {
  return readdirSync(p).filter((e) => {
    try { return statSync(join(p, e)).isFile(); } catch { return false; }
  });
}

const categories = CATS.map((meta) => {
  const catPath = join(PUBLIC, meta.folder);
  const groupBuckets = new Map();

  for (const sub of listDirs(catPath)) {
    const g = groupFor(sub);
    if (!g) continue;
    const files = listFiles(join(catPath, sub))
      .filter((f) => /\.(webp|png|jpg|jpeg)$/i.test(f))
      .filter((f) => !VIEW_RE.test(f.replace(/\.[^.]+$/, "")));

    for (const f of files) {
      const name = titleCase(f);
      const product = {
        id: `${meta.slug}-${g.id}-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`,
        name,
        quality: g.quality,
        image: `/${meta.folder}/${sub}/${f}`,
        description: `Custom-sublimated ${name.toLowerCase()}, made to order for ${meta.name.toLowerCase()} teams in your colors with logo, names & numbers.`,
      };
      if (!groupBuckets.has(g.id)) groupBuckets.set(g.id, { id: g.id, label: g.label, items: [] });
      groupBuckets.get(g.id).items.push(product);
    }
  }

  // order groups per GROUPS definition, drop empties
  const groups = GROUPS
    .map((g) => groupBuckets.get(g.id))
    .filter(Boolean)
    .map((g) => ({ ...g, items: g.items.sort((a, b) => a.name.localeCompare(b.name)) }));

  const count = groups.reduce((s, g) => s + g.items.length, 0);

  return {
    slug: meta.slug,
    name: meta.name,
    icon: meta.icon,
    gradient: meta.gradient,
    cover: `/SPORTS CETAGORY/${meta.cover}`,
    tagline: `Custom ${meta.name.toLowerCase()} uniforms, jerseys & team wear`,
    description: `Fully customizable ${meta.name} uniforms and team apparel — sublimated jerseys, shorts, pants, hoodies and accessories. Built to order in your colors, logo, names and numbers, with low minimums and worldwide shipping.`,
    groups,
    count,
  };
});

const banner = `// ============================================================
//  AUTO-GENERATED by scripts/gen-data.mjs — do not edit by hand.
//  Re-run \`node scripts/gen-data.mjs\` after changing /public.
// ============================================================
`;

const body = `${banner}
export type Product = {
  id: string;
  name: string;
  description: string;
  quality: string;
  image: string;
};

export type ProductGroup = {
  id: string;
  label: string;
  items: Product[];
};

export type Category = {
  slug: string;
  name: string;
  icon: string;
  gradient: string;
  cover: string;
  tagline: string;
  description: string;
  groups: ProductGroup[];
  count: number;
};

export const CATEGORIES: Category[] = ${JSON.stringify(categories, null, 2)};

export function getCategory(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function categoryProducts(category: Category): Product[] {
  return category.groups.flatMap((g) => g.items);
}

export const CATEGORY_SLUGS = CATEGORIES.map((c) => c.slug);
`;

writeFileSync(join(ROOT, "lib", "data.ts"), body, "utf8");

const total = categories.reduce((s, c) => s + c.count, 0);
console.log(`Generated lib/data.ts — ${categories.length} categories, ${total} products`);
for (const c of categories) {
  console.log(`  ${c.name.padEnd(20)} ${c.count} products  [${c.groups.map((g) => `${g.id}:${g.items.length}`).join(", ")}]`);
}
