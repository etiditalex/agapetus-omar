"use client";

import { Search, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import { searchRecords } from "@/lib/search";
import type { SearchRecord } from "@/types/content";

export function SearchDialog({
  open,
  records,
  onClose,
}: {
  open: boolean;
  records: SearchRecord[];
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const titleId = useId();
  const results = useMemo(() => searchRecords(records, query).slice(0, 8), [records, query]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const frame = window.requestAnimationFrame(() => inputRef.current?.focus());
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.cancelAnimationFrame(frame);
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-labelledby={titleId}>
      <button type="button" className="absolute inset-0 bg-deep/70" aria-label="Close search" onClick={onClose} />
      <div className="relative mx-auto flex max-h-[100dvh] w-full max-w-3xl flex-col bg-ivory shadow-2xl sm:mt-16 sm:max-h-[calc(100dvh-8rem)]">
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <h2 id={titleId} className="font-serif text-2xl text-ink">
            Search the preview
          </h2>
          <button type="button" onClick={onClose} className="grid h-10 w-10 place-items-center text-ink" aria-label="Close search">
            <X className="h-5 w-5" />
          </button>
        </div>
        <form action="/search" className="border-b border-line px-5 py-4">
          <label htmlFor="site-search" className="sr-only">
            Search pages, news, events, and priorities
          </label>
          <div className="flex items-center gap-3 border border-line bg-white px-4">
            <Search className="h-4 w-4 text-muted" aria-hidden="true" />
            <input
              ref={inputRef}
              id="site-search"
              name="q"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Try youth, water, Malindi, gallery"
              className="h-12 w-full bg-transparent text-sm outline-none"
            />
          </div>
        </form>
        <div className="min-h-0 flex-1 overflow-y-auto px-5 py-4">
          {query.trim().length < 2 ? (
            <p className="text-sm leading-relaxed text-muted">Type at least two letters. Results stay on this device and are not saved.</p>
          ) : results.length === 0 ? (
            <p className="text-sm text-muted">No sample records match “{query.trim()}”.</p>
          ) : (
            <ul className="divide-y divide-line">
              {results.map((result) => (
                <li key={result.href}>
                  <Link href={result.href} onClick={onClose} className="block py-3 transition hover:text-teal">
                    <span className="text-[11px] uppercase tracking-[0.16em] text-gold">{result.type}</span>
                    <span className="mt-1 block font-serif text-xl text-ink">{result.title}</span>
                    <span className="mt-1 block text-sm text-muted">{result.excerpt}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="border-t border-line px-5 py-3 text-right">
          <button type="submit" formAction="/search" className="hidden" />
          <Link
            href={query.trim().length >= 2 ? `/search?q=${encodeURIComponent(query.trim())}` : "/search"}
            onClick={onClose}
            className="text-sm font-medium uppercase tracking-[0.14em] text-teal"
          >
            View all results
          </Link>
        </div>
      </div>
    </div>
  );
}
