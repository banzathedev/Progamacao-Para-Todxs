<template>
  <v-app>
    <v-main>
      <Header />
      <v-container>
        <transition>
          <router-view />
        </transition>
      </v-container>
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import Header from "./components/template/header.vue";
import Footer from "./components/template/footer.vue";

export default {
  components: { Header, Footer },
  name: "App",
};
</script>
