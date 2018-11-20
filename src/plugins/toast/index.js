import ToastComponent from 'src/components/toast/index.vue';

let $vm = null;
const ToastPlugin = {};

export default ToastPlugin.install = (Vue, { fontSize = '10px' } = {}) => {
  if (!$vm) {
    const Toast = Vue.extend(ToastComponent);
    $vm = new Toast({
      el: document.createElement('div'),
    });
    document.body.appendChild($vm.$el);
  }

  // 尺寸
  $vm.fontSize = fontSize;
  // 定时器
  let toastTimeOut = null;

  const toast = (...args) => {
    if (toastTimeOut) window.clearTimeout(toastTimeOut);

    $vm.content = '';
    $vm.type = 'middle';
    let callback = null;
    let timeout = 1500;

    // 参数处理
    const length = args.length;
    for (let i = 0; i < length; i += 1) {
      const arg = args[i];
      if (Object.prototype.toString.call(arg) === '[object Function]') {
        callback = arg;
      } else {
        const otype = typeof arg;
        if (otype === 'string') {
          if (i !== 0 && /middle|top|bottom/.test(arg)) {
            $vm.type = arg;
          } else {
            $vm.content = arg;
          }
        } else if (otype === 'number') {
          timeout = arg;
        }
      }
    }
    $vm.currentValue = true;

    // 定时器
    if (!timeout) return callback && callback($vm);

    toastTimeOut = setTimeout(() => {
      $vm.currentValue = false;
      return callback && callback($vm);
    }, timeout);
  };

  // 手动关闭
  const toastHide = () => {
    if (toastTimeOut) window.clearTimeout(toastTimeOut);
    $vm.currentValue = false;
  };

  // 挂到Vue内
  if (!Vue.$app) Vue.$app = {};
  Object.assign(Vue.$app, {
    toast,
    toastHide,
  });

  Vue.mixin({
    created() {
      this.$app = Vue.$app;
    },
  });
};
