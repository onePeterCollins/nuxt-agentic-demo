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
      'flex items-center rounded-[8px] px-6 py-3 gap-[10px] font-sans',
      'transition-all duration-200',
      'active:scale-[0.97]',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-indigo',
      'disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none',
      variant === 'solid'
        ? 'btn-solid text-white'
        : 'btn-outlined text-brand-indigo hover:bg-brand-indigo/10 hover:border-brand-indigo',
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

.btn-solid:hover {
  background: linear-gradient(90deg, #3D2FBB 0%, #5248B8 100%);
}

.btn-solid:active {
  background: linear-gradient(90deg, #231880 0%, #342C8A 100%);
}

.btn-outlined {
  border: 1px solid #42389E;
  background: transparent;
}

.btn-elevated {
  box-shadow: 0 10px 15px -3px rgba(66, 56, 158, 0.20), 0 4px 6px -4px rgba(66, 56, 158, 0.40);
}
</style>
