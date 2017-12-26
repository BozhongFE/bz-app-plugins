import AppAlert from './alert/index.js';
import AppConfirm from './confirm/index.js';
import AppToast from './toast/index.js';
import AppLoading from './loading/index.js';

const initRem = (pageWidth = 750) => {
  (function(scope){
    // 下面750对应设计稿的宽度
    // document.body.innerHTML = window.innerWidth;
    var ua = navigator.userAgent.toLocaleLowerCase();
    var eventName = 'onorientationchange' in scope ? 'orientationchange' : 'resize';
    var howLong = /chrome|firefox|ucbrowser|mqqbrowser/.test(ua) || (/safari/.test(ua) && /iphone/.test(ua)) ? 0 : 300;
    var winWidth = document.documentElement.clientWidth;
    var docWidth = window.innerWidth;
    docWidth = docWidth > pageWidth ? pageWidth: docWidth;
    var _width = winWidth < docWidth ? winWidth : docWidth; // 兼容部分奇怪的安卓机
    document.documentElement.style.fontSize = (_width / pageWidth * 40) + 'px';
    scope.addEventListener(eventName, function(){
      clearTimeout(scope.orientationChangedTimeout);
      scope.orientationChangedTimeout = setTimeout(function(){
        document.documentElement.style.fontSize = (_width / pageWidth * 40) + 'px';
      }, howLong);
    }, false);
  }(window));
}

export default {
  initRem,
  plugins: {
    AppAlert,
    AppConfirm,
    AppToast,
    AppLoading,
  }
};
