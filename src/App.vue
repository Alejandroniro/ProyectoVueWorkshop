<template>
  <v-app>
    <v-app-bar app color="primary">
      <v-toolbar-title>Proyecto Vue PeakU</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <ProyectoVue></ProyectoVue>
    </v-main>
  </v-app>
</template>

<script>
import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default {
  data() {
    return {

    };
  },
};
</script>
