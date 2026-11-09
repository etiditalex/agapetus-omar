"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { formatEventWhen, isUpcoming, paginate } from "@/lib/format";
import type { CalendarEvent } from "@/types/content";

const PER_PAGE = 4;

export function EventsExplorer({ events }: { events: CalendarEvent[] }) {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const when = params.get("when") || "upcoming";
  const category = params.get("category") || "All";
  const query = params.get("q") || "";
  const page = Number(params.get("page") || "1");
  const categories = ["All", ...Array.from(new Set(events.map((event) => event.category)))];

  const filtered = events.filter((event) => {
    const upcoming = isUpcoming(event.date);
    const whenMatch = when === "all" || (when === "past" ? !upcoming : upcoming);
    const categoryMatch = category === "All" || event.category === category;
    const haystack = `${event.title} ${event.summary} ${event.town}`.toLowerCase();
    const queryMatch = query.trim().length === 0 || haystack.includes(query.trim().toLowerCase());
    return whenMatch && categoryMatch && queryMatch;
  });

  const ordered = [...filtered].sort((a, b) => {
    if (when === "past") return a.date < b.date ? 1 : -1;
    return a.date < b.date ? -1 : 1;
  });
  const result = paginate(ordered, page, PER_PAGE);

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
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Event timing">
          {[
            ["upcoming", "Upcoming"],
            ["past", "Past"],
            ["all", "All"],
          ].map(([value, label]) => (
            <button
              key={value}
              type="button"
              role="tab"
              aria-selected={when === value}
              className={`px-1 py-2 font-display text-xs uppercase tracking-[0.16em] ${when === value ? "text-teal" : "text-ink hover:text-teal"}`}
              onClick={() => update({ when: value === "upcoming" ? null : value, page: null })}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                className={`px-1 py-2 font-display text-xs uppercase tracking-[0.16em] ${category === item ? "text-teal" : "text-ink hover:text-teal"}`}
                onClick={() => update({ category: item === "All" ? null : item, page: null })}
              >
                {item}
              </button>
            ))}
          </div>
          <form
            className="w-full max-w-md"
            onSubmit={(event) => {
              event.preventDefault();
              const data = new FormData(event.currentTarget);
              update({ q: String(data.get("q") || "").trim() || null, page: null });
            }}
          >
            <label htmlFor="event-search" className="sr-only">
              Search events
            </label>
            <input
              id="event-search"
              name="q"
              defaultValue={query}
              placeholder="Search by town or title"
              className="w-full border border-line bg-white px-4 py-3 text-sm outline-none focus:border-teal"
            />
          </form>
        </div>
      </div>
      <p className="mt-6 text-sm text-muted">
        {result.total === 0 ? "No events match." : `Showing ${result.from}–${result.to} of ${result.total}.`}
      </p>
      <div className="mt-6 divide-y divide-line border-y border-line">
        {result.items.map((event) => {
          const timing = formatEventWhen(event.date);
          return (
            <Link key={event.slug} href={`/events/${event.slug}`} className="grid gap-4 py-6 sm:grid-cols-[5.5rem_1fr] sm:gap-6">
              <span>
                <span className="block text-3xl font-bold text-ink">{timing.day}</span>
                <span className="text-[11px] uppercase tracking-[0.16em] text-gold">{timing.month}</span>
              </span>
              <span>
                <span className="text-[11px] uppercase tracking-[0.16em] text-teal">{event.category}</span>
                <span className="mt-1 block text-2xl font-bold text-ink">{event.title}</span>
                <span className="mt-2 block text-sm text-muted">
                  {timing.full} · {timing.time} · {event.venue}
                </span>
                <span className="mt-2 block text-sm leading-relaxed text-ink/80">{event.summary}</span>
              </span>
            </Link>
          );
        })}
      </div>
      {result.totalPages > 1 ? (
        <div className="mt-8 flex justify-center gap-2">
          <button type="button" className="border border-line bg-white px-4 py-2 text-sm disabled:opacity-40" disabled={result.current === 1} onClick={() => update({ page: String(result.current - 1) })}>
            Previous
          </button>
          <button type="button" className="border border-line bg-white px-4 py-2 text-sm disabled:opacity-40" disabled={result.current === result.totalPages} onClick={() => update({ page: String(result.current + 1) })}>
            Next
          </button>
        </div>
      ) : null}
    </div>
  );
}
