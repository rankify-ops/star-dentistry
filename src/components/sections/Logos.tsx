import { asset } from "@/lib/basePath";
import { logos } from "@/content/site";

/*
 * Health funds, suppliers and memberships from the live logo strip.
 *
 * Made deliberately boring so it can't glitch:
 *  - every slot is a fixed 170×48 box, so nothing reflows as images decode
 *    (an unsized <img> collapses to nothing until it loads — that's what made
 *    logos "disappear")
 *  - the set repeats until ONE half is wider than any screen, so the -50% loop
 *    never runs out of logos and shows a gap
 *  - eager loading: lazy images inside a transformed track load late and pop in
 *  - the edges fade with overlays rather than a CSS mask, which some browsers
 *    re-rasterise every frame
 */
const SLOT = 170;
const MIN_HALF = 3600;
const COPIES = Math.ceil(MIN_HALF / (logos.length * SLOT));
const HALF = Array.from({ length: COPIES }, () => logos).flat();
const TRACK = [...HALF, ...HALF];

export function Logos() {
  return (
    <section className="relative overflow-hidden border-b border-rule bg-white py-7" aria-label="Health funds, partners and memberships">
      <ul className="logo-rail flex w-max items-center">
        {TRACK.map((l, i) => (
          <li key={i} className="flex h-12 w-[170px] flex-none items-center justify-center px-4" aria-hidden={i >= logos.length}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset(`/img/${l.file}.webp`)}
              alt={i < logos.length ? l.alt : ""}
              width={320}
              height={120}
              loading="eager"
              decoding="async"
              className="max-h-12 w-auto max-w-[138px] object-contain"
            />
          </li>
        ))}
      </ul>
      <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent sm:w-24" />
      <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent sm:w-24" />
    </section>
  );
}
