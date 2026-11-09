import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { getGalleryItems, getSearchCatalog } from "@/lib/content";
import { searchRecords } from "@/lib/search";

export const metadata: Metadata = {
  title: "Search",
  description: "Search the Agapetus Omar website.",
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q = "" } = await searchParams;
  const [catalog, gallery] = await Promise.all([getSearchCatalog(), getGalleryItems()]);
  const results = searchRecords(catalog, q);
  const hero = gallery[0];

  return (
    <>
      <PageHero
        eyebrow="Search"
        title="Search"
        description="Search pages, news, events, and priorities."
        image={hero.image}
        imageAlt={hero.imageAlt}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Search" },
        ]}
      />
      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <form action="/search" className="flex flex-col gap-3 sm:flex-row">
            <label htmlFor="q" className="sr-only">
              Search query
            </label>
            <input
              id="q"
              name="q"
              defaultValue={q}
              placeholder="Search youth, water, Malindi…"
              className="w-full border border-line bg-white px-4 py-3 text-sm outline-none focus:border-teal"
            />
            <button type="submit" className="bg-teal px-5 py-3 text-xs uppercase tracking-[0.16em] text-white">
              Search
            </button>
          </form>
          {q.trim().length < 2 ? (
            <p className="mt-8 text-sm text-muted">Enter at least two characters.</p>
          ) : (
            <>
              <p className="mt-8 text-sm text-muted">
                {results.length} result{results.length === 1 ? "" : "s"} for “{q.trim()}”.
              </p>
              <ul className="mt-4 divide-y divide-line border-y border-line">
                {results.map((result) => (
                  <li key={`${result.type}-${result.href}`}>
                    <Link href={result.href} className="block py-5">
                      <span className="text-[11px] uppercase tracking-[0.16em] text-gold">{result.type}</span>
                      <span className="mt-1 block font-serif text-2xl text-ink">{result.title}</span>
                      <span className="mt-2 block text-sm text-muted">{result.excerpt}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </Container>
      </section>
    </>
  );
}
