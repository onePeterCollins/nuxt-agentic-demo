<script setup>
import { ref, onMounted } from 'vue'
import AppLogo from '~/components/AppLogo.vue'
import Button from '~/components/buttons/Button.vue'

const menuOpen = ref(false)
const navReady = ref(false)

onMounted(() => {
  requestAnimationFrame(() => requestAnimationFrame(() => {
    navReady.value = true
  }))
})
</script>

<template>
  <header
    id="app-nav"
    class="z-50 md:flex w-full md:w-[1920px] justify-between items-center md:absolute left-0 top-0 px-5 py-6 md:px-[120px] md:py-8"
    :style="navReady
      ? { transition: 'transform 1s cubic-bezier(0.16, 1, 0.3, 1)' }
      : { transform: 'translateY(-110%)', transition: 'transform 1s cubic-bezier(0.16, 1, 0.3, 1)' }"
  >
    <nav class="flex w-full justify-between items-center">
      <AppLogo />

      <!-- Desktop nav links -->
      <ul class="hidden md:flex items-center gap-8 list-none m-0 p-0">
        <li>
          <a href="#"
              class="font-semibold text-brand-indigo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-indigo rounded-sm">
            Home
          </a>
        </li>
        <li>
          <a href="#"
              class="text-gray-500 hover:text-brand-indigo transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-indigo rounded-sm">
            About Us
          </a>
        </li>
        <li>
          <a href="#"
              class="text-gray-500 hover:text-brand-indigo transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-indigo rounded-sm">
            Docs
          </a>
        </li>
        <li>
          <a href="#"
              class="text-gray-500 hover:text-brand-indigo transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-indigo rounded-sm">
            Pricing
          </a>
        </li>
      </ul>

      <!-- Desktop CTA button -->
      <Button variant="solid" class="hidden md:flex text-sm font-medium">
        Get Started
      </Button>

      <!-- Hamburger button -->
      <button
        class="md:hidden p-2 rounded-md text-brand-indigo hover:bg-white/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-indigo"
        aria-label="Toggle navigation menu"
        :aria-expanded="menuOpen"
        @click="menuOpen = !menuOpen"
      >
        <!-- Hamburger icon -->
        <svg v-if="!menuOpen" width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
          <line x1="3" y1="6" x2="19" y2="6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
          <line x1="3" y1="11" x2="19" y2="11" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
          <line x1="3" y1="16" x2="19" y2="16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
        </svg>
        <!-- X icon -->
        <svg v-else width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
          <line x1="4" y1="4" x2="18" y2="18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
          <line x1="18" y1="4" x2="4" y2="18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
        </svg>
      </button>
    </nav>

    <!-- Mobile menu -->
    <Transition name="mobile-menu">
      <div v-if="menuOpen"
           class="md:hidden absolute left-5 w-[calc(96.5vw-2.5rem)] mt-2 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-white/60 overflow-hidden">
        <ul class="flex flex-col py-2 list-none m-0 p-0">
          <li>
            <a href="#"
               class="block px-6 py-3 text-sm font-semibold text-brand-indigo hover:bg-brand-lavender transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-indigo"
               @click="menuOpen = false">
              Home
            </a>
          </li>
          <li>
            <a href="#"
               class="block px-6 py-3 text-sm text-gray-600 hover:bg-brand-lavender transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-indigo"
               @click="menuOpen = false">
              About Us
            </a>
          </li>
          <li>
            <a href="#"
               class="block px-6 py-3 text-sm text-gray-600 hover:bg-brand-lavender transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-indigo"
               @click="menuOpen = false">
              Docs
            </a>
          </li>
          <li>
            <a href="#"
               class="block px-6 py-3 text-sm text-gray-600 hover:bg-brand-lavender transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-indigo"
               @click="menuOpen = false">
              Pricing
            </a>
          </li>
          <li class="px-6 py-3">
            <Button variant="solid" class="w-full justify-center text-sm font-medium" :onClick="() => menuOpen = false">
              Get Started
            </Button>
          </li>
        </ul>
      </div>
    </Transition>
  </header>
</template>
