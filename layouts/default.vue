<template>
  <v-app app>
    <Navigation />
    <v-main>
      <v-container fluid fill-height>
        <Nuxt />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>
<script>
import Navigation from '@/components/Navigation.vue'
import Footer from '@/components/MyFooter.vue'
export default {
  name: 'DefaultLayout',
  components: {
    Navigation,
    Footer,
  },
}
</script>
