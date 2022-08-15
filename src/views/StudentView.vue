<template>
  <v-container>
    <v-row class="d-flex pa-2">
      <v-text-field placeholder="Digite sua busca" solo />
      <v-btn elevation="2">Pesquisar</v-btn>
      <v-btn elevation="2" @click="() => this.$router.push('/students/new')"
        >Cadastrar aluno</v-btn
      >
    </v-row>

    <StudentsTable :students="students" @delete:student="deleteStudent" />
  </v-container>
</template>

<script>
import StudentsTable from "@/components/StudentsTable.vue";

export default {
  name: "StudentView",

  components: {
    StudentsTable,
  },

  mounted() {
    this.getStudents();
  },

  methods: {
    async getStudents() {
      try {
        const response = await fetch("http://localhost:3333/students");
        const data = await response.json();
        this.students = data;
      } catch (error) {
        console.error(error);
      }
    },

    async deleteStudent(id) {
      console.log("delete", id);
      try {
        const response = await fetch(`http://localhost:3333/students/${id}`, {
          method: "DELETE",
        });
        console.log(response);
        this.getStudents();
      } catch (error) {
        console.error(error);
      }
    },
  },

  data: () => ({
    students: [],
  }),
};
</script>
