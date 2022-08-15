import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#6F6AF8',
        purple500: '#6F6AF8',
        purple900: '#15113B',
      },
    },
  },
});
