import ToastComponent from '../../components/toast/index.vue';

let $vm = null;
const ToastPlugin = {};

export default ToastPlugin.install = (Vue) => {
  if (!$vm) {
    const Toast = Vue.extend(ToastComponent);
    $vm = new Toast({
      el: document.createElement('div'),
    });
    document.body.appendChild($vm.$el);
  }
  // 用于清除延时事件
  let toastTimeOut = null;
  const toast = (toastText = '', timeOut = 1500, type = 'middle', fn = null) => {
    $vm.toastText = toastText;

    let callback = fn;
    let timeout;

    if (Object.prototype.toString.call(type) === '[object Function]') {
      callback = type;
      $vm.type = 'middle';
    } else {
      $vm.type = type;
    }
    if (Object.prototype.toString.call(timeOut) === '[object Function]') {
      callback = timeOut;
      timeout = 1500;
    } else if (typeof timeOut === 'string') {
      $vm.type = timeOut;
      timeout = 1500;
    } else {
      timeout = timeOut || 1500;
    }

    $vm.currentValue = true;
    if (timeout) {
      toastTimeOut = setTimeout(() => {
        $vm.currentValue = false;
        if (callback) callback($vm);
      }, timeout);
    }
  };

  // 手动关闭
  const toastHide = () => {
    window.clearTimeout(toastTimeOut);
    $vm.currentValue = false;
  };

  if (!Vue.$app) {
    Vue.$app = {
      toast,
      toastHide,
    };
  } else {
    Vue.$app.toast = toast;
    Vue.$app.toastHide = toastHide;
  }

  Vue.mixin({
    created() {
      this.$app = Vue.$app;
    },
  });
};
