<script setup>
defineProps({
  label:      { type: String,  default: undefined },
  labelledby: { type: String,  default: undefined },
  constrain:  { type: Boolean, default: true }
})
</script>

<template>
  <section
    :aria-label="labelledby ? undefined : (label || undefined)"
    :aria-labelledby="labelledby || undefined"
  >
    <div v-if="constrain" class="max-w-[1920px] mx-auto">
      <slot />
    </div>
    <slot v-else />
  </section>
</template>
