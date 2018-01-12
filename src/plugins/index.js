'use strict';

import AppAlert from './alert/index.js';
import AppConfirm from './confirm/index.js';
import AppToast from './toast/index.js';
import AppLoading from './loading/index.js';

// const remind = resolve => require(['src/assets/css/tracker-px.less'], resolve);
// require.ensure(['src/assets/css/tracker-px.less'], () => {}, 'tracker')
// require.ensure(['src/assets/css/tracker-rem.less'], () => {}, 'trackerrem')
// require.ensure(['src/assets/css/crazy-px.less'], () => {}, 'crazy')
// import('src/assets/css/tracker-px.less')

const PluginsList = {
  AppAlert,
  AppConfirm,
  AppToast,
  AppLoading,
};

console.log(process.env)
class AppPlugins {
  init(options = {}) {
    const self = this;

    // 若无配置插件列表，则安装全部插件
    const pluginsConf = options.plugins;
    // 外部传入Vue
    const Vue = options.vue;

    // self.plugins = {};
    if (pluginsConf && pluginsConf.length) {
      for (let p in pluginsConf) {
        const val = pluginsConf[p];
        const key = `App${val[0].toUpperCase()}${val.slice(1)}`;
        if (PluginsList[key]) Vue.use(PluginsList[key]);
      }
    } else {
      self.plugins = PluginsList;
      for (const key in PluginsList) {
        if (PluginsList[key]) Vue.use(PluginsList[key]);
      }
    }

    // 开发环境引入模块，生产环境写入样式表
    console.log(process.env)
    if (process.env && process.env.NODE_ENV === 'dev') {
      // 有外部样式则不引用内部样式
      if (options.cssLink) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = options.cssLink;

        document.head.appendChild(link);
      } else {
        // require/import .less前不能是变量，路径也不能用变量？？？？
        switch (options.style) {
          case 'tracker':
            require('src/assets/css/tracker-px.less');
            break;
          case 'crazy':
            require('src/assets/css/crazy-px.less');
            break;
          case 'tracker-rem':
          default:
            require('src/assets/css/tracker-rem.less');
        }
      }
    } else {
      const cssLink = options.cssLink || null;

      if (!cssLink) {

      }

      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = cssLink;

      document.head.appendChild(link);
    }

    // 有外部样式则不引用内部样式
    if (options.cssLink) {
    } else {
      // 样式主题，默认孕迹rem
      self.style = options.style || 'tracker-rem';

    }
  }
  initRem(pageWidth = 750) {
    (function(scope) {
      // 下面750对应设计稿的宽度
      // document.body.innerHTML = window.innerWidth;
      const ua = navigator.userAgent.toLocaleLowerCase();
      const eventName = 'onorientationchange' in scope ? 'orientationchange' : 'resize';
      const howLong = /chrome|firefox|ucbrowser|mqqbrowser/.test(ua) || (/safari/.test(ua) && /iphone/.test(ua)) ? 0 : 300;
      const winWidth = document.documentElement.clientWidth;
      let docWidth = window.innerWidth;
      docWidth = docWidth > pageWidth ? pageWidth : docWidth;
      const _width = winWidth < docWidth ? winWidth : docWidth; // 兼容部分奇怪的安卓机
      document.documentElement.style.fontSize = `${(_width / pageWidth) * 40}px`;
      scope.addEventListener(eventName, () => {
        clearTimeout(scope.orientationChangedTimeout);
        scope.orientationChangedTimeout = setTimeout(() => {
          document.documentElement.style.fontSize = `${(_width / pageWidth) * 40}px`;
        }, howLong);
      }, false);
    }(window));
  }
}

export default AppPlugins;
