import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "flag-icons/css/flag-icons.min.css";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollProgress from "@/components/ScrollProgress";
import { SITE } from "@/lib/config";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${SITE.DOMAIN}`),
  title: {
    default: `${SITE.COMPANY_NAME} — ${SITE.TAGLINE}`,
    template: `%s | ${SITE.COMPANY_NAME}`,
  },
  description:
    "Custom sublimated sports uniforms for clubs, academies & schools across the USA, UK & worldwide. Free design, low minimums, fast worldwide shipping. Get a quote via WhatsApp or email.",
  keywords: [
    "custom sports uniforms",
    "custom team jerseys",
    "sublimated uniforms manufacturer",
    "custom sportswear supplier USA UK",
    "team uniform maker for clubs and schools",
  ],
  openGraph: {
    title: `${SITE.COMPANY_NAME} — ${SITE.TAGLINE}`,
    description:
      "Custom sublimated sports uniforms & team apparel for clubs, academies & schools worldwide.",
    url: `https://${SITE.DOMAIN}`,
    siteName: SITE.COMPANY_NAME,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.COMPANY_NAME} — ${SITE.TAGLINE}`,
    description:
      "Custom sublimated sports uniforms & team apparel for clubs, academies & schools worldwide.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans">
        <ScrollProgress />
        <Navbar />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
