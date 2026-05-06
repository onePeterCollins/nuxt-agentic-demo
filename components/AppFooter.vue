<script setup>
import AppLogo from '~/components/AppLogo.vue'
import LinkedInIcon from '~/components/icons/LinkedInIcon.vue'
import FacebookIcon from '~/components/icons/FacebookIcon.vue'
import InstagramIcon from '~/components/icons/InstagramIcon.vue'

const linkGroups = [
  {
    heading: 'Company',
    links: ['About Us', 'Careers', 'Blog', 'Partnerships']
  },
  {
    heading: 'Resources',
    links: ['Help Center', 'Fees & Limits', 'System Status']
  },
  {
    heading: 'Legal & Compliance',
    links: ['Terms of Service', 'Privacy Policy', 'Risk Disclosure', 'Cookie Policy']
  }
]
</script>

<template>
  <footer class="footer-bg px-6 pt-6 pb-12">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        <!-- Column 1: Logo + tagline + social -->
        <div class="sm:col-span-2 lg:col-span-1">
          <AppLogo />
          <p class="text-gray-500 text-sm leading-relaxed max-w-xs mt-4 mb-5">
            AI-powered documentation that generates, scores, and improves itself — reducing documentation time from hours to minutes.
          </p>
          <div class="flex items-center gap-3">
            <a
              href="#"
              aria-label="LinkedIn"
              class="w-9 h-9 min-w-[44px] min-h-[44px] rounded-lg bg-brand-indigo text-white flex items-center justify-center hover:bg-brand-indigo-light transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-indigo"
            >
              <LinkedInIcon />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              class="w-9 h-9 min-w-[44px] min-h-[44px] rounded-lg bg-brand-indigo text-white flex items-center justify-center hover:bg-brand-indigo-light transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-indigo"
            >
              <FacebookIcon />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              class="w-9 h-9 min-w-[44px] min-h-[44px] rounded-lg bg-brand-indigo text-white flex items-center justify-center hover:bg-brand-indigo-light transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-indigo"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>

        <!-- Columns 2–4: Link groups -->
        <div
          v-for="group in linkGroups"
          :key="group.heading"
        >
          <h3 class="text-gray-800 font-bold text-sm mb-4">{{ group.heading }}</h3>
          <ul class="space-y-2.5">
            <li v-for="link in group.links" :key="link">
              <a
                href="#"
                class="text-gray-500 text-sm hover:text-brand-indigo transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-indigo rounded-sm"
              >{{ link }}</a>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </footer>
</template>
