import { IconPhone, IconPlus } from "@/components/ui/Icons";
import { faqs, site } from "@/content/site";

export function Faqs() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <section id="faqs" className="sec bg-paper">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <div className="ctr grid gap-12 lg:grid-cols-[minmax(0,400px)_1fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <p className="eyebrow">FAQs</p>
          <h2 className="h2 mt-3">
            Questions, <em className="italic text-teal-ink">answered</em>
          </h2>
          <a href={site.tel} className="btn btn-line mt-8 gap-2.5 tracking-[0.1em]">
            <IconPhone size={17} className="text-teal-ink" />
            {site.phone}
          </a>
        </div>

        <div className="border-t border-rule">
          {faqs.map((f, i) => (
            <details key={f.q} className="faq group border-b border-rule" open={i === 0}>
              <summary className="flex items-center justify-between gap-6 py-6">
                <span className="serif text-[24px] leading-tight text-ink md:text-[28px]">{f.q}</span>
                <span className="faq-plus stepper flex-none">
                  <IconPlus size={16} />
                </span>
              </summary>
              <p className="faq-body lede max-w-[64ch] pb-7 pr-14">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
