export default defineNuxtConfig({
  nitro: { preset: 'static' },

  modules: ['@nuxtjs/tailwindcss', 'nuxt-vuefire', '@nuxt/image'],

  components: [
    { path: '~/components', pathPrefix: false }
  ],

  css: ['~/assets/css/main.css'],

  vuefire: {
    config: {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID,
      measurementId: process.env.FIREBASE_MEASUREMENT_ID
    },
    auth: false  // disable server-side Firebase Auth for static site
  },

  app: {
    head: {
      title: 'TechniDox — Documentation that builds itself',
      meta: [
        {
          name: 'description',
          content:
            'TechniDox uses AI to automatically generate, score, and improve your documentation — reducing documentation time from hours to minutes.'
        }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,100..800;1,100..800&family=Inter:wght@100..900&family=Merriweather+Sans:wght@300..800&family=Montserrat:wght@100..900&family=SUSE:wght@100..800&display=swap'
        }
      ]
    }
  }
})
