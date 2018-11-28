import Alert from './alert/index';
import Confirm from './confirm/index';
import Toast from './toast/index';
import Loading from './loading/index';
import Vue from 'vue';

const PluginsList = {
  Alert,
  Confirm,
  Toast,
  Loading,
};

class AppPlugins {
  constructor(options) {
    // 若无配置插件列表，则安装全部插件
    const pluginsConf = options.plugins || Object.keys(PluginsList);
    // 安装插件
    const length = pluginsConf.length;
    for (let i = 0; i < length; i += 1) {
      const val = pluginsConf[i];
      if (val) {
        const key = `${val[0].toUpperCase()}${val.slice(1)}`;
        if (PluginsList[key]) Vue.use(PluginsList[key], options.base);
      }
    }  
    // 有外部样式则不引用内部样式
    if (options.cssLink) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = options.cssLink;

      document.head.appendChild(link);
    }
  }
}

export default AppPlugins;
