"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  SITE,
  whatsappLink,
  emailLink,
  defaultWhatsAppMessage,
} from "@/lib/config";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/categories", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "section-dark fixed inset-x-0 top-0 z-50 text-fg transition-all duration-300",
        scrolled
          ? "border-b border-line/10 bg-navy/80 backdrop-blur-lg"
          : "bg-transparent"
      )}
    >
      <nav className="container flex h-16 items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl ring-1 ring-line/10">
            <Image
              src={SITE.LOGO}
              alt={`${SITE.COMPANY_NAME} logo`}
              fill
              sizes="40px"
              className="object-cover"
            />
          </span>
          <span className="text-lg font-extrabold tracking-tight text-fg">
            {SITE.COMPANY_NAME}
          </span>
        </Link>

        {/* Desktop links */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full border border-line/10 bg-fg/[0.04] p-1 backdrop-blur-xl md:flex">
          {NAV_LINKS.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                  active ? "text-navy-900" : "text-muted hover:text-fg"
                )}
              >
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-brand"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop actions */}
        <div className="hidden items-center gap-2 md:flex">
          <a
            href={emailLink("Bulk Inquiry")}
            aria-label="Email us"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-muted ring-1 ring-line/10 transition hover:text-brand hover:ring-brand/40"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a
            href={whatsappLink(defaultWhatsAppMessage())}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="whatsapp" size="sm">
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
            </Button>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg text-fg md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-line/10 bg-navy/95 backdrop-blur-lg md:hidden"
          >
            <div className="container flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-3 text-base font-medium text-muted hover:bg-fg/5 hover:text-fg"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-3 grid grid-cols-2 gap-3">
                <a href={emailLink("Bulk Inquiry")}>
                  <Button variant="email" size="md" className="w-full">
                    <Mail className="h-4 w-4" />
                    Email
                  </Button>
                </a>
                <a
                  href={whatsappLink(defaultWhatsAppMessage())}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="whatsapp" size="md" className="w-full">
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
