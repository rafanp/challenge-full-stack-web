<template>
  <v-data-table
    :headers="headers"
    :items="students"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
</template>

<script>
export default {
  name: "StudentsTable",
  props: {
    students: Array,
  },

  data: () => ({
    headers: [
      {
        text: "Registro Acadêmico",
        align: "start",
        sortable: false,
        value: "ra",
      },
      { text: "Nome", value: "name" },
      { text: "Email", value: "email" },
      { text: "CPF", value: "cpf" },
    ],
  }),
};
</script>
<style lang=""></style>
