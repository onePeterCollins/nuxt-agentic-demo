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

---

## What I'd Do With More Time

- **Firebase Auth flow** — A sign-in page and protected dashboard route to complete the auth loop.
- **Nuxt Content integration** — Move section copy to Markdown/YAML content files so the site is editable without touching Vue components.
- **Pixelay visual regression** — Capture Figma overlays at 375px, 768px, and 1440px and diff against screenshots to quantify remaining pixel-level gaps.
