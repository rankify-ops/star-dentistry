"use client";

import { useEffect, useState } from "react";
import { DrAvatar } from "@/components/ui/Avatar";
import { IconPhone, IconStar } from "@/components/ui/Icons";
import { rating, site } from "@/content/site";

/*
 * The floating call + book CTA. Appears once the hero's own buttons have
 * scrolled away and steps aside while the contact section (which has its own)
 * is on screen, so there's only ever one booking button in view.
 *   Phones: a full-width bar.  Desktop: a card, bottom right.
 */
export function MobileBar() {
  const [past, setPast] = useState(false);
  const [atContact, setAtContact] = useState(false);

  useEffect(() => {
    const contact = document.getElementById("contact");
    const on = () => {
      setPast(window.scrollY > 640);
      setAtContact(!!contact && contact.getBoundingClientRect().top < window.innerHeight * 0.8);
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  const show = past && !atContact;
  const tab = show ? 0 : -1;
  const motion = show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0";

  return (
    <>
      {/* Phones */}
      <div className={`fixed inset-x-4 bottom-[max(16px,env(safe-area-inset-bottom))] z-40 transition-all duration-500 md:hidden ${motion}`}>
        <div className="frost flex h-[62px] items-center gap-2 rounded-full border border-rule p-1.5 shadow-l">
          <a href={site.tel} className="flex h-full flex-1 items-center justify-center gap-2 rounded-full text-[14px] font-medium text-ink" tabIndex={tab}>
            <IconPhone size={17} className="text-teal-ink" />
            {site.phone}
          </a>
          <a href={site.booking} className="btn btn-ink h-full flex-1 px-4 text-[11px]" tabIndex={tab}>
            Book online
          </a>
        </div>
      </div>

      {/* Tablet & desktop */}
      <div className={`fixed bottom-6 right-6 z-40 hidden transition-all duration-500 md:block ${motion}`}>
        <div className="frost flex items-center gap-4 rounded-full border border-rule py-2 pl-2 pr-2 shadow-l">
          <span className="plate block size-12 flex-none rounded-full">
            <DrAvatar />
          </span>
          <span className="hidden pr-1 lg:block">
            <span className="flex items-center gap-1 text-[13.5px] font-medium text-ink">
              <IconStar size={13} className="fill-current text-[#f5b301]" /> {rating.score} · {rating.count} reviews
            </span>
            <a href={site.tel} className="link-u text-[13px] tabular-nums text-ink-2 hover:text-ink" tabIndex={tab}>
              {site.phone}
            </a>
          </span>
          <a href={site.tel} className="stepper size-12 lg:hidden" aria-label={`Call ${site.phone}`} tabIndex={tab}>
            <IconPhone size={18} />
          </a>
          <a href={site.booking} className="btn btn-ink h-12" tabIndex={tab}>
            Book online
          </a>
        </div>
      </div>
    </>
  );
}
