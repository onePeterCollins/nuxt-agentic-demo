<script setup>
import SectionBase from '~/components/SectionBase.vue'
import AnimateIn from '~/components/AnimateIn.vue'
</script>

<template>
  <SectionBase class="bg-white py-20 px-6" aria-label="Trusted by companies">
    <AnimateIn animation="fade-up" :duration="700">
    <p class="text-[32px] font-semibold text-[#434345] text-center leading-[40px] max-w-4xl mx-auto">
      Trusted by developer teams, open source communities, and enterprise orgs
    </p>
    </AnimateIn>
  </SectionBase>
</template>
