import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css';

import ProyectoVue from './components/ProyectoVue.vue';
import CustomCard from './components/Card.vue';

Vue.component('ProyectoVue', ProyectoVue);
Vue.component('CustomCard', CustomCard);

Vue.config.productionTip = false

Vue.use(Vuetify)

const vuetify = new Vuetify()

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
});

new Vue({
vuetify,
  render: (h) => h(App),
}).$mount('#app')
