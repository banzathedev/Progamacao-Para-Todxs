<template>
  <v-toolbar color="deep-purple lighten-1">
    <v-btn icon to="/">
      <v-icon color="white">mdi-home</v-icon>
    </v-btn>
    <v-toolbar-title class="ml-3 white--text">Titulo da pagina</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn text color="amber lighten-4" to="/Credito-Pessoal"
        >Crédito pessoal</v-btn
      >
      <v-btn text color="amber lighten-4" to="/Sobre">Sobre</v-btn>
      <v-btn text color="amber lighten-4"></v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>


<script>
export default {};
</script>

<style scoped>
</style>