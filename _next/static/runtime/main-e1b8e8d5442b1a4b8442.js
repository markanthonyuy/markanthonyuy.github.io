(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{0:function(e,t,n){n("oSxo"),e.exports=n("BMP1")},BMP1:function(e,t,n){"use strict";var r=n("284h")(n("IKlv"));window.next=r,(0,r.default)().catch((function(e){console.error("".concat(e.message,"\n").concat(e.stack))}))},DqTX:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(){var e=null;return function(t){var n=e=Promise.resolve().then((function(){if(n===e){e=null;var r={};t.forEach((function(e){var t=r[e.type]||[];t.push(e),r[e.type]=t}));var a=r.title?r.title[0]:null,i="";if(a){var c=a.props.children;i="string"===typeof c?c:c.join("")}i!==document.title&&(document.title=i),["meta","base","link","style","script"].forEach((function(e){!function(e,t){var n=document.getElementsByTagName("head")[0],r=n.querySelector("meta[name=next-head-count]");0;for(var a=Number(r.content),i=[],c=0,u=r.previousElementSibling;c<a;c++,u=u.previousElementSibling)u.tagName.toLowerCase()===e&&i.push(u);var s=t.map(o).filter((function(e){for(var t=0,n=i.length;t<n;t++){if(i[t].isEqualNode(e))return i.splice(t,1),!1}return!0}));i.forEach((function(e){return e.parentNode.removeChild(e)})),s.forEach((function(e){return n.insertBefore(e,r)})),r.content=(a-i.length+s.length).toString()}(e,r[e]||[])}))}}))}};var r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv"};function o(e){var t=e.type,n=e.props,o=document.createElement(t);for(var a in n)if(n.hasOwnProperty(a)&&"children"!==a&&"dangerouslySetInnerHTML"!==a&&void 0!==n[a]){var i=r[a]||a.toLowerCase();o.setAttribute(i,n[a])}var c=n.children,u=n.dangerouslySetInnerHTML;return u?o.innerHTML=u.__html||"":c&&(o.textContent="string"===typeof c?c:c.join("")),o}},IKlv:function(e,t,n){"use strict";var r=n("o0o1"),o=n("yXPU"),a=n("lwsE"),i=n("W8MJ"),c=n("7W2i"),u=n("a1gu"),s=n("Nsbk"),f=n("J4zp");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}var p=n("284h"),d=n("TqRt");t.__esModule=!0,t.render=Q,t.renderError=te,t.default=t.emitter=t.router=t.version=void 0;var v=d(n("pVnL")),h=(d(n("284h")),n("nOHt")),m=n("s4NR"),g=d(n("q1tI")),y=d(n("i8i4")),w=n("FYa8"),E=d(n("dZ6Y")),_=n("qOIg"),S=n("/jkW"),P=p(n("yLiY")),b=n("g/15"),k=d(n("DqTX")),R=d(n("zmvN")),x=d(n("bGXG"));"finally"in Promise.prototype||(Promise.prototype.finally=n("Z577"));var T=JSON.parse(document.getElementById("__NEXT_DATA__").textContent);window.__NEXT_DATA__=T;t.version="9.4.3";var C=T.props,L=T.err,M=T.page,I=T.query,N=T.buildId,j=T.assetPrefix,F=T.runtimeConfig,D=T.dynamicIds,A=T.isFallback,U=j||"";n.p="".concat(U,"/_next/"),P.setConfig({serverRuntimeConfig:{},publicRuntimeConfig:F||{}});var B=(0,b.getURL)(),O=new R.default(N,U),q=function(e){var t=f(e,2),n=t[0],r=t[1];return O.registerPage(n,r)};window.__NEXT_P&&window.__NEXT_P.map((function(e){return setTimeout((function(){return q(e)}),0)})),window.__NEXT_P=[],window.__NEXT_P.push=q;var W,H,X,G,Y,J,V=(0,k.default)(),$=document.getElementById("__next");t.router=X;var Z=function(e){c(n,e);var t=l(n);function n(){return a(this,n),t.apply(this,arguments)}return i(n,[{key:"componentDidCatch",value:function(e,t){this.props.fn(e,t)}},{key:"componentDidMount",value:function(){this.scrollToHash(),X.isSsr&&(A||T.nextExport&&((0,S.isDynamicRoute)(X.pathname)||location.search)||C&&C.__N_SSG&&location.search)&&X.replace(X.pathname+"?"+(0,m.stringify)((0,v.default)((0,v.default)({},X.query),(0,m.parse)(location.search.substr(1)))),B,{_h:1,shallow:!A})}},{key:"componentDidUpdate",value:function(){this.scrollToHash()}},{key:"scrollToHash",value:function(){var e=location.hash;if(e=e&&e.substring(1)){var t=document.getElementById(e);t&&setTimeout((function(){return t.scrollIntoView()}),0)}}},{key:"render",value:function(){return this.props.children}}]),n}(g.default.Component),z=(0,E.default)();t.emitter=z;var K=function(){var e=o(r.mark((function e(){var n,o,a,i,c,u,s=arguments;return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>0&&void 0!==s[0]?s[0]:{},n.webpackHMR,e.next=4,O.loadPageScript("/_app");case 4:return o=e.sent,a=o.page,i=o.mod,Y=a,i&&i.reportWebVitals&&(J=function(e){var t,n=e.id,r=e.name,o=e.startTime,a=e.value,c=e.duration,u=e.entryType,s=e.entries,f="".concat(Date.now(),"-").concat(Math.floor(Math.random()*(9e12-1))+1e12);s&&s.length&&(t=s[0].startTime),i.reportWebVitals({id:n||f,name:r,startTime:o||t,value:null==a?c:a,label:"mark"===u||"measure"===u?"custom":"web-vital"})}),c=L,e.prev=10,e.next=14,O.loadPage(M);case 14:u=e.sent,G=u.page,e.next=20;break;case 20:e.next=25;break;case 22:e.prev=22,e.t0=e.catch(10),c=e.t0;case 25:if(!window.__NEXT_PRELOADREADY){e.next=29;break}return e.next=29,window.__NEXT_PRELOADREADY(D);case 29:return t.router=X=(0,h.createRouter)(M,I,B,{initialProps:C,pageLoader:O,App:Y,Component:G,wrapApp:ce,err:c,isFallback:A,subscription:function(e,t){return Q({App:t,Component:e.Component,props:e.props,err:e.err})}}),Q({App:Y,Component:G,props:C,err:c}),e.abrupt("return",z);case 35:e.next=37;break;case 37:case"end":return e.stop()}}),e,null,[[10,22]])})));return function(){return e.apply(this,arguments)}}();function Q(e){return ee.apply(this,arguments)}function ee(){return(ee=o(r.mark((function e(t){return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.err){e.next=4;break}return e.next=3,te(t);case 3:return e.abrupt("return");case 4:return e.prev=4,e.next=7,ue(t);case 7:e.next=14;break;case 9:return e.prev=9,e.t0=e.catch(4),e.next=14,te((0,v.default)((0,v.default)({},t),{},{err:e.t0}));case 14:case"end":return e.stop()}}),e,null,[[4,9]])})))).apply(this,arguments)}function te(e){var t=e.App,n=e.err;return console.error(n),O.loadPage("/_error").then((function(r){var o=r.page,a=ce(t),i={Component:o,AppTree:a,router:X,ctx:{err:n,pathname:M,query:I,asPath:B,AppTree:a}};return Promise.resolve(e.props?e.props:(0,b.loadGetInitialProps)(t,i)).then((function(t){return ue((0,v.default)((0,v.default)({},e),{},{err:n,Component:o,props:t}))}))}))}t.default=K;var ne="function"===typeof y.default.hydrate;function re(){b.ST&&(performance.mark("afterHydrate"),performance.measure("Next.js-before-hydration","navigationStart","beforeRender"),performance.measure("Next.js-hydration","beforeRender","afterHydrate"),J&&performance.getEntriesByName("Next.js-hydration").forEach(J),ae())}function oe(){if(b.ST){performance.mark("afterRender");var e=performance.getEntriesByName("routeChange","mark");e.length&&(performance.measure("Next.js-route-change-to-render",e[0].name,"beforeRender"),performance.measure("Next.js-render","beforeRender","afterRender"),J&&(performance.getEntriesByName("Next.js-render").forEach(J),performance.getEntriesByName("Next.js-route-change-to-render").forEach(J)),ae(),["Next.js-route-change-to-render","Next.js-render"].forEach((function(e){return performance.clearMeasures(e)})))}}function ae(){["beforeRender","afterHydrate","afterRender","routeChange"].forEach((function(e){return performance.clearMarks(e)}))}function ie(e){var t=e.children;return(g.default.createElement(Z,{fn:function(e){return te({App:Y,err:e}).catch((function(e){return console.error("Error rendering page: ",e)}))}},g.default.createElement(_.RouterContext.Provider,{value:(0,h.makePublicRouterInstance)(X)},g.default.createElement(w.HeadManagerContext.Provider,{value:V},t))))}var ce=function(e){return function(t){var n=(0,v.default)((0,v.default)({},t),{},{Component:G,err:L,router:X});return(g.default.createElement(ie,null,g.default.createElement(e,n)))}};function ue(e){return se.apply(this,arguments)}function se(){return(se=o(r.mark((function e(t){var n,o,a,i,c,u,s;return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.App,o=t.Component,a=t.props,i=t.err,o=o||W.Component,a=a||W.props,c=(0,v.default)((0,v.default)({},a),{},{Component:o,err:i,router:X}),W=c,s=new Promise((function(e,t){H&&H(),u=function(){H=null,e()},H=function(){H=null,t()}})),r=g.default.createElement(fe,{callback:u},g.default.createElement(ie,null,g.default.createElement(n,c))),f=$,b.ST&&performance.mark("beforeRender"),ne?(y.default.hydrate(r,f,re),ne=!1,J&&b.ST&&(0,x.default)(J)):y.default.render(r,f,oe),e.next=10,s;case 10:case"end":return e.stop()}var r,f}),e)})))).apply(this,arguments)}function fe(e){var t=e.callback,n=e.children;return g.default.useLayoutEffect((function(){return t()}),[t]),n}},Z577:function(e,t){Promise.prototype.finally=function(e){if("function"!=typeof e)return this.then(e,e);var t=this.constructor||Promise;return this.then((function(n){return t.resolve(e()).then((function(){return n}))}),(function(n){return t.resolve(e()).then((function(){throw n}))}))}},bGXG:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=n("w6Sm");t.default=function(e){(0,r.getCLS)(e),(0,r.getFID)(e),(0,r.getFCP)(e),(0,r.getLCP)(e),(0,r.getTTFB)(e)}},oSxo:function(e,t,n){"use strict";n.r(t);try{self["workbox:window:5.1.3"]&&_()}catch(l){}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}try{self["workbox:core:5.1.3"]&&_()}catch(l){}var o=function(){var e=this;this.promise=new Promise((function(t,n){e.resolve=t,e.reject=n}))};function a(e,t){var n=location.href;return new URL(e,n).href===new URL(t,n).href}var i=function(e,t){this.type=e,Object.assign(this,t)};function c(e,t,n){return n?t?t(e):e:(e&&e.then||(e=Promise.resolve(e)),t?e.then(t):e)}function u(){}var s=function(e){var t,n;function u(t,n){var r,u;return void 0===n&&(n={}),(r=e.call(this)||this).t={},r.i=0,r.o=new o,r.u=new o,r.s=new o,r.v=0,r.h=new Set,r.l=function(){var e=r.g,t=e.installing;r.i>0||!a(t.scriptURL,r.m)||performance.now()>r.v+6e4?(r.P=t,e.removeEventListener("updatefound",r.l)):(r.p=t,r.h.add(t),r.o.resolve(t)),++r.i,t.addEventListener("statechange",r.k)},r.k=function(e){var t=r.g,n=e.target,o=n.state,a=n===r.P,c=a?"external":"",u={sw:n,originalEvent:e};!a&&r.j&&(u.isUpdate=!0),r.dispatchEvent(new i(c+o,u)),"installed"===o?r.O=self.setTimeout((function(){"installed"===o&&t.waiting===n&&r.dispatchEvent(new i(c+"waiting",u))}),200):"activating"===o&&(clearTimeout(r.O),a||r.u.resolve(n))},r.R=function(e){var t=r.p;t===navigator.serviceWorker.controller&&(r.dispatchEvent(new i("controlling",{sw:t,originalEvent:e,isUpdate:r.j})),r.s.resolve(t))},r.S=(u=function(e){var t=e.data,n=e.source;return c(r.getSW(),(function(){r.h.has(n)&&r.dispatchEvent(new i("message",{data:t,sw:n,originalEvent:e}))}))},function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];try{return Promise.resolve(u.apply(this,e))}catch(e){return Promise.reject(e)}}),r.m=t,r.t=n,navigator.serviceWorker.addEventListener("message",r.S),r}n=e,(t=u).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var s,p,d=u.prototype;return d.register=function(e){var t=(void 0===e?{}:e).immediate,n=void 0!==t&&t;try{var r=this;return function(e,t){var n=e();return n&&n.then?n.then(t):t()}((function(){if(!n&&"complete"!==document.readyState)return f(new Promise((function(e){return window.addEventListener("load",e)})))}),(function(){return r.j=Boolean(navigator.serviceWorker.controller),r.U=r.B(),c(r.L(),(function(e){r.g=e,r.U&&(r.p=r.U,r.u.resolve(r.U),r.s.resolve(r.U),r.U.addEventListener("statechange",r.k,{once:!0}));var t=r.g.waiting;return t&&a(t.scriptURL,r.m)&&(r.p=t,Promise.resolve().then((function(){r.dispatchEvent(new i("waiting",{sw:t,wasWaitingBeforeRegister:!0}))})).then((function(){}))),r.p&&(r.o.resolve(r.p),r.h.add(r.p)),r.g.addEventListener("updatefound",r.l),navigator.serviceWorker.addEventListener("controllerchange",r.R,{once:!0}),r.g}))}))}catch(e){return Promise.reject(e)}},d.update=function(){try{return this.g?f(this.g.update()):void 0}catch(l){return Promise.reject(l)}},d.getSW=function(){try{return void 0!==this.p?this.p:this.o.promise}catch(l){return Promise.reject(l)}},d.messageSW=function(e){try{return c(this.getSW(),(function(t){return function(e,t){return new Promise((function(n){var r=new MessageChannel;r.port1.onmessage=function(e){n(e.data)},e.postMessage(t,[r.port2])}))}(t,e)}))}catch(l){return Promise.reject(l)}},d.B=function(){var e=navigator.serviceWorker.controller;return e&&a(e.scriptURL,this.m)?e:void 0},d.L=function(){try{var e=this;return function(e,t){try{var n=e()}catch(e){return t(e)}return n&&n.then?n.then(void 0,t):n}((function(){return c(navigator.serviceWorker.register(e.m,e.t),(function(t){return e.v=performance.now(),t}))}),(function(e){throw e}))}catch(e){return Promise.reject(e)}},s=u,(p=[{key:"active",get:function(){return this.u.promise}},{key:"controlling",get:function(){return this.s.promise}}])&&r(s.prototype,p),u}(function(){function e(){this.M=new Map}var t=e.prototype;return t.addEventListener=function(e,t){this._(e).add(t)},t.removeEventListener=function(e,t){this._(e).delete(t)},t.dispatchEvent=function(e){e.target=this;var t=this._(e.type),n=Array.isArray(t),r=0;for(t=n?t:t[Symbol.iterator]();;){var o;if(n){if(r>=t.length)break;o=t[r++]}else{if((r=t.next()).done)break;o=r.value}o(e)}},t._=function(e){return this.M.has(e)||this.M.set(e,new Set),this.M.get(e)},e}());function f(e,t){if(!t)return e&&e.then?e.then(u):Promise.resolve()}"undefined"!==typeof window&&"serviceWorker"in navigator&&(window.workbox=new s("/sw.js",{scope:"/"}),window.workbox.register())},pVnL:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n},w6Sm:function(e,t,n){"use strict";n.r(t),n.d(t,"getCLS",(function(){return v})),n.d(t,"getFCP",(function(){return m})),n.d(t,"getFID",(function(){return g})),n.d(t,"getLCP",(function(){return w})),n.d(t,"getTTFB",(function(){return E}));var r,o,a=function(){return"".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)},i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;return{name:e,value:t,delta:0,entries:[],id:a(),isFinal:!1}},c=function(e,t){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){var n=new PerformanceObserver((function(e){return e.getEntries().map(t)}));return n.observe({type:e,buffered:!0}),n}}catch(e){}},u=!1,s=!1,f=function(e){u=!e.persisted},l=function(){addEventListener("pagehide",f),addEventListener("unload",(function(){}))},p=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];s||(l(),s=!0),addEventListener("visibilitychange",(function(t){var n=t.timeStamp;"hidden"===document.visibilityState&&e({timeStamp:n,isUnloading:u})}),{capture:!0,once:t})},d=function(e,t,n,r){var o;return function(){n&&t.isFinal&&n.disconnect(),t.value>=0&&(r||t.isFinal||"hidden"===document.visibilityState)&&(t.delta=t.value-(o||0),(t.delta||t.isFinal||void 0===o)&&(e(t),o=t.value))}},v=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=i("CLS",0),r=function(e){e.hadRecentInput||(n.value+=e.value,n.entries.push(e),a())},o=c("layout-shift",r),a=d(e,n,o,t);p((function(e){var t=e.isUnloading;o&&o.takeRecords().map(r),t&&(n.isFinal=!0),a()}))},h=function(){return void 0===r&&(r="hidden"===document.visibilityState?0:1/0,p((function(e){var t=e.timeStamp;return r=t}),!0)),{get timeStamp(){return r}}},m=function(e){var t=i("FCP"),n=h(),r=c("paint",(function(e){"first-contentful-paint"===e.name&&e.startTime<n.timeStamp&&(t.value=e.startTime,t.isFinal=!0,t.entries.push(e),o())})),o=d(e,t,r)},g=function(e){var t=i("FID"),n=h(),r=function(e){e.startTime<n.timeStamp&&(t.value=e.processingStart-e.startTime,t.entries.push(e),t.isFinal=!0,a())},o=c("first-input",r),a=d(e,t,o);p((function(){o&&(o.takeRecords().map(r),o.disconnect())}),!0),o||window.perfMetrics&&window.perfMetrics.onFirstInputDelay&&window.perfMetrics.onFirstInputDelay((function(e,r){r.timeStamp<n.timeStamp&&(t.value=e,t.isFinal=!0,t.entries=[{entryType:"first-input",name:r.type,target:r.target,cancelable:r.cancelable,startTime:r.timeStamp,processingStart:r.timeStamp+e}],a())}))},y=function(){return o||(o=new Promise((function(e){return["scroll","keydown","pointerdown"].map((function(t){addEventListener(t,e,{once:!0,passive:!0,capture:!0})}))}))),o},w=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=i("LCP"),r=h(),o=function(e){var t=e.startTime;t<r.timeStamp?(n.value=t,n.entries.push(e)):n.isFinal=!0,u()},a=c("largest-contentful-paint",o),u=d(e,n,a,t),s=function(){n.isFinal||(a&&a.takeRecords().map(o),n.isFinal=!0,u())};y().then(s),p(s,!0)},E=function(e){var t,n=i("TTFB");t=function(){try{var t=performance.getEntriesByType("navigation")[0]||function(){var e=performance.timing,t={entryType:"navigation",startTime:0};for(var n in e)"navigationStart"!==n&&"toJSON"!==n&&(t[n]=Math.max(e[n]-e.navigationStart,0));return t}();n.value=n.delta=t.responseStart,n.entries=[t],n.isFinal=!0,e(n)}catch(e){}},"complete"===document.readyState?setTimeout(t,0):addEventListener("pageshow",t)}},yLiY:function(e,t,n){"use strict";var r;t.__esModule=!0,t.setConfig=function(e){r=e},t.default=void 0;t.default=function(){return r}},zmvN:function(e,t,n){"use strict";var r=n("lwsE"),o=n("W8MJ"),a=n("TqRt");t.__esModule=!0,t.default=void 0;var i=n("QmWs"),c=a(n("dZ6Y")),u=n("/jkW"),s=n("gguc"),f=n("YTqd"),l=n("elyg");function p(e,t){try{return document.createElement("link").relList.supports(e)}catch(n){}}var d=p("preload")&&!p("prefetch")?"preload":"prefetch";document.createElement("script");function v(e){if("/"!==e[0])throw new Error('Route name should start with a "/", got "'.concat(e,'"'));return"/"===(e=e.replace(/\/index$/,"/"))?e:e.replace(/\/$/,"")}function h(e,t,n){return new Promise((function(r,o,a){(a=document.createElement("link")).crossOrigin=void 0,a.href=e,a.rel=t,n&&(a.as=n),a.onload=r,a.onerror=o,document.head.appendChild(a)}))}var m=function(){function e(t,n){r(this,e),this.buildId=t,this.assetPrefix=n,this.pageCache={},this.pageRegisterEvents=(0,c.default)(),this.loadingRoutes={},this.promisedBuildManifest=new Promise((function(e){window.__BUILD_MANIFEST?e(window.__BUILD_MANIFEST):window.__BUILD_MANIFEST_CB=function(){e(window.__BUILD_MANIFEST)}})),this.promisedSsgManifest=new Promise((function(e){window.__SSG_MANIFEST?e(window.__SSG_MANIFEST):window.__SSG_MANIFEST_CB=function(){e(window.__SSG_MANIFEST)}}))}return o(e,[{key:"getDependencies",value:function(e){var t=this;return this.promisedBuildManifest.then((function(n){return n[e]&&n[e].map((function(e){return"".concat(t.assetPrefix,"/_next/").concat(encodeURI(e))}))||[]}))}},{key:"getDataHref",value:function(e,t){var n,r=this,o=function(e){return e=(0,l.delBasePath)(e),"".concat(r.assetPrefix,"/_next/data/").concat(r.buildId).concat("/"===e?"/index":e,".json")},a=(0,i.parse)(e,!0),c=a.pathname,p=a.query,d=(0,i.parse)(t).pathname,h=v(c),m=(0,u.isDynamicRoute)(h);if(m){var g=(0,f.getRouteRegex)(h),y=g.groups,w=(0,s.getRouteMatcher)(g)(d)||p;n=h,Object.keys(y).every((function(e){var t=w[e],r=y[e].repeat;return r&&!Array.isArray(t)&&(t=[t]),e in w&&(n=n.replace("[".concat(r?"...":"").concat(e,"]"),r?t.map(encodeURIComponent).join("/"):encodeURIComponent(t)))}))||(n="")}return m?n&&o(n):o(h)}},{key:"prefetchData",value:function(e,t){var n=this,r=v((0,i.parse)(e,!0).pathname);return this.promisedSsgManifest.then((function(o,a){return o.has(r)&&(a=n.getDataHref(e,t))&&!document.querySelector('link[rel="'.concat(d,'"][href^="').concat(a,'"]'))&&h(a,d,"fetch")}))}},{key:"loadPage",value:function(e){return this.loadPageScript(e)}},{key:"loadPageScript",value:function(e){var t=this;return e=v(e),new Promise((function(n,r){var o=t.pageCache[e];if(o){var a=o.error,i=o.page,c=o.mod;a?r(a):n({page:i,mod:c})}else t.pageRegisterEvents.on(e,(function o(a){var i=a.error,c=a.page,u=a.mod;t.pageRegisterEvents.off(e,o),delete t.loadingRoutes[e],i?r(i):n({page:c,mod:u})})),document.querySelector('script[data-next-page="'.concat(e,'"]'))||t.loadingRoutes[e]||(t.loadingRoutes[e]=!0,t.getDependencies(e).then((function(n){n.forEach((function(n){/\.js$/.test(n)&&!document.querySelector('script[src^="'.concat(n,'"]'))&&t.loadScript(n,e,!1),/\.css$/.test(n)&&!document.querySelector('link[rel=stylesheet][href^="'.concat(n,'"]'))&&h(n,"stylesheet").catch((function(){}))})),t.loadRoute(e)})))}))}},{key:"loadRoute",value:function(e){var t="/"===(e=v(e))?"/index.js":"".concat(e,".js"),n="".concat(this.assetPrefix,"/_next/static/").concat(encodeURIComponent(this.buildId),"/pages").concat(encodeURI(t));this.loadScript(n,e,!0)}},{key:"loadScript",value:function(e,t,n){var r=this,o=document.createElement("script");o.crossOrigin=void 0,o.src=e,o.onerror=function(){var n=new Error("Error loading script ".concat(e));n.code="PAGE_LOAD_ERROR",r.pageRegisterEvents.emit(t,{error:n})},document.body.appendChild(o)}},{key:"registerPage",value:function(e,t){var n=this;!function(){try{var r=t(),o={page:r.default||r,mod:r};n.pageCache[e]=o,n.pageRegisterEvents.emit(e,o)}catch(a){n.pageCache[e]={error:a},n.pageRegisterEvents.emit(e,{error:a})}}()}},{key:"prefetch",value:function(e,t){var n,r,o=this;if((n=navigator.connection)&&(n.saveData||/2g/.test(n.effectiveType)))return Promise.resolve();if(t)r=e;else{e=v(e);var a="".concat("/"===e?"/index":e,".js");0,r="".concat(this.assetPrefix,"/_next/static/").concat(encodeURIComponent(this.buildId),"/pages").concat(encodeURI(a))}return Promise.all(document.querySelector('link[rel="'.concat(d,'"][href^="').concat(r,'"], script[data-next-page="').concat(e,'"]'))?[]:[h(r,d,r.match(/\.css$/)?"style":"script"),!t&&this.getDependencies(e).then((function(e){return Promise.all(e.map((function(e){return o.prefetch(e,!0)})))}))]).then((function(){}),(function(){}))}}]),e}();t.default=m}},[[0,0,1,4]]]);