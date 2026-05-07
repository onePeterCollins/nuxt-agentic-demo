<script setup>
import CheckCircleIcon from '~/components/icons/CheckCircleIcon.vue'
import Button from '~/components/buttons/Button.vue'
import AppNav from '~/components/AppNav.vue'
import AnimateIn from '~/components/AnimateIn.vue'
</script>

<template>
  <section class="scaled relative overflow-hidden min-h-[100svh] md:w-[1920px] md:h-[1080px] flex flex-col content-center items-center justify-center bg-brand-lavender hero-grid-bg" aria-label="Hero">
    <AppNav />
    <!-- Left top floating card -->
    <!-- Layer 1: positioning anchor — no transforms -->
    <div class="absolute z-10 left-16 top-1/4 hidden lg:block pointer-events-none select-none"
         aria-hidden="true">
      <!-- Layer 2: animation -->
      <AnimateIn animation="slide-right" distance="25vw" :duration="1200" :delay="200" eager class="hidden lg:block">
        <!-- Layer 3: visual transforms + scoped class -->
        <div class="left-top-card -translate-x-8 -translate-y-3">
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
      </AnimateIn>
    </div>

    <!-- Left bottom floating card -->
    <!-- Layer 1: positioning anchor — no transforms -->
    <div class="absolute -left-16 top-[35vw] hidden lg:block pointer-events-none select-none" aria-hidden="true">
      <!-- Layer 2: animation -->
      <AnimateIn animation="slide-right" distance="25vw" :duration="1200" :delay="200" eager class="hidden lg:block">
        <!-- Layer 3: display + scoped class -->
        <div class="left-bottom-card inline-flex flex-col items-center">
          <div class="left-bottom-card-inner flex flex-col gap-4 pt-16">
            <!-- Text lines -->
            <div class="h-2 bg-gray-300 rounded-full w-[86px]"></div>
            <div class="h-2 bg-gray-300 rounded-full w-[206px]"></div>
            <div class="h-2 bg-gray-300 rounded-full w-[206px]"></div>
            <div class="h-2 bg-gray-300 rounded-full w-[206px]"></div>
            <div class="h-2 bg-gray-300 rounded-full w-[186px]"></div>
            <div class="h-2 bg-gray-300 rounded-full w-[106px]"></div>
          </div>
        </div>
      </AnimateIn>
    </div>

    <!-- Right top floating card -->
    <!-- Layer 1: positioning anchor — no transforms -->
    <div class="absolute z-10 right-20 top-1/4 hidden lg:block pointer-events-none select-none" aria-hidden="true">
      <!-- Layer 2: animation -->
      <AnimateIn animation="slide-left" distance="30vw" :duration="1200" :delay="200" eager class="hidden lg:block">
        <!-- Layer 3: visual transforms + scoped class -->
        <div class="right-top-card -translate-x-8 translate-y-16">
          <div class="right-top-card-inner flex flex-col gap-4 pt-16">
            <div class="h-2 bg-gray-100 rounded-full w-[70%]"></div>
            <div class="h-2 bg-gray-100 rounded-full w-[50%]"></div>
            <div class="h-2 bg-gray-100 rounded-full w-[70%]"></div>
            <div class="h-2 bg-gray-100 rounded-full w-[100%]"></div>
            <div class="h-7 w-7 bg-brand-lavender rounded-full absolute top-7 -right-4"></div>
            <div class="bubble h-4 w-4 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </AnimateIn>
    </div>

    <!-- Right bottom floating card -->
    <!-- Layer 1: positioning anchor — no transforms -->
    <div class="absolute right-[-22px] top-[464px] w-[274.93px] h-[279.88px] hidden lg:flex items-center justify-center pointer-events-none select-none" aria-hidden="true">
      <!-- Layer 2: animation -->
      <AnimateIn animation="slide-left" distance="30vw" :duration="1200" :delay="200" eager class="hidden lg:flex">
        <!-- Layer 3: visual transforms + scoped class (rotation lives here) -->
        <div class="right-bottom-card">
          <div class="flex-none rotate-15">
            <div class="right-bottom-card-inner bg-white border-[0.8px] border-[#e5e7eb] rounded-[16px] w-[288px] h-[209.879px] pt-[24.788px] px-[25px] pb-[0.8px] drop-shadow-[0px_20px_12.5px_rgba(0,0,0,0.1),0px_8px_5px_rgba(0,0,0,0.1)] flex flex-col">
              <!-- Chart container -->
              <div class="flex gap-[7.6px] h-[128px] items-end w-full">
                <!-- Bar 1: 51px height -->
                <div class="bg-[#e5e7eb] flex-[54_0_0] h-[51px] rounded-t-[4px]"></div>
                <!-- Bar 2: 77px height -->
                <div class="bg-[#e5e7eb] flex-[54_0_0] h-[77px] rounded-t-[4px]"></div>
                <!-- Bar 3: 38px height -->
                <div class="bg-[#e5e7eb] flex-[54_0_0] h-[38px] rounded-t-[4px]"></div>
                <!-- Bar 4: 64px height -->
                <div class="bg-[#e5e7eb] flex-[54_0_0] h-[64px] rounded-t-[4px]"></div>
              </div>
            </div>
          </div>
        </div>
      </AnimateIn>
    </div>

    <!-- Main content -->
    <div class="hero-text w-full px-5 py-20 relative left-0 z-10 flex-1 flex flex-col self-stretch items-center justify-center text-center mx-auto">
      <AnimateIn animation="fade-up" :duration="1500" distance="70vh" eager class="w-full flex flex-col items-center">

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
          <Button variant="solid" :elevated="true" class="w-full sm:w-auto justify-center font-semibold">
            Book a Demo
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M6 3l5 5-5 5"/>
            </svg>
          </Button>

          <!-- Secondary CTA -->
          <Button variant="outlined" class="w-full sm:w-auto justify-center font-semibold">
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

      </AnimateIn>
    </div>
  </section>
</template>

<style scoped>
@media (min-width: 761px) {
  .scaled {
    transform: scale(calc(98.5vw / 1920px));
    transform-origin: top left;
    margin-bottom: calc(98.5vw * 0.5625 - 1080px);
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
    padding-bottom: 7.497px;
    opacity: 0.8;
  }

  .left-bottom-card-inner {
    width: 223px;
    height: 230px;
    transform: rotate(15deg);
    border-radius: 24px;
    border: 0.8px solid #F3F4F6;
    background: #FFF;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.10), 0 1px 2px -1px rgba(0, 0, 0, 0.10);
  }

  .right-top-card {
    width: 256px;
    height: 320px;
    transform: rotate(15deg);
    opacity: 0.5;

  }

  .right-top-card-inner {
    display: flex;
    width: 256px;
    height: 320px;
    padding: 24.8px 25px 0.8px 25px;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 16px;
    border: 0.8px solid #E5E7EB;
    background: #FFF;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.10), 0 8px 10px -6px rgba(0, 0, 0, 0.10);
  }

  .bubble {
    background: #fff;
    border: 1px solid #e5e7eb;
    border-radius: 999px;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.1);
    height: 40px;
    position: absolute;
    right: 20px;
    top: 60px;
    width: 40px;
  }

  .bubble::after {
    background: #f3f4f6;
    border-radius: 50%;
    content: "";
    height: 24px;
    left: 7px;
    position: absolute;
    top: 7px;
    width: 24px;
  }

  .right-bottom-card {
    width: 274.93px;
    height: 279.88px;
    transform: rotate(-5.705deg);
  }

  .right-bottom-card-inner {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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