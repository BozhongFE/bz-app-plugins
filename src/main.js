import Vue from 'vue';
import App from './App.vue';

// import AppPlugins from './plugins/index.js';
import AppPlugins from './plugins/index.js';

const url = window.location.href;
const matched = url.match(/[\?|&]style=([^&]*)(&|$)/) || [];

switch(matched[1]) {
  case 'crazy':
    require.ensure([], () => {
      require('./assets/css/crazy.less');
    })
    break;
  default:
    require.ensure([], () => {
      require('./assets/css/tracker.less');
    });
}

new AppPlugins({
  vue: Vue,
  // source域名，用于拼接内部样式表路径，默认指向各环境source
  domain: '//scdn.bozhong.com/source',
  plugins: [
    'alert',
    'confirm',
    'toast',
    'loading',
  ],
  base: {
    fontSize: '10px', // 样式衡量单位，内部设计稿为375px, 衡量单位为10px，请传入相对于页面的10px
  },
});

new Vue({
  el: '#app',
  render: h => h(App),
});

