# bz-app-plugins
播种网web通用控件

## 接口

`initRem(pageSize)`

  初始化rem，若外部已有可以省略，但需要pageSize/40的比例，默认750/40

`init(option)`

  **Arguments**

  - `option` (Object)
    - `vue` (Object) 必填，Vue实例
    - `cssLink` (String) 可选，外部传入样式表，配置后不会引入内部样式表，同时style参数无效
    - `style` (String) 可选，内部样式表，暂含tracker/trackerrem/crazy三种模式，默认trackerrem
    - `domain` (String) 可选，source域名，用于拼接内部样式表路径，默认指向各环境source
    - `plugins` (Array) 可选，需安装的插件，暂含alert/confirm/toast/loading，默认全部

内部插件具体使用看Example ↓↓

## Example

**npm安装**

```shell
npm install https://github.com/BozhongFE/bz-app-plugins#v3.0.0
```

**引用**

```js
// requirejs
require(['mod/bz-app-plugins/3.0.0/bz-app-plugins'], function (AppPlugins) {
  ...
}

// 模块内引用
import AppPlugins from 'bz-app-plugins';
```

**初始化**

```js
const Plugins = new AppPlugins;

// 初始化rem，若外部已有可以省略，但需要pageSize/40的比例，默认750/40
Plugins.initRem();

// 初始化插件
Plugins.init({
  // 必填，内部无Vue，需传入
  vue: Vue,
  // 外部传入样式表，配置后不会引入内部样式表，同时style参数无效
  cssLink: '//source.bozhong.com/m/css/m_bbs_public.css',
  // 内部样式表，暂含tracker/trackerrem/crazy三种模式，默认trackerrem
  style: 'crazy',
  // source域名，用于拼接内部样式表路径，默认指向各环境source
  domain: '//scdn.bozhong.com/source',
  // 需安装的插件，暂含alert/confirm/toast/loading，默认全部
  plugins: [
    'alert',
    'confirm',
    'toast',
    'loading',
  ],
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
  title: 'title', // 标题
  content: 'content', // 文本
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

## 打包

```shell
npm run build  // 打包到模块内
npm run build:moe // 打包到source/moe
```

## 后期补充

- 组件形式导出