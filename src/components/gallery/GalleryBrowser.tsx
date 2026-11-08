"use client";

import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { formatDate } from "@/lib/format";
import type { GalleryItem } from "@/types/content";

export function GalleryBrowser({ items }: { items: GalleryItem[] }) {
  const [filter, setFilter] = useState<"All" | "Photos" | "Videos" | string>("All");
  const [active, setActive] = useState<number | null>(null);
  const categories = ["All", "Photos", "Videos", ...Array.from(new Set(items.map((item) => item.category)))];

  const visible = items.filter((item) => {
    if (filter === "Photos") return item.type === "photo";
    if (filter === "Videos") return item.type === "video";
    if (filter === "All") return true;
    return item.category === filter;
  });

  useEffect(() => {
    if (active === null) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") setActive((current) => (current === null ? current : (current + 1) % visible.length));
      if (event.key === "ArrowLeft") {
        setActive((current) => (current === null ? current : (current - 1 + visible.length) % visible.length));
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [active, visible.length]);

  const current = active === null ? null : visible[active];

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Gallery filters">
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            role="tab"
            aria-selected={filter === item}
            className={`px-1 py-2 font-display text-xs uppercase tracking-[0.16em] ${filter === item ? "text-teal" : "text-ink hover:text-teal"}`}
            onClick={() => {
              setFilter(item);
              setActive(null);
            }}
          >
            {item}
          </button>
        ))}
      </div>
      <p className="mt-6 text-sm text-muted">{visible.length} items in this view. Photographs are illustrative.</p>
      {visible.length === 0 ? (
        <p className="mt-8 text-muted">Nothing in this filter.</p>
      ) : (
        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3">
          {visible.map((item, index) => (
            <button
              key={item.id}
              type="button"
              className="group relative aspect-[3/4] overflow-hidden bg-sand text-left"
              onClick={() => setActive(index)}
            >
              <Image src={item.image} alt={item.imageAlt} fill sizes="(min-width: 1024px) 33vw, 50vw" className="object-cover object-top transition duration-700 group-hover:scale-105" />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3 text-white sm:p-4">
                <span className="block text-[10px] uppercase tracking-[0.16em] text-white/70">{item.category}</span>
                <span className="mt-1 block text-sm font-semibold leading-tight sm:text-lg">{item.title}</span>
              </span>
              {item.type === "video" ? (
                <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-navy">
                  <Play className="h-4 w-4" aria-hidden="true" />
                </span>
              ) : null}
            </button>
          ))}
        </div>
      )}
      {current ? (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-deep/90" role="dialog" aria-modal="true" aria-label={current.title}>
          <div className="flex min-h-full items-center justify-center px-4 py-16">
          <button type="button" className="absolute right-4 top-4 grid h-11 w-11 place-items-center text-white" aria-label="Close gallery" onClick={() => setActive(null)}>
            <X className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center border border-white/30 text-white sm:left-6"
            aria-label="Previous item"
            onClick={() => setActive((value) => (value === null ? value : (value - 1 + visible.length) % visible.length))}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center border border-white/30 text-white sm:right-6"
            aria-label="Next item"
            onClick={() => setActive((value) => (value === null ? value : (value + 1) % visible.length))}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <figure className="w-full max-w-4xl">
            <div className="relative aspect-[16/10] bg-black">
              <Image src={current.image} alt={current.imageAlt} fill className="object-contain" sizes="90vw" />
              {current.type === "video" ? (
                <div className="absolute inset-0 grid place-items-center bg-deep/55 p-6 text-center text-white">
                  <div>
                    <Play className="mx-auto h-10 w-10" aria-hidden="true" />
                    <p className="mt-4 max-w-md font-serif text-2xl">Video playback is not connected</p>
                    <p className="mt-2 text-sm text-white/80">This lightbox is a frontend placeholder. No video file is hosted or streamed.</p>
                  </div>
                </div>
              ) : null}
            </div>
            <figcaption className="mt-4 text-white">
              <p className="text-[11px] uppercase tracking-[0.16em] text-gold-soft">
                {current.category} · {formatDate(current.date)} · Placeholder
              </p>
              <p className="mt-2 font-serif text-xl sm:text-2xl">{current.title}</p>
              <p className="mt-2 text-sm text-white/75">{current.caption}</p>
            </figcaption>
          </figure>
          </div>
        </div>
      ) : null}
    </div>
  );
}
