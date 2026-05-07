import { onMounted, onUnmounted } from 'vue'

export const useScrollReveal = () => {
  onMounted(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible')
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    // Observe all elements with reveal-hidden class
    const revealElements = document.querySelectorAll('.reveal-hidden')
    revealElements.forEach((el) => {
      observer.observe(el)
    })

    onUnmounted(() => {
      observer.disconnect()
    })
  })
}
