import Image from "next/image";
import Link from "next/link";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { formatDate } from "@/lib/format";
import type { GalleryItem, NewsArticle, SiteConfig } from "@/types/content";

export function SiteFooter({
  site,
  news,
  gallery,
}: {
  site: SiteConfig;
  news: NewsArticle[];
  gallery: GalleryItem[];
}) {
  return (
    <footer className="border-t border-line bg-[#f7f7f9] text-ink">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-3">
        <div>
          <h2 className="text-lg font-bold">About {site.name}</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">{site.summary}</p>
          <Link href="/about" className="mt-4 inline-flex text-sm font-semibold uppercase tracking-[0.12em] text-teal">
            Read More
          </Link>
        </div>
        <div>
          <h2 className="text-lg font-bold">Recent news</h2>
          <ul className="mt-4 space-y-4">
            {news.map((article) => (
              <li key={article.slug}>
                <Link href={`/news/${article.slug}`} className="group block">
                  <span className="block text-xs uppercase tracking-[0.12em] text-muted">{formatDate(article.date)}</span>
                  <span className="mt-1 block text-sm leading-snug group-hover:text-teal">{article.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold">Photo gallery</h2>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {gallery.slice(0, 2).map((item) => (
              <Link key={item.id} href="/gallery" className="relative aspect-[4/3] overflow-hidden bg-white">
                <Image src={item.image} alt={item.imageAlt} fill sizes="180px" className="object-cover" />
              </Link>
            ))}
          </div>
          <Link href="/gallery" className="mt-4 inline-flex text-sm font-semibold uppercase tracking-[0.12em] text-teal">
            More photos
          </Link>
        </div>
      </div>
      <div className="border-t border-line bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
          <ul className="flex flex-wrap gap-x-4 gap-y-2 text-xs uppercase tracking-[0.14em]">
            {site.navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-teal">{item.label}</Link>
              </li>
            ))}
          </ul>
          <div className="flex gap-2">
            {site.social.map((item) => (
              <a key={item.label} href={item.href} target="_blank" rel="noreferrer" aria-label={`${item.label} placeholder profile`} className="grid h-9 w-9 place-items-center border border-line hover:text-teal">
                <SocialIcon name={item.icon} />
              </a>
            ))}
          </div>
        </div>
        <p className="px-5 pb-5 text-center text-xs text-muted sm:px-8">
          © {new Date().getFullYear()} {site.name}.{" "}
          <Link href="/privacy" className="underline">Privacy note</Link>
        </p>
      </div>
    </footer>
  );
}
