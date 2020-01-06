<template>
  <v-layout>
    <v-app-bar fixed app light clipped-left color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>News App</v-toolbar-title>
    </v-app-bar>
  </v-layout>
</template>

<script>
export default {
  name: 'TopMenu',

  data: () => ({
    drawer: false
  }),
};
</script>
