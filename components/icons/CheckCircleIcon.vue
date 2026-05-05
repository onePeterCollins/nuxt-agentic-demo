<script setup>
defineProps({
  size: { type: Number, default: 16 }
})
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
    style="flex-shrink: 0;"
  >
    <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-width="1.4"/>
    <path
      d="M5 8.5l2 2 4-4.5"
      stroke="currentColor"
      stroke-width="1.4"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
