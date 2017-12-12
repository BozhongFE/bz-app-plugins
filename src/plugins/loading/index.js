import LoadingComponent from 'src/components/loading/index.vue';

let $vm = null;
const LoadingPlugin = {};

export default LoadingPlugin.install = (Vue) => {
  if (!$vm) {
    const Loading = Vue.extend(LoadingComponent);
    $vm = new Loading({
      el: document.createElement('div'),
    });
    document.body.appendChild($vm.$el);
  }

  let loadingTimeout = null;

  const loading = (content, timeOut, fn) => {

    $vm.content = '';
    let callback = fn;
    let timeout = 0;

    if (timeOut) {
      if (Object.prototype.toString.call(timeOut) === '[object Function]') {
        callback = timeOut;
      } else {
        timeout = timeOut;
      }
    }
    if (content) {
      if (Object.prototype.toString.call(content) === '[object Function]') {
        callback = content;
      } else if (typeof content === 'number') {
        timeout = content;
      } else {
        $vm.content = content;
      }
    }

    $vm.currentValue = true;
    if (timeout) {
      loadingTimeout = setTimeout(() => {
        $vm.currentValue = false;
        if (callback) callback($vm);
      }, timeout);
    }
  };

  // 手动关闭
  const loadingHide = () => {
    window.clearTimeout(loadingTimeout);
    $vm.currentValue = false;
  };

  if (!Vue.$app) {
    Vue.$app = {
      loading,
      loadingHide,
    };
  } else {
    Vue.$app.loading = loading;
    Vue.$app.loadingHide = loadingHide;
  }

  Vue.mixin({
    created() {
      this.$app = Vue.$app;
    },
  });
};

