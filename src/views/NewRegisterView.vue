<template>
  <v-container>
    <h1>{{ $route.params.id ? "Editar" : "Criar" }} Estudante</h1>
    <StudentForm @add:student="saveForm" :student="student" />
  </v-container>
</template>

<script>
import StudentForm from "@/components/StudentForm";

export default {
  name: "NewRegisterView",

  components: { StudentForm },

  mounted() {
    const { id } = this.$route.params;
    if (id) {
      this.getStudent(id);
    }
  },

  methods: {
    async saveForm(student) {
      try {
        const response = student.id
          ? await this.updateStudent(student)
          : await this.createStudent(student);
        console.log(response);
        this.$router.push("/students");
      } catch (error) {
        console.error(error);
      }
    },

    async createStudent(student) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(student),
      };

      const response = await fetch(
        "http://localhost:3333/students",
        requestOptions
      );

      return response;
    },

    async updateStudent(student) {
      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(student),
      };

      const response = await fetch(
        `http://localhost:3333/students/${student.id}`,
        requestOptions
      );

      return response;
    },

    async getStudent(id) {
      try {
        const response = await fetch(`http://localhost:3333/students/${id}`);
        const data = await response.json();
        this.student = data;
      } catch (error) {
        console.error(error);
      }
    },
  },

  data: () => ({
    student: {},
  }),
};
</script>
