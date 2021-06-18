<template>
  <v-app>
    <v-main>
      <Header />
       <v-img
 min-height="minHeight"
 :src="require('@/assets/bgdetest.jpg')"
  gradient="to bottom, rgba(11, 28, 61, .9), rgba(0,0,0,.4)"
   class="white--text">
      <v-container>
        <transition>
          <router-view />
        </transition>
      </v-container>
       </v-img>
    </v-main>
      <Footer />
  </v-app>
</template>

<script>
import Header from "./components/template/header.vue";
import Footer from "./components/template/footer.vue";

export default {
  components: { Header, Footer },
  name: "App",
  Computed: {
      minHeight () {
        const height = this.$vuetify.breakpoint.mdAndUp ? '100vh' : '50vh'

        return `calc(${height} - ${this.$vuetify.application.top}px)`
      },
    },
};
</script>
