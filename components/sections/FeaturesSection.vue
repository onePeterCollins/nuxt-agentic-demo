<script setup>
import CheckCircleIcon from '~/components/icons/CheckCircleIcon.vue'
import SparkleIcon from '~/components/icons/SparkleIcon.vue'
import TargetIcon from '~/components/icons/TargetIcon.vue'
import PersonIcon from '~/components/icons/PersonIcon.vue'
import SectionBase from '~/components/SectionBase.vue'
import AnimateIn from '~/components/AnimateIn.vue'

const cards = [
  {
    bg: 'bg-[#eae9f5]',
    iconStyle: 'bg-gradient-to-br from-[#42389e] to-[#42389e]/80',
    icon: SparkleIcon,
    title: 'AI Documentation Generator',
    description: 'Automatically converts codebases into comprehensive documentation with parameter extraction, usage examples, and multi-format export. Reduce documentation time from hours to minutes.',
    features: ['Intelligent code analysis', 'Multi-language support', 'Export to any format'],
    checkClass: 'text-brand-indigo'
  },
  {
    bg: 'bg-[#fdf5e9]',
    iconStyle: 'bg-[#f9a71e]',
    icon: TargetIcon,
    title: 'Documentation Quality Scorer',
    description: 'Advanced scoring system analyzing readability, inclusivity, structure, and technical accuracy with actionable improvement recommendations and real-time quality assessment.',
    features: ['Multi-dimensional scoring', 'Confidence indicators', 'Actionable recommendations'],
    checkClass: 'text-brand-orange'
  },
  {
    bg: 'bg-[#eefaec]',
    iconStyle: 'bg-[#24bd2e]',
    icon: PersonIcon,
    title: 'Human-in-the-Loop Review',
    description: 'Sophisticated workflow where low-confidence content automatically routes to expert reviewers. Build trust with AI-human collaboration and community validation.',
    features: ['Smart routing system', 'Expert reviewer network', 'Quality assurance workflow'],
    checkClass: 'text-[#24bd2e]'
  }
]
</script>

<template>
  <SectionBase class="bg-white py-20 px-6" labelledby="features-heading">

      <!-- Section header -->
      <div class="text-center mb-12">
        <p class="font-semibold text-[16px] tracking-widest uppercase mb-4 text-brand-orange">
          AI-NATIVE DOCUMENTATION ENGINE
        </p>
        <AnimateIn animation="fade-up" :duration="700">
        <h2 id="features-heading" class="text-[48px] font-bold text-brand-indigo mb-6 leading-[56px]">
          AI-Native Documentation Engine
        </h2>
        </AnimateIn>
        <p class="text-[#5d5c5c] max-w-[863px] mx-auto text-[16px] leading-[28px] font-semibold">
          Three revolutionary AI engines working together to transform how teams create, validate, and scale technical documentation.
        </p>
      </div>

      <!-- Card grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        <AnimateIn
          v-for="(card, index) in cards"
          :key="card.title"
          animation="fade-up"
          :duration="600"
          :delay="index * 100"
        >
        <div :class="[card.bg, 'rounded-[16px] p-8 flex flex-col h-full border border-[#868585] shadow-[0px_0px_20px_10px_rgba(0,0,0,0.05)]']">
          <!-- Icon box -->
          <div :class="[card.iconStyle, 'w-14 h-14 rounded-[16px] flex items-center justify-center mb-8 shrink-0']">
            <component :is="card.icon" class="text-white" size="28" />
          </div>

          <h3 class="text-[28px] font-normal text-[#1a1a2e] mb-4 leading-[32px]">{{ card.title }}</h3>
          <p class="text-[#868585] text-[18px] leading-[26px] mb-8">{{ card.description }}</p>

          <ul class="space-y-4 mt-auto">
            <li
              v-for="feat in card.features"
              :key="feat"
              class="flex items-start gap-2 text-[18px] text-[#868585] leading-[26px]"
            >
              <CheckCircleIcon :class="card.checkClass" class="shrink-0 mt-0.5" />
              {{ feat }}
            </li>
          </ul>
        </div>
        </AnimateIn>
      </div>

  </SectionBase>
</template>
