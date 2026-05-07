<script setup>
import { useScrollReveal } from '~/composables/useScrollReveal'

useScrollReveal()
</script>

<template>
  <section class="bg-white py-20 px-6" aria-label="Pricing">
    <div class="max-w-[1920px] mx-auto text-center">

      <h2 class="reveal-hidden text-3xl sm:text-4xl font-bold text-brand-indigo mb-12">
        Plans Built For Every Stage Of Growth
      </h2>

      <!-- Price tag illustration -->
      <div class="flex flex-col items-center mb-10" aria-label="Prices start at $499 per month">

        <!-- Tag hook SVG -->
        <svg width="120" height="40" viewBox="0 0 120 40" fill="none" aria-hidden="true">
          <line x1="20" y1="20" x2="100" y2="20" stroke="#9CA3AF" stroke-width="1.5" stroke-linecap="round"/>
          <ellipse cx="110" cy="20" rx="8" ry="6" stroke="#9CA3AF" stroke-width="1.5"/>
        </svg>

        <!-- Scalloped badge -->
        <div class="price-tag-shape w-48 h-48 bg-brand-orange flex items-center justify-center">
          <div class="text-center text-gray-800">
            <p class="text-xs font-semibold mb-1">Prices starts at</p>
            <div class="flex items-start justify-center leading-none">
              <span class="font-bold text-lg mt-1">$</span>
              <span class="font-black text-5xl leading-none">499</span>
            </div>
            <p class="text-sm font-medium mt-1">/month</p>
          </div>
        </div>

      </div>

      <!-- CTA button -->
      <a
        href="#"
        class="inline-flex items-center justify-center bg-brand-indigo text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-brand-indigo-light transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-indigo"
      >
        View Subscription Details
      </a>

    </div>
  </section>
</template>
