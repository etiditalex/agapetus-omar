import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  href,
  linkLabel,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  href?: string;
  linkLabel?: string;
}) {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-gold">{eyebrow}</p>
        <h2 className="mt-3 font-serif text-4xl leading-tight text-ink sm:text-5xl">{title}</h2>
        {description ? <p className="mt-4 text-base leading-relaxed text-muted">{description}</p> : null}
      </div>
      {href && linkLabel ? (
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.16em] text-teal transition hover:text-ink"
        >
          {linkLabel}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      ) : null}
    </div>
  );
}
