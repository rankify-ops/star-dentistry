import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { IconArrow } from "@/components/ui/Icons";
import { live } from "@/content/site";

export function Intro() {
  return (
    <section className="sec bg-paper">
      <div className="ctr grid items-center gap-12 lg:grid-cols-[minmax(0,420px)_1fr] lg:gap-20">
        <Reveal>
          <div className="relative mx-auto max-w-[420px]">
            <div aria-hidden className="absolute -inset-5 -z-10 translate-x-6 translate-y-6 rounded-[36px] bg-mist" />
            <div className="plate aspect-[4/5] rounded-[28px]">
              <Photo name="dr-richard" alt="Dr Richard Tippett, STAR dentistry Pyrmont" sizes="(min-width: 1024px) 420px, 90vw" className="object-top" />
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <p className="eyebrow">Dr Richard Tippett &amp; the STAR team</p>
          <blockquote className="serif mt-5 text-[clamp(28px,3.4vw,44px)] leading-[1.12] text-ink">
            “Every smile is as unique as the person wearing it and we understand just how much{" "}
            <em className="italic text-teal-ink">confidence and happiness</em> a healthy sparkling smile can provide.”
          </blockquote>
          <p className="lede mt-7 max-w-[58ch]">
            With 20 years experience, Dr Richard Tippett and the team at STAR dentistry are the Family, Cosmetic, Orthodontic, Dental Implant and
            Reconstructive dentist in Pyrmont, Sydney that you can trust.
          </p>
          <a href={live("/meet-the-team")} className="btn btn-line group mt-9">
            Meet the team
            <IconArrow size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
