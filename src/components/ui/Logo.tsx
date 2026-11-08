import Link from "next/link";

export function Logo({
  tone = "dark",
  compact = false,
}: {
  name?: string;
  place?: string;
  tone?: "dark" | "light";
  compact?: boolean;
}) {
  const wave = tone === "light" ? "#8fd06a" : "#1a1a1a";
  const word = tone === "light" ? "text-white" : "text-ink";

  return (
    <Link href="/" className="inline-flex items-center gap-3" aria-label="Agapetus Omar, home">
      <svg viewBox="0 0 92 36" className={compact ? "h-7 w-[4.4rem]" : "h-9 w-[5.4rem]"} aria-hidden="true">
        <path
          d="M2 24c10-16 16-16 22 0s12 16 22 0 12-16 22 0 12 16 22 0"
          fill="none"
          stroke={wave}
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      </svg>
      <span className={`font-display text-[15px] tracking-[0.42em] ${word}`}>OMAR</span>
    </Link>
  );
}
