import type { Metadata } from "next";
import { Oswald, Outfit } from "next/font/google";
import { SiteShell } from "@/components/layout/SiteShell";
import { getGalleryItems, getLatestNews, getSearchCatalog, getSiteConfig } from "@/lib/content";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Agapetus Omar | Kilifi North",
    template: "%s | Agapetus Omar",
  },
  description:
    "Agapetus Omar is a civil engineer, entrepreneur, and community advocate aspiring to represent Kilifi North. Building dreams. Building Kilifi North.",
  robots: { index: false, follow: false },
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const [site, catalog, news, gallery] = await Promise.all([
    getSiteConfig(),
    getSearchCatalog(),
    getLatestNews(3),
    getGalleryItems(),
  ]);

  return (
    <html lang="en" className={`${outfit.variable} ${oswald.variable}`}>
      <body className="bg-ivory font-sans text-ink antialiased">
        <SiteShell site={site} catalog={catalog} news={news} gallery={gallery.slice(0, 4)}>
          {children}
        </SiteShell>
      </body>
    </html>
  );
}
