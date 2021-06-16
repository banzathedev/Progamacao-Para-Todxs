<template>
  <v-container>
    
    <v-card xs-3 md-6 lg-12 elevation="2" v-if="!submited">
      <v-card-title> Credito Pessoal</v-card-title>
      <v-container class="d-flex flex-column">
        <v-card-text
          >Apartir da sua renda mensal iremos calcular os emprestimos
          possiveis </v-card-text
        >

        <input
          class="ml-2"
          label="insira a renda mensal(somente numeros ex: 1500)"
          type="number"
          hide-details="auto"
          v-model="monthlyIncome"
        />
        <v-container>
        <v-card-text>{{ monthlyIncome | dinheiro }} (Aperte Enter para confirmar o valor)</v-card-text>
        <v-btn @click.stop="addIncome">enviar</v-btn>

        </v-container>
      </v-container>
    </v-card>
    <Proposal v-else/> 
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
import Proposal from './Proposal.vue'


export default {
  components: { Proposal, },
  
  data() {
    return {
      monthlyIncome: 0,
      submited: false
      
    };
  },
  methods: {
        ...mapActions(['addProposals']),
        addIncome() {
            const incomes = this.monthlyIncome
            this.addProposals(incomes)
              this.submited = true
            
        }
  }

   
  
  
};
</script>

<style>
</style>