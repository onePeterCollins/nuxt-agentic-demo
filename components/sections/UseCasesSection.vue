<script setup>
import CheckCircleIcon from '~/components/icons/CheckCircleIcon.vue'
import GitNetworkIcon from '~/components/icons/GitNetworkIcon.vue'
import TargetIcon from '~/components/icons/TargetIcon.vue'
import ArrowRightIcon from '~/components/icons/ArrowRightIcon.vue'
import LockIcon from '~/components/icons/LockIcon.vue'

const cards = [
  {
    eyebrow: 'OPEN SOURCE TEAMS',
    title: 'Ship docs as fast as you ship code',
    description: 'Democratize contributions with micro-tasks, voice input, and mentorship matching. Keep your community engaged with gamification that makes documentation feel like progress, not chores.',
    features: [
      '78% less burden on maintainers',
      'Non-technical contributors via micro-tasks',
      'Gamified streaks keep contributors returning'
    ],
    iconBg: 'bg-gray-100',
    iconColor: 'text-gray-500',
    icon: GitNetworkIcon,
    isDark: false
  },
  {
    eyebrow: 'ENGINEERING ENABLEMENT',
    title: 'Onboard developers 2.3x faster',
    description: 'Connect your CI/CD pipeline to TechniDox and auto-generate docs on every merge. Quality gates catch regressions before they reach production.',
    features: [
      'CI/CD quality gates prevent doc regressions',
      'Auto-generated docs on every merge',
      '34% fewer "how do I..." interruptions'
    ],
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-500',
    icon: TargetIcon,
    isDark: false
  },
  {
    eyebrow: 'PLATFORM TEAMS',
    title: 'Documentation that scales with your APIs',
    description: 'Generate API reference docs, SDK guides, and integration playbooks automatically from your codebase. Keep them in sync with confidence scoring that flags drift before your customers notice.',
    features: [
      'Auto-synced API reference on every deploy',
      'Multi-format export: OpenAPI, MDX, HTML',
      'Confidence alerts flag doc drift in real time'
    ],
    iconBg: 'bg-green-50',
    iconColor: 'text-emerald-500',
    icon: ArrowRightIcon,
    isDark: false
  },
  {
    eyebrow: 'ENTERPRISE DOCUMENTATION',
    title: 'Documentation your auditors will approve',
    description: 'Meet ISO, SOC2, and internal compliance requirements with automated audit trails, version control, and executive dashboards.',
    features: [
      'ISO 27001 & SOC2 compliance reporting',
      'Full audit trail for every doc change',
      'Executive ROI dashboards out of the box'
    ],
    iconBg: 'bg-white/15',
    iconColor: 'text-white',
    icon: LockIcon,
    isDark: true
  }
]
</script>

<template>
  <section class="bg-white py-20 px-6" aria-labelledby="usecases-heading">
    <div class="max-w-7xl mx-auto">

      <!-- Section header -->
      <div class="text-center mb-12">
        <p class="text-brand-orange font-semibold text-xs tracking-widest uppercase mb-3">
          USE CASES
        </p>
        <h2 id="usecases-heading" class="text-3xl sm:text-4xl font-bold text-brand-indigo mb-4">
          Built For Every Team That Ships Code.
        </h2>
        <p class="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
          From open source maintainers to enterprise engineering teams, TechniDox adapts to how your team works.
        </p>
      </div>

      <!-- Card grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div
          v-for="card in cards"
          :key="card.title"
          :class="[
            'rounded-2xl p-6 sm:p-8',
            card.isDark ? '' : 'bg-white border border-gray-200'
          ]"
          :style="card.isDark ? 'background: #2A2882' : ''"
        >
          <!-- Card header -->
          <div class="flex items-start gap-4 mb-5">
            <div :class="[card.iconBg, 'w-10 h-10 rounded-xl flex items-center justify-center shrink-0']">
              <component :is="card.icon" :class="card.iconColor" />
            </div>
            <div>
              <p
                class="text-xs font-bold uppercase tracking-widest mb-1"
                :class="card.isDark ? 'text-white/50' : 'text-gray-400'"
              >
                {{ card.eyebrow }}
              </p>
              <h3
                class="text-xl font-bold"
                :class="card.isDark ? 'text-white' : 'text-gray-800'"
              >
                {{ card.title }}
              </h3>
            </div>
          </div>

          <!-- Description -->
          <p
            class="text-sm leading-relaxed mb-5"
            :class="card.isDark ? 'text-white/60' : 'text-gray-500'"
          >
            {{ card.description }}
          </p>

          <!-- Feature list -->
          <ul class="space-y-2.5">
            <li
              v-for="feat in card.features"
              :key="feat"
              class="flex items-center gap-2 text-sm"
              :class="card.isDark ? 'text-white/70' : 'text-gray-500'"
            >
              <CheckCircleIcon :class="card.isDark ? 'text-white/50' : 'text-gray-400'" />
              {{ feat }}
            </li>
          </ul>
        </div>
      </div>

    </div>
  </section>
</template>
