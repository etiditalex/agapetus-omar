import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/contact/ContactForm";
import { Container } from "@/components/ui/Container";
import { SocialIcon } from "@/components/ui/SocialIcon";
import type { Biography, GalleryItem, Priority, SiteConfig } from "@/types/content";

export function HomeSections({
  biography,
  priorities,
  portrait,
  site,
}: {
  biography: Biography;
  priorities: Priority[];
  portrait?: GalleryItem;
  site: SiteConfig;
}) {
  return (
    <>
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <Container className="grid items-center gap-8 sm:gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">About Agapetus Omar</h2>
            <p className="mt-6 text-lg leading-8 text-muted">{biography.introduction}</p>
            <p className="mt-4 text-base leading-8 text-muted">{biography.paragraphs[0]}</p>
            <Link href="/about" className="mt-6 inline-flex text-sm font-semibold uppercase tracking-[0.14em] text-teal">
              Read More
            </Link>
          </div>
          <div className="relative min-h-[18rem] bg-sand sm:min-h-[24rem] lg:min-h-[26rem]">
            {portrait ? (
              <Image src={portrait.image} alt={portrait.imageAlt} fill className="object-cover object-top" sizes="(min-width: 1024px) 40vw, 100vw" />
            ) : null}
            <p className="absolute inset-x-0 bottom-0 bg-white/90 px-4 py-3 text-xs leading-relaxed text-muted">
              {biography.portraitNote}
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-sand py-12 sm:py-16 lg:py-20">
        <Container>
          <h2 className="text-center text-3xl font-bold tracking-tight text-ink sm:text-4xl">Our commitment to Kilifi North</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-muted">
            The six commitments from the Manifesto 2027 poster. These tiles are the agenda, not a record of completed projects.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3">
            {priorities.map((priority) => (
              <Link key={priority.slug} href={`/vision/${priority.slug}`} className="group relative aspect-[4/5] overflow-hidden bg-deep">
                <Image src={priority.image} alt={priority.imageAlt} fill sizes="(min-width: 768px) 33vw, 50vw" className="object-cover transition duration-700 group-hover:scale-105" />
                <span className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                <span className="absolute inset-x-0 bottom-0 p-3 text-sm font-semibold leading-tight text-white sm:p-4 sm:text-base lg:text-lg">{priority.title}</span>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/vision" className="inline-flex bg-teal px-6 py-3 text-xs uppercase tracking-[0.18em] text-white hover:bg-sea">
              View the agenda
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <Container className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <h2 className="text-3xl font-bold text-ink">Follow on social media</h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
              These profiles are placeholders. They open example.com and are not live accounts.
            </p>
            <div className="mt-6 flex gap-3">
              {site.social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${item.label} placeholder profile`}
                  className="grid h-11 w-11 place-items-center border border-line text-ink transition hover:border-teal hover:text-teal"
                >
                  <SocialIcon name={item.icon} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h2 className="mb-5 text-3xl font-bold text-ink">Get in touch</h2>
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
