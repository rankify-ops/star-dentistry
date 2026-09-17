import { asset } from "@/lib/basePath";
import { IconFacebook, IconInstagram, IconYoutube } from "@/components/ui/Icons";
import { about, categories, live, site, suburbs } from "@/content/site";

export function Footer() {
  const social = "grid size-11 place-items-center rounded-full border border-white/20 text-white transition-colors hover:bg-teal hover:border-teal hover:text-ink";

  return (
    <footer className="overflow-hidden bg-ink pb-24 text-white/70 md:pb-0">
      <div className="ctr grid gap-12 pb-12 pt-20 lg:grid-cols-[1.2fr_repeat(4,1fr)]">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset("/img/logo-light.png")} alt="STAR dentistry" width={480} height={236} loading="lazy" className="h-14 w-auto" />
          <p className="mt-6 text-[14px] leading-relaxed">
            {site.address}
            <br />
            <a href={site.tel} className="link-u text-white">
              {site.phone}
            </a>
            <br />
            <a href={`mailto:${site.email}`} className="link-u text-white">
              {site.email}
            </a>
          </p>
          <div className="mt-6 flex gap-2">
            <a href={site.facebook} className={social} aria-label="Facebook">
              <IconFacebook size={18} />
            </a>
            <a href={site.instagram} className={social} aria-label="Instagram">
              <IconInstagram size={18} />
            </a>
            <a href={site.youtube} className={social} aria-label="YouTube">
              <IconYoutube size={19} />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4 lg:col-span-4">
          {[...categories.slice(0, 3), { name: "About Us", href: "/about", items: about }].map((c) => (
            <div key={c.name}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-teal">{c.name}</p>
              <ul className="mt-5 space-y-3 text-[14px]">
                {c.items.map((l) => (
                  <li key={l.href}>
                    <a href={live(l.href)} className="link-u transition-colors hover:text-white">
                      {l.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="col-span-2 sm:col-span-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-teal">{categories[3].name}</p>
            <ul className="mt-5 grid gap-x-8 gap-y-3 text-[14px] sm:grid-cols-2 lg:grid-cols-3">
              {categories[3].items.map((l) => (
                <li key={l.href}>
                  <a href={live(l.href)} className="link-u transition-colors hover:text-white">
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="ctr border-t border-white/10 py-8 text-[12.5px] leading-relaxed text-white/55">
        <p>
          All treatment carries risk and before proceeding you should seek a second opinion from an appropriately qualified health practitioner. In
          person examinations are required to ensure that you are suitable for a procedure.
        </p>
        <p className="mt-3">
          STAR dentistry is a dental practice servicing {suburbs} and surrounding suburbs.
        </p>
      </div>

      <p aria-hidden className="serif -mb-[0.22em] select-none whitespace-nowrap text-center text-[17vw] leading-none text-white/[0.05]">
        STAR dentistry
      </p>

      <div className="border-t border-white/10">
        <div className="ctr py-6 text-[12.5px]">
          <p>© {new Date().getFullYear()} STAR dentistry</p>
        </div>
      </div>
    </footer>
  );
}
