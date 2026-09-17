import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { IconArrow, IconCheck, IconSparkle } from "@/components/ui/Icons";
import { live } from "@/content/site";

// The phrases the live page bolds, pulled out as scannable points.
const points = ["Beautiful calming environment", "Long dentist appointments", "No rushing", "Kindness & professionalism", "Further education"];

export function WhyChoose() {
  return (
    <section className="sec bg-mist">
      <div className="ctr grid gap-14 lg:grid-cols-[1fr_minmax(0,520px)] lg:gap-20">
        <div>
          <p className="eyebrow">Why choose STAR dentistry?</p>
          <h2 className="h2 mt-3 max-w-[16ch]">
            We really go the <em className="italic text-teal-ink">extra mile</em> for our patients.
          </h2>

          <ul className="mt-9 flex flex-wrap gap-2">
            {points.map((p) => (
              <li key={p} className="flex h-10 items-center gap-2 rounded-full bg-white px-4 text-[13.5px] text-ink shadow-s">
                <IconCheck size={15} className="text-teal-ink" />
                {p}
              </li>
            ))}
          </ul>

          <Reveal>
            <div className="lede mt-9 max-w-[62ch] space-y-5">
              <p>
                We know that visiting the dentist is a nerve wracking experience for many, which is why at STAR dentistry Pyrmont we really go the{" "}
                <span className="hl">extra mile</span> for our patients. We created a <span className="hl">beautiful calming environment</span>, provide{" "}
                <span className="hl">long dentist appointments</span> so that there is <span className="hl">no rushing</span>, and treat our patients with a
                level of <span className="hl">kindness</span> and <span className="hl">professionalism</span> that is second to none.
              </p>
              <p>
                Our dentists are constantly attending <span className="hl">further education</span> to stay at the pinnacle of dental technology and
                techniques, and with such a high regard for education, all of our Pyrmont patients also receive as much{" "}
                <span className="hl">education</span> about their mouth and treatment options as possible, allowing them to make the{" "}
                <span className="hl">best dental clinical choice</span> for their situation.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <a
              href={live("/check-up-clean-sydney")}
              className="group mt-10 flex flex-col gap-5 rounded-[24px] bg-ink p-6 text-white sm:flex-row sm:items-center sm:justify-between md:p-7"
            >
              <span className="flex items-start gap-4">
                <span className="grid size-12 flex-none place-items-center rounded-full bg-teal text-ink">
                  <IconSparkle size={20} />
                </span>
                <span>
                  <span className="block text-[10.5px] font-semibold uppercase tracking-[0.18em] text-teal">New patient offer</span>
                  <span className="serif mt-1 block text-[26px] leading-tight">“No Gap” or $199</span>
                  <span className="mt-1 block text-[13.5px] text-white/70">All new patients to the clinic can take advantage of this offer.</span>
                </span>
              </span>
              <span className="btn btn-teal btn-sm flex-none self-start sm:self-auto">
                More information
                <IconArrow size={14} className="transition-transform group-hover:translate-x-1" />
              </span>
            </a>
          </Reveal>
        </div>

        <Reveal delay={120} className="grid grid-cols-2 content-start gap-4">
          <div className="plate col-span-2 aspect-[4/3.2] rounded-[26px] sm:col-span-1 sm:row-span-2 sm:aspect-auto sm:h-full">
            <Photo name="dr-consult" alt="Dr Tippett in a dental implant consultation" sizes="(min-width: 1024px) 260px, 50vw" />
          </div>
          <div className="plate aspect-square rounded-[26px] sm:aspect-[4/5]">
            <Photo name="reception-desk" alt="STAR dentistry reception desk" sizes="(min-width: 1024px) 260px, 50vw" />
          </div>
          <div className="plate aspect-square rounded-[26px] sm:aspect-[4/5]">
            <Photo name="steri" alt="The sterilisation room at STAR dentistry" sizes="(min-width: 1024px) 260px, 50vw" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
