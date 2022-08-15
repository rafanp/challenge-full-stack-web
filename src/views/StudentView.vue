<template>
  <v-container>
    <v-row class="d-flex pa-2">
      <v-text-field placeholder="Digite sua busca" solo />
      <v-btn elevation="2">Pesquisar</v-btn>
      <v-btn elevation="2" @click="() => this.$router.push('/students/new')"
        >Cadastrar aluno</v-btn
      >
    </v-row>

    <StudentsTable />
  </v-container>
</template>

<script>
import StudentsTable from "@/components/StudentsTable.vue";

export default {
  name: "StudentView",

  components: {
    StudentsTable,
  },
};
</script>
