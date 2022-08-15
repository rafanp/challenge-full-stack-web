<template>
  <v-navigation-drawer app permanent>
    <div class="d-flex align-center">
      <v-list-item-avatar>
        <v-img src="@/assets/grupoa-logo.png" />
      </v-list-item-avatar>
      <spacer />
      <div>
        <h4>Grupo A</h4>
        <span>Módulo Acadêmico</span>
      </div>
    </div>

    <v-divider />

    <v-list>
      <router-link to="/" tag="button">
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Página inicial</v-list-item-title>
        </v-list-item>
      </router-link>

      <router-link to="/students" tag="button">
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-account-multiple</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Estudantes</v-list-item-title>
        </v-list-item>
      </router-link>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "DrawerNavigation",
};
</script>

<style lang="scss" scoped>
nav {
  padding: 30px;
}
</style>
