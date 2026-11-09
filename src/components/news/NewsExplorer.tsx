"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { NewsCard } from "@/components/news/NewsCard";
import { paginate } from "@/lib/format";
import type { NewsArticle } from "@/types/content";

const PER_PAGE = 6;

export function NewsExplorer({ articles }: { articles: NewsArticle[] }) {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const category = params.get("category") || "All";
  const query = params.get("q") || "";
  const page = Number(params.get("page") || "1");

  const filtered = articles.filter((article) => {
    const categoryMatch = category === "All" || article.category === category;
    const haystack = `${article.title} ${article.excerpt} ${article.location}`.toLowerCase();
    const queryMatch = query.trim().length === 0 || haystack.includes(query.trim().toLowerCase());
    return categoryMatch && queryMatch;
  });
  const categories = ["All", ...Array.from(new Set(articles.map((article) => article.category)))];
  const result = paginate(filtered, page, PER_PAGE);

  function update(next: Record<string, string | null>) {
    const search = new URLSearchParams(params.toString());
    Object.entries(next).forEach(([key, value]) => {
      if (!value) search.delete(key);
      else search.set(key, value);
    });
    const value = search.toString();
    router.replace(value ? `${pathname}?${value}` : pathname, { scroll: false });
  }

  return (
    <div>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="News categories">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={category === item}
              className={`px-1 py-2 font-display text-xs uppercase tracking-[0.16em] ${category === item ? "text-teal" : "text-ink hover:text-teal"}`}
              onClick={() => update({ category: item === "All" ? null : item, page: null })}
            >
              {item}
            </button>
          ))}
        </div>
        <form
          className="flex w-full max-w-md"
          onSubmit={(event) => {
            event.preventDefault();
            const data = new FormData(event.currentTarget);
            const value = String(data.get("q") || "");
            update({ q: value.trim() || null, page: null });
          }}
        >
          <label htmlFor="news-search" className="sr-only">
            Search stories
          </label>
          <input
            id="news-search"
            name="q"
            defaultValue={query}
            placeholder="Search stories"
            className="w-full border border-line bg-white px-4 py-3 text-sm outline-none focus:border-teal"
          />
        </form>
      </div>
      <p className="mt-6 text-sm text-muted">
        {result.total === 0 ? "No stories match." : `Showing ${result.from}–${result.to} of ${result.total}.`}
      </p>
      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {result.items.map((article) => (
          <NewsCard key={article.slug} article={article} />
        ))}
      </div>
      {result.totalPages > 1 ? (
        <div className="mt-10 flex items-center justify-center gap-2">
          <button
            type="button"
            className="border border-line bg-white px-4 py-2 text-sm disabled:opacity-40"
            disabled={result.current === 1}
            onClick={() => update({ page: String(result.current - 1) })}
          >
            Previous
          </button>
          {Array.from({ length: result.totalPages }, (_, index) => index + 1).map((number) => (
            <button
              key={number}
              type="button"
              aria-current={number === result.current ? "page" : undefined}
              className={`h-10 w-10 border text-sm ${number === result.current ? "border-teal bg-teal text-white" : "border-line bg-white"}`}
              onClick={() => update({ page: number === 1 ? null : String(number) })}
            >
              {number}
            </button>
          ))}
          <button
            type="button"
            className="border border-line bg-white px-4 py-2 text-sm disabled:opacity-40"
            disabled={result.current === result.totalPages}
            onClick={() => update({ page: String(result.current + 1) })}
          >
            Next
          </button>
        </div>
      ) : null}
    </div>
  );
}
