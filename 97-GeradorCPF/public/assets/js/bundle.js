!function(n){var t={};function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)e.d(r,o,function(t){return n[t]}.bind(null,o));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=4)}([function(n,t,e){var r=e(1);"string"==typeof r&&(r=[[n.i,r,""]]);var o={insert:"head",singleton:!1};e(3)(r,o);r.locals&&(n.exports=r.locals)},function(n,t,e){(t=n.exports=e(2)(!1)).push([n.i,"@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap);",""]),t.push([n.i,":root {\n  --primary-color: rgb(17, 86, 102);\n  --primary-color-darker: rgb(9, 48, 56);\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  outline: 0;\n}\n\nbody {\n  background: var(--primary-color);\n  font-family: 'Open sans', sans-serif;\n  font-size: 1.3em;\n  line-height: 1.5em;\n}\n\n.container {\n  align-self: center;\n  width: 640px;\n  background: #fff;\n  padding: 20px;\n  margin: 100px auto;\n  border-radius: 10px;\n}\n\nform input, form label, form button {\n  display: block;\n  width: 100%;\n  margin-bottom: 10px;\n}\n\nform input {\n  font-size: 24px;\n  height: 50px;\n  padding: 0 20px;\n}\n\nform input:focus {\n  outline: 1px solid var(--primary-color);\n}\n\nform button {\n  border: none;\n  background: var(--primary-color);\n  color: #fff;\n  font-size: 18px;\n  font-weight: 700;\n  height: 50px;\n  cursor: pointer;\n  margin-top: 30px;\n}\n\nform button:hover {\n  background: var(--primary-color-darker);\n}\n\n.container h1 {\n  text-align: center;\n  margin-bottom: 40px;\n}\n\n.container .cpf-gerado {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  font-size: 28px;\n  font-weight: bold;\n  \n  margin-bottom: 20px;\n  color: var(--primary-color);\n}\n\n.container .button-gerar {\n  width: 100%;\n  height: 55px;\n\n  font-size: 19px;\n  margin-bottom: 15px;\n\n\n  cursor: pointer;\n  border: none;\n  border-radius: 8px;\n\n  color: white;\n  background: var(--primary-color);\n\n}\n\n.container .button-gerar:hover {\n  background: var(--primary-color-darker);\n  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.229);\n}\n\n.container .button-limpar {\n  width: 100%;\n  height: 55px;\n\n  font-size: 19px;\n  margin-bottom: 15px;\n\n\n  cursor: pointer;\n  border: none;\n  border-radius: 8px;\n\n  color: white;\n  background: rgba(255, 0, 0, 0.716);\n\n}\n\n\n.container .button-limpar:hover {\n  background: rgba(199, 26, 26, 0.765);\n  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.626);\n}\n\n\n@media (max-width: 680px) {\n  .container {\n    width: 550px;\n  }\n}\n\n@media (max-width: 572px) {\n  .container {\n    width: 500px;\n  }\n}\n\n@media (max-width: 520px) {\n  .container {\n    width: 450px;\n  }\n}\n\n@media (max-width: 480px) {\n  .container {\n    width: 400px;\n  }\n}\n\n@media (max-width: 420px) {\n  .container {\n    width: 350px;\n  }\n}\n\n@media (max-width: 375px) {\n  .container {\n    width: 300px;\n  }\n}\n\n@media (max-width: 325px) {\n  .container {\n\n    width: 280px;\n  }\n}\n\n",""])},function(n,t,e){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e=function(n,t){var e=n[1]||"",r=n[3];if(!r)return e;if(t&&"function"==typeof btoa){var o=(a=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(u," */")),i=r.sources.map((function(n){return"/*# sourceURL=".concat(r.sourceRoot).concat(n," */")}));return[e].concat(i).concat([o]).join("\n")}var a,c,u;return[e].join("\n")}(t,n);return t[2]?"@media ".concat(t[2],"{").concat(e,"}"):e})).join("")},t.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(var a=0;a<n.length;a++){var c=n[a];null!=c[0]&&r[c[0]]||(e&&!c[2]?c[2]=e:e&&(c[2]="(".concat(c[2],") and (").concat(e,")")),t.push(c))}},t}},function(n,t,e){"use strict";var r,o={},i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var n={};return function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[t]=e}return n[t]}}();function c(n,t){for(var e=[],r={},o=0;o<n.length;o++){var i=n[o],a=t.base?i[0]+t.base:i[0],c={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(c):e.push(r[a]={id:a,parts:[c]})}return e}function u(n,t){for(var e=0;e<n.length;e++){var r=n[e],i=o[r.id],a=0;if(i){for(i.refs++;a<i.parts.length;a++)i.parts[a](r.parts[a]);for(;a<r.parts.length;a++)i.parts.push(v(r.parts[a],t))}else{for(var c=[];a<r.parts.length;a++)c.push(v(r.parts[a],t));o[r.id]={id:r.id,refs:1,parts:c}}}}function s(n){var t=document.createElement("style");if(void 0===n.attributes.nonce){var r=e.nc;r&&(n.attributes.nonce=r)}if(Object.keys(n.attributes).forEach((function(e){t.setAttribute(e,n.attributes[e])})),"function"==typeof n.insert)n.insert(t);else{var o=a(n.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var l,f=(l=[],function(n,t){return l[n]=t,l.filter(Boolean).join("\n")});function p(n,t,e,r){var o=e?"":r.css;if(n.styleSheet)n.styleSheet.cssText=f(t,o);else{var i=document.createTextNode(o),a=n.childNodes;a[t]&&n.removeChild(a[t]),a.length?n.insertBefore(i,a[t]):n.appendChild(i)}}function d(n,t,e){var r=e.css,o=e.media,i=e.sourceMap;if(o&&n.setAttribute("media",o),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var h=null,m=0;function v(n,t){var e,r,o;if(t.singleton){var i=m++;e=h||(h=s(t)),r=p.bind(null,e,i,!1),o=p.bind(null,e,i,!0)}else e=s(t),r=d.bind(null,e,t),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return r(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;r(n=t)}else o()}}n.exports=function(n,t){(t=t||{}).attributes="object"==typeof t.attributes?t.attributes:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=i());var e=c(n,t);return u(e,t),function(n){for(var r=[],i=0;i<e.length;i++){var a=e[i],s=o[a.id];s&&(s.refs--,r.push(s))}n&&u(c(n,t),t);for(var l=0;l<r.length;l++){var f=r[l];if(0===f.refs){for(var p=0;p<f.parts.length;p++)f.parts[p]();delete o[f.id]}}}}},function(n,t,e){"use strict";function r(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}e.r(t);var o=function(){function n(t){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),Object.defineProperty(this,"cpfLimpo",{enumerable:!0,value:t.replace(/\D+/g,"")})}var t,e,o;return t=n,o=[{key:"geraDigito",value:function(n){var t=0,e=n.length+1,r=!0,o=!1,i=void 0;try{for(var a,c=n[Symbol.iterator]();!(r=(a=c.next()).done);r=!0){var u=a.value;t+=e*Number(u),e-=1}}catch(n){o=!0,i=n}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}var s=11-t%11;return s<=9?String(s):"0"}}],(e=[{key:"verificarSequencia",value:function(){return this.cpfLimpo.charAt(0).repeat(11)===this.cpfLimpo}},{key:"geraNovoCpf",value:function(){var t=this.cpfLimpo.slice(0,-2),e=n.geraDigito(t),r=n.geraDigito(t+e);this.novoCPF=t+e+r}},{key:"valida",value:function(){return!!this.cpfLimpo&&"string"==typeof this.cpfLimpo&&11==this.cpfLimpo.length&&!this.verificarSequencia()&&(this.geraNovoCpf(),this.novoCPF===this.cpfLimpo)}}])&&r(t.prototype,e),o&&r(t,o),n}();function i(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var a=function(){function n(){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n)}var t,e,r;return t=n,(e=[{key:"rand",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e8,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:999999999;return String(Math.floor(Math.random()*(t-n)+n))}},{key:"formatado",value:function(n){return n.slice(0,3)+"."+n.slice(3,6)+"."+n.slice(6,9)+"-"+n.slice(9,11)}},{key:"geraNovoCpf",value:function(){var n=this.rand(),t=o.geraDigito(n),e=n+t+o.geraDigito(n+t);return this.formatado(e)}}])&&i(t.prototype,e),r&&i(t,r),n}();e(0);!function(){var n=document.querySelector(".cpf-gerado");addEventListener("click",(function(n){var r=n.target;r.classList.contains("button-gerar")&&t(),r.classList.contains("button-limpar")&&e()}));var t=function(){var t=new a;n.innerHTML=t.geraNovoCpf()},e=function(){n.innerHTML="000.000.000-00"}}()}]);
//# sourceMappingURL=bundle.js.map