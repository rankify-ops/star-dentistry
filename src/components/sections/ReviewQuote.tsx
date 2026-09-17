import { Reveal } from "@/components/ui/Reveal";
import { Initials, PlaceholderTag, Stars } from "@/components/ui/Stars";
import { highlights } from "@/content/site";

/**
 * One standout review, given a section of its own between the page's main
 * sections (the Rankify QuoteBand, in STAR's type). `n` picks from highlights.
 */
export function ReviewQuote({ n, tone = "paper" }: { n: number; tone?: "paper" | "mist" | "ink" }) {
  const r = highlights[n];
  if (!r) return null;
  const dark = tone === "ink";
  return (
    <section className={dark ? "bg-ink" : tone === "mist" ? "bg-mist" : "bg-paper"}>
      <div className="ctr py-16 lg:py-24">
        <Reveal>
          <figure className="mx-auto max-w-[900px] text-center">
            <Stars className="size-[18px]" wrapperClassName="justify-center" />
            <blockquote className={`serif mt-6 text-[clamp(26px,3.2vw,42px)] leading-[1.18] ${dark ? "text-white" : "text-ink"}`}>&ldquo;{r.quote}&rdquo;</blockquote>
            <figcaption className="mt-8 flex items-center justify-center gap-3.5">
              <Initials name={r.name} placeholder={r.placeholder} className="size-14 text-[17px]" />
              <span className="text-left">
                <span className={`block text-[15px] font-medium ${dark ? "text-white" : "text-ink"}`}>{r.name}</span>
                <span className={`flex items-center gap-2 text-[13px] ${dark ? "text-white/60" : "text-ink-3"}`}>
                  {r.role}
                  {r.placeholder && <PlaceholderTag />}
                </span>
              </span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
