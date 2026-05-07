<script setup>
import CheckCircleIcon from '~/components/icons/CheckCircleIcon.vue'
import SparkleIcon from '~/components/icons/SparkleIcon.vue'
import TargetIcon from '~/components/icons/TargetIcon.vue'
import PersonIcon from '~/components/icons/PersonIcon.vue'
import { useScrollReveal } from '~/composables/useScrollReveal'
import SectionBase from '~/components/SectionBase.vue'

useScrollReveal()

const cards = [
  {
    bg: 'bg-brand-card-purple',
    iconBg: 'bg-brand-indigo',
    icon: SparkleIcon,
    title: 'AI Documentation Generator',
    description: 'Automatically converts codebases into comprehensive documentation with parameter extraction, usage examples, and multi-format export. Reduce documentation time from hours to minutes.',
    features: ['Intelligent code analysis', 'Multi-language support', 'Export to any format'],
    checkClass: 'text-amber-500'
  },
  {
    bg: 'bg-brand-card-orange',
    iconBg: 'bg-brand-orange',
    icon: TargetIcon,
    title: 'Documentation Quality Scorer',
    description: 'Advanced scoring system analyzing readability, inclusivity, structure, and technical accuracy with actionable improvement recommendations and real-time quality assessment.',
    features: ['Multi-dimensional scoring', 'Confidence indicators', 'Actionable recommendations'],
    checkClass: 'text-amber-500'
  },
  {
    bg: 'bg-brand-card-green',
    iconBg: 'bg-emerald-500',
    icon: PersonIcon,
    title: 'Human-in-the-Loop Review',
    description: 'Sophisticated workflow where low-confidence content automatically routes to expert reviewers. Build trust with AI-human collaboration and community validation.',
    features: ['Smart routing system', 'Expert reviewer network', 'Quality assurance workflow'],
    checkClass: 'text-emerald-500'
  }
]
</script>

<template>
  <SectionBase class="bg-white py-20 px-6" labelledby="features-heading">

      <!-- Trusted-by line -->
      <p class="text-center text-gray-500 font-medium mb-16">
        Trusted by developer teams, open source communities, and enterprise orgs
      </p>

      <!-- Section header -->
      <div class="text-center mb-12">
        <p class="text-brand-orange font-semibold text-xs tracking-widest uppercase mb-3">
          AI ENGINE
        </p>
        <h2 id="features-heading" class="reveal-hidden text-3xl sm:text-4xl font-bold text-brand-indigo mb-4">
          AI-Native Documentation Engine
        </h2>
        <p class="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
          Three powerful AI modules working together to generate, score, and validate your documentation automatically.
        </p>
      </div>

      <!-- Card grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        <div
          v-for="card in cards"
          :key="card.title"
          :class="[card.bg, 'reveal-hidden rounded-2xl p-6 flex flex-col']"
        >
          <!-- Icon box -->
          <div :class="[card.iconBg, 'w-12 h-12 rounded-xl flex items-center justify-center mb-5 shrink-0']">
            <component :is="card.icon" class="text-white" />
          </div>

          <h3 class="text-lg font-bold text-gray-800 mb-3">{{ card.title }}</h3>
          <p class="text-gray-500 text-sm leading-relaxed mb-5">{{ card.description }}</p>

          <ul class="space-y-2 mt-auto">
            <li
              v-for="feat in card.features"
              :key="feat"
              class="flex items-center gap-2 text-sm text-gray-500"
            >
              <CheckCircleIcon :class="card.checkClass" />
              {{ feat }}
            </li>
          </ul>
        </div>
      </div>

  </SectionBase>
</template>
