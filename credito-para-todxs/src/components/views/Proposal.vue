<template>
  <div>
    <v-sheet class="elevation-2">
      <v-card-title class="display-1 titles">
        Clique no emprestimo de interesse</v-card-title
      >
      <v-divider class="mt-2 mb-2"></v-divider>
      <v-card-text class="">
        <v-simple-table v-ripple height="300px">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-h6">Propostas</th>
                <th class="text-h6">Valor de empréstimo</th>
                <th class="text-h6">Qntd. Parcelas</th>
                <th class="text-h6">juros(%)</th>
                <th class="text-h6">Valor da Parcelas</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="proposals in proposalGet"
                :key="proposals.name"
                @click.stop="`${passProposal(proposals.id)}`"
              >
                <td class="text-body-1">{{ proposals.name }}</td>
                <td class="text-body-1">
                  {{ proposals.valorEmprestimo | dinheiro }}
                </td>
                <td class="text-body-1">{{ proposals.parcelas }}x</td>
                <td class="text-body-1">{{ proposals.juros * 100 }} %</td>
                <td class="text-body-1">
                  {{
                    (proposals.valorEmprestimo / proposals.parcelas +
                      proposals.valorEmprestimo * proposals.juros)
                      | dinheiro
                  }}
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <v-divider class="mt-10 mb-2"></v-divider>

        <div
          class="v-sheet theme--light red lighten-4 rounded-0 mt-15 elevation-2"
          style="padding: 96px 0px; opacity: 0.8"
        >
          <div class="text-center mb-12">
            <h1
              class="text-uppercase text-h5 font-weight-bold mb-2 text-center"
            >
              Não encontrou o que procurava ?
            </h1>
            <div
              class="v-responsive primary mx-auto mb-6"
              style="max-width: 28px"
            >
              <div class="v-responsive">
                <hr
                  role="separator"
                  aria-orientation="horizontal"
                  class="v-divider theme--light"
                />
              </div>
            </div>
            <p
              class="
                text-body-1
                mx-auto
                grey--text
                text--darken-1 text-center
                mb-10
              "
              style="max-width: 700px"
            >
              Nesse Caso Estamos aqui para Ajudar, nosso objetivo é que você
              conquiste seu sonho !!
            </p>
          </div>
          <div class="container">
            <div class="d-none d-lg-block row">
              <div class="col-md-6 col-12">
                <div class="pt-2 mb-8 d-flex">
                  <div class="d-inline-flex mb-3 align-self-start">
                    <div
                      class="v-avatar"
                      style="
                        height: 84px;
                        min-width: 84px;
                        width: 84px;
                        opacity: 0;
                        margin: -6px 0px 0px -6px;
                      "
                    ></div>
                    <div
                      class="v-avatar white"
                      style="
                        height: 72px;
                        min-width: 72px;
                        width: 72px;
                        opacity: 0.9;
                      "
                    >
                      <i
                        aria-hidden="true"
                        class="
                          v-icon
                          notranslate
                          mdi mdi-information
                          theme--light
                        "
                        style="font-size: 36px"
                      >
                      </i>
                    </div>
                  </div>
                  <div class="ml-6">
                    <h3
                      class="
                        text-uppercase text-h6
                        font-weight-bold
                        mb-3
                        text-left
                      "
                    >
                      Entre em contato:
                    </h3>

                    <ul>
                      <li class="text-subtitle-1 text--darken-1 text-left">
                        Email: contato@credptodxs.com.br
                      </li>
                      <li class="text-subtitle-1 text--darken-1 text-left">
                        Telefone: 0800-6060
                      </li>
                      <li class="text-subtitle-1 text--darken-1 text-left">
                        whatsApp: (11) 9 9988-9988
                      </li>
                      <li class="text-subtitle-1 text--darken-1">
                        Endereço: Rua Esta <a> Rua </a> n*
                      </li>
                    </ul>
                  </div>
                  <div class="col-md-6 col-12">
                    <div>
                      <img id="imgStyle" src="@/assets/mobile.png" />
                    </div>
                    <div class="pt-2 mb-8 d-flex"></div>
                  </div>
                </div>
              </div>
            </div>

            <div class="d-lg-none row">
              <v-col class="mr-10 ml-5" md="6" sm="3" xs="2">
                <div class="pa-2 ml-15">
                  <div
                    class="v-avatar white"
                    style="
                      height: 72px;
                      min-width: 72px;
                      width: 72px;
                      opacity: 0.9;
                    "
                  >
                    <i
                      aria-hidden="true"
                      class="
                        v-icon
                        notranslate
                        mdi mdi-information
                        theme--light
                      "
                      style="font-size: 36px"
                    >
                    </i>
                  </div>
                </div>
                <div>
                  <h3
                    class="
                      text-uppercase text-h6
                      font-weight-bold
                      mb-3
                      text-left
                    "
                  >
                    Entre em contato:
                  </h3>

                  <ul>
                    <li class="text-subtitle-1 text--darken-1 text-left">
                      Email: contato@credptodxs.com.br
                    </li>
                    <li class="text-subtitle-1 text--darken-1 text-left">
                      Telefone: 0800-6060
                    </li>
                    <li class="text-subtitle-1 text--darken-1 text-left">
                      whatsApp: (11) 9 9988-9988
                    </li>
                    <li class="text-subtitle-1 text--darken-1">
                      Endereço: Rua Esta <a> Rua </a> n*
                    </li>
                  </ul>
                </div>
              </v-col>
            </div>
          </div>
        </div>
      </v-card-text>
    </v-sheet>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["callGetProposalById"]),

    passProposal(number) {
      this.callGetProposalById(number);
      this.$router.push("/Contratacao-Form");
    },
    goToBuy() {
      return this.$router.push("/Contratacao-Form");
    },
  },

  computed: {
    ...mapGetters(["setProposals"]),

    proposalGet() {
      return this.setProposals;
    },
  },
  created() {
    this.proposalGet;
  },
};
</script>

<style>
.titles {
  justify-content: center;
}

.header {
  font-size: 4rem;
}
.templates {
  width: 100%;
  height: 100%;
}
#imgStyle {
  width: 150px;
  height: 220px;
}
</style>