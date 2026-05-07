# TechniDox

AI-powered documentation platform that automatically generates, scores, and improves your documentation — reducing time from hours to minutes.

## Firebase URL

**https://technidox-nuxt-demo-39881.web.app/**


---

## Setup & Development

**Prerequisites**
- Node.js 18+
- pnpm (`npm install -g pnpm`)
- firebase-tools (`npm install -g firebase-tools`)

**Install dependencies**
```bash
pnpm install
```

**Start development server**
```bash
pnpm dev
# → http://localhost:3000
```

**Build static output**
```bash
pnpm generate
# Output: .output/public/
```

---

## Deploy to Firebase Hosting

**First-time setup**
```bash
firebase login
firebase init hosting
# When prompted:
#   Public directory → .output/public
#   Single-page app  → Yes
#   Overwrite index.html → No
```

**Deploy**
```bash
pnpm deploy
# Runs: nuxt generate && firebase deploy
```

After deploy, copy the **Hosting URL** from the CLI output into the Firebase URL placeholder above.

---

## Project Structure

```
technidox/
├── pages/
│   └── index.vue                     # Page root — sequences all section components
├── components/
│   ├── AppNav.vue                    # Navbar with hamburger mobile toggle + slide-in animation
│   ├── AppLogo.vue                   # Logo image, shared by nav and footer
│   ├── AppFooter.vue                 # Footer: logo, tagline, social icons, nav link columns
│   ├── SectionBase.vue               # Section wrapper: <section> with aria-label/labelledby + constrain slot
│   ├── AnimateIn.vue                 # Scroll/eager entrance animation wrapper (9 presets, distance prop)
│   ├── buttons/
│   │   └── Button.vue                # Reusable button: solid + outlined variants, hover/focus/active/disabled states
│   └── sections/
│       ├── HeroSection.vue           # Full-viewport hero with grid bg, floating cards, entrance animations
│       ├── BrandCompanySection.vue   # Trusted-by statement section below hero
│       ├── FeaturesSection.vue       # 3 tinted AI engine cards with staggered entrance
│       ├── CommunitySection.vue      # Feature list (left) + workflow steps card (right)
│       ├── ROIDashboard.vue          # Dark navy dashboard with metric cards
│       ├── ComparisonSection.vue     # 10-row capability comparison table
│       ├── PricingSection.vue        # SVG price tag badge + CTA
│       ├── UseCasesSection.vue       # 2×2 use case card grid with staggered entrance
│       └── CTASection.vue            # Indigo CTA banner + decorative circle
├── components/icons/                 # SVG icon components (currentColor, template-only)
├── composables/
│   └── useScrollReveal.ts            # Legacy scroll reveal composable (deprecated, preserved)
├── assets/css/main.css               # Global reset, CSS utilities, custom animation classes
├── tailwind.config.js                # Brand token definitions (10 brand.* color tokens)
├── nuxt.config.ts                    # Modules, Google Fonts, static preset
├── firebase.json                     # Firebase Hosting config → .output/public
├── .firebaserc                       # Firebase project ID
├── AGENT_TASKS.md                    # Task manifest — defines all work units
└── CLAUDE.md                         # Agent instructions — supreme authority on behavior
```

---

## Interactive Element

**AppNav mobile hamburger toggle** — `components/AppNav.vue`

Clicking the hamburger button (visible below 768px) opens a dropdown menu with all four nav links and a "Get Started" CTA. The icon swaps from three horizontal bars to an X when open. Closing happens on any link click or a second button press.

Accessibility attributes in use:
- `aria-label="Toggle navigation menu"` — announces the button's purpose to screen readers
- `:aria-expanded="menuOpen"` — dynamically reflects open/closed state (`"true"` / `"false"`)
- Vue `<Transition name="mobile-menu">` — animated with `.mobile-menu-*` CSS classes from `main.css`

---

## Animations

All entrance animations are driven by `AnimateIn.vue` — a zero-dependency wrapper component using `IntersectionObserver` for scroll-triggered reveals and a double `requestAnimationFrame` for eager (on-mount) animations.

**Props:**

| Prop | Type | Default | Description |
|---|---|---|---|
| `animation` | String | `fade-up` | Preset name — `fade`, `fade-up/down/left/right`, `slide-up/down/left/right` |
| `duration` | Number | `600` | Transition duration in ms |
| `delay` | Number | `0` | Transition delay in ms |
| `easing` | String | `cubic-bezier(0.16,1,0.3,1)` | CSS easing function |
| `distance` | Number \| String | `null` | Override preset translate distance — `80` → `80px`, `"50vh"` → `50vh` |
| `eager` | Boolean | `false` | Animate on mount instead of on scroll |
| `threshold` | Number | `0.15` | IntersectionObserver visibility threshold |
| `once` | Boolean | `true` | Unobserve after first reveal |

**Slide vs fade presets:** `slide-*` presets move at full opacity (no fade). `fade-*` presets combine opacity fade with translate.

---

## Tradeoffs & Notes

- **Font approximation** — DM Sans is loaded via Google Fonts using the exact family name from the design. Exporting the font directly from Figma would improve weight and optical-size fidelity.
- **SVG approximations** — AppLogo and all icon components are hand-crafted inline SVGs using basic shapes. They use `currentColor` for theming. Figma SVG exports would produce exact shapes.
- **Static copy** — All section content is hardcoded strings. With more time this would be driven by Nuxt Content or a headless CMS, enabling non-developer content edits.
- **useScrollReveal composable** — The legacy `composables/useScrollReveal.ts` is preserved but no longer called by any component. It is superseded by `AnimateIn.vue`.
- **Section scaling via CSS transform** — `CommunitySection`, `ROIDashboard`, and `HeroSection` are scaled to fill the viewport using `transform: scale(98.5vw / 1920px)` with a `margin-bottom` correction to collapse the whitespace the scaled-down element leaves behind. This is a pragmatic shortcut that avoids a full responsive rework of fixed-pixel layouts. The tradeoff is that text rendering sharpness degrades slightly at smaller scales, and the approach breaks down at very narrow viewports (below ~400px). A proper responsive implementation would use fluid typography and percentage-based layouts instead.
- **Animations not working on Firebase static hosting** — `AnimateIn.vue` uses `IntersectionObserver` and CSS transitions to reveal elements on scroll. The root cause was a paint-cycle coalescing problem: Nuxt SSG bakes the component's initial hidden state (`opacity: 0`, `translateY(32px)`) into the static HTML, and in the minified production bundle the browser collapses the hidden-then-visible DOM updates into a single paint frame, so the CSS transition has no state delta to animate. Fixed with an `isMounted` guard (prevents hidden state being baked into SSG HTML), `await nextTick()` (flushes the hidden state into the DOM before rAF fires), and a `void el.offsetHeight` forced reflow (records the hidden state in the browser's layout engine as the CSS transition "from" state, without painting it).
- **Hero animations only fire once per tab (bfcache tradeoff)** — After the animation fix above, hero entrance animations fire correctly on every fresh page load. However, pressing refresh on the same tab may suppress them on subsequent loads. The cause is the browser's Back/Forward Cache (bfcache): the browser restores a frozen JavaScript heap snapshot — including Vue's reactive state where `visible = true` is already set — so `onMounted` never re-runs and the animation never replays. The fix would be to add `Cache-Control: no-store` to Firebase Hosting headers, which opts the page out of bfcache. This was deliberately not implemented because it disables all browser caching site-wide, forcing a full network fetch on every visit — an unacceptable performance tradeoff for an animation. Visitors landing on the page for the first time (the intended audience for entrance animations) always see the animation. Repeat visitors refreshing the same tab do not, which is acceptable behaviour.

---

## What I'd Do With More Time

- **GSAP for animations** — Replace the custom `AnimateIn.vue` with GSAP. The current implementation works but required significant effort to handle SSR/SSG paint-cycle timing, bfcache, and forced reflow edge cases. GSAP handles all of this out of the box, ships with a ScrollTrigger plugin that replaces the IntersectionObserver logic, and produces more robust and expressive animations with far less custom code.
- **Fix Firebase animation regression** — Implement the `<ClientOnly>` wrapper on `AnimateIn.vue` properly, with a `#fallback` slot that renders content visibly in the static HTML. This ensures SSG output never contains `opacity: 0` inline styles, giving the client-side hydration a clean slate to transition from.
- **Firebase Auth flow** — A sign-in page and protected dashboard route to complete the auth loop.
- **Nuxt Content integration** — Move section copy to Markdown/YAML content files so the site is editable without touching Vue components.
- **Responsive rework** — Replace the CSS `transform: scale()` shortcut on fixed-pixel section layouts with fluid typography and percentage-based grids, improving sharpness at all viewport sizes.
- **Pixelay visual regression** — Capture Figma overlays at 375px, 768px, and 1440px and diff against screenshots to quantify remaining pixel-level gaps.
