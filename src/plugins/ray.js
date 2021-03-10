import Vue from 'vue';

import RayPlugin from 'vue-ray/vue2';

Vue.use(RayPlugin.RayPlugin, {
  interceptErrors: false,
  host: 'localhost',
  port: 23517,
  showComponentEvents: [
    'created',
    'mounted',
  ],
});
