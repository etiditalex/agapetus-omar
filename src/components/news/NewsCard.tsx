import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/lib/format";
import type { NewsArticle } from "@/types/content";

export function NewsCard({ article }: { article: NewsArticle }) {
  return (
    <article className="group flex h-full flex-col bg-white">
      <Link href={`/news/${article.slug}`} className="flex h-full flex-col">
        <div className="relative aspect-[16/10] overflow-hidden bg-sand">
          <Image
            src={article.image}
            alt={article.imageAlt}
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="origin-top object-cover object-top transition duration-700 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col py-4">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal">{article.category}</p>
          <h2 className="mt-2 text-xl font-bold leading-snug text-ink group-hover:text-teal">{article.title}</h2>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{article.excerpt}</p>
          <p className="mt-4 text-xs text-muted">
            {formatDate(article.date)} · {article.location}
          </p>
        </div>
      </Link>
    </article>
  );
}
