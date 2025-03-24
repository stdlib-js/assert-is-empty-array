// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var t=Object.prototype.toString;var o=Object.prototype.hasOwnProperty;var n="function"==typeof Symbol?Symbol:void 0,l="function"==typeof n?n.toStringTag:"";var a=r&&"symbol"==typeof Symbol.toStringTag?function(r){var n,a,e,y,c;if(null==r)return t.call(r);a=r[l],c=l,n=null!=(y=r)&&o.call(y,c);try{r[l]=void 0}catch(o){return t.call(r)}return e=t.call(r),n?r[l]=a:delete r[l],e}:function(r){return t.call(r)};var e=Array.isArray?Array.isArray:function(r){return"[object Array]"===a(r)};function y(r){return e(r)&&0===r.length}export{y as default};
//# sourceMappingURL=mod.js.map
