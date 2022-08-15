<template>
  <v-container>
    <v-row class="d-flex pa-2 mt-6 mb-6">
      <h2>Dashboard</h2>
    </v-row>

    <v-card>
      <v-title> <h4>Informações</h4> </v-title>
      <p>
        O objetivo deste desafio é avaliar as competências técnicas dos
        candidatos a desenvolvedor Full Stack Web na Maior Plataforma de
        Educação do Brasil, Grupo A Educação.
      </p>
      <p>
        Será solicitado o desenvolvimento de uma Aplicação que realize a
        Matrícula do Aluno na Turma de Programação Web da instituição EdTech.
        Regras e requisitos técnicos estão detalhadas neste documento.
      </p>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
};
</script>

<style lang="scss" scoped>
h2 {
  color: #15113b;
}
.v-card {
  padding: 16px;
}
</style>