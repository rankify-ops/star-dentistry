"use client";

import { useState } from "react";
import { asset } from "@/lib/basePath";
import { Photo } from "@/components/ui/Photo";
import { IconArrow, IconNext, IconPhone, IconSparkle } from "@/components/ui/Icons";
import { about, categories, hours, live, popular, site } from "@/content/site";

/*
 * Both panels share one layout and one type scale (see .menu-* in globals.css):
 *   column 1  eyebrow + .drill rows
 *   column 2  .menu-title + link, then .drill rows
 *   column 3  eyebrow + cards (.menu-card-title / .menu-note), phone link at the foot
 */
const GRID = "grid grid-cols-[230px_minmax(0,1fr)_340px] gap-6 xl:grid-cols-[250px_minmax(0,1fr)_380px] xl:gap-8";
const COL = "col-in flex min-w-0 flex-col border-l border-rule pl-6 xl:pl-8";

function Card({ href, onDone, img, title, note }: { href: string; onDone: () => void; img: React.ReactNode; title: string; note: string }) {
  return (
    <a href={href} onClick={onDone} className="group flex items-center gap-4 rounded-[20px] bg-mist p-3 pr-5 transition-colors hover:bg-teal-tint">
      <span className="plate block size-20 flex-none overflow-hidden rounded-full bg-white transition-transform duration-500 group-hover:-rotate-6">{img}</span>
      <span className="min-w-0">
        <span className="menu-card-title block">{title}</span>
        <span className="menu-note mt-1 block">{note}</span>
      </span>
    </a>
  );
}

function PhoneLink() {
  return (
    <a href={site.tel} className="drill mt-auto">
      <span className="flex items-center gap-2.5">
        <IconPhone size={16} className="text-teal-ink" /> {site.phone}
      </span>
    </a>
  );
}

/* TREATMENTS — Category → its treatments → the popular services in that category. */
export function TreatmentsMega({ onDone }: { onDone: () => void }) {
  const [cat, setCat] = useState(categories[0].name);
  const c = categories.find((x) => x.name === cat)!;
  const featured = popular.filter((p) => p.cat === cat);

  return (
    <div className={GRID}>
      <div>
        <p className="eyebrow px-3.5 pb-2">Treatments</p>
        {categories.map((x) => (
          <a
            key={x.name}
            href={live(x.href)}
            className="drill"
            data-active={cat === x.name}
            onMouseEnter={() => setCat(x.name)}
            onFocus={() => setCat(x.name)}
            onClick={onDone}
          >
            {x.name}
            <IconNext size={15} className="drill-arrow" />
          </a>
        ))}
      </div>

      <div key={cat} className={COL}>
        <div className="flex items-baseline justify-between gap-4 px-3.5 pb-3">
          <p className="menu-title">{c.name}</p>
          <a href={live(c.href)} onClick={onDone} className="link-u menu-note flex-none text-ink">
            View all →
          </a>
        </div>
        <ul className={`grid gap-x-4 ${c.items.length > 6 ? "grid-cols-2" : ""}`}>
          {c.items.map((t) => (
            <li key={t.href}>
              <a href={live(t.href)} onClick={onDone} className="drill group">
                {t.name}
                <IconArrow size={15} className="drill-arrow -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div key={`f-${cat}`} className={`${COL} gap-3`}>
        <p className="eyebrow">Popular services</p>
        {featured.map((p) => (
          <Card
            key={p.href}
            href={live(p.href)}
            onDone={onDone}
            title={p.title}
            note={p.line}
            // eslint-disable-next-line @next/next/no-img-element
            img={<img src={asset(`/img/${p.icon}.webp`)} alt={p.alt} width={200} height={200} className="size-full" />}
          />
        ))}
        <PhoneLink />
      </div>
    </div>
  );
}

/* ABOUT US — the live About/Offers folder, where and when, the practice. */
export function AboutMega({ onDone }: { onDone: () => void }) {
  return (
    <div className={GRID}>
      <div>
        <p className="eyebrow px-3.5 pb-2">About us</p>
        {about.map((a) => (
          <a key={a.href} href={live(a.href)} onClick={onDone} className="drill group">
            {a.name}
            <IconNext size={15} className="drill-arrow" />
          </a>
        ))}
      </div>

      <div className={COL}>
        <div className="flex items-baseline justify-between gap-4 px-3.5 pb-3">
          <p className="menu-title">Opening hours</p>
          <a href={live("/contact-us")} onClick={onDone} className="link-u menu-note flex-none text-ink">
            Contact us →
          </a>
        </div>
        <dl>
          {hours.map((h) => (
            <div key={h.d} className="drill">
              <dt>{h.d}</dt>
              <dd className="tabular-nums">{h.h}</dd>
            </div>
          ))}
        </dl>
        <a href={site.maps} onClick={onDone} className="drill group mt-1 border-t border-rule">
          {site.address}
          <IconArrow size={15} className="drill-arrow" />
        </a>
      </div>

      <div className={`${COL} gap-3`}>
        <p className="eyebrow">Our practice</p>
        <Card
          href={live("/our-practice")}
          onDone={onDone}
          title="Our Practice"
          note="Pyrmont boutique dental clinic"
          img={<Photo name="reception-desk" alt="" sizes="80px" />}
        />
        <Card
          href={live("/meet-the-team")}
          onDone={onDone}
          title="Meet The Team"
          note="Dr Richard Tippett · 20 years experience"
          img={<Photo name="dr-richard" alt="" sizes="80px" className="object-top" />}
        />
        <Card
          href={live("/check-up-clean-sydney")}
          onDone={onDone}
          title="“No Gap” or $199"
          note="New patient offer"
          img={
            <span className="grid size-full place-items-center bg-ink text-teal">
              <IconSparkle size={24} />
            </span>
          }
        />
        <PhoneLink />
      </div>
    </div>
  );
}
