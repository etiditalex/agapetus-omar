import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function PageHero({
  eyebrow = "Kilifi County",
  title,
  description,
  image,
  imageAlt,
  crumbs,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  image: string;
  imageAlt: string;
  crumbs: Array<{ label: string; href?: string }>;
}) {
  return (
    <div>
      <section className="relative isolate overflow-hidden bg-[#1c1c1c] text-white">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-top opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1c1c1c] from-[28%] via-[#1c1c1c]/88 to-[#1c1c1c]/20" />
        <Container className="relative flex min-h-[16rem] flex-col justify-center py-10 sm:min-h-[20rem] sm:py-14 lg:min-h-[21.5rem]">
          <p className="flex items-center gap-3 font-display text-xs uppercase tracking-[0.18em] text-[#a5a5a5] sm:gap-4 sm:text-sm sm:tracking-[0.22em]">
            <span className="h-px w-8 bg-[#a5a5a5]" aria-hidden="true" />
            {eyebrow}
          </p>
          <h1 className="mt-4 max-w-4xl text-3xl font-medium leading-tight sm:text-5xl lg:text-[3.4rem]">{title}</h1>
          <nav aria-label="Breadcrumb" className="mt-6 sm:mt-10">
            <ol className="flex flex-wrap items-center gap-3 text-sm text-white/70">
              {crumbs.map((crumb, index) => (
                <li key={`${crumb.label}-${index}`} className="flex items-center gap-3">
                  {index > 0 ? <span aria-hidden="true">›</span> : null}
                  {crumb.href ? (
                    <Link href={crumb.href} className="transition hover:text-white">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </Container>
      </section>
      {description ? (
        <div className="bg-white">
          <Container className="pt-8 sm:pt-12">
            <p className="max-w-3xl text-base leading-8 text-muted">{description}</p>
          </Container>
        </div>
      ) : null}
    </div>
  );
}
