import Image from "next/image";
import { PlaceholderNote } from "@/components/ui/PlaceholderNote";

export function DetailArticle({
  eyebrow,
  summary,
  paragraphs,
  image,
  imageAlt,
  points,
  pointsLabel,
  meta,
}: {
  eyebrow: string;
  summary: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
  points?: string[];
  pointsLabel?: string;
  meta?: Array<{ label: string; value: string }>;
}) {
  return (
    <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)] lg:gap-12">
      <div>
        <PlaceholderNote>{eyebrow}</PlaceholderNote>
        <p className="mt-6 text-lg leading-8 text-ink">{summary}</p>
        <div className="mt-5 space-y-4 text-base leading-8 text-muted">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        {points && pointsLabel ? (
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-ink">{pointsLabel}</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink/85">
              {points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
      <aside>
        <div className="relative aspect-[4/5] bg-sand">
          <Image src={image} alt={imageAlt} fill sizes="(min-width: 1024px) 32vw, 100vw" className="object-cover object-top" />
        </div>
        {meta ? (
          <dl className="mt-6 space-y-4 text-sm">
            {meta.map((item) => (
              <div key={item.label}>
                <dt className="text-xs uppercase tracking-[0.16em] text-muted">{item.label}</dt>
                <dd className="mt-1 font-semibold text-ink">{item.value}</dd>
              </div>
            ))}
          </dl>
        ) : null}
      </aside>
    </div>
  );
}
