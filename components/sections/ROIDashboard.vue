<script setup>
import AnimateIn from '~/components/AnimateIn.vue'
</script>

<template>
  <section class="section-scaled bg-white py-20 px-6 overflow-hidden" aria-labelledby="roi-heading">

      <!-- Section header -->
      <div class="text-center mb-12">
        <p class="text-brand-orange font-semibold text-[16px] tracking-widest uppercase mb-[16px]">
          ROI &amp; ANALYTICS
        </p>
        <AnimateIn animation="fade-up" :duration="700">
        <h2 id="roi-heading" class="text-[48px] font-bold text-brand-indigo mb-[24px]" style="line-height: 56px;">
          Enterprise-Grade ROI and Analytics
        </h2>
        </AnimateIn>
        <p class="text-[#5d5c5c] max-w-4xl mx-auto text-[24px] font-semibold" style="line-height: 28px;">
          The first documentation platform with measurable business impact. Track time saved, productivity gains, and documentation health in real-time.
        </p>
      </div>

      <!-- Dashboard container -->
      <AnimateIn animation="fade-up" :duration="800" :delay="150">
      <div class="rounded-[16px] p-8 h-[580px] relative flex flex-col" style="background: #0D0C2A">
        <!-- Gradient overlay -->
        <div aria-hidden="true" class="absolute inset-0 rounded-[16px]" style="background-image: linear-gradient(137.33deg, rgba(66, 56, 158, 0.4) 36.4%, rgba(23, 20, 56, 0.2) 100%); pointer-events: none;"></div>
        
        <!-- Content wrapper -->
        <div class="relative z-10 flex flex-col h-full">

        <!-- Dashboard header -->
        <div class="flex items-start justify-between mb-[67px]">
          <div>
            <h3 class="text-white text-[28px] font-normal">Executive ROI Dashboard</h3>
            <p class="text-[#90a1b9] text-[18px] mt-1">Real-time documentation impact metrics</p>
          </div>
          <div class="bg-[rgba(102,219,58,0.2)] border-[1.111px] border-[rgba(102,219,58,0.3)] rounded-[12px] px-4 py-2 shrink-0">
            <p class="text-[#66db3a] text-[14px] font-semibold">Live Data</p>
          </div>
        </div>

        <!-- Top metric grid (4 columns) -->
        <div class="grid grid-cols-4 gap-4 mb-4">

          <!-- Time Saved -->
          <div class="bg-[rgba(255,255,255,0.05)] border border-[#868585] rounded-[8px] p-8 flex flex-col">
            <div class="flex items-center gap-2 mb-4">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" class="opacity-60">
                <circle cx="10" cy="10" r="8" stroke="currentColor" stroke-width="1.5"/>
                <path d="M10 5.5V10l3 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
              <span class="text-[#aeadad] text-[18px]">Time Saved</span>
            </div>
            <p class="text-white text-[32px] font-bold mb-2">847h</p>
            <p class="text-[#66db3a] text-[16px]">↑ 23% this month</p>
          </div>

          <!-- Productivity Gain -->
          <div class="bg-[rgba(255,255,255,0.05)] border border-[#868585] rounded-[8px] p-8 flex flex-col">
            <div class="flex items-center gap-2 mb-4">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" class="opacity-60">
                <path d="M2 15l5-6 4 4 7-8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14 5h4v4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
              <span class="text-[#aeadad] text-[18px]">Productivity Gain</span>
            </div>
            <p class="text-white text-[32px] font-bold mb-2">+34%</p>
            <p class="text-[#66db3a] text-[16px]">↑ 12% vs baseline</p>
          </div>

          <!-- Support Tickets -->
          <div class="bg-[rgba(255,255,255,0.05)] border border-[#868585] rounded-[8px] p-8 flex flex-col">
            <div class="flex items-center gap-2 mb-4">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" class="opacity-60">
                <rect x="2.5" y="11" width="3" height="6.5" rx="0.5" stroke="currentColor" stroke-width="1.5"/>
                <rect x="8" y="7" width="3" height="10.5" rx="0.5" stroke="currentColor" stroke-width="1.5"/>
                <rect x="13.5" y="3" width="3" height="14.5" rx="0.5" stroke="currentColor" stroke-width="1.5"/>
              </svg>
              <span class="text-[#aeadad] text-[18px]">Support Tickets</span>
            </div>
            <p class="text-white text-[32px] font-bold mb-2">-42%</p>
            <p class="text-[#66db3a] text-[16px]">↓ 156 tickets/month</p>
          </div>

          <!-- Onboarding Speed -->
          <div class="bg-[rgba(255,255,255,0.05)] border border-[#868585] rounded-[16px] p-8 flex flex-col">
            <div class="flex items-center gap-2 mb-4">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" class="opacity-60">
                <circle cx="10" cy="10" r="8" stroke="currentColor" stroke-width="1.5"/>
                <path d="M10 6v4l2.5 2.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
              <span class="text-[#aeadad] text-[18px]">Onboarding Speed</span>
            </div>
            <p class="text-white text-[32px] font-bold mb-2">3.2d</p>
            <p class="text-[#66db3a] text-[16px]">↓ 64% faster</p>
          </div>

        </div>

        <!-- Bottom grid (3 columns) -->
        <div class="grid grid-cols-3 gap-4">

          <!-- Documentation Health -->
          <div class="bg-[rgba(255,255,255,0.05)] border border-[#868585] rounded-[8px] p-8 flex flex-col">
            <div class="flex items-center justify-between gap-2 mb-4">
              <p class="text-[#aeadad] text-[18px]">Documentation Health</p>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" class="opacity-60">
                <path d="M2 16l6-8 4 5 8-10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <p class="mb-3"><span class="text-white text-[32px] font-bold">94</span><span class="text-[#aeadad] text-[18px]">/100</span></p>
            <div class="bg-[#434155] rounded-full h-2 overflow-hidden">
              <div class="h-full rounded-full progress-bar-gradient" style="width: 94%"></div>
            </div>
          </div>

          <!-- Support Status -->
          <div class="bg-[rgba(255,255,255,0.05)] border border-[#868585] rounded-[8px] p-8 flex flex-col">
            <div class="flex items-center justify-between gap-2 mb-4">
              <p class="text-[#aeadad] text-[18px]">Support Status</p>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" class="opacity-60">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" stroke="currentColor" stroke-width="1.5"/>
                <path d="M10 17l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" stroke="currentColor" stroke-width="1.5" fill="currentColor"/>
              </svg>
            </div>
            <div class="flex items-end gap-2 mb-3">
              <p class="text-white text-[32px] font-bold">98%</p>
              <p class="text-[#66db3a] text-[14px] font-semibold leading-[16px]">ISO/SOC2</p>
            </div>
            <div class="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <circle cx="8" cy="8" r="7" stroke="#66db3a" stroke-width="1.5"/>
                <path d="M5.5 8l2 2 4-4" stroke="#66db3a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span class="text-[#90a1b9] text-[12px]">Audit ready</span>
            </div>
          </div>

          <!-- Active Contributors -->
          <div class="bg-[rgba(255,255,255,0.05)] border border-[#868585] rounded-[8px] p-8 flex flex-col">
            <div class="flex items-center justify-between gap-2 mb-4">
              <p class="text-[#aeadad] text-[18px]">Active Contributors</p>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" class="opacity-60">
                <circle cx="12" cy="6" r="2.5" stroke="currentColor" stroke-width="1.5"/>
                <path d="M7 14c0-2 1.5-4 5-4s5 2 5 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </div>
            <p class="text-white text-[32px] font-bold mb-4">143</p>
            <div class="flex items-center" aria-hidden="true">
              <div class="w-6 h-6 rounded-full border border-[#1d293d] shrink-0" style="background: linear-gradient(135deg, #42389e 0%, #66db3a 100%);"></div>
              <div class="w-6 h-6 rounded-full border border-[#1d293d] shrink-0 -ml-2" style="background: linear-gradient(135deg, #42389e 0%, #66db3a 100%);"></div>
              <div class="w-6 h-6 rounded-full border border-[#1d293d] shrink-0 -ml-2" style="background: linear-gradient(135deg, #42389e 0%, #66db3a 100%);"></div>
              <div class="w-6 h-6 rounded-full border border-[#1d293d] shrink-0 -ml-2" style="background: linear-gradient(135deg, #42389e 0%, #66db3a 100%);"></div>
              <div class="w-6 h-6 rounded-full border border-[#1d293d] flex items-center justify-center text-white text-xs font-bold shrink-0 -ml-2" style="background: #314158;">+8</div>
            </div>
          </div>

        </div>
        </div> <!-- End content wrapper -->
      </div>
      </AnimateIn>
  </section>
</template>

<style scoped>
@media (min-width: 761px) {
  .section-scaled {
    width: 1920px;
    transform: scale(calc(98.5vw / 1920px));
    transform-origin: top left;
    /* 932 = design height in px — adjust this number to fine-tune the gap */
    margin-bottom: calc(98.5vw * 932 / 1920 - 932px);
  }
}
</style>
