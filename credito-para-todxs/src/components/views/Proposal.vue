<template>
<div>
  
  <v-card>
    <table>
                <thead>
                    <tr>
                        <th>Propostas</th>
                        <th>Emprestimo</th>
                        <th>Parcelas</th>
                        <th>juros(%)</th>
                        <th>Valor da Parcelas</th>

                    </tr>
                </thead>
                <tbody>
                    <tr v-for="proposals in  proposalGet" :key="proposals.name">
                        <td>{{ proposals.name }}</td>
                        <td>{{ proposals.valorEmprestimo }}</td>
                        <td>{{ proposals.parcelas }}</td>
                        <td>{{ proposals.juros }}</td>
                        <td>{{ proposals.valorEmprestimo / proposals.parcelas + (proposals.valorEmprestimo * proposals.juros) | dinheiro }}</td>
                        
                    </tr>
                    
                </tbody>
            </table>
  </v-card>
  <!-- <v-data-table
    :headers="headers"
    :items="proposals"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table > -->
  <v-btn>ta aqui so por enquanto </v-btn>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'


export default {
   
  //  data(){ 
  //    return { 
       
       
  //      headers: [
  //         {
  //           text: 'Propostas: ',
  //           align: 'start',
  //           sortable: false,
  //           value: 'name',
  //         },
  //         { text: 'Emprestimo', value: 'emprestimos' },
  //         { text: 'Parcelas', value: 'parcelas' },
  //         { text: 'Juros ao mes (%)', value: 'juros' },
  //         { text: 'Valor das Parcelas', value: 'valorParcela'}
  //       ],
       
  //    }
     
  //  }, 
   computed: {
     ...mapGetters(['setProposals']),
     

     emprestimoscalculo() {
       const calculopp1 = this.incomes * 0.05
       const calculopp2 = calculopp1 * 100
       return console.log(calculopp2)
     },
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

</style>