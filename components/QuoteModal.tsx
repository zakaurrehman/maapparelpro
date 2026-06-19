"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, MessageCircle, Mail, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  SITE,
  whatsappLink,
  emailLink,
  defaultWhatsAppMessage,
} from "@/lib/config";

type QuoteModalProps = {
  /** Optional product/category context to pre-fill the message. */
  context?: string;
  /** Trigger button label + variant */
  label?: string;
};

export default function QuoteModal({
  context,
  label = "Get a Quote",
}: QuoteModalProps) {
  const [open, setOpen] = useState(false);

  const subject = context
    ? `Bulk Quote Request — ${context}`
    : "Bulk Quote Request";
  const body = context
    ? `Hello ${SITE.COMPANY_NAME},\n\nI'd like a bulk quote for "${context}" (minimum ${SITE.MIN_ORDER}pcs).\n\nQuantity:\nCountry:\n\nThank you.`
    : `Hello ${SITE.COMPANY_NAME},\n\nI'd like a bulk quote.\n\nProduct/Category:\nQuantity (min ${SITE.MIN_ORDER}pcs):\nCountry:\n\nThank you.`;

  return (
    <>
      <Button variant="solid" size="md" onClick={() => setOpen(true)}>
        <Quote className="h-4 w-4" />
        {label}
      </Button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-navy-900/80 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              initial={{ scale: 0.92, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.92, y: 20, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              className="relative w-full max-w-md rounded-2xl border border-white/10 bg-navy-100 p-7 shadow-card"
            >
              <button
                aria-label="Close"
                onClick={() => setOpen(false)}
                className="absolute right-4 top-4 text-white/50 transition hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>

              <h3 className="text-xl font-bold text-white">
                Request a Bulk Quote
              </h3>
              <p className="mt-2 text-sm text-white/60">
                {context ? (
                  <>
                    For <span className="text-brand">{context}</span> —
                    minimum order {SITE.MIN_ORDER} pieces.
                  </>
                ) : (
                  <>Minimum order {SITE.MIN_ORDER} pieces. We reply fast.</>
                )}
              </p>

              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={whatsappLink(defaultWhatsAppMessage(context))}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="whatsapp" size="lg" className="w-full">
                    <MessageCircle className="h-5 w-5" />
                    Order via WhatsApp
                  </Button>
                </a>
                <a href={emailLink(subject, body)}>
                  <Button variant="email" size="lg" className="w-full">
                    <Mail className="h-5 w-5" />
                    Inquire via Email
                  </Button>
                </a>
              </div>

              <p className="mt-5 text-center text-xs text-white/40">
                {SITE.BUSINESS_EMAIL}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
