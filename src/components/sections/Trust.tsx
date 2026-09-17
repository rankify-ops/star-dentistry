import { IconCheck, IconClock, IconStar, IconWallet } from "@/components/ui/Icons";

// Each line is a claim the live home page already makes.
const items = [
  { icon: IconStar, t: "4.9 star rating", d: "From 200+ Google reviews" },
  { icon: IconClock, t: "Long appointments", d: "So that there is no rushing" },
  { icon: IconWallet, t: "Interest free finance", d: "Partnered with Humm" },
  { icon: IconCheck, t: "On site HICAPS", d: "Use your dental health fund" },
];

export function Trust() {
  return (
    <section className="border-y border-rule bg-paper">
      <div className="ctr grid grid-cols-2 gap-x-6 gap-y-7 py-9 lg:grid-cols-4 lg:py-11">
        {items.map(({ icon: I, t, d }) => (
          <div key={t} className="flex items-start gap-3.5">
            <span className="grid size-11 flex-none place-items-center rounded-full bg-mist text-teal-ink">
              <I size={19} />
            </span>
            <div>
              <p className="text-[14.5px] font-medium text-ink">{t}</p>
              <p className="mt-0.5 text-[13px] leading-snug text-ink-3">{d}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
