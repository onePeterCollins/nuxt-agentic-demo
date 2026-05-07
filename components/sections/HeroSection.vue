<script setup>
import CheckCircleIcon from '~/components/icons/CheckCircleIcon.vue'
import Button from '~/components/buttons/Button.vue'
import AppNav from '~/components/AppNav.vue'
</script>

<template>
  <section class="scaled relative overflow-hidden min-h-[100svh] md:w-[1920px] md:h-[1080px] flex flex-col content-center items-center justify-center bg-brand-lavender hero-grid-bg" aria-label="Hero">
    <AppNav />
    <!-- Left top floating card -->
    <div class="left-top-card absolute left-16 top-1/4 -translate-x-8 -translate-y-3 hidden lg:block pointer-events-none select-none"
         aria-hidden="true">
      <div class="left-top-inner-card border border-gray-200 rounded-[16px] p-[25px] w-[256px]">
        <!-- Container with placeholder content -->
        <div class="h-[300px] flex flex-col gap-4">
          <!-- Avatar circle -->
          <div class="w-16 h-16 bg-gray-100 rounded-full shrink-0"></div>
          
          <!-- Text lines -->
          <div class="space-y-4 pb-4">
            <div class="h-3 bg-gray-100 rounded-full w-[68%]"></div>
            <div class="h-3 bg-gray-100 rounded-full w-[47%]"></div>
          </div>
          
          <!-- More text lines -->
          <div class="space-y-2 pb-4">
            <div class="h-2 bg-gray-100 rounded-full w-[206px]"></div>
            <div class="h-2 bg-gray-100 rounded-full w-[206px]"></div>
            <div class="h-2 bg-gray-100 rounded-full w-[138px]"></div>
          </div>
          
          <!-- Send button -->
          <div class="bg-brand-lavender rounded-[10px] px-[73.5px] py-3 flex items-center justify-center w-[206px]">
            <span class="text-emerald-600 text-xs font-medium">Send</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Left bottom floating card -->
    

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
    <div class="hero-text w-full px-5 py-20 relative left-0 z-10 flex-1 flex flex-col self-stretch items-center justify-center text-center mx-auto">
      <!-- Headline -->
      <h1 class="hero-heading mb-0">
        <em class="italic text-brand-indigo">Documentation</em>
        <span class="text-gray-800"> that </span>
        <span class="text-brand-orange">builds</span>
        <span class="text-gray-800"> itself, </span>
        <span class="text-brand-orange">improves</span>
        <span class="text-gray-800"> itself, and proves its </span>
        <span class="text-brand-orange">value</span>
      </h1>

      <!-- Subheading -->
      <p class="hero-subheading text-gray-600">
        AI-native platform that generates documentation from code, scores quality in real-time, routes low confidence content to expert review, and delivers measurable ROI for enterprise teams.
      </p>

      <!-- CTA buttons -->
      <div class="w-full flex flex-col sm:flex-row gap-8 justify-center mt-10">
        <!-- Primary CTA -->
        <Button variant="solid" :elevated="true" class="w-full sm:w-auto justify-center font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-indigo">
          Book a Demo
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M6 3l5 5-5 5"/>
          </svg>
        </Button>

        <!-- Secondary CTA -->
        <Button variant="outlined" class="w-full sm:w-auto justify-center font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-indigo">
          Join Enterprise Waitlist
        </Button>
      </div>

      <!-- Feature pills -->
      <div class="flex flex-col sm:flex-row flex-wrap gap-8 md:gap-10 mt-8 items-center justify-center">
        <span class="feature-pill-text flex items-center gap-2 text-brand-indigo-light">
          <CheckCircleIcon :size="18" class="text-emerald-500" />
          AI-generated docs in minutes
        </span>
        <span class="feature-pill-text flex items-center gap-2 text-brand-indigo-light">
          <CheckCircleIcon :size="18" class="text-emerald-500" />
          Confidence scoring built in
        </span>
        <span class="feature-pill-text flex items-center gap-2 text-brand-indigo-light">
          <CheckCircleIcon :size="18" class="text-emerald-500" />
          Enterprise-grade compliance
        </span>
      </div>
    </div>
  </section>
</template>

<style scoped>
@media (min-width: 761px) {
  .scaled {
    transform: scale(calc(98.5vw / 1920px));
    transform-origin: top left;
  }

  .hero-text {
    width: 1255px;
    max-width: 1255px;
  }

  .hero-heading {
    font-size: 64px;
    font-weight: 700;
    line-height: 72px;
    width: 1187px;
    margin: 0 auto 16px;
  }

  .hero-subheading {
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    max-width: 1255px;
    margin: 0 auto;
  }

  .left-top-card {
    display: inline-flex;
    padding-bottom: 7.497px;
    flex-direction: column;
    align-items: center;
  }

  .left-top-inner-card {
    display: flex;
    width: 256px;
    transform: rotate(-6deg);
    padding: 24.8px 25px 0.8px 25px;
    flex-direction: column;
    align-items: flex-start;
    background: rgba(255, 255, 255, 0.78);
    opacity: 0.8;
    box-shadow: 0px 20px 25px 0px rgba(0,0,0,0.1),0px 8px 10px 0px rgba(0,0,0,0.1);
  }

  .left-bottom-card {
    display: inline-flex;
    padding-bottom: 7.497px;
    flex-direction: column;
    align-items: center;
    opacity: 0.8;
  }
}

@media (max-width: 760px) {
  .hero-heading .hero-subheading {
    font-family: "DM Sans", sans-serif;
  }

  .hero-heading {
    font-size: clamp(42px, 5.2vw, 64px);
    font-weight: 700;
    line-height: 1.125;
    margin: 0 auto 16px;
  }

  .hero-subheading {
    font-size: clamp(18px, 2vw, 24px);
    font-weight: 600;
    line-height: 1.18;
    margin: 0 auto;
  }

  .feature-pill-text {
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
  }
}
</style>