!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.logger=e():(t.hydux=t.hydux||{},t.hydux.logger=e())}("undefined"!=typeof self?self:this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=16)}({0:function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},16:function(t,e,n){"use strict";(function(t){function o(t,e,n){console.group("%c action","color: gray; font-weight: lighter;",e.name),console.log("%c prev state","color: #9E9E9E; font-weight: bold;",t),console.log("%c data","color: #03A9F4; font-weight: bold;",e.data),console.log("%c next state","color: #4CAF50; font-weight: bold;",n),console.groupEnd()}function r(e){var n=void 0===e?{}:e,r=n.logger,c=void 0===r?o:r,a=n.windowInspectKey,f=void 0===a?"__HYDUX_STATE__":a,p="undefined"!=typeof window?window:void 0!==t?t:{};return function(t){return function(e){return t(i({},e,{init:function(){var t=e.init(),n=t;return t instanceof Array&&(n=t[0]),f&&(p[f]={prevAppState:void 0,nextAppState:n,action:"@@hydux/INIT",msgData:void 0}),t},onUpdate:function(t){e.onUpdate&&e.onUpdate(t);var n=t.action.split(".").slice(0,-1),o=(u.get(n,t.prevAppState),u.get(n,t.nextAppState));c(t.prevAppState,{name:t.action,data:t.msgData},o),f&&(p[f]=t)}}))}}}var i=this&&this.__assign||Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++){e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t};Object.defineProperty(e,"__esModule",{value:!0});var u=n(4);e.default=r}).call(e,n(0))},4:function(t,e,n){"use strict";function o(t,e){for(var n in e)t[n]=e[n];return t}function r(t,e){return o(o({},t),e)}function i(t,e,n){var o={};return 0===t.length?e:(o[t[0]]=1<t.length?i(t.slice(1),e,n[t[0]]):e,r(n,o))}function u(t,e){for(var n=0;n<t.length;n++)e=e[t[n]];return e}function c(t){return"function"==typeof t}Object.defineProperty(e,"__esModule",{value:!0}),e.set=o,e.merge=r,e.setDeep=i,e.get=u,e.isFunction=c,e.noop=function(t){return t}}})});
//# sourceMappingURL=hydux.logger.js.map