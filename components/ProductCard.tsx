"use client";

import Image from "next/image";
import { MessageCircle, Mail, Sparkles, Package } from "lucide-react";
import type { Product } from "@/lib/data";
import SpotlightCard from "@/components/SpotlightCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  SITE,
  whatsappLink,
  emailLink,
  defaultWhatsAppMessage,
} from "@/lib/config";

type ProductCardProps = {
  product: Product;
  categoryName: string;
};

export default function ProductCard({ product, categoryName }: ProductCardProps) {
  const label = `${product.name} (${categoryName})`;
  const subject = `Custom Quote — ${product.name} (${categoryName})`;
  const body = `Hello ${SITE.COMPANY_NAME},\n\nI'd like a custom team quote for "${product.name}" (${categoryName}), min ${SITE.MIN_ORDER} pcs.\n\nQuantity:\nColors / Logo:\nCountry:\n\nThank you.`;

  return (
    <SpotlightCard className="flex h-full flex-col">
      {/* Product image */}
      <div className="relative aspect-square w-full overflow-hidden bg-white">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
        />
        <Badge className="absolute left-3 top-3 backdrop-blur" tone="brand">
          <Sparkles className="h-3 w-3" />
          {product.quality}
        </Badge>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-bold leading-snug text-fg">
          {product.name}
        </h3>
        <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted">
          {product.description}
        </p>

        <div className="mt-4">
          <Badge tone="muted">
            <Package className="h-3 w-3" />
            Min. Order: {SITE.MIN_ORDER} pcs
          </Badge>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <a
            href={whatsappLink(defaultWhatsAppMessage(label))}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="whatsapp" size="sm" className="w-full">
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </Button>
          </a>
          <a href={emailLink(subject, body)}>
            <Button variant="email" size="sm" className="w-full">
              <Mail className="h-4 w-4" />
              Email
            </Button>
          </a>
        </div>
      </div>
    </SpotlightCard>
  );
}
