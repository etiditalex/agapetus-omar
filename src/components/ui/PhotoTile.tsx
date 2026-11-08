import Image from "next/image";
import Link from "next/link";

export function PhotoTile({
  href,
  image,
  imageAlt,
  title,
}: {
  href: string;
  image: string;
  imageAlt: string;
  title: string;
}) {
  return (
    <Link href={href} className="group relative block aspect-[4/5] overflow-hidden bg-[#1c1c1c]">
      <Image
        src={image}
        alt={imageAlt}
        fill
        sizes="(min-width: 768px) 33vw, 50vw"
        className="object-cover object-top transition duration-700 group-hover:scale-105"
      />
      <span className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
      <span className="absolute inset-x-0 bottom-0 p-3 text-sm font-semibold leading-tight text-white sm:p-4 sm:text-lg">{title}</span>
    </Link>
  );
}
