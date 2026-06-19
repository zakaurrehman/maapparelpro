import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CategoryExplorer from "@/components/sections/CategoryExplorer";
import QuoteModal from "@/components/QuoteModal";
import { CATEGORIES } from "@/lib/data";
import { SITE } from "@/lib/config";

export const metadata: Metadata = {
  title: "Products & Categories",
  description:
    "Browse 12 sport categories of custom sublimated uniforms & team apparel — American football, basketball, baseball, soccer and more. Free design, low minimums, worldwide shipping.",
};

export default function CategoriesPage() {
  return (
    <div className="relative">
      <div className="bg-grid mask-fade-y absolute inset-x-0 top-0 h-96 opacity-40" />
      <div className="pointer-events-none absolute -top-20 left-1/2 h-80 w-[36rem] -translate-x-1/2 animate-aurora rounded-full bg-brand/10 blur-[120px]" />
      <div className="container relative py-20">
        <SectionHeading
          eyebrow="12 Sport Categories"
          title="Custom Uniform Collections"
          subtitle={`Fully sublimated uniforms, jerseys, shorts, hoodies & accessories for clubs, academies & schools. Custom-made from just ${SITE.MIN_ORDER} pieces — contact us for free mock-ups and a tailored quote.`}
        />
        <Reveal className="mt-7 flex justify-center">
          <QuoteModal label="Request a Bulk Quote" />
        </Reveal>

        <CategoryExplorer categories={CATEGORIES} />
      </div>
    </div>
  );
}
