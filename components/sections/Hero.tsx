"use client";

import { motion } from "framer-motion";
import { MessageCircle, Mail, ChevronDown, Star, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Flag from "@/components/Flag";
import CategoryMarquee from "@/components/sections/CategoryMarquee";
import {
  SITE,
  whatsappLink,
  emailLink,
  defaultWhatsAppMessage,
} from "@/lib/config";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const FLAGS = ["us", "gb", "ae", "ca", "au"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Layered background */}
      <div className="bg-grid mask-fade-y absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/4 h-[36rem] w-[36rem] animate-aurora rounded-full bg-brand/20 blur-[130px]" />
        <div className="absolute -top-20 right-1/4 h-[30rem] w-[30rem] animate-float-slow rounded-full bg-sky-500/10 blur-[130px]" />
        <div className="absolute bottom-0 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 animate-aurora rounded-full bg-brand/10 blur-[120px]" />
      </div>

      <div className="container relative flex min-h-[92vh] flex-col items-center justify-center py-28 text-center">
        <motion.div variants={container} initial="hidden" animate="show">
          {/* Trust pill */}
          <motion.div variants={item} className="flex justify-center">
            <div className="glass inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 text-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
              </span>
              <span className="font-medium text-white/80">
                Trusted by 500+ clubs worldwide
              </span>
            </div>
          </motion.div>

          <motion.h1
            variants={item}
            className="mx-auto mt-7 max-w-5xl text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Custom Sports Uniforms
            <br />
            <span className="text-gradient-brand">Designed Your Way</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-white/65"
          >
            Fully sublimated team kits, jerseys, hoodies &amp; accessories for
            clubs, academies &amp; schools worldwide. Free custom design, low
            minimums, fast worldwide shipping.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a
              href={whatsappLink(defaultWhatsAppMessage())}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="whatsapp" size="lg">
                <MessageCircle className="h-5 w-5" />
                WhatsApp Us
              </Button>
            </a>
            <a href={emailLink("Bulk Inquiry")}>
              <Button variant="email" size="lg">
                <Mail className="h-5 w-5" />
                Email Us
              </Button>
            </a>
          </motion.div>

          {/* Trust row */}
          <motion.div
            variants={item}
            className="mt-9 flex flex-col items-center justify-center gap-4 text-sm text-white/55 sm:flex-row sm:gap-7"
          >
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5 text-brand">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span>Rated by partners worldwide</span>
            </div>
            <span className="hidden h-4 w-px bg-white/15 sm:block" />
            <div className="flex items-center gap-2.5">
              <span className="flex">
                {FLAGS.map((f) => (
                  <Flag
                    key={f}
                    code={f}
                    size={18}
                    className="-ml-1.5 ring-navy first:ml-0"
                  />
                ))}
              </span>
              <span>Shipping to 5+ markets</span>
            </div>
            <span className="hidden h-4 w-px bg-white/15 sm:block" />
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-brand" />
              <span>Min. order {SITE.MIN_ORDER} pcs</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Marquee */}
        <motion.div
          variants={item}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.8 }}
          className="mt-16 w-full max-w-5xl"
        >
          <CategoryMarquee />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40"
        >
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
