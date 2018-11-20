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
    this.options = options;
    this.init();
  }
  init() {
    const options = this.options;
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
  }
}

export default AppPlugins;
