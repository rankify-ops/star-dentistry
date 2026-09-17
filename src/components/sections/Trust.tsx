import { IconHealthFund, IconLongAppointment, IconNoInterest, IconRating } from "@/components/ui/Icons";

// Each line is a claim the live home page already makes.
const items = [
  { icon: IconRating, t: "4.9 star rating", d: "From 200+ Google reviews" },
  { icon: IconLongAppointment, t: "Long appointments", d: "So that there is no rushing" },
  { icon: IconNoInterest, t: "Interest free finance", d: "Partnered with Humm" },
  { icon: IconHealthFund, t: "On site HICAPS", d: "Use your dental health fund" },
];

export function Trust() {
  return (
    <section className="border-b border-rule bg-paper">
      {/* Hairlines between the claims from sm up; stacked two-up on phones. */}
      <div className="ctr grid grid-cols-2 gap-y-8 divide-rule py-10 sm:divide-x lg:grid-cols-4 lg:py-12">
        {items.map(({ icon: I, t, d }, i) => (
          <div key={t} className={`flex items-start gap-4 sm:px-6 lg:px-8 ${i % 2 === 0 ? "pr-4 sm:pr-6" : ""} ${i === 0 ? "sm:pl-0" : ""} ${i === items.length - 1 ? "lg:pr-0" : ""}`}>
            <span className="grid size-12 flex-none place-items-center rounded-full bg-mist text-teal-ink">
              <I size={22} />
            </span>
            <div>
              <p className="text-[15px] font-medium leading-snug text-ink">{t}</p>
              <p className="mt-1 text-[13px] leading-snug text-ink-3">{d}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
