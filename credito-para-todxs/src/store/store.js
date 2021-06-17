import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    income: 1000,
    chosedProposal: [], 
    formSended: [],
    proposals: [
      { name: 'Proposta em 3 parcelas', valorEmprestimo: 0, parcelas: 3.0, valorParcela: 0, juros: 0.002, id: 1,},
      { name: 'Proposta em 6 parcelas', valorEmprestimo: 0, parcelas: 6.0, valorParcela: 0, juros: 0.004, id: 2, },
      { name: 'Proposta em 12 parcelas', valorEmprestimo: 0, parcelas: 12.0, valorParcela: 0, juros: 0.008, id: 3,},
      { name: 'Proposta em 18 parcelas', valorEmprestimo: 0, parcelas: 18, valorParcela: 0, juros: 0.01, id: 4,},
      { name: 'proposta em 24 parcelas', valorEmprestimo: 0, parcelas: 24, valorParcela: 0, juros: 0.02, id: 5,},

    ],
  },
  mutations: {
    addProposals(state, payload) {
      console.log('payload recebida', payload) //tirar
      state.proposals.forEach(function (change){
        const a = payload 
        change.valorEmprestimo = a
        console.log('payload tranformada em change', change) //tirar
        
      })
    },
    addChosedProposal(state, payload) {
      console.log('objeto recebido no adicionador', payload) //tirar
      state.chosedProposal.push(payload)
      console.log('objeto colocado no lugar',) //tirar
      console.log('objeto adicionado ',state.chosedProposal) //tirar
    },
    addSendedFormData(state, payload) {
      console.log('objeto do recebido no adicionador', payload) //tirar
      state.formSended.fill(payload)
      console.log('data do form no lugar') //tirar
      console.log('data form adicionada', state.formSended) //tirar

    },
    
  },
  actions:
    
  {
    addProposals({commit}, payload) {
      const math1 = payload * 0.05
      const creditValue = math1 * 100
      console.log('addproposal foi chamada', creditValue) //tirar
    commit('addProposals', creditValue)
    },
    getProposalById({commit}, payload) {
      console.log('id chegou no buscador', payload); //tirar
      const geting = this.state.proposals
      const result = geting.filter(function(g){
        return g.id === payload
      })
      
      console.log('objeto encontrado com o id', result) //tirar
      commit('addChosedProposal', result)

    },
    callGetProposalById({dispatch}, payload) {
      console.log('id recebido',payload ) //tirar
     dispatch('getProposalById', payload) 
    },
    sendedformData({commit}, payload) {
      console.log('data do forme recebida com sucesso na store', payload) //tirar
      commit('addSendedFormData', payload)
    },
   
  },
  getters: {
    setProposals(state) {
      return state.proposals
    },
    setchosedProposal(state) {
      return state.chosedProposal
    }
  }
  
});

//TODO lembrar de remover os console logs dps 
