<template>
  <div name="all">
    <v-divider class="mt-15 mb-15 blue-grey lighten-1"></v-divider>
    <v-sheet class="indigo lighten-4">
      <div name="top">
        <v-container class="fill-height fill-width px-4 py-12">
          <v-responsive
            class="d-flex align-center mx-auto"
            height="100%"
            max-width="700"
            width="100%"
          >
            <template>
              <div
                class="v-responsive d-flex align-center mx-auto"
                style="height: 100%; max-width: 700px; width: 100%"
              >
                <div class="v-responsive__content">
                  <h1
                    class="
                      text-h4
                      font-weight-regular
                      mb-4
                      text-left
                      black--text
                    "
                  >
                    Crédito Para Todxs
                  </h1>
                  <h1
                    class="
                      text-h6
                      font-weight-medium
                      mb-4
                      text-left
                      black--text
                    "
                  >
                    Ajudamos Todxs a conquistar seus sonhos
                  </h1>
                  <p
                    class="
                      text-body-1
                      grey--text
                      text--darken-2 text-left
                      mb-10
                    "
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repudiandae nobis neque aspernatur in quas iure id aliquid,
                    esse debitis, quibusdam mollitia! Quia ea expedita magnam
                    totam, earum omnis et perspiciatis?
                  </p>
                  <div class="d-flex flex-wrap align-center">
                    <button
                      type="button"
                      class="
                        font-weight-bold
                        v-btn v-btn--has-bg v-btn--tile
                        theme--dark
                        v-size--x-large
                        primary
                      "
                      style="min-width: 164px"
                      @click="goToCredit"
                    >
                      <span class="v-btn__content"
                        >Solicite seu Emprestimo</span
                      >
                    </button>
                    <span class="font-weight-bold ml-6 mr-4 my-4">ou</span>
                    <button
                      type="button"
                      class="
                        font-weight-bold
                        pa-1
                        v-btn v-btn--text v-btn--tile
                        theme--dark
                        v-size--x-large
                        primary--text
                      "
                      height="auto"
                      text=""
                      style="height: auto; min-width: 164px"
                      @click="goToAbout"
                    >
                      <span class="v-btn__content"> Saiba mais sobre nós </span>
                    </button>
                  </div>
                </div>
              </div>
            </template>
          </v-responsive>
        </v-container>
      </div>
    </v-sheet>
    <v-divider class="mt-15 mb-5 blue-grey lighten-1"></v-divider>
    <div name="Sheet">
      <template>
        <div
          class="
            v-sheet
            theme--light
            indigo
            lighten-4
            rounded-0
            mt-15
            elevation-2
          "
          style="padding: 96px 0px; opacity: 1"
        >
          <div class="text-center mb-12">
            <h1
              class="text-uppercase text-h5 font-weight-bold mb-2 text-center"
            >
              Slot For Features Company Wants
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
              in! Asperiores, impedit libero. Veniam rerum saepe unde nihil
              possimus quibusdam esse accusamus mollitia magni fuga.
            </p>
          </div>
          <div class="container">
            <div name="card slots" class="row">
              <div name="lg right content" class="col-lg-6 col-12">
                <v-col name="informations" class="mr-10" md="6" sm="3" xs="2">
                  <div class="pa-2 ml-5">
                    <div class="pt-2 mb-8 d-flex">
                      <div class="d-inline-flex mb-3 align-self-start">
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
                          Informations
                        </h3>
                        <p
                          class="
                            text-body-1
                            mx-auto
                            black--text
                            text--darken-1 text-left
                            mb-0
                          "
                          style="max-width: 700px"
                        >
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Veritatis illum veniam cum dolores ratione
                          commodi beatae quas maxime, laboriosam excepturi
                          solut!
                        </p>
                      </div>
                    </div>
                  </div>
                </v-col>
                <v-col name="contact us" md="6" sm="3" xs="2">
                  <div class="pa-2 ml-5">
                    <div class="pt-2 mb-8 d-flex">
                      <div class="d-inline-flex mb-3 align-self-start">
                        <div
                          class="v-avatar white"
                          style="height: 72px; min-width: 72px; width: 72px"
                        >
                          <i
                            aria-hidden="true"
                            class="
                              v-icon
                              notranslate
                              mdi mdi-cellphone
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
                          Contact us
                        </h3>
                        <p
                          class="
                            text-body-1
                            mx-auto
                            grey--text
                            text--darken-1 text-left
                            mb-0
                          "
                          style="max-width: 700px"
                        >
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Veritatis illum veniam cum dolores ratione
                          commodi beatae quas maxime, laboriosam excepturi
                          solut!
                        </p>
                      </div>
                    </div>
                  </div>
                </v-col>
                <v-col name="documents" class="mr-10" md="6" sm="3" xs="2">
                  <div class="pa-2 ml-5">
                    <div class="pt-2 mb-8 d-flex">
                      <div class="d-inline-flex mb-3 align-self-start">
                        <div
                          class="v-avatar primary"
                          style="height: 72px; min-width: 72px; width: 72px"
                        >
                          <i
                            aria-hidden="true"
                            class="
                              v-icon
                              notranslate
                              mdi mdi-file-document-multiple-outline
                              theme--dark
                            "
                            dark="true"
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
                          Documents You Need
                        </h3>
                        <p
                          class="
                            text-body-1
                            mx-auto
                            grey--text
                            text--darken-1 text-left
                            mb-0
                          "
                          style="max-width: 700px"
                        >
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Veritatis illum veniam cum dolores ratione
                          commodi beatae quas maxime, laboriosam excepturi
                          solut!
                        </p>
                      </div>
                    </div>
                  </div>
                </v-col>
              </div>
              <div name="lg left content" class="col-lg-6 col-12">
                <v-col name="More Info" class="mr-10" md="6" sm="3" xs="2">
                  <div class="pa-2 ml-5">
                    <div class="pt-2 mb-8 d-flex">
                      <div class="d-inline-flex mb-3 align-self-start">
                        <div
                          class="v-avatar white"
                          style="height: 72px; min-width: 72px; width: 72px"
                        >
                          <i
                            aria-hidden="true"
                            class="
                              v-icon
                              notranslate
                              mdi mdi-image-size-select-actual
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
                          More Informations
                        </h3>
                        <p
                          class="
                            text-body-1
                            mx-auto
                            grey--text
                            text--darken-1 text-left
                            mb-0
                          "
                          style="max-width: 700px"
                        >
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Veritatis illum veniam cum dolores ratione
                          commodi beatae quas maxime, laboriosam excepturi
                          solut!
                        </p>
                      </div>
                    </div>
                  </div>
                </v-col>
                <v-col
                  name="Credit Opitions"
                  class="mr-10"
                  md="6"
                  sm="3"
                  xs="2"
                >
                  <div class="pa-2 ml-5">
                    <div class="pt-2 mb-8 d-flex">
                      <div class="d-inline-flex mb-3 align-self-start">
                        <div
                          class="v-avatar white"
                          style="height: 72px; min-width: 72px; width: 72px"
                        >
                          <i
                            aria-hidden="true"
                            class="
                              v-icon
                              notranslate
                              mdi mdi-cash-multiple
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
                          Best Credit Options
                        </h3>
                        <p
                          class="
                            text-body-1
                            mx-auto
                            grey--text
                            text--darken-1 text-left
                            mb-0
                          "
                          style="max-width: 700px"
                        >
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Veritatis illum veniam cum dolores ratione
                          commodi beatae quas maxime, laboriosam excepturi
                          solut!
                        </p>
                      </div>
                    </div>
                  </div>
                </v-col>
                <v-col name="Suport" class="mr-10" md="6" sm="3" xs="2">
                  <div class="pa-2 ml-5">
                    <div class="pt-2 mb-8 d-flex">
                      <div class="d-inline-flex mb-3 align-self-start">
                        <div
                          class="v-avatar white"
                          style="height: 72px; min-width: 72px; width: 72px"
                        >
                          <i
                            aria-hidden="true"
                            class="
                              v-icon
                              notranslate
                              mdi mdi-help-circle-outline
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
                          24/7 Support
                        </h3>
                        <p
                          class="
                            text-body-1
                            mx-auto
                            grey--text
                            text--darken-1 text-left
                            mb-0
                          "
                          style="max-width: 700px"
                        >
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Veritatis illum veniam cum dolores ratione
                          commodi beatae quas maxime, laboriosam excepturi
                          solut!
                        </p>
                      </div>
                    </div>
                  </div>
                </v-col>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToCredit() {
      this.$router.push("/Credito-Pessoal");
    },
    goToAbout() {
      this.$router.push("/Sobre");
    },
  },
};
</script>

<style>
.imgStyle {
  width: 30%;
  height: 30%;
}
</style>