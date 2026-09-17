"use client";

import { useState } from "react";
import { asset } from "@/lib/basePath";
import { useEscape, useLockScroll } from "@/lib/hooks";
import { IconArrow, IconBack, IconClose, IconFacebook, IconInstagram, IconNext, IconPhone } from "@/components/ui/Icons";
import { about, categories, live, popular, site } from "@/content/site";

/*
 * Phone menu — the same drill-down as the desktop mega menu, one level per
 * screen: Treatments › Cosmetic Dentistry › Porcelain Veneers.
 * `path` is the stack of choices; Back pops it.
 */
export function MobileMenu({ onClose }: { onClose: () => void }) {
  // Mounted only while open, so every open starts back at the top level.
  const [path, setPath] = useState<string[]>([]);
  const [dir, setDir] = useState<1 | -1>(1);
  useLockScroll(true);
  useEscape(true, onClose);

  const push = (k: string) => {
    setDir(1);
    setPath([...path, k]);
  };
  const pop = () => {
    setDir(-1);
    setPath(path.slice(0, -1));
  };

  const [root, a] = path;
  let title = "Menu";
  let body: React.ReactNode;

  if (!root) {
    body = (
      <>
        <Row label="Treatments" sub="Implants, straightening, cosmetic & more" drill onClick={() => push("treatments")} />
        <Row label="About us" sub="Our practice, the team & offers" drill onClick={() => push("about")} />
        <Row label="Popular services" href="#services" />
        <Row label="FAQs" href="#faqs" />
        <Row label="Contact" href="#contact" />
      </>
    );
  } else if (root === "treatments" && !a) {
    title = "Treatments";
    body = categories.map((c) => (
      <Row key={c.name} label={c.name} sub={`${c.items.length} treatments`} drill onClick={() => push(c.name)} />
    ));
  } else if (root === "treatments" && a) {
    const c = categories.find((x) => x.name === a)!;
    const featured = popular.filter((p) => p.cat === a);
    title = c.name;
    body = (
      <>
        {featured.length > 0 && (
          <div className="rail -mx-5 mt-4 pb-1">
            {featured.map((p) => (
              <a key={p.href} href={live(p.href)} className="flex w-[260px] items-center gap-3 rounded-[18px] bg-mist p-2.5 pr-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={asset(`/img/${p.icon}.webp`)} alt={p.alt} width={200} height={200} className="size-14 flex-none rounded-full bg-white" />
                <span className="serif text-[19px] leading-tight text-ink">{p.title}</span>
              </a>
            ))}
          </div>
        )}
        {c.items.map((t) => (
          <Row key={t.href} label={t.name} href={live(t.href)} />
        ))}
        <a href={live(c.href)} className="btn btn-line mt-6 w-full">
          All {c.name}
        </a>
      </>
    );
  } else if (root === "about") {
    title = "About us";
    body = about.map((x) => <Row key={x.href} label={x.name} href={live(x.href)} />);
  }

  return (
    <div className="fixed inset-0 z-[60] flex flex-col bg-paper text-ink lg:hidden" role="dialog" aria-modal="true" aria-label="Menu">
      <div className="flex h-16 flex-none items-center justify-between border-b border-rule px-5">
        {path.length ? (
          <button type="button" onClick={pop} className="flex items-center gap-2 text-[13px] font-medium uppercase tracking-[0.14em]">
            <IconBack size={18} /> Back
          </button>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={asset("/img/logo-ink.png")} alt="STAR dentistry" width={480} height={236} className="h-9 w-auto" />
        )}
        <button type="button" onClick={onClose} className="stepper" aria-label="Close menu">
          <IconClose size={16} />
        </button>
      </div>

      {/* Any in-page link inside closes the menu on its way to the section. */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden px-5 pb-8" onClick={(e) => (e.target as HTMLElement).closest("a") && onClose()}>
        <div key={path.join("/")} className={dir > 0 ? "slide-r" : "slide-l"}>
          <p className="serif pb-2 pt-6 text-[40px] leading-none">{title}</p>
          {body}
        </div>
      </div>

      <div className="flex flex-none items-center gap-2.5 border-t border-rule px-5 py-4 pb-[max(16px,env(safe-area-inset-bottom))]">
        <a href={site.booking} className="btn btn-ink flex-1 px-4">
          Book online
        </a>
        <a href={site.tel} className="stepper size-[52px]" aria-label={`Call ${site.phone}`}>
          <IconPhone size={19} />
        </a>
        <a href={site.instagram} className="stepper size-[52px]" aria-label="Instagram">
          <IconInstagram size={18} />
        </a>
        <a href={site.facebook} className="stepper size-[52px]" aria-label="Facebook">
          <IconFacebook size={18} />
        </a>
      </div>
    </div>
  );
}

function Row({
  label, sub, onClick, href, drill = false,
}: { label: string; sub?: string; onClick?: () => void; href?: string; drill?: boolean }) {
  const inner = (
    <>
      <span>
        <span className="block text-[17px] text-ink">{label}</span>
        {sub && <span className="block text-[13px] text-ink-3">{sub}</span>}
      </span>
      {drill ? <IconNext size={18} className="flex-none text-ink-3" /> : <IconArrow size={16} className="flex-none text-ink-3" />}
    </>
  );
  const cls = "flex w-full items-center justify-between gap-4 border-b border-rule py-4 text-left";
  return href ? (
    <a href={href} className={cls}>
      {inner}
    </a>
  ) : (
    <button type="button" onClick={onClick} className={cls}>
      {inner}
    </button>
  );
}
