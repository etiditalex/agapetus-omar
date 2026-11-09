import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="py-24">
      <Container className="max-w-2xl">
        <p className="font-display text-sm uppercase tracking-[0.2em] text-muted">404</p>
        <h1 className="mt-3 text-4xl font-bold text-ink sm:text-5xl">Page was not found</h1>
        <p className="mt-4 text-muted">The link may be mistyped, or the page does not exist.</p>
        <Link href="/" className="mt-8 inline-flex bg-teal px-5 py-3 text-xs uppercase tracking-[0.16em] text-white">
          Back to the homepage
        </Link>
      </Container>
    </section>
  );
}
