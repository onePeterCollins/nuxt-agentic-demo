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
│   └── index.vue                  # Page root — sequences all section components
├── components/
│   ├── AppNav.vue                 # Navbar with hamburger mobile toggle
│   ├── AppLogo.vue                # SVG logo + wordmark, shared by nav and footer
│   ├── AppFooter.vue              # Footer: logo, tagline, social icons, link columns
│   └── sections/
│       ├── HeroSection.vue        # Full-viewport hero with grid bg + floating cards
│       ├── FeaturesSection.vue    # Trusted-by line + 3 tinted AI engine cards
│       ├── CommunitySection.vue   # Feature list (left) + workflow steps card (right)
│       ├── ROIDashboard.vue       # Dark navy dashboard with metric cards
│       ├── ComparisonSection.vue  # 10-row capability comparison table
│       ├── PricingSection.vue     # Scalloped price tag badge + CTA
│       ├── UseCasesSection.vue    # 2×2 use case card grid
│       └── CTASection.vue         # Indigo CTA banner + decorative circle
├── components/icons/              # 16 SVG icon components (currentColor, template-only)
├── assets/css/main.css            # Global reset, CSS utilities, custom classes
├── tailwind.config.js             # Brand token definitions (10 brand.* color tokens)
├── nuxt.config.ts                 # Modules, Google Fonts, static preset, vuefire config
├── firebase.json                  # Firebase Hosting config → .output/public
├── .firebaserc                    # Firebase project ID
├── AGENT_TASKS.md                 # Task manifest — defines all work units
└── CLAUDE.md                      # Agent instructions — supreme authority on behavior
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

## Tradeoffs & Notes

- **Font approximation** — DM Sans is loaded via Google Fonts using the exact family name from the design. Exporting the font directly from Figma would improve weight and optical-size fidelity.
- **SVG approximations** — AppLogo and all 16 icon components are hand-crafted inline SVGs using basic shapes (circles, rects, paths). They use `currentColor` for theming. Figma SVG exports would produce exact shapes.
- **Scalloped price tag** — The badge shape is implemented with a 38-point CSS `clip-path` polygon approximation. An SVG export from Figma would give the exact scallop curve.
- **Static copy** — All section content is hardcoded strings. With more time this would be driven by Nuxt Content or a headless CMS, enabling non-developer content edits.
- **No scroll-reveal animations** — Sections appear statically. With more time, IntersectionObserver combined with Tailwind transition utilities would add entrance animations matching the Figma prototype.

---

## What I'd Do With More Time

- **Firebase Auth flow** — The `nuxt-vuefire` module is already wired up; a sign-in page and protected dashboard route would complete the auth loop.
- **Nuxt Content integration** — Move section copy to Markdown/YAML content files so the site is editable without touching Vue components.
- **Pixelay visual regression** — Capture Figma overlays at 375px, 768px, and 1440px and diff against screenshots to quantify remaining pixel-level gaps.
