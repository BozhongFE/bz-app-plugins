import Vue from 'vue';
import App from './App.vue';

import AppPlugins from './plugins/index.js';

for (const plugin in AppPlugins) {
  if (AppPlugins[plugin]) Vue.use(AppPlugins[plugin]);
}
new Vue({
  el: '#app',
  render: h => h(App),
});

