import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { PlaceholderNote } from "@/components/ui/PlaceholderNote";
import { getBiography, getGalleryItems } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: "Placeholder biography, leadership journey, values, and illustrative milestones for Agapetus Omar.",
};

export default async function AboutPage() {
  const [biography, gallery] = await Promise.all([getBiography(), getGalleryItems()]);
  const hero = gallery[0];
  const portrait = gallery[1] ?? gallery[0];

  return (
    <>
      <PageHero
        eyebrow="About me"
        title="Agapetus Omar"
        description="A sample life story for layout review. It is not an official biography and it does not claim an elected office."
        image={hero.image}
        imageAlt={hero.imageAlt}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "About me" },
        ]}
      />
      <section className="bg-white py-16 sm:py-20">
        <Container className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <PlaceholderNote>Placeholder biography</PlaceholderNote>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-ink sm:text-4xl">Overview</h2>
            <p className="mt-6 text-lg leading-8 text-muted">{biography.introduction}</p>
            <div className="mt-5 space-y-4 text-base leading-8 text-muted">
              {biography.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="relative min-h-[22rem] bg-sand lg:min-h-[32rem]">
            <Image src={portrait.image} alt={portrait.imageAlt} fill className="object-cover object-top" sizes="(min-width: 1024px) 40vw, 100vw" />
            <p className="absolute inset-x-0 bottom-0 bg-white/92 px-4 py-3 text-xs leading-relaxed text-muted">
              {biography.portraitNote}
            </p>
          </div>
        </Container>
      </section>

      <section id="journey" className="scroll-mt-28 bg-[#1c1c1c] py-16 text-white sm:py-20">
        <h2 className="px-4 text-center font-display text-xl uppercase tracking-[0.12em] text-white/70 sm:text-2xl sm:tracking-[0.18em]">Leadership journey</h2>
        <p className="mx-auto mt-3 max-w-2xl px-5 text-center text-sm leading-relaxed text-white/55">
          Illustrative chapters. Periods are labels for the layout, not a verified timeline.
        </p>
        <Container className="mt-12 space-y-14">
          {biography.journey.map((chapter, index) => {
            const photo = gallery[index % gallery.length];
            return (
              <article key={chapter.title} className="grid items-center gap-8 lg:grid-cols-[minmax(0,22rem)_1fr]">
                <div className="relative aspect-[16/10] bg-black/40">
                  <Image src={photo.image} alt={photo.imageAlt} fill className="object-cover" sizes="360px" />
                </div>
                <div>
                  <p className="text-sm text-white/55">{chapter.period}</p>
                  <h3 className="mt-2 text-2xl font-bold">{chapter.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">{chapter.summary}</p>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-white/85">
                    {chapter.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </Container>
      </section>

      <section id="values" className="scroll-mt-28 bg-white py-16 sm:py-20">
        <Container>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">Values</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {biography.values.map((value) => (
              <article key={value.title}>
                <h3 className="text-xl font-bold text-ink">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{value.summary}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-sand py-16 sm:py-20">
        <Container>
          <PlaceholderNote>Illustrative milestones</PlaceholderNote>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-ink sm:text-4xl">Achievements to be verified</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {biography.milestones.map((item) => (
              <article key={item.title}>
                <h3 className="text-xl font-bold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.summary}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
