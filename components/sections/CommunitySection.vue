<script setup>
import AnimateIn from '~/components/AnimateIn.vue'

const features = [
  {
    title: 'Gamified Contributions',
    description: 'Streak tracking, impact badges, and achievement systems that reward quality contributions and retain community members.',
    iconBg: 'rgba(66,56,158,0.1)',
    iconColor: '#42389e'
  },
  {
    title: 'Micro-Contribution Architecture',
    description: 'Complex tasks broken into 5-10 minute contributions, making open source accessible to everyone regardless of time or expertise.',
    iconBg: 'rgba(249,167,30,0.1)',
    iconColor: '#f9a71e'
  },
  {
    title: 'Mentorship Matching',
    description: 'AI-powered pairing of experienced contributors with newcomers, fostering knowledge transfer and building stronger communities.',
    iconBg: 'rgba(63,146,32,0.1)',
    iconColor: '#3f9220'
  },
  {
    title: 'Peer Validation Network',
    description: 'Accept, edit, and reject workflows that improve AI models over time through community-driven quality signals.',
    iconBg: 'rgba(66,56,158,0.1)',
    iconColor: '#42389e'
  }
]

const steps = [
  {
    number: 1,
    title: 'AI generates documentation',
    description: 'From codebase analysis',
    color: '#42389e'
  },
  {
    number: 2,
    title: 'Quality scoring & routing',
    description: 'Confidence: 72% - Review needed',
    color: '#f9a71e',
    badge: 'Review'
  },
  {
    number: 3,
    title: 'Community review',
    description: '3 contributors validated',
    color: '#24bd2e'
  },
  {
    number: 4,
    title: 'Published & Improving',
    description: 'AI learns from feedback',
    color: '#24bd2e'
  }
]
</script>

<template>
  <section class="section-scaled bg-white py-20 px-6 overflow-hidden" aria-labelledby="community-heading">

      <!-- Section header -->
      <div class="text-center mb-16">
        <p class="text-brand-orange font-semibold text-[16px] tracking-widest uppercase mb-4">
          AI-NATIVE DOCUMENTATION ENGINE
        </p>
        <AnimateIn animation="fade-up" :duration="700">
        <h2 id="community-heading" class="text-[48px] font-bold text-brand-indigo mb-6" style="line-height: 56px;">
          Community-Driven Improvement at Scale
        </h2>
        </AnimateIn>
        <p class="text-[#5d5c5c] max-w-4xl mx-auto text-[24px] font-semibold" style="line-height: 28px;">
          Democratize documentation contributions with gamified workflows, micro-tasks, mentorship matching, and peer validation systems that keep contributors engaged long-term.
        </p>
      </div>

      <!-- Two-column layout with gap -->
      <div class="flex gap-[237px] items-start justify-center">

        <!-- Left column: feature list -->
        <div class="space-y-8 flex-1">
          <AnimateIn
            v-for="(feature, index) in features"
            :key="feature.title"
            animation="fade-right"
            :duration="600"
            :delay="index * 80"
          >
          <div class="flex gap-4">
            <div class="w-12 h-12 rounded-[12px] flex items-center justify-center shrink-0" :style="{ background: feature.iconBg }">
              <!-- Icon placeholder - approx SVG icon -->
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/>
              </svg>
            </div>
            <div>
              <h3 class="font-normal text-[#1a1a2e] mb-4 text-[28px]" style="line-height: 32px;">{{ feature.title }}</h3>
              <p class="text-[#868585] text-[18px] leading-[26px]">{{ feature.description }}</p>
            </div>
          </div>
          </AnimateIn>
        </div>

        <!-- Right column: workflow steps card -->
        <AnimateIn animation="fade-left" :duration="700" :delay="100">
        <div class="bg-white border border-[#868585] rounded-[16px] shadow-[0px_0px_20px_10px_rgba(0,0,0,0.05)] p-8 w-[828px] h-[565px] flex flex-col gap-8">

          <!-- Step 1 -->
          <div class="flex items-center gap-6 bg-[#f5f4f4] border border-[#aeadad] rounded-[8px] px-4 py-4 flex-1">
            <div class="w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-bold text-[14px]" style="background: rgba(66,56,158,0.1); color: #42389e;">
              1
            </div>
            <div class="flex-1">
              <p class="font-semibold text-[#1a1a2e] text-[20px]" style="line-height: 24px;">{{ steps[0].title }}</p>
              <p class="text-[#868585] text-[18px] leading-[26px] mt-4">{{ steps[0].description }}</p>
            </div>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" class="shrink-0">
              <path d="M2 10l4 4 12-12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>

          <!-- Step 2 -->
          <div class="flex items-center gap-6 bg-[#f5f4f4] border border-[#aeadad] rounded-[8px] px-4 py-4 flex-1">
            <div class="w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-bold text-[14px]" style="background: rgba(249,167,30,0.1); color: #f9a71e;">
              2
            </div>
            <div class="flex-1">
              <p class="font-semibold text-[#1a1a2e] text-[20px]" style="line-height: 24px;">{{ steps[1].title }}</p>
              <p class="text-[#868585] text-[18px] leading-[26px] mt-4">{{ steps[1].description }}</p>
            </div>
            <div class="bg-[rgba(249,167,30,0.1)] rounded px-2 py-1 shrink-0">
              <span class="text-[#f9a71e] text-[12px] font-semibold leading-4">{{ steps[1].badge }}</span>
            </div>
          </div>

          <!-- Step 3 -->
          <div class="flex items-center gap-6 bg-[#f5f4f4] border border-[#aeadad] rounded-[8px] px-4 py-4 flex-1">
            <div class="w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-bold text-[14px]" style="background: rgba(63,146,32,0.1); color: #24bd2e;">
              3
            </div>
            <div class="flex-1">
              <p class="font-semibold text-[#1a1a2e] text-[20px]" style="line-height: 24px;">{{ steps[2].title }}</p>
              <p class="text-[#868585] text-[18px] leading-[26px] mt-4">{{ steps[2].description }}</p>
            </div>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" class="shrink-0">
              <path d="M2 10l4 4 12-12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>

          <!-- Step 4 -->
          <div class="flex items-center gap-6 bg-[#f5f4f4] border border-[#aeadad] rounded-[8px] px-4 py-4 flex-1">
            <div class="w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-white" style="background: #24bd2e;">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M3 10l4 4 10-12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="flex-1">
              <p class="font-semibold text-[#1a1a2e] text-[20px]" style="line-height: 24px;">{{ steps[3].title }}</p>
              <p class="text-[#868585] text-[18px] leading-[26px] mt-4">{{ steps[3].description }}</p>
            </div>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" class="shrink-0" style="color: #24bd2e;">
              <path d="M10 2l2.4 7.2h7.6l-6.2 4.5 2.4 7.2L10 16.4l-6.2 4.5 2.4-7.2L0 9.2h7.6z" fill="currentColor"/>
            </svg>
          </div>

        </div>
        </AnimateIn>
      </div>
  </section>
</template>

<style scoped>
@media (min-width: 761px) {
  .section-scaled {
    width: 1920px;
    transform: scale(calc(98.5vw / 1920px));
    transform-origin: top left;
    /* 957 = design height in px — adjust this number to fine-tune the gap */
    margin-bottom: calc(98.5vw * 957 / 1920 - 957px);
  }
}
</style>
