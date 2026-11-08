export function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-KE", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Africa/Nairobi",
  }).format(new Date(iso));
}

export function formatEventWhen(iso: string) {
  const date = new Date(iso);
  const zone = "Africa/Nairobi";
  return {
    day: new Intl.DateTimeFormat("en-KE", { day: "2-digit", timeZone: zone }).format(date),
    month: new Intl.DateTimeFormat("en-KE", { month: "short", timeZone: zone }).format(date),
    time: new Intl.DateTimeFormat("en-KE", {
      hour: "numeric",
      minute: "2-digit",
      timeZone: zone,
    }).format(date),
    full: formatDate(iso),
  };
}

export function isUpcoming(iso: string, now = new Date()) {
  return new Date(iso).getTime() >= now.getTime();
}

export function paginate<T>(items: T[], page: number, perPage: number) {
  const total = items.length;
  const totalPages = Math.max(1, Math.ceil(total / perPage) || 1);
  const current = Number.isFinite(page) ? Math.min(Math.max(Math.trunc(page), 1), totalPages) : 1;
  const start = (current - 1) * perPage;
  return {
    items: items.slice(start, start + perPage),
    total,
    totalPages,
    current,
    from: total === 0 ? 0 : start + 1,
    to: Math.min(start + perPage, total),
  };
}

export function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}
