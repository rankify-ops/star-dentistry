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
        <div>
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
          <h1 className="display load-in mt-6 max-w-[15ch]" style={d(120)}>
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

        {/* A collage rather than one big photograph: the client's originals are
            only ~680px wide, so several smaller tiles stay sharp where one
            hero-width image goes soft. */}
        <div className="load-in mx-auto grid w-full max-w-[620px] grid-cols-5 gap-3 lg:max-w-none" style={d(200)}>
          <div className="hero-img plate col-span-5 aspect-[16/10] rounded-[26px] shadow">
            <Photo name="surgery" alt="A treatment room at STAR dentistry in Pyrmont" priority sizes="(min-width: 1024px) 600px, 92vw" />
          </div>

          <div className="plate col-span-2 aspect-[3/4] rounded-[22px] shadow-s">
            <Photo name="smile" alt="A patient wearing Invisalign clear aligners" sizes="(min-width: 1024px) 240px, 38vw" />
          </div>

          <div className="col-span-3 flex flex-col gap-3">
            <div className="flex flex-1 items-center gap-3.5 rounded-[22px] border border-rule bg-white p-3 shadow-s">
              <span className="plate block size-14 flex-none rounded-full sm:size-16">
                <DrAvatar alt="Dr Richard Tippett" />
              </span>
              <span className="min-w-0">
                <span className="serif block text-[21px] leading-none text-ink sm:text-[24px]">Dr Richard Tippett</span>
                <span className="mt-1.5 block text-[12.5px] text-ink-2">20 years experience</span>
              </span>
            </div>

            <a href={site.booking} className="flex flex-1 items-center gap-3.5 rounded-[22px] bg-mist p-4 transition-colors hover:bg-teal-tint">
              <span className="grid size-11 flex-none place-items-center rounded-full bg-white text-teal-ink">
                <IconClock size={19} />
              </span>
              <span className="min-w-0">
                <span className="block text-[14px] font-medium text-ink">Open Thursdays until 7pm</span>
                <span className="mt-0.5 block text-[12.5px] text-ink-2">After-hours appointments</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
