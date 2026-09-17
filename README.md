# STAR dentistry — home page rebuild

A concept rebuild of the [stardentistry.com.au](https://www.stardentistry.com.au/) home page. Same
stack and styling system as `girls-getaways/` (Next.js App Router + Tailwind v4, **static export**
for GitHub Pages), re-skinned in STAR's teal.

```bash
npm install
npm run dev -- --port 3052
node scripts/images.mjs      # re-generate public/img from assets-raw/
```

## What's in it

- **Mega menu** (Girls Getaways drill-down): *Treatments → category → treatments*, with that
  category's Popular Services cards and booking/call in a third column. *About us* panel with the
  practice photo, address and opening hours. Dims the page, Esc / mouse-out closes.
- **Mobile menu** — same drill-down, one level per screen with Back; book/call/socials pinned.
- Floating **Call + Book online** CTA (bar on phones, card bottom-right on desktop) once the hero
  scrolls away; it steps aside over the contact section so only one booking button is ever in view.
- **Reviews**, Rankify-style: star/faces badge above the hero headline, three standout reviews each
  in their own band as you scroll, and an endless review carousel. **All reviews are placeholders**
  (`reviews` / `highlights` in `src/content/site.ts`, visibly tagged) until the client sends real ones.
- Sections: hero · trust strip · Dr Richard intro · Popular Services · Why choose · logo marquee ·
  FAQs (with FAQPage schema) · CTA + contact, hours and map. Dentist LocalBusiness schema.

## Content

Everything — copy, links, images, logos, hours — comes from the live home page and its navigation
(`src/content/site.ts`, `assets-raw/`). Waiting on new photos from the client: drop them in
`assets-raw/`, point `scripts/images.mjs` at them, re-run.

Treatment/About links go to the live site (this build is the home page only). Booking goes to
their Timely page.
