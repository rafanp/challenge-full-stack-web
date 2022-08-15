<!-- eslint-disable vue/no-mutating-props -->
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
            required
            outlined
          ></v-text-field>
        </validation-provider>

        <validation-provider v-slot="{ errors }" name="email" rules="required">
          <v-text-field
            v-model="student.email"
            :error-messages="errors"
            label="E-mail *"
            required
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
            required
            outlined
          ></v-text-field>
        </validation-provider>

        <validation-provider v-slot="{ errors }" name="cpf">
          <v-text-field
            v-model="student.cpf"
            :error-messages="errors"
            label="CPF *"
            required
            outlined
          ></v-text-field>
        </validation-provider>

        <!-- <validation-provider
        v-slot="{ errors }"
        name="cpf"
        :rules="{
          regex:
            '([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})',
        }"
      >
        <v-text-field
          v-model="cpf"
          :error-messages="errors"
          label="CPF"
          required
        ></v-text-field>
      </validation-provider> -->
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
import {
  required,
  digits,
  email,
  max,
  regex,
  integer,
} from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";
import { mapGetters } from "vuex";

setInteractionMode("eager");

extend("digits", {
  ...digits,
  message: "{_field_} needs to be {length} digits. ({_value_})",
});

extend("required", {
  ...required,
  message: "Campo obrigatório",
});

extend("max", {
  ...max,
  message: "{_field_} may not be greater than {length} characters",
});

extend("regex", {
  ...regex,
  message: "Valor inválido",
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

  /* display: flex;
  flex-direction: column;
  align-items: center; */
}

/* [class*="-message"] {
  font-weight: 500;
} */

.form-title {
  font-size: 16px;
}

.error-message {
  color: #d33c40;
}

.success-message {
  color: #32a95d;
}
</style>
