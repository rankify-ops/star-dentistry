import { Photo } from "@/components/ui/Photo";
import { IconArrow, IconClock, IconFacebook, IconInstagram, IconMail, IconPhone, IconPin, IconYoutube } from "@/components/ui/Icons";
import { hours, site } from "@/content/site";

export function Contact() {
  return (
    <section id="contact" className="bg-paper pb-20 lg:pb-28">
      <div className="ctr">
        {/* CTA band. The street photo sits in its own panel rather than behind
            the text: the original is 680px wide and goes soft stretched across
            the full band. */}
        <div className="grid items-center gap-8 overflow-hidden rounded-[32px] bg-ink px-6 py-14 text-white md:px-12 lg:grid-cols-[1fr_minmax(0,420px)] lg:gap-12 lg:py-12 lg:pr-12">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-teal">Get in touch</p>
            <h2 className="h2 mt-4 max-w-[20ch] text-white">
              Start your journey to <em className="italic text-teal">smile confidence</em> in Pyrmont today!
            </h2>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={site.booking} className="btn btn-teal group">
                Book online
                <IconArrow size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a href={site.tel} className="btn gap-2.5 border border-white/30 tracking-[0.1em] text-white hover:border-white">
                <IconPhone size={17} />
                {site.phone}
              </a>
            </div>
          </div>
          <a href={site.maps} className="group plate plate-zoom block aspect-[4/2.6] rounded-[24px] lg:aspect-[4/3]">
            <Photo name="exterior" alt="The STAR dentistry building on Pyrmont Street" sizes="(min-width: 1024px) 420px, 100vw" />
          </a>
        </div>

        {/* Details */}
        <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_1fr_1.25fr]">
          <div className="rounded-[26px] bg-mist p-7">
            <p className="eyebrow">Contact</p>
            <ul className="mt-5 space-y-4 text-[15px] text-ink">
              <li className="flex items-start gap-3">
                <IconPin size={19} className="mt-0.5 flex-none text-teal-ink" />
                <a href={site.maps} className="link-u">
                  {site.address}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <IconPhone size={19} className="flex-none text-teal-ink" />
                <a href={site.tel} className="link-u">
                  {site.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <IconMail size={19} className="flex-none text-teal-ink" />
                <a href={`mailto:${site.email}`} className="link-u break-all">
                  {site.email}
                </a>
              </li>
            </ul>
            <p className="eyebrow mt-8">Follow us on socials</p>
            <div className="mt-4 flex gap-2">
              <a href={site.facebook} className="stepper size-11 bg-white" aria-label="Facebook">
                <IconFacebook size={18} />
              </a>
              <a href={site.instagram} className="stepper size-11 bg-white" aria-label="Instagram">
                <IconInstagram size={18} />
              </a>
              <a href={site.youtube} className="stepper size-11 bg-white" aria-label="YouTube">
                <IconYoutube size={19} />
              </a>
            </div>
          </div>

          <div className="rounded-[26px] bg-mist p-7">
            <p className="eyebrow flex items-center gap-2">
              <IconClock size={15} /> Opening hours
            </p>
            <dl className="mt-5 divide-y divide-rule-2/60 text-[15px]">
              {hours.map((h) => (
                <div key={h.d} className="flex justify-between gap-4 py-3">
                  <dt className="text-ink-2">{h.d}</dt>
                  <dd className="tabular-nums text-ink">{h.h}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="plate min-h-[320px] overflow-hidden rounded-[26px]">
            <iframe
              title="Map to STAR dentistry, 104 Pyrmont Street, Pyrmont"
              src="https://www.google.com/maps?q=104+Pyrmont+Street,+Pyrmont+NSW+2009&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 size-full border-0 grayscale-[35%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
