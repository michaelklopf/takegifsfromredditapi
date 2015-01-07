"format register";!function(e){function r(e){for(var r=[],n=0,t=e.length;t>n;n++)-1==f.call(r,e[n])&&r.push(e[n]);return r}function n(e,n,t,o){if("string"!=typeof e)throw"System.register provided no module name";var i;i="boolean"==typeof t?{declarative:!1,deps:n,execute:o,executingRequire:t}:{declarative:!0,deps:n,declare:t},i.name=e,l[e]||(l[e]=i),i.deps=r(i.deps),i.normalizedDeps=i.deps}function t(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==f.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var n=0,o=e.normalizedDeps.length;o>n;n++){var i=e.normalizedDeps[n],a=l[i];if(a&&!a.evaluated){var u=e.groupIndex+(a.declarative!=e.declarative);if(void 0===a.groupIndex||a.groupIndex<u){if(a.groupIndex&&(r[a.groupIndex].splice(f.call(r[a.groupIndex],a),1),0==r[a.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");a.groupIndex=u}t(a,r)}}}}function o(e){var r=l[e];r.groupIndex=0;var n=[];t(r,n);for(var o=!!r.declarative==n.length%2,i=n.length-1;i>=0;i--){for(var u=n[i],c=0;c<u.length;c++){var d=u[c];o?a(d):s(d)}o=!o}}function i(e){return p[e]||(p[e]={name:e,dependencies:[],exports:{},importers:[]})}function a(r){if(!r.module){var n=r.module=i(r.name),t=r.module.exports,o=r.declare.call(e,function(e,r){n.locked=!0,t[e]=r;for(var o=0,i=n.importers.length;i>o;o++){var a=n.importers[o];if(!a.locked){var u=f.call(a.dependencies,n);a.setters[u](t)}}return n.locked=!1,r});if(n.setters=o.setters,n.execute=o.execute,!n.setters||!n.execute)throw new TypeError("Invalid System.register form for "+r.name);for(var u=0,s=r.normalizedDeps.length;s>u;u++){var c,m=r.normalizedDeps[u],g=l[m],v=p[m];v?c=v.exports:g&&!g.declarative?c={"default":g.module.exports,__useDefault:!0}:g?(a(g),v=g.module,c=v.exports):c=d(m),v&&v.importers?(v.importers.push(n),n.dependencies.push(v)):n.dependencies.push(null),n.setters[u]&&n.setters[u](c)}}}function u(e){var r,n=l[e];if(n)n.declarative?c(e,[]):n.evaluated||s(n),r=n.module.exports;else if(r=d(e),!r)throw new Error("Unable to load dependency "+e+".");return(!n||n.declarative)&&r&&r.__useDefault?r["default"]:r}function s(r){if(!r.module){var n={},t=r.module={exports:n,id:r.name};if(!r.executingRequire)for(var o=0,i=r.normalizedDeps.length;i>o;o++){var a=r.normalizedDeps[o],c=l[a];c&&s(c)}r.evaluated=!0;var d=r.execute.call(e,function(e){for(var n=0,t=r.deps.length;t>n;n++)if(r.deps[n]==e)return u(r.normalizedDeps[n]);throw new TypeError("Module "+e+" not declared as a dependency.")},n,t);d&&(t.exports=d)}}function c(r,n){var t=l[r];if(!t.evaluated&&t.declarative){n.push(r);for(var o=0,i=t.normalizedDeps.length;i>o;o++){var a=t.normalizedDeps[o];-1==f.call(n,a)&&(l[a]?c(a,n):d(a))}t.evaluated||(t.evaluated=!0,t.module.execute.call(e))}}function d(e){if(m[e])return m[e];var r=l[e];if(!r)throw"Module "+e+" not present.";o(e),c(e,[]),l[e]=void 0;var n=r.declarative?r.module.exports:{"default":r.module.exports,__useDefault:!0};return m[e]=n}var l={},f=Array.prototype.indexOf||function(e){for(var r=0,n=this.length;n>r;r++)if(this[r]===e)return r;return-1},p={},m={};return function(r,t){var o;"undefined"!=typeof o&&o.register?(t(o),o["import"](r)):(t(o={register:n,get:d,set:function(e,r){m[e]=r},newModule:function(e){return e},global:e}),d(r))}}("undefined"!=typeof window?window:global)("lib/main",function(e){e.register("npm:ms@0.6.2/index",[],!0,function(require,r,n){function t(e){var r=/^((?:\d+)?\.?\d+) *(ms|seconds?|s|minutes?|m|hours?|h|days?|d|years?|y)?$/i.exec(e);if(r){var n=parseFloat(r[1]),t=(r[2]||"ms").toLowerCase();switch(t){case"years":case"year":case"y":return n*p;case"days":case"day":case"d":return n*f;case"hours":case"hour":case"h":return n*l;case"minutes":case"minute":case"m":return n*d;case"seconds":case"second":case"s":return n*c;case"ms":return n}}}function o(e){return e>=f?Math.round(e/f)+"d":e>=l?Math.round(e/l)+"h":e>=d?Math.round(e/d)+"m":e>=c?Math.round(e/c)+"s":e+"ms"}function i(e){return a(e,f,"day")||a(e,l,"hour")||a(e,d,"minute")||a(e,c,"second")||e+" ms"}function a(e,r,n){return r>e?void 0:1.5*r>e?Math.floor(e/r)+" "+n:Math.ceil(e/r)+" "+n+"s"}var u=e.global,s=u.define;u.define=void 0;var c=1e3,d=60*c,l=60*d,f=24*l,p=365.25*f;return n.exports=function(e,r){return r=r||{},"string"==typeof e?t(e):r["long"]?i(e):o(e)},u.define=s,n.exports}),e.register("lib/extract-gifs",[],function(e){"use strict";return{setters:[],execute:function(){e("default",function(e){return e.filter(function(e){return!e.data.over_18}).map(function(e){return e.data.url}).filter(function(e){return/gifv?$/.exec(e)}).map(function(e){return e.replace(/v?$/,"")})})}}}),e.register("lib/display-gifs",[],function(e){"use strict";return{setters:[],execute:function(){e("default",function(e){var r=document.querySelector("#gifs");r.innerHTML=e.map(function(e){return'<img src="'+e+'">'}).join("\n")})}}}),e.register("npm:ms@0.6.2",["npm:ms@0.6.2/index"],!0,function(require,r,n){var t=e.global,o=t.define;return t.define=void 0,n.exports=require("npm:ms@0.6.2/index"),t.define=o,n.exports}),e.register("npm:debug@2.1.1/debug",["npm:ms@0.6.2"],!0,function(require,r,n){function t(){return r.colors[f++%r.colors.length]}function o(e){function n(){}function o(){var e=o,n=+new Date,i=n-(l||n);e.diff=i,e.prev=l,e.curr=n,l=n,null==e.useColors&&(e.useColors=r.useColors()),null==e.color&&e.useColors&&(e.color=t());var a=Array.prototype.slice.call(arguments);a[0]=r.coerce(a[0]),"string"!=typeof a[0]&&(a=["%o"].concat(a));var u=0;a[0]=a[0].replace(/%([a-z%])/g,function(n,t){if("%%"===n)return n;u++;var o=r.formatters[t];if("function"==typeof o){var i=a[u];n=o.call(e,i),a.splice(u,1),u--}return n}),"function"==typeof r.formatArgs&&(a=r.formatArgs.apply(e,a));var s=o.log||r.log||console.log.bind(console);s.apply(e,a)}n.enabled=!1,o.enabled=!0;var i=r.enabled(e)?o:n;return i.namespace=e,i}function i(e){r.save(e);for(var n=(e||"").split(/[\s,]+/),t=n.length,o=0;t>o;o++)n[o]&&(e=n[o].replace(/\*/g,".*?"),"-"===e[0]?r.skips.push(new RegExp("^"+e.substr(1)+"$")):r.names.push(new RegExp("^"+e+"$")))}function a(){r.enable("")}function u(e){var n,t;for(n=0,t=r.skips.length;t>n;n++)if(r.skips[n].test(e))return!1;for(n=0,t=r.names.length;t>n;n++)if(r.names[n].test(e))return!0;return!1}function s(e){return e instanceof Error?e.stack||e.message:e}var c=e.global,d=c.define;c.define=void 0,r=n.exports=o,r.coerce=s,r.disable=a,r.enable=i,r.enabled=u,r.humanize=require("npm:ms@0.6.2"),r.names=[],r.skips=[],r.formatters={};var l,f=0;return c.define=d,n.exports}),e.register("npm:debug@2.1.1/browser",["npm:debug@2.1.1/debug"],!0,function(require,r,n){function t(){return"WebkitAppearance"in document.documentElement.style||window.console&&(console.firebug||console.exception&&console.table)||navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31}function o(){var e=arguments,n=this.useColors;if(e[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+e[0]+(n?"%c ":" ")+"+"+r.humanize(this.diff),!n)return e;var t="color: "+this.color;e=[e[0],t,"color: inherit"].concat(Array.prototype.slice.call(e,1));var o=0,i=0;return e[0].replace(/%[a-z%]/g,function(e){"%%"!==e&&(o++,"%c"===e&&(i=o))}),e.splice(i,0,t),e}function i(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function a(e){try{null==e?d.removeItem("debug"):d.debug=e}catch(r){}}function u(){var e;try{e=d.debug}catch(r){}return e}var s=e.global,c=s.define;s.define=void 0,r=n.exports=require("npm:debug@2.1.1/debug"),r.log=i,r.formatArgs=o,r.save=a,r.load=u,r.useColors=t;var d;return d="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:window.localStorage,r.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],r.formatters.j=function(e){return JSON.stringify(e)},r.enable(u()),s.define=c,n.exports}),e.register("npm:debug@2.1.1",["npm:debug@2.1.1/browser"],!0,function(require,r,n){var t=e.global,o=t.define;return t.define=void 0,n.exports=require("npm:debug@2.1.1/browser"),t.define=o,n.exports}),e.register("npm:jsonp@0.1.0/index",["npm:debug@2.1.1"],!0,function(require,r,n){function t(){}function o(e,r,n){function o(){a.parentNode&&a.parentNode.removeChild(a),window[g]=t,c&&clearTimeout(c)}function i(){window[g]&&o()}"function"==typeof r&&(n=r,r={}),r||(r={});var a,c,d=r.prefix||"__jp",l=r.param||"callback",f=null!=r.timeout?r.timeout:6e4,p=encodeURIComponent,m=document.getElementsByTagName("script")[0]||document.head,g=d+s++;return f&&(c=setTimeout(function(){o(),n&&n(new Error("Timeout"))},f)),window[g]=function(e){u("jsonp got",e),o(),n&&n(null,e)},e+=(~e.indexOf("?")?"&":"?")+l+"="+p(g),e=e.replace("?&","?"),u('jsonp req "%s"',e),a=document.createElement("script"),a.src=e,m.parentNode.insertBefore(a,m),i}var i=e.global,a=i.define;i.define=void 0;var u=require("npm:debug@2.1.1")("jsonp");n.exports=o;var s=0;return i.define=a,n.exports}),e.register("npm:jsonp@0.1.0",["npm:jsonp@0.1.0/index"],!0,function(require,r,n){var t=e.global,o=t.define;return t.define=void 0,n.exports=require("npm:jsonp@0.1.0/index"),t.define=o,n.exports}),e.register("lib/reddit-api",["npm:jsonp@0.1.0"],function(e){"use strict";var r,n;return{setters:[function(e){r=e["default"]}],execute:function(){n=function(){var e=function(){this.redditURL="http://www.reddit.com/r/perfectloops/top.json?jsonp=callbackFunction"};return $traceurRuntime.createClass(e,{load:function(){var e=this;return new Promise(function(n,t){r(e.redditURL,{param:"jsonp"},function(e,r){e?t(e):n(r.data.children)})})}},{})}(),e("default",new n)}}}),e.register("lib/main",["lib/reddit-api","lib/extract-gifs","lib/display-gifs"],function(e){"use strict";var r,n,t;return{setters:[function(e){r=e["default"]},function(e){n=e["default"]},function(e){t=e["default"]}],execute:function(){r.load().then(n).then(t),e("default",{})}}})});
//# sourceMappingURL=build.js.map