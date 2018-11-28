import Vue from 'vue';
import App from './App.vue';

// import AppPlugins from './plugins/index.js';
import AppPlugins from '../dist/bz-app-plugins.umd.js';

const url = window.location.href;
const matched = url.match(/[\?|&]style=([^&]*)(&|$)/) || [];

const classType = matched[1] === 'tracker' ? 'tracker' : 'crazy';
import(`../css/${classType}.css`);

new AppPlugins({ 
  // 需要安装的插件。选填。默认全部，
  plugins: [
    'alert',
    'confirm',
    'toast',
    'loading',
  ],
  // 若不引入内置的样式表，可外部传入
  cssLink: 'xxx.css',
  base: {
    // 样式计算单位，内部设计稿为375px, 尺寸计算单位为10px，请传入相对于页面的10px
    fontSize: '10px', 
  },
});

new Vue({
  el: '#app',
  render: h => h(App),
});

