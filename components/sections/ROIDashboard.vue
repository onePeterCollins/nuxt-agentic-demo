<script setup>
import { useScrollReveal } from '~/composables/useScrollReveal'
import SectionBase from '~/components/SectionBase.vue'

useScrollReveal()

const avatarColors = ['#22C55E', '#3B82F6', '#8B5CF6', '#F59E0B', '#EC4899']
</script>

<template>
  <SectionBase class="bg-white py-20 px-6" labelledby="roi-heading">

      <!-- Section header -->
      <div class="text-center mb-12">
        <p class="text-brand-orange font-semibold text-xs tracking-widest uppercase mb-3">
          ROI &amp; ANALYTICS
        </p>
        <h2 id="roi-heading" class="reveal-hidden text-3xl sm:text-4xl font-bold text-brand-indigo mb-4">
          Measurable Impact From Day One
        </h2>
        <p class="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
          Track the real business value of better documentation with live dashboards your executives will love.
        </p>
      </div>

      <!-- Dashboard container -->
      <div class="rounded-2xl p-6 sm:p-8" style="background: #0D0C2A">

        <!-- Dashboard header -->
        <div class="flex items-start justify-between mb-6">
          <div>
            <h3 class="text-white font-bold text-lg">Executive ROI Dashboard</h3>
            <p class="text-white/50 text-sm mt-0.5">Real-time documentation impact metrics</p>
          </div>
          <span class="bg-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg shrink-0">Live Data</span>
        </div>

        <!-- Top metric grid -->
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-3">

          <!-- Time Saved -->
          <div class="roi-card p-4">
            <div class="flex items-center gap-2 mb-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" class="opacity-60">
                <circle cx="8" cy="8" r="6.5" stroke="#60A5FA" stroke-width="1.3"/>
                <path d="M8 4.5V8l2.5 2" stroke="#60A5FA" stroke-width="1.3" stroke-linecap="round"/>
              </svg>
              <span class="text-white/60 text-xs">Time Saved</span>
            </div>
            <p class="text-white text-xl sm:text-2xl font-bold">847h</p>
            <p class="text-emerald-400 text-xs mt-1 flex items-center gap-1">↑ 23% this month</p>
          </div>

          <!-- Productivity Gain -->
          <div class="roi-card p-4">
            <div class="flex items-center gap-2 mb-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" class="opacity-60">
                <path d="M2 12L6 7l3 3 5-6" stroke="#F59E0B" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11 4h3v3" stroke="#F59E0B" stroke-width="1.3" stroke-linecap="round"/>
              </svg>
              <span class="text-white/60 text-xs">Productivity Gain</span>
            </div>
            <p class="text-white text-xl sm:text-2xl font-bold">+34%</p>
            <p class="text-emerald-400 text-xs mt-1 flex items-center gap-1">↑ 12% vs baseline</p>
          </div>

          <!-- Support Tickets -->
          <div class="roi-card p-4">
            <div class="flex items-center gap-2 mb-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" class="opacity-60">
                <rect x="2" y="9" width="2.5" height="5" rx="0.5" stroke="#34D399" stroke-width="1.3"/>
                <rect x="6.5" y="6" width="2.5" height="8" rx="0.5" stroke="#34D399" stroke-width="1.3"/>
                <rect x="11" y="3" width="2.5" height="11" rx="0.5" stroke="#34D399" stroke-width="1.3"/>
              </svg>
              <span class="text-white/60 text-xs">Support Tickets</span>
            </div>
            <p class="text-white text-xl sm:text-2xl font-bold">-42%</p>
            <p class="text-emerald-400 text-xs mt-1 flex items-center gap-1">↓ 156 tickets/month</p>
          </div>

          <!-- Onboarding Speed -->
          <div class="roi-card p-4">
            <div class="flex items-center gap-2 mb-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" class="opacity-60">
                <circle cx="8" cy="8" r="6.5" stroke="#A78BFA" stroke-width="1.3"/>
                <path d="M8 5v3.5l2 2" stroke="#A78BFA" stroke-width="1.3" stroke-linecap="round"/>
                <path d="M5 2.5l1.5 1.5" stroke="#A78BFA" stroke-width="1.3" stroke-linecap="round"/>
                <path d="M11 2.5L9.5 4" stroke="#A78BFA" stroke-width="1.3" stroke-linecap="round"/>
              </svg>
              <span class="text-white/60 text-xs">Onboarding Speed</span>
            </div>
            <p class="text-white text-xl sm:text-2xl font-bold">3.2d</p>
            <p class="text-emerald-400 text-xs mt-1 flex items-center gap-1">↓ 64% faster</p>
          </div>

        </div>

        <!-- Bottom grid -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">

          <!-- Documentation Health -->
          <div class="roi-card p-4">
            <div class="flex items-center gap-2 mb-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" class="opacity-60">
                <path d="M1 11L5 6l3 4 2-3 4 3" stroke="#34D399" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span class="text-white/60 text-xs">Documentation Health</span>
            </div>
            <p>
              <span class="text-white text-2xl font-bold">94</span>
              <span class="text-white/40 text-base font-normal">/100</span>
            </p>
            <div class="h-2 rounded-full bg-white/10 mt-3">
              <div class="h-full rounded-full progress-bar-gradient" style="width: 94%"></div>
            </div>
          </div>

          <!-- Support / Compliance -->
          <div class="roi-card p-4">
            <div class="flex items-center gap-2 mb-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" class="opacity-60">
                <rect x="2" y="5" width="2" height="9" rx="0.5" stroke="#34D399" stroke-width="1.3"/>
                <rect x="6" y="3" width="2" height="11" rx="0.5" stroke="#34D399" stroke-width="1.3"/>
                <rect x="10" y="1" width="2" height="13" rx="0.5" stroke="#34D399" stroke-width="1.3"/>
                <rect x="14" y="7" width="2" height="7" rx="0.5" stroke="#34D399" stroke-width="1.3"/>
              </svg>
              <span class="text-white/60 text-xs">Support &amp; Compliance</span>
            </div>
            <div class="flex items-baseline gap-2">
              <span class="text-white text-2xl font-bold">98%</span>
              <span class="text-white/40 text-xs leading-tight">ISO/<br>SOC2</span>
            </div>
            <div class="flex items-center gap-1.5 mt-2">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <circle cx="7" cy="7" r="6" stroke="#34D399" stroke-width="1.3"/>
                <path d="M4.5 7.5l1.5 1.5 3.5-4" stroke="#34D399" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span class="text-emerald-400 text-xs">Audit ready</span>
            </div>
          </div>

          <!-- Active Contributors -->
          <div class="roi-card p-4">
            <div class="flex items-center gap-2 mb-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" class="opacity-60">
                <circle cx="10" cy="5" r="2.5" stroke="#A78BFA" stroke-width="1.3"/>
                <path d="M6 14c0-2.5 1.8-4 4-4s4 1.5 4 4" stroke="#A78BFA" stroke-width="1.3" stroke-linecap="round"/>
                <circle cx="5.5" cy="6" r="2" stroke="#A78BFA" stroke-width="1.3"/>
                <path d="M1 14c0-2 1.5-3.5 4.5-3.5" stroke="#A78BFA" stroke-width="1.3" stroke-linecap="round"/>
              </svg>
              <span class="text-white/60 text-xs">Active Contributors</span>
            </div>
            <p class="text-white text-2xl font-bold">143</p>
            <div class="flex items-center mt-2" aria-hidden="true">
              <div
                v-for="(color, index) in avatarColors"
                :key="color"
                class="w-7 h-7 rounded-full border-2 border-white/15 inline-block"
                :style="index === 0 ? { background: color } : { background: color, marginLeft: '-6px' }"
              ></div>
              <div
                class="w-7 h-7 rounded-full border-2 border-white/15 flex items-center justify-center text-white text-xs font-bold"
                style="background: #4F46E5; margin-left: -6px"
              >+8</div>
            </div>
          </div>

        </div>
      </div>
  </SectionBase>
</template>
