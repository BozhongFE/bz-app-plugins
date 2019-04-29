import AlertComponent from 'src/components/alert/index.vue';

let $vm = null;
const AlertPlugin = {};

export default AlertPlugin.install = (Vue, { fontSize = '10px' } = {}) => {
  if (!$vm) {
    const Alert = Vue.extend(AlertComponent);
    $vm = new Alert({
      el: document.createElement('div'),
    });
    document.body.appendChild($vm.$el);
  }

  // 尺寸
  $vm.fontSize = fontSize;

  // 插件初始配置
  const baseConf = {
    content: '',
    title: '提示',
    cover: '',
    close: true,
    maskAbled: true,
    needCloseBtn: true,
    btnText: '确认',
    onConfirm: null,
    onShow: null,
    onHide: null,
  };

  // 可直接传入对象
  const alert = (...args) => {
    // 插件配置
    const conf = Object.assign({}, baseConf);
    // 参数处理
    const length = args.length;
    const userConf = {};
    for (let i = 0; i < length; i += 1) {
      const arg = args[0];
      if (typeof arg === 'string') {
        if (i === 0) {
          userConf.content = arg;
        } else {
          userConf.title = arg;
        }
      } else {
        const otype = Object.prototype.toString.call(arg);
        if (otype === '[object Function]') {
          userConf.onConfirm = arg;
        } else if (otype === '[object Object]') {
          Object.assign(userConf, arg);
        }
      }
    }
    Object.assign(conf, userConf);

    // 排除掉方法不传到组件内
    const confKeys = Object.keys(conf);
    const keyLength = confKeys.length;
    for (let i = 0; i < keyLength; i += 1) {
      const key = confKeys[i];
      if (!/^on.*$/.test(key)) $vm[key] = conf[key];
    }

    // 事件相关监听
    if ($vm.watcher) $vm.watcher();
    $vm.watcher = $vm.$watch('currentValue', (val) => {
      if (val) return conf.onShow && conf.onShow($vm);
      if ($vm.watcher) $vm.watcher();
      $vm.watcher = null;
      return conf.onHide && conf.onHide($vm);
    });

    $vm.$off('on-confirm').$on('on-confirm', () => {
      return conf.onConfirm && conf.onConfirm();
    });

    $vm.currentValue = true;
  };

  // 手动关闭
  const alertHide = () => {
    $vm.currentValue = false;
  };

  // 挂到Vue内
  if (!Vue.$app) Vue.$app = {};
  Object.assign(Vue.$app, {
    alert,
    alertHide,
  });

  // 混入
  Vue.mixin({
    created() {
      this.$app = Vue.$app;
    },
  });
};
