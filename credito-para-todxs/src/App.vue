<template>
  <v-app>
    <v-main>
    <Header />
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import header from './components/header.vue';
export default {
  components: { header },
  name: "App",

};
</script>
