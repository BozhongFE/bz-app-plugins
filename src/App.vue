<template>
  <div id="app">
    <div class="radio-box">
      <a href="?style=tracker" class="radio-box__a" target="_blank">tracker</a>
      <a href="?style=crazy" class="radio-box__a" target="_blank">crazy</a>
      <a href="?style=ivf" class="radio-box__a" target="_blank">ivf</a>
    </div>
    <pre class="code-box">
      <code>
        一、引入所有插件/requirejs引入
        
        // npm引入
        npm install https://github.com/BozhongFE/bz-app-plugins#v4.1.0

        import AppPlugins from 'bz-app-plugins'; // 引入所有插件
        import 'bz-app-plugins/css/crazy.css'; // 按需引入样式，最底部有样式列表
        ...

        // requirejs引入
        <<!---->link rel="stylesheet" href="https://source.office.bzdev.net/moe/bz-app-plugins/4.1.0/crazy.css">
        
        require(['mod/bz-app-plugins/4.1.0/bz-app-plugins'], function (AppPlugins) {
          ...
        }

        // 初始化插件
        new AppPlugins({ 
          // 外部传入Vue
          Vue: Vue,
          // 需要安装的插件。默认全部，选填。
          plugins: [
            'alert',
            'confirm',
            'toast',
            'loading',
          ],
          // 若不引入内置的样式表，可外部传入，选填。
          cssLink: 'xxx.css',
          base: {
            // 样式计算单位，内部设计稿为375px, 尺寸计算单位为10px，请传入相对于页面的10px，选填。
            fontSize: '10px', 
          },
        });


        二、引入单个插件 

        // npm安装
        npm install https://github.com/BozhongFE/bz-app-plugins#v4.1.0


        import Toast from 'bz-app-plugins/lib/toast'; // 按需引入脚本文件，最底部有脚本列表
        import 'bz-app-plugins/css/crazy.toast.css'; // 按需引入样式，最底部有样式列表

        // 初始化插件
        Vue.use(Toast, { 
          // 样式计算单位，内部设计稿为375px, 尺寸计算单位为10px，请传入相对于页面的10px，选填。
          fontSize: '10px'
        });
        

        三、引入单个组件/样式

        // 按平时使用习惯引入
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

      this.$app.loading(2000);
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
      self.$app.loading('loading', 5000);

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
      // toast(toastText, timeout, type, callback) 后三个可省, 不能逆序, timeOut为0不自动隐藏

      this.$app.toast('toast(toastText, timeout, type, callback) 后三个可省, 不能逆序', 0, 'middle', function() {
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
      var self = this;
      self.$app.toast('toast', 'top');

      setTimeout(function(){

        // 手动关闭
        self.$app.toastHide();
      }, 1000)
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
        title: '', // 标题
        content: 'content', // 文本
        btnText: 'btnText', // 按钮文案
        close: true, // 点击确认时是否隐藏弹窗, 默认true
        cover: 'http://www.ruanyifeng.com/blogimg/asset/2016/bg2016012501.png', // 弹窗顶部图
        maskAbled: true, // 点击遮罩是否可隐藏, 默认true
        needCloseBtn: true, // 是否显示关闭按钮, 默认true
        onShow: function() {
          console.log('onShow');
        },
        onHide: function() {
          console.log('onHide');
        },
        onConfirm: function() {
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
        cover: '', // 弹窗顶部图
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
      self.$app.confirm('confirm');

      setTimeout(function(){

        // 手动关闭

        self.$app.confirmHide();

      }, 1000)
      </code>
    </div>
    <pre class="code-box">
      <code>
      一、模块列表, 按需引入

      // 引入所有插件，无样式
      bz-app-plugins

      // 直接引入单个插件，无样式
      bz-app-plugins/lib/alert.js
      bz-app-plugins/lib/confirm.js
      bz-app-plugins/lib/loading.js
      bz-app-plugins/lib/toast.js


      二、样式列表，按需引入

      // 所有模块的样式, 按主题区分，只需引入其中一个
      bz-app-plugins/css/crazy.css
      bz-app-plugins/css/tracker.css
      bz-app-plugins/css/ivf.css
      
      // 单个插件的样式，按主题及插件区分，按需引入
      // alert和confirm引入.dialog.css
      bz-app-plugins/css/crazy.dialog.css
      bz-app-plugins/css/crazy.loading.css
      bz-app-plugins/css/crazy.toast.css
      bz-app-plugins/css/tracker.dialog.css
      bz-app-plugins/css/tracker.loading.css
      bz-app-plugins/css/tracker.toast.css
      bz-app-plugins/css/ivf.dialog.css
      bz-app-plugins/css/ivf.loading.css
      bz-app-plugins/css/ivf.toast.css


      三、组件列表，若只需要组件时引入, 除animation，其他不含样式

      bz-app-plugins/lib/components/alert.js
      bz-app-plugins/lib/components/confirm.js
      bz-app-plugins/lib/components/dialog.js
      bz-app-plugins/lib/components/loading.js
      bz-app-plugins/lib/components/toast.js
      bz-app-plugins/lib/components/animation/loading.js // loading菊花图
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
      toastCode: '',
      alertCode: '',
      confirmCode: '',
      loadingCode: '',
      initCode: '',
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
    color: #fff;
    text-decoration: none;
    text-align: center;
  }
  .btn-box__code {
    display: none;
  }
  .radio-box {
    margin-bottom: 10px;
  }
  .radio-box__a {
    display: inline-flex;
    align-items: center;
    align-content: center;
    padding: 5px 10px;
    margin: 0 5px;
    border:1px solid #d9d9d9;
    color: #ff8bac;
    text-decoration: none;
    text-align: center;
  }
</style>
