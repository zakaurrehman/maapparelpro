import type { Metadata } from "next";
import {
  MessageCircle,
  Mail,
  Facebook,
  Linkedin,
  Instagram,
  Clock,
  Globe2,
  Package,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import Pinterest from "@/components/icons/Pinterest";
import ContactForm from "@/components/ContactForm";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  SITE,
  whatsappLink,
  emailLink,
  defaultWhatsAppMessage,
} from "@/lib/config";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact ${SITE.COMPANY_NAME} for custom team uniform quotes & free design mock-ups. Reach us instantly on WhatsApp or email ${SITE.BUSINESS_EMAIL}.`,
};

export default function ContactPage() {
  return (
    <div className="container py-20">
      <Reveal className="mx-auto max-w-2xl text-center">
        <Badge className="mx-auto">Get in Touch</Badge>
        <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
          Contact Us
        </h1>
        <p className="mt-4 text-muted">
          Ready to design your team kit or have a question? Reach out on
          WhatsApp for the fastest reply, or send us your inquiry by email. Free
          custom mock-ups — orders from just {SITE.MIN_ORDER} pieces.
        </p>
      </Reveal>

      {/* Primary CTAs */}
      <Reveal className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
        <a
          href={whatsappLink(defaultWhatsAppMessage())}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center rounded-2xl border border-brand/30 bg-brand/10 p-8 text-center transition hover:bg-brand/15"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand text-navy-900 shadow-glow">
            <MessageCircle className="h-8 w-8" />
          </span>
          <h2 className="mt-5 text-xl font-bold">WhatsApp Us</h2>
          <p className="mt-1 text-sm text-muted">Fastest response</p>
          <p className="mt-3 font-semibold text-brand">{SITE.WHATSAPP_NUMBER}</p>
        </a>

        <a
          href={emailLink("Bulk Inquiry")}
          className="group flex flex-col items-center rounded-2xl border border-line/15 bg-card p-8 text-center transition hover:border-brand/40"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-fg/10 text-fg ring-1 ring-line/15">
            <Mail className="h-8 w-8" />
          </span>
          <h2 className="mt-5 text-xl font-bold">Email Us</h2>
          <p className="mt-1 text-sm text-muted">Detailed inquiries</p>
          <p className="mt-3 font-semibold text-brand">{SITE.BUSINESS_EMAIL}</p>
        </a>
      </Reveal>

      {/* Form + info */}
      <div className="mx-auto mt-16 grid max-w-5xl gap-10 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <div className="rounded-2xl border border-line/10 bg-card p-7 shadow-card sm:p-9">
            <h2 className="text-2xl font-extrabold">Send an Inquiry</h2>
            <p className="mt-2 text-sm text-muted">
              Fill in the details and we’ll get back with a bulk quote.
            </p>
            <div className="mt-7">
              <ContactForm />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="space-y-6">
            {/* Highlights */}
            <div className="rounded-2xl border border-line/10 bg-card p-7 shadow-card">
              <h3 className="text-lg font-bold">Why order with us</h3>
              <ul className="mt-5 space-y-4 text-sm">
                {[
                  { Icon: Package, text: `Bulk orders from ${SITE.MIN_ORDER} pieces` },
                  { Icon: Globe2, text: "Worldwide export shipping" },
                  { Icon: Clock, text: "Fast quotes & responsive support" },
                ].map(({ Icon, text }) => (
                  <li key={text} className="flex items-center gap-3 text-muted">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand/15 ring-1 ring-brand/30">
                      <Icon className="h-4 w-4 text-brand" />
                    </span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            {/* Socials */}
            <div className="rounded-2xl border border-line/10 bg-card p-7 shadow-card">
              <h3 className="text-lg font-bold">Follow us</h3>
              <p className="mt-2 text-sm text-muted">
                Connect with {SITE.COMPANY_NAME} on social media.
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
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-11 w-11 items-center justify-center rounded-lg text-muted ring-1 ring-line/10 transition hover:text-brand hover:ring-brand/40"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick WhatsApp */}
            <a
              href={whatsappLink(defaultWhatsAppMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button variant="whatsapp" size="lg" className="w-full">
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </Button>
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
