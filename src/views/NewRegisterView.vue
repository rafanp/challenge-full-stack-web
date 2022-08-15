<template>
  <v-container>
    <v-row class="d-flex pa-2 mt-6 mb-6">
      <h2>{{ $route.params.id ? "Editar" : "Criar" }} Estudante</h2>
    </v-row>
    <StudentForm />
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
