# CLAUDE.md — TechniDox Agent Instructions

**Version:** 1.2.0
**Last updated:** 2025-05-05
**Authority:** This file is the supreme source of truth for all agent behavior in this project.
When any instruction in a task prompt (`AGENT_TASKS.md`) conflicts with a rule in this file,
this file wins. If you believe a task prompt requires violating a rule here, stop and report
the conflict to the orchestrator before proceeding.

---

## 1. MANDATORY PERSONA SELECTION AND VERIFICATION

You **must** adopt a persona before doing any work. Adoption is not complete until you have
**physically read the persona file** and can quote its opening rule verbatim.

### 1.1 Persona registry

| Persona | File | Trigger condition |
|---|---|---|
| **Developer Agent** | `.promptx/personas/agent-developer.md` | Executing a task block from `AGENT_TASKS.md` |
| **Code Reviewer Agent** | `.promptx/personas/agent-code-reviewer.md` | Verifying a completed task against its acceptance criteria |
| **Rebaser Agent** | `.promptx/personas/agent-rebaser.md` | Cleaning commits before `git push` |
| **Merger Agent** | `.promptx/personas/agent-merger.md` | Resolving a merge conflict or consolidating a branch |
| **Multiplan Manager Agent** | `.promptx/personas/agent-multiplan-manager.md` | Replanning tasks, splitting a task, or re-sequencing work |

### 1.2 Persona adoption protocol

Execute these steps in order. Do not skip any step.

```
STEP 1. Identify your trigger condition from the table above.
STEP 2. If two personas seem applicable, apply the TIEBREAKER RULE below.
STEP 3. Read the persona file at the path listed.
STEP 4. If the file does not exist, apply the MISSING FILE FALLBACK below.
STEP 5. Quote the opening rule of the persona file here before proceeding.
         Format: "Persona adopted: [name]. Opening rule: '[exact quote]'"
STEP 6. Proceed with work under that persona's rules.
```

### 1.3 Tiebreaker rule

When two personas could apply, use this priority order — highest applicable wins:

1. **Multiplan Manager** — if the work involves replanning or splitting tasks
2. **Code Reviewer** — if a task has been implemented and needs criteria verification
3. **Developer** — if a task from `AGENT_TASKS.md` is being executed
4. **Rebaser / Merger** — only when explicitly triggered by a git operation

If still ambiguous, default to **Developer Agent** and note the ambiguity in your report.

### 1.4 Missing persona file fallback

If a persona file does not exist at the listed path:

1. **Do not invent or assume its contents.**
2. Stop immediately and output:
   ```
   BLOCKED: Persona file not found at [path].
   Cannot proceed. The orchestrator must create this file or instruct an alternative.
   ```
3. Do not attempt the task until the file exists or the orchestrator explicitly instructs
   you to proceed without a persona, accepting that base model behavior applies.

---

## 2. PROJECT CONTEXT

### 2.1 Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | Nuxt 3 (SSG via `nuxt generate`) | ^3.12 |
| UI | Vue 3, `<script setup>` Composition API only | — |
| Styling | TailwindCSS 3 via `@nuxtjs/tailwindcss` | ^3.4 |
| Package manager | pnpm | — |
| Hosting | Firebase Hosting | — |
| Fonts | DM Sans via Google Fonts | — |
| TypeScript | Not configured. Do not run type checks. Do not add tsconfig.json. | — |

> **TypeScript note:** The project uses `.ts` file extensions for config files only
> (`nuxt.config.ts`). There is no strict TS setup. Do not run `nuxi typecheck`.
> Do not introduce TS-specific syntax beyond what Nuxt 3 requires in config files.

### 2.2 Directory structure

```
technidox/
├── pages/
│   └── index.vue                  # Page root — sequences all section components
├── components/
│   ├── AppNav.vue                 # Navbar + mobile hamburger toggle
│   ├── AppFooter.vue              # Footer: logo, tagline, social icons, link columns
│   └── sections/
│       ├── HeroSection.vue        # Full-viewport hero with grid bg + floating cards
│       ├── FeaturesSection.vue    # "Trusted by" line + 3 tinted AI engine cards
│       ├── CommunitySection.vue   # Feature list (left) + workflow steps card (right)
│       ├── ROIDashboard.vue       # Dark navy dashboard with metric cards
│       ├── ComparisonSection.vue  # 10-row capability comparison table
│       ├── PricingSection.vue     # Scalloped price tag badge + CTA
│       ├── UseCasesSection.vue    # 2×2 use case card grid
│       └── CTASection.vue         # Purple CTA banner + decorative circle
├── assets/css/
│   └── main.css                   # Global reset, CSS utilities, custom classes
├── tailwind.config.js             # Brand token definitions
├── nuxt.config.ts                 # Modules, Google Fonts, static preset
├── firebase.json                  # Firebase Hosting config
├── .firebaserc                    # Firebase project ID (replace before deploying)
├── AGENT_TASKS.md                 # Task manifest — defines all work units
└── CLAUDE.md                      # This file — supreme authority on agent behavior
```

### 2.3 Design tokens

All color values must use these Tailwind tokens. **Never use raw hex in class attributes.**
The only permitted exception is documented in Section 3.5.

```
brand.indigo          #2A2882   headings, nav text, comparison table header
brand.indigo-mid      #3730A3   CTA banner background
brand.indigo-light    #4F46E5   hover states
brand.orange          #F59E0B   eyebrow labels, hero highlight words, pricing badge
brand.lavender        #EAEAF5   hero background, footer background
brand.card-purple     #EDE9FE   AI generator card tint
brand.card-orange     #FFF8EE   quality scorer card tint
brand.card-green      #F0FDF4   human review card tint
brand.dark-navy       #0D0C2A   ROI dashboard container background
brand.dark-card       #17163D   dashboard metric card background
```

### 2.4 Global CSS classes

These classes are defined in `assets/css/main.css`. Use them; do not redefine them inline.

```
.hero-grid-bg            Lavender bg + 80px CSS grid line pattern (two linear-gradients)
.footer-bg               Solid #EAEAF5 background
.price-tag-shape         38-point clip-path polygon for scalloped price badge
.roi-card                Semi-transparent white bg + border for dashboard metric cards
.progress-bar-gradient   Green→blue linear-gradient for the health progress bar
.mobile-menu-*           Vue <Transition> enter/leave classes for the nav dropdown
```

### 2.5 Heading hierarchy

The page has one `<h1>` (in `HeroSection.vue`). Every section component uses `<h2>` for its
main section title and `<h3>` for any card or sub-item titles. No heading levels may be
skipped. When writing or editing any component, verify your headings fit this hierarchy
before marking the task done. Do not introduce `<h4>` or below without orchestrator approval.

---

## 3. CORE PRINCIPLES

### 3.1 Read before you write

Before editing any component, read its full contents plus the following files if they are
relevant to what you are changing:

- `assets/css/main.css` — always read if adding or changing any class
- `tailwind.config.js` — always read if adding any color or spacing value
- Any component that the file you are editing imports or is imported by

"Relevant" means: any file whose output appears in the same rendered viewport as the
component you are working on, or any file that defines a class, token, or component you
intend to use. When in doubt, read it.

### 3.2 One task at a time

Work from `AGENT_TASKS.md` in dependency order. A task is **not started** until all its
listed dependencies are ✅ merged to `main`. A task is **not complete** until every
acceptance criterion is verified and the PR is created. There is no "mostly done."

### 3.3 Vue 3 Composition API only

All components use `<script setup>`. No exceptions.

**Prohibited patterns:**
```js
// ❌ Options API
export default { data() {}, methods: {}, computed: {} }

// ❌ defineComponent with options
export default defineComponent({ setup() {} })  // use <script setup> instead

// ❌ .vue files with <script> (not <script setup>)
```

**Required pattern:**
```vue
<script setup>
const myRef = ref(false)
</script>
```

### 3.4 Follow existing patterns

Before introducing any new pattern (a new CSS class structure, a new component abstraction,
a new way of handling icons), check whether an equivalent pattern already exists in the
codebase. If it does, follow it exactly. Do not introduce a second pattern for the same
problem.

### 3.5 Tokens over hardcoded values — with a defined exception list

Use `brand.*` Tailwind tokens for all color values in class attributes.

Inline `style=""` attributes are permitted **only** for the following specific cases,
which cannot be expressed as Tailwind tokens:

| Case | Approved inline style | Component |
|---|---|---|
| Dashboard container bg | `style="background: #0D0C2A"` | `ROIDashboard.vue` |
| Dashboard metric card bg | `background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.1)` | `ROIDashboard.vue` |
| Enterprise use case card bg | `style="background: #2A2882"` | `UseCasesSection.vue` |
| CTA banner card bg | `style="background: #3730A3"` | `CTASection.vue` |

Any use of `style=""` **not on this list** must be challenged. If you believe a new case
is genuinely needed, output a note explaining why a Tailwind class cannot achieve it, then
proceed — do not silently add it.

Tailwind opacity utilities (`bg-brand-indigo/10`) must be used in preference to hex-with-opacity
inline styles wherever the base color exists as a token.

### 3.6 No new dependencies

Do not install any npm package, Nuxt module, or plugin that is not already listed in
`package.json`. This applies to:

- npm packages (`pnpm add [anything]`)
- Nuxt modules (`@nuxt/image`, `@vueuse/core`, `@nuxtjs/color-mode`, etc.)
- Nuxt plugins created in the `plugins/` directory
- CDN script tags added to `nuxt.config.ts`

If you believe a dependency is necessary to complete a task correctly, stop and report
it to the orchestrator. Do not add it unilaterally.

### 3.7 SVG approximation policy

Several tasks specify icon SVGs without providing exact path data. When a task says
"use [X] SVG" without providing the `d=` path:

1. Create a recognizable, geometrically appropriate SVG using basic shapes and paths
   (`circle`, `rect`, `line`, `path` with simple coordinates)
2. The icon must be visually distinguishable from other icons in the same component
3. It must use `currentColor` for its stroke or fill so it inherits the parent's text color
4. Size must match the spec (usually 16×16, 18×18, or 20×20 viewBox)
5. Note the approximation in your task report

Icons that are `aria-hidden="true"` decorative elements have lower fidelity requirements
than icons inside interactive elements or accessibility labels.

### 3.8 Commit discipline

One commit per completed task (i.e. after all acceptance criteria are verified and before
the branch is pushed). Format:

```
T-XX: [task title from AGENT_TASKS.md]

- [one-line summary of what was built]
- [any deviations from the task prompt]
- [any acceptance criteria that required extra work]
```

Commits happen **after** the report and **before** the push. See Section 4 for the full
protocol.

### 3.9 Branching and PR workflow

Every task from T-02 onwards runs on its own branch. This section defines the complete
protocol. It is enforced by Steps 4.1, 4.7, 4.8, and 4.9 in the Task Execution Protocol.

**Branch naming convention:**
```
task/T-XX-kebab-title
```
Examples: `task/T-02-design-tokens`, `task/T-04-appnav-applogo`, `task/T-13-responsiveness`

**The workflow in full:**

```
BEFORE STARTING WORK:
  1. Verify the previous task's PR has been merged to main.
     If it has not, output:
       BLOCKED: PR for [previous task] has not been merged.
       Cannot create branch. Waiting for orchestrator.
     Do not proceed until the orchestrator confirms the merge.

  2. Sync main and cut the new branch:
       git checkout main
       git pull origin main
       git checkout -b task/T-XX-kebab-title
     Always cut from main. Never cut from another task branch.

AFTER WORK IS COMPLETE (all criteria ✅, report written, commit made):
  3. Push the branch:
       git push -u origin task/T-XX-kebab-title

  4. Create the PR via gh CLI:
       gh pr create \
         --title "T-XX: [task title]" \
         --body "$(cat <<'EOF'
## Summary
[one-sentence summary of what was built]

## Acceptance Criteria
[paste ✅ list from Section 4.5 report]

## Deviations
[paste from Section 4.5 report, or 'None']

## SVG Approximations
[paste from Section 4.5 report, or 'None']

## Test Instructions
pnpm dev → verify at http://localhost:3000
EOF
)" \
         --base main

  5. Output the PR URL and halt:
       PR CREATED: [url]
       WAITING: Orchestrator must merge this PR before the next task can begin.
     Do not begin the next task. Do not create additional commits on this branch.
```

**Prerequisites — orchestrator responsibility (not the agent's):**
- GitHub repository created with `main` as the default branch
- Remote configured: `git remote add origin [repo-url]`
- `gh` CLI authenticated: `gh auth login`
- T-01's initial commit pushed to `main` before branching begins

**Exceptions — tasks exempt from this workflow:**
- **T-00:** No code or git operations. Persona files are created by the orchestrator.
- **T-01:** Commits directly to `main` as the project's initial commit. No branch, no PR.
  After T-01: `git init` (if not done), `git add .`,
  `git commit -m "T-01: project scaffold & config"`,
  `git branch -M main`, `git push -u origin main`.
  The branching workflow begins at T-02.

---

## 4. TASK EXECUTION PROTOCOL

This protocol is mandatory for every task from T-02 onwards. T-00 and T-01 are exempt
from Steps 4.1 and 4.7–4.9 (see Section 3.9 exceptions). Execute every step in order.
Do not skip steps.

### 4.1 Branch creation (before any other work)

```
[ ] Confirm the previous task's PR is merged to main
    If not merged → output BLOCKED message (Section 3.9) and halt
[ ] git checkout main && git pull origin main
[ ] git checkout -b task/T-XX-kebab-title
    Use the exact branch name from the task's "Branch" field in AGENT_TASKS.md
```

### 4.2 Pre-flight (before writing any code)

```
[ ] Read the full task block in AGENT_TASKS.md — goal, design reference, prompt, criteria
[ ] Confirm all dependency tasks are ✅ merged to main
[ ] Read assets/css/main.css in full
[ ] Read tailwind.config.js in full
[ ] Read the target component file if it already exists
[ ] Read any component the new file will import or be imported by
```

### 4.3 Implementation

Follow the task prompt exactly. If the prompt requires something that violates a rule in
this file, stop and report the conflict before writing any code.

### 4.4 Self-verification (mandatory before commit)

Go through every acceptance criterion in the task. For each one:

- If it **passes**: mark it ✅ in your output
- If it **fails**: mark it ❌, describe exactly what is wrong, fix it, and re-verify

Do not proceed to the report step until every criterion is either ✅ or explicitly
escalated to the orchestrator with a reason it cannot be fixed within this task's scope.

Failing criteria are **not acceptable to commit**. A task with one failing criterion
is not complete — it is blocked.

### 4.5 Report (before commit)

Output a structured report:

```
TASK: T-XX [title]
BRANCH: task/T-XX-kebab-title
STATUS: Complete | Blocked

ACCEPTANCE CRITERIA:
  ✅ [criterion text]
  ✅ [criterion text]
  ❌ [criterion text] — [what failed and why] — [FIXED / ESCALATED]

DEVIATIONS FROM PROMPT:
  - [What was changed from the prompt and why]
  - [If none: "None"]

SVG APPROXIMATIONS:
  - [Icon name, component, description of approach]
  - [If none: "None"]

STYLE EXCEPTIONS (inline style="" used outside approved list):
  - [Element, value, justification]
  - [If none: "None"]

FILES CHANGED:
  - [filepath] — [one-line description of change]
```

### 4.6 Commit

Only after the report is complete and all criteria are ✅:

```bash
git add .
git commit -m "T-XX: [task title]

- [summary line]
- [deviations if any]"
```

### 4.7 Push branch

```bash
git push -u origin task/T-XX-kebab-title
```

If the push is rejected for any reason other than "branch already exists on remote",
output a BLOCKED message and do not force-push. Report the error to the orchestrator.

### 4.8 Create PR

```bash
gh pr create \
  --title "T-XX: [task title]" \
  --body "..." \
  --base main
```

Use the PR body template from Section 3.9. Paste the Section 4.5 report content into
the appropriate fields. Do not summarise — paste verbatim.

If `gh pr create` fails because `gh` is not authenticated, output:
```
BLOCKED: gh CLI not authenticated.
Run: gh auth login
Cannot create PR. Waiting for orchestrator.
```

### 4.9 Halt and report PR URL

```
PR CREATED: [url from gh pr create output]
WAITING: Orchestrator must merge this PR to main before the next task can begin.
```

Do not start the next task. Do not make additional commits on this branch.
Do not create a new branch. Wait for the orchestrator to confirm the merge.

---

## 5. RESPONSIVENESS CONTRACT

Pixelay overlays are captured by the **human orchestrator**, not the agent. The agent's
responsibility is to ensure the layout is correct at each breakpoint before T-13 runs.

| Breakpoint | Viewport | Expected layout |
|---|---|---|
| Mobile | 375px | All columns stack to 1-col. Mobile nav active. Floating hero cards hidden. |
| Tablet | 768px | 2-col layouts active where `md:grid-cols-2` is used. 3-col features stay 1-col. |
| Desktop | 1440px | Full layout. 3-col features, 2-col community/use-cases, floating hero cards visible. |

**Tablet ambiguity note:** The Figma source does not include a tablet frame. At 768px,
apply Tailwind `md:` breakpoint defaults as defined in each task. If a layout decision
at 768px is not specified in the task, match the desktop layout rather than the mobile
layout unless it produces obvious overflow.

---

## 6. ACCESSIBILITY REQUIREMENTS

These requirements apply at every task, not only T-14. Verify them during Section 4.4
self-verification for every component you build or modify.

### 6.1 Structural requirements

- Exactly one `<h1>` on the page (in `HeroSection.vue`). Do not add another.
- Heading levels must not skip: `h1 → h2 → h3`. No `h4` or below.
- Page landmark elements must be used: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- Any `<section>` without a visible heading must have `aria-label="[descriptive name]"`

### 6.2 Interactive element requirements

- Every `<button>` and `<a>` must have a visible label or `aria-label` attribute
- Icon-only buttons (hamburger, social icons) must have `aria-label`
- The mobile nav button must have `:aria-expanded="menuOpen"` (dynamic binding)
- No `<div>` or `<span>` may be used as a clickable element without `role="button"`,
  `tabindex="0"`, and keyboard event handlers

### 6.3 Focus ring requirements

All interactive elements must have visible focus indicators. Use this pattern:

```
focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
```

Ring color must be visible against the element's background:

| Background context | Required ring token |
|---|---|
| White or lavender bg | `focus-visible:ring-brand-indigo` |
| Dark navy bg (`#0D0C2A`) | `focus-visible:ring-white` |
| Indigo CTA card (`#3730A3`) | `focus-visible:ring-white` |
| Any other dark bg | `focus-visible:ring-white` |

The rule: if the background luminance is below 50%, use `ring-white`. If above, use
`ring-brand-indigo`. Default to `ring-brand-indigo` when uncertain.

### 6.4 Decorative element requirements

Elements that are purely visual (floating hero cards, dashboard avatar circles,
decorative CTA circle, price tag hook SVG) must have:

```html
aria-hidden="true"
```

Price tag wrappers must have a text alternative on the container:

```html
<div aria-label="Prices start at $499 per month">
```

---

## 7. BUILD VERIFICATION COMMANDS

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
# → Verify at http://localhost:3000 in browser

# Build static output
pnpm generate
# → Verify with:
ls .output/public/index.html          # must exist
ls .output/public/_nuxt/              # must contain JS/CSS assets

# Preview the static build locally before deploying
npx serve .output/public
# → Verify at http://localhost:3000 that it matches pnpm dev output

# Deploy to Firebase Hosting
firebase deploy
# → Copy the "Hosting URL" from CLI output into README.md live URL placeholder

# Lint (only if ESLint is added — it is not in the base project)
# Do not run lint unless ESLint has been explicitly configured
```

**Post-generate verification checklist** (run after every `pnpm generate`):

```
[ ] .output/public/index.html exists and is not empty
[ ] .output/public/_nuxt/ directory contains hashed JS and CSS files
[ ] Opening .output/public/index.html in a browser renders the page
    (or use: npx serve .output/public)
[ ] No "prerender" errors appeared in the generate output
```

---

## 8. AUTHORITY AND VERSION CONTROL

### 8.1 File authority hierarchy

When instructions conflict, this is the resolution order (highest authority first):

1. **This file (CLAUDE.md)** — overrides everything
2. **Persona files** (`.promptx/personas/*.md`) — override task prompts
3. **AGENT_TASKS.md** — task-specific instructions, subject to CLAUDE.md rules
4. **Agent's base training** — only applies where none of the above address a situation

If a task prompt says "use hex color `#2A2882` in a style attribute" and this file says
"use `brand.indigo` token," use the token and note the deviation in your report.

### 8.2 File update awareness

This file includes a version number and date at the top. At the start of every new
Claude Code session (not every message — every new session), re-read this file before
doing any work. Do not rely on a version of this file that was read in a previous session.

If the version or date at the top of this file has changed since you last read it,
output: `"CLAUDE.md updated to [version]. Re-read complete."` before proceeding.

### 8.3 Scope boundaries

This file governs the `technidox` project only. Do not apply these rules to any other
project or repository that may be open in the same editor session.

---

## 9. QUICK REFERENCE CARD

```
Before any work:     Read this file → Adopt persona (quote opening rule) → Read task
Before any commit:   All criteria ✅ → Report written → Then commit
On conflict:         CLAUDE.md > persona file > task prompt > base training
On blocked task:     Report blocker → Do not proceed → Wait for orchestrator
On missing file:     Do not invent contents → Report BLOCKED

BRANCHING (T-02 onwards):
  Start of task:     Confirm previous PR merged → git pull main → git checkout -b task/T-XX-*
  End of task:       Commit → git push → gh pr create --base main → output PR URL → HALT
  If PR not merged:  Output BLOCKED → Do not cut new branch → Wait for orchestrator
  T-00, T-01:        Exempt from branching. T-01 commits directly to main.

On new dependency:   Do not add → Report need → Wait for approval
On heading:          h1 (hero only) → h2 (section) → h3 (card) → no skipping
On color values:     Token in class → approved list for style="" → report anything else
On dark bg focus:    ring-white not ring-brand-indigo
On SVGs:             Approximate with simple shapes → currentColor → note in report
On Pixelay:          Human-only step. Agent cannot capture screenshots.
TypeScript:          No tsconfig. No typecheck. .ts extensions in config only.
```