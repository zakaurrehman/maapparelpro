import Link from "next/link";
import Image from "next/image";
import { Mail, MessageCircle, Facebook, Linkedin, Instagram } from "lucide-react";
import Pinterest from "@/components/icons/Pinterest";
import { CATEGORIES } from "@/lib/data";
import { SITE, whatsappLink, emailLink, defaultWhatsAppMessage } from "@/lib/config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-navy-900">
      <div className="container grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <Link href="/" className="flex items-center gap-2.5">
            <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-white ring-1 ring-white/15">
              <Image
                src={SITE.LOGO}
                alt={`${SITE.COMPANY_NAME} logo`}
                fill
                sizes="40px"
                className="object-contain p-0.5"
              />
            </span>
            <span className="text-lg font-extrabold text-white">
              {SITE.COMPANY_NAME}
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/55">
            Custom sports uniform manufacturer — fully sublimated team kits,
            jerseys, hoodies & accessories for clubs, academies & schools across
            the USA, UK and worldwide.
          </p>
          <div className="mt-5 flex gap-3">
            {[
              { href: SITE.FACEBOOK_URL, Icon: Facebook, label: "Facebook" },
              { href: SITE.INSTAGRAM_URL, Icon: Instagram, label: "Instagram" },
              { href: SITE.LINKEDIN_URL, Icon: Linkedin, label: "LinkedIn" },
              { href: SITE.PINTEREST_URL, Icon: Pinterest, label: "Pinterest" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg text-white/60 ring-1 ring-white/10 transition hover:text-brand hover:ring-brand/40"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-white">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {[
              { href: "/", label: "Home" },
              { href: "/categories", label: "All Products" },
              { href: "/about", label: "About Us" },
              { href: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-white/55 transition hover:text-brand">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-white">
            Categories
          </h4>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm">
            {CATEGORIES.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/categories/${c.slug}`}
                  className="text-white/55 transition hover:text-brand"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-white">
            Get in Touch
          </h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={whatsappLink(defaultWhatsAppMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-white/55 transition hover:text-brand"
              >
                <MessageCircle className="h-4 w-4 text-brand" />
                {SITE.WHATSAPP_NUMBER}
              </a>
            </li>
            <li>
              <a
                href={emailLink("Bulk Inquiry")}
                className="flex items-center gap-2.5 text-white/55 transition hover:text-brand"
              >
                <Mail className="h-4 w-4 text-brand" />
                {SITE.BUSINESS_EMAIL}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/40 sm:flex-row">
          <p>
            © {year} {SITE.COMPANY_NAME}. All rights reserved.
          </p>
          <p>Bulk orders only · Minimum {SITE.MIN_ORDER} pieces · Worldwide shipping</p>
        </div>
      </div>
    </footer>
  );
}
