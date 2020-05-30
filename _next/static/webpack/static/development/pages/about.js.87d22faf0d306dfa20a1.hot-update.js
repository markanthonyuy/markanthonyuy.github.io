webpackHotUpdate("static/development/pages/about.js",{

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return About; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _about_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.module.scss */ \"./pages/about.module.scss\");\n/* harmony import */ var _about_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_about_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Container */ \"./components/Container.js\");\n/* harmony import */ var _components_ToolIcons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ToolIcons */ \"./components/ToolIcons.js\");\n/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Nav */ \"./components/Nav.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\nvar _jsxFileName = \"/home/macmac/Projects/markanthonyuy.github.io/pages/about.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nfunction About() {\n  var _this = this;\n\n  var PEOPLE = [{\n    name: 'Wes Bos',\n    link: 'https://wesbos.com/'\n  }, {\n    name: 'Chris Coyier',\n    link: 'https://css-tricks.com/'\n  }, {\n    name: 'Brad Traversy',\n    link: 'https://traversymedia.com/'\n  }, {\n    name: 'Kent Dodds',\n    link: 'https://kentcdodds.com/'\n  }];\n  var PODCAST = [{\n    name: 'Syntax.fm',\n    link: 'https://syntax.fm/'\n  }, {\n    name: 'Shop Talk Show',\n    link: 'https://shoptalkshow.com/'\n  }, {\n    name: 'Front End Happy Hour',\n    link: 'https://frontendhappyhour.com/'\n  }];\n  var INSPIRATIONS = [{\n    name: 'Codepen',\n    link: 'https://codepen.io/'\n  }, {\n    name: 'Smashing Magazine',\n    link: 'https://www.smashingmagazine.com/'\n  }, {\n    name: 'Design Code',\n    link: 'https://designcode.io/'\n  }];\n\n  var makeList = function makeList(_ref) {\n    var list = _ref.list,\n        title = _ref.title;\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"motion\"].h3, {\n      initial: {\n        y: 50,\n        opacity: 0\n      },\n      animate: {\n        y: 0,\n        opacity: 1,\n        transition: {\n          delay: 1\n        }\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 7\n      }\n    }, title), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"motion\"].ul, {\n      initial: {\n        y: 50,\n        opacity: 0\n      },\n      animate: {\n        y: 0,\n        opacity: 1,\n        transition: {\n          delay: 1.2\n        }\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 7\n      }\n    }, list.map(function (p, key) {\n      return __jsx(\"li\", {\n        key: \"\".concat(p.name, \"-\").concat(key),\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 11\n        }\n      }, __jsx(\"a\", {\n        href: p.link,\n        rel: \"noopener\",\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 13\n        }\n      }, p.name));\n    })));\n  };\n\n  return __jsx(_components_Container__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 5\n    }\n  }, __jsx(_components_Nav__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    active: \"about\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: _about_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.about,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 7\n    }\n  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"motion\"].h1, {\n    initial: {\n      y: 50,\n      opacity: 0\n    },\n    animate: {\n      y: 0,\n      opacity: 1\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 9\n    }\n  }, \"Hello There!\"), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"motion\"].p, {\n    initial: {\n      y: 50,\n      opacity: 0\n    },\n    animate: {\n      y: 0,\n      opacity: 1,\n      transition: {\n        delay: 0.2\n      }\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 9\n    }\n  }, \"I'm Mark a.k.a. \\\"Mac\\\", husband to Bev, son of Tony and Lerma and the youngest of their children. Me and my wife loves to travel, We've seen the best white sand beaches of the Philippines to the beautiful Islands of Maldives \", __jsx(\"s\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 31\n    }\n  }, \"to the towering Skyscrappers of New York\"), ' ', \"(trip canceled due to COVID-19). We love to explore, feel nature, marvel at city architectures, learn other cultures and taste the exotic flavor of their cuisines, meet different kinds of people and make new friends.\"), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"motion\"].p, {\n    initial: {\n      y: 50,\n      opacity: 0\n    },\n    animate: {\n      y: 0,\n      opacity: 1,\n      transition: {\n        delay: 0.2\n      }\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 9\n    }\n  }, \"I love playing basketball (I'm a huge NBA fan), reading manga, watching anime, Friends, The Big Bang Theory and Dota2 tournament.\"), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"motion\"].p, {\n    initial: {\n      y: 50,\n      opacity: 0\n    },\n    animate: {\n      y: 0,\n      opacity: 1,\n      transition: {\n        delay: 0.2\n      }\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 9\n    }\n  }, \"I also like Ancient History and Astronomy from studying our history to finding out our future. Those are the things that keeps me up at night and wonder.\"), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"motion\"].h2, {\n    initial: {\n      y: 50,\n      opacity: 0\n    },\n    animate: {\n      y: 0,\n      opacity: 1,\n      transition: {\n        delay: 0.3\n      }\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 9\n    }\n  }, \"Career\"), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"motion\"].p, {\n    initial: {\n      y: 50,\n      opacity: 0\n    },\n    animate: {\n      y: 0,\n      opacity: 1,\n      transition: {\n        delay: 0.4\n      }\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 9\n    }\n  }, \"I've been web developing for 8+ years now. Time does indeed fly when your having fun. It seems only yesterday when I started converting PSD's to HTML as my first web developer job. Then I became a Software Engineer in a BPO industry. I got to work with various companies there. I work mostly on frontend development because that's where I found my passion. I love seeing fast, creative and intuitive websites. Lighthouse is my friend.\"), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"motion\"].blockquote, {\n    initial: {\n      y: 50,\n      opacity: 0\n    },\n    animate: {\n      y: 0,\n      opacity: 1,\n      transition: {\n        delay: 0.4\n      }\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 138,\n      columnNumber: 9\n    }\n  }, __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 142,\n      columnNumber: 11\n    }\n  }, \"\\\"Creating a website is a process of setting the right colors to define mood and apply the right contrast to give emphasize to an element, implementing the right font sizes to define hierarchy, adding animations to symbolize interaction and activity, intuitive enough so that visitors understands the flow of the website and faster than the speed of light.\\\" - Mark Anthony Uy\")), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"motion\"].p, {\n    initial: {\n      y: 50,\n      opacity: 0\n    },\n    animate: {\n      y: 0,\n      opacity: 1,\n      transition: {\n        delay: 0.4\n      }\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 152,\n      columnNumber: 9\n    }\n  }, \"I'm very passionate at what I do even though it's not easy keeping up with the technologies. It feels impossible to learn everything but if there's one thing I learn from using Linux, it's\", ' ', __jsx(\"b\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 159,\n      columnNumber: 11\n    }\n  }, \"Do one thing and do it really good\"), \". That's why I'm focusing on the frontend side.\"), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"motion\"].p, {\n    initial: {\n      y: 50,\n      opacity: 0\n    },\n    animate: {\n      y: 0,\n      opacity: 1,\n      transition: {\n        delay: 0.4\n      }\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 163,\n      columnNumber: 9\n    }\n  }, \"In the near future, I plan to learn Gatsby, GraphQL, Typscript, Strapijs, Redwoodjs, Sveltejs and Figma. Wish me luck!\"), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"motion\"].p, {\n    initial: {\n      y: 50,\n      opacity: 0\n    },\n    animate: {\n      y: 0,\n      opacity: 1,\n      transition: {\n        delay: 0.4\n      }\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 171,\n      columnNumber: 9\n    }\n  }, \"Benjamin Franklin once said\"), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"motion\"].blockquote, {\n    initial: {\n      y: 50,\n      opacity: 0\n    },\n    animate: {\n      y: 0,\n      opacity: 1,\n      transition: {\n        delay: 0.4\n      }\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 178,\n      columnNumber: 9\n    }\n  }, \"\\\"If you fail to plan, you are planning to fail.\\\"\"), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"motion\"].p, {\n    initial: {\n      y: 50,\n      opacity: 0\n    },\n    animate: {\n      y: 0,\n      opacity: 1,\n      transition: {\n        delay: 0.4\n      }\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 185,\n      columnNumber: 9\n    }\n  }, \"Big fan of open source.\"), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"motion\"].h2, {\n    initial: {\n      y: 50,\n      opacity: 0\n    },\n    animate: {\n      y: 0,\n      opacity: 1,\n      transition: {\n        delay: 0.5\n      }\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 192,\n      columnNumber: 9\n    }\n  }, \"Uses\"), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"motion\"].p, {\n    initial: {\n      y: 50,\n      opacity: 0\n    },\n    animate: {\n      y: 0,\n      opacity: 1,\n      transition: {\n        delay: 0.6\n      }\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 199,\n      columnNumber: 9\n    }\n  }, \"I use the following languages, libraries, frameworks and tools when creating a website.\"), __jsx(_components_ToolIcons__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    delay: 0.7,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 207,\n      columnNumber: 9\n    }\n  }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"motion\"].h2, {\n    initial: {\n      y: 50,\n      opacity: 0\n    },\n    animate: {\n      y: 0,\n      opacity: 1,\n      transition: {\n        delay: 0.8\n      }\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 209,\n      columnNumber: 9\n    }\n  }, \"Website\"), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"motion\"].p, {\n    initial: {\n      y: 50,\n      opacity: 0\n    },\n    animate: {\n      y: 0,\n      opacity: 1,\n      transition: {\n        delay: 0.9\n      }\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 215,\n      columnNumber: 9\n    }\n  }, \"This redesign of my website is inspired by many website. I often got my idea from looking at other people work and add my own flavor. I follow a lot of really cool people in the industry, listen to web development podcasts and read blogs. If you want to check them out here are some.\"), makeList({\n    list: PEOPLE,\n    title: 'People'\n  }), makeList({\n    list: PODCAST,\n    title: 'Podcast'\n  }), makeList({\n    list: INSPIRATIONS,\n    title: 'Inspirations'\n  })));\n}\n_c = About;\n\nvar _c;\n\n$RefreshReg$(_c, \"About\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hYm91dC5qcz8yNmVjIl0sIm5hbWVzIjpbIkFib3V0IiwiUEVPUExFIiwibmFtZSIsImxpbmsiLCJQT0RDQVNUIiwiSU5TUElSQVRJT05TIiwibWFrZUxpc3QiLCJsaXN0IiwidGl0bGUiLCJ5Iiwib3BhY2l0eSIsInRyYW5zaXRpb24iLCJkZWxheSIsIm1hcCIsInAiLCJrZXkiLCJzdHlsZXMiLCJhYm91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxLQUFULEdBQWlCO0FBQUE7O0FBQzlCLE1BQU1DLE1BQU0sR0FBRyxDQUNiO0FBQ0VDLFFBQUksRUFBRSxTQURSO0FBRUVDLFFBQUksRUFBRTtBQUZSLEdBRGEsRUFLYjtBQUNFRCxRQUFJLEVBQUUsY0FEUjtBQUVFQyxRQUFJLEVBQUU7QUFGUixHQUxhLEVBU2I7QUFDRUQsUUFBSSxFQUFFLGVBRFI7QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0FUYSxFQWFiO0FBQ0VELFFBQUksRUFBRSxZQURSO0FBRUVDLFFBQUksRUFBRTtBQUZSLEdBYmEsQ0FBZjtBQW1CQSxNQUFNQyxPQUFPLEdBQUcsQ0FDZDtBQUNFRixRQUFJLEVBQUUsV0FEUjtBQUVFQyxRQUFJLEVBQUU7QUFGUixHQURjLEVBS2Q7QUFDRUQsUUFBSSxFQUFFLGdCQURSO0FBRUVDLFFBQUksRUFBRTtBQUZSLEdBTGMsRUFTZDtBQUNFRCxRQUFJLEVBQUUsc0JBRFI7QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0FUYyxDQUFoQjtBQWVBLE1BQU1FLFlBQVksR0FBRyxDQUNuQjtBQUNFSCxRQUFJLEVBQUUsU0FEUjtBQUVFQyxRQUFJLEVBQUU7QUFGUixHQURtQixFQUtuQjtBQUNFRCxRQUFJLEVBQUUsbUJBRFI7QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0FMbUIsRUFTbkI7QUFDRUQsUUFBSSxFQUFFLGFBRFI7QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0FU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cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9hYm91dC5tb2R1bGUuc2NzcydcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Db250YWluZXInXG5pbXBvcnQgVG9vbEljb25zIGZyb20gJy4uL2NvbXBvbmVudHMvVG9vbEljb25zJ1xuaW1wb3J0IE5hdiBmcm9tICcuLi9jb21wb25lbnRzL05hdidcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFib3V0KCkge1xuICBjb25zdCBQRU9QTEUgPSBbXG4gICAge1xuICAgICAgbmFtZTogJ1dlcyBCb3MnLFxuICAgICAgbGluazogJ2h0dHBzOi8vd2VzYm9zLmNvbS8nLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0NocmlzIENveWllcicsXG4gICAgICBsaW5rOiAnaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS8nLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0JyYWQgVHJhdmVyc3knLFxuICAgICAgbGluazogJ2h0dHBzOi8vdHJhdmVyc3ltZWRpYS5jb20vJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdLZW50IERvZGRzJyxcbiAgICAgIGxpbms6ICdodHRwczovL2tlbnRjZG9kZHMuY29tLycsXG4gICAgfSxcbiAgXVxuXG4gIGNvbnN0IFBPRENBU1QgPSBbXG4gICAge1xuICAgICAgbmFtZTogJ1N5bnRheC5mbScsXG4gICAgICBsaW5rOiAnaHR0cHM6Ly9zeW50YXguZm0vJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdTaG9wIFRhbGsgU2hvdycsXG4gICAgICBsaW5rOiAnaHR0cHM6Ly9zaG9wdGFsa3Nob3cuY29tLycsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnRnJvbnQgRW5kIEhhcHB5IEhvdXInLFxuICAgICAgbGluazogJ2h0dHBzOi8vZnJvbnRlbmRoYXBweWhvdXIuY29tLycsXG4gICAgfSxcbiAgXVxuXG4gIGNvbnN0IElOU1BJUkFUSU9OUyA9IFtcbiAgICB7XG4gICAgICBuYW1lOiAnQ29kZXBlbicsXG4gICAgICBsaW5rOiAnaHR0cHM6Ly9jb2RlcGVuLmlvLycsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnU21hc2hpbmcgTWFnYXppbmUnLFxuICAgICAgbGluazogJ2h0dHBzOi8vd3d3LnNtYXNoaW5nbWFnYXppbmUuY29tLycsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnRGVzaWduIENvZGUnLFxuICAgICAgbGluazogJ2h0dHBzOi8vZGVzaWduY29kZS5pby8nLFxuICAgIH0sXG4gIF1cblxuICBjb25zdCBtYWtlTGlzdCA9ICh7IGxpc3QsIHRpdGxlIH0pID0+IChcbiAgICA8PlxuICAgICAgPG1vdGlvbi5oM1xuICAgICAgICBpbml0aWFsPXt7IHk6IDUwLCBvcGFjaXR5OiAwIH19XG4gICAgICAgIGFuaW1hdGU9e3sgeTogMCwgb3BhY2l0eTogMSwgdHJhbnNpdGlvbjogeyBkZWxheTogMSB9IH19XG4gICAgICA+XG4gICAgICAgIHt0aXRsZX1cbiAgICAgIDwvbW90aW9uLmgzPlxuICAgICAgPG1vdGlvbi51bFxuICAgICAgICBpbml0aWFsPXt7IHk6IDUwLCBvcGFjaXR5OiAwIH19XG4gICAgICAgIGFuaW1hdGU9e3sgeTogMCwgb3BhY2l0eTogMSwgdHJhbnNpdGlvbjogeyBkZWxheTogMS4yIH0gfX1cbiAgICAgID5cbiAgICAgICAge2xpc3QubWFwKChwLCBrZXkpID0+IChcbiAgICAgICAgICA8bGkga2V5PXtgJHtwLm5hbWV9LSR7a2V5fWB9PlxuICAgICAgICAgICAgPGEgaHJlZj17cC5saW5rfSByZWw9XCJub29wZW5lclwiPlxuICAgICAgICAgICAgICB7cC5uYW1lfVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC9tb3Rpb24udWw+XG4gICAgPC8+XG4gIClcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8TmF2IGFjdGl2ZT1cImFib3V0XCIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWJvdXR9PlxuICAgICAgICA8bW90aW9uLmgxXG4gICAgICAgICAgaW5pdGlhbD17eyB5OiA1MCwgb3BhY2l0eTogMCB9fVxuICAgICAgICAgIGFuaW1hdGU9e3sgeTogMCwgb3BhY2l0eTogMSB9fVxuICAgICAgICA+XG4gICAgICAgICAgSGVsbG8gVGhlcmUhXG4gICAgICAgIDwvbW90aW9uLmgxPlxuICAgICAgICA8bW90aW9uLnBcbiAgICAgICAgICBpbml0aWFsPXt7IHk6IDUwLCBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgYW5pbWF0ZT17eyB5OiAwLCBvcGFjaXR5OiAxLCB0cmFuc2l0aW9uOiB7IGRlbGF5OiAwLjIgfSB9fVxuICAgICAgICA+XG4gICAgICAgICAgSSdtIE1hcmsgYS5rLmEuIFwiTWFjXCIsIGh1c2JhbmQgdG8gQmV2LCBzb24gb2YgVG9ueSBhbmQgTGVybWEgYW5kIHRoZVxuICAgICAgICAgIHlvdW5nZXN0IG9mIHRoZWlyIGNoaWxkcmVuLiBNZSBhbmQgbXkgd2lmZSBsb3ZlcyB0byB0cmF2ZWwsIFdlJ3ZlIHNlZW5cbiAgICAgICAgICB0aGUgYmVzdCB3aGl0ZSBzYW5kIGJlYWNoZXMgb2YgdGhlIFBoaWxpcHBpbmVzIHRvIHRoZSBiZWF1dGlmdWxcbiAgICAgICAgICBJc2xhbmRzIG9mIE1hbGRpdmVzIDxzPnRvIHRoZSB0b3dlcmluZyBTa3lzY3JhcHBlcnMgb2YgTmV3IFlvcms8L3M+eycgJ31cbiAgICAgICAgICAodHJpcCBjYW5jZWxlZCBkdWUgdG8gQ09WSUQtMTkpLiBXZSBsb3ZlIHRvIGV4cGxvcmUsIGZlZWwgbmF0dXJlLFxuICAgICAgICAgIG1hcnZlbCBhdCBjaXR5IGFyY2hpdGVjdHVyZXMsIGxlYXJuIG90aGVyIGN1bHR1cmVzIGFuZCB0YXN0ZSB0aGVcbiAgICAgICAgICBleG90aWMgZmxhdm9yIG9mIHRoZWlyIGN1aXNpbmVzLCBtZWV0IGRpZmZlcmVudCBraW5kcyBvZiBwZW9wbGUgYW5kXG4gICAgICAgICAgbWFrZSBuZXcgZnJpZW5kcy5cbiAgICAgICAgPC9tb3Rpb24ucD5cbiAgICAgICAgPG1vdGlvbi5wXG4gICAgICAgICAgaW5pdGlhbD17eyB5OiA1MCwgb3BhY2l0eTogMCB9fVxuICAgICAgICAgIGFuaW1hdGU9e3sgeTogMCwgb3BhY2l0eTogMSwgdHJhbnNpdGlvbjogeyBkZWxheTogMC4yIH0gfX1cbiAgICAgICAgPlxuICAgICAgICAgIEkgbG92ZSBwbGF5aW5nIGJhc2tldGJhbGwgKEknbSBhIGh1Z2UgTkJBIGZhbiksIHJlYWRpbmcgbWFuZ2EsXG4gICAgICAgICAgd2F0Y2hpbmcgYW5pbWUsIEZyaWVuZHMsIFRoZSBCaWcgQmFuZyBUaGVvcnkgYW5kIERvdGEyIHRvdXJuYW1lbnQuXG4gICAgICAgIDwvbW90aW9uLnA+XG4gICAgICAgIDxtb3Rpb24ucFxuICAgICAgICAgIGluaXRpYWw9e3sgeTogNTAsIG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICBhbmltYXRlPXt7IHk6IDAsIG9wYWNpdHk6IDEsIHRyYW5zaXRpb246IHsgZGVsYXk6IDAuMiB9IH19XG4gICAgICAgID5cbiAgICAgICAgICBJIGFsc28gbGlrZSBBbmNpZW50IEhpc3RvcnkgYW5kIEFzdHJvbm9teSBmcm9tIHN0dWR5aW5nIG91ciBoaXN0b3J5IHRvXG4gICAgICAgICAgZmluZGluZyBvdXQgb3VyIGZ1dHVyZS4gVGhvc2UgYXJlIHRoZSB0aGluZ3MgdGhhdCBrZWVwcyBtZSB1cCBhdCBuaWdodFxuICAgICAgICAgIGFuZCB3b25kZXIuXG4gICAgICAgIDwvbW90aW9uLnA+XG5cbiAgICAgICAgPG1vdGlvbi5oMlxuICAgICAgICAgIGluaXRpYWw9e3sgeTogNTAsIG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICBhbmltYXRlPXt7IHk6IDAsIG9wYWNpdHk6IDEsIHRyYW5zaXRpb246IHsgZGVsYXk6IDAuMyB9IH19XG4gICAgICAgID5cbiAgICAgICAgICBDYXJlZXJcbiAgICAgICAgPC9tb3Rpb24uaDI+XG4gICAgICAgIDxtb3Rpb24ucFxuICAgICAgICAgIGluaXRpYWw9e3sgeTogNTAsIG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICBhbmltYXRlPXt7IHk6IDAsIG9wYWNpdHk6IDEsIHRyYW5zaXRpb246IHsgZGVsYXk6IDAuNCB9IH19XG4gICAgICAgID5cbiAgICAgICAgICBJJ3ZlIGJlZW4gd2ViIGRldmVsb3BpbmcgZm9yIDgrIHllYXJzIG5vdy4gVGltZSBkb2VzIGluZGVlZCBmbHkgd2hlblxuICAgICAgICAgIHlvdXIgaGF2aW5nIGZ1bi4gSXQgc2VlbXMgb25seSB5ZXN0ZXJkYXkgd2hlbiBJIHN0YXJ0ZWQgY29udmVydGluZ1xuICAgICAgICAgIFBTRCdzIHRvIEhUTUwgYXMgbXkgZmlyc3Qgd2ViIGRldmVsb3BlciBqb2IuIFRoZW4gSSBiZWNhbWUgYSBTb2Z0d2FyZVxuICAgICAgICAgIEVuZ2luZWVyIGluIGEgQlBPIGluZHVzdHJ5LiBJIGdvdCB0byB3b3JrIHdpdGggdmFyaW91cyBjb21wYW5pZXNcbiAgICAgICAgICB0aGVyZS4gSSB3b3JrIG1vc3RseSBvbiBmcm9udGVuZCBkZXZlbG9wbWVudCBiZWNhdXNlIHRoYXQncyB3aGVyZSBJXG4gICAgICAgICAgZm91bmQgbXkgcGFzc2lvbi4gSSBsb3ZlIHNlZWluZyBmYXN0LCBjcmVhdGl2ZSBhbmQgaW50dWl0aXZlIHdlYnNpdGVzLlxuICAgICAgICAgIExpZ2h0aG91c2UgaXMgbXkgZnJpZW5kLlxuICAgICAgICA8L21vdGlvbi5wPlxuXG4gICAgICAgIDxtb3Rpb24uYmxvY2txdW90ZVxuICAgICAgICAgIGluaXRpYWw9e3sgeTogNTAsIG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICBhbmltYXRlPXt7IHk6IDAsIG9wYWNpdHk6IDEsIHRyYW5zaXRpb246IHsgZGVsYXk6IDAuNCB9IH19XG4gICAgICAgID5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIFwiQ3JlYXRpbmcgYSB3ZWJzaXRlIGlzIGEgcHJvY2VzcyBvZiBzZXR0aW5nIHRoZSByaWdodCBjb2xvcnMgdG9cbiAgICAgICAgICAgIGRlZmluZSBtb29kIGFuZCBhcHBseSB0aGUgcmlnaHQgY29udHJhc3QgdG8gZ2l2ZSBlbXBoYXNpemUgdG8gYW5cbiAgICAgICAgICAgIGVsZW1lbnQsIGltcGxlbWVudGluZyB0aGUgcmlnaHQgZm9udCBzaXplcyB0byBkZWZpbmUgaGllcmFyY2h5LFxuICAgICAgICAgICAgYWRkaW5nIGFuaW1hdGlvbnMgdG8gc3ltYm9saXplIGludGVyYWN0aW9uIGFuZCBhY3Rpdml0eSwgaW50dWl0aXZlXG4gICAgICAgICAgICBlbm91Z2ggc28gdGhhdCB2aXNpdG9ycyB1bmRlcnN0YW5kcyB0aGUgZmxvdyBvZiB0aGUgd2Vic2l0ZSBhbmRcbiAgICAgICAgICAgIGZhc3RlciB0aGFuIHRoZSBzcGVlZCBvZiBsaWdodC5cIiAtIE1hcmsgQW50aG9ueSBVeVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9tb3Rpb24uYmxvY2txdW90ZT5cblxuICAgICAgICA8bW90aW9uLnBcbiAgICAgICAgICBpbml0aWFsPXt7IHk6IDUwLCBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgYW5pbWF0ZT17eyB5OiAwLCBvcGFjaXR5OiAxLCB0cmFuc2l0aW9uOiB7IGRlbGF5OiAwLjQgfSB9fVxuICAgICAgICA+XG4gICAgICAgICAgSSdtIHZlcnkgcGFzc2lvbmF0ZSBhdCB3aGF0IEkgZG8gZXZlbiB0aG91Z2ggaXQncyBub3QgZWFzeSBrZWVwaW5nIHVwXG4gICAgICAgICAgd2l0aCB0aGUgdGVjaG5vbG9naWVzLiBJdCBmZWVscyBpbXBvc3NpYmxlIHRvIGxlYXJuIGV2ZXJ5dGhpbmcgYnV0IGlmXG4gICAgICAgICAgdGhlcmUncyBvbmUgdGhpbmcgSSBsZWFybiBmcm9tIHVzaW5nIExpbnV4LCBpdCdzeycgJ31cbiAgICAgICAgICA8Yj5EbyBvbmUgdGhpbmcgYW5kIGRvIGl0IHJlYWxseSBnb29kPC9iPi4gVGhhdCdzIHdoeSBJJ20gZm9jdXNpbmcgb25cbiAgICAgICAgICB0aGUgZnJvbnRlbmQgc2lkZS5cbiAgICAgICAgPC9tb3Rpb24ucD5cblxuICAgICAgICA8bW90aW9uLnBcbiAgICAgICAgICBpbml0aWFsPXt7IHk6IDUwLCBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgYW5pbWF0ZT17eyB5OiAwLCBvcGFjaXR5OiAxLCB0cmFuc2l0aW9uOiB7IGRlbGF5OiAwLjQgfSB9fVxuICAgICAgICA+XG4gICAgICAgICAgSW4gdGhlIG5lYXIgZnV0dXJlLCBJIHBsYW4gdG8gbGVhcm4gR2F0c2J5LCBHcmFwaFFMLCBUeXBzY3JpcHQsXG4gICAgICAgICAgU3RyYXBpanMsIFJlZHdvb2RqcywgU3ZlbHRlanMgYW5kIEZpZ21hLiBXaXNoIG1lIGx1Y2shXG4gICAgICAgIDwvbW90aW9uLnA+XG5cbiAgICAgICAgPG1vdGlvbi5wXG4gICAgICAgICAgaW5pdGlhbD17eyB5OiA1MCwgb3BhY2l0eTogMCB9fVxuICAgICAgICAgIGFuaW1hdGU9e3sgeTogMCwgb3BhY2l0eTogMSwgdHJhbnNpdGlvbjogeyBkZWxheTogMC40IH0gfX1cbiAgICAgICAgPlxuICAgICAgICAgIEJlbmphbWluIEZyYW5rbGluIG9uY2Ugc2FpZFxuICAgICAgICA8L21vdGlvbi5wPlxuXG4gICAgICAgIDxtb3Rpb24uYmxvY2txdW90ZVxuICAgICAgICAgIGluaXRpYWw9e3sgeTogNTAsIG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICBhbmltYXRlPXt7IHk6IDAsIG9wYWNpdHk6IDEsIHRyYW5zaXRpb246IHsgZGVsYXk6IDAuNCB9IH19XG4gICAgICAgID5cbiAgICAgICAgICBcIklmIHlvdSBmYWlsIHRvIHBsYW4sIHlvdSBhcmUgcGxhbm5pbmcgdG8gZmFpbC5cIlxuICAgICAgICA8L21vdGlvbi5ibG9ja3F1b3RlPlxuXG4gICAgICAgIDxtb3Rpb24ucFxuICAgICAgICAgIGluaXRpYWw9e3sgeTogNTAsIG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICBhbmltYXRlPXt7IHk6IDAsIG9wYWNpdHk6IDEsIHRyYW5zaXRpb246IHsgZGVsYXk6IDAuNCB9IH19XG4gICAgICAgID5cbiAgICAgICAgICBCaWcgZmFuIG9mIG9wZW4gc291cmNlLlxuICAgICAgICA8L21vdGlvbi5wPlxuXG4gICAgICAgIDxtb3Rpb24uaDJcbiAgICAgICAgICBpbml0aWFsPXt7IHk6IDUwLCBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgYW5pbWF0ZT17eyB5OiAwLCBvcGFjaXR5OiAxLCB0cmFuc2l0aW9uOiB7IGRlbGF5OiAwLjUgfSB9fVxuICAgICAgICA+XG4gICAgICAgICAgVXNlc1xuICAgICAgICA8L21vdGlvbi5oMj5cblxuICAgICAgICA8bW90aW9uLnBcbiAgICAgICAgICBpbml0aWFsPXt7IHk6IDUwLCBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgYW5pbWF0ZT17eyB5OiAwLCBvcGFjaXR5OiAxLCB0cmFuc2l0aW9uOiB7IGRlbGF5OiAwLjYgfSB9fVxuICAgICAgICA+XG4gICAgICAgICAgSSB1c2UgdGhlIGZvbGxvd2luZyBsYW5ndWFnZXMsIGxpYnJhcmllcywgZnJhbWV3b3JrcyBhbmQgdG9vbHMgd2hlblxuICAgICAgICAgIGNyZWF0aW5nIGEgd2Vic2l0ZS5cbiAgICAgICAgPC9tb3Rpb24ucD5cblxuICAgICAgICA8VG9vbEljb25zIGRlbGF5PXswLjd9IC8+XG5cbiAgICAgICAgPG1vdGlvbi5oMlxuICAgICAgICAgIGluaXRpYWw9e3sgeTogNTAsIG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICBhbmltYXRlPXt7IHk6IDAsIG9wYWNpdHk6IDEsIHRyYW5zaXRpb246IHsgZGVsYXk6IDAuOCB9IH19XG4gICAgICAgID5cbiAgICAgICAgICBXZWJzaXRlXG4gICAgICAgIDwvbW90aW9uLmgyPlxuICAgICAgICA8bW90aW9uLnBcbiAgICAgICAgICBpbml0aWFsPXt7IHk6IDUwLCBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgYW5pbWF0ZT17eyB5OiAwLCBvcGFjaXR5OiAxLCB0cmFuc2l0aW9uOiB7IGRlbGF5OiAwLjkgfSB9fVxuICAgICAgICA+XG4gICAgICAgICAgVGhpcyByZWRlc2lnbiBvZiBteSB3ZWJzaXRlIGlzIGluc3BpcmVkIGJ5IG1hbnkgd2Vic2l0ZS4gSSBvZnRlbiBnb3RcbiAgICAgICAgICBteSBpZGVhIGZyb20gbG9va2luZyBhdCBvdGhlciBwZW9wbGUgd29yayBhbmQgYWRkIG15IG93biBmbGF2b3IuIElcbiAgICAgICAgICBmb2xsb3cgYSBsb3Qgb2YgcmVhbGx5IGNvb2wgcGVvcGxlIGluIHRoZSBpbmR1c3RyeSwgbGlzdGVuIHRvIHdlYlxuICAgICAgICAgIGRldmVsb3BtZW50IHBvZGNhc3RzIGFuZCByZWFkIGJsb2dzLiBJZiB5b3Ugd2FudCB0byBjaGVjayB0aGVtIG91dFxuICAgICAgICAgIGhlcmUgYXJlIHNvbWUuXG4gICAgICAgIDwvbW90aW9uLnA+XG5cbiAgICAgICAge21ha2VMaXN0KHsgbGlzdDogUEVPUExFLCB0aXRsZTogJ1Blb3BsZScgfSl9XG4gICAgICAgIHttYWtlTGlzdCh7IGxpc3Q6IFBPRENBU1QsIHRpdGxlOiAnUG9kY2FzdCcgfSl9XG4gICAgICAgIHttYWtlTGlzdCh7IGxpc3Q6IElOU1BJUkFUSU9OUywgdGl0bGU6ICdJbnNwaXJhdGlvbnMnIH0pfVxuICAgICAgPC9kaXY+XG4gICAgPC9Db250YWluZXI+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/about.js\n");

/***/ })

})