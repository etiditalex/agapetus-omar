import { BackToTop } from "@/components/layout/BackToTop";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SitePreloader } from "@/components/layout/SitePreloader";
import type { GalleryItem, NewsArticle, SearchRecord, SiteConfig } from "@/types/content";

export function SiteShell({
  site,
  catalog,
  news,
  gallery,
  children,
}: {
  site: SiteConfig;
  catalog: SearchRecord[];
  news: NewsArticle[];
  gallery: GalleryItem[];
  children: React.ReactNode;
}) {
  return (
    <>
      <SitePreloader />
      <SiteHeader site={site} catalog={catalog} />
      <main id="main">{children}</main>
      <SiteFooter site={site} news={news} gallery={gallery} />
      <BackToTop />
    </>
  );
}
