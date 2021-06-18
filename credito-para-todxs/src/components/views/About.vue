<template>
  <div name="all">
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
          style="padding: 96px 0px; opacity: 0.8"
        >
          <div class="text-center mb-12">
            <h1
              class="text-uppercase text-h5 font-weight-bold mb-2 text-center"
            >
              Sobre esse Projeto
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
              O projeto foi com a finalidade de cumprir o desafio proposto no
              '#Código todXs - Mobile'
            </p>
          </div>
          <div class="container">
            <div class="row">
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
                        height: 150px;
                        min-width: 72px;
                        width: 150px;
                        opacity: 0.9;
                      "
                    >
                      <img src="@/assets/author.jpg" objetc-fit />
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
                      Autor:
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
                      Giovanni Raposo Pinheiro, 23 anos.
                    </p>
                    <p>Programador front end Jr e estudante de programação</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>