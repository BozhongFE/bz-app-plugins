import Vue from 'vue';
import App from './App.vue';

// import AppPlugins from './plugins/index.js';
import AppPlugins from '../dist/bz-app-plugins.umd.js';

const url = window.location.href;
const matched = url.match(/[\?|&]style=([^&]*)(&|$)/) || [];

const classType = matched[1] || 'crazy';
import(`../css/${classType}.css`);
// import(`./assets/css/${classType}.css`);

new AppPlugins({ 
  Vue,
  // 需要安装的插件。默认全部，选填。
  plugins: [
    'alert',
    'confirm',
    'toast',
    'loading',
  ],
  // 若不引入内置的样式表，可外部传入，选填。
  cssLink: 'xxx.css',
  base: {
    // 样式计算单位，内部设计稿为375px, 尺寸计算单位为10px，请传入相对于页面的10px，选填。
    fontSize: '10px', 
  },
});

new Vue({
  el: '#app',
  render: h => h(App),
});

