import { asset } from "@/lib/basePath";

/**
 * Dr Richard's round avatar. Its own component because Photo's srcset is
 * built for the 800/1600 photographs — these are 200/400 crops for circles
 * never wider than 80px.
 */
export function DrAvatar({ alt = "", className = "" }: { alt?: string; className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={asset("/img/dr-avatar-400.webp")}
      srcSet={`${asset("/img/dr-avatar-200.webp")} 200w, ${asset("/img/dr-avatar-400.webp")} 400w`}
      sizes="80px"
      width={400}
      height={400}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={`size-full object-cover ${className}`}
    />
  );
}
