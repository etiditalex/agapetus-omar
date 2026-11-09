import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { getGalleryItems, getSiteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Agapetus Omar for Kilifi North. Phone 0790 323 693.",
};

export default async function ContactPage() {
  const [site, gallery] = await Promise.all([getSiteConfig(), getGalleryItems()]);
  const hero = gallery[2] ?? gallery[0];

  return (
    <>
      <PageHero
        eyebrow="Contacts"
        title="Contact"
        description="Phone, email, and a message form for Kilifi North."
        image={hero.image}
        imageAlt={hero.imageAlt}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />
      <section className="bg-white py-10">
        <Container className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex gap-3">
            <Phone className="mt-1 h-5 w-5 shrink-0 text-teal" aria-hidden="true" />
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-muted">Phone</p>
              <p className="mt-1 text-sm font-semibold text-ink">{site.contact.phone}</p>
              <p className="mt-1 text-xs text-muted">Kilifi North</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Mail className="mt-1 h-5 w-5 shrink-0 text-teal" aria-hidden="true" />
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-muted">Email</p>
              <p className="mt-1 break-words text-sm font-semibold text-ink">{site.contact.email}</p>
            </div>
          </div>
          <div className="flex gap-3 sm:col-span-2">
            <MapPin className="mt-1 h-5 w-5 shrink-0 text-teal" aria-hidden="true" />
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-muted">Office</p>
              <p className="mt-1 text-sm font-semibold text-ink">{site.contact.officeName}</p>
              <p className="mt-1 text-sm text-muted">{site.contact.addressLines.join(", ")}</p>
              <p className="mt-2 text-xs text-muted">{site.contact.hours}</p>
            </div>
          </div>
        </Container>
      </section>
      <section className="bg-sand py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">Get in touch</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">{site.contact.note}</p>
            <div id="connect" className="mt-8">
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-ink">Social profiles</h3>
              <ul className="mt-4 flex gap-3">
                {site.social.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={item.label}
                      className="grid h-11 w-11 place-items-center border border-line bg-white text-ink transition hover:border-teal hover:text-teal"
                    >
                      <SocialIcon name={item.icon} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <ContactForm />
        </Container>
      </section>
    </>
  );
}
