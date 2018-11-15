import Vue from 'vue';
import App from './App.vue';

import AppPlugins from './plugins/index.js';

const url = window.location.href;
const matched = url.match(/[\?|&]style=([^&]*)(&|$)/);

let style = null;
if (matched && matched[1]) style = matched[1];

const Plugins = new AppPlugins;

// 初始化rem，若外部已有可以省略，但需要pageSize/40的比例
Plugins.initRem();

Plugins.init({
  vue: Vue,
  style: 'trackerrem',
  // source域名，用于拼接内部样式表路径，默认指向各环境source
  domain: '//scdn.bozhong.com/source',
  plugins: [
    'alert',
    'confirm',
    'toast',
    'loading',
  ],
});

new Vue({
  el: '#app',
  render: h => h(App),
});

