import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Sparkles, Package, Globe2, MessageCircle } from "lucide-react";
import Reveal from "@/components/Reveal";
import ProductCard from "@/components/ProductCard";
import QuoteModal from "@/components/QuoteModal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { iconForCategory } from "@/components/category-icons";
import { CATEGORIES, getCategory } from "@/lib/data";
import { SITE, whatsappLink, defaultWhatsAppMessage } from "@/lib/config";

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const category = getCategory(params.slug);
  if (!category) return { title: "Category Not Found" };
  return {
    title: `${category.name} Uniforms — Custom Team Apparel`,
    description: `${category.description} Minimum order ${SITE.MIN_ORDER} pieces. Contact ${SITE.COMPANY_NAME} for a custom quote.`,
  };
}

export default function CategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const category = getCategory(params.slug);
  if (!category) notFound();

  const Icon = iconForCategory(category.slug);

  return (
    <div>
      {/* Hero banner */}
      <section className="section-dark relative overflow-hidden border-b border-line/10 text-fg">
        <Image
          src={category.cover}
          alt={`${category.name} uniforms`}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/85 to-navy/60" />
        <div
          className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-40`}
        />

        <div className="container relative py-16">
          <Link
            href="/categories"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition hover:text-brand"
          >
            <ArrowLeft className="h-4 w-4" />
            All Categories
          </Link>

          <div className="mt-6 flex flex-col items-start gap-6 md:flex-row md:items-center">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-line/15 bg-navy/50 backdrop-blur-md">
              <Icon className="h-10 w-10 text-brand" />
            </div>
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                {category.name}{" "}
                <span className="text-gradient-brand">Uniforms</span>
              </h1>
              <p className="mt-3 max-w-2xl text-muted">
                {category.description}
              </p>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <Badge tone="brand">
              <Sparkles className="h-3.5 w-3.5" />
              Custom Sublimated
            </Badge>
            <Badge tone="muted">
              <Package className="h-3.5 w-3.5" />
              Min. Order {SITE.MIN_ORDER} pcs
            </Badge>
            <Badge tone="muted">
              <Globe2 className="h-3.5 w-3.5" />
              Worldwide Shipping
            </Badge>
          </div>

          {/* In-page group nav */}
          {category.groups.length > 0 && (
            <div className="mt-7 flex flex-wrap gap-2">
              {category.groups.map((g) => (
                <a
                  key={g.id}
                  href={`#${g.id}`}
                  className="glass rounded-full px-4 py-2 text-sm font-medium text-muted transition hover:border-brand/40 hover:text-fg"
                >
                  {g.label}
                  <span className="ml-1.5 text-muted">{g.items.length}</span>
                </a>
              ))}
            </div>
          )}

          <div className="mt-7">
            <QuoteModal context={`${category.name} Uniforms`} label="Get a Custom Quote" />
          </div>
        </div>
      </section>

      {/* Product groups */}
      {category.groups.length > 0 ? (
        <div className="container space-y-20 py-16">
          {category.groups.map((group) => (
            <section key={group.id} id={group.id} className="scroll-mt-24">
              <Reveal>
                <div className="flex items-end justify-between gap-4 border-b border-line/10 pb-4">
                  <h2 className="text-2xl font-extrabold tracking-tight">
                    {group.label}
                  </h2>
                  <span className="text-sm text-muted">
                    {group.items.length} styles
                  </span>
                </div>
              </Reveal>

              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {group.items.map((product, i) => (
                  <Reveal key={product.id} delay={(i % 4) * 0.05}>
                    <ProductCard product={product} categoryName={category.name} />
                  </Reveal>
                ))}
              </div>
            </section>
          ))}
        </div>
      ) : (
        /* Empty state (e.g. Wrestling — catalog coming soon) */
        <div className="container py-24">
          <Reveal className="mx-auto max-w-xl text-center">
            <div className="gradient-border p-10">
              <Sparkles className="mx-auto h-10 w-10 text-brand" />
              <h2 className="mt-5 text-2xl font-extrabold">
                {category.name} catalog coming soon
              </h2>
              <p className="mt-3 text-muted">
                We custom-make {category.name.toLowerCase()} uniforms to order.
                Send us your design, colors and quantities for a fast quote.
              </p>
              <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <QuoteModal
                  context={`${category.name} Uniforms`}
                  label="Request a Quote"
                />
                <a
                  href={whatsappLink(defaultWhatsAppMessage(`${category.name} Uniforms`))}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="email" size="md">
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp Us
                  </Button>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      )}
    </div>
  );
}
