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
  const confirm = (content = '', title = '提示', confirmFn = null) => {

    let onShow = null;
    let onHide = null;
    let onCancel = null;
    let onConfirm = null;


    if (Object.prototype.toString.call(content) === '[object Object]') {
      const obj = content;
      $vm.title = obj.title || '提示';
      $vm.content = obj.content;
      $vm.btnTextCancle = obj.btnTextCancle ? obj.btnTextCancle : '取消';
      $vm.btnTextSubmit = obj.btnTextSubmit ? obj.btnTextSubmit : '确认';
      $vm.close = obj.hasOwnProperty('close') ? obj.close : false;
      $vm.maskAbled = obj.hasOwnProperty('maskAbled') ? obj.maskAbled : false;
      $vm.needCloseBtn = obj.hasOwnProperty('needCloseBtn') ? obj.needCloseBtn : false;
      onCancel = obj.onCancel;
      onConfirm = obj.onConfirm;
      onShow = obj.onShow;
      onHide = obj.onHide;
    } else {
      // 还原被改过的
      $vm.title = '提示';
      $vm.content = '';
      $vm.btnTextCancle = '取消';
      $vm.btnTextSubmit = '确认';
      $vm.close = false;
      $vm.maskAbled = false;
      $vm.needCloseBtn = false;
      onCancel = null;
      onConfirm = null;
      onShow = null;
      onHide = null;
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


  if (!Vue.$app) {
    Vue.$app = {
      confirm,
    };
  } else {
    Vue.$app.confirm = confirm;
  }

  Vue.mixin({
    created() {
      this.$app = Vue.$app;
    },
  });
};
