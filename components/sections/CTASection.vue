<script setup>
import { useScrollReveal } from '~/composables/useScrollReveal'

useScrollReveal()
</script>

<template>
  <section class="footer-bg py-16 px-6" aria-label="Call to action">
    <div class="max-w-[1920px] mx-auto">
      <div class="relative rounded-2xl overflow-hidden px-8 py-14 text-center" style="background: #3730A3">

        <!-- Decorative circle -->
        <div
          class="absolute top-0 right-0 w-48 h-48 rounded-full border-[40px] border-brand-indigo-light opacity-25 translate-x-1/4 -translate-y-1/4 pointer-events-none"
          aria-hidden="true"
        ></div>

        <h2 class="reveal-hidden relative text-white text-3xl sm:text-4xl font-bold leading-tight mb-4">
          Scale Your Documentation<br class="hidden sm:block"> With Confidence.
        </h2>

        <p class="relative text-white/70 max-w-xl mx-auto text-base leading-relaxed mb-8">
          Join engineering teams that have eliminated documentation debt, onboarded developers faster, and built a community of contributors, all with measurable ROI.
        </p>

        <a
          href="#"
          class="relative border-2 border-white text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-white hover:text-brand-indigo-mid transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#3730A3]"
        >
          Book a Demo Today
        </a>

      </div>
    </div>
  </section>
</template>
