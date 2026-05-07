# Pixelay Notes

**Pixelay project URL:** https://technidox-nuxt-demo-39881.web.app/?pixelay_project_id=movmypssnw72e

- **Hero Section**: headline line-breaks 1–2px earlier than Figma at 1440px — DM Sans loaded via Google Fonts renders at a slightly different optical size than Figma's font renderer, causing the `<h1>` to reflow one word earlier — exporting the exact font file from Figma and self-hosting it would resolve the discrepancy.

- **ROI Dashboard**: metric card text sits ~4px lower within each card than in the Figma frame — the `roi-card` class uses a fixed `border-radius: 12px` and `rgba` background defined in plain CSS, while Figma's auto-layout adds internal padding that doesn't map exactly to Tailwind's `p-4` utility — adjusting to `p-3.5` or matching Figma's exact padding values would close the gap.

- **Comparison Table**: the indigo header row appears ~1px taller in the browser than in Figma — Tailwind's `py-4` padding on `<th>` elements adds symmetric top and bottom spacing, but Figma's table component uses a fixed row height that doesn't account for line-height differences in DM Sans at 14px — setting an explicit `h-14` on the header row would match the Figma spec precisely.
