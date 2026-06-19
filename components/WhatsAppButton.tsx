"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { whatsappLink, defaultWhatsAppMessage } from "@/lib/config";

export default function WhatsAppButton() {
  return (
    <motion.a
      href={whatsappLink(defaultWhatsAppMessage())}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-brand text-navy-900 shadow-glow"
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-brand animate-pulse-ring" />
      <MessageCircle className="relative h-7 w-7" strokeWidth={2.5} />
    </motion.a>
  );
}
