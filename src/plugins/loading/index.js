import LoadingComponent from 'src/components/loading/index.vue';

let $vm = null;
const LoadingPlugin = {};

export default LoadingPlugin.install = (Vue, { type = 'crazy', fontSize = '10px' } = {}) => {
  if (!$vm) {
    const Loading = Vue.extend(LoadingComponent);
    $vm = new Loading({
      el: document.createElement('div'),
    });
    document.body.appendChild($vm.$el);
  }

  // 类型
  $vm.type = type;
  // 尺寸
  $vm.fontSize = fontSize;
  // 定时器
  let loadingTimeout = null;

  const loading = (...args) => {
    if (loadingTimeout) window.clearTimeout(loadingTimeout);

    $vm.content = '';
    let callback = null;
    let timeout = 0;

    // 参数处理
    const length = args.length;
    for (let i = 0; i < length; i += 1) {
      const arg = args[i];
      if (Object.prototype.toString.call(arg) === '[object Function]') {
        callback = arg;
      } else {
        const otype = typeof arg;
        if (otype === 'string') {
          $vm.content = arg;
        } else if (otype === 'number') {
          timeout = arg;
        }
      }
    }
    $vm.currentValue = true;

    // 定时器
    if (!timeout) return callback && callback($vm);

    loadingTimeout = setTimeout(() => {
      $vm.currentValue = false;
      return callback && callback($vm);
    }, timeout);
  };

  // 手动关闭
  const loadingHide = () => {
    if (loadingTimeout) window.clearTimeout(loadingTimeout);
    $vm.currentValue = false;
  };

  // 挂到Vue内
  if (!Vue.$app) Vue.$app = {};
  Object.assign(Vue.$app, {
    loading,
    loadingHide,
  });

  Vue.mixin({
    created() {
      this.$app = Vue.$app;
    },
  });
};

