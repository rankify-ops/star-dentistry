import { asset } from "@/lib/basePath";
import { Reveal } from "@/components/ui/Reveal";
import { IconArrow } from "@/components/ui/Icons";
import { categories, live, popular } from "@/content/site";

export function Services() {
  return (
    <section id="services" className="sec bg-paper">
      <div className="ctr">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Popular services</p>
            <h2 className="h2 mt-3 max-w-[18ch]">
              Start your journey to <em className="italic text-teal-ink">smile confidence</em>
            </h2>
          </div>
          <ul className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <li key={c.name}>
                <a
                  href={live(c.href)}
                  className="flex h-10 items-center rounded-full border border-rule-2 px-4 text-[13px] text-ink transition-colors hover:border-ink hover:bg-ink hover:text-white"
                >
                  {c.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {popular.map((p, i) => (
            <li key={p.href}>
              <Reveal delay={(i % 3) * 80} className="h-full">
                <a
                  href={live(p.href)}
                  className="group flex h-full flex-col rounded-[26px] border border-rule bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-transparent hover:shadow-l"
                >
                  <div className="flex items-start justify-between">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={asset(`/img/${p.icon}.webp`)}
                      alt={p.alt}
                      width={200}
                      height={200}
                      loading="lazy"
                      className="size-24 rounded-full bg-mist transition-transform duration-700 group-hover:-rotate-6 group-hover:scale-105"
                    />
                    <span className="grid size-11 place-items-center rounded-full bg-mist text-ink transition-colors duration-300 group-hover:bg-ink group-hover:text-white">
                      <IconArrow size={17} className="-rotate-45 transition-transform duration-300 group-hover:rotate-0" />
                    </span>
                  </div>
                  <p className="mt-7 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-ink-3">{p.cat}</p>
                  <h3 className="serif mt-2 text-[30px] leading-[1.05]">{p.title}</h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-ink-2">{p.line}</p>
                  <span className="mt-auto pt-6 text-[11.5px] font-semibold uppercase tracking-[0.16em] text-teal-ink">Go to page →</span>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
