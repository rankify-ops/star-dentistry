/*
 * assets-raw/ → public/img/
 *
 * assets-raw holds the originals pulled from stardentistry.com.au (Squarespace
 * CDN, ?format=2500w). The export is static, so this script IS the image
 * optimiser: two webp widths per photograph for the srcset, the service
 * illustrations, the logo strip, the wordmark in teal and white, favicons and
 * the OG card.
 *
 * Run: node scripts/images.mjs
 */
import sharp from "sharp";
import { mkdirSync } from "node:fs";

const RAW = "assets-raw";
const OUT = "public/img";
mkdirSync(OUT, { recursive: true });

const PHOTOS = [
  // Sent by the client 18 Sep 2026 — brighter and more recent than the
  // Squarespace uploads. Small originals (~680px), so they're never given a
  // slot wider than that on screen.
  ["new-02.webp", "surgery"],
  ["new-03.webp", "entry"],
  ["new-08.webp", "reception-new"],
  ["new-05.webp", "exterior"],
  ["new-06.webp", "smile"],
  ["04-14bb6f4c-Stardetails_printsized-11.jpg", "reception"],
  ["14-f7e88282-STAR_Reception_Web.webp", "reception-desk"],
  ["15-2faefeed-Starspaces_printsized-1_retouchedtiles.webp", "steri"],
  ["05-f7eb3179-Dr_Richard_jpg.webp", "dr-richard"],
  ["07-416dfdc0-Dr_Tippett__Consultation_Dental_Implant.jpg.webp", "dr-consult"],
];
for (const [src, slug] of PHOTOS) {
  for (const w of [800, 1600]) {
    await sharp(`${RAW}/${src}`)
      .rotate()
      .resize({ width: w, withoutEnlargement: true })
      .webp({ quality: w === 1600 ? 80 : 76 })
      .toFile(`${OUT}/${slug}-${w}.webp`);
  }
}

// Popular Services illustrations (round, on transparent).
const SERVICES = [
  ["08-16512932-1.png", "svc-implant"],
  ["09-16512932-2.png", "svc-veneers"],
  ["10-16512933-10.png", "svc-invisalign"],
  ["11-16512933-6.png", "svc-whitening"],
  ["12-16512933-4.png", "svc-braces"],
  ["13-16512934-9.png", "svc-wisdom"],
];
for (const [src, slug] of SERVICES) {
  await sharp(`${RAW}/${src}`).webp({ quality: 86, alphaQuality: 90 }).toFile(`${OUT}/${slug}.webp`);
}

// Health fund / supplier / membership logos — trimmed so they sit on one baseline.
const LOGOS = [
  ["16-6926dd4c-2.png", "logo-qantas"],
  ["17-7d25a3c7-3.png", "logo-straumann"],
  ["18-7c7f56e9-4.png", "logo-invisalign"],
  ["19-e230c7ae-1.png", "logo-neodent"],
  ["20-f9b0572b-6.png", "logo-hicaps"],
  ["21-eb096d7f-5.png", "logo-nib"],
  ["22-4eb9b796-7.png", "logo-guhealth"],
  ["23-e9360487-8.png", "logo-qip"],
  ["24-81bb66db-9.png", "logo-clearcorrect"],
  ["25-ccca0aa3-10.png", "logo-ada"],
  ["26-18f6a590-Untitled_design_(1).png", "logo-humm"],
];
for (const [src, slug] of LOGOS) {
  await sharp(`${RAW}/${src}`).trim({ threshold: 10 }).resize({ height: 120, width: 320, fit: "inside" }).webp({ quality: 88 }).toFile(`${OUT}/${slug}.webp`);
}

await sharp(`${RAW}/06-def6824a-pngwing.com.png`).trim({ threshold: 10 }).resize({ width: 360 }).webp({ quality: 88 }).toFile(`${OUT}/google-rating.webp`);

/*
 * THE WORDMARK
 * The live logo is white/stone lettering on a teal panel inside a white frame.
 * Take the panel's interior, turn the teal into transparency (alpha = distance
 * from teal) and recolour what's left, for a teal and a white variant.
 */
const TEAL = [126, 199, 180];
const { data, info } = await sharp(`${RAW}/01-539b48a9-Logo-01.jpg`)
  .extract({ left: 150, top: 150, width: 2200, height: 1073 })
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

async function mark(name, [r, g, b]) {
  const buf = Buffer.from(data);
  for (let i = 0; i < buf.length; i += 4) {
    const d = Math.hypot(buf[i] - TEAL[0], buf[i + 1] - TEAL[1], buf[i + 2] - TEAL[2]);
    buf[i + 3] = Math.max(0, Math.min(255, Math.round((d - 18) * 3.2)));
    buf[i] = r;
    buf[i + 1] = g;
    buf[i + 2] = b;
  }
  const trimmed = await sharp(buf, { raw: info }).png().toBuffer();
  await sharp(trimmed).trim({ threshold: 1 }).resize({ width: 480 }).png({ compressionLevel: 9 }).toFile(`${OUT}/${name}`);
}
await mark("logo-ink.png", [31, 94, 82]);
await mark("logo-light.png", [255, 255, 255]);

// Favicons: the logo's tooth on the brand teal.
const tooth = await sharp(`${RAW}/01-539b48a9-Logo-01.jpg`).extract({ left: 1720, top: 195, width: 400, height: 505 }).toBuffer();
for (const s of [32, 180, 192]) {
  const t = await sharp(tooth).resize({ height: Math.round(s * 0.7) }).toBuffer();
  await sharp({ create: { width: s, height: s, channels: 4, background: "#7ec7b4" } })
    .composite([{ input: t, gravity: "center" }])
    .png()
    .toFile(`${OUT}/icon-${s}.png`);
}

// OG card: the reception photograph with the original logo panel.
const logo = await sharp(`${RAW}/01-539b48a9-Logo-01.jpg`).resize({ width: 420 }).toBuffer();
const wash = Buffer.from(`<svg width="1200" height="630"><rect width="1200" height="630" fill="#0f2f29" fill-opacity=".28"/></svg>`);
await sharp(`${RAW}/04-14bb6f4c-Stardetails_printsized-11.jpg`)
  .resize(1200, 630, { fit: "cover" })
  .composite([{ input: wash }, { input: logo, gravity: "center" }])
  .jpeg({ quality: 82 })
  .toFile(`${OUT}/og.jpg`);

console.log("images done");
