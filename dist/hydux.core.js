!function(n,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.core=t():(n.hydux=n.hydux||{},n.hydux.core=t())}("undefined"!=typeof self?self:this,function(){return function(n){function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var e={};return t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:r})},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},t.p="",t(t.s=12)}({1:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={none:[],ofPromise:function(n,t,e,r){return[function(o){n(t).then(e).catch(r)}]},ofFn:function(n,t,e,r){return[function(o){try{var u=n(t);u&&e&&e(u)}catch(n){r&&r(n)}}]},ofSub:function(n){return[n]},batch:function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var e=Array.prototype.concat;return e.apply([],e.apply([],n))},map:function(n,t){return t.map(function(t){return function(e){return t(n(e))}})}}},12:function(n,t,e){"use strict";function r(n,t,e){return i.isFunction(n)&&(n=n(t)),i.isFunction(n)&&(n=n(e)),void 0===n||n.then&&"function"==typeof n.then?[t,c.default.none]:n instanceof Array?n:[n,c.default.none]}function o(n){function t(t){void 0===t&&(t=l),t!==l&&(l=t);var e;i.isFunction(e=n.view(l))&&(e=e(o));try{return a(e)}catch(n){console.error(n),s(n)}}function e(o,u,f,a){for(var p in f)i.isFunction(f[p])?function(e,f){u[e]=function(p){o=i.get(a,l);var d=o,v=l,y=c.default.none;try{h=r(f(p),o,u),d=h[0],y=h[1]}catch(n){console.error(n),s(n)}n.onUpdate&&(v=i.setDeep(a,i.merge(o,d),l),n.onUpdate({prevAppState:l,nextAppState:v,msgData:p,action:a.concat(e).join(".")})),d!==o&&(l=v!==l?v:i.setDeep(a,i.merge(o,d),l),t(l)),y.forEach(function(n){return n(u)});var h}}(p,f[p]):e(o[p]||(o[p]={}),u[p]={},f[p],a.concat(p))}var o={},f=n.subscribe||function(n){return c.default.none},a=n.onRender||console.log,s=n.onError||i.noop,p=r(n.init(),void 0,o),l=p[0],d=p[1];return e(l,o,n.actions,[]),d.forEach(function(n){return n(o)}),t(l),f(l).forEach(function(n){return n(o)}),u({},n,{actions:o,getState:function(){return l},render:t})}var u=this&&this.__assign||Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++){t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n};Object.defineProperty(t,"__esModule",{value:!0});var c=e(1);t.Cmd=c.default;var i=e(4);t.noop=i.noop,t.default=o},4:function(n,t,e){"use strict";function r(n,t){for(var e in t)n[e]=t[e];return n}function o(n,t){return r(r(n?new n.constructor:{},n),t)}function u(n,t,e){var r=e?new e.constructor:{};return 0===n.length?t:(r[n[0]]=1<n.length?u(n.slice(1),t,e[n[0]]):t,o(e,r))}function c(n,t){for(var e=0;e<n.length;e++)t=t[n[e]];return t}function i(n){return"function"==typeof n}Object.defineProperty(t,"__esModule",{value:!0}),t.set=r,t.merge=o,t.setDeep=u,t.get=c,t.isFunction=i,t.noop=function(n){return n}}})});
//# sourceMappingURL=hydux.core.js.map