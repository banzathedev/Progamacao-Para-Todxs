<template>
  <v-app>
    <v-main>
      <Header />
      <v-img
        id="img"
        min-height="minHeight"
        :src="require('@/assets/AplicationBackGround.jpeg')"
        class="white--text"
      >
        <v-container>
          <transition name="slide" mode="out-in">
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
    minHeight() {
      const height = this.$vuetify.breakpoint.mdAndUp ? "100vh" : "50vh";

      return `calc(${height} - ${this.$vuetify.application.top}px)`;
    },
  },
};
</script>

<style>
@keyframes slide-in {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0px);
    opacity: 1;
  }
  to {
    transform: translateY(-30px);
    opacity: 0;
  }
}

.slide-enter-active {
  animation: slide-in 0.3s ease;
}

.slide-leave-active {
  animation: slide-out 0.3s ease;
}

#img {
  height: 2000px;
}
</style>