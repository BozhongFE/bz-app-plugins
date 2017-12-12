import AlertComponent from 'src/components/alert/index.vue';

let $vm = null;
const AlertPlugin = {};

export default AlertPlugin.install = (Vue) => {
  if (!$vm) {
    const Alert = Vue.extend(AlertComponent);
    $vm = new Alert({
      el: document.createElement('div'),
    });
    document.body.appendChild($vm.$el);
  }
  // 可直接传入对象
  const alert = (content, title, fn) => {

    // 还原数据
    $vm.content = '';
    $vm.title = '提示';
    $vm.close = true;
    $vm.maskAbled = true;
    $vm.needCloseBtn = true;
    $vm.btnText = '确认';
    let onConfirm = null;
    let onShow = null;
    let onHide = null;

    if (Object.prototype.toString.call(content) === '[object Object]') {
      const obj = content;
      if (obj.content) $vm.content = obj.content;
      if (obj.title) $vm.title = obj.title;
      if (obj.hasOwnProperty('close')) $vm.close = obj.close;
      if (obj.hasOwnProperty('maskAbled')) $vm.maskAbled = obj.maskAbled;
      if (obj.hasOwnProperty('needCloseBtn')) $vm.needCloseBtn = obj.needCloseBtn;
      if (obj.btnText) $vm.btnText = obj.btnText;
      onConfirm = obj.onConfirm;
      onShow = obj.onShow;
      onHide = obj.onHide;
    } else {
      if (Object.prototype.toString.call(title) === '[object Function]') {
        $vm.title = '提示';
        onConfirm = title;
      } else {
        $vm.title = title;
        onConfirm = fn;
      }
      if (Object.prototype.toString.call(content) === '[object Function]') {
        onConfirm = content;
      } else {
        $vm.content = content;
      }
    }

    if ($vm.watcher) $vm.watcher();
    $vm.watcher = $vm.$watch('currentValue', (val) => {
      if (val && onShow) {
        onShow($vm);
      } else if (!val && onHide) {
        onHide($vm);
        if ($vm.watcher) $vm.watcher();
        $vm.watcher = null;
      }
    });
    $vm.$off('on-confirm');

    $vm.$on('on-confirm', () => {
      if (onConfirm) onConfirm();
    });
    $vm.currentValue = true;
  };

  // 手动关闭
  const alertHide = () => {
    $vm.currentValue = false;
  };

  if (!Vue.$app) {
    Vue.$app = {
      alert,
      alertHide,
    };
  } else {
    Vue.$app.alert = alert;
    Vue.$app.alertHide = alertHide;
  }

  Vue.mixin({
    created() {
      this.$app = Vue.$app;
    },
  });
};
