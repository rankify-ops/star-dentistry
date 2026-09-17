"use client";

import { useState } from "react";
import { IconArrow } from "@/components/ui/Icons";
import { Initials, PlaceholderTag, Stars } from "@/components/ui/Stars";
import { rating, reviews, site, type Review } from "@/content/site";

/**
 * The review carousel — the Rankify ReviewRail: an endless rail travelling
 * left to right, paused on hover. The set repeats until one half is wider than
 * any screen, otherwise the loop shows a gap.
 */
const HALF = (() => {
  const out: Review[] = [];
  while (out.length * 340 < 2600) out.push(...reviews);
  return out;
})();
const RAIL = [...HALF, ...HALF];

function ReviewCard({ review, hidden }: { review: Review; hidden: boolean }) {
  const [open, setOpen] = useState(false);
  const long = review.quote.length > 150;

  return (
    <div
      aria-hidden={hidden}
      className={`flex w-[270px] flex-none flex-col gap-3.5 rounded-[22px] border border-rule bg-white p-6 shadow-s sm:w-[330px] ${open ? "self-start" : ""}`}
    >
      <div className="flex items-center gap-3">
        <Initials name={review.name} placeholder={review.placeholder} />
        <div className="min-w-0">
          <p className="truncate text-[14.5px] font-medium text-ink">{review.name}</p>
          <p className="flex items-center gap-2 text-[12.5px] text-ink-3">
            {review.role}
            {review.placeholder && <PlaceholderTag />}
          </p>
        </div>
      </div>
      <Stars className="size-3.5" />
      <blockquote className={`text-[14.5px] leading-[1.55] text-ink-2 ${open ? "" : "line-clamp-4"}`}>{review.quote}</blockquote>
      {long && (
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          tabIndex={hidden ? -1 : undefined}
          className="-mb-2 -ml-2 mt-auto flex min-h-[34px] items-center self-start px-2 text-[12.5px] font-semibold text-teal-ink underline-offset-2 hover:underline"
        >
          {open ? "Show less" : "Read more"}
        </button>
      )}
    </div>
  );
}

export function Reviews() {
  return (
    <section id="reviews" className="sec overflow-hidden bg-paper">
      <div className="ctr flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <div>
          <p className="eyebrow">Reviews</p>
          <h2 className="h2 mt-3 max-w-[16ch]">
            Rated {rating.score} stars <em className="italic text-teal-ink">by our patients</em>
          </h2>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex items-baseline gap-3">
            <span className="serif text-[64px] leading-none text-ink">{rating.score}</span>
            <span>
              <Stars className="size-4" />
              <span className="mt-1 block text-[13px] text-ink-3">
                {rating.count} {rating.source} reviews
              </span>
            </span>
          </div>
          <a href={site.maps} className="btn btn-line btn-sm group hidden sm:inline-flex">
            Google reviews
            <IconArrow size={14} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      <div className="mt-12 overflow-hidden">
        <div className="review-rail flex w-max gap-4 py-2 sm:gap-5">
          {RAIL.map((r, i) => (
            <ReviewCard key={i} review={r} hidden={i >= reviews.length} />
          ))}
        </div>
      </div>
    </section>
  );
}
