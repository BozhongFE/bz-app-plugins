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

    // 有外部样式则不引用内部样式
    if (options.cssLink) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = options.cssLink;

      document.head.appendChild(link);
    } else {
      // require/import 路径变量会出现内部less无法成功嵌套
      // require('../assets/css/' + options.base.type + '.less');
      switch (options.base.type) {
        case 'crazy':
          require.ensure([], () => {
            require('src/assets/css/crazy.less');
          }, 'crazy');
          break;
        default:
          require.ensure([], () => {
            require('src/assets/css/tracker.less');
          }, 'tracker');
      }
    }
  }
  // init(options = {}) {
  //   // } else {
  //   //   let cssLink = options.cssLink || null;

  //   //   if (!cssLink) {
  //   //     let domain = options.domain || null;

  //   //     if (!domain) {
  //   //       const url = window.location.href;
  //   //       const matched = url.match(/\/\/(\w*).([\w.]*)\/\w*/);

  //   //       if (/bozhong.com/.test(matched[0])) {
  //   //         domain = '//scdn.bozhong.com/source';
  //   //       } else if (matched[1] === 'fe') {
  //   //         domain = '//fe.office.bzdev.net/source/xc';
  //   //       } else {
  //   //         domain = `//source.${matched[2]}`;
  //   //       }
  //   //     }

  //   //     const modName = env.PACKAGE_NAME;
  //   //     const modVersion = env.PACKAGE_VERSION;
  //   //     const styleName = options.style || 'trackerrem';

  //   //     cssLink = `${domain}/moe/${modName}/${modVersion}/${styleName}.css`;
  //   //   }
  //   //   const link = document.createElement('link');
  //   //   link.rel = 'stylesheet';
  //   //   link.href = cssLink;

  //   //   document.head.appendChild(link);
  //   // }
  // }
}

export default AppPlugins;
