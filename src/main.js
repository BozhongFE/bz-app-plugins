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
  // 内部不含Vue，需外部传入
  vue: Vue,
  // cssLink配置后不会引入内部样式表
  // cssLink: '//source.bozhong.com/m/css/m_bbs_public.css',
  // 内部样式表，暂含tracker/tracker-rem/crazy三种模式，不填默认tracker-rem
  style,
  // 需安装的插件，暂含alert/confirm/toast/loading，不填默认全部
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

