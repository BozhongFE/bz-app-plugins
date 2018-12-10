# bz-app-plugins
播种网web通用控件

## Example

**引入所有插件/requirejs引入**

```shell

  // npm引入
  npm install https://github.com/BozhongFE/bz-app-plugins#v4.0.0

  import AppPlugins from 'bz-app-plugins'; // 引入所有插件
  import 'bz-app-plugins/css/crazy.css'; // 按需引入样式，最底部有样式列表
  ...

  // requirejs引入
  <link rel="stylesheet" href="https://source.office.bzdev.net/moe/bz-app-plugins/4.0.0/crazy.css">

  require(['mod/bz-app-plugins/4.0.0/bz-app-plugins'], function (AppPlugins) {
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

```

**引入单个插件**

```shell

  // npm安装
  npm install https://github.com/BozhongFE/bz-app-plugins#v4.0.0


  import Toast from 'bz-app-plugins/lib/toast'; // 按需引入脚本文件，最底部有脚本列表
  import 'bz-app-plugins/css/crazy.toast.css'; // 按需引入样式，最底部有样式列表

  // 初始化插件
  Vue.use(Toast, { 
    // 样式计算单位，内部设计稿为375px, 尺寸计算单位为10px，请传入相对于页面的10px，选填。
    fontSize: '10px'
  });

```

**引入单个组件/样式**

  按平时使用习惯引入

**插件使用**

loading

```js
// loading(content = '', timeout, callback) 全非必填, 不能逆序, 不填时间不隐藏
this.$app.loading(2000);

this.$app.loading('loading', 1500, () => {
  console.log('loading');
});

// 手动关闭
this.$app.loadingHide();
```

toast

```js
// toast(toastText, timeout, type, callback) 后三个可省, 不能逆序
// timeout为0不自动隐藏
this.$app.toast('toast', 1500, 'middle', () => {
  console.log('toast');
});

// type可传 top/middle/bottom
this.$app.toast('toast', 'bottom');

// 手动关闭
this.$app.toastHide();
```

alert

```js
// alert(content, title, onConfirm) 全非必填, 不能逆序
this.$app.alert('alert');

// 更多配置直接传入对象，所有属性非必填
this.$app.alert({
  title: 'title', // 标题, 传空字符串则不显示
  content: 'content', // 文本, 传空字符串则不显示
  btnText: 'btnText', // 按钮文案
  close: true, // 点击确认时是否隐藏弹窗, 默认true
  maskAbled: true, // 点击遮罩是否可隐藏, 默认true
  needCloseBtn: true, // 是否显示关闭按钮, 默认true
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

// 手动关闭
this.$app.alertHide();
```

confirm

```js
// confirm(content, title, confirmFn) 全非必填, 不能逆序
this.$app.confirm('confirm');

// 更多配置直接传入对象，所有属性非必填
this.$app.confirm({
  title: 'title', // 标题, 传空字符串则不显示
  content: 'content', // 文本, 传空字符串则不显示
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

// 手动关闭
this.$app.confirmHide();
```

## 模块列表，按需引入

```shell
<!-- 插件列表 -->

// 引入所有插件，无样式
bz-app-plugins

// 直接引入单个插件，无样式
bz-app-plugins/lib/alert.js
bz-app-plugins/lib/confirm.js
bz-app-plugins/lib/loading.js
bz-app-plugins/lib/toast.js

<!-- 样式列表 -->
// 所有模块的样式, 按主题区分，只需引入其中一个
bz-app-plugins/css/crazy.css
bz-app-plugins/css/tracker.css

// 单个插件的样式，按主题及插件区分，按需引入
// alert和confirm引入.dialog.css
bz-app-plugins/css/crazy.dialog.css
bz-app-plugins/css/crazy.loading.css
bz-app-plugins/css/crazy.toast.css
bz-app-plugins/css/tracker.dialog.css
bz-app-plugins/css/tracker.loading.css
bz-app-plugins/css/tracker.toast.css

<!-- 组件列表，若只需要组件时引入, 除animation/，其他不含样式 -->
bz-app-plugins/lib/components/alert.js
bz-app-plugins/lib/components/confirm.js
bz-app-plugins/lib/components/dialog.js
bz-app-plugins/lib/components/loading.js
bz-app-plugins/lib/components/toast.js
bz-app-plugins/lib/components/animation/loading.js // loading菊花图

```

## 开发版本日志

|#|版本号|版本内容|
|---|---|---|
|#|1.0.0| vue插件-toast/loading/alert/confirm
|#|2.0.0| rem初始化代码由外部控制传参执行
|#|3.0.0| 新增外部选择性安装插件/样式风格选择/去掉require引用时的default层/npm安装
|#|3.0.1| 修正ExtractTextPlugin配置错误
|#|3.0.2| 低版本安卓机es6兼容问题，降低webpack-dev-server版本
|#|3.0.2| toast可不自动隐藏，弹窗类传空字符串不显示相应的标题/文本
|#|4.0.0| 更新webpack配置，去除rem相关内容，内部样式尺寸单位改em，模块/样式/组件拆分外部可按需引入。

## 打包

```shell
npm run build  // 只打包到 模块内
npm run build:moe // 打包到source/moe 以及 模块内 
```
