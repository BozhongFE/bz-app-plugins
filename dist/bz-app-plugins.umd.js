!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e(require("vue"));else if("function"==typeof define&&define.amd)define(["vue"],e);else{var n=e("object"==typeof exports?require("vue"):t.vue);for(var o in n)("object"==typeof exports?exports:t)[o]=n[o]}}("undefined"!=typeof self?self:this,function(t){return function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=28)}([function(t,e){t.exports=function(t,e,n,o,i,a){var r,s=t=t||{},l=typeof t.default;"object"!==l&&"function"!==l||(r=t,s=t.default);var c="function"==typeof s?s.options:s;e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0),n&&(c.functional=!0),i&&(c._scopeId=i);var u;if(a?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},c._ssrRegister=u):o&&(u=o),u){var f=c.functional,d=f?c.render:c.beforeCreate;f?(c._injectStyles=u,c.render=function(t,e){return u.call(e),d(t,e)}):c.beforeCreate=d?[].concat(d,u):[u]}return{esModule:r,exports:s,options:c}}},function(t,e,n){"use strict";e.a={name:"app-dialog",props:{value:{type:Boolean,default:!1},maskAbled:{type:Boolean,default:!0},needCloseBtn:{type:Boolean,defalut:!1},fontSize:{type:String,default:"10px"}},data:function(){return{currentValue:!1}},watch:{value:{handler:function(t){this.currentValue=t},immediate:!0},currentValue:function(t){this.$emit(t?"on-show":"on-hide")}},created:function(){void 0!==this.value&&(this.currentValue=this.value)},methods:{onTouchMove:function(t){t.preventDefault()}}}},function(t,e,n){"use strict";e.a={name:"app-toast",props:{type:{type:String,default:"middle"},content:{type:String,default:null},fontSize:{type:String,default:"10px"}},data:function(){return{currentValue:!1}},methods:{onTouchMove:function(t){t.preventDefault()}}}},function(t,e){},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),i=n(5),a=n(0),r=a(o.a,i.a,!1,null,null,null);e.default=r.exports},function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.currentValue,expression:"currentValue"}],staticClass:"app-dialog",style:"font-size: "+t.fontSize,on:{touchmove:t.onTouchMove}},[n("div",{staticClass:"app-dialog__mask",on:{click:function(e){t.maskAbled&&(t.currentValue=!1)}}}),t._v(" "),n("div",{staticClass:"app-dialog__box"},[t._t("default"),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.needCloseBtn,expression:"needCloseBtn"}],staticClass:"app-dialog__close",on:{click:function(e){t.needCloseBtn&&(t.currentValue=!1)}}})],2)])},i=[],a={render:o,staticRenderFns:i};e.a=a},function(t,e,n){"use strict";var o=n(4);e.a={name:"app-alert",components:{AppDialog:o.default},props:{maskAbled:{type:Boolean,default:!0},needCloseBtn:{type:Boolean,default:!0},title:{type:String,default:null},content:{type:String,default:null},btnText:{type:String,default:"确认"},close:{type:Boolean,default:!0},fontSize:{type:String,default:"10px"}},data:function(){return{currentValue:!1}},methods:{onConfirm:function(){this.currentValue=!this.close,this.$emit("on-confirm")},onHide:function(){this.currentValue=!1,this.$emit("on-hide")},onShow:function(){this.$emit("on-show")}}}},function(t,e,n){"use strict";var o=n(10);e.a={name:"app-loading",props:{currentValue:{type:Boolean,default:!1},content:{type:String,defalut:null},fontSize:{type:String,default:"10px"}},data:function(){return{}},watch:{},methods:{onTouchMove:function(t){t.preventDefault()}},components:{Loading:o.default}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),i=n(9),a=n(0),r=a(o.a,i.a,!1,null,null,null);e.default=r.exports},function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.currentValue,expression:"currentValue"}],staticClass:"app-toast",class:["app-toast--"+t.type],style:"font-size: "+t.fontSize,on:{touchmove:t.onTouchMove}},[n("div",{staticClass:"app-toast__main"},[t._t("default",[n("div",{staticClass:"app-toast__content",domProps:{innerHTML:t._s(t.content)}})])],2)])},i=[],a={render:o,staticRenderFns:i};e.a=a},function(t,e,n){"use strict";function o(t){n(11)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(3),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);var s=n(16),l=n(0),c=o,u=l(a.a,s.a,!1,c,"data-v-5da52687",null);e.default=u.exports},function(t,e,n){var o=n(12);"string"==typeof o&&(o=[[t.i,o,""]]);var i={hmr:!0};i.transform=void 0;n(14)(o,i);o.locals&&(t.exports=o.locals)},function(t,e,n){e=t.exports=n(13)(!1),e.push([t.i,"\n@-webkit-keyframes colorChange-data-v-5da52687 {\n0% {\n    opacity: 1;\n}\n100% {\n    opacity: 0;\n}\n}\n@keyframes colorChange-data-v-5da52687 {\n0% {\n    opacity: 1;\n}\n100% {\n    opacity: 0;\n}\n}\n.animation-loading[data-v-5da52687] {\n  position: relative;\n  width: 2.6em;\n  height: 2.6em;\n  box-sizing: border-box;\n  font-size: inherit;\n}\n.loading-item[data-v-5da52687] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n.loading-item__block[data-v-5da52687] {\n  position: absolute;\n  left: 0;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  display: block;\n  width: 0.65em;\n  height: 0.3em;\n  border-radius: 0.15em;\n  background-color: #fff;\n}\n.loading-item__block[data-v-5da52687]:last-child {\n  opacity: 0;\n  background-color: #949497;\n  -webkit-animation-name: colorChange-data-v-5da52687;\n          animation-name: colorChange-data-v-5da52687;\n  -webkit-animation-duration: 1.5s;\n          animation-duration: 1.5s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n}\n",""])},function(t,e){function n(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var a=o(i);return[n].concat(i.sources.map(function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"})).concat([a]).join("\n")}return[n].join("\n")}function o(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var o=n(e,t);return e[2]?"@media "+e[2]+"{"+o+"}":o}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},i=0;i<this.length;i++){var a=this[i][0];"number"==typeof a&&(o[a]=!0)}for(i=0;i<t.length;i++){var r=t[i];"number"==typeof r[0]&&o[r[0]]||(n&&!r[2]?r[2]=n:n&&(r[2]="("+r[2]+") and ("+n+")"),e.push(r))}},e}},function(t,e,n){function o(t,e){for(var n=0;n<t.length;n++){var o=t[n],i=v[o.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](o.parts[a]);for(;a<o.parts.length;a++)i.parts.push(u(o.parts[a],e))}else{for(var r=[],a=0;a<o.parts.length;a++)r.push(u(o.parts[a],e));v[o.id]={id:o.id,refs:1,parts:r}}}}function i(t,e){for(var n=[],o={},i=0;i<t.length;i++){var a=t[i],r=e.base?a[0]+e.base:a[0],s=a[1],l=a[2],c=a[3],u={css:s,media:l,sourceMap:c};o[r]?o[r].parts.push(u):n.push(o[r]={id:r,parts:[u]})}return n}function a(t,e){var n=h(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=y[y.length-1];if("top"===t.insertAt)o?o.nextSibling?n.insertBefore(e,o.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),y.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=h(t.insertInto+" "+t.insertAt.before);n.insertBefore(e,i)}}function r(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=y.indexOf(t);e>=0&&y.splice(e,1)}function s(t){var e=document.createElement("style");return t.attrs.type="text/css",c(e,t.attrs),a(t,e),e}function l(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",c(e,t.attrs),a(t,e),e}function c(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function u(t,e){var n,o,i,a;if(e.transform&&t.css){if(!(a=e.transform(t.css)))return function(){};t.css=a}if(e.singleton){var c=_++;n=b||(b=s(e)),o=f.bind(null,n,c,!1),i=f.bind(null,n,c,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=l(e),o=p.bind(null,n,e),i=function(){r(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(e),o=d.bind(null,n),i=function(){r(n)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else i()}}function f(t,e,n,o){var i=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=C(e,i);else{var a=document.createTextNode(i),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(a,r[e]):t.appendChild(a)}}function d(t,e){var n=e.css,o=e.media;if(o&&t.setAttribute("media",o),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function p(t,e,n){var o=n.css,i=n.sourceMap,a=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||a)&&(o=g(o)),i&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var r=new Blob([o],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(r),s&&URL.revokeObjectURL(s)}var v={},m=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),h=function(t){var e={};return function(n){if(void 0===e[n]){var o=t.call(this,n);if(o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(t){o=null}e[n]=o}return e[n]}}(function(t){return document.querySelector(t)}),b=null,_=0,y=[],g=n(15);t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=m()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=i(t,e);return o(n,e),function(t){for(var a=[],r=0;r<n.length;r++){var s=n[r],l=v[s.id];l.refs--,a.push(l)}if(t){o(i(t,e),e)}for(var r=0;r<a.length;r++){var l=a[r];if(0===l.refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete v[l.id]}}}};var C=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,o=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(i))return t;var a;return a=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(a)+")"})}},function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"animation-loading"},t._l(12,function(e){return n("div",{key:e,staticClass:"loading-item",style:"transform: rotate("+30*e+"deg)"},[n("em",{staticClass:"loading-item__block"}),t._v(" "),n("em",{staticClass:"loading-item__block",style:"animation-delay: "+.125*e+"s;"})])}))},i=[],a={render:o,staticRenderFns:i};e.a=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(6),i=n(18),a=n(0),r=a(o.a,i.a,!1,null,null,null);e.default=r.exports},function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-alert"},[n("app-dialog",{attrs:{value:t.currentValue,maskAbled:t.maskAbled,needCloseBtn:t.needCloseBtn,fontSize:t.fontSize},on:{"on-hide":t.onHide,"on-show":t.onShow}},[n("div",{staticClass:"app-dialog__hd"},[t._t("title",[t.title?n("div",{staticClass:"app-dialog__title",domProps:{innerHTML:t._s(t.title)}}):t._e()])],2),t._v(" "),n("div",{staticClass:"app-dialog__bd"},[t._t("default",[t.content?n("div",{staticClass:"app-dialog__content",domProps:{innerHTML:t._s(t.content)}}):t._e()])],2),t._v(" "),n("div",{staticClass:"app-dialog__ft"},[t._t("btn",[n("div",{staticClass:"app-dialog__btn app-dialog__btn--primary",on:{click:function(e){t.onConfirm(!1)}}},[n("span",{staticClass:"app-dialog__btn-text",domProps:{innerHTML:t._s(t.btnText)}})])])],2)])],1)},i=[],a={render:o,staticRenderFns:i};e.a=a},function(t,e,n){"use strict";var o=n(4);e.a={name:"app-confirm",components:{AppDialog:o.default},props:{maskAbled:{type:Boolean,default:!1},needCloseBtn:{type:Boolean,default:!1},title:{type:String,default:null},content:{type:String,default:null},btnTextSubmit:{type:String,default:"确认"},btnTextCancle:{type:String,default:"取消"},close:{type:Boolean,default:!0},fontSize:{type:String,default:"10px"}},data:function(){return{currentValue:!1}},methods:{onClick:function(t){t?(this.currentValue=!this.close,this.$emit("on-confirm")):(this.currentValue=!1,this.$emit("on-cancel"))},onHide:function(){this.currentValue=!1,this.$emit("on-hide")},onShow:function(){this.$emit("on-show")}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(7),i=n(21),a=n(0),r=a(o.a,i.a,!1,null,null,null);e.default=r.exports},function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.currentValue,expression:"currentValue"}],staticClass:"app-loading",style:"font-size: "+t.fontSize,on:{touchmove:t.onTouchMove}},[n("div",{staticClass:"app-loading__box"},[n("em",{staticClass:"app-loading__icon"}),t._v(" "),n("loading",{staticClass:"app-loading__loading"}),t._v(" "),t.content?n("span",{staticClass:"app-loading__content",domProps:{innerHTML:t._s(t.content)}}):t._e(),t._v(" "),t._t("default")],2)])},i=[],a={render:o,staticRenderFns:i};e.a=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(17),i=null,a={};e.default=a.install=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.fontSize,a=void 0===n?"10px":n;if(!i){var r=t.extend(o.default);i=new r({el:document.createElement("div")}),document.body.appendChild(i.$el)}i.fontSize=a;var s={content:"",title:"提示",close:!0,maskAbled:!0,needCloseBtn:!0,btnText:"确认",onConfirm:null,onShow:null,onHide:null},l=function(){for(var t=Object.assign({},s),e=arguments.length,n={},o=0;o<e;o+=1){var a=arguments.length<=0?void 0:arguments[0];if("string"==typeof a)0===o?n.content=a:n.title=a;else{var r=Object.prototype.toString.call(a);"[object Function]"===r?n.onConfirm=a:"[object Object]"===r&&Object.assign(n,a)}}Object.assign(t,n);for(var l=Object.keys(t),c=l.length,u=0;u<c;u+=1){var f=l[u];/^on.*$/.test(f)||(i[f]=t[f])}i.watcher&&i.watcher(),i.watcher=i.$watch("currentValue",function(e){return e?t.onShow&&t.onShow(i):(i.watcher&&i.watcher(),i.watcher=null,t.onHide&&t.onHide(i))}),i.$off("on-confirm").$on("on-confirm",function(){return t.onConfirm&&t.onConfirm()}),i.currentValue=!0},c=function(){i.currentValue=!1};t.$app||(t.$app={}),Object.assign(t.$app,{alert:l,alertHide:c}),t.mixin({created:function(){this.$app=t.$app}})}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(24),i=null,a={};e.default=a.install=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.fontSize,a=void 0===n?"10px":n;if(!i){var r=t.extend(o.a);i=new r({el:document.createElement("div")}),document.body.appendChild(i.$el)}i.fontSize=a;var s={content:"",title:"提示",close:!0,maskAbled:!0,needCloseBtn:!0,btnTextCancle:"取消",btnTextSubmit:"确认",onCancel:null,onConfirm:null,onShow:null,onHide:null},l=function(){for(var t=Object.assign({},s),e=arguments.length,n={},o=0;o<e;o+=1){var a=arguments.length<=0?void 0:arguments[0];if("string"==typeof a)0===o?n.content=a:n.title=a;else{var r=Object.prototype.toString.call(a);"[object Function]"===r?n.onConfirm=a:"[object Object]"===r&&Object.assign(n,a)}}Object.assign(t,n);for(var l=Object.keys(t),c=l.length,u=0;u<c;u+=1){var f=l[u];/^on.*$/.test(f)||(i[f]=t[f])}i.watcher&&i.watcher(),i.watcher=i.$watch("currentValue",function(e){return e?t.onShow&&t.onShow(i):(i.watcher&&i.watcher(),i.watcher=null,t.onHide&&t.onHide(i))}),i.$off("on-cancel").$on("on-cancel",function(){return t.onCancel&&t.onCancel()}),i.$off("on-confirm").$on("on-confirm",function(){return t.onConfirm&&t.onConfirm()}),i.currentValue=!0},c=function(){i.currentValue=!1};t.$app||(t.$app={}),Object.assign(t.$app,{confirm:l,confirmHide:c}),t.mixin({created:function(){this.$app=t.$app}})}},function(t,e,n){"use strict";var o=n(19),i=n(25),a=n(0),r=a(o.a,i.a,!1,null,null,null);e.a=r.exports},function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-confirm"},[n("app-dialog",{attrs:{fontSize:t.fontSize,value:t.currentValue,maskAbled:t.maskAbled,needCloseBtn:t.needCloseBtn},on:{"on-hide":t.onHide,"on-show":t.onShow}},[n("div",{staticClass:"app-dialog__hd"},[t._t("title",[t.title?n("div",{staticClass:"app-dialog__title",domProps:{innerHTML:t._s(t.title)}}):t._e()])],2),t._v(" "),n("div",{staticClass:"app-dialog__bd"},[t._t("default",[t.content?n("div",{staticClass:"app-dialog__content",domProps:{innerHTML:t._s(t.content)}}):t._e()])],2),t._v(" "),n("div",{staticClass:"app-dialog__ft"},[t._t("btn",[n("div",{staticClass:"app-dialog__btn app-dialog__btn--default",on:{click:function(e){t.onClick(!1)}}},[n("span",{staticClass:"app-dialog__btn-text",domProps:{innerHTML:t._s(t.btnTextCancle)}})]),t._v(" "),n("div",{staticClass:"app-dialog__btn app-dialog__btn--primary",on:{click:function(e){t.onClick(!0)}}},[n("span",{staticClass:"app-dialog__btn-text",domProps:{innerHTML:t._s(t.btnTextSubmit)}})])])],2)])],1)},i=[],a={render:o,staticRenderFns:i};e.a=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(8),i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a=null,r={};e.default=r.install=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.fontSize,r=void 0===n?"10px":n;if(!a){var s=t.extend(o.default);a=new s({el:document.createElement("div")}),document.body.appendChild(a.$el)}a.fontSize=r;var l=null,c=function(){l&&window.clearTimeout(l),a.content="",a.type="middle";for(var t=null,e=1500,n=arguments.length,o=0;o<n;o+=1){var r=arguments.length<=o?void 0:arguments[o];if("[object Function]"===Object.prototype.toString.call(r))t=r;else{var s=void 0===r?"undefined":i(r);"string"===s?0!==o&&/middle|top|bottom/.test(r)?a.type=r:a.content=r:"number"===s&&(e=r)}}if(a.currentValue=!0,!e)return t&&t(a);l=setTimeout(function(){return a.currentValue=!1,t&&t(a)},e)},u=function(){l&&window.clearTimeout(l),a.currentValue=!1};t.$app||(t.$app={}),Object.assign(t.$app,{toast:c,toastHide:u}),t.mixin({created:function(){this.$app=t.$app}})}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(20),i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a=null,r={};e.default=r.install=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.fontSize,r=void 0===n?"10px":n;if(!a){var s=t.extend(o.default);a=new s({el:document.createElement("div")}),document.body.appendChild(a.$el)}a.fontSize=r;var l=null,c=function(){l&&window.clearTimeout(l),a.content="";for(var t=null,e=0,n=arguments.length,o=0;o<n;o+=1){var r=arguments.length<=o?void 0:arguments[o];if("[object Function]"===Object.prototype.toString.call(r))t=r;else{var s=void 0===r?"undefined":i(r);"string"===s?a.content=r:"number"===s&&(e=r)}}if(a.currentValue=!0,!e)return t&&t(a);l=setTimeout(function(){return a.currentValue=!1,t&&t(a)},e)},u=function(){l&&window.clearTimeout(l),a.currentValue=!1};t.$app||(t.$app={}),Object.assign(t.$app,{loading:c,loadingHide:u}),t.mixin({created:function(){this.$app=t.$app}})}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(29);e.default=o.a},function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=n(22),a=n(23),r=n(26),s=n(27),l=n(30),c=n.n(l),u={Alert:i.default,Confirm:a.default,Toast:r.default,Loading:s.default},f=function t(e){o(this,t);for(var n=e.plugins||Object.keys(u),i=n.length,a=0;a<i;a+=1){var r=n[a];if(r){var s=""+r[0].toUpperCase()+r.slice(1);u[s]&&c.a.use(u[s],e.base)}}if(e.cssLink){var l=document.createElement("link");l.rel="stylesheet",l.href=e.cssLink,document.head.appendChild(l)}};e.a=f},function(e,n){e.exports=t}]).default});