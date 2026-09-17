import { asset } from "@/lib/basePath";
import { logos } from "@/content/site";

/** Health funds, suppliers and memberships from the live logo strip. */
export function Logos() {
  const row = [...logos, ...logos];
  return (
    <section className="border-y border-rule bg-white py-8" aria-label="Health funds, partners and memberships">
      <div className="marquee">
        <ul className="marquee-track items-center">
          {row.map((l, i) => (
            <li key={i} className="px-7 md:px-10" aria-hidden={i >= logos.length}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={asset(`/img/${l.file}.webp`)} alt={i < logos.length ? l.alt : ""} loading="lazy" className="h-11 w-auto max-w-[150px] object-contain md:h-12" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
