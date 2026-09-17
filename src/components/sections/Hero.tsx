import { Photo } from "@/components/ui/Photo";
import { DrAvatar } from "@/components/ui/Avatar";
import { IconArrow, IconClock, IconPhone } from "@/components/ui/Icons";
import { Stars } from "@/components/ui/Stars";
import { rating, site } from "@/content/site";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-paper pt-[100px] lg:pt-[114px]">
      <div aria-hidden className="absolute -right-40 -top-40 -z-0 size-[620px] rounded-full bg-mist blur-3xl" />
      <div className="ctr relative grid items-center gap-10 pb-14 pt-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-16 lg:pb-24 lg:pt-14">
        <div className="hero-col">
          {/* Above the headline, as on Rankify. No reviewer faces until the
              client sends real ones — stand-in heads next to a real rating
              read as stock photography. */}
          <a href="#reviews" className="load-in inline-flex items-center gap-3 rounded-full border border-rule bg-white py-2 pl-4 pr-5 shadow-s">
            <Stars className="size-[15px]" />
            <span className="whitespace-nowrap text-[13px] text-ink-2 sm:text-[13.5px]">
              <strong className="font-semibold text-ink">{rating.score} stars</strong>
              <span className="hidden sm:inline"> from</span> {rating.count} {rating.source} reviews
            </span>
          </a>
          {/* "Expert Personalised" holds its own line from md up; on phones it
              all flows naturally. */}
          <h1 className="display load-in mt-6" style={d(120)}>
            <span className="md:block">Expert Personalised</span>{" "}
            <span>
              Dental Care in <em className="whitespace-nowrap italic text-teal-ink">Pyrmont, Sydney</em>
            </span>
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

        <div className="load-in relative mx-auto w-full max-w-[620px] lg:max-w-none" style={d(200)}>
          {/* The client's own photo, ~680px wide — never given a slot wider than that. */}
          <div className="hero-img plate aspect-[4/3] rounded-[28px] shadow-l lg:aspect-[4/3.2]">
            <Photo name="surgery" alt="A treatment room at STAR dentistry in Pyrmont" priority sizes="(min-width: 1024px) 620px, 92vw" />
          </div>

          {/* Opposite corners: the doctor bottom-left, the hours pill top-right. */}
          <div className="glass absolute -bottom-6 left-3 flex items-center gap-3.5 rounded-[22px] p-2.5 pr-5 shadow-l sm:left-6 lg:-left-8 lg:bottom-10">
            <span className="plate block size-14 flex-none rounded-full">
              <DrAvatar alt="Dr Richard Tippett" />
            </span>
            <span>
              <span className="serif block text-[22px] leading-none text-ink">Dr Richard Tippett</span>
              <span className="mt-1 block text-[12.5px] text-ink-2">20 years experience</span>
            </span>
          </div>

          <a
            href={site.booking}
            className="absolute right-3 top-4 hidden items-center gap-2.5 sm:flex rounded-full border border-rule bg-white py-2.5 pl-3.5 pr-5 shadow-l transition-colors hover:bg-mist sm:right-6 lg:-right-6 lg:top-10"
          >
            <IconClock size={16} className="flex-none text-teal-ink" />
            <span className="text-[12.5px] font-medium text-ink">Open Thursdays until 7pm</span>
          </a>
        </div>
      </div>
    </section>
  );
}
