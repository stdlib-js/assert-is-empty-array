// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var t=Object.prototype.toString;var o=Object.prototype.hasOwnProperty;var n="function"==typeof Symbol?Symbol.toStringTag:"";var l=r&&"symbol"==typeof Symbol.toStringTag?function(r){var l,a,e,y,c;if(null==r)return t.call(r);a=r[n],c=n,l=null!=(y=r)&&o.call(y,c);try{r[n]=void 0}catch(o){return t.call(r)}return e=t.call(r),l?r[n]=a:delete r[n],e}:function(r){return t.call(r)};var a=Array.isArray?Array.isArray:function(r){return"[object Array]"===l(r)};function e(r){return a(r)&&0===r.length}export{e as default};
//# sourceMappingURL=mod.js.map
