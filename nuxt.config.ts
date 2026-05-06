export default defineNuxtConfig({
  nitro: { preset: 'static' },

  modules: ['@nuxtjs/tailwindcss', 'nuxt-vuefire'],

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
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800;1,9..40,400;1,9..40,700;1,9..40,800&display=swap'
        }
      ]
    }
  }
})
