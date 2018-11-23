import AppAlert from './alert/index';
import AppConfirm from './confirm/index';
import AppToast from './toast/index';
import AppLoading from './loading/index';

const PluginsList = {
  AppAlert,
  AppConfirm,
  AppToast,
  AppLoading,
};

class AppPlugins {
  constructor(options) {
    // 若无配置插件列表，则安装全部插件
    const pluginsConf = options.plugins || Object.keys(PluginsList);
    // 外部传入Vue
    const Vue = options.vue;
    // 安装插件
    const length = pluginsConf.length;
    for (let i = 0; i < length; i += 1) {
      const val = pluginsConf[i];
      if (val) {
        const key = `App${val[0].toUpperCase()}${val.slice(1)}`;
        if (PluginsList[key]) Vue.use(PluginsList[key], options.base);
      }
    }  
    // 有外部样式则不引用内部样式
    if (options.cssLink) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = options.cssLink;

      document.head.appendChild(link);
    } else {
      const type = options.type || 'crazy';
      require(`css/${type}.css`);
    }
  }
}

export default AppPlugins;
