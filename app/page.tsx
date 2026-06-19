import Link from "next/link";
import Image from "next/image";
import {
  PenTool,
  Wallet,
  Zap,
  Globe2,
  Star,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CategoryCard from "@/components/CategoryCard";
import SpotlightCard from "@/components/SpotlightCard";
import QuoteModal from "@/components/QuoteModal";
import Flag from "@/components/Flag";
import { Button } from "@/components/ui/button";
import { CATEGORIES } from "@/lib/data";
import { SITE } from "@/lib/config";

const FEATURES = [
  {
    img: "/details/durable-image.webp",
    title: "Durable Sublimation",
    desc: "Dye-sublimated graphics fused into the fabric — they never crack, peel or fade, season after season.",
  },
  {
    img: "/details/fitting-image.webp",
    title: "Athletic Custom Fit",
    desc: "Tailored cuts with full size runs from youth to adult, so every player gets a pro-level fit.",
  },
  {
    img: "/details/moisture-image.webp",
    title: "Moisture-Wicking Fabric",
    desc: "Breathable performance fabric that pulls sweat away and keeps athletes cool, dry and fast.",
  },
];

const WHY = [
  {
    Icon: PenTool,
    title: "Free Custom Design",
    desc: "Our in-house design team creates free digital mock-ups of your kit — your colors, logo, names and numbers — before you commit to a single piece.",
  },
  {
    Icon: Wallet,
    title: "Low Minimums",
    desc: `Order from just ${SITE.MIN_ORDER} pieces per design.`,
  },
  {
    Icon: Zap,
    title: "Fast Turnaround",
    desc: "Quick sampling and reliable production lead times.",
  },
  {
    Icon: Globe2,
    title: "Worldwide Shipping",
    desc: "Delivered to clubs, schools & academies anywhere.",
  },
];

const STEPS = [
  {
    img: "/details/order-process.webp",
    title: "Share Your Brief",
    desc: "Send your sport, colors, logo and quantities over WhatsApp or email. Tell us your vision.",
  },
  {
    img: "/details/designing-process.webp",
    title: "We Design & Sample",
    desc: "Our team sends free digital mock-ups and refines until your kit is exactly right.",
  },
  {
    img: "/details/delivery-process.webp",
    title: "We Produce & Deliver",
    desc: "We sublimate, stitch and quality-check your order, then ship worldwide to your door.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "The sublimated kits looked incredible and held up all season. The design team nailed our crest and the fit was spot on for every player.",
    name: "James Carter",
    role: "Academy Director, England",
  },
  {
    quote:
      "We kit out 8 school teams every year. Free mock-ups, low minimums and consistent quality — MA Apparel Pro made it effortless.",
    name: "Maria Lopez",
    role: "Athletics Coordinator, USA",
  },
  {
    quote:
      "Custom hoodies, jerseys and shorts all matched perfectly. Great communication over WhatsApp and fast delivery to Canada.",
    name: "Daniel Reeves",
    role: "Club Manager, Canada",
  },
];

const COUNTRIES = [
  { code: "us", name: "USA" },
  { code: "gb", name: "UK" },
  { code: "ae", name: "UAE" },
  { code: "ca", name: "Canada" },
  { code: "au", name: "Australia" },
];

// Bento spans (lg) — first card is the large feature tile.
const WHY_SPANS = [
  "lg:col-span-2 lg:row-span-2",
  "lg:col-span-2",
  "lg:col-span-1",
  "lg:col-span-1",
];

export default function HomePage() {
  const featured = CATEGORIES.slice(0, 6);

  return (
    <>
      <Hero />
      <StatsBar />

      {/* Featured categories */}
      <section className="container py-24">
        <SectionHeading
          eyebrow="Our Range"
          title="Custom Uniforms for Every Sport"
          subtitle="Fully sublimated team kits, jerseys, shorts, hoodies and accessories — designed your way, made to order."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((category, i) => (
            <Reveal key={category.slug} delay={i * 0.06}>
              <CategoryCard category={category} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <Link href="/categories">
            <Button variant="outline" size="lg">
              View All Categories
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </Reveal>
      </section>

      {/* Feature images — crafted for performance */}
      <section className="relative border-y border-white/10 bg-navy-100/40">
        <div className="container py-24">
          <SectionHeading
            eyebrow="Crafted for Performance"
            title="Pro-grade fabric & finish"
            subtitle="Every piece is engineered to perform on the field and look elite under the lights."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.08}>
                <SpotlightCard className="h-full">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={f.img}
                      alt={f.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-100 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold">{f.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">
                      {f.desc}
                    </p>
                  </div>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us — bento */}
      <section className="relative">
        <div className="bg-grid mask-fade-y absolute inset-0 opacity-40" />
        <div className="container relative py-24">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Your custom kit partner"
            subtitle="Everything a club, school or academy needs from a custom apparel manufacturer."
          />

          <div className="mt-14 grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY.map(({ Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 0.06} className={WHY_SPANS[i]}>
                <SpotlightCard className="h-full">
                  <div className="flex h-full flex-col p-7">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand/25 to-brand/5 ring-1 ring-brand/30">
                      <Icon className="h-6 w-6 text-brand" />
                    </div>
                    <h3
                      className={`mt-5 font-bold ${
                        i === 0 ? "text-2xl" : "text-lg"
                      }`}
                    >
                      {title}
                    </h3>
                    <p
                      className={`mt-2 leading-relaxed text-white/60 ${
                        i === 0 ? "text-base" : "text-sm"
                      }`}
                    >
                      {desc}
                    </p>
                    {i === 0 && (
                      <div className="mt-auto pt-6">
                        <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-3 py-1.5 text-xs font-semibold text-brand ring-1 ring-brand/25">
                          <Sparkles className="h-3.5 w-3.5" />
                          Free digital mock-ups
                        </span>
                      </div>
                    )}
                  </div>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-y border-white/10 bg-navy-100/40">
        <div className="container py-24">
          <SectionHeading
            eyebrow="How It Works"
            title="From idea to delivery in 3 steps"
          />

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {STEPS.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.1}>
                <SpotlightCard className="h-full">
                  <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                      src={s.img}
                      alt={s.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-100 via-navy-100/20 to-transparent" />
                    <span className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-brand text-sm font-bold text-navy-900">
                      {i + 1}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">
                      {s.desc}
                    </p>
                  </div>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof — countries */}
      <section className="container py-16">
        <Reveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-white/50">
            Trusted by clubs, academies &amp; schools in
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {COUNTRIES.map((c) => (
              <div key={c.name} className="flex items-center gap-3">
                <Flag code={c.code} size={28} />
                <span className="text-lg font-bold text-white/80">{c.name}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Testimonials */}
      <section className="container py-24">
        <SectionHeading eyebrow="Testimonials" title="What our partners say" />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <SpotlightCard className="h-full">
                <div className="flex h-full flex-col p-7">
                  <div className="flex gap-1 text-brand">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star key={idx} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-white/70">
                    “{t.quote}”
                  </p>
                  <div className="mt-5 flex items-center gap-3 border-t border-white/10 pt-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/15 text-sm font-bold text-brand ring-1 ring-brand/30">
                      {t.name.charAt(0)}
                    </span>
                    <div>
                      <p className="font-bold text-white">{t.name}</p>
                      <p className="text-sm text-white/50">{t.role}</p>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container pb-24">
        <Reveal>
          <div className="gradient-border relative overflow-hidden p-10 text-center md:p-16">
            <div className="bg-grid mask-fade-y pointer-events-none absolute inset-0 opacity-40" />
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 animate-aurora rounded-full bg-brand/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 animate-float-slow rounded-full bg-brand-light/10 blur-3xl" />
            <h2 className="relative text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              Ready to design your team kit?
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-white/65">
              Get free custom mock-ups and a bulk quote in minutes. Minimum order{" "}
              {SITE.MIN_ORDER} pieces — we ship worldwide.
            </p>
            <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <QuoteModal label="Get a Free Quote" />
              <Link href="/contact">
                <Button variant="email" size="md">
                  Contact Page
                </Button>
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
