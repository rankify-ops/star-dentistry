"use client";

import { useEffect, useRef, useState } from "react";
import { asset } from "@/lib/basePath";
import { useEscape } from "@/lib/hooks";
import { IconChevron, IconMenu, IconPhone, IconSparkle } from "@/components/ui/Icons";
import { live, site } from "@/content/site";
import { AboutMega, TreatmentsMega } from "./MegaMenu";
import { MobileMenu } from "./MobileMenu";

type Menu = "treatments" | "about" | null;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState<Menu>(null);
  const [mobile, setMobile] = useState(false);
  const closeT = useRef<number | undefined>(undefined);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEscape(!!menu, () => setMenu(null));

  const open = (m: Menu) => {
    window.clearTimeout(closeT.current);
    setMenu(m);
  };
  // A short grace period, so crossing from the button to the panel never drops it.
  const leave = () => {
    window.clearTimeout(closeT.current);
    closeT.current = window.setTimeout(() => setMenu(null), 160);
  };
  const done = () => setMenu(null);

  const trigger = (m: Exclude<Menu, null>, label: string) => (
    <button
      type="button"
      className="nav-btn"
      aria-expanded={menu === m}
      aria-haspopup="true"
      onMouseEnter={() => open(m)}
      onClick={() => (menu === m ? setMenu(null) : open(m))}
    >
      {label}
      <IconChevron size={14} className="chev" />
    </button>
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50" onMouseLeave={leave} onMouseEnter={() => window.clearTimeout(closeT.current)}>
      {/* Announcement — the live new patient offer. */}
      <div className={`overflow-hidden bg-ink text-white transition-[height] duration-500 ${scrolled ? "h-0" : "h-9"}`}>
        <a
          href={live("/check-up-clean-sydney")}
          className="ctr flex h-9 items-center justify-center gap-2 text-[10.5px] font-medium uppercase tracking-[0.16em] sm:text-[11px]"
        >
          <IconSparkle size={13} className="flex-none text-teal" />
          <span className="whitespace-nowrap sm:hidden">New patients · “No Gap” or $199</span>
          <span className="hidden whitespace-nowrap sm:inline">All new patients — “No Gap” or $199 new patient offer</span>
          <span className="hidden flex-none underline underline-offset-4 md:inline">More info</span>
        </a>
      </div>

      <div className={`frost relative text-ink transition-shadow duration-500 ${scrolled || menu ? "shadow-[0_1px_0_var(--rule)]" : ""}`}>
        <div className="ctr flex h-16 items-center gap-3 lg:h-[78px]">
          <a href="#top" className="flex flex-none items-center" aria-label="STAR dentistry — home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset("/img/logo-ink.png")} alt="STAR dentistry" width={480} height={236} className="h-9 w-auto lg:h-11" />
          </a>

          <nav className="mx-auto hidden items-center gap-0.5 lg:flex" aria-label="Main">
            {trigger("treatments", "Treatments")}
            {trigger("about", "About us")}
            <a href="#faqs" className="nav-btn" onMouseEnter={leave}>
              FAQs
            </a>
            <a href="#contact" className="nav-btn" onMouseEnter={leave}>
              Contact
            </a>
          </nav>

          <div className="ml-auto flex items-center gap-1.5 lg:ml-0">
            <a href={site.tel} className="nav-btn hidden gap-2.5 tracking-[0.08em] xl:inline-flex" onMouseEnter={leave}>
              <IconPhone size={17} className="text-teal-ink" />
              {site.phone}
            </a>
            <a href={site.tel} className="nav-btn px-3 xl:hidden" aria-label={`Call ${site.phone}`}>
              <IconPhone size={20} />
            </a>
            <a href={site.booking} className="btn btn-ink btn-sm ml-1 hidden sm:inline-flex">
              Book online
            </a>
            <button type="button" onClick={() => setMobile(true)} className="nav-btn px-3 lg:hidden" aria-label="Open menu">
              <IconMenu size={22} />
            </button>
          </div>
        </div>

        {menu && (
          <div className="mega absolute inset-x-0 top-full hidden border-t border-rule bg-paper text-ink shadow-l lg:block">
            <div className="ctr py-9">
              {menu === "treatments" && <TreatmentsMega onDone={done} />}
              {menu === "about" && <AboutMega onDone={done} />}
            </div>
          </div>
        )}
      </div>

      {/* Dims the page under an open panel; moving onto it closes the menu. */}
      {menu && <div aria-hidden className="scrim fixed inset-0 -z-10 hidden bg-ink/20 lg:block" onMouseEnter={leave} onClick={done} />}

      {mobile && <MobileMenu onClose={() => setMobile(false)} />}
    </header>
  );
}
