"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE, emailLink } from "@/lib/config";
import { CATEGORIES } from "@/lib/data";

const inputClass =
  "w-full rounded-xl border border-line/15 bg-surface px-4 py-3 text-sm text-fg placeholder:text-muted/70 outline-none transition focus:border-brand/60 focus:ring-2 focus:ring-brand/20";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    country: "",
    category: "",
    quantity: "",
    message: "",
  });

  function update(key: keyof typeof form, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = `Bulk Inquiry from ${form.name || "Website Visitor"}${
      form.category ? ` — ${form.category}` : ""
    }`;
    const body = [
      `Name: ${form.name}`,
      `Country: ${form.country}`,
      `Sport Category: ${form.category}`,
      `Quantity: ${form.quantity}`,
      "",
      "Message:",
      form.message,
    ].join("\n");
    window.location.href = emailLink(subject, body);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-fg/90">
            Name
          </label>
          <input
            required
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="John Smith"
            className={inputClass}
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-fg/90">
            Country
          </label>
          <input
            required
            value={form.country}
            onChange={(e) => update("country", e.target.value)}
            placeholder="United States"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-fg/90">
            Sport Category
          </label>
          <select
            required
            value={form.category}
            onChange={(e) => update("category", e.target.value)}
            className={inputClass}
          >
            <option value="" disabled>
              Select a category
            </option>
            {CATEGORIES.map((c) => (
              <option key={c.slug} value={c.name}>
                {c.name}
              </option>
            ))}
            <option value="Multiple / Other">Multiple / Other</option>
          </select>
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-fg/90">
            Quantity (min {SITE.MIN_ORDER})
          </label>
          <input
            required
            type="number"
            min={SITE.MIN_ORDER}
            value={form.quantity}
            onChange={(e) => update("quantity", e.target.value)}
            placeholder={`${SITE.MIN_ORDER}+`}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-fg/90">
          Message
        </label>
        <textarea
          required
          rows={4}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="Tell us what you need, target delivery date, customisation, etc."
          className={inputClass}
        />
      </div>

      <Button type="submit" variant="whatsapp" size="lg" className="w-full">
        <Send className="h-5 w-5" />
        Send Inquiry
      </Button>
      <p className="text-center text-xs text-muted">
        Opens your email app addressed to {SITE.BUSINESS_EMAIL}
      </p>
    </form>
  );
}
