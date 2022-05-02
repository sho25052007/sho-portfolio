import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

Vue.component('font-awesome-icon', FontAwesomeIcon) // Register component globally
library.add(fas) // Include needed icons

Vue.use(Vuetify);

export default new Vuetify({

    theme: {
        themes: {
          light: {
            primary:  "#5c4634" ,
            secondary: "#6b5746",
            accent: "#847363",
            error: "#332112",
          },
      },
    },

    icons: {
      iconfont: 'faSvg',
    },

});
