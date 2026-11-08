export function PlaceholderNote({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 rounded-full border border-gold-soft bg-sand px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-[#8a6428]">
      <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
      {children}
    </p>
  );
}
