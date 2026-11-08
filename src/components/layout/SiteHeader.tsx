"use client";

import { ChevronDown, Menu, Phone, Search, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SearchDialog } from "@/components/layout/SearchDialog";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/format";
import type { SearchRecord, SiteConfig } from "@/types/content";

function pathOf(href: string) {
  return href.split("#")[0] || "/";
}

function isActive(href: string, pathname: string) {
  const path = pathOf(href);
  if (path === "/") return pathname === "/";
  return pathname === path || pathname.startsWith(`${path}/`);
}

export function SiteHeader({
  site,
  catalog,
}: {
  site: SiteConfig;
  catalog: SearchRecord[];
}) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    setMenuOpen(false);
    setExpanded(null);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const openSearch = () => {
    setMenuOpen(false);
    setSearchOpen(true);
  };

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <div className="sticky top-0 z-40 border-b border-line bg-white lg:hidden">
        <div className="flex h-16 items-center justify-between px-3">
          <button type="button" className="grid h-11 w-11 place-items-center" aria-label="Open menu" onClick={() => setMenuOpen(true)}>
            <Menu className="h-6 w-6" />
          </button>
          <Logo compact />
          <button type="button" className="grid h-11 w-11 place-items-center" aria-label="Open search" onClick={openSearch}>
            <Search className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="relative hidden border-b border-[#f0f0f4] bg-white lg:block">
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-center px-6 xl:h-28 xl:px-8">
          <Logo />
          <div className="absolute right-6 top-1/2 flex -translate-y-1/2 items-center gap-3 xl:right-8 xl:gap-5">
            <span className="grid h-11 w-11 place-items-center rounded-full border border-teal text-teal">
              <Phone className="h-4 w-4" aria-hidden="true" />
            </span>
            <p className="text-sm leading-5 text-muted">
              <span className="block text-ink">{site.contact.phone}</span>
              <span className="block text-xs">Kilifi North</span>
            </p>
            <Link href="/contact" className="bg-teal px-3 py-2.5 text-[11px] uppercase tracking-[0.14em] text-white transition hover:bg-sea xl:px-4 xl:tracking-[0.18em]">
              Get in touch
            </Link>
          </div>
        </div>
      </div>

      <div className="sticky top-0 z-40 hidden border-b border-line bg-white lg:block">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-center gap-3 px-4 xl:gap-8 xl:px-8">
          <nav className="flex items-center gap-3 xl:gap-7" aria-label="Primary">
            {site.navigation.map((item) => {
              const active = isActive(item.href, pathname) || item.children?.some((child) => isActive(child.href, pathname));
              return (
                <div key={item.href} className="group relative">
                  <Link
                    href={item.href}
                    className={cn(
                      "inline-flex items-center gap-1 whitespace-nowrap py-4 font-display text-[13px] uppercase tracking-[0.04em] xl:text-[15px] xl:tracking-[0.08em]",
                      active ? "text-teal" : "text-ink hover:text-teal",
                    )}
                    aria-current={pathname === pathOf(item.href) ? "page" : undefined}
                  >
                    {item.label}
                    {item.children ? <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" /> : null}
                  </Link>
                  {item.children ? (
                    <div className="invisible absolute left-0 top-full z-20 min-w-56 pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                      <div className="border border-line bg-white py-2 shadow-xl">
                        {item.children.map((child) => (
                          <Link key={child.href} href={child.href} className="block px-4 py-2.5 text-sm text-ink hover:bg-sand hover:text-teal">
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </nav>
          <button type="button" className="grid h-10 w-10 place-items-center text-ink" aria-label="Open search" onClick={openSearch}>
            <Search className="h-4 w-4" />
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Mobile menu">
          <button type="button" className="absolute inset-0 bg-black/50" aria-label="Close menu" onClick={() => setMenuOpen(false)} />
          <div className="absolute left-0 top-0 flex h-full w-[min(100%,20rem)] flex-col overflow-y-auto bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-line px-4 py-3">
              <Logo compact />
              <button type="button" className="grid h-11 w-11 place-items-center" aria-label="Close menu" onClick={() => setMenuOpen(false)}>
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex-1 px-5 py-2" aria-label="Mobile">
              {site.navigation.map((item) => (
                <div key={item.href} className="border-b border-line">
                  {item.children ? (
                    <>
                      <button
                        type="button"
                        className="flex w-full items-center justify-between py-4 text-left font-display text-sm uppercase tracking-[0.12em]"
                        aria-expanded={expanded === item.label}
                        onClick={() => setExpanded((value) => (value === item.label ? null : item.label))}
                      >
                        {item.label}
                        <ChevronDown className={cn("h-4 w-4 transition", expanded === item.label && "rotate-180")} />
                      </button>
                      {expanded === item.label ? (
                        <div className="pb-3 pl-3">
                          <Link href={item.href} className="block py-2 text-sm text-teal">Overview</Link>
                          {item.children.map((child) => (
                            <Link key={child.href} href={child.href} className="block py-2 text-sm text-ink">{child.label}</Link>
                          ))}
                        </div>
                      ) : null}
                    </>
                  ) : (
                    <Link href={item.href} className="block py-4 font-display text-sm uppercase tracking-[0.12em]">{item.label}</Link>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      ) : null}
      <SearchDialog open={searchOpen} records={catalog} onClose={() => setSearchOpen(false)} />
    </>
  );
}
