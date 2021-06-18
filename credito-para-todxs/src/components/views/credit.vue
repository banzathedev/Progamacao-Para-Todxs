<template>
  <v-container>
    <v-sheet>
      <v-container class="" elevation="2" v-if="!submited">
        <v-card-title class="text-h3 titles">
          Peça seu empréstimo abaixo</v-card-title
        >
        <v-divider class="mt-2 mb-2"></v-divider>
        <div class="row pt-3">
          <input
            class="ml-10 blue lighten-5 rounded height: auto; min-width: 164px"
            label="insira a renda mensal(somente numeros ex: 1500)"
            type="number"
            v-model="monthlyIncome"
            @keydown.enter.stop="addIncome"
            placeholder="Insira sua renda mensal"
          />
          <p class="ml-2 pt-5">
            {{ monthlyIncome | dinheiro }} (Aperte Enter para confirmar o valor)
          </p>
        </div>
        <v-container>
          <v-divider class="mt-7 mb-5"></v-divider>
          <p class="text-h5">
            O Valor é calculado da seguinte maneira: 3% da sua renda mensal x
            100
          </p>
        </v-container>
      </v-container>
      <Proposal v-else />
    </v-sheet>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
import Proposal from "./Proposal.vue";

export default {
  components: { Proposal },

  data() {
    return {
      monthlyIncome: null,
      submited: false,
    };
  },
  methods: {
    ...mapActions(["addProposals"]),
    addIncome() {
      const incomes = this.monthlyIncome;
      this.addProposals(incomes);
      this.submited = true;
    },
  },
};
</script>

<style scoped>
.titles {
  justify-content: center;
}
.contentCentered {
  justify-content: center;
}
#inline {
  display: inline;
}
</style>