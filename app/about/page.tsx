import type { Metadata } from "next";
import Link from "next/link";
import {
  Target,
  Globe2,
  ShieldCheck,
  Handshake,
  Award,
  TrendingUp,
  Heart,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import Flag from "@/components/Flag";
import { Badge } from "@/components/ui/badge";
import QuoteModal from "@/components/QuoteModal";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/config";

export const metadata: Metadata = {
  title: "About Us",
  description: `${SITE.COMPANY_NAME} is a custom sports uniform manufacturer creating fully sublimated team kits, jerseys & apparel for clubs, academies and schools across the USA, UK, Europe and worldwide.`,
};

const MARKETS = [
  { code: "us", name: "USA" },
  { code: "gb", name: "UK" },
  { code: "eu", name: "Europe" },
  { code: "ae", name: "UAE" },
  { code: "ca", name: "Canada" },
  { code: "au", name: "Australia" },
];

const VALUES = [
  {
    Icon: Award,
    title: "Quality First",
    desc: "Every uniform is sublimated with premium fabric and quality-checked before it ships.",
  },
  {
    Icon: Handshake,
    title: "Partnership",
    desc: "We build long-term relationships with the clubs and schools we supply.",
  },
  {
    Icon: TrendingUp,
    title: "Reliability",
    desc: "Consistent specs, honest lead times and dependable worldwide logistics.",
  },
  {
    Icon: Heart,
    title: "Service",
    desc: "Responsive, dedicated support over WhatsApp and email — in your timezone.",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="container py-20 text-center">
        <Reveal className="mx-auto max-w-3xl">
          <Badge className="mx-auto">About {SITE.COMPANY_NAME}</Badge>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Your custom sports uniform partner
          </h1>
          <p className="mt-5 text-lg text-white/65">
            {SITE.COMPANY_NAME} designs and manufactures fully sublimated team
            uniforms and apparel for clubs, academies and schools across the
            USA, UK, Europe and worldwide. From free digital mock-ups to
            finished kit on your team’s back — at factory-direct prices, with
            worldwide shipping.
          </p>
        </Reveal>
      </section>

      {/* Story + Mission */}
      <section className="border-y border-white/10 bg-navy-100/40">
        <div className="container grid gap-10 py-20 md:grid-cols-2">
          <Reveal>
            <div className="rounded-2xl border border-white/10 bg-navy-100 p-8 shadow-card">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/15 ring-1 ring-brand/30">
                <Target className="h-6 w-6 text-brand" />
              </div>
              <h2 className="mt-5 text-2xl font-extrabold">Our Mission</h2>
              <p className="mt-3 leading-relaxed text-white/65">
                To give every club, academy and school pro-level custom
                uniforms at fair, factory-direct pricing — with free design,
                low minimums and personal service from first sketch to final
                delivery. No middlemen, no inflated retail markups.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-white/10 bg-navy-100 p-8 shadow-card">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/15 ring-1 ring-brand/30">
                <Globe2 className="h-6 w-6 text-brand" />
              </div>
              <h2 className="mt-5 text-2xl font-extrabold">Made to Order</h2>
              <p className="mt-3 leading-relaxed text-white/65">
                Every order is produced to your exact design — colors, logo,
                names and numbers. From sublimation and stitching to export and
                worldwide freight, we handle it all so a complete kit arrives on
                time, wherever your team plays.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Markets */}
      <section className="container py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Badge className="mx-auto">Target Markets</Badge>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Shipping worldwide
          </h2>
          <p className="mt-4 text-white/60">
            We proudly supply teams across these key markets and beyond.
          </p>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-3">
          {MARKETS.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.05}>
              <div className="flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-navy-100 py-6 shadow-card">
                <Flag code={m.code} size={26} />
                <span className="text-lg font-bold text-white/85">
                  {m.name}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Quality assurance */}
      <section className="border-y border-white/10 bg-navy-100/40">
        <div className="container py-20">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <Reveal>
              <Badge>Quality Assurance</Badge>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Quality stitched into every kit
              </h2>
              <p className="mt-4 leading-relaxed text-white/65">
                Quality is non-negotiable. We use premium performance fabrics,
                full-dye sublimation that never cracks or fades, and inspect
                every order before dispatch — so the kit you design is exactly
                the kit your team receives.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Premium moisture-wicking performance fabric",
                  "Full-dye sublimation — no peeling or fading",
                  "Reinforced stitching & multi-stage QC",
                  "Free custom design, branding & full size runs",
                ].map((point) => (
                  <li key={point} className="flex items-center gap-3 text-white/75">
                    <ShieldCheck className="h-5 w-5 shrink-0 text-brand" />
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "500+", label: "Teams kitted out" },
                  { value: "12", label: "Sport categories" },
                  { value: "Free", label: "Custom design" },
                  { value: "Global", label: "Shipping reach" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl border border-white/10 bg-navy-100 p-6 text-center shadow-card"
                  >
                    <p className="text-3xl font-extrabold text-brand">
                      {s.value}
                    </p>
                    <p className="mt-1 text-sm text-white/55">{s.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Badge className="mx-auto">Our Values</Badge>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
            What we stand for
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map(({ Icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-white/10 bg-navy-100 p-6 shadow-card">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/15 ring-1 ring-brand/30">
                  <Icon className="h-6 w-6 text-brand" />
                </div>
                <h3 className="mt-5 text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container pb-24">
        <Reveal className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Let’s equip your team
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/60">
            Tell us what you need and we’ll send a bulk quote — fast.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <QuoteModal label="Get a Quote" />
            <Link href="/contact">
              <Button variant="email" size="md">
                Contact Us
              </Button>
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
