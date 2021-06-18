<template>
  <div>
    <v-sheet>
      <h1>Informações Para Cadastro</h1>
      <v-divider class="mt-5 mb-5"></v-divider>
      <v-card class="ml-5 mr-5 blue-grey lighten-4 br-3">
        <div class="mt-5">
          <form @submit.prevent="submit">
            <div>
              <v-text-field
                v-model="formInformation.name"
                label="Nome Completo"
                hint="ex: João Aparecido da Silva"
                required
              ></v-text-field>
              <v-text-field
                v-model="formInformation.cpf"
                label="Cpf"
                hint="Siga o padrão ex: 12312312300 (cpf deve ser inserido sem espaçamento ou caracteres)"
                type="number"
                required
              ></v-text-field>
              <v-text-field
                v-model="formInformation.phoneNumber"
                label="Numero de contato"
                hint="Siga o padrão ex: 11 9 99009900 (Sem espaços e apenas numeros)"
                type="number"
                required
              ></v-text-field>
              <v-text-field
                v-model="formInformation.email"
                label="E-mail"
                hint="Siga o Padrão ex: MeuEmail@meuemail.com.br"
                required
              ></v-text-field>
            </div>
            <br />
            <div>
              <p
                v-for="chosedProposal in proposalForDialog"
                :key="chosedProposal.name"
              >
                selecionado: {{ chosedProposal.name }}
              </p>
              <v-checkbox required color="green">
                <template v-slot:label>
                  <div>
                    Do you accept the
                    <a href="#">terms</a>
                    and
                    <a href="#">conditions?</a>
                  </div>
                </template>
              </v-checkbox>
            </div>
            <div>
              <v-dialog
                transition="dialog-bottom-transition"
                max-height="50%"
                max-width="50%"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn v-bind="attrs" v-on="on" class="mr-4"> revisar </v-btn>
                </template>
                <template v-slot:default="dialog">
                  <v-card>
                    <v-toolbar color="primary" dark>Revisão de dados</v-toolbar>
                    <v-card-text>
                      <div>
                        <v-card-text>
                          <v-card-title class="titles mb-3"
                            >Informações pessoais</v-card-title
                          >
                          <v-simple-table height="150px">
                            <thead>
                              <tr>
                                <th class="text-h6">Nome</th>
                                <th class="text-h6">Numero para Contato</th>
                                <th class="text-h6">Cpf</th>
                                <th class="text-h6">Email</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td class="text-body-1">
                                  {{ formInformation.name }}
                                </td>
                                <td class="text-body-1">
                                  {{ formInformation.phoneNumber }}
                                </td>
                                <td class="text-body-1">
                                  {{ formInformation.cpf }}
                                </td>
                                <td class="text-body-1">
                                  {{ formInformation.email }}
                                </td>
                              </tr>
                            </tbody>
                          </v-simple-table>
                        </v-card-text>
                        <v-card-text
                          v-for="chosedProposal in proposalForDialog"
                          :key="chosedProposal.name"
                        >
                          <v-card-title class="titles mb-4"
                            >Informações do Emprestimo</v-card-title
                          >
                          <v-simple-table height="150px">
                            <thead>
                              <tr>
                                <th class="text-h6">Proposta escolhida</th>
                                <th class="text-h6">Valor de empréstimo</th>
                                <th class="text-h6">Qtnd. Parcelas</th>
                                <th class="text-h6">Juros Ao Mes</th>
                                <th class="text-h6">Valor das Parcelas</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td class="text-body-1">
                                  {{ chosedProposal.name }}
                                </td>
                                <td class="text-body-1">
                                  {{
                                    chosedProposal.valorEmprestimo | dinheiro
                                  }}
                                </td>
                                <td class="text-body-1">
                                  {{ chosedProposal.parcelas }}x
                                </td>
                                <td class="text-body-1">
                                  {{ chosedProposal.juros * 100 }}%
                                </td>
                                <td class="text-body-1">
                                  {{
                                    (chosedProposal.valorEmprestimo /
                                      chosedProposal.parcelas +
                                      chosedProposal.valorEmprestimo *
                                        chosedProposal.juros)
                                      | dinheiro
                                  }}
                                </td>
                              </tr>
                            </tbody>
                          </v-simple-table>
                        </v-card-text>
                      </div>
                    </v-card-text>
                    <v-footer>
                      <v-card-actions class="justify-end">
                        <v-btn text @click="dialog.value = false"
                          >voltar a tabela</v-btn
                        >
                        <v-btn
                          text
                          @click="dialog.value = false"
                          @mousedown="revise"
                          >confirmar</v-btn
                        >
                      </v-card-actions>
                    </v-footer>
                  </v-card>
                </template>
              </v-dialog>
              <v-btn @click.stop="sendform" :disabled="disable">
                Contratar
              </v-btn>
            </div>
          </form>
        </div>
      </v-card>
      <v-divider class="mt-5 mb-5"></v-divider>
      <div>
        <v-divider></v-divider>
        <v-alert
          @mousedown="goToHome"
          :value="alert"
          dismissible
          border="bottom"
          colored-border
          type="info"
          elevation="2"
          icon="mdi-home"
          transition="scale-transition"
          hint="burrão"
        >
          <p class="p-alerts">
            Um email foi enviado para voce confirmando sua escolha, em breve um
            de nossos atendentes entrará em contato por meio dos dados
            fornecidos
          </p>
          <p class="p-alerts2">pressione X para retornar a pagina inícial</p>
        </v-alert>
      </div>
    </v-sheet>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data: () => ({
    formInformation: {
      cpf: "",
      name: "",
      phoneNumber: "",
      email: "",
    },
    disable: true,
    //checkbox: null,
    alert: false,
  }),

  methods: {
    ...mapActions(["sendedformData"]),

    sendform() {
      const formData = this.formInformation;
      this.sendedformData(formData);
      this.alert = true;
    },
    revise() {
      this.disable = false;
      return console.log("chamou revisão");
    },
    goToHome() {
      return this.$router.push("/");
    },
  },
  computed: {
    ...mapGetters(["setchosedProposal"]),

    proposalForDialog() {
      return this.setchosedProposal[0];
    },
  },
  created() {
    this.proposalForDialog;
  },
};
</script>

<style>
.titles {
  justify-content: center;
  font-size: 2rem;
  font-weight: 400;
}
.p-alerts {
  justify-content: flex-start;
  font-size: 1.5rem;
  font-weight: 400;
}
.p-alerts2 {
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 600;
}
</style>