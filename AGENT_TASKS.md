# AGENT_TASKS.md — TechniDox

**Project:** Frontend Developer Assessment — TechniDox Homepage
**Stack:** Nuxt 3 + Vue 3 + TailwindCSS
**Hosting:** Firebase Hosting (SSG via `nuxt generate`)
**Orchestrator:** Peter Collins

---

## Authority and required reading

This file is subordinate to `CLAUDE.md` (v1.2.0). When any instruction here conflicts
with a rule in `CLAUDE.md`, `CLAUDE.md` wins. The agent must report the conflict before
proceeding — not resolve it silently.

Before executing any task, the agent must follow the full Task Execution Protocol in
**CLAUDE.md Section 4** — branch creation (4.1), pre-flight (4.2), implementation (4.3),
self-verification (4.4), report (4.5), commit (4.6), push (4.7), PR creation (4.8), and
halt (4.9). A task is not complete until every acceptance criterion is ✅ and the PR is
created and its URL reported.

---

## How to use this manifest

Each task is a discrete unit of work. Paste the full task block into a Claude Code session
or use it as a GitHub Copilot Workspace prompt.

**Dependency means PR merged.** A task may not begin until every task it depends on has
its PR merged to `main`. "✅ complete" in the Depends On column means merged, not just
implemented. The orchestrator confirms each merge before the next task starts.

**Sequential execution.** Although several tasks share the same dependency (T-03), the
one-PR-at-a-time constraint enforces sequential execution. The recommended order follows
the task numbering: T-00 → T-01 → T-02 → … → T-16.

The acceptance criteria are the definition of done. The agent self-verifies against every
criterion (CLAUDE.md Section 4.4), writes a report (CLAUDE.md Section 4.5), commits
(CLAUDE.md Section 4.6), pushes the branch (CLAUDE.md Section 4.7), creates a PR against
`main` via `gh pr create` (CLAUDE.md Section 4.8), and halts (CLAUDE.md Section 4.9).
Failing criteria block the commit. Missing PR blocks task completion.

---

## Task Index

> **Depends On** = all listed tasks must have their PRs **merged to main** before this task begins.
> **Branch** = exact branch name to cut from main at the start of this task (T-02 onwards).

| ID | Title | Depends On | Branch | Est. |
|----|-------|------------|--------|------|
| T-00 | Persona bootstrap | — | *(no branch — orchestrator setup)* | 10 min |
| T-01 | Project scaffold & config | T-00 | *(no branch — commits to main)* | 15 min |
| T-02 | Design token system | T-01 | `task/T-02-design-tokens` | 10 min |
| T-03 | Global CSS baseline & shared components | T-02 | `task/T-03-global-css-baseline` | 20 min |
| T-04 | AppNav + AppLogo with mobile toggle | T-03 | `task/T-04-appnav-applogo` | 25 min |
| T-05 | Hero section | T-03 | `task/T-05-hero-section` | 30 min |
| T-06 | AI Features section | T-03 | `task/T-06-features-section` | 25 min |
| T-07 | Community-Driven section | T-03 | `task/T-07-community-section` | 25 min |
| T-08 | ROI Dashboard section | T-03 | `task/T-08-roi-dashboard` | 25 min |
| T-09 | Comparison Table section | T-03 | `task/T-09-comparison-table` | 20 min |
| T-10 | Pricing section | T-03 | `task/T-10-pricing-section` | 15 min |
| T-11 | Use Cases section | T-03, T-06 | `task/T-11-use-cases-section` | 25 min |
| T-12 | CTA Banner + Footer | T-03, T-04 | `task/T-12-cta-footer` | 20 min |
| T-13 | Responsiveness pass | T-04–T-12 | `task/T-13-responsiveness` | 30 min |
| T-14 | Accessibility pass | T-04–T-12 | `task/T-14-accessibility` | 20 min |
| T-15 | Firebase deploy config | T-01 | `task/T-15-firebase-config` | 10 min |
| T-16 | README + pixelay/notes.md | T-15 | `task/T-16-readme-docs` | 15 min |
| T-17a | SectionBase component | T-16 | `task/T-17a-section-base-component` | 15 min |
| T-17b | SectionBase refactor | T-17a | `task/T-17b-section-base-refactor` | 30 min |

---

## T-00 — Persona Bootstrap

**Goal:** Create the `.promptx/personas/` directory and stub persona files so all
subsequent tasks can satisfy CLAUDE.md's mandatory persona adoption step.

**Persona requirement:** This is the bootstrapping task. Persona files do not yet exist.
The orchestrator has explicitly authorised proceeding without a persona for this task only.
Base model behaviour applies. Do not block on a missing persona file — that is precisely
what this task resolves. This exception applies to T-00 only and does not carry forward.

**Git workflow:** T-00 is exempt from the branching and PR workflow. Persona files are
infrastructure set up by the orchestrator before any agent sessions begin. No git
operations are performed in this task.

**Prompt to agent:**
```
Create the .promptx/personas/ directory and the following 5 persona stub files.
Each file must begin with a clearly labelled opening rule so the adoption protocol
in CLAUDE.md Section 1.2 Step 5 can quote it.

--- FILE 1: .promptx/personas/agent-developer.md ---

# Developer Agent

**Opening rule:** "Read the full task block, complete the pre-flight checklist, implement
exactly what the prompt specifies, self-verify every acceptance criterion, write the
structured report, then commit — in that order."

## Role
Execute implementation tasks from AGENT_TASKS.md. Write code, create files, and make
targeted edits to bring each task to a ✅ complete state.

## Workflow
1. Read CLAUDE.md (re-read if session is new or version has changed)
2. Complete pre-flight checklist (CLAUDE.md Section 4.1)
3. Implement the task prompt exactly
4. Self-verify against every acceptance criterion (CLAUDE.md Section 4.3)
5. Write the structured report (CLAUDE.md Section 4.4)
6. Commit with the correct message format (CLAUDE.md Section 3.8)

## Rules
- Follow all Core Principles in CLAUDE.md Section 3 without exception
- Vue 3 <script setup> only — no Options API, no defineComponent as export wrapper
- Tokens over hex — consult approved style="" list in CLAUDE.md Section 3.5
- No new dependencies without orchestrator approval
- Report all SVG approximations and style exceptions in the task report

---

--- FILE 2: .promptx/personas/agent-code-reviewer.md ---

# Code Reviewer Agent

**Opening rule:** "Read the implementation output, verify every acceptance criterion
independently, and report ✅ or ❌ with specific evidence for each — do not approve
a task with a single failing criterion."

## Role
Verify completed task output against acceptance criteria. Produce a review report.
Do not implement fixes — report failures for the Developer Agent to resolve.

## Workflow
1. Read the completed task block in AGENT_TASKS.md
2. Read the files changed in the task
3. Verify each acceptance criterion independently
4. Output a review report using the format in CLAUDE.md Section 4.4

## Rules
- A task passes only when every criterion is ✅
- Flag any CLAUDE.md rule violations observed during review, even if not in criteria
- Do not make code changes — report only

---

--- FILE 3: .promptx/personas/agent-rebaser.md ---

# Rebaser Agent

**Opening rule:** "Before touching git history, read the full log, identify the target
range, confirm the rebase plan with the orchestrator, then execute — never rebase
without an explicit orchestrator go-ahead."

## Role
Clean git history before pushing. Squash, reword, or reorder commits as instructed.

## Workflow
1. Run `git log --oneline` to view current history
2. Identify the range to rebase
3. Confirm the plan with the orchestrator
4. Execute `git rebase -i` with the confirmed plan
5. Verify the resulting log matches expectations

## Rules
- Never rebase commits that have already been pushed to a remote
- Preserve the T-XX commit message format (CLAUDE.md Section 3.8)
- One commit per completed task is the target state

---

--- FILE 4: .promptx/personas/agent-merger.md ---

# Merger Agent

**Opening rule:** "Read both branches in full before touching anything — understand
exactly what each side changed and why the conflict exists before resolving it."

## Role
Resolve merge conflicts or consolidate feature branches into the main branch.

## Workflow
1. Run `git status` and `git diff` to understand the conflict state
2. Read both conflicting versions of every file
3. Resolve conflicts preserving intent from both sides
4. Verify the build passes after resolution
5. Commit the merge with a clear message

## Rules
- Never discard code without understanding what it does
- Run `pnpm dev` after merge to confirm no regressions
- Do not introduce new features during a merge

---

--- FILE 5: .promptx/personas/agent-multiplan-manager.md ---

# Multiplan Manager Agent

**Opening rule:** "Before replanning, read the current AGENT_TASKS.md in full,
identify exactly which tasks are ✅ complete and which are blocked, then propose
a revised plan — do not assume task state from context."

## Role
Resequence, split, or create tasks when the current plan needs to change.

## Workflow
1. Read AGENT_TASKS.md and CLAUDE.md in full
2. Identify completed (✅) and incomplete tasks
3. Identify the blocker or reason for replanning
4. Propose a revised task list or new task blocks
5. Get orchestrator approval before modifying AGENT_TASKS.md

## Rules
- Preserve T-XX numbering for existing tasks; use T-XXa for new sub-tasks
- Do not remove tasks without orchestrator approval
- New tasks must follow the same structure: Goal, Prompt, Acceptance Criteria
```

**Acceptance Criteria:**
- [ ] `.promptx/personas/` directory exists
- [ ] All 5 persona files exist at the correct paths
- [ ] Each file begins with a `**Opening rule:**` line that can be quoted verbatim
- [ ] `pnpm dev` is not affected (no code changes in this task)

**Commit/PR:** Not applicable. T-00 is exempt from the branching workflow.
Orchestrator adds these files to the repo manually before agent sessions begin.

---

---

## T-01 — Project Scaffold & Config

**Goal:** Bootstrap a clean Nuxt 3 project with TailwindCSS, Google Fonts, and the
correct folder structure for this assessment.

**Branch:** None — T-01 commits directly to `main` as the project's initial commit.
The branching workflow defined in CLAUDE.md Section 3.9 begins at T-02.

**Prompt to agent:**
```
Scaffold a Nuxt 3 project called "technidox" with the following setup:

1. Install dependencies: nuxt@^3.12, @nuxtjs/tailwindcss, tailwindcss, autoprefixer, postcss
   Do not add any other packages. If pnpm suggests adding more, decline.

2. Create nuxt.config.ts that:
   - Registers @nuxtjs/tailwindcss as a module
   - Loads ~/assets/css/main.css globally via the css array
   - Sets the page <title> to "TechniDox — Documentation that builds itself"
   - Loads DM Sans from Google Fonts (weights 300,400,500,600,700,800;
     italic variants 400,700,800; optical size range 9..40)
   - Includes a meta description tag
   TypeScript is NOT configured beyond what Nuxt 3 requires for .ts config files.
   Do not add a tsconfig.json. Do not add strict TS compiler options.

3. Create tailwind.config.js with content paths for:
   './components/**/*.{js,vue,ts}',
   './layouts/**/*.vue',
   './pages/**/*.vue',
   './plugins/**/*.{js,ts}',
   './app.vue'

4. Create assets/css/main.css with:
   body { font-family: 'DM Sans', ui-sans-serif, system-ui, sans-serif; }

5. Create app.vue that renders <NuxtPage />

6. Create pages/index.vue as a placeholder:
   <template><div class="min-h-screen">TechniDox</div></template>

7. Create the following empty directories (use .gitkeep files):
   components/sections/
   components/icons/
   pixelay/

8. Create .gitignore that excludes:
   node_modules
   .nuxt
   .output
   dist
   .firebase

After completing the scaffold, initialise git and make the initial commit to main:

9. Initialise git (only if .git does not already exist):
   git init

10. Stage everything and commit directly to main:
    git add .
    git commit -m "T-01: project scaffold & config

- Nuxt 3 + TailwindCSS + Google Fonts baseline
- Directory structure: components/sections/, components/icons/, pixelay/
- .gitignore configured"
    git branch -M main

11. Push main to origin (the orchestrator must have already configured the remote):
    git push -u origin main

    If the push fails because the remote is not set up, output:
      BLOCKED: Remote origin not configured.
      Orchestrator must run: git remote add origin [repo-url]
      Then re-run: git push -u origin main
    Do not continue until main is successfully pushed to origin.
```

**Acceptance Criteria:**
- [ ] `pnpm install` completes with no errors
- [ ] `pnpm dev` starts a server at `localhost:3000` with no console errors
- [ ] Browser shows "TechniDox" text on a blank page
- [ ] `components/sections/` directory exists
- [ ] `components/icons/` directory exists
- [ ] `pixelay/` directory exists
- [ ] `.gitignore` includes `node_modules`, `.nuxt`, `.output`, `dist`, `.firebase`
- [ ] No `tsconfig.json` was created
- [ ] `package.json` devDependencies contains only the 5 listed packages
- [ ] `git log --oneline` shows exactly one commit: `T-01: project scaffold & config`
- [ ] `git push -u origin main` succeeded — `main` exists on the remote

---

---

## T-02 — Design Token System

**Goal:** Extend Tailwind with the complete brand color palette so all subsequent
components reference tokens, never hardcoded hex values in class attributes.

**Branch:** `task/T-02-design-tokens`

**Prompt to agent:**
```
Read tailwind.config.js in full before making any changes.

Extend tailwind.config.js with the following under theme.extend:

fontFamily:
  sans: ['"DM Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif']

colors — all nested under a "brand" key:
  indigo:       '#2A2882'   primary dark — headings, nav text, table header bg
  indigo-mid:   '#3730A3'   CTA banner background
  indigo-light: '#4F46E5'   hover states
  orange:       '#F59E0B'   eyebrow labels, hero accent words, pricing badge bg
  lavender:     '#EAEAF5'   hero bg, footer bg
  card-purple:  '#EDE9FE'   AI generator card tint
  card-orange:  '#FFF8EE'   quality scorer card tint
  card-green:   '#F0FDF4'   human review card tint
  dark-navy:    '#0D0C2A'   ROI dashboard container bg
  dark-card:    '#17163D'   dashboard metric card bg

Rules:
- Do not remove any existing tailwind.config.js content
- Do not add any plugins
- Token names must be kebab-case and nested under the "brand" key
- The final brand object must have exactly 10 tokens — no more, no less
```

**Acceptance Criteria:**
- [ ] `tailwind.config.js` has a `colors.brand` object with exactly 10 tokens
- [ ] Token names match the list above exactly (kebab-case, no `orange-light`)
- [ ] `pnpm dev` starts without errors after the change
- [ ] `class="bg-brand-lavender"` applied to a test div in `index.vue` renders the
  correct lavender background in the browser — then revert the test change
- [ ] No existing `tailwind.config.js` content was removed
- [ ] Branch `task/T-02-design-tokens` pushed to `origin`
- [ ] PR created against `main` via `gh pr create` and URL reported

---

---

## T-03 — Global CSS Baseline & Shared Components

**Goal:** Establish all global CSS utilities, the repeating hero background pattern,
all custom classes referenced in CLAUDE.md Section 2.4, and the shared CheckCircleIcon
component used across multiple sections.

**Branch:** `task/T-03-global-css-baseline`

**Prompt to agent:**
```
Read assets/css/main.css in full before making any changes.

PART A — Add the following to assets/css/main.css in this order:

1. Universal box-sizing reset:
   *, *::before, *::after { box-sizing: border-box; }

2. Smooth scroll:
   html { scroll-behavior: smooth; }

3. .hero-grid-bg
   Lavender (#EAEAF5) background with two overlapping linear-gradients creating
   a grid line pattern. Grid lines use rgba(88, 80, 200, 0.07), spaced 80px apart
   both horizontally and vertically. Use background-size: 80px 80px.

4. .footer-bg
   background-color: #EAEAF5;

5. .price-tag-shape
   clip-path: polygon(
     50% 0%, 60% 5%, 70% 2%, 77% 8%, 87% 7%, 92% 15%,
     100% 18%, 100% 30%, 97% 40%, 100% 50%, 97% 60%,
     100% 70%, 95% 80%, 100% 90%, 92% 95%, 85% 100%,
     75% 97%, 65% 100%, 55% 96%, 50% 100%, 45% 96%,
     35% 100%, 25% 97%, 15% 100%, 8% 95%, 0% 90%,
     5% 80%, 0% 70%, 3% 60%, 0% 50%, 3% 40%,
     0% 30%, 0% 18%, 8% 15%, 13% 7%, 23% 8%, 30% 2%, 40% 5%
   );

6. .roi-card
   background: rgba(255, 255, 255, 0.07);
   border: 1px solid rgba(255, 255, 255, 0.1);
   border-radius: 12px;

7. .progress-bar-gradient
   background: linear-gradient(90deg, #22C55E 0%, #3B82F6 100%);

8. .table-corner-bl
   border-bottom-left-radius: 1rem;

9. .table-corner-br
   border-bottom-right-radius: 1rem;

10. Vue Transition classes for the mobile nav dropdown:
    .mobile-menu-enter-active,
    .mobile-menu-leave-active {
      transition: opacity 0.25s ease, transform 0.25s ease;
    }
    .mobile-menu-enter-from,
    .mobile-menu-leave-to {
      opacity: 0;
      transform: translateY(-8px);
    }

PART B — Create the shared CheckCircleIcon component:

Create components/icons/CheckCircleIcon.vue:

<script setup>
defineProps({
  size: { type: Number, default: 16 }
})
</script>
<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
    style="flex-shrink: 0;"
  >
    <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-width="1.4"/>
    <path
      d="M5 8.5l2 2 4-4.5"
      stroke="currentColor"
      stroke-width="1.4"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

This component uses currentColor for all strokes — its color is controlled by the
parent element's text color class (e.g. class="text-emerald-500").
The size prop allows rendering at 16px (default, for card lists) or 18px (for hero pills).

PART C — Update pages/index.vue:

Replace the placeholder content with the full page layout. Components do not exist yet —
use <!-- TODO: ComponentName --> comments in the correct order:

<template>
  <div class="min-h-screen">
    <AppNav />
    <main>
      <!-- TODO: HeroSection -->
      <!-- TODO: FeaturesSection -->
      <!-- TODO: CommunitySection -->
      <!-- TODO: ROIDashboard -->
      <!-- TODO: ComparisonSection -->
      <!-- TODO: PricingSection -->
      <!-- TODO: UseCasesSection -->
      <!-- TODO: CTASection -->
    </main>
    <AppFooter />
  </div>
</template>

Do not create any of the listed components yet.
```

**Acceptance Criteria:**
- [ ] `assets/css/main.css` contains all 10 additions (hero-grid-bg, footer-bg,
  price-tag-shape, roi-card, progress-bar-gradient, table-corner-bl, table-corner-br,
  mobile-menu-enter-active, mobile-menu-enter-from, mobile-menu-leave-to)
- [ ] `.hero-grid-bg` uses two `linear-gradient` calls with `background-size: 80px 80px`
- [ ] `.roi-card` uses `rgba()` values (not hex or Tailwind classes)
- [ ] `.progress-bar-gradient` uses a linear-gradient from `#22C55E` to `#3B82F6`
- [ ] `components/icons/CheckCircleIcon.vue` exists and uses `<script setup>`
- [ ] `CheckCircleIcon.vue` has a `size` prop with default 16
- [ ] `CheckCircleIcon.vue` uses `currentColor` for all stroke values
- [ ] `pages/index.vue` has the correct component order as TODO comments
- [ ] `pnpm dev` starts without errors
- [ ] Branch `task/T-03-global-css-baseline` pushed to `origin`
- [ ] PR created against `main` via `gh pr create` and URL reported

---

---

## T-04 — AppNav + AppLogo with Mobile Toggle

**Goal:** Build the shared logo component, the navigation bar, and the mobile
hamburger/close toggle. The mobile menu toggle is the primary interactive element
required by the assessment rubric.

**Branch:** `task/T-04-appnav-applogo`

**Design reference — desktop (≥ 768px):**
- Left: logo (document SVG + "TechniDox" text)
- Centre: Home (bold indigo), About Us / Docs / Pricing (gray)
- Right: "Get Started" button (dark indigo bg, white text)

**Design reference — mobile (< 768px):**
- Logo left, hamburger button right
- On click: animated dropdown showing all 4 nav links + CTA stacked
- Hamburger icon swaps to X icon when menu is open

**Prompt to agent:**
```
Read assets/css/main.css and tailwind.config.js in full before starting.

PART A — Create components/AppLogo.vue:

A reusable logo component used in both AppNav and AppFooter.
No <script setup> is required — template only.

<template>
  <a href="/" class="flex items-center gap-2 shrink-0">
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <!-- Document rectangle -->
      <rect x="4" y="3" width="20" height="26" rx="3" fill="white"
            stroke="currentColor" stroke-width="1.5" class="text-brand-indigo"/>
      <!-- Horizontal line placeholders -->
      <line x1="8" y1="10" x2="20" y2="10" stroke="#C4C4D4"
            stroke-width="1.5" stroke-linecap="round"/>
      <line x1="8" y1="14" x2="20" y2="14" stroke="#C4C4D4"
            stroke-width="1.5" stroke-linecap="round"/>
      <line x1="8" y1="18" x2="16" y2="18" stroke="#C4C4D4"
            stroke-width="1.5" stroke-linecap="round"/>
      <!-- Orange code brackets -->
      <text x="7" y="28" font-family="monospace" font-size="8"
            fill="#F59E0B" font-weight="bold">&lt;/&gt;</text>
    </svg>
    <span class="font-bold text-lg text-brand-indigo tracking-tight">TechniDox</span>
  </a>
</template>

Note: the SVG uses the brand-indigo color (#2A2882) for the document outline via
currentColor, and #F59E0B (brand-orange) for the code brackets. The hex values
inside SVG attributes are an approved approximation per CLAUDE.md Section 3.7
(SVG path data is not a class attribute). Note this as an SVG approximation in
your task report.

PART B — Create components/AppNav.vue:

Requirements:
1. <script setup> only. Declare: const menuOpen = ref(false)
2. Root element: <header class="absolute top-0 left-0 right-0 z-50 px-6 py-4">
3. Inner <nav class="max-w-7xl mx-auto flex items-center justify-between">
4. Logo: <AppLogo /> (import from ~/components/AppLogo.vue)
5. Desktop nav links (class="hidden md:flex items-center gap-8"):
   Wrap in <ul> with <li> per link.
   - Home: font-semibold text-brand-indigo
   - About Us, Docs, Pricing: text-gray-500 hover:text-brand-indigo transition-colors
   All links need:
   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
   focus-visible:ring-brand-indigo rounded-sm
6. "Get Started" button (class="hidden md:inline-flex"):
   bg-brand-indigo text-white text-sm font-medium px-5 py-2.5 rounded-lg
   hover:bg-brand-indigo-light transition-colors
   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
   focus-visible:ring-brand-indigo
7. Hamburger <button>:
   class="md:hidden p-2 rounded-md text-brand-indigo hover:bg-white/30 transition-colors
   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
   focus-visible:ring-brand-indigo"
   aria-label="Toggle navigation menu"
   :aria-expanded="menuOpen"
   @click="menuOpen = !menuOpen"
   Show inline hamburger SVG (3 horizontal lines) when menuOpen is false.
   Show inline X SVG (2 diagonal lines) when menuOpen is true.
   Both SVGs: width="22" height="22", currentColor strokes, stroke-width="1.8",
   stroke-linecap="round". These are toggle-state SVGs — keep them inline in the
   template, do not extract to components/icons/.
8. Mobile menu:
   v-if="menuOpen", wrapped in <Transition name="mobile-menu">
   Outer div: class="md:hidden mt-2 bg-white/95 backdrop-blur-sm rounded-2xl
   shadow-xl border border-white/60 overflow-hidden"
   Inner <ul class="flex flex-col py-2">:
   - Each nav link as <li><a> with @click="menuOpen = false"
     px-6 py-3 text-sm, Home: font-semibold text-brand-indigo,
     others: text-gray-600, all: hover:bg-brand-lavender transition-colors
     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-indigo
   - Get Started <a>: px-6 py-3, inner element with bg-brand-indigo text-white
     rounded-lg text-center
     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
     focus-visible:ring-brand-indigo
9. The .mobile-menu-* transition classes are already defined in assets/css/main.css
   from T-03. Do not redefine them here.

Semantic requirements:
- <header> must contain a <nav>
- Nav links must be in <ul><li> wrappers on both desktop and mobile
- Hamburger button must have aria-label and :aria-expanded binding
```

**Acceptance Criteria:**
- [ ] `components/AppLogo.vue` exists with no `<script>` block
- [ ] `components/AppNav.vue` uses `<script setup>` with a `menuOpen` ref
- [ ] At ≥ 768px: logo, 4 nav links, and "Get Started" button are all visible
- [ ] At < 768px: only logo and hamburger are visible
- [ ] Clicking hamburger opens the mobile menu
- [ ] Mobile menu contains all 4 links + "Get Started"
- [ ] Icon toggles from hamburger to X when menu is open
- [ ] Clicking any link in mobile menu closes it (menuOpen becomes false)
- [ ] Menu open/close animates with the `.mobile-menu-*` transition
- [ ] `aria-expanded` is `"true"` when open, `"false"` when closed
- [ ] Tab key reaches the hamburger button and shows a visible focus ring
- [ ] Tab key reaches the "Get Started" button and shows a visible focus ring
- [ ] All nav links show a focus ring on keyboard focus
- [ ] `assets/css/main.css` was not modified in this task
- [ ] Branch `task/T-04-appnav-applogo` pushed to `origin`
- [ ] PR created against `main` via `gh pr create` and URL reported

---

---

## T-05 — Hero Section

**Goal:** Recreate the full-viewport hero with lavender grid background, mixed-colour
headline, two CTAs, three feature pills, and floating document card decorations.

**Branch:** `task/T-05-hero-section`

**Design reference:**
- Full-section height (min-h-screen), relative, overflow-hidden
- Background: `.hero-grid-bg` class (defined in T-03)
- Floating cards at left/right edges, slightly rotated, lg+ only, aria-hidden
- Headline (`<h1>`): mixed per-word colours with italic "Documentation"
  - "Documentation" → text-brand-indigo, italic (`<em>` tag)
  - "that" / "itself," / "itself, and proves its" → text-gray-500
  - "builds" / "improves" / "value" → text-brand-orange
- Subheading: text-gray-500, max-w-2xl, centered
- CTAs: primary (brand-indigo bg) + secondary (outlined, gray)
- Feature pills: 3 items using `<CheckCircleIcon :size="18" />`

**Prompt to agent:**
```
Read assets/css/main.css and tailwind.config.js in full before starting.
Import CheckCircleIcon: import CheckCircleIcon from '~/components/icons/CheckCircleIcon.vue'

Create components/sections/HeroSection.vue:

1. Root: <section class="relative overflow-hidden min-h-screen flex flex-col"
         aria-label="Hero">
2. Background: <div class="absolute inset-0 hero-grid-bg" aria-hidden="true"></div>
3. Left floating card (aria-hidden="true", pointer-events-none, hidden below lg):
   - class="absolute left-0 top-1/4 -translate-x-8 hidden lg:block
     pointer-events-none select-none"
   - White rounded-2xl card, shadow-lg, p-4, w-44, rotate-[-4deg]
   - Contents: gray circle (w-10 h-10 rounded-full bg-gray-200), 3 gray line divs,
     a small "Send" div in bg-brand-lavender rounded text-center text-xs
4. Right floating card (aria-hidden="true", pointer-events-none, hidden below lg):
   - Mirror of left, translate-x-8, rotate-[4deg]
   - Contents: circle outline top-right, line divs, 2x2 grid of gray boxes
5. Main content:
   class="relative z-10 flex-1 flex flex-col items-center justify-center
   text-center px-6 pt-32 pb-24"
6. <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.15] max-w-4xl">
   Use <em class="not-italic italic text-brand-indigo"> for "Documentation"
   Use <span class="text-gray-500"> / <span class="text-brand-orange"> for each word
7. Subheading <p>: mt-6 text-gray-500 text-base sm:text-lg max-w-2xl leading-relaxed
8. CTA row: mt-8 flex flex-col sm:flex-row gap-4 justify-center
   Primary <a>:
     bg-brand-indigo text-white font-semibold px-8 py-3.5 rounded-xl
     hover:bg-brand-indigo-light transition-colors inline-flex items-center gap-2
     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
     focus-visible:ring-brand-indigo
     Text: "Book a Demo" + inline right-arrow SVG (16x16, currentColor)
   Secondary <a>:
     border border-gray-400 text-gray-600 font-semibold px-8 py-3.5 rounded-xl
     hover:border-brand-indigo hover:text-brand-indigo transition-colors
     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
     focus-visible:ring-brand-indigo
     Text: "Join Enterprise Waitlist"
9. Feature pills row: mt-8 flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6
   items-center justify-center
   Each pill: <span class="flex items-center gap-2 text-sm text-emerald-600">
     <CheckCircleIcon :size="18" class="text-emerald-500" />
     [pill text]
   Pill texts: "AI-generated docs in minutes", "Confidence scoring built in",
               "Enterprise-grade compliance"
```

**Acceptance Criteria:**
- [ ] Section fills full viewport height on desktop (min-h-screen)
- [ ] Hero grid pattern is visible behind content
- [ ] Both floating cards are visible at 1440px, hidden at 768px and below
- [ ] Both floating cards have `aria-hidden="true"`
- [ ] `<h1>` is present (exactly one on the page)
- [ ] "Documentation" is italic and text-brand-indigo
- [ ] "builds", "improves", "value" are text-brand-orange
- [ ] "Book a Demo" button has a right-facing arrow icon
- [ ] CTAs stack vertically on mobile (< 640px)
- [ ] Both CTA buttons show a visible focus ring when focused via keyboard
- [ ] All 3 feature pills render with `<CheckCircleIcon>` (not inline SVG)
- [ ] No inline SVG check icons in the pill row — all use the shared component
- [ ] Branch `task/T-05-hero-section` pushed to `origin`
- [ ] PR created against `main` via `gh pr create` and URL reported

---

---

## T-06 — AI Features Section

**Goal:** Recreate the "AI-Native Documentation Engine" section with a "Trusted by"
line, section header, and 3 tinted feature cards. Create 3 icon components.

**Branch:** `task/T-06-features-section`

**Design reference:**
- White section background
- "Trusted by developer teams, open source communities, and enterprise orgs" — centered
- Section header: orange eyebrow, bold indigo h2, gray subtext
- 3-col desktop / 1-col mobile card grid:
  - Card 1 (bg-brand-card-purple): indigo icon box, "AI Documentation Generator"
  - Card 2 (bg-brand-card-orange): orange icon box, "Documentation Quality Scorer"
  - Card 3 (bg-brand-card-green): emerald icon box, "Human-in-the-Loop Review"
- Feature lists: circle-check icons (amber for cards 1+2, emerald for card 3)

**Prompt to agent:**
```
Read assets/css/main.css and tailwind.config.js in full before starting.

PART A — Create 3 icon components in components/icons/:

All icons: use <script setup>-free single-template .vue files.
All icons: use currentColor for stroke and fill so color is controlled by parent.
All icons use viewBox="0 0 24 24", width="24" height="24", fill="none",
aria-hidden="true".
Note all 3 as SVG approximations in your task report.

1. components/icons/SparkleIcon.vue
   Approximate a sparkle/star burst — a large 4-point star path + two smaller stars

2. components/icons/TargetIcon.vue
   Approximate a target/bullseye — 3 concentric circles (outer, mid, dot)
   This icon will be reused in T-11. Make it generic.

3. components/icons/PersonIcon.vue
   Approximate a person/user — circle head + curved shoulder path

PART B — Create components/sections/FeaturesSection.vue:

Imports:
import CheckCircleIcon from '~/components/icons/CheckCircleIcon.vue'
import SparkleIcon from '~/components/icons/SparkleIcon.vue'
import TargetIcon from '~/components/icons/TargetIcon.vue'
import PersonIcon from '~/components/icons/PersonIcon.vue'

1. <section class="bg-white py-20 px-6" aria-labelledby="features-heading">
2. Inner: max-w-7xl mx-auto
3. Trusted-by <p>: text-center text-gray-500 font-medium mb-16
4. Section header (text-center mb-12):
   - <p> eyebrow: text-brand-orange font-semibold text-xs tracking-widest uppercase
   - <h2 id="features-heading">: text-3xl sm:text-4xl font-bold text-brand-indigo
   - <p> subtext: text-gray-500 max-w-xl mx-auto text-base leading-relaxed
5. Card grid: grid grid-cols-1 md:grid-cols-3 gap-6
6. Use v-for over a cards array defined in <script setup>.
   Each card object:
   {
     bg: string,          // Tailwind bg class e.g. 'bg-brand-card-purple'
     iconBg: string,      // Tailwind bg class for icon box
     icon: Component,     // imported icon component
     title: string,
     description: string,
     features: string[],
     checkClass: string   // text color for check icons e.g. 'text-amber-500'
   }

   Card data:
   {
     bg: 'bg-brand-card-purple', iconBg: 'bg-brand-indigo', icon: SparkleIcon,
     title: 'AI Documentation Generator',
     description: 'Automatically converts codebases into comprehensive documentation
       with parameter extraction, usage examples, and multi-format export. Reduce
       documentation time from hours to minutes.',
     features: ['Intelligent code analysis', 'Multi-language support',
                'Export to any format'],
     checkClass: 'text-amber-500'
   },
   {
     bg: 'bg-brand-card-orange', iconBg: 'bg-brand-orange', icon: TargetIcon,
     title: 'Documentation Quality Scorer',
     description: 'Advanced scoring system analyzing readability, inclusivity,
       structure, and technical accuracy with actionable improvement recommendations
       and real-time quality assessment.',
     features: ['Multi-dimensional scoring', 'Confidence indicators',
                'Actionable recommendations'],
     checkClass: 'text-amber-500'
   },
   {
     bg: 'bg-brand-card-green', iconBg: 'bg-emerald-500', icon: PersonIcon,
     title: 'Human-in-the-Loop Review',
     description: 'Sophisticated workflow where low-confidence content automatically
       routes to expert reviewers. Build trust with AI-human collaboration and
       community validation.',
     features: ['Smart routing system', 'Expert reviewer network',
                'Quality assurance workflow'],
     checkClass: 'text-emerald-500'
   }

7. Card template structure:
   <div :class="[card.bg, 'rounded-2xl p-6 flex flex-col']">
     Icon box: <div :class="[card.iconBg, 'w-12 h-12 rounded-xl flex items-center
               justify-center mb-5 shrink-0']">
       <component :is="card.icon" class="text-white" />
     </div>
     <h3 class="text-lg font-bold text-gray-800 mb-3">{{ card.title }}</h3>
     <p class="text-gray-500 text-sm leading-relaxed mb-5">{{ card.description }}</p>
     <ul class="space-y-2 mt-auto">
       <li v-for="feat in card.features"
           class="flex items-center gap-2 text-sm text-gray-500">
         <CheckCircleIcon :class="card.checkClass" />
         {{ feat }}
       </li>
     </ul>
   </div>
```

**Acceptance Criteria:**
- [ ] `SparkleIcon.vue`, `TargetIcon.vue`, `PersonIcon.vue` exist in `components/icons/`
- [ ] None of the 3 icon files contain a `<script>` block
- [ ] All 3 icon SVGs use `currentColor` for stroke or fill
- [ ] `FeaturesSection.vue` uses `<script setup>`
- [ ] v-for is used over a `cards` array (no repeated card markup)
- [ ] `<component :is="card.icon">` is used in the template
- [ ] `<CheckCircleIcon>` is imported and used (not an inline SVG)
- [ ] `defineComponent` does not appear anywhere in this file
- [ ] 3 cards render side-by-side on desktop, stack on mobile
- [ ] Card background tints are correct: purple / orange / green
- [ ] Icon box backgrounds are correct: indigo / brand-orange / emerald-500
- [ ] Feature list check icons are amber on cards 1+2, emerald on card 3
- [ ] Feature lists are bottom-aligned (mt-auto working)
- [ ] No `<style>` block in FeaturesSection.vue
- [ ] Branch `task/T-06-features-section` pushed to `origin`
- [ ] PR created against `main` via `gh pr create` and URL reported

---

---

## T-07 — Community-Driven Section

**Goal:** Recreate the two-column layout with a left feature list and a right
workflow steps card. Create 4 section-specific icon components.

**Branch:** `task/T-07-community-section`

**Design reference:**
- Left: 4 feature rows, each with a small coloured icon box + title + description
- Right: white bordered card with 4 workflow steps
- Steps 1 and 3: numbered circle + title + subtitle + green check on right
- Step 2: orange-bordered circle + "Review" orange badge on right
- Step 4: filled emerald circle + title + subtitle + star outline on right

**Prompt to agent:**
```
Read assets/css/main.css and tailwind.config.js in full before starting.

PART A — Create 4 icon components in components/icons/:

All: template-only .vue files (no <script>), currentColor, viewBox="0 0 20 20",
width="20" height="20", fill="none", aria-hidden="true". Note all 4 in report.

1. components/icons/BadgeIcon.vue — approximate a badge/ribbon shape
2. components/icons/LightningIcon.vue — approximate a lightning bolt
3. components/icons/PeopleIcon.vue — approximate two overlapping person silhouettes
4. components/icons/GitBranchIcon.vue — approximate a git branch / network node

PART B — Create components/sections/CommunitySection.vue:

Imports:
import CheckCircleIcon from '~/components/icons/CheckCircleIcon.vue'
import BadgeIcon from '~/components/icons/BadgeIcon.vue'
import LightningIcon from '~/components/icons/LightningIcon.vue'
import PeopleIcon from '~/components/icons/PeopleIcon.vue'
import GitBranchIcon from '~/components/icons/GitBranchIcon.vue'

1. <section class="bg-white py-20 px-6" aria-labelledby="community-heading">
2. Section header (text-center mb-14):
   eyebrow, <h2 id="community-heading">, subtext — same pattern as T-06
   h2 text: "Community-Driven Improvement At Scale"
3. Two-col grid: grid grid-cols-1 lg:grid-cols-2 gap-12 items-start
4. Left column — v-for over a features array:
   {
     title, description, iconBg: string, iconColor: string, icon: Component
   }
   Feature data:
   { title: 'Gamified Contributions',
     description: 'Streak tracking, impact badges, and achievement systems...',
     iconBg: 'bg-gray-100', iconColor: 'text-gray-500', icon: BadgeIcon },
   { title: 'Micro-Contribution Architecture',
     description: 'Complex tasks broken into 5–10 minute contributions...',
     iconBg: 'bg-amber-50', iconColor: 'text-amber-500', icon: LightningIcon },
   { title: 'Mentorship Matching',
     description: 'AI-powered pairing of experienced contributors with newcomers...',
     iconBg: 'bg-green-50', iconColor: 'text-emerald-500', icon: PeopleIcon },
   { title: 'Peer Validation Network',
     description: 'Accept, edit, and reject workflows that improve AI models...',
     iconBg: 'bg-purple-50', iconColor: 'text-purple-600', icon: GitBranchIcon }

   Row template (each feature):
   <div class="flex gap-4">
     <div :class="[feature.iconBg, 'w-10 h-10 rounded-xl flex items-center
          justify-center shrink-0 mt-1']">
       <component :is="feature.icon" :class="feature.iconColor" />
     </div>
     <div>
       <h3 class="font-bold text-gray-800 mb-1.5">{{ feature.title }}</h3>
       <p class="text-gray-500 text-sm leading-relaxed">{{ feature.description }}</p>
     </div>
   </div>

5. Right column — workflow steps card:
   bg-white rounded-2xl border border-gray-200 shadow-sm p-6
   4 step rows, each: flex items-center gap-4 bg-gray-50 rounded-xl px-4 py-4 mb-3

   Step 1 (index 0):
   - Circle: w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center
     "1" in text-xs font-bold text-gray-600
   - Title/subtitle block (flex-1)
   - Right: <CheckCircleIcon :size="18" class="text-emerald-500" />

   Step 2 (index 1):
   - Circle: w-8 h-8 rounded-full border-2 border-brand-orange flex items-center
     justify-center, "2" in text-xs font-bold text-brand-orange
   - Title/subtitle block
   - Right: <span class="text-xs font-semibold text-brand-orange">Review</span>

   Step 3 (index 2): same as Step 1, number "3"

   Step 4 (index 3):
   - Circle: w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center
     Contains inline checkmark SVG (12x12, white stroke, no number)
   - Title/subtitle block
   - Right: inline star-outline SVG (18x18, stroke text-gray-400, currentColor)
     These two SVGs are structural to the workflow card and appear nowhere else —
     keep them inline. Note them as approximations in your report.

Steps can be hardcoded (no v-for). Do not use v-for for the workflow steps.
```

**Acceptance Criteria:**
- [ ] All 4 icon files exist in `components/icons/` with no `<script>` block
- [ ] All 4 icons use `currentColor`
- [ ] `CommunitySection.vue` uses `<script setup>`
- [ ] Left feature column uses v-for over a `features` array
- [ ] `<component :is="feature.icon">` is used in the template
- [ ] `defineComponent` does not appear anywhere in this file
- [ ] Two columns side-by-side on lg+, stacked on mobile
- [ ] Feature list is in DOM-order first (renders above the steps card on mobile)
- [ ] Each feature row has the correct background and icon color
- [ ] All 4 workflow steps are present in the right card
- [ ] Step 2 shows orange "Review" badge (not a check icon)
- [ ] Step 4 circle is filled emerald (not numbered)
- [ ] Step 4 right element is a star (not a check)
- [ ] No `<style>` block in CommunitySection.vue
- [ ] Branch `task/T-07-community-section` pushed to `origin`
- [ ] PR created against `main` via `gh pr create` and URL reported

---

---

## T-08 — ROI Dashboard Section

**Goal:** Recreate the dark navy dashboard mockup with metric cards, a gradient progress
bar, and an avatar stack.

**Branch:** `task/T-08-roi-dashboard`

**Design reference:**
- White section bg, centered section header
- Dark container (bg #0D0C2A), `style=""` approved in CLAUDE.md Section 3.5
- "Executive ROI Dashboard" heading + "Live Data" emerald badge (top-right)
- 4 metric cards (2-col mobile → 4-col desktop): icons + label + value + trend
- 3 bottom cards: Documentation Health (progress bar), Support Tickets (ISO badge),
  Active Contributors (avatar stack)

**Prompt to agent:**
```
Read assets/css/main.css and tailwind.config.js in full before starting.

Create components/sections/ROIDashboard.vue:

1. <section class="bg-white py-20 px-6" aria-labelledby="roi-heading">
2. Section header (text-center mb-12):
   eyebrow "ROI & ANALYTICS", <h2 id="roi-heading">, subtext
3. Dashboard container:
   class="rounded-2xl p-6 sm:p-8"
   style="background: #0D0C2A"   ← approved in CLAUDE.md Section 3.5

4. Dashboard header: flex items-start justify-between mb-6
   Left: <h3 class="text-white font-bold text-lg">Executive ROI Dashboard</h3>
         <p class="text-white/50 text-sm mt-0.5">Real-time documentation impact metrics</p>
   Right: <span class="bg-emerald-500 text-white text-xs font-bold px-3 py-1.5
          rounded-lg shrink-0">Live Data</span>

5. Top metric grid: grid grid-cols-2 lg:grid-cols-4 gap-3 mb-3
   Each card: use class="roi-card p-4"   ← class defined in main.css from T-03
   Card structure:
     - flex items-center gap-2 mb-2: 16x16 inline SVG icon (opacity-60) + label text-white/60 text-xs
     - Metric value: text-white text-2xl font-bold
     - Trend: text-emerald-400 text-xs mt-1 flex items-center gap-1
   Dashboard icons are decorative data-viz elements used only in this component.
   Keep them as inline SVGs with aria-hidden="true". Approximate each icon with
   simple strokes — note all 4 as approximations in your report.
   Icon stroke colors: clock=#60A5FA, trending-up=#F59E0B, bar-chart=#34D399,
   circle-arrow=#A78BFA. These are SVG stroke attribute values, not class attributes,
   and are exempt from the token rule per CLAUDE.md Section 3.5.
   Metric data:
     Time Saved: 847h, ↑ 23% this month
     Productivity Gain: +34%, ↑ 12% vs baseline
     Support Tickets: -42%, ↓ 156 tickets/month
     Onboarding Speed: 3.2d, ↓ 64% faster

6. Bottom grid: grid grid-cols-1 sm:grid-cols-3 gap-3
   Each card: use class="roi-card p-4"

   Documentation Health card:
   - Label + line-chart icon (inline, aria-hidden)
   - <p>: <span class="text-white text-2xl font-bold">94</span>
          <span class="text-white/40 text-base font-normal">/100</span>
   - Progress bar: <div class="h-2 rounded-full bg-white/10 mt-3">
       <div class="h-full rounded-full progress-bar-gradient" style="width: 94%">
         ← use class="progress-bar-gradient" from main.css. style="width:94%" is a
           dynamic value that cannot be a Tailwind class. Approved per Section 3.5.
       </div>
     </div>

   Support/Compliance card:
   - Label + bar-chart icon
   - "98%" text-2xl font-bold text-white + adjacent "ISO/ SOC2" text-white/40 text-xs
   - "Audit ready" with inline 14x14 circle-check SVG (text-emerald-400)

   Active Contributors card:
   - Label + people icon
   - "143" text-2xl font-bold text-white
   - Avatar stack: <div class="flex items-center" aria-hidden="true">
       v-for over avatarColors array — each: w-7 h-7 rounded-full border-2
       border-white/15 inline-block, with style=":style='{background: color}'"
       First avatar: no negative margin. Subsequent: style="margin-left: -6px"
       "+8" div: same size, style="background: #4F46E5; margin-left: -6px"
       text-white text-xs font-bold flex items-center justify-center
     </div>
   Avatar stack colors: ['#22C55E', '#3B82F6', '#8B5CF6', '#F59E0B', '#EC4899']
   These are inline styles on decorative elements (aria-hidden). The avatar colors
   cannot be expressed as Tailwind classes and are approved per CLAUDE.md Section 3.5.
   Note them in your report.
   Define: const avatarColors = ['#22C55E', '#3B82F6', '#8B5CF6', '#F59E0B', '#EC4899']
```

**Acceptance Criteria:**
- [ ] Dashboard container uses `class="rounded-2xl..."` + `style="background: #0D0C2A"`
- [ ] "Live Data" badge is emerald, positioned top-right
- [ ] 4 metric cards in 2-col mobile / 4-col desktop grid
- [ ] Each metric card uses class `roi-card` (not an inline semi-transparent style)
- [ ] Each metric card shows label, value, and trend
- [ ] Bottom 3 cards all use class `roi-card`
- [ ] Progress bar uses class `progress-bar-gradient` (not an inline gradient)
- [ ] Progress bar inner div has `style="width: 94%"` (width only, not the gradient)
- [ ] "98% ISO/SOC2" renders with the two-line stacked label
- [ ] Avatar stack has `aria-hidden="true"`
- [ ] Avatar stack shows 5 coloured circles + "+8" pill, overlapping
- [ ] No `<style>` block in ROIDashboard.vue
- [ ] Branch `task/T-08-roi-dashboard` pushed to `origin`
- [ ] PR created against `main` via `gh pr create` and URL reported

---

---

## T-09 — Comparison Table Section

**Goal:** Recreate the capability comparison table with an indigo header row, 10 data
rows, and rounded table corners — using Tailwind tokens and CSS utility classes only.

**Branch:** `task/T-09-comparison-table`

**Design reference:**
- White section bg, centered header
- Table header: bg-brand-indigo (use Tailwind class — not inline style)
- 10 rows: ✓ for TechniDox column always; ✓ or — for Traditional column
- Table corners rounded using `.table-corner-bl` / `.table-corner-br` from main.css

**Prompt to agent:**
```
Read assets/css/main.css and tailwind.config.js in full before starting.
The classes .table-corner-bl and .table-corner-br are already defined in main.css
from T-03. Do not redefine them.

Create components/sections/ComparisonSection.vue:

1. <section class="bg-white py-20 px-6" aria-labelledby="comparison-heading">
2. Section header (text-center mb-12):
   eyebrow "WHY TECHNIDOX",
   <h2 id="comparison-heading">Not Just Another Documentation Tool</h2>
   gray subtext
3. Table wrapper: <div class="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm
   max-w-5xl mx-auto">
4. <table class="w-full min-w-[560px]">
5. <thead>:
   <tr class="bg-brand-indigo">   ← Tailwind class only, no inline style=""
   - "Capability" <th>: text-left px-6 py-4 text-white font-semibold text-sm
     rounded-tl-2xl (Tailwind class for top-left radius)
   - "TechniDox" <th>: text-center px-6 py-4 text-white font-semibold text-sm
   - "Traditional Documentation" <th>: same + rounded-tr-2xl
6. <tbody>: v-for="(row, index) in rows" :key="row.capability"
   <tr class="border-t border-gray-100">
   - Capability <td class="px-6 py-4 text-gray-600 text-sm">
     :class="{ 'table-corner-bl': index === rows.length - 1 }"
   - TechniDox <td class="px-6 py-4 text-center text-gray-700 font-bold text-base">✓
   - Traditional <td class="px-6 py-4 text-center font-bold text-base">
     :class="{ 'table-corner-br': index === rows.length - 1 }"
     <span v-if="row.traditional" class="text-gray-700">✓</span>
     <span v-else class="text-gray-400">—</span>

Rows data (const in <script setup>):
[
  { capability: 'AI-native architecture', traditional: false },
  { capability: 'Confidence scoring per doc', traditional: false },
  { capability: 'Multi-dimensional quality assessment', traditional: false },
  { capability: 'Human-in-the-loop review workflows', traditional: false },
  { capability: 'Gamified community contributions', traditional: false },
  { capability: 'Real-time ROI dashboard', traditional: false },
  { capability: 'ISO / SOC2 compliance reporting', traditional: false },
  { capability: 'CI/CD quality gate integration', traditional: false },
  { capability: 'Basic markdown editing', traditional: true },
  { capability: 'Team collaboration', traditional: true }
]
All rows have technidox: true implicitly — TechniDox <td> always renders ✓.
Do not include a technidox field in the data; it is always true.
```

**Acceptance Criteria:**
- [ ] Table header row uses `class="bg-brand-indigo"` — no `style=""` attribute
- [ ] All 10 rows render with correct capability text
- [ ] TechniDox column shows ✓ for all 10 rows
- [ ] Traditional column shows — for rows 1–8 and ✓ for rows 9–10
- [ ] Last row first `<td>` has class `table-corner-bl`
- [ ] Last row last `<td>` has class `table-corner-br`
- [ ] Table scrolls horizontally on viewports narrower than 560px
- [ ] Table outer container has visible border-radius on all 4 corners
- [ ] No `<style>` block in ComparisonSection.vue
- [ ] No inline `style=""` attribute appears anywhere in this file
- [ ] Branch `task/T-09-comparison-table` pushed to `origin`
- [ ] PR created against `main` via `gh pr create` and URL reported

---

---

## T-10 — Pricing Section

**Goal:** Recreate the pricing teaser with a scalloped badge and CTA button.

**Branch:** `task/T-10-pricing-section`

**Design reference:**
- White section bg
- Centred h2 in brand-indigo
- Scalloped orange badge with "Prices starts at $499/month" text + tag hook SVG above
- CTA button in brand-indigo

**Prompt to agent:**
```
Read assets/css/main.css and tailwind.config.js in full before starting.
The class .price-tag-shape is already defined in main.css from T-03. Do not redefine it.

Create components/sections/PricingSection.vue:

1. <section class="bg-white py-20 px-6" aria-label="Pricing">
2. <div class="max-w-2xl mx-auto text-center">
3. <h2 class="text-3xl sm:text-4xl font-bold text-brand-indigo mb-12">
   Plans Built For Every Stage Of Growth
4. Price tag illustration (mb-10):
   <div class="flex flex-col items-center"
        aria-label="Prices start at $499 per month">
   a. Tag hook SVG (aria-hidden="true"): 120x40 viewBox. Draw a short horizontal
      line tapering into a small oval ring. Stroke: #9CA3AF. Approximate the
      hanging tag hook from the design. Note as SVG approximation in report.
   b. Badge:
      <div class="price-tag-shape w-48 h-48 bg-brand-orange flex items-center
           justify-center">
        ← uses class="price-tag-shape" from main.css and bg-brand-orange token
        Contents (text-center text-gray-800):
          <p class="text-xs font-semibold mb-1">Prices starts at</p>
          <div class="flex items-start justify-center leading-none">
            <span class="font-bold text-lg mt-1">$</span>
            <span class="font-black text-5xl leading-none">499</span>
          </div>
          <p class="text-sm font-medium mt-1">/month</p>
5. CTA button:
   <a href="#" class="inline-flex items-center justify-center bg-brand-indigo
      text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-brand-indigo-light
      transition-colors focus-visible:outline-none focus-visible:ring-2
      focus-visible:ring-offset-2 focus-visible:ring-brand-indigo">
   View Subscription Details
```

**Acceptance Criteria:**
- [ ] Badge uses `class="price-tag-shape bg-brand-orange"` — no hex value in class or style
- [ ] `.price-tag-shape` is NOT redefined in this component or in main.css
- [ ] Scalloped orange badge is visible and centred
- [ ] Badge contains "Prices starts at", "$499", "/month" in correct hierarchy
- [ ] "$" renders smaller than "499"
- [ ] Tag hook SVG is visible above the badge
- [ ] "View Subscription Details" button shows a visible focus ring on keyboard focus
- [ ] No `<style>` block in PricingSection.vue
- [ ] No inline `style=""` in this file
- [ ] Branch `task/T-10-pricing-section` pushed to `origin`
- [ ] PR created against `main` via `gh pr create` and URL reported

---

---

## T-11 — Use Cases Section

**Goal:** Recreate the 2×2 use-case card grid, including the dark navy Enterprise card.
Create 3 new icon components; reuse TargetIcon from T-06.

**Branch:** `task/T-11-use-cases-section`

**Design reference:**
- White section bg, centred header
- 2×2 grid (stacks to 1-col on mobile)
- Cards 1–3: white bg with gray border
- Card 4: dark navy bg (#2A2882) — approved in CLAUDE.md Section 3.5
- v-for over a cards array with an isDark flag for conditional styling

**Prompt to agent:**
```
Read assets/css/main.css and tailwind.config.js in full before starting.
Before creating any icon file, check whether it already exists in components/icons/.

PART A — Create 3 new icon components. TargetIcon already exists from T-06 — import it.

All: template-only .vue (no <script>), currentColor, viewBox="0 0 20 20",
width="20" height="20", fill="none", aria-hidden="true". Note all 3 in report.

1. components/icons/GitNetworkIcon.vue — approximate a git network / 3-node graph
2. components/icons/ArrowRightIcon.vue — simple right-facing arrow
3. components/icons/LockIcon.vue — approximate a padlock shape

PART B — Create components/sections/UseCasesSection.vue:

Imports:
import CheckCircleIcon from '~/components/icons/CheckCircleIcon.vue'
import GitNetworkIcon from '~/components/icons/GitNetworkIcon.vue'
import TargetIcon from '~/components/icons/TargetIcon.vue'   // created in T-06
import ArrowRightIcon from '~/components/icons/ArrowRightIcon.vue'
import LockIcon from '~/components/icons/LockIcon.vue'

1. <section class="bg-white py-20 px-6" aria-labelledby="usecases-heading">
2. Section header (text-center mb-12):
   eyebrow "USE CASES"
   <h2 id="usecases-heading">Built For Every Team That Ships Code.</h2>
   gray subtext
3. Card grid: grid grid-cols-1 md:grid-cols-2 gap-5 max-w-7xl mx-auto
4. v-for="card in cards" — cards array defined in <script setup>:

   Each card object:
   {
     eyebrow: string,
     title: string,
     description: string,
     features: string[],
     iconBg: string,       // Tailwind class
     iconColor: string,    // text color class for icon
     icon: Component,
     isDark: boolean       // true for Enterprise card only
   }

   Cards data:
   {
     eyebrow: 'OPEN SOURCE TEAMS',
     title: 'Ship docs as fast as you ship code',
     description: 'Democratize contributions with micro-tasks, voice input, and
       mentorship matching. Keep your community engaged with gamification that makes
       documentation feel like progress, not chores.',
     features: ['78% less burden on maintainers',
                'Non-technical contributors via micro-tasks',
                'Gamified streaks keep contributors returning'],
     iconBg: 'bg-gray-100', iconColor: 'text-gray-500', icon: GitNetworkIcon,
     isDark: false
   },
   {
     eyebrow: 'ENGINEERING ENABLEMENT',
     title: 'Onboard developers 2.3x faster',
     description: 'Connect your CI/CD pipeline to TechniDox and auto-generate docs
       on every merge. Quality gates catch regressions before they reach production.',
     features: ['CI/CD quality gates prevent doc regressions',
                'Auto-generated docs on every merge',
                '34% fewer "how do I..." interruptions'],
     iconBg: 'bg-amber-50', iconColor: 'text-amber-500', icon: TargetIcon,
     isDark: false
   },
   {
     eyebrow: 'PLATFORM TEAMS',
     title: 'Documentation that scales with your APIs',
     description: 'Generate API reference docs, SDK guides, and integration playbooks
       automatically from your codebase. Keep them in sync with confidence scoring
       that flags drift before your customers notice.',
     features: ['Auto-synced API reference on every deploy',
                'Multi-format export: OpenAPI, MDX, HTML',
                'Confidence alerts flag doc drift in real time'],
     iconBg: 'bg-green-50', iconColor: 'text-emerald-500', icon: ArrowRightIcon,
     isDark: false
   },
   {
     eyebrow: 'ENTERPRISE DOCUMENTATION',
     title: 'Documentation your auditors will approve',
     description: 'Meet ISO, SOC2, and internal compliance requirements with automated
       audit trails, version control, and executive dashboards.',
     features: ['ISO 27001 & SOC2 compliance reporting',
                'Full audit trail for every doc change',
                'Executive ROI dashboards out of the box'],
     iconBg: 'bg-white/15', iconColor: 'text-white', icon: LockIcon,
     isDark: true
   }

5. Card template:
   <div :class="[
     'rounded-2xl p-6 sm:p-8',
     card.isDark ? '' : 'bg-white border border-gray-200'
   ]"
   :style="card.isDark ? 'background: #2A2882' : ''">
   ← style="background: #2A2882" is approved in CLAUDE.md Section 3.5

   Header: flex items-start gap-4 mb-5
     Icon box: :class="[card.iconBg, 'w-10 h-10 rounded-xl flex items-center
               justify-center shrink-0']"
       <component :is="card.icon" :class="card.iconColor" />
     Text block:
       eyebrow <p>: text-xs font-bold uppercase tracking-widest
         :class="card.isDark ? 'text-white/50' : 'text-gray-400'"
       <h3>: text-xl font-bold
         :class="card.isDark ? 'text-white' : 'text-gray-800'"
   Description <p>: text-sm leading-relaxed mb-5
     :class="card.isDark ? 'text-white/60' : 'text-gray-500'"
   Feature list <ul>: space-y-2.5
     <li>: flex items-center gap-2 text-sm
       :class="card.isDark ? 'text-white/70' : 'text-gray-500'"
       <CheckCircleIcon :class="card.isDark ? 'text-white/50' : 'text-gray-400'" />
       {{ feat }}
```

**Acceptance Criteria:**
- [ ] `GitNetworkIcon.vue`, `ArrowRightIcon.vue`, `LockIcon.vue` exist in `components/icons/`
- [ ] None of the 3 new icon files contain a `<script>` block
- [ ] `TargetIcon.vue` was not recreated — the existing T-06 file was imported
- [ ] `UseCasesSection.vue` uses `<script setup>`
- [ ] v-for is used over the `cards` array (no repeated card template markup)
- [ ] `<component :is="card.icon">` is used in the template
- [ ] `defineComponent` does not appear anywhere in this file
- [ ] Cards 1–3 have white bg with gray border
- [ ] Card 4 has `style="background: #2A2882"` and no border
- [ ] Card 4 text, eyebrow, description, and feature items are white/near-white
- [ ] Feature check icons on Card 4 are lighter than on Cards 1–3
- [ ] 2×2 grid on desktop, single column on mobile
- [ ] No `<style>` block in UseCasesSection.vue
- [ ] Branch `task/T-11-use-cases-section` pushed to `origin`
- [ ] PR created against `main` via `gh pr create` and URL reported

---

---

## T-12 — CTA Banner + Footer

**Goal:** Build the CTA banner and footer. Import AppLogo from T-04. Create 3 social
icon components. Decorative circle uses Tailwind utilities (no inline transform).

**Branch:** `task/T-12-cta-footer`

**Prompt to agent:**
```
Read assets/css/main.css and tailwind.config.js in full before starting.

PART A — Create 3 social icon components in components/icons/:
All: template-only .vue (no <script>), currentColor, viewBox="0 0 16 16",
width="16" height="16", aria-hidden="true". Note all 3 in report.

1. components/icons/LinkedInIcon.vue — LinkedIn "in" letterform approximation
2. components/icons/FacebookIcon.vue — Facebook "f" letterform approximation
3. components/icons/InstagramIcon.vue — Instagram camera outline approximation

PART B — Create components/sections/CTASection.vue:

Import: import AppLogo — not needed here.

1. <section class="footer-bg py-16 px-6" aria-label="Call to action">
2. <div class="max-w-4xl mx-auto">
3. Inner card: relative rounded-2xl overflow-hidden px-8 py-14 text-center
   style="background: #3730A3"   ← approved in CLAUDE.md Section 3.5
4. Decorative circle (aria-hidden="true", pointer-events-none):
   class="absolute top-0 right-0 w-48 h-48 rounded-full
          border-[40px] border-brand-indigo-light opacity-25
          translate-x-1/4 -translate-y-1/4 pointer-events-none"
   ← Use Tailwind border-[40px] (arbitrary value) and border-brand-indigo-light token.
   ← Use Tailwind translate-x-1/4 -translate-y-1/4 for the 25% offset.
   ← No inline style="" needed on this element.
5. <h2 class="relative text-white text-3xl sm:text-4xl font-bold leading-tight mb-4">
   Scale Your Documentation<br class="hidden sm:block"> With Confidence.
6. <p class="relative text-white/70 max-w-xl mx-auto text-base leading-relaxed mb-8">
   Join engineering teams that have eliminated documentation debt, onboarded
   developers faster, and built a community of contributors, all with measurable ROI.
7. CTA <a>:
   class="relative border-2 border-white text-white font-semibold px-8 py-3.5
          rounded-xl hover:bg-white hover:text-brand-indigo-mid transition-colors
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white
          focus-visible:ring-offset-2 focus-visible:ring-offset-[#3730A3]"
   ← On this dark indigo background, ring color is ring-white per CLAUDE.md Section 6.3
   Text: "Book a Demo Today"

PART C — Create components/AppFooter.vue:

Imports:
import AppLogo from '~/components/AppLogo.vue'
import LinkedInIcon from '~/components/icons/LinkedInIcon.vue'
import FacebookIcon from '~/components/icons/FacebookIcon.vue'
import InstagramIcon from '~/components/icons/InstagramIcon.vue'

1. <footer class="footer-bg px-6 pt-6 pb-12">
2. <div class="max-w-7xl mx-auto">
3. Grid: grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10
4. Column 1 (sm:col-span-2 lg:col-span-1):
   - <AppLogo />
   - Tagline <p>: text-gray-500 text-sm leading-relaxed max-w-xs mt-4 mb-5
   - Social row: flex items-center gap-3
     Each social button <a href="#" :aria-label="..."
       class="w-9 h-9 rounded-lg bg-brand-indigo text-white flex items-center
              justify-center hover:bg-brand-indigo-light transition-colors
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
              focus-visible:ring-brand-indigo">
       <LinkedInIcon /> / <FacebookIcon /> / <InstagramIcon />

5. Columns 2–4: v-for over a linkGroups array:
   { heading: string, links: string[] }
   Data:
   { heading: 'Company', links: ['About Us', 'Careers', 'Blog', 'Partnerships'] }
   { heading: 'Resources', links: ['Help Center', 'Fees & Limits', 'System Status'] }
   { heading: 'Legal & Compliance', links: ['Terms of Service', 'Privacy Policy',
     'Risk Disclosure', 'Cookie Policy'] }
   Template per group:
   <div>
     <h4 class="text-gray-800 font-bold text-sm mb-4">{{ group.heading }}</h4>
     <ul class="space-y-2.5">
       <li v-for="link in group.links" :key="link">
         <a href="#" class="text-gray-500 text-sm hover:text-brand-indigo
            transition-colors focus-visible:outline-none focus-visible:ring-1
            focus-visible:ring-brand-indigo rounded-sm">{{ link }}</a>
       </li>
     </ul>
   </div>
```

**Acceptance Criteria:**
- [ ] `LinkedInIcon.vue`, `FacebookIcon.vue`, `InstagramIcon.vue` exist in `components/icons/`
- [ ] None of the 3 social icon files contain a `<script>` block
- [ ] `CTASection.vue`: inner card uses `style="background: #3730A3"` (approved)
- [ ] Decorative circle uses `border-brand-indigo-light` class (not hex in style)
- [ ] Decorative circle uses Tailwind translate utilities (`translate-x-1/4 -translate-y-1/4`)
- [ ] Decorative circle has `aria-hidden="true"`
- [ ] CTA button's focus ring is `ring-white` (not `ring-brand-indigo`)
- [ ] "Book a Demo Today" button is visible and outlined white
- [ ] Hovering the button fills it white with brand-indigo text
- [ ] `AppFooter.vue` imports and renders `<AppLogo />`
- [ ] Logo in footer matches logo in AppNav (same component, same output)
- [ ] All 3 social icon buttons have `aria-label` attributes
- [ ] Footer link groups use v-for over a `linkGroups` array
- [ ] Footer is 4-col on lg+, 2-col on sm, 1-col on mobile
- [ ] No `<style>` block in CTASection.vue or AppFooter.vue
- [ ] No inline `style=""` on the decorative circle element
- [ ] Branch `task/T-12-cta-footer` pushed to `origin`
- [ ] PR created against `main` via `gh pr create` and URL reported

---

---

## T-13 — Responsiveness Pass

**Goal:** Audit and fix all sections across 3 breakpoints: 375px (mobile), 768px (tablet),
1440px (desktop).

**Branch:** `task/T-13-responsiveness`

**Prompt to agent:**
```
Perform a responsiveness audit across all section components, AppNav, and AppFooter.
The three target viewports are defined in CLAUDE.md Section 5.

Fix the following known issues, then check for additional problems:

1. AppNav.vue — at 375px, confirm the navbar does not overlap hero content.
   HeroSection uses pt-32 at mobile. If the headline is clipped, reduce to pt-28.

2. HeroSection.vue — at 375px:
   - h1 must be at most text-4xl. Verify no single orphaned words on their own line.
   - CTA buttons must be w-full when stacked (not just flex-col without width)
   - Feature pills must stack (flex-col sm:flex-row is already specified — verify it works)
   - Floating cards must be hidden (class hidden below lg — verify)

3. FeaturesSection.vue — confirm equal-height cards on desktop (use items-stretch if needed)

4. CommunitySection.vue — confirm the feature list column appears above the workflow card
   on mobile (DOM order: left col first)

5. ROIDashboard.vue — at 375px: the 2-col metric grid must not overflow.
   If metric values clip, add responsive font-size overrides (text-xl sm:text-2xl)

6. ComparisonSection.vue — confirm overflow-x-auto on the table wrapper prevents
   horizontal body scroll (add max-w-full to outer section if needed)

7. UseCasesSection.vue — confirm 2-col to 1-col reflow works cleanly

8. CTASection.vue — confirm decorative circle remains clipped at all widths

9. AppFooter.vue — at 375px: confirm all columns stack. Confirm social icon tap
   targets are at least 44px (add min-h-[44px] min-w-[44px] if needed)

After all fixes, output the CLAUDE.md Section 4.4 report listing every file
changed and what was fixed. If a section required no changes, note it explicitly.
```

**Acceptance Criteria:**
- [ ] No horizontal scrollbar on `<body>` at 375px viewport
- [ ] Hero headline wraps cleanly at 375px with no overflow
- [ ] CTA buttons are full-width when stacked on mobile
- [ ] Mobile nav menu opens and closes at 375px
- [ ] Floating hero cards are not visible at 768px or below
- [ ] Dashboard 2-col metric cards do not clip at 375px
- [ ] Comparison table scrolls horizontally at 375px (body does not scroll horizontally)
- [ ] Footer stacks to 1-column at 375px
- [ ] Social icon buttons have a minimum effective tap area of 44×44px
- [ ] CTA decorative circle is clipped correctly at 375px, 768px, and 1440px
- [ ] No layout element is cut off at 768px
- [ ] Branch `task/T-13-responsiveness` pushed to `origin`
- [ ] PR created against `main` via `gh pr create` and URL reported

---

---

## T-14 — Accessibility Pass

**Goal:** Ensure baseline WCAG 2.1 AA compliance for semantic structure, keyboard
navigation, and screen reader support across all components.

**Branch:** `task/T-14-accessibility`

**Prompt to agent:**
```
Perform an accessibility pass across all components. The requirements in CLAUDE.md
Section 6 apply. Check each item independently and report ✅ or ❌ per item.

1. Heading hierarchy:
   - Confirm exactly one <h1> exists on the page (in HeroSection)
   - Confirm h2 is used for all section titles
   - Confirm h3 is used for all card/item titles within sections
   - Confirm no heading levels are skipped anywhere (h1→h2→h3)

2. Landmark elements:
   - Confirm <header>, <nav>, <main>, <section>, <footer> are all present
   - Confirm every <section> has either a visible <h2> or an aria-label attribute
   - Sections that use aria-labelledby must reference an id that exists in that section

3. Interactive element labels:
   - Every icon-only <button> and <a> must have aria-label
   - Hamburger button: confirm aria-label + :aria-expanded are still in place (T-04)
   - Social icon links in AppFooter: confirm aria-label on each (T-12)
   - CTA buttons with visible text do not need aria-label — confirm they have visible text

4. Focus rings (CLAUDE.md Section 6.3 — background-aware colours):
   Apply this exact pattern to any interactive element missing it:
   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
   Ring colour by background context:
   - White or lavender bg  → focus-visible:ring-brand-indigo
   - Dark navy (#0D0C2A)   → focus-visible:ring-white
   - Indigo card (#3730A3) → focus-visible:ring-white (already set in T-12)
   - Dark indigo (#2A2882) → focus-visible:ring-white
   Check all <a> and <button> elements. The CTA button in CTASection already uses
   ring-white from T-12 — verify it is still in place, do not change it.

5. Decorative elements — confirm aria-hidden="true" on:
   - Both floating cards in HeroSection
   - Avatar stack in ROIDashboard
   - Decorative circle in CTASection
   - Tag hook SVG in PricingSection

6. Keyboard navigation order:
   Tab through the page. Confirm the order matches visual reading order:
   navbar links → hero CTAs → (section by section) → footer links

After completing, output the CLAUDE.md Section 4.4 report listing what was
verified ✅, what was fixed ❌→✅, and every file changed.
```

**Acceptance Criteria:**
- [ ] Page has exactly one `<h1>` (in HeroSection)
- [ ] No heading levels are skipped across the whole page
- [ ] Every `<section>` has a visible heading or `aria-label`/`aria-labelledby`
- [ ] All icon-only buttons and links have `aria-label`
- [ ] Hamburger button has `aria-label` and `:aria-expanded` binding
- [ ] All interactive elements on white/lavender backgrounds use `ring-brand-indigo`
- [ ] All interactive elements on dark backgrounds use `ring-white`
- [ ] Focus rings include `ring-offset-2` (not just `ring-2`)
- [ ] All floating cards, avatar stacks, and decorative elements have `aria-hidden="true"`
- [ ] Tab navigation follows logical visual order
- [ ] Branch `task/T-14-accessibility` pushed to `origin`
- [ ] PR created against `main` via `gh pr create` and URL reported

---

---

## T-15 — Firebase Deploy Config

**Goal:** Configure Nuxt 3 for static generation and set up Firebase Hosting.

**Branch:** `task/T-15-firebase-config`

**Prompt to agent:**
```
Read nuxt.config.ts and package.json in full before starting.

1. In nuxt.config.ts, add the nitro static preset:
   nitro: { preset: 'static' }
   Place this at the top level of the defineNuxtConfig object.

2. Create firebase.json at the project root:
   {
     "hosting": {
       "public": ".output/public",
       "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
       "rewrites": [{ "source": "**", "destination": "/index.html" }],
       "headers": [
         {
           "source": "**/*.@(js|css|woff2|woff|ttf)",
           "headers": [{ "key": "Cache-Control",
                         "value": "max-age=31536000, immutable" }]
         }
       ]
     }
   }

3. Create .firebaserc at the project root:
   { "projects": { "default": "REPLACE_WITH_YOUR_PROJECT_ID" } }

4. Add scripts to package.json:
   "generate": "nuxt generate"
   "deploy": "nuxt generate && firebase deploy"

5. Confirm .gitignore includes: .output, .nuxt, dist, node_modules, .firebase
   Add any missing entries.

6. Run pnpm generate and confirm it succeeds. Then run the post-generate
   verification steps:
   - ls .output/public/index.html        (must exist and not be empty)
   - ls .output/public/_nuxt/            (must contain hashed .js and .css files)
   - npx serve .output/public            (open in browser and confirm page renders)
   Report the output of each verification step.

Do not install firebase-tools — it is installed globally by the orchestrator.
```

**Acceptance Criteria:**
- [ ] `nuxt.config.ts` includes `nitro: { preset: 'static' }`
- [ ] `firebase.json` exists and points `"public"` to `.output/public`
- [ ] `.firebaserc` exists with `REPLACE_WITH_YOUR_PROJECT_ID` placeholder
- [ ] `package.json` has both `"generate"` and `"deploy"` scripts
- [ ] `.gitignore` includes `.output`, `.nuxt`, `dist`, `node_modules`, `.firebase`
- [ ] `pnpm generate` completes without errors
- [ ] `.output/public/index.html` exists and is not empty
- [ ] `.output/public/_nuxt/` directory contains hashed JS and CSS files
- [ ] `npx serve .output/public` renders the page without errors in the browser
- [ ] Branch `task/T-15-firebase-config` pushed to `origin`
- [ ] PR created against `main` via `gh pr create` and URL reported

---

---

## T-16 — README + Pixelay Notes

**Goal:** Write the final project documentation required by the assessment rubric.

**Branch:** `task/T-16-readme-docs`

**Prompt to agent:**
```
Create the following two files:

--- FILE 1: README.md (project root) ---

Sections required:
1. Project title + one-line description
2. "Live URL": https://REPLACE_WITH_FIREBASE_URL
   Mark clearly: "Replace this URL after running firebase deploy"
3. "Setup & Development":
   Prerequisites: Node.js 18+, pnpm, firebase-tools (npm install -g firebase-tools)
   Install: pnpm install
   Dev server: pnpm dev
   Build: pnpm generate
4. "Deploy to Firebase Hosting":
   First-time setup: firebase login, firebase init hosting
   (when prompted, set public directory to .output/public)
   Deploy: pnpm deploy (runs generate + firebase deploy in one command)
   After deploy: copy the Hosting URL from CLI output into README Live URL
5. "Project Structure": directory tree with one-line annotation per file/directory
6. "Interactive Element": describe the AppNav mobile hamburger toggle —
   what it does, which component, and the accessibility attributes in use
7. "Tradeoffs & Notes" (4–6 bullets):
   - DM Sans font (visual match; Figma-exported font name would improve fidelity)
   - AppLogo and all icons recreated as inline SVG approximations per CLAUDE.md 3.7
   - Price tag scalloped shape via CSS clip-path (Figma SVG export would be exact)
   - All copy is static (with more time: Nuxt Content or a headless CMS)
   - No scroll-reveal animations (with more time: IntersectionObserver + Tailwind)
8. "What I'd do with more time" (3–4 items)

--- FILE 2: pixelay/notes.md ---

Three bullet points. Each must:
- Reference a specific named section (e.g. "Hero Section", "ROI Dashboard")
- Describe the observed visual difference
- State the likely cause
- State how it could be fixed

Format per bullet:
- **[Section name]**: [observed difference] — [likely cause] — [fix]

Example structure only (write original content based on the actual implementation):
- **Hero Section**: headline line-breaks 2–3px earlier than Figma at 1440px —
  DM Sans optical sizing differs from Figma's font renderer — exact Figma font
  export would resolve.
```

**Acceptance Criteria:**
- [ ] `README.md` exists at project root with all 8 sections
- [ ] Live URL placeholder is present and clearly marked for replacement
- [ ] Deploy instructions reference `pnpm deploy` (not bare `firebase deploy`)
- [ ] `pixelay/notes.md` exists with exactly 3 bullets
- [ ] Each bullet names a specific section, describes a difference, states a cause,
  and states a fix
- [ ] Neither file contains lorem ipsum or placeholder copy beyond the Live URL
- [ ] Branch `task/T-16-readme-docs` pushed to `origin`
- [ ] PR created against `main` via `gh pr create` and URL reported

---

---

---

## T-17a — SectionBase Component

**Goal:** Create `components/SectionBase.vue` — a slot-based wrapper that encodes the
shared `<section>` + `<div class="max-w-[1920px] mx-auto">` skeleton used across all
section components. The component uses Vue's default attribute inheritance (`inheritAttrs: true`)
so consumers pass any Tailwind classes or inline styles directly as `class`/`style`
attributes, giving full styling flexibility without artificial prop constraints.

**Branch:** `task/T-17a-section-base-component`

**Depends On:** T-16 ✅

**Why this task exists:**
Every section component repeats the same outer skeleton:
```html
<section class="bg-white py-20 px-6" aria-labelledby="...">
  <div class="max-w-[1920px] mx-auto">
    ...content...
  </div>
</section>
```
`SectionBase` codifies this in one place. The 3-prop design (no `bg`/`py`/`px` props)
lets Vue's attribute inheritance merge any `class` or `style` directly onto `<section>`,
giving consumers the full Tailwind + CSS surface. This means a section can pass
`class="relative overflow-hidden hero-grid-bg"` and pseudo-element backgrounds work
correctly — the `.hero-grid-bg::before` and `::after` overlays require the parent
`<section>` to have `position: relative`, which is supplied by the consumer's `relative`
class, not hardcoded into SectionBase.

---

### Design spec

`SectionBase.vue` accepts exactly 3 explicit props:

| Prop | Type | Default | Purpose |
|---|---|---|---|
| `label` | `String` | `undefined` | Maps to `aria-label` on `<section>` |
| `labelledby` | `String` | `undefined` | Maps to `aria-labelledby` on `<section>` — takes precedence over `label` |
| `constrain` | `Boolean` | `true` | When `true`, wraps slot in `<div class="max-w-[1920px] mx-auto">` |

All other styling (`bg-white`, `py-20`, `px-6`, etc.) is passed by the consumer as a
`class` attribute and merged onto `<section>` automatically by Vue's attribute inheritance.

Rules:
- `labelledby` takes precedence: when both `label` and `labelledby` are provided,
  only `aria-labelledby` is rendered; `aria-label` is suppressed.
- When `constrain` is `false`, slot content renders directly inside `<section>` with
  no inner wrapper div.
- The component must use `<script setup>` and `defineProps`.
- The default slot is the only slot required.
- No `<style>` block.
- Do not set `inheritAttrs: false` — the default (`true`) is required for class passthrough.

---

### Prompt to agent

```
Read assets/css/main.css and tailwind.config.js in full before starting.

Create components/SectionBase.vue with the following exact content:

<script setup>
defineProps({
  label:      { type: String,  default: undefined },
  labelledby: { type: String,  default: undefined },
  constrain:  { type: Boolean, default: true }
})
</script>

<template>
  <section
    :aria-label="labelledby ? undefined : (label || undefined)"
    :aria-labelledby="labelledby || undefined"
  >
    <div v-if="constrain" class="max-w-[1920px] mx-auto">
      <slot />
    </div>
    <slot v-else />
  </section>
</template>

Do not add a <style> block. Do not set inheritAttrs: false. Do not add any props
beyond the 3 listed above.

After creating the file, run pnpm dev and confirm no console errors are introduced
by the new file. SectionBase is not used by any section yet — this task only creates
the component.
```

---

**Acceptance Criteria:**

- [ ] `components/SectionBase.vue` exists with `<script setup>` and exactly 3 props
      (`label`, `labelledby`, `constrain`)
- [ ] `SectionBase.vue` has no `<style>` block
- [ ] `SectionBase.vue` does not set `inheritAttrs: false`
- [ ] `SectionBase.vue` uses a single default `<slot />`
- [ ] When `constrain=true` (default), slot content is wrapped in
      `<div class="max-w-[1920px] mx-auto">`
- [ ] When `constrain=false`, slot content renders directly inside `<section>` with
      no wrapper div
- [ ] When `labelledby` is provided, `aria-label` is not rendered on `<section>`
- [ ] When only `label` is provided (no `labelledby`), `aria-label` is rendered
- [ ] `pnpm dev` starts with no console errors after adding the file
- [ ] No existing component is modified in this task
- [ ] Branch `task/T-17a-section-base-component` pushed to `origin`
- [ ] PR created against `main` via `gh pr create` and URL reported

---

## T-17b — SectionBase Refactor

**Goal:** Refactor all 7 target section components to use `SectionBase` as their root,
replacing the repeated `<section class="..."> + <div class="max-w-[1920px] mx-auto">`
boilerplate with `<SectionBase class="...">`. `HeroSection.vue` is exempt.

**Branch:** `task/T-17b-section-base-refactor`

**Depends On:** T-17a ✅ (must be merged to `main` before this branch is cut)

---

### Prompt to agent

```
Read assets/css/main.css, tailwind.config.js, and components/SectionBase.vue in full
before starting. Read each target component before editing it.

For each component in the mapping table below:
1. Add `import SectionBase from '~/components/SectionBase.vue'` to <script setup>
2. Replace the outermost `<section class="...">` opening tag with
   `<SectionBase class="[classes]" [aria props]>`
3. Remove the `<div class="max-w-[1920px] mx-auto">` immediately inside (SectionBase
   renders this wrapper when constrain=true, which is the default)
4. Replace the matching `</section>` closing tag with `</SectionBase>`
5. Remove the matching `</div>` for the max-w wrapper you removed in step 3

Mapping table:

| Component | class to pass | labelledby | label | constrain |
|---|---|---|---|---|
| FeaturesSection.vue | "bg-white py-20 px-6" | "features-heading" | — | true (default) |
| CommunitySection.vue | "bg-white py-20 px-6" | "community-heading" | — | true (default) |
| ROIDashboard.vue | "bg-white py-20 px-6" | "roi-heading" | — | true (default) |
| ComparisonSection.vue | "bg-white py-20 px-6" | "comparison-heading" | — | true (default) |
| PricingSection.vue | "bg-white py-20 px-6" | — | "Pricing" | true (default) |
| UseCasesSection.vue | "bg-white py-20 px-6" | "usecases-heading" | — | true (default) |
| CTASection.vue | "footer-bg py-16 px-6" | — | "Call to action" | true (default) |

Notes:
- HeroSection.vue must NOT be modified — it has a unique scaled/transform structure
  that SectionBase does not model.
- Since constrain defaults to true, you do not need to pass the constrain prop
  explicitly for any section in this table.
- ROIDashboard: the inner <div class="max-w-[1920px] mx-auto"> wraps both the section
  header AND the dark dashboard container. Remove that div — SectionBase renders it.
  The dashboard container's style="background: #0D0C2A" stays on its own inner div
  unchanged.
- After each edit, verify the template nesting depth is identical to the original
  (same number of wrapping elements around the deepest child node).
- Omit the constrain prop entirely when using the default (true) — do not write
  :constrain="true" explicitly.

After all 7 components are refactored, run pnpm dev and verify:
1. No console errors
2. All sections render visually identical to before the refactor
3. Each section's root element in the browser DOM is <section>, not <div>
4. aria-labelledby / aria-label attributes are present on each <section> as before
```

---

**Acceptance Criteria:**

- [ ] All 7 target components import `SectionBase` from `~/components/SectionBase.vue`
- [ ] All 7 target components use `<SectionBase>` as their root element
- [ ] Each component passes its section classes via `class` attribute on `<SectionBase>`
- [ ] Each component's `aria-labelledby` or `aria-label` is passed as the correct prop
- [ ] The `<div class="max-w-[1920px] mx-auto">` wrapper is removed from each component
      (SectionBase renders it internally)
- [ ] `HeroSection.vue` is **not** modified
- [ ] No section that previously used `aria-labelledby` now uses `aria-label` (or vice versa)
- [ ] `pnpm dev` starts with no console errors after all refactors
- [ ] No `<style>` block added to any file in this task
- [ ] No visual regression — all sections render identically before and after
- [ ] Branch `task/T-17b-section-base-refactor` pushed to `origin`
- [ ] PR created against `main` via `gh pr create` and URL reported

---

## Completion Checklist

Before submitting the repository, verify each item:

**Build:**
- [ ] `pnpm dev` starts with no console errors at `localhost:3000`
- [ ] `pnpm generate` completes without errors
- [ ] `.output/public/index.html` exists and is not empty
- [ ] `.output/public/_nuxt/` contains hashed JS and CSS files
- [ ] `npx serve .output/public` renders the page correctly in a browser
- [ ] `firebase deploy` succeeds and the live URL is accessible

**Design:**
- [ ] All 8 sections render correctly at 1440px (desktop)
- [ ] All 8 sections are responsive and correct at 375px (mobile)
- [ ] No horizontal scroll on `<body>` at 375px

**Functionality:**
- [ ] Mobile nav toggle opens and closes (interactive element ✅)
- [ ] Mobile menu closes when any link is clicked
- [ ] All CTA buttons are clickable

**Accessibility:**
- [ ] Tab navigation reaches all interactive elements in logical order
- [ ] Focus rings are visible on all interactive elements
- [ ] Focus rings are `ring-white` on dark backgrounds, `ring-brand-indigo` on light

**Code:**
- [ ] No `<style>` block in any component file
- [ ] No `defineComponent` in any component file
- [ ] No inline `style=""` outside the CLAUDE.md Section 3.5 approved list
- [ ] All icon SVGs use `currentColor`

**Repository:**
- [ ] `CLAUDE.md` (v1.2.0) is present at project root
- [ ] `AGENT_TASKS.md` is present at project root
- [ ] `git log --oneline main` shows one commit per task, formatted `T-XX: [task title]`
- [ ] All task branches (`task/T-02-*` through `task/T-16-*`) have closed (merged) PRs on GitHub
- [ ] No open task branches remain — all work is merged to `main`
- [ ] `pixelay/` folder contains `notes.md` + two screenshots (added by orchestrator)
- [ ] `README.md` live URL is updated with the real Firebase Hosting URL
- [ ] `.firebaserc` project ID is updated (not the placeholder)
- [ ] Repository link is ready to share