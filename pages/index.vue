<script setup>
import HeroSection from '~/components/sections/HeroSection.vue'
import BrandCompanySection from '~/components/sections/BrandCompanySection.vue'
import FeaturesSection from '~/components/sections/FeaturesSection.vue'
import CommunitySection from '~/components/sections/CommunitySection.vue'
import ROIDashboard from '~/components/sections/ROIDashboard.vue'
import ComparisonSection from '~/components/sections/ComparisonSection.vue'
import PricingSection from '~/components/sections/PricingSection.vue'
import UseCasesSection from '~/components/sections/UseCasesSection.vue'
import CTASection from '~/components/sections/CTASection.vue'
import AppFooter from '~/components/AppFooter.vue'
</script>

<template>
  <div class="min-h-screen">
    <main>
      <HeroSection />
      <BrandCompanySection />
      <FeaturesSection />
      <CommunitySection />
      <ROIDashboard />
      <ComparisonSection />
      <PricingSection />
      <UseCasesSection />
      <CTASection />
    </main>
    <AppFooter />
  </div>
</template>
