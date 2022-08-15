<template>
  <v-container>
    <h1>{{ $route.params.id ? "Editar" : "Criar" }} Estudante</h1>
    <StudentForm :student="student" />
  </v-container>
</template>

<script>
import StudentForm from "@/components/StudentForm";
import { mapGetters } from "vuex";

export default {
  name: "NewRegisterView",

  components: { StudentForm },
  computed: {
    ...mapGetters(["student"]),
  },
  mounted() {
    const { id } = this.$route.params;
    if (id) {
      this.getStudent(id);
    }
  },

  methods: {
    getStudent(id) {
      this.$store.dispatch("getStudent", { id });
    },
  },
};
</script>
