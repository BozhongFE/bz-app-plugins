import Vue from 'vue';
import App from './App.vue';

import AppPlugins from './plugins/index.js';

AppPlugins.initRem();

const plugins = AppPlugins.plugins;

for (const plugin in plugins) {
  if (plugins[plugin]) Vue.use(plugins[plugin]);
}
new Vue({
  el: '#app',
  render: h => h(App),
});

