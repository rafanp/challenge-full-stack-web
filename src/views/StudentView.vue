<template>
  <v-container>
    <v-row class="d-flex pa-2 mt-6 mb-6">
      <h2>Estudantes</h2>
      <v-spacer />
      <v-btn
        elevation="2"
        color="primary"
        @click="() => this.$router.push('/students/new')"
        >Adicionar</v-btn
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

<style lang="scss" scoped>
h2 {
  color: #15113b;
}
</style>
