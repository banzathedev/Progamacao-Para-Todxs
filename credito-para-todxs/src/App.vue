<template>
  <v-app>
    <v-main>
    <Header />
    <v-container>
      <router-view />
    </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Header from "./components/template/header.vue"

export default {
  components: { Header },
  name: "App",

};
</script>
