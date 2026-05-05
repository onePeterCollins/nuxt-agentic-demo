<script setup>
import CheckCircleIcon from '~/components/icons/CheckCircleIcon.vue'
import BadgeIcon from '~/components/icons/BadgeIcon.vue'
import LightningIcon from '~/components/icons/LightningIcon.vue'
import PeopleIcon from '~/components/icons/PeopleIcon.vue'
import GitBranchIcon from '~/components/icons/GitBranchIcon.vue'

const features = [
  {
    title: 'Gamified Contributions',
    description: 'Streak tracking, impact badges, and achievement systems that reward contributors and keep momentum high across your documentation projects.',
    iconBg: 'bg-gray-100',
    iconColor: 'text-gray-500',
    icon: BadgeIcon
  },
  {
    title: 'Micro-Contribution Architecture',
    description: 'Complex tasks broken into 5–10 minute contributions so anyone can help, regardless of experience level or available time.',
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-500',
    icon: LightningIcon
  },
  {
    title: 'Mentorship Matching',
    description: 'AI-powered pairing of experienced contributors with newcomers to build skills, grow your contributor base, and improve documentation quality.',
    iconBg: 'bg-green-50',
    iconColor: 'text-emerald-500',
    icon: PeopleIcon
  },
  {
    title: 'Peer Validation Network',
    description: 'Accept, edit, and reject workflows that improve AI models over time, ensuring community knowledge strengthens your documentation engine.',
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-600',
    icon: GitBranchIcon
  }
]
</script>

<template>
  <section class="bg-white py-20 px-6" aria-labelledby="community-heading">
    <div class="max-w-7xl mx-auto">

      <!-- Section header -->
      <div class="text-center mb-14">
        <p class="text-brand-orange font-semibold text-xs tracking-widest uppercase mb-3">
          COMMUNITY
        </p>
        <h2 id="community-heading" class="text-3xl sm:text-4xl font-bold text-brand-indigo mb-4">
          Community-Driven Improvement At Scale
        </h2>
        <p class="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
          Harness the power of your developer community to continuously improve documentation quality through structured contribution workflows.
        </p>
      </div>

      <!-- Two-column layout -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        <!-- Left column: feature list -->
        <div class="space-y-8">
          <div
            v-for="feature in features"
            :key="feature.title"
            class="flex gap-4"
          >
            <div :class="[feature.iconBg, 'w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-1']">
              <component :is="feature.icon" :class="feature.iconColor" />
            </div>
            <div>
              <h3 class="font-bold text-gray-800 mb-1.5">{{ feature.title }}</h3>
              <p class="text-gray-500 text-sm leading-relaxed">{{ feature.description }}</p>
            </div>
          </div>
        </div>

        <!-- Right column: workflow steps card -->
        <div class="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">

          <!-- Step 1 -->
          <div class="flex items-center gap-4 bg-gray-50 rounded-xl px-4 py-4 mb-3">
            <div class="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
              <span class="text-xs font-bold text-gray-600">1</span>
            </div>
            <div class="flex-1">
              <p class="font-semibold text-gray-800 text-sm">Submit a Contribution</p>
              <p class="text-gray-500 text-xs mt-0.5">Write, edit, or review documentation</p>
            </div>
            <CheckCircleIcon :size="18" class="text-emerald-500 shrink-0" />
          </div>

          <!-- Step 2 -->
          <div class="flex items-center gap-4 bg-gray-50 rounded-xl px-4 py-4 mb-3">
            <div class="w-8 h-8 rounded-full border-2 border-brand-orange flex items-center justify-center shrink-0">
              <span class="text-xs font-bold text-brand-orange">2</span>
            </div>
            <div class="flex-1">
              <p class="font-semibold text-gray-800 text-sm">AI Quality Check</p>
              <p class="text-gray-500 text-xs mt-0.5">Automated scoring and suggestions</p>
            </div>
            <span class="text-xs font-semibold text-brand-orange shrink-0">Review</span>
          </div>

          <!-- Step 3 -->
          <div class="flex items-center gap-4 bg-gray-50 rounded-xl px-4 py-4 mb-3">
            <div class="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
              <span class="text-xs font-bold text-gray-600">3</span>
            </div>
            <div class="flex-1">
              <p class="font-semibold text-gray-800 text-sm">Peer Validation</p>
              <p class="text-gray-500 text-xs mt-0.5">Community experts approve changes</p>
            </div>
            <CheckCircleIcon :size="18" class="text-emerald-500 shrink-0" />
          </div>

          <!-- Step 4 -->
          <div class="flex items-center gap-4 bg-gray-50 rounded-xl px-4 py-4">
            <div class="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
              <!-- Checkmark SVG (inline — structural to this card only) -->
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2 6.5l2.5 2.5 5.5-6" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="flex-1">
              <p class="font-semibold text-gray-800 text-sm">Published &amp; Rewarded</p>
              <p class="text-gray-500 text-xs mt-0.5">Earn badges and build your reputation</p>
            </div>
            <!-- Star outline SVG (inline — structural to this card only) -->
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" class="shrink-0 text-gray-400">
              <path d="M9 2l1.8 5.5H17l-4.9 3.5 1.8 5.5L9 13l-4.9 3.5 1.8-5.5L1 7.5h6.2z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>
            </svg>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>
