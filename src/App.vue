<template>
  <v-app>
    <HeaderComponent />
    <DrawerNavigation />

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

  <script>
import DrawerNavigation from "@/components/navigation/Drawer";
import HeaderComponent from "@/components/header/index";

export default {
  components: {
    DrawerNavigation,
    HeaderComponent,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

main {
  background-color: #f8fafb;
}
</style>
