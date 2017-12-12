import ConfirmComponent from '../../components/confirm/index.vue';

let $vm = null;
const ConfirmPlugin = {};

export default ConfirmPlugin.install = (Vue) => {
  if (!$vm) {
    const Confirm = Vue.extend(ConfirmComponent);
    $vm = new Confirm({
      el: document.createElement('div'),
    });
    document.body.appendChild($vm.$el);
  }
  // 可直接传入对象
  const confirm = (content, title, confirmFn) => {

    // 初始化数据
    $vm.title = '提示';
    $vm.content = '';
    $vm.btnTextCancle = '取消';
    $vm.btnTextSubmit = '确认';
    $vm.close = true;
    $vm.maskAbled = false;
    $vm.needCloseBtn = false;
    let onCancel = null;
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
      if (obj.btnTextCancle) $vm.btnTextCancle = obj.btnTextCancle;
      if (obj.btnTextSubmit) $vm.btnTextSubmit = obj.btnTextSubmit;
      onCancel = obj.onCancel;
      onConfirm = obj.onConfirm;
      onShow = obj.onShow;
      onHide = obj.onHide;
    } else {
      if (Object.prototype.toString.call(title) === '[object Function]') {
        $vm.title = '提示';
        onConfirm = title;
      } else {
        $vm.title = title;
        onConfirm = confirmFn;
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
    $vm.$off('on-cancel');
    $vm.$off('on-confirm');

    $vm.$on('on-cancel', () => {
      if (onCancel) onCancel();
    });
    $vm.$on('on-confirm', () => {
      if (onConfirm) onConfirm();
    });

    $vm.currentValue = true;
  };

  // 手动关闭
  const confirmHide = () => {
    $vm.currentValue = false;
  };

  if (!Vue.$app) {
    Vue.$app = {
      confirm,
      confirmHide,
    };
  } else {
    Vue.$app.confirm = confirm;
    Vue.$app.confirmHide = confirmHide;
  }

  Vue.mixin({
    created() {
      this.$app = Vue.$app;
    },
  });
};
