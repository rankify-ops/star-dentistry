/* Thin-line icon set, 1.5 stroke — matches the live site's line icons. */

type P = { size?: number; className?: string };

function Svg({ size = 18, className = "", children }: P & { children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export const IconSearch = (p: P) => (
  <Svg {...p}>
    <circle cx="11" cy="11" r="6.5" />
    <path d="m20 20-4.2-4.2" />
  </Svg>
);
export const IconChevron = (p: P) => (
  <Svg {...p}>
    <path d="m6 9 6 6 6-6" />
  </Svg>
);
export const IconArrow = (p: P) => (
  <Svg {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Svg>
);
export const IconBack = (p: P) => (
  <Svg {...p}>
    <path d="M19 12H5M11 18l-6-6 6-6" />
  </Svg>
);
export const IconNext = (p: P) => (
  <Svg {...p}>
    <path d="m9 6 6 6-6 6" />
  </Svg>
);
export const IconPrev = (p: P) => (
  <Svg {...p}>
    <path d="m15 6-6 6 6 6" />
  </Svg>
);
export const IconHeart = (p: P) => (
  <Svg {...p}>
    <path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.3a4.3 4.3 0 0 1 7.5 2.5C19.5 15.4 12 20 12 20Z" />
  </Svg>
);
export const IconClose = (p: P) => (
  <Svg {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </Svg>
);
export const IconMenu = (p: P) => (
  <Svg {...p}>
    <path d="M4 8h16M4 16h16" />
  </Svg>
);
export const IconPlus = (p: P) => (
  <Svg {...p}>
    <path d="M12 5v14M5 12h14" />
  </Svg>
);
export const IconMinus = (p: P) => (
  <Svg {...p}>
    <path d="M5 12h14" />
  </Svg>
);
export const IconCalendar = (p: P) => (
  <Svg {...p}>
    <rect x="3.5" y="5" width="17" height="15" rx="2.5" />
    <path d="M3.5 10h17M8 3v4M16 3v4" />
  </Svg>
);
export const IconUsers = (p: P) => (
  <Svg {...p}>
    <circle cx="9" cy="8.5" r="3.2" />
    <path d="M3 19.5c.6-3.2 3-5 6-5s5.4 1.8 6 5" />
    <path d="M15.5 5.6a3.2 3.2 0 0 1 0 5.8M17.5 14.8c1.8.6 3 2.2 3.5 4.7" />
  </Svg>
);
export const IconPin = (p: P) => (
  <Svg {...p}>
    <path d="M12 21s-6.5-6.2-6.5-11.2a6.5 6.5 0 0 1 13 0C18.5 14.8 12 21 12 21Z" />
    <circle cx="12" cy="9.8" r="2.3" />
  </Svg>
);
export const IconSparkle = (p: P) => (
  <Svg {...p}>
    <path d="M12 3.5c.6 4.6 3.9 7.9 8.5 8.5-4.6.6-7.9 3.9-8.5 8.5-.6-4.6-3.9-7.9-8.5-8.5 4.6-.6 7.9-3.9 8.5-8.5Z" />
  </Svg>
);
export const IconCheck = (p: P) => (
  <Svg {...p}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </Svg>
);
export const IconGift = (p: P) => (
  <Svg {...p}>
    <rect x="3.5" y="9" width="17" height="11" rx="1.5" />
    <path d="M3.5 13h17M12 9v11M12 9c-1.5-3.8-6-4.2-6-1.6C6 9 9.5 9 12 9Zm0 0c1.5-3.8 6-4.2 6-1.6C18 9 14.5 9 12 9Z" />
  </Svg>
);
export const IconMoon = (p: P) => (
  <Svg {...p}>
    <path d="M19.5 14.5A7.5 7.5 0 0 1 9.5 4.5a7.5 7.5 0 1 0 10 10Z" />
  </Svg>
);
export const IconWallet = (p: P) => (
  <Svg {...p}>
    <rect x="3" y="6" width="18" height="13" rx="2.5" />
    <path d="M3 10h18M16 14.5h1.5" />
  </Svg>
);
export const IconBag = (p: P) => (
  <Svg {...p}>
    <path d="M5 8h14l-1 12H6L5 8Z" />
    <path d="M9 8V6.5a3 3 0 0 1 6 0V8" />
  </Svg>
);
export const IconChat = (p: P) => (
  <Svg {...p}>
    <path d="M20 12a7.5 7.5 0 0 1-11 6.6L4 20l1.4-4.6A7.5 7.5 0 1 1 20 12Z" />
  </Svg>
);
export const IconInstagram = (p: P) => (
  <Svg {...p}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="3.8" />
    <circle cx="17.2" cy="6.8" r=".6" fill="currentColor" />
  </Svg>
);
export const IconFacebook = (p: P) => (
  <Svg {...p}>
    <path d="M14 8.5h2.5V5H14a3.5 3.5 0 0 0-3.5 3.5V11H8v3.5h2.5V21H14v-6.5h2.5l.5-3.5h-3V9a.5.5 0 0 1 .5-.5Z" />
  </Svg>
);
export const IconPhone = (p: P) => (
  <Svg {...p}>
    <path d="M5 4h3.5l1.6 4-2.1 1.3a11 11 0 0 0 5.7 5.7l1.3-2.1 4 1.6V18a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  </Svg>
);
export const IconClock = (p: P) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </Svg>
);
export const IconMail = (p: P) => (
  <Svg {...p}>
    <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
    <path d="m4 7 8 6 8-6" />
  </Svg>
);
export const IconStar = (p: P) => (
  <Svg {...p}>
    <path d="m12 3.5 2.6 5.3 5.9.8-4.3 4.1 1 5.8L12 16.8l-5.2 2.7 1-5.8-4.3-4.1 5.9-.8Z" />
  </Svg>
);
export const IconShield = (p: P) => (
  <Svg {...p}>
    <path d="M12 3.5 19 6v5.5c0 4.2-2.9 7.7-7 9-4.1-1.3-7-4.8-7-9V6Z" />
    <path d="m9 12 2 2 4-4" />
  </Svg>
);
export const IconYoutube = (p: P) => (
  <Svg {...p}>
    <rect x="3" y="6" width="18" height="12" rx="4" />
    <path d="m10.5 9.5 4 2.5-4 2.5Z" />
  </Svg>
);

/*
 * The trust-bar set. Drawn for their own line rather than reused from the
 * generic set, so each one says something specific: a rating star, a clock
 * with a long sweep, a card with no interest on it, a health fund card.
 */
export const IconRating = (p: P) => (
  <Svg {...p}>
    <path d="m12 3.6 2.5 5.1 5.6.8-4.05 3.95.95 5.55-5-2.63-5 2.63.95-5.55L3.9 9.5l5.6-.8Z" />
  </Svg>
);
/** An hourglass — "long appointments, no rushing". */
export const IconLongAppointment = (p: P) => (
  <Svg {...p}>
    <path d="M6.8 3.4h10.4M6.8 20.6h10.4" />
    <path d="M7.6 3.4v3.2c0 1.6 1.3 2.7 2.6 3.7.9.6.9 1.8 0 2.4-1.3 1-2.6 2.1-2.6 3.7v3.2" />
    <path d="M16.4 3.4v3.2c0 1.6-1.3 2.7-2.6 3.7-.9.6-.9 1.8 0 2.4 1.3 1 2.6 2.1 2.6 3.7v3.2" />
  </Svg>
);
/** A card with a percent sign — interest free finance. */
export const IconNoInterest = (p: P) => (
  <Svg {...p}>
    <rect x="2.8" y="5" width="18.4" height="14" rx="2.6" />
    <path d="M2.8 9.2h18.4" />
    <path d="m9.2 16.2 5.6-4.4" />
    <circle cx="9.5" cy="12.2" r=".85" />
    <circle cx="14.5" cy="15.8" r=".85" />
  </Svg>
);
/** A health fund card, claimed on the spot. */
export const IconHealthFund = (p: P) => (
  <Svg {...p}>
    <rect x="2.8" y="4.8" width="18.4" height="14.4" rx="2.6" />
    <path d="M8.6 12h6.8M12 8.6v6.8" />
  </Svg>
);
