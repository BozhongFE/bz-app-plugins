# bz-app-plugins
播种网web通用控件

## Example

**npm安装**

```shell
npm install https://github.com/BozhongFE/bz-app-plugins#v4.0.0
```

**引用**

```js
// requirejs

<link rel="stylesheet" href="https://source.office.bzdev.net/moe/bz-app-plugins/4.0.0/crazy.css">
      

require(['mod/bz-app-plugins/4.0.0/bz-app-plugins'], function (AppPlugins) {
  ...
}

// 模块内引用
import AppPlugins from 'bz-app-plugins';
```

**初始化**

```js
new AppPlugins({ 
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

## 开发版本日志

|#|版本号|版本内容|
|---|---|---|
|#|1.0.0| vue插件-toast/loading/alert/confirm
|#|2.0.0| rem初始化代码由外部控制传参执行
|#|3.0.0| 新增外部选择性安装插件/样式风格选择/去掉require引用时的default层/npm安装
|#|3.0.1| 修正ExtractTextPlugin配置错误
|#|3.0.2| 低版本安卓机es6兼容问题，降低webpack-dev-server版本
|#|3.0.2| toast可不自动隐藏，弹窗类传空字符串不显示相应的标题/文本
## 打包

```shell
npm run build  // 打包到模块内
npm run build:moe // 打包到source/moe
```

## 后期补充

- 组件形式导出