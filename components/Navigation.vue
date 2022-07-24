<template>
  <div>
    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list>
        <v-list-item>
          <v-list-item-title> Schools </v-list-item-title>
        </v-list-item>
      </v-list>

      <v-list dense>
        <v-list-item
          v-for="([text, link], i) in items"
          :key="i"
          link
          @click="$vuetify.goTo(link)"
        >
          <v-list-item-content>
            <v-list-item-title class="subtitle-1">
              {{ text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app flat dark class="px-15">
      <v-toolbar-title>
        <v-icon> mdi-account-school-outline </v-icon>
        <span class="ml-2"> Blended Learning Readiness </span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon
        v-if="isXs"
        class="mr-4"
        @click.stop="drawer = !drawer"
      />
      <div v-else>
        <v-btn to="/" text>
          <span class="text-capitalize font-weight-bold">Home</span>
        </v-btn>
        <v-btn to="/schools" text>
          <span class="text-capitalize font-weight-bold">Schools</span>
        </v-btn>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'NavigationComponent',
  data: () => ({
    drawer: null,
    isXs: false,
    items: [
      ['Home', '#home'],
      ['About', '#about'],
    ],
  }),
  watch: {
    isXs(value) {
      if (!value) {
        if (this.drawer) {
          this.drawer = false
        }
      }
    },
  },
  mounted() {
    this.onResize()
    window.addEventListener('resize', this.onResize, { passive: true })
  },
  methods: {
    onResize() {
      this.isXs = window.innerWidth < 850
    },
  },
}
</script>
<style lang="scss" scoped>
.v-toolbar {
  transition: 0.6s;
}
.expand {
  height: 80px !important;
  padding-top: 10px;
}
</style>
