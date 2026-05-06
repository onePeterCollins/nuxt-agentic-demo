<script setup>
import CheckCircleIcon from '~/components/icons/CheckCircleIcon.vue'
</script>

<template>
  <section class="relative overflow-hidden min-h-screen flex flex-col bg-brand-lavender hero-grid-bg" aria-label="Hero">
    <!-- Left floating card -->
    <div class="absolute left-0 top-1/4 -translate-x-8 hidden lg:block pointer-events-none select-none"
         aria-hidden="true">
      <div class="bg-white rounded-2xl shadow-lg p-4 w-44 rotate-[-4deg]">
        <div class="w-10 h-10 rounded-full bg-gray-200 mb-3"></div>
        <div class="space-y-2 mb-3">
          <div class="h-2 bg-gray-300 rounded w-3/4"></div>
          <div class="h-2 bg-gray-300 rounded w-full"></div>
          <div class="h-2 bg-gray-300 rounded w-1/2"></div>
        </div>
        <div class="bg-brand-lavender rounded px-2 py-1 text-center text-xs font-medium text-gray-600">
          Send
        </div>
      </div>
    </div>

    <!-- Right floating card -->
    <div class="absolute right-0 top-1/4 translate-x-8 hidden lg:block pointer-events-none select-none"
         aria-hidden="true">
      <div class="bg-white rounded-2xl shadow-lg p-4 w-44 rotate-[4deg]">
        <div class="flex justify-end mb-3">
          <div class="w-8 h-8 rounded-full border-2 border-gray-300"></div>
        </div>
        <div class="space-y-2 mb-3">
          <div class="h-2 bg-gray-300 rounded w-3/4"></div>
          <div class="h-2 bg-gray-300 rounded w-full"></div>
        </div>
        <div class="grid grid-cols-2 gap-2">
          <div class="h-6 bg-gray-200 rounded"></div>
          <div class="h-6 bg-gray-200 rounded"></div>
          <div class="h-6 bg-gray-200 rounded"></div>
          <div class="h-6 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>

    <!-- Main content -->
    <div class="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 pt-32 pb-24">
      <!-- Headline -->
      <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.15] max-w-4xl mb-0">
        <span class="text-gray-500">Use </span>
        <em class="not-italic italic text-brand-indigo">Documentation</em>
        <span class="text-gray-500"> that </span>
        <span class="text-brand-orange">builds</span>
        <span class="text-gray-500">,</span>
        <span class="text-brand-orange">improves</span>
        <span class="text-gray-500"> itself, and proves its </span>
        <span class="text-brand-orange">value</span>
        <span class="text-gray-500">.</span>
      </h1>

      <!-- Subheading -->
      <p class="mt-6 text-gray-500 text-base sm:text-lg max-w-2xl leading-relaxed">
        TechniDox automatically generates, scores, and improves your documentation — reducing time from hours to minutes.
      </p>

      <!-- CTA buttons -->
      <div class="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <!-- Primary CTA -->
        <a href="#"
           class="w-full sm:w-auto bg-brand-indigo text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-brand-indigo-light transition-colors inline-flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-indigo">
          Book a Demo
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4"/>
          </svg>
        </a>

        <!-- Secondary CTA -->
        <a href="#"
           class="w-full sm:w-auto text-center border border-gray-400 text-gray-600 font-semibold px-8 py-3.5 rounded-xl hover:border-brand-indigo hover:text-brand-indigo transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-indigo">
          Join Enterprise Waitlist
        </a>
      </div>

      <!-- Feature pills -->
      <div class="mt-8 flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 items-center justify-center">
        <span class="flex items-center gap-2 text-sm text-emerald-600">
          <CheckCircleIcon :size="18" class="text-emerald-500" />
          AI-generated docs in minutes
        </span>
        <span class="flex items-center gap-2 text-sm text-emerald-600">
          <CheckCircleIcon :size="18" class="text-emerald-500" />
          Confidence scoring built in
        </span>
        <span class="flex items-center gap-2 text-sm text-emerald-600">
          <CheckCircleIcon :size="18" class="text-emerald-500" />
          Enterprise-grade compliance
        </span>
      </div>
    </div>
  </section>
</template>
