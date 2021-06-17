<template>
<div class="templates ">
  <v-card class="elevation-2">
    <v-card-title class="display-1 titles"> Clique no emprestimo de interesse</v-card-title>
    <v-card-text class="">
  <v-simple-table v-ripple height="300px">
    <template v-slot:default>
                <thead>
                    <tr>
                        <th class="text-h6">Propostas</th>
                        <th class="text-h6">Emprestimo</th>
                        <th class="text-h6">Parcelas</th>
                        <th class="text-h6">juros(%)</th>
                        <th class="text-h6" >Valor da Parcelas</th>

                    </tr>
                </thead>
                <tbody >
                  
                    <tr v-for="proposals in  proposalGet" :key="proposals.name" @click.stop="`${passProposal(proposals.id)}`">
                        <td class="text-body-1">{{ proposals.name }}</td>
                        <td class="text-body-1">{{ proposals.valorEmprestimo | dinheiro }}</td>
                        <td class="text-body-1">{{ proposals.parcelas }}</td>
                        <td class="text-body-1">{{ proposals.juros * 100 }} %</td>
                        <td class="text-body-1">{{ proposals.valorEmprestimo / proposals.parcelas + (proposals.valorEmprestimo * proposals.juros) | dinheiro }}</td>
                        
                    </tr>
                </tbody>
          
    </template>
  </v-simple-table>
        </v-card-text>
  </v-card>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'



export default { 
  methods: {
    ...mapActions(['callGetProposalById']),

    passProposal(number) { 
        this.callGetProposalById(number)
          this.$router.push("/Contratacao-Form")
      
        
    },
    goToBuy() {
      return this.$router.push("/Contratacao-Form")
    }
  },

   computed: {
     ...mapGetters(['setProposals']),
     
     proposalGet() {
       return this.setProposals
     },
   },
   created() {
     this.proposalGet
   }
   
}
</script>

<style>
  .titles {
    justify-content: center;
  }

  .header{
    font-size: 4rem;
  }
  .templates {
    width: 100%;
  }
</style>