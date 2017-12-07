import AlertComponent from '../../components/alert/index.vue';

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
  const alert = (content = '', title = '提示', fn = null) => {

    let callback = null;

    if (Object.prototype.toString.call(content) === '[object Object]') {
      const obj = content;
      $vm.content = obj.content;
      $vm.title = obj.title;
      $vm.maskAbled = obj.hasOwnProperty('maskAbled') ? obj.maskAbled : true;
      $vm.needCloseBtn = obj.hasOwnProperty('needCloseBtn') ? obj.needCloseBtn : true;
      if (obj.btnText) $vm.btnText = obj.btnText;
      callback = obj.callback;
    } else {
      // 还原被改过的
      $vm.content = '';
      $vm.title = '提示';
      $vm.maskAbled = true;
      $vm.needCloseBtn = true;
      $vm.btnText = '确认';
      callback = null;

      if (Object.prototype.toString.call(title) === '[object Function]') {
        $vm.title = '提示';
        callback = title;
      } else {
        $vm.title = title;
        callback = fn;
      }
      if (Object.prototype.toString.call(content) === '[object Function]') {
        callback = content;
      } else {
        $vm.content = content;
      }
    }

    if ($vm.watcher) $vm.watcher();
    $vm.watcher = $vm.$watch('currentValue', (val) => {
      // if (val && options.onShow) {
      //   options.onShow($vm);
      // } else
      if (!val && callback) {
        callback($vm);
        if ($vm.watcher) $vm.watcher();
        $vm.watcher = null;
      }
    });
    $vm.currentValue = true;
  };

  if (!Vue.$app) {
    Vue.$app = {
      alert,
    };
  } else {
    Vue.$app.alert = alert;
  }

  Vue.mixin({
    created() {
      this.$app = Vue.$app;
    },
  });
};
