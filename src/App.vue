<template>
  <div id="app">
    <pre class="code-box">
      <code>
      // requirejs引入
      require(['mod/bz-app-plugins/1.0.0/bz-app-plugins'], function (AppPlugins) {
        // 手动过滤一层
        plugins = AppPlugins.default;

        for (const plugin in plugins) {
          if (plugins[plugin]) Vue.use(plugins[plugin]);
        }
      }

      // Vue引入
      // mod需自行指定路径
      import AppPlugins from 'mod/bz-app-plugins/1.0.0/bz-app-plugins.js';

      for (const plugin in AppPlugins) {
        if (AppPlugins[plugin]) Vue.use(AppPlugins[plugin]);
      }
      </code>
    </pre>
    <pre class="code-box">
      <code>
      {{loadingCode}}
      </code>
    </pre>
    <div class="btn-box">
      <a class="btn-box__a" href="javascript:" @click="show('loading')">loading</a>
      <code class="btn-box__code" codeFor="loading">
      // loading(content = '', timeout, callback) 全非必填, 不能逆序, 不填时间不隐藏

      this.$app.loading();
      </code>
      <a class="btn-box__a" href="javascript:" @click="show('loadingText')">loading - 文字</a>
      <code class="btn-box__code" codeFor="loadingText">
      // 提示文案
      this.$app.loading('loading', 1500, () => {
        console.log('loading');
      });
      </code>
      <a class="btn-box__a" href="javascript:" @click="show('loadingHide')">loadingHide - 关闭</a>
      <code class="btn-box__code" codeFor="loadingHide">
      var self = this;
      self.$app.loading('loading', 40000);

      setTimeout(function(){

        // 手动关闭
        self.$app.loadingHide();

      }, 1000)
      </code>
    </div>
    <pre class="code-box">
      <code>
      {{toastCode}}
      </code>
    </pre>
    <div class="btn-box">
      <a class="btn-box__a" href="javascript:" @click="show('toast')">toast</a>
      <code class="btn-box__code" codeFor="toast">
      // toast(toastText, timeout, type, callback) 后三个可省, 不能逆序

      this.$app.toast('toast(toastText, timeout, type, callback) 后三个可省, 不能逆序', 1500, 'middle', () => {
        console.log('toast');
      });
      </code>
      <a class="btn-box__a" href="javascript:" @click="show('toastBottom')">toast - 位置</a>
      <code class="btn-box__code" codeFor="toastBottom">
      // 可传 top/middle/bottom

      this.$app.toast('toast', 'bottom');
      </code>
      <a class="btn-box__a" href="javascript:" @click="show('toastHide')">toastHide - 关闭</a>
      <code class="btn-box__code" codeFor="toastHide">
      // 手动关闭

      this.$app.toastHide();
      </code>
    </div>
    <pre class="code-box">
      <code>
      {{alertCode}}
      </code>
    </pre>
    <div class="btn-box">
      <a class="btn-box__a" href="javascript:" @click="show('alert')">alert</a>
      <code class="btn-box__code" codeFor="alert">
      // alert(content, title, onConfirm) 全非必填, 不能逆序
      // 需要改按钮文案传对象

      this.$app.alert('alert');
      </code>
      <a class="btn-box__a" href="javascript:" @click="show('alertObject')">alert - 传对象</a>
      <code class="btn-box__code" codeFor="alertObject">
      // 直接传入对象
      this.$app.alert({
        title: 'title', // 标题
        content: 'content', // 文本
        btnText: 'btnText', // 按钮文案
        close: false, // 点击确认时是否隐藏弹窗, 默认true
        maskAbled: false, // 点击遮罩是否可隐藏, 默认true
        needCloseBtn: false, // 是否显示关闭按钮, 默认true
        onShow() {
          console.log('onShow');
        },
        onHide() {
          console.log('onHide');
        },
        onConfirm() {
          console.log('onConfirm');
        },
      });
      </code>
      <a class="btn-box__a" href="javascript:" @click="show('alertHide')">alertHide - 关闭</a>
      <code class="btn-box__code" codeFor="alertHide">
      var self = this;
      self.$app.alert('alert');

      setTimeout(function(){

        // 手动关闭

        self.$app.alertHide();

      }, 1000)
      </code>
    </div>
    <pre class="code-box">
      <code>
      {{confirmCode}}
      </code>
    </pre>
    <div class="btn-box">
      <a class="btn-box__a" href="javascript:" @click="show('confirm')">confirm</a>
      <code class="btn-box__code" codeFor="confirm">
      // confirm(content, title, confirmFn) 全非必填, 不能逆序
      // 需要改更多内容传对象

      this.$app.confirm('confirm');
      </code>
      <a class="btn-box__a" href="javascript:" @click="show('confirmObject')">confirm - 传对象</a>
      <code class="btn-box__code" codeFor="confirmObject">
      // 直接传入对象，所有属性非必填

      this.$app.confirm({
        title: 'title',
        content: 'content',
        btnTextCancle: 'btnTextCancle',
        btnTextSubmit: 'btnTextSubmit',
        close: false, // 点击确认时是否隐藏弹窗, 默认true
        maskAbled: true, // 点击遮罩是否可隐藏, 默认false
        needCloseBtn: true, // 是否显示关闭按钮, 默认false
        onCancel() {
          console.log('onCancel');
        },
        onShow() {
          console.log('onShow');
        },
        onHide() {
          console.log('onHide');
        },
        onConfirm() {
          console.log('onConfirm');
        },
      });
      </code>
      <a class="btn-box__a" href="javascript:" @click="show('confirmHide')">confirmHide - 关闭</a>
      <code class="btn-box__code" codeFor="confirmHide">
      var self = this;
      self.$app.confirm('alert');

      setTimeout(function(){

        // 手动关闭

        self.$app.confirmHide();

      }, 1000)
      </code>
    </div>
    <pre class="code-box">
      <code>
      // 后期待补充
      // 样式主题 - px/rem/换肤
      // 组件形式导出
      </code>
    </pre>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      useCode: '',
      toastCode: null,
      alertCode: null,
      confirmCode: null,
      loadingCode: null,
    };
  },
  components: {
  },
  methods: {
    show(key) {
      let codeKey;
      if (/confirm/.test(key)) {
        codeKey = 'confirmCode';
      }
      if (/alert/.test(key)) {
        codeKey = 'alertCode';
      }
      if (/toast/.test(key)) {
        codeKey = 'toastCode';
      }
      if (/loading/.test(key)) {
        codeKey = 'loadingCode';
      }
      if (!codeKey) return false;
      const code = this.getCode(key);
      this[codeKey] = code;
      return eval(code);
    },
    getCode(key) {
      const tagsToReplace = {
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
      };
      const replaceTag = tag => tagsToReplace[tag] || tag;
      const safeTagsReplace = str => str.replace(/(&amp;|&lt;|&gt;)/g, replaceTag);

      return safeTagsReplace(document.querySelector(`code[codeFor=${key}]`).innerHTML);
    },
  },
  mounted() {
    const self = this;
    self.confirmCode = self.getCode('confirm');
    self.alertCode = self.getCode('alert');
    self.toastCode = self.getCode('toast');
    self.loadingCode = self.getCode('loading');
  },
};
</script>

<style lang="less">
  body {
    max-width: 750px;
    margin: 0 auto;
    padding-top: 20px;
    font-size: 14px;
  }

  pre {
    overflow-x: auto;
    word-wrap: normal;
    margin-left: 0;
    box-sizing: border-box;
  }

  pre::-webkit-scrollbar {
    display: none;
  }

  pre, code {
    font-family: 'Source Code Pro', Consolas, 'Liberation Mono', Courier, 'PT Mono', "PingFang SC", "Microsoft YaHei", monospace, serif;
  }
  .code-box {
    margin: 0 5px;
    margin-bottom: 20px;
    background-color: #f4f4f4;
    border: 1px solid #ddd;
    border-radius: 13px;
    box-sizing: border-box;
  }
  .btn-box {
    display: flex;
    margin-bottom: 20px;
  }
  .btn-box__a {
    flex: 1;
    background-color: #ff8bac;
    width: 96%;
    height: 40px;
    line-height: 38px;
    margin: 0 5px;
    text-decoration: none;
    color: #fff;
    text-align: center;
  }
  .btn-box__code {
    display: none;
  }
</style>
