<template>
  <v-footer dark padless>
    <v-card
      flat
      tile
      class="deep-purple lighten-1 white--text text-center"
      width="100%"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
          href="https://www.linkedin.com/in/giovanni-raposo-pinheiro/"
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>
      <v-card-text class="white--text pt-0 text-h6">
        Site produzido para o programa #Código para todXs
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} —
        <span
          >BanzaThe<strong>Dev</strong> <v-icon>mdi-heart-circle</v-icon>
        </span>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>

<style>
.footerWidth {
  width: 100%;
}
</style>