import { Photo } from "@/components/ui/Photo";
import { IconArrow, IconPhone } from "@/components/ui/Icons";
import { Initials, Stars } from "@/components/ui/Stars";
import { rating, reviews, site } from "@/content/site";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-paper pt-[100px] lg:pt-[114px]">
      <div aria-hidden className="absolute -right-40 -top-40 -z-0 size-[620px] rounded-full bg-mist blur-3xl" />
      <div className="ctr relative grid items-center gap-10 pb-14 pt-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-16 lg:pb-24 lg:pt-14">
        <div>
          {/* Above the headline, as on Rankify: faces + stars do more for a cold visitor than anything below them. */}
          <a href="#reviews" className="load-in group flex flex-wrap items-center gap-x-3 gap-y-1.5">
            <span className="flex">
              {reviews.slice(0, 4).map((r) => (
                <Initials
                  key={r.name}
                  name={r.name}
                  placeholder={r.placeholder}
                  className="-ml-2.5 size-10 border-2 border-paper text-[13px] first:ml-0"
                />
              ))}
            </span>
            <span>
              <Stars className="size-3.5" />
              <span className="mt-0.5 block text-[13.5px] text-ink-2">
                <strong className="font-semibold text-ink">{rating.score} stars</strong> from {rating.count} {rating.source} reviews
              </span>
            </span>
          </a>
          <h1 className="display load-in mt-7 max-w-[13ch]" style={d(120)}>
            Expert Personalised Dental Care in <em className="italic text-teal-ink">Pyrmont, Sydney</em>
          </h1>
          <p className="load-in lede mt-6 max-w-[46ch] md:text-[17px]" style={d(240)}>
            Individually tailored treatment at our Pyrmont boutique dental clinic to help you achieve your smile goals
          </p>

          <div className="load-in mt-9 flex flex-col gap-3 sm:flex-row sm:items-center" style={d(360)}>
            <a href={site.booking} className="btn btn-ink group">
              Book online
              <IconArrow size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a href={site.tel} className="btn btn-line gap-2.5 tracking-[0.1em]">
              <IconPhone size={17} className="text-teal-ink" />
              {site.phone}
            </a>
          </div>
        </div>

        <div className="load-in relative" style={d(200)}>
          {/* The client's own photo, 680px wide — never given a slot wider than that. */}
          <div className="hero-img plate mx-auto aspect-[4/3] max-w-[680px] rounded-[28px] shadow-l lg:aspect-[4/3.2]">
            <Photo name="surgery" alt="A treatment room at STAR dentistry in Pyrmont" priority sizes="(min-width: 1024px) 620px, 100vw" />
          </div>

          <div className="glass absolute -bottom-6 left-4 flex items-center gap-3.5 rounded-[22px] p-2.5 pr-5 shadow-l sm:left-6 lg:-left-10 lg:bottom-10">
            <span className="plate block size-14 flex-none rounded-full">
              <Photo name="dr-richard" alt="Dr Richard Tippett" sizes="56px" className="object-top" />
            </span>
            <span>
              <span className="serif block text-[22px] leading-none text-ink">Dr Richard Tippett</span>
              <span className="mt-1 block text-[12.5px] text-ink-2">20 years experience</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
