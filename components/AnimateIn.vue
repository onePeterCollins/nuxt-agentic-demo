<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'

const props = defineProps({
  animation: { type: String,  default: 'fade-up' },
  duration:  { type: Number,  default: 600 },
  delay:     { type: Number,  default: 0 },
  easing:    { type: String,  default: 'cubic-bezier(0.16, 1, 0.3, 1)' },
  threshold: { type: Number,  default: 0.15 },
  eager:     { type: Boolean, default: false },
  once:      { type: Boolean, default: true },
  distance:  { type: [Number, String], default: null }
})

const PRESETS = {
  'fade':        { opacity: 0, transform: 'none' },
  'fade-up':     { opacity: 0, transform: 'translateY(32px)' },
  'fade-down':   { opacity: 0, transform: 'translateY(-32px)' },
  'fade-left':   { opacity: 0, transform: 'translateX(32px)' },
  'fade-right':  { opacity: 0, transform: 'translateX(-32px)' },
  'slide-up':    { opacity: 1, transform: 'translateY(64px)' },
  'slide-down':  { opacity: 1, transform: 'translateY(-64px)' },
  'slide-left':  { opacity: 1, transform: 'translateX(64px)' },
  'slide-right': { opacity: 1, transform: 'translateX(-64px)' }
}

const el        = ref(null)
const visible   = ref(false)
const isMounted = ref(false)
let   observer  = null

const transition = computed(() =>
  `opacity ${props.duration}ms ${props.easing} ${props.delay}ms,` +
  ` transform ${props.duration}ms ${props.easing} ${props.delay}ms`
)

const currentStyle = computed(() => {
  // During SSR, return no inline style so the static HTML has no hidden state
  // baked in. After onMounted fires on the client, isMounted becomes true and
  // the hidden-state logic below takes over before the observer/eager fires.
  if (!isMounted.value) return {}

  const preset = PRESETS[props.animation] ?? PRESETS['fade-up']
  if (visible.value) {
    return { opacity: 1, transform: 'none', transition: transition.value }
  }
  let transform = preset.transform
  if (props.distance !== null && transform !== 'none') {
    const d = typeof props.distance === 'number' ? `${props.distance}px` : props.distance
    transform = transform.replace(/[\d.]+px/, d)
  }
  return { opacity: preset.opacity, transform, transition: transition.value }
})

onMounted(async () => {
  isMounted.value = true          // apply hidden state
  await nextTick()                // wait for Vue to flush hidden state into the DOM
  void el.value?.offsetHeight     // force layout: records hidden state as transition "from" state

  requestAnimationFrame(() => {   // next frame: browser transitions from recorded hidden state
    if (props.eager) {
      visible.value = true
      return
    }
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visible.value = true
            if (props.once) observer.unobserve(entry.target)
          }
        })
      },
      { threshold: props.threshold, rootMargin: '0px 0px -40px 0px' }
    )
    if (el.value) observer.observe(el.value)
  })
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>

<template>
  <div ref="el" :style="currentStyle">
    <slot />
  </div>
</template>
