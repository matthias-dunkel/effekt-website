!function(e){function t(t){for(var n,a,o=t[0],i=t[1],l=0,s=[];l<o.length;l++)a=o[l],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&s.push(r[a][0]),r[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(c&&c(t);s.length;)s.shift()()}var n={},r={2:0};function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,a){n=r[e]=[t,a]}));t.push(n[2]=o);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,a.nc&&l.setAttribute("nonce",a.nc),l.src=function(e){return a.p+""+({0:"ide",1:"vendors~editor~ide",3:"editor",5:"vendors~editor"}[e]||e)+".chunk.js"}(e);var c=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(s);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",c.name="ChunkLoadError",c.type=a,c.request=o,n[1](c)}r[e]=void 0}};var s=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},a.m=e,a.c=n,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/dist/",a.oe=function(e){throw console.error(e),e};var o=self.webpackJsonp=self.webpackJsonp||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var c=i;a(a.s="./src/index.ts")}({"./src/highlight-effekt.js":function(e,t){hljs.registerLanguage("effekt",(function(e){var t={className:"subst",variants:[{begin:"\\$[A-Za-z0-9_]+"},{begin:"\\${",end:"}"}]},n={className:"string",variants:[{begin:'"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},{begin:'"""',end:'"""',relevance:10},{begin:'[a-z]+"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE,t]},{className:"string",begin:'[a-z]+"""',end:'"""',contains:[t],relevance:10}]},r={className:"type",begin:"\\b[A-Z][A-Za-z0-9_]*",relevance:0},a={className:"title",begin:/[^0-9\n\t "'(),.`{}\[\]:;][^\n\t "'(),.`{}\[\]:;]+|[^0-9\n\t "'(),.`{}\[\]:;=]/,relevance:0},o={className:"class",beginKeywords:"class object trait type",end:/[:={\[\n;]/,excludeEnd:!0,contains:[{beginKeywords:"extends with",relevance:10},{begin:/\[/,end:/\]/,excludeBegin:!0,excludeEnd:!0,relevance:0,contains:[r]},{className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,relevance:0,contains:[r]},a]},i={className:"function",beginKeywords:"def",end:/[:={\[(\n;]/,excludeEnd:!0,contains:[a]};return{name:"Effekt",keywords:{literal:"true false null",keyword:"module effect type def with val var if for while import return else case try match resume do record region in new"},contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,n,{className:"symbol",begin:"'\\w[\\w\\d_]*(?!')"},r,i,o,e.C_NUMBER_MODE,{className:"meta",begin:"@[A-Za-z]+"}]}})),e.exports=hljs},"./src/index.ts":function(e,t,n){"use strict";n.r(t);var r=n("./src/highlight-effekt.js");function a(e,t="active"){const n=document.querySelector(e);n&&n.classList.toggle(t)}function o(e,t){[...t.getElementsByTagName("h"+e)].map(e=>{void 0!==e.id&&""!==e.id&&e.append(function(e){const t=document.createElement("a");return t.className="header-link",t.href="#"+e,t.innerHTML='<i class="fa fa-link"></i>',t}(e.id))})}function i(){document.body.classList.contains("docs")&&(function(){const e=document.querySelectorAll("#menu-toggle, #main-toggle");e&&[...e].map(e=>{e.onclick=e=>{e.preventDefault(),a("#wrapper","toggled")}})}(),function(){const e=document.querySelectorAll(".drop-nested");e&&[...e].map(e=>{e.onclick=t=>{t.preventDefault(),function(e,t="active"){const n=e.parentNode;n&&n.classList.toggle(t)}(e,"open");if("a"===t.currentTarget.tagName.toLowerCase()){const e=t.currentTarget,n=e.parentNode,r=e.href;r===window.location.href||n.classList.contains("active")||(window.location.href=r)}}})}(),function(){const e=document.querySelector("#content");[...Array(7).keys()].map(t=>{o(t,e)})}())}var l=function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{c(r.next(e))}catch(e){o(e)}}function l(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((r=r.apply(e,t||[])).next())}))},c=function(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=i.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}};function s(e,t){return l(this,void 0,void 0,(function(){var r,a,o,i,l,s,u,d,f,p;return c(this,(function(c){switch(c.label){case 0:return(r=e.parentNode).classList.add("editor-loading"),[4,Promise.all([n.e(1),n.e(0)]).then(n.bind(null,"./src/ide.ts"))];case 1:return a=c.sent(),[4,Promise.all([n.e(1),n.e(5),n.e(0),n.e(3)]).then(n.bind(null,"./src/editor.ts"))];case 2:return o=c.sent(),r.classList.remove("editor-loading"),r.classList.add("editor"),i=e.attributes.module.value,l=i+".effekt",s=e.attributes.content.value,e.textContent="",u=e.attributes.prelude.value||"",d=e.attributes.postlude.value||"\n",f=a.createModel(l,s,u,d),a.updateModel(f),f.onDidChangeContent((function(e){a.updateModel(f)})),t&&((p=document.createElement("ul")).classList.add("repl-output"),r.insertAdjacentElement("afterend",p)),o.create(e,t,p,f),[2]}}))}))}function u(){var e=document.querySelectorAll("pre > code"),t=0,n="";function a(e,r){var a="module"+t++;e.setAttribute("module",a);var o="module "+a+"\n",i=e.parentElement;if(r.repl)i.classList.add("repl"),e.setAttribute("prelude",o+n+"\ndef main() = println(\n"),e.setAttribute("content",e.textContent),e.setAttribute("postlude","\n)\n");else{var l=o+n;e.setAttribute("prelude",l),e.setAttribute("postlude","\n"),e.setAttribute("content",e.textContent),r.ignore||(n=n+"import "+a+"\n")}}e.forEach((function(e){var t=function(e){var t=d;return e.classList.forEach((function(e){var n;n="language-",0==e.indexOf(n)&&(t=function(e){var t=e.split(":");function n(e){return-1!=t.indexOf(e)}return{language:/^language-([a-zA-Z_\-$]+)/.exec(e)[1],hidden:n("hide"),prelude:n("prelude"),repl:n("repl"),readOnly:n("read-only"),reset:n("reset"),ignore:n("ignore"),sketch:n("sketch")}}(e))})),t}(e);t.reset&&(n=""),t.hidden&&(e.classList.add("hidden"),e.parentElement.classList.add("hidden")),"effekt"==t.language&&(t.repl&&e.classList.add("repl"),t.prelude&&(n+=e.textContent),t.prelude||t.sketch||(t.readOnly?a(e,t):(a(e,t),function(e,t){var n=document.createElement("nav");if(n.classList.add("code-menu"),t.repl){var r=document.createElement("a");r.setAttribute("href","#"),r.classList.add("button-run"),r.textContent="run",n.append(r),r.onclick=function(){return s(e,r),!1}}else if(!t.readOnly){var a=document.createElement("a");a.setAttribute("href","#"),a.classList.add("button-edit"),a.textContent="edit",n.append(a);a.onclick=function(){return a.onclick=function(){return!1},a.classList.add("disabled"),s(e,null),!1}}e.parentNode.prepend(n)}(e,t))),r.highlightBlock(e))}))}var d={language:"effekt",hidden:!1,prelude:!1,repl:!1,readOnly:!1,reset:!1,ignore:!1,sketch:!1};window.addEventListener("DOMContentLoaded",(function(){u(),r.configure({languages:["effekt","bash"]}),document.querySelectorAll("code").forEach((function(e){"pre"!=e.parentElement.tagName&&r.highlightBlock(e)})),i()}))}});