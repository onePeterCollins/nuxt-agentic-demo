<script setup>
defineProps({
  variant: {
    type: String,
    default: 'solid',
    validator: (v) => ['solid', 'outlined'].includes(v)
  },
  elevated: {
    type: Boolean,
    default: false
  },
  onClick: {
    type: Function,
    default: null
  }
})
</script>

<template>
  <button
    @click="onClick?.()"
    :class="[
      'flex items-center rounded-[8px] px-6 py-3 gap-[10px] font-sans transition-opacity hover:opacity-90',
      variant === 'solid' ? 'btn-solid text-white' : 'btn-outlined text-brand-navy-text',
      elevated && 'btn-elevated'
    ]"
  >
    <slot />
  </button>
</template>

<style scoped>
.btn-solid {
  background: linear-gradient(90deg, #2C20A0 0%, #42389E 100%);
}

.btn-outlined {
  border: 1px solid #42389E;
  background: transparent;
}

.btn-elevated {
  box-shadow: 0 10px 15px -3px rgba(66, 56, 158, 0.20), 0 4px 6px -4px rgba(66, 56, 158, 0.40);
}
</style>
