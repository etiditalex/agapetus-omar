import "server-only";

import { biography } from "@/data/biography";
import { calendarEvents } from "@/data/events";
import { galleryItems } from "@/data/gallery";
import { heroSlides } from "@/data/home";
import { initiatives } from "@/data/initiatives";
import { newsArticles } from "@/data/news";
import { priorities } from "@/data/priorities";
import { siteConfig } from "@/data/site";
import { isUpcoming } from "@/lib/format";
import type { SearchRecord } from "@/types/content";

/**
 * Content access layer for Phase 1.
 * Pages call these functions. The bodies read local mock data.
 * A later Supabase phase can replace the bodies without rewriting the UI.
 */

export async function getSiteConfig() {
  return siteConfig;
}

export async function getHeroSlides() {
  return heroSlides;
}

export async function getBiography() {
  return biography;
}

export async function getPriorities() {
  return priorities;
}

export async function getPriority(slug: string) {
  return priorities.find((item) => item.slug === slug) ?? null;
}

export async function getInitiatives() {
  return initiatives;
}

export async function getFeaturedInitiatives() {
  const featured = initiatives.filter((item) => item.featured);
  return featured.length > 0 ? featured : initiatives.slice(0, 3);
}

export async function getInitiative(slug: string) {
  return initiatives.find((item) => item.slug === slug) ?? null;
}

export async function getNewsArticles() {
  return [...newsArticles].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getLatestNews(limit = 3) {
  const articles = await getNewsArticles();
  return articles.slice(0, limit);
}

export async function getNewsArticle(slug: string) {
  return newsArticles.find((item) => item.slug === slug) ?? null;
}

export async function getRelatedNews(slug: string, limit = 3) {
  const articles = await getNewsArticles();
  const current = articles.find((item) => item.slug === slug);
  if (!current) return [];
  const others = articles.filter((item) => item.slug !== slug);
  const same = others.filter((item) => item.category === current.category);
  const rest = others.filter((item) => item.category !== current.category);
  return [...same, ...rest].slice(0, limit);
}

export async function getEvents() {
  return [...calendarEvents].sort((a, b) => (a.date < b.date ? -1 : 1));
}

export async function getUpcomingEvents(limit?: number) {
  const events = (await getEvents()).filter((item) => isUpcoming(item.date));
  return typeof limit === "number" ? events.slice(0, limit) : events;
}

export async function getPastEvents() {
  return (await getEvents())
    .filter((item) => !isUpcoming(item.date))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getEvent(slug: string) {
  return calendarEvents.find((item) => item.slug === slug) ?? null;
}

export async function getRelatedEvents(slug: string, limit = 3) {
  const events = await getEvents();
  return events.filter((item) => item.slug !== slug).slice(0, limit);
}

export async function getGalleryItems() {
  return galleryItems;
}

export async function getSearchCatalog(): Promise<SearchRecord[]> {
  const [articles, events, priorityList, initiativeList] = await Promise.all([
    getNewsArticles(),
    getEvents(),
    getPriorities(),
    getInitiatives(),
  ]);

  const pages: SearchRecord[] = [
    {
      type: "Page",
      title: "About Agapetus Omar",
      href: "/about",
      excerpt: "Civil engineer, entrepreneur, and community advocate for Kilifi North.",
      keywords: "biography about values journey kilifi",
    },
    {
      type: "Page",
      title: "Vision and priorities",
      href: "/vision",
      excerpt: "Leadership vision and proposed areas of community development.",
      keywords: "vision priorities agenda youth fisheries schools water",
    },
    {
      type: "Page",
      title: "Community engagement",
      href: "/community",
      excerpt: "Community engagement and public participation in Kilifi.",
      keywords: "community baraza participation initiatives",
    },
    {
      type: "Page",
      title: "News and updates",
      href: "/news",
      excerpt: "Updates across youth, livelihoods, health, and education.",
      keywords: "news updates briefings",
    },
    {
      type: "Page",
      title: "Events",
      href: "/events",
      excerpt: "Upcoming and past engagements.",
      keywords: "events calendar forums",
    },
    {
      type: "Page",
      title: "Media gallery",
      href: "/gallery",
      excerpt: "Photographs and video.",
      keywords: "gallery photos videos media",
    },
    {
      type: "Page",
      title: "Contact",
      href: "/contact",
      excerpt: "Phone, email, and a message form for Kilifi North.",
      keywords: "contact email phone office",
    },
  ];

  return [
    ...pages,
    ...articles.map((item) => ({
      type: "News" as const,
      title: item.title,
      href: `/news/${item.slug}`,
      excerpt: item.excerpt,
      keywords: `${item.category} ${item.location}`,
    })),
    ...events.map((item) => ({
      type: "Event" as const,
      title: item.title,
      href: `/events/${item.slug}`,
      excerpt: item.summary,
      keywords: `${item.category} ${item.town} ${item.venue}`,
    })),
    ...priorityList.map((item) => ({
      type: "Priority" as const,
      title: item.title,
      href: `/vision/${item.slug}`,
      excerpt: item.summary,
      keywords: item.intent,
    })),
    ...initiativeList.map((item) => ({
      type: "Initiative" as const,
      title: item.title,
      href: `/community/${item.slug}`,
      excerpt: item.summary,
      keywords: `${item.area} ${item.status}`,
    })),
  ];
}
