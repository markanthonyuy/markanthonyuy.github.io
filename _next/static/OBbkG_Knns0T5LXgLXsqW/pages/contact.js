(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"/0+H":function(t,e,n){"use strict";e.__esModule=!0,e.isInAmpMode=i,e.useAmp=function(){return i(r.default.useContext(a.AmpStateContext))};var o,r=(o=n("q1tI"))&&o.__esModule?o:{default:o},a=n("lwAK");function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,o=t.hybrid,r=void 0!==o&&o,a=t.hasQuery;return n||r&&(void 0!==a&&a)}},"7W2i":function(t,e,n){var o=n("SksO");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}},"8Kt/":function(t,e,n){"use strict";e.__esModule=!0,e.defaultHead=l,e.default=void 0;var o=c(n("q1tI")),r=c(n("Xuae")),a=n("lwAK"),i=n("FYa8"),u=n("/0+H");function c(t){return t&&t.__esModule?t:{default:t}}function l(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[o.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function s(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===o.default.Fragment?t.concat(o.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}var f=["name","httpEquiv","charSet","itemProp"];function p(t,e){return t.reduce((function(t,e){var n=o.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(s,[]).reverse().concat(l(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,n=new Set,o={};return function(r){var a=!0;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){var i=r.key.slice(r.key.indexOf("$")+1);t.has(i)?a=!1:t.add(i)}switch(r.type){case"title":case"base":e.has(r.type)?a=!1:e.add(r.type);break;case"meta":for(var u=0,c=f.length;u<c;u++){var l=f[u];if(r.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?a=!1:n.add(l);else{var s=r.props[l],p=o[l]||new Set;p.has(s)?a=!1:(p.add(s),o[l]=p)}}}return a}}()).reverse().map((function(t,e){var n=t.key||e;return o.default.cloneElement(t,{key:n})}))}var d=(0,r.default)();function y(t){var e=t.children;return(o.default.createElement(a.AmpStateContext.Consumer,null,(function(t){return o.default.createElement(i.HeadManagerContext.Consumer,null,(function(n){return o.default.createElement(d,{reduceComponentsToState:p,handleStateChange:n,inAmpMode:(0,u.isInAmpMode)(t)},e)}))})))}y.rewind=d.rewind;var C=y;e.default=C},ALdH:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return d}));var o=n("q1tI"),r=n.n(o),a=n("8Kt/"),i=n.n(a),u=n("Wcpz"),c=n.n(u),l=n("rQ2n"),s=n("oTOh"),f=n("ZMKu"),p=r.a.createElement;function d(){var t={hidden:{opacity:0},show:{opacity:1}};return p(l.a,null,p(i.a,null,p("meta",{name:"description",content:"I'm always open to talk. Whether you want to know more about me or want to talk about websites. I'm just one ping away."}),p("title",null,"Contact Me | Mark Anthony Uy")),p(s.a,{active:"contact"}),p("div",{className:c.a.contact},p(f.a.h1,{initial:{y:50,opacity:0},animate:{y:0,opacity:1}},"Let's talk!"),p(f.a.p,{initial:{y:50,opacity:0},animate:{y:0,opacity:1,transition:{delay:.2}}},"I'm always open to talk. Whether you want to know more about me or want to talk about websites. I'm just one ping away. You can find me on various social media or you can email me at"," ",p("a",{href:"mailto:".concat("macmac.uy","@gmail.com?subject=Hello%20Mark")},"macmac.uy","@gmail.com"),". Hope to talk to you soon!"),p(f.a.h2,{initial:{y:50,opacity:0},animate:{y:0,opacity:1,transition:{delay:.3}}},"Got a job for me?"),p(f.a.p,{initial:{y:50,opacity:0},animate:{y:0,opacity:1,transition:{delay:.4}}},"Currently, I'm not actively seeking for a job but my doors are always open."),p(f.a.h2,{initial:{y:50,opacity:0},animate:{y:0,opacity:1,transition:{delay:.3}}},"Find me elsewhere"),p(f.a.div,{className:c.a.icons,variants:{hidden:{opacity:0},show:{opacity:1,transition:{delayChildren:.5,staggerChildren:.1}}},initial:"hidden",animate:"show"},p(f.a.a,{href:"https://twitter.com/markanthonyuy",rel:"noopener",variants:t,ariaLabel:"Twitter"},p("svg",{width:"50",height:"50",viewBox:"0 0 256 209",version:"1.1",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid"},p("g",null,p("path",{d:"M256,25.4500259 C246.580841,29.6272672 236.458451,32.4504868 225.834156,33.7202333 C236.678503,27.2198053 245.00583,16.9269929 248.927437,4.66307685 C238.779765,10.6812633 227.539325,15.0523376 215.57599,17.408298 C205.994835,7.2006971 192.34506,0.822 177.239197,0.822 C148.232605,0.822 124.716076,24.3375931 124.716076,53.3423116 C124.716076,57.4586875 125.181462,61.4673784 126.076652,65.3112644 C82.4258385,63.1210453 43.7257252,42.211429 17.821398,10.4359288 C13.3005011,18.1929938 10.710443,27.2151234 10.710443,36.8402889 C10.710443,55.061526 19.9835254,71.1374907 34.0762135,80.5557137 C25.4660961,80.2832239 17.3681846,77.9207088 10.2862577,73.9869292 C10.2825122,74.2060448 10.2825122,74.4260967 10.2825122,74.647085 C10.2825122,100.094453 28.3867003,121.322443 52.413563,126.14673 C48.0059695,127.347184 43.3661509,127.988612 38.5755734,127.988612 C35.1914554,127.988612 31.9009766,127.659938 28.694773,127.046602 C35.3777973,147.913145 54.7742053,163.097665 77.7569918,163.52185 C59.7820257,177.607983 37.1354036,186.004604 12.5289147,186.004604 C8.28987161,186.004604 4.10888474,185.75646 0,185.271409 C23.2431033,200.173139 50.8507261,208.867532 80.5109185,208.867532 C177.116529,208.867532 229.943977,128.836982 229.943977,59.4326002 C229.943977,57.1552968 229.893412,54.8901664 229.792282,52.6381454 C240.053257,45.2331635 248.958338,35.9825545 256,25.4500259",fill:"#fff"})))),p(f.a.a,{href:"https://www.linkedin.com/in/uymarkanthony/",rel:"noopener",variants:t,ariaLabel:"LinkedIn"},p("svg",{viewBox:"0 0 64 64",xmlns:"http://www.w3.org/2000/svg",width:"50",height:"50"},p("path",{fill:"#000",d:"M10.305 11.119h43.119v42.847H10.305z"}),p("path",{d:"M12.8 51.2V24.384h8.192V51.2H12.8m8.448-34.24c.064 2.304-1.664 4.16-4.416 4.16-2.56 0-4.224-1.856-4.224-4.16 0-2.368 1.728-4.16 4.352-4.16s4.288 1.792 4.288 4.16M42.752 51.2V36.352c0-3.456-1.152-5.824-4.16-5.824-2.24 0-3.584 1.6-4.224 3.136-.192.576-.256 1.344-.256 2.112V51.2H25.92V32.96c0-3.328-.128-6.144-.192-8.576h7.104l.384 3.776h.128c1.088-1.792 3.776-4.352 8.192-4.352 5.376 0 9.472 3.648 9.472 11.584V51.2h-8.256M64 5.632C64 2.56 61.44 0 58.368 0H5.632C2.56 0 0 2.56 0 5.632v52.736C0 61.44 2.56 64 5.632 64h52.736C61.44 64 64 61.44 64 58.368V5.632",fill:"#fff"}))),p(f.a.a,{href:"https://instagram.com/macmac.uy",rel:"noopener",variants:t,ariaLabel:"Instagram"},p("svg",{width:"50",height:"50",viewBox:"0 0 256 256",version:"1.1",preserveAspectRatio:"xMidYMid"},p("g",null,p("path",{d:"M127.999746,23.06353 C162.177385,23.06353 166.225393,23.1936027 179.722476,23.8094161 C192.20235,24.3789926 198.979853,26.4642218 203.490736,28.2166477 C209.464938,30.5386501 213.729395,33.3128586 218.208268,37.7917319 C222.687141,42.2706052 225.46135,46.5350617 227.782844,52.5092638 C229.535778,57.0201472 231.621007,63.7976504 232.190584,76.277016 C232.806397,89.7746075 232.93647,93.8226147 232.93647,128.000254 C232.93647,162.177893 232.806397,166.225901 232.190584,179.722984 C231.621007,192.202858 229.535778,198.980361 227.782844,203.491244 C225.46135,209.465446 222.687141,213.729903 218.208268,218.208776 C213.729395,222.687649 209.464938,225.461858 203.490736,227.783352 C198.979853,229.536286 192.20235,231.621516 179.722476,232.191092 C166.227425,232.806905 162.179418,232.936978 127.999746,232.936978 C93.8200742,232.936978 89.772067,232.806905 76.277016,232.191092 C63.7971424,231.621516 57.0196391,229.536286 52.5092638,227.783352 C46.5345536,225.461858 42.2700971,222.687649 37.7912238,218.208776 C33.3123505,213.729903 30.538142,209.465446 28.2166477,203.491244 C26.4637138,198.980361 24.3784845,192.202858 23.808908,179.723492 C23.1930946,166.225901 23.0630219,162.177893 23.0630219,128.000254 C23.0630219,93.8226147 23.1930946,89.7746075 23.808908,76.2775241 C24.3784845,63.7976504 26.4637138,57.0201472 28.2166477,52.5092638 C30.538142,46.5350617 33.3123505,42.2706052 37.7912238,37.7917319 C42.2700971,33.3128586 46.5345536,30.5386501 52.5092638,28.2166477 C57.0196391,26.4642218 63.7971424,24.3789926 76.2765079,23.8094161 C89.7740994,23.1936027 93.8221066,23.06353 127.999746,23.06353 M127.999746,0 C93.2367791,0 88.8783247,0.147348072 75.2257637,0.770274749 C61.601148,1.39218523 52.2968794,3.55566141 44.1546281,6.72008828 C35.7374966,9.99121548 28.5992446,14.3679613 21.4833489,21.483857 C14.3674532,28.5997527 9.99070739,35.7380046 6.71958019,44.1551362 C3.55515331,52.2973875 1.39167714,61.6016561 0.769766653,75.2262718 C0.146839975,88.8783247 0,93.2372872 0,128.000254 C0,162.763221 0.146839975,167.122183 0.769766653,180.774236 C1.39167714,194.398852 3.55515331,203.703121 6.71958019,211.845372 C9.99070739,220.261995 14.3674532,227.400755 21.4833489,234.516651 C28.5992446,241.632547 35.7374966,246.009293 44.1546281,249.28042 C52.2968794,252.444847 61.601148,254.608323 75.2257637,255.230233 C88.8783247,255.85316 93.2367791,256 127.999746,256 C162.762713,256 167.121675,255.85316 180.773728,255.230233 C194.398344,254.608323 203.702613,252.444847 211.844864,249.28042 C220.261995,246.009293 227.400247,241.632547 234.516143,234.516651 C241.632039,227.400755 246.008785,220.262503 249.279912,211.845372 C252.444339,203.703121 254.607815,194.398852 255.229725,180.774236 C255.852652,167.122183 256,162.763221 256,128.000254 C256,93.2372872 255.852652,88.8783247 255.229725,75.2262718 C254.607815,61.6016561 252.444339,52.2973875 249.279912,44.1551362 C246.008785,35.7380046 241.632039,28.5997527 234.516143,21.483857 C227.400247,14.3679613 220.261995,9.99121548 211.844864,6.72008828 C203.702613,3.55566141 194.398344,1.39218523 180.773728,0.770274749 C167.121675,0.147348072 162.762713,0 127.999746,0 Z M127.999746,62.2703115 C91.698262,62.2703115 62.2698034,91.69877 62.2698034,128.000254 C62.2698034,164.301738 91.698262,193.730197 127.999746,193.730197 C164.30123,193.730197 193.729689,164.301738 193.729689,128.000254 C193.729689,91.69877 164.30123,62.2703115 127.999746,62.2703115 Z M127.999746,170.667175 C104.435741,170.667175 85.3328252,151.564259 85.3328252,128.000254 C85.3328252,104.436249 104.435741,85.3333333 127.999746,85.3333333 C151.563751,85.3333333 170.666667,104.436249 170.666667,128.000254 C170.666667,151.564259 151.563751,170.667175 127.999746,170.667175 Z M211.686338,59.6734287 C211.686338,68.1566129 204.809755,75.0337031 196.326571,75.0337031 C187.843387,75.0337031 180.966297,68.1566129 180.966297,59.6734287 C180.966297,51.1902445 187.843387,44.3136624 196.326571,44.3136624 C204.809755,44.3136624 211.686338,51.1902445 211.686338,59.6734287 Z",fill:"#fff"})))))))}},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(t,e){t.exports=function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},FYa8:function(t,e,n){"use strict";var o;e.__esModule=!0,e.HeadManagerContext=void 0;var r=((o=n("q1tI"))&&o.__esModule?o:{default:o}).default.createContext(null);e.HeadManagerContext=r},Ijbi:function(t,e,n){var o=n("WkPL");t.exports=function(t){if(Array.isArray(t))return o(t)}},Nsbk:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},PJYZ:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},RIqP:function(t,e,n){var o=n("Ijbi"),r=n("EbDI"),a=n("ZhPi"),i=n("Bnag");t.exports=function(t){return o(t)||r(t)||a(t)||i()}},SksO:function(t,e){function n(e,o){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,o)}t.exports=n},W8MJ:function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}t.exports=function(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),t}},Wcpz:function(t,e,n){t.exports={contact:"contact_contact__2xmSr",icons:"contact_icons__4F2SB"}},WkPL:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}},Xuae:function(t,e,n){"use strict";var o=n("lwsE"),r=n("PJYZ"),a=n("W8MJ"),i=n("7W2i"),u=n("a1gu"),c=n("Nsbk"),l=n("RIqP");function s(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=c(t);if(e){var r=c(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return u(this,n)}}e.__esModule=!0,e.default=void 0;var f=n("q1tI"),p=!1;e.default=function(){var t,e=new Set;function n(n){t=n.props.reduceComponentsToState(l(e),n.props),n.props.handleStateChange&&n.props.handleStateChange(t)}return(function(u){i(l,u);var c=s(l);function l(t){var a;return o(this,l),a=c.call(this,t),p&&(e.add(r(a)),n(r(a))),a}return a(l,null,[{key:"rewind",value:function(){var n=t;return t=void 0,e.clear(),n}}]),a(l,[{key:"componentDidMount",value:function(){e.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){e.delete(this),n(this)}},{key:"render",value:function(){return null}}]),l}(f.Component))}},ZhPi:function(t,e,n){var o=n("WkPL");t.exports=function(t,e){if(t){if("string"===typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,e):void 0}}},a1gu:function(t,e,n){var o=n("cDf5"),r=n("PJYZ");t.exports=function(t,e){return!e||"object"!==o(e)&&"function"!==typeof e?r(t):e}},cDf5:function(t,e){function n(e){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},lqnA:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return n("ALdH")}])},lwAK:function(t,e,n){"use strict";var o;e.__esModule=!0,e.AmpStateContext=void 0;var r=((o=n("q1tI"))&&o.__esModule?o:{default:o}).default.createContext({});e.AmpStateContext=r},lwsE:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}}},[["lqnA",0,1,2,3]]]);