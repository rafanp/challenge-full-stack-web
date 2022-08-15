<template>
  <validation-observer ref="observer" v-slot="{ invalid }">
    <v-card class="pa-4">
      <v-card-title
        ><span class="form-title">Informações do Estudante</span></v-card-title
      >
      <form @submit.prevent="submit">
        <validation-provider v-slot="{ errors }" name="name" rules="required">
          <v-text-field
            v-model="student.name"
            :error-messages="errors"
            label="Nome *"
            outlined
          ></v-text-field>
        </validation-provider>

        <validation-provider
          v-slot="{ errors }"
          name="email"
          rules="required|email"
        >
          <v-text-field
            v-model="student.email"
            :error-messages="errors"
            label="E-mail *"
            outlined
          ></v-text-field>
        </validation-provider>

        <validation-provider
          v-slot="{ errors }"
          name="ra"
          rules="required|integer"
        >
          <v-text-field
            v-model="student.ra"
            :error-messages="errors"
            label="RA *"
            outlined
            :disabled="student.id"
          ></v-text-field>
        </validation-provider>

        <validation-provider
          v-slot="{ errors }"
          name="cpf"
          :rules="{
            required: true,
            regex:
              '([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})',
          }"
        >
          <v-text-field
            v-model="student.cpf"
            :error-messages="errors"
            label="CPF *"
            required
            outlined
            :disabled="student.id"
          ></v-text-field>
        </validation-provider>
        <div class="d-flex">
          <v-btn class="mr-4" @click="onCancel"> Cancelar </v-btn>
          <v-spacer />
          <v-btn type="submit" color="primary" :disabled="invalid">
            Salvar
          </v-btn>
        </div>
      </form>
    </v-card>
  </validation-observer>
</template>

<script>
import { required, email, regex, integer } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";
import { mapGetters } from "vuex";

setInteractionMode("eager");

extend("required", {
  ...required,
  message: "Campo obrigatório",
});

extend("regex", {
  ...regex,
  message: "CPF inválido. Deve conter números e pontuação, ex: 999.999.999-99",
});

extend("email", {
  ...email,
  message: "Email inválido",
});

extend("integer", {
  ...integer,
  message: "Deve ser um número inteiro",
});

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  computed: {
    ...mapGetters(["student"]),
  },
  methods: {
    async submit() {
      const isValidated = await this.$refs.observer.validate();
      if (!isValidated) {
        return;
      }

      try {
        this.student.id
          ? await this.updateStudent({ payload: this.student })
          : await this.createStudent({ payload: this.student });

        this.$store.dispatch("clearStudent");
        this.$router.push("/students");
      } catch (error) {
        console.error(error);
      }
    },

    updateStudent(payload) {
      return this.$store.dispatch("updateStudent", payload);
    },

    createStudent(payload) {
      return this.$store.dispatch("createStudent", payload);
    },

    onCancel() {
      this.$store.dispatch("clearStudent");
      this.$router.push("/students");
    },
  },
};
</script>

<style scoped>
form {
  margin-bottom: 2rem;
  padding-left: 10%;
  padding-right: 10%;
}

.form-title {
  font-size: 16px;
}
</style>
