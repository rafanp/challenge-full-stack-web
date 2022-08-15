<!-- eslint-disable vue/valid-v-slot -->
<template>
  <v-data-table
    :headers="headers"
    :items="students"
    :items-per-page="5"
    class="elevation-1"
  >
    <template v-slot:item.actions="{ item }">
      <v-icon class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
      <v-icon @click="deleteItem(item)"> mdi-delete </v-icon>
    </template>

    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Students</v-toolbar-title>
        <v-spacer></v-spacer>

        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">
              Are you sure you want to delete this item?</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete"
                >Cancel</v-btn
              >
              <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                >OK</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
  </v-data-table>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "StudentsTable",

  computed: {
    ...mapGetters(["students"]),
  },

  mounted() {
    this.getStudents();
  },

  methods: {
    async getStudents() {
      this.$store.dispatch("getStudents");
    },

    editItem(item) {
      console.log(item);
      this.$router.push(`/students/${item.id}/edit`);
    },

    deleteItem(item) {
      console.log(item);
      this.selectedId = item.id;
      this.dialogDelete = true;
    },

    async deleteItemConfirm() {
      await this.$store.dispatch("deleteStudent", { id: this.selectedId });
      this.getStudents();
      this.closeDelete();
    },

    closeDelete() {
      this.dialogDelete = false;
    },
  },

  data: () => ({
    dialogDelete: false,
    selectedId: null,

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
      { text: "Ações", value: "actions" },
    ],
  }),
};
</script>
<style lang=""></style>
