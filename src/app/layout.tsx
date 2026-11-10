import type { Metadata, Viewport } from "next";
import { Alfa_Slab_One, Barlow, Barlow_Condensed, Yellowtail } from "next/font/google";
import "./globals.css";
import { asset } from "@/lib/content";

const display = Alfa_Slab_One({ weight: "400", subsets: ["latin"], variable: "--font-display", display: "swap" });
const sans = Barlow({ weight: ["400", "500", "600", "700"], subsets: ["latin"], variable: "--font-sans", display: "swap" });
const cond = Barlow_Condensed({ weight: ["500", "600", "700"], subsets: ["latin"], variable: "--font-cond", display: "swap" });
const script = Yellowtail({ weight: "400", subsets: ["latin"], variable: "--font-script", display: "swap" });

const title = "Tacos El Caballo · Taco truck on Springwells, Southwest Detroit";
const description =
  "Asada, al pastor, lengua, cabeza, birria, shrimp. Corn tacos $3, open every day 10 to 9 at 1445 Springwells St in Southwest Detroit. 4.7 stars from 875 reviews.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL ?? "http://localhost:3100"),
  title,
  description,
  applicationName: "Tacos El Caballo",
  keywords: ["Tacos El Caballo", "Detroit taco truck", "Springwells tacos", "Southwest Detroit tacos", "al pastor Detroit"],
  openGraph: { type: "website", siteName: "Tacos El Caballo", title, description, locale: "en_US", images: [{ url: asset("/img/og.jpg"), width: 1200, height: 630 }] },
};

export const viewport: Viewport = { themeColor: "#173a2c", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${cond.variable} ${script.variable}`}>
      <body>{children}</body>
    </html>
  );
}
