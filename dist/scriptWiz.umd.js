var scriptWiz=function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(t,e,r,n){void 0===n&&(n=r),Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[r]}})}:function(t,e,r,n){void 0===n&&(n=r),t[n]=e[r]}),i=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),a=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)"default"!==r&&Object.prototype.hasOwnProperty.call(t,r)&&n(e,t,r);return i(e,t),e};Object.defineProperty(e,"__esModule",{value:!0}),e.helper=void 0;var u=a(r(1));e.helper=u},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.parseInput=e.hexString=e.hexNumber=e.hexLittleEndian=e.fillStackDataString=e.fillStackDataNumber=e.fillStackDataByte=void 0;var n=function(t){var e=t;t<=-1&&-127<=t&&(e=128-t);var r=e.toString(16);return r.length%2==1&&(r="0"+r),r};e.hexNumber=n;var i=function(t){var e,r="";for(e=0;e<t.length;e++){r+=("0"+t.charCodeAt(e).toString(16)).slice(-2)}return r};e.hexString=i;var a=function(t){if(t.length%2==0){var e="0x",r=0;t.startsWith("0x")&&(r=2);for(var n=t.length;n>r;n-=2)e+=t.substring(n-2,n);return e}return console.warn("its odd"),"something went wrong"};e.hexLittleEndian=a;var u=function(t){var e,r=t;t.length%2==1&&(r=t.substr(0,t.length-1)+"0"+t.substr(t.length-1,1));var n=void 0,i=a(r),u=parseInt(i);return u<=2147483647?(n=u,e=u):e=r,{input:t,numberValue:n,byteValue:r,byteValueDisplay:e.toString()}};e.fillStackDataByte=u;var o=function(t){var e,r=Number(t),i=n(r),u=a(i),o=void 0,l=u;return r<=2147483647?(o=r,l=t,e=u,127<r&&r<256&&(e=u+"00")):(l=u+"00",e=u+"00"),{input:t,numberValue:o,byteValueDisplay:l,byteValue:e}};e.fillStackDataNumber=o;var l=function(t){var e="0x"+i(t),r=parseInt(e),n=void 0;return r<=2147483647&&(n=r),{input:t,byteValue:e,byteValueDisplay:t,numberValue:n}};e.fillStackDataString=l;e.parseInput=function(t){var e=void 0;if(t.startsWith("<")&&t.endsWith(">")?e=t.substr(1,t.length-2):t.startsWith("OP_")&&(e=t),e)return s(e);throw"it is not a valid input"};var s=function(t){if(t.startsWith("0x"))return console.log("byte data input"),u(t);if(t.startsWith('"')&&t.endsWith('"')||t.startsWith("'")&&t.endsWith("'")){var e=t.substr(1,t.length-2);return l(e)}if(!t.startsWith("OP_")){if(isNaN(t))throw console.log("what happend"),"it is not a valid input";return console.log("number data input"),o(t)}return console.log("op data input"),{input:"",byteValue:"",byteValueDisplay:""}}}]);
//# sourceMappingURL=scriptWiz.umd.js.map