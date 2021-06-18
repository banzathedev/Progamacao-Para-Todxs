import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    income: 1000,
    chosedProposal: [],
    formSended: [],
    proposals: [
      { name: "Proposta em 12 parcelas", valorEmprestimo: 0, parcelas: 12, valorParcela: 0, juros: 0.001, id: 1, },
      { name: "Proposta em 18 parcelas", valorEmprestimo: 0, parcelas: 18, valorParcela: 0, juros: 0.004, id: 2, },
      { name: "Proposta em 24 parcelas", valorEmprestimo: 0, parcelas: 24, valorParcela: 0, juros: 0.008, id: 3, },
      { name: "Proposta em 32 parcelas", valorEmprestimo: 0, parcelas: 32, valorParcela: 0, juros: 0.01, id: 4, },
      { name: "Proposta em 48 parcelas", valorEmprestimo: 0, parcelas: 48, valorParcela: 0, juros: 0.012, id: 5, },
      { name: "proposta em 54 parcelas", valorEmprestimo: 0, parcelas: 54, valorParcela: 0, juros: 0.0135, id: 6, },
      { name: "proposta em 60 parcelas", valorEmprestimo: 0, parcelas: 60, valorParcela: 0, juros: 0.0138, id: 7, },
    ],
  },
  mutations: {
    addProposals(state, payload) {
      state.proposals.forEach(function (change) {
        const a = payload;
        change.valorEmprestimo = a;
      });
    },
    addChosedProposal(state, payload) {
      state.chosedProposal.push(payload);
    },
    addSendedFormData(state, payload) {
      state.formSended.fill(payload);
    },
  },
  actions:{
    addProposals({ commit }, payload) {
      const math1 = payload * 0.03;
      const creditValue = math1 * 100;
      commit('addProposals', creditValue)
    },
    getProposalById({ commit }, payload) {
      const geting = this.state.proposals;
      const result = geting.filter(function (g) {
        return g.id === payload;
      });
      commit('addChosedProposal', result)

    },
    callGetProposalById({ dispatch }, payload) {
      dispatch('getProposalById', payload)
    },
    sendedformData({ commit }, payload) {
      commit('addSendedFormData', payload)
    },
  },
  getters: {
    setProposals(state) {
      return state.proposals;
    },
    setchosedProposal(state) {
      return state.chosedProposal;
    },
  },
}); 