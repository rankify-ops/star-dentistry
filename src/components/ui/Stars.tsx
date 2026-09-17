/** Filled rating stars — the Google gold. `className` sizes each star. */
export function Stars({ count = 5, className = "size-4", wrapperClassName = "" }: { count?: number; className?: string; wrapperClassName?: string }) {
  return (
    <span className={`flex items-center gap-0.5 ${wrapperClassName}`} role="img" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className={className} fill="#f5b301" aria-hidden="true">
          <path d="M12 2.5l2.9 6.3 6.9.7-5.2 4.7 1.5 6.8L12 17.6l-6.1 3.4 1.5-6.8L2.2 9.5l6.9-.7Z" />
        </svg>
      ))}
    </span>
  );
}

/**
 * Initials stand in for reviewer photos — never a stock face. Placeholder
 * reviewers get a plain person glyph instead of meaningless "P1" initials.
 */
export function Initials({ name, placeholder = false, className = "size-11 text-[15px]" }: { name: string; placeholder?: boolean; className?: string }) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
  return (
    <span className={`grid flex-none place-items-center overflow-hidden rounded-full bg-teal-tint font-semibold text-teal-ink ${className}`}>
      {placeholder ? (
        <svg viewBox="0 0 24 24" className="mt-[22%] size-[78%]" fill="currentColor" opacity=".55" aria-hidden="true">
          <circle cx="12" cy="7.5" r="4.5" />
          <path d="M3 22c0-5 4-8.5 9-8.5s9 3.5 9 8.5Z" />
        </svg>
      ) : (
        initials
      )}
    </span>
  );
}

export function PlaceholderTag() {
  return (
    <span className="rounded-full border border-rule-2 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-ink-3">Placeholder</span>
  );
}
