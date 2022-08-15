<!-- eslint-disable vue/no-mutating-props -->
<template>
  <validation-observer ref="observer" v-slot="{ invalid }">
    <form @submit.prevent="submit">
      <validation-provider v-slot="{ errors }" name="name" rules="required">
        <v-text-field
          v-model="student.name"
          :error-messages="errors"
          label="Nome"
          required
        ></v-text-field>
      </validation-provider>

      <validation-provider v-slot="{ errors }" name="email" rules="required">
        <v-text-field
          v-model="student.email"
          :error-messages="errors"
          label="E-mail"
          required
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
          label="RA"
          required
        ></v-text-field>
      </validation-provider>

      <validation-provider v-slot="{ errors }" name="cpf">
        <v-text-field
          v-model="student.cpf"
          :error-messages="errors"
          label="CPF"
          required
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

      <v-btn class="mr-4" @click="clear"> clear </v-btn>
      <v-btn type="submit" :disabled="invalid"> submit </v-btn>
    </form>
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
  props: {
    student: Object,
  },
  data: () => ({}),

  methods: {
    async submit() {
      const isValidated = await this.$refs.observer.validate();

      if (isValidated) {
        this.$emit("add:student", this.student);
      }
    },
    clear() {
      this.name = "";
      this.email = "";
      this.cpf = "";
      this.ra = "";
      this.$refs.observer.reset();
    },
  },
};
</script>

<style scoped>
form {
  margin-bottom: 2rem;
}

[class*="-message"] {
  font-weight: 500;
}

.error-message {
  color: #d33c40;
}

.success-message {
  color: #32a95d;
}
</style>
