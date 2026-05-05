export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],

  components: [
    { path: '~/components', pathPrefix: false }
  ],

  css: ['~/assets/css/main.css'],

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
