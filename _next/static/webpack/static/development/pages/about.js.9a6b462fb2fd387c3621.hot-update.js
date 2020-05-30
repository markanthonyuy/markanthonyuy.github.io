webpackHotUpdate("static/development/pages/about.js",{

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return About; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _about_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.module.scss */ \"./pages/about.module.scss\");\n/* harmony import */ var _about_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_about_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Container */ \"./components/Container.js\");\n/* harmony import */ var _components_ToolIcons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ToolIcons */ \"./components/ToolIcons.js\");\n/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Nav */ \"./components/Nav.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\nvar _jsxFileName = \"/home/macmac/Projects/markanthonyuy.github.io/pages/about.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nfunction About() {\n  var _this = this;\n\n  var PEOPLE = [{\n    name: 'Wes Bos',\n    link: 'https://wesbos.com/'\n  }, {\n    name: 'Chris Coyier',\n    link: 'https://css-tricks.com/'\n  }, {\n    name: 'Brad Traversy',\n    link: 'https://traversymedia.com/'\n  }, {\n    name: 'Kent Dodds',\n    link: 'https://kentcdodds.com/'\n  }];\n  var PODCAST = [{\n    name: 'Syntax.fm',\n    link: 'https://syntax.fm/'\n  }, {\n    name: 'Shop Talk Show',\n    link: 'https://shoptalkshow.com/'\n  }, {\n    name: 'Front End Happy Hour',\n    link: 'https://frontendhappyhour.com/'\n  }];\n  var INSPIRATIONS = [{\n    name: 'Codepen',\n    link: 'https://codepen.io/'\n  }, {\n    name: 'Smashing Magazine',\n    link: 'https://www.smashingmagazine.com/'\n  }, {\n    name: 'Design Code',\n    link: 'https://designcode.io/'\n  }];\n\n  var makeList = function makeList(_ref) {\n    var list = _ref.list,\n        title = _ref.title;\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"motion\"].h3, {\n      initial: {\n        y: 50,\n        opacity: 0\n      },\n      animate: {\n        y: 0,\n        opacity: 1,\n        transition: {\n          delay: 1\n        }\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 7\n      }\n    }, title), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"motion\"].ul, {\n      initial: {\n        y: 50,\n        opacity: 0\n      },\n      animate: {\n        y: 0,\n        opacity: 1,\n        transition: {\n          delay: 1.2\n        }\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 7\n      }\n    }, list.map(function (p, key) {\n      return __jsx(\"li\", {\n        key: \"\".concat(p.name, \"-\").concat(key),\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 11\n        }\n      }, __jsx(\"a\", {\n        href: p.link,\n        rel: \"noopener\",\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 13\n        }\n      }, p.name));\n    })));\n  };\n\n  return __jsx(_components_Container__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 5\n    }\n  }, __jsx(_components_Nav__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    active: \"about\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: _about_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.about,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 7\n    }\n  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"motion\"].h1, {\n    initial: {\n      y: 50,\n      opacity: 0\n    },\n    animate: {\n      y: 0,\n      opacity: 1\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 9\n    }\n  }, \"Hello There!\"), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"motion\"].p, {\n    initial: {\n      y: 50,\n      opacity: 0\n    },\n    animate: {\n      y: 0,\n      opacity: 1,\n      transition: {\n        delay: 0.2\n      }\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 9\n    }\n  }, \"I'm Mark a.k.a. \\\"Mac\\\", husband to Bev, son of Tony and Lerma and the youngest of their children. Me and my wife loves to travel, We've seen the best white sand beaches of the Philippines to the beautiful Islands of Maldives \", __jsx(\"s\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 31\n    }\n  }, \"to the towering Skyscrappers of New York\"), ' ', \"(trip canceled due to COVID-19). We love to explore, feel nature, marvel at city architectures, learn other cultures and taste the exotic flavor of their cuisines, meet different kinds of people and make new friends.\"), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"motion\"].blockquote, {\n    initial: {\n      y: 50,\n      opacity: 0\n    },\n    animate: {\n      y: 0,\n      opacity: 1,\n      transition: {\n        delay: 0.2\n      }\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 9\n    }\n  }, __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 11\n    }\n  }, \"\\\"Never go on trips with anyone you do not love.\\u201D - Hemmingway\")), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"motion\"].p, {\n    initial: {\n      y: 50,\n      opacity: 0\n    },\n    animate: {\n      y: 0,\n      opacity: 1,\n      transition: {\n        delay: 0.2\n      }\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 9\n    }\n  }, \"I love playing basketball (I'm a huge NBA fan), reading manga, watching anime, Friends, The Big Bang Theory and Dota2 tournament.\"), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"motion\"].p, {\n    initial: {\n      y: 50,\n      opacity: 0\n    },\n    animate: {\n      y: 0,\n      opacity: 1,\n      transition: {\n        delay: 0.2\n      }\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 9\n    }\n  }, \"I also like Ancient History, Astronomy and Physics from the mystery of building the Great Pyramid Giza to the brightest star in the Milky Way. Is there really a parallel Universe? I just hope I'm tall, rich and good looking man somewhere there. \\uD83D\\uDE02 Those are the things that keeps me up at night and wonder.\"), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"motion\"].blockquote, {\n    initial: {\n      y: 50,\n      opacity: 0\n    },\n    animate: {\n      y: 0,\n      opacity: 1,\n      transition: {\n        delay: 0.2\n      }\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 129,\n      columnNumber: 9\n    }\n  }, __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 133,\n      columnNumber: 11\n    }\n  }, \"\\\"In this bright future you can't forget your past.\\u201D - Bob Marley\")), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"motion\"].h2, {\n    initial: {\n      y: 50,\n      opacity: 0\n    },\n    animate: {\n      y: 0,\n      opacity: 1,\n      transition: {\n        delay: 0.3\n      }\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 138,\n      columnNumber: 9\n    }\n  }, \"Career\"), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"motion\"].p, {\n    initial: {\n      y: 50,\n      opacity: 0\n    },\n    animate: {\n      y: 0,\n      opacity: 1,\n      transition: {\n        delay: 0.4\n      }\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 144,\n      columnNumber: 9\n    }\n  }, \"I've been web developing for 8+ years now. Time does indeed fly when your having fun. It seems only yesterday when I started converting PSD's to HTML as my first web developer job. Then I became a Software Engineer in a BPO industry. I got to work with various companies there. I work mostly on frontend development because that's where I found my passion. I love seeing fast, creative and intuitive websites. Lighthouse is my friend.\"), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"motion\"].blockquote, {\n    initial: {\n      y: 50,\n      opacity: 0\n    },\n    animate: {\n      y: 0,\n      opacity: 1,\n      transition: {\n        delay: 0.4\n      }\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 157,\n      columnNumber: 9\n    }\n  }, __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 161,\n      columnNumber: 11\n    }\n  }, \"\\\"Creating a website is a process of setting the right colors to define mood and apply the right contrast to give emphasize to an element, implementing the right font sizes to define hierarchy, adding animations to symbolize interaction and activity, intuitive enough so that visitors understands the flow of the website and faster than the speed of light.\\\" - Mark Anthony Uy\")), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"motion\"].p, {\n    initial: {\n      y: 50,\n      opacity: 0\n    },\n    animate: {\n      y: 0,\n      opacity: 1,\n      transition: {\n        delay: 0.4\n      }\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 171,\n      columnNumber: 9\n    }\n  }, \"I'm very passionate at what I do even though it's not easy keeping up with the technologies. It feels impossible to learn everything but if there's one thing I learn from using Linux, it's\", ' ', __jsx(\"b\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 178,\n      columnNumber: 11\n    }\n  }, \"Do one thing and do it really good\"), \". That's why I'm focusing on the frontend side.\"), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"motion\"].p, {\n    initial: {\n      y: 50,\n      opacity: 0\n    },\n    animate: {\n      y: 0,\n      opacity: 1,\n      transition: {\n        delay: 0.4\n      }\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 182,\n      columnNumber: 9\n    }\n  }, \"In the near future, I plan to learn Gatsby, GraphQL, Typscript, Strapijs, Redwoodjs, Sveltejs and Figma. This goes with the quote that I really love.\"), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"motion\"].blockquote, {\n    initial: {\n      y: 50,\n      opacity: 0\n    },\n    animate: {\n      y: 0,\n      opacity: 1,\n      transition: {\n        delay: 0.4\n      }\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 191,\n      columnNumber: 9\n    }\n  }, __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 195,\n      columnNumber: 11\n    }\n  }, \"\\\"If you fail to plan, you are planning to fail.\\\" - Benjamin Franklin\")), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"motion\"].p, {\n    initial: {\n      y: 50,\n      opacity: 0\n    },\n    animate: {\n      y: 0,\n      opacity: 1,\n      transition: {\n        delay: 0.4\n      }\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 200,\n      columnNumber: 9\n    }\n  }, \"Wish me luck.\"), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"motion\"].h2, {\n    initial: {\n      y: 50,\n      opacity: 0\n    },\n    animate: {\n      y: 0,\n      opacity: 1,\n      transition: {\n        delay: 0.5\n      }\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 207,\n      columnNumber: 9\n    }\n  }, \"Uses\"), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"motion\"].p, {\n    initial: {\n      y: 50,\n      opacity: 0\n    },\n    animate: {\n      y: 0,\n      opacity: 1,\n      transition: {\n        delay: 0.6\n      }\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 214,\n      columnNumber: 9\n    }\n  }, \"I'm a big fan of open source I use the following languages, libraries, frameworks and tools when creating a website.\"), __jsx(_components_ToolIcons__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    delay: 0.7,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 222,\n      columnNumber: 9\n    }\n  }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"motion\"].h2, {\n    initial: {\n      y: 50,\n      opacity: 0\n    },\n    animate: {\n      y: 0,\n      opacity: 1,\n      transition: {\n        delay: 0.8\n      }\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 224,\n      columnNumber: 9\n    }\n  }, \"My Website\"), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"motion\"].p, {\n    initial: {\n      y: 50,\n      opacity: 0\n    },\n    animate: {\n      y: 0,\n      opacity: 1,\n      transition: {\n        delay: 0.9\n      }\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 230,\n      columnNumber: 9\n    }\n  }, \"This redesign of my website is inspired by many website. I often got my idea from looking at other people work and add my own flavor. I follow a lot of really cool people in the industry, listen to web development podcasts and read blogs. If you want to check them out here are some.\"), makeList({\n    list: PEOPLE,\n    title: 'People'\n  }), makeList({\n    list: PODCAST,\n    title: 'Podcast'\n  }), makeList({\n    list: INSPIRATIONS,\n    title: 'Inspirations'\n  })));\n}\n_c = About;\n\nvar _c;\n\n$RefreshReg$(_c, \"About\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hYm91dC5qcz8yNmVjIl0sIm5hbWVzIjpbIkFib3V0IiwiUEVPUExFIiwibmFtZSIsImxpbmsiLCJQT0RDQVNUIiwiSU5TUElSQVRJT05TIiwibWFrZUxpc3QiLCJsaXN0IiwidGl0bGUiLCJ5Iiwib3BhY2l0eSIsInRyYW5zaXRpb24iLCJkZWxheSIsIm1hcCIsInAiLCJrZXkiLCJzdHlsZXMiLCJhYm91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxLQUFULEdBQWlCO0FBQUE7O0FBQzlCLE1BQU1DLE1BQU0sR0FBRyxDQUNiO0FBQ0VDLFFBQUksRUFBRSxTQURSO0FBRUVDLFFBQUksRUFBRTtBQUZSLEdBRGEsRUFLYjtBQUNFRCxRQUFJLEVBQUUsY0FEUjtBQUVFQyxRQUFJLEVBQUU7QUFGUixHQUxhLEVBU2I7QUFDRUQsUUFBSSxFQUFFLGVBRFI7QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0FUYSxFQWFiO0FBQ0VELFFBQUksRUFBRSxZQURSO0FBRUVDLFFBQUksRUFBRTtBQUZSLEdBYmEsQ0FBZjtBQW1CQSxNQUFNQyxPQUFPLEdBQUcsQ0FDZDtBQUNFRixRQUFJLEVBQUUsV0FEUjtBQUVFQyxRQUFJLEVBQUU7QUFGUixHQURjLEVBS2Q7QUFDRUQsUUFBSSxFQUFFLGdCQURSO0FBRUVDLFFBQUksRUFBRTtBQUZSLEdBTGMsRUFTZDtBQUNFRCxRQUFJLEVBQUUsc0JBRFI7QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0FUYyxDQUFoQjtBQWVBLE1BQU1FLFlBQVksR0FBRyxDQUNuQjtBQUNFSCxRQUFJLEVBQUUsU0FEUjtBQUVFQyxRQUFJLEVBQUU7QUFGUixHQURtQixFQUtuQjtBQUNFRCxRQUFJLEVBQUUsbUJBRFI7QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0FMbUIsRUFTbkI7QUFDRUQsUUFBSSxFQUFFLGFBRFI7QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0FU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QUFPLEVBQUUsQ0FBakI7QUFBb0JDLGdCQUFVLEVBQUU7QUFBRUMsYUFBSyxFQUFFO0FBQVQ7QUFBaEMsS0FGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1TQW5KRixFQThKR04sUUFBUSxDQUFDO0FBQUVDLFFBQUksRUFBRU4sTUFBUjtBQUFnQk8sU0FBSyxFQUFFO0FBQXZCLEdBQUQsQ0E5SlgsRUErSkdGLFFBQVEsQ0FBQztBQUFFQyxRQUFJLEVBQUVILE9BQVI7QUFBaUJJLFNBQUssRUFBRTtBQUF4QixHQUFELENBL0pYLEVBZ0tHRixRQUFRLENBQUM7QUFBRUMsUUFBSSxFQUFFRixZQUFSO0FBQXNCRyxTQUFLLEVBQUU7QUFBN0IsR0FBRCxDQWhLWCxDQUZGLENBREY7QUF1S0Q7S0FoUHVCUixLIiwiZmlsZSI6Ii4vcGFnZXMvYWJvdXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vYWJvdXQubW9kdWxlLnNjc3MnXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4uL2NvbXBvbmVudHMvQ29udGFpbmVyJ1xuaW1wb3J0IFRvb2xJY29ucyBmcm9tICcuLi9jb21wb25lbnRzL1Rvb2xJY29ucydcbmltcG9ydCBOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9OYXYnXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBYm91dCgpIHtcbiAgY29uc3QgUEVPUExFID0gW1xuICAgIHtcbiAgICAgIG5hbWU6ICdXZXMgQm9zJyxcbiAgICAgIGxpbms6ICdodHRwczovL3dlc2Jvcy5jb20vJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdDaHJpcyBDb3lpZXInLFxuICAgICAgbGluazogJ2h0dHBzOi8vY3NzLXRyaWNrcy5jb20vJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdCcmFkIFRyYXZlcnN5JyxcbiAgICAgIGxpbms6ICdodHRwczovL3RyYXZlcnN5bWVkaWEuY29tLycsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnS2VudCBEb2RkcycsXG4gICAgICBsaW5rOiAnaHR0cHM6Ly9rZW50Y2RvZGRzLmNvbS8nLFxuICAgIH0sXG4gIF1cblxuICBjb25zdCBQT0RDQVNUID0gW1xuICAgIHtcbiAgICAgIG5hbWU6ICdTeW50YXguZm0nLFxuICAgICAgbGluazogJ2h0dHBzOi8vc3ludGF4LmZtLycsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnU2hvcCBUYWxrIFNob3cnLFxuICAgICAgbGluazogJ2h0dHBzOi8vc2hvcHRhbGtzaG93LmNvbS8nLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0Zyb250IEVuZCBIYXBweSBIb3VyJyxcbiAgICAgIGxpbms6ICdodHRwczovL2Zyb250ZW5kaGFwcHlob3VyLmNvbS8nLFxuICAgIH0sXG4gIF1cblxuICBjb25zdCBJTlNQSVJBVElPTlMgPSBbXG4gICAge1xuICAgICAgbmFtZTogJ0NvZGVwZW4nLFxuICAgICAgbGluazogJ2h0dHBzOi8vY29kZXBlbi5pby8nLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ1NtYXNoaW5nIE1hZ2F6aW5lJyxcbiAgICAgIGxpbms6ICdodHRwczovL3d3dy5zbWFzaGluZ21hZ2F6aW5lLmNvbS8nLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0Rlc2lnbiBDb2RlJyxcbiAgICAgIGxpbms6ICdodHRwczovL2Rlc2lnbmNvZGUuaW8vJyxcbiAgICB9LFxuICBdXG5cbiAgY29uc3QgbWFrZUxpc3QgPSAoeyBsaXN0LCB0aXRsZSB9KSA9PiAoXG4gICAgPD5cbiAgICAgIDxtb3Rpb24uaDNcbiAgICAgICAgaW5pdGlhbD17eyB5OiA1MCwgb3BhY2l0eTogMCB9fVxuICAgICAgICBhbmltYXRlPXt7IHk6IDAsIG9wYWNpdHk6IDEsIHRyYW5zaXRpb246IHsgZGVsYXk6IDEgfSB9fVxuICAgICAgPlxuICAgICAgICB7dGl0bGV9XG4gICAgICA8L21vdGlvbi5oMz5cbiAgICAgIDxtb3Rpb24udWxcbiAgICAgICAgaW5pdGlhbD17eyB5OiA1MCwgb3BhY2l0eTogMCB9fVxuICAgICAgICBhbmltYXRlPXt7IHk6IDAsIG9wYWNpdHk6IDEsIHRyYW5zaXRpb246IHsgZGVsYXk6IDEuMiB9IH19XG4gICAgICA+XG4gICAgICAgIHtsaXN0Lm1hcCgocCwga2V5KSA9PiAoXG4gICAgICAgICAgPGxpIGtleT17YCR7cC5uYW1lfS0ke2tleX1gfT5cbiAgICAgICAgICAgIDxhIGhyZWY9e3AubGlua30gcmVsPVwibm9vcGVuZXJcIj5cbiAgICAgICAgICAgICAge3AubmFtZX1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvbW90aW9uLnVsPlxuICAgIDwvPlxuICApXG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPE5hdiBhY3RpdmU9XCJhYm91dFwiIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFib3V0fT5cbiAgICAgICAgPG1vdGlvbi5oMVxuICAgICAgICAgIGluaXRpYWw9e3sgeTogNTAsIG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICBhbmltYXRlPXt7IHk6IDAsIG9wYWNpdHk6IDEgfX1cbiAgICAgICAgPlxuICAgICAgICAgIEhlbGxvIFRoZXJlIVxuICAgICAgICA8L21vdGlvbi5oMT5cbiAgICAgICAgPG1vdGlvbi5wXG4gICAgICAgICAgaW5pdGlhbD17eyB5OiA1MCwgb3BhY2l0eTogMCB9fVxuICAgICAgICAgIGFuaW1hdGU9e3sgeTogMCwgb3BhY2l0eTogMSwgdHJhbnNpdGlvbjogeyBkZWxheTogMC4yIH0gfX1cbiAgICAgICAgPlxuICAgICAgICAgIEknbSBNYXJrIGEuay5hLiBcIk1hY1wiLCBodXNiYW5kIHRvIEJldiwgc29uIG9mIFRvbnkgYW5kIExlcm1hIGFuZCB0aGVcbiAgICAgICAgICB5b3VuZ2VzdCBvZiB0aGVpciBjaGlsZHJlbi4gTWUgYW5kIG15IHdpZmUgbG92ZXMgdG8gdHJhdmVsLCBXZSd2ZSBzZWVuXG4gICAgICAgICAgdGhlIGJlc3Qgd2hpdGUgc2FuZCBiZWFjaGVzIG9mIHRoZSBQaGlsaXBwaW5lcyB0byB0aGUgYmVhdXRpZnVsXG4gICAgICAgICAgSXNsYW5kcyBvZiBNYWxkaXZlcyA8cz50byB0aGUgdG93ZXJpbmcgU2t5c2NyYXBwZXJzIG9mIE5ldyBZb3JrPC9zPnsnICd9XG4gICAgICAgICAgKHRyaXAgY2FuY2VsZWQgZHVlIHRvIENPVklELTE5KS4gV2UgbG92ZSB0byBleHBsb3JlLCBmZWVsIG5hdHVyZSxcbiAgICAgICAgICBtYXJ2ZWwgYXQgY2l0eSBhcmNoaXRlY3R1cmVzLCBsZWFybiBvdGhlciBjdWx0dXJlcyBhbmQgdGFzdGUgdGhlXG4gICAgICAgICAgZXhvdGljIGZsYXZvciBvZiB0aGVpciBjdWlzaW5lcywgbWVldCBkaWZmZXJlbnQga2luZHMgb2YgcGVvcGxlIGFuZFxuICAgICAgICAgIG1ha2UgbmV3IGZyaWVuZHMuXG4gICAgICAgIDwvbW90aW9uLnA+XG5cbiAgICAgICAgPG1vdGlvbi5ibG9ja3F1b3RlXG4gICAgICAgICAgaW5pdGlhbD17eyB5OiA1MCwgb3BhY2l0eTogMCB9fVxuICAgICAgICAgIGFuaW1hdGU9e3sgeTogMCwgb3BhY2l0eTogMSwgdHJhbnNpdGlvbjogeyBkZWxheTogMC4yIH0gfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxwPlwiTmV2ZXIgZ28gb24gdHJpcHMgd2l0aCBhbnlvbmUgeW91IGRvIG5vdCBsb3ZlLuKAnSAtIEhlbW1pbmd3YXk8L3A+XG4gICAgICAgIDwvbW90aW9uLmJsb2NrcXVvdGU+XG5cbiAgICAgICAgPG1vdGlvbi5wXG4gICAgICAgICAgaW5pdGlhbD17eyB5OiA1MCwgb3BhY2l0eTogMCB9fVxuICAgICAgICAgIGFuaW1hdGU9e3sgeTogMCwgb3BhY2l0eTogMSwgdHJhbnNpdGlvbjogeyBkZWxheTogMC4yIH0gfX1cbiAgICAgICAgPlxuICAgICAgICAgIEkgbG92ZSBwbGF5aW5nIGJhc2tldGJhbGwgKEknbSBhIGh1Z2UgTkJBIGZhbiksIHJlYWRpbmcgbWFuZ2EsXG4gICAgICAgICAgd2F0Y2hpbmcgYW5pbWUsIEZyaWVuZHMsIFRoZSBCaWcgQmFuZyBUaGVvcnkgYW5kIERvdGEyIHRvdXJuYW1lbnQuXG4gICAgICAgIDwvbW90aW9uLnA+XG4gICAgICAgIDxtb3Rpb24ucFxuICAgICAgICAgIGluaXRpYWw9e3sgeTogNTAsIG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICBhbmltYXRlPXt7IHk6IDAsIG9wYWNpdHk6IDEsIHRyYW5zaXRpb246IHsgZGVsYXk6IDAuMiB9IH19XG4gICAgICAgID5cbiAgICAgICAgICBJIGFsc28gbGlrZSBBbmNpZW50IEhpc3RvcnksIEFzdHJvbm9teSBhbmQgUGh5c2ljcyBmcm9tIHRoZSBteXN0ZXJ5IG9mXG4gICAgICAgICAgYnVpbGRpbmcgdGhlIEdyZWF0IFB5cmFtaWQgR2l6YSB0byB0aGUgYnJpZ2h0ZXN0IHN0YXIgaW4gdGhlIE1pbGt5XG4gICAgICAgICAgV2F5LiBJcyB0aGVyZSByZWFsbHkgYSBwYXJhbGxlbCBVbml2ZXJzZT8gSSBqdXN0IGhvcGUgSSdtIHRhbGwsIHJpY2hcbiAgICAgICAgICBhbmQgZ29vZCBsb29raW5nIG1hbiBzb21ld2hlcmUgdGhlcmUuIPCfmIIgVGhvc2UgYXJlIHRoZSB0aGluZ3MgdGhhdFxuICAgICAgICAgIGtlZXBzIG1lIHVwIGF0IG5pZ2h0IGFuZCB3b25kZXIuXG4gICAgICAgIDwvbW90aW9uLnA+XG5cbiAgICAgICAgPG1vdGlvbi5ibG9ja3F1b3RlXG4gICAgICAgICAgaW5pdGlhbD17eyB5OiA1MCwgb3BhY2l0eTogMCB9fVxuICAgICAgICAgIGFuaW1hdGU9e3sgeTogMCwgb3BhY2l0eTogMSwgdHJhbnNpdGlvbjogeyBkZWxheTogMC4yIH0gfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgXCJJbiB0aGlzIGJyaWdodCBmdXR1cmUgeW91IGNhbid0IGZvcmdldCB5b3VyIHBhc3Qu4oCdIC0gQm9iIE1hcmxleVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9tb3Rpb24uYmxvY2txdW90ZT5cblxuICAgICAgICA8bW90aW9uLmgyXG4gICAgICAgICAgaW5pdGlhbD17eyB5OiA1MCwgb3BhY2l0eTogMCB9fVxuICAgICAgICAgIGFuaW1hdGU9e3sgeTogMCwgb3BhY2l0eTogMSwgdHJhbnNpdGlvbjogeyBkZWxheTogMC4zIH0gfX1cbiAgICAgICAgPlxuICAgICAgICAgIENhcmVlclxuICAgICAgICA8L21vdGlvbi5oMj5cbiAgICAgICAgPG1vdGlvbi5wXG4gICAgICAgICAgaW5pdGlhbD17eyB5OiA1MCwgb3BhY2l0eTogMCB9fVxuICAgICAgICAgIGFuaW1hdGU9e3sgeTogMCwgb3BhY2l0eTogMSwgdHJhbnNpdGlvbjogeyBkZWxheTogMC40IH0gfX1cbiAgICAgICAgPlxuICAgICAgICAgIEkndmUgYmVlbiB3ZWIgZGV2ZWxvcGluZyBmb3IgOCsgeWVhcnMgbm93LiBUaW1lIGRvZXMgaW5kZWVkIGZseSB3aGVuXG4gICAgICAgICAgeW91ciBoYXZpbmcgZnVuLiBJdCBzZWVtcyBvbmx5IHllc3RlcmRheSB3aGVuIEkgc3RhcnRlZCBjb252ZXJ0aW5nXG4gICAgICAgICAgUFNEJ3MgdG8gSFRNTCBhcyBteSBmaXJzdCB3ZWIgZGV2ZWxvcGVyIGpvYi4gVGhlbiBJIGJlY2FtZSBhIFNvZnR3YXJlXG4gICAgICAgICAgRW5naW5lZXIgaW4gYSBCUE8gaW5kdXN0cnkuIEkgZ290IHRvIHdvcmsgd2l0aCB2YXJpb3VzIGNvbXBhbmllc1xuICAgICAgICAgIHRoZXJlLiBJIHdvcmsgbW9zdGx5IG9uIGZyb250ZW5kIGRldmVsb3BtZW50IGJlY2F1c2UgdGhhdCdzIHdoZXJlIElcbiAgICAgICAgICBmb3VuZCBteSBwYXNzaW9uLiBJIGxvdmUgc2VlaW5nIGZhc3QsIGNyZWF0aXZlIGFuZCBpbnR1aXRpdmUgd2Vic2l0ZXMuXG4gICAgICAgICAgTGlnaHRob3VzZSBpcyBteSBmcmllbmQuXG4gICAgICAgIDwvbW90aW9uLnA+XG5cbiAgICAgICAgPG1vdGlvbi5ibG9ja3F1b3RlXG4gICAgICAgICAgaW5pdGlhbD17eyB5OiA1MCwgb3BhY2l0eTogMCB9fVxuICAgICAgICAgIGFuaW1hdGU9e3sgeTogMCwgb3BhY2l0eTogMSwgdHJhbnNpdGlvbjogeyBkZWxheTogMC40IH0gfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgXCJDcmVhdGluZyBhIHdlYnNpdGUgaXMgYSBwcm9jZXNzIG9mIHNldHRpbmcgdGhlIHJpZ2h0IGNvbG9ycyB0b1xuICAgICAgICAgICAgZGVmaW5lIG1vb2QgYW5kIGFwcGx5IHRoZSByaWdodCBjb250cmFzdCB0byBnaXZlIGVtcGhhc2l6ZSB0byBhblxuICAgICAgICAgICAgZWxlbWVudCwgaW1wbGVtZW50aW5nIHRoZSByaWdodCBmb250IHNpemVzIHRvIGRlZmluZSBoaWVyYXJjaHksXG4gICAgICAgICAgICBhZGRpbmcgYW5pbWF0aW9ucyB0byBzeW1ib2xpemUgaW50ZXJhY3Rpb24gYW5kIGFjdGl2aXR5LCBpbnR1aXRpdmVcbiAgICAgICAgICAgIGVub3VnaCBzbyB0aGF0IHZpc2l0b3JzIHVuZGVyc3RhbmRzIHRoZSBmbG93IG9mIHRoZSB3ZWJzaXRlIGFuZFxuICAgICAgICAgICAgZmFzdGVyIHRoYW4gdGhlIHNwZWVkIG9mIGxpZ2h0LlwiIC0gTWFyayBBbnRob255IFV5XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L21vdGlvbi5ibG9ja3F1b3RlPlxuXG4gICAgICAgIDxtb3Rpb24ucFxuICAgICAgICAgIGluaXRpYWw9e3sgeTogNTAsIG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICBhbmltYXRlPXt7IHk6IDAsIG9wYWNpdHk6IDEsIHRyYW5zaXRpb246IHsgZGVsYXk6IDAuNCB9IH19XG4gICAgICAgID5cbiAgICAgICAgICBJJ20gdmVyeSBwYXNzaW9uYXRlIGF0IHdoYXQgSSBkbyBldmVuIHRob3VnaCBpdCdzIG5vdCBlYXN5IGtlZXBpbmcgdXBcbiAgICAgICAgICB3aXRoIHRoZSB0ZWNobm9sb2dpZXMuIEl0IGZlZWxzIGltcG9zc2libGUgdG8gbGVhcm4gZXZlcnl0aGluZyBidXQgaWZcbiAgICAgICAgICB0aGVyZSdzIG9uZSB0aGluZyBJIGxlYXJuIGZyb20gdXNpbmcgTGludXgsIGl0J3N7JyAnfVxuICAgICAgICAgIDxiPkRvIG9uZSB0aGluZyBhbmQgZG8gaXQgcmVhbGx5IGdvb2Q8L2I+LiBUaGF0J3Mgd2h5IEknbSBmb2N1c2luZyBvblxuICAgICAgICAgIHRoZSBmcm9udGVuZCBzaWRlLlxuICAgICAgICA8L21vdGlvbi5wPlxuXG4gICAgICAgIDxtb3Rpb24ucFxuICAgICAgICAgIGluaXRpYWw9e3sgeTogNTAsIG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICBhbmltYXRlPXt7IHk6IDAsIG9wYWNpdHk6IDEsIHRyYW5zaXRpb246IHsgZGVsYXk6IDAuNCB9IH19XG4gICAgICAgID5cbiAgICAgICAgICBJbiB0aGUgbmVhciBmdXR1cmUsIEkgcGxhbiB0byBsZWFybiBHYXRzYnksIEdyYXBoUUwsIFR5cHNjcmlwdCxcbiAgICAgICAgICBTdHJhcGlqcywgUmVkd29vZGpzLCBTdmVsdGVqcyBhbmQgRmlnbWEuIFRoaXMgZ29lcyB3aXRoIHRoZSBxdW90ZSB0aGF0XG4gICAgICAgICAgSSByZWFsbHkgbG92ZS5cbiAgICAgICAgPC9tb3Rpb24ucD5cblxuICAgICAgICA8bW90aW9uLmJsb2NrcXVvdGVcbiAgICAgICAgICBpbml0aWFsPXt7IHk6IDUwLCBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgYW5pbWF0ZT17eyB5OiAwLCBvcGFjaXR5OiAxLCB0cmFuc2l0aW9uOiB7IGRlbGF5OiAwLjQgfSB9fVxuICAgICAgICA+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBcIklmIHlvdSBmYWlsIHRvIHBsYW4sIHlvdSBhcmUgcGxhbm5pbmcgdG8gZmFpbC5cIiAtIEJlbmphbWluIEZyYW5rbGluXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L21vdGlvbi5ibG9ja3F1b3RlPlxuXG4gICAgICAgIDxtb3Rpb24ucFxuICAgICAgICAgIGluaXRpYWw9e3sgeTogNTAsIG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICBhbmltYXRlPXt7IHk6IDAsIG9wYWNpdHk6IDEsIHRyYW5zaXRpb246IHsgZGVsYXk6IDAuNCB9IH19XG4gICAgICAgID5cbiAgICAgICAgICBXaXNoIG1lIGx1Y2suXG4gICAgICAgIDwvbW90aW9uLnA+XG5cbiAgICAgICAgPG1vdGlvbi5oMlxuICAgICAgICAgIGluaXRpYWw9e3sgeTogNTAsIG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICBhbmltYXRlPXt7IHk6IDAsIG9wYWNpdHk6IDEsIHRyYW5zaXRpb246IHsgZGVsYXk6IDAuNSB9IH19XG4gICAgICAgID5cbiAgICAgICAgICBVc2VzXG4gICAgICAgIDwvbW90aW9uLmgyPlxuXG4gICAgICAgIDxtb3Rpb24ucFxuICAgICAgICAgIGluaXRpYWw9e3sgeTogNTAsIG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICBhbmltYXRlPXt7IHk6IDAsIG9wYWNpdHk6IDEsIHRyYW5zaXRpb246IHsgZGVsYXk6IDAuNiB9IH19XG4gICAgICAgID5cbiAgICAgICAgICBJJ20gYSBiaWcgZmFuIG9mIG9wZW4gc291cmNlIEkgdXNlIHRoZSBmb2xsb3dpbmcgbGFuZ3VhZ2VzLCBsaWJyYXJpZXMsXG4gICAgICAgICAgZnJhbWV3b3JrcyBhbmQgdG9vbHMgd2hlbiBjcmVhdGluZyBhIHdlYnNpdGUuXG4gICAgICAgIDwvbW90aW9uLnA+XG5cbiAgICAgICAgPFRvb2xJY29ucyBkZWxheT17MC43fSAvPlxuXG4gICAgICAgIDxtb3Rpb24uaDJcbiAgICAgICAgICBpbml0aWFsPXt7IHk6IDUwLCBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgYW5pbWF0ZT17eyB5OiAwLCBvcGFjaXR5OiAxLCB0cmFuc2l0aW9uOiB7IGRlbGF5OiAwLjggfSB9fVxuICAgICAgICA+XG4gICAgICAgICAgTXkgV2Vic2l0ZVxuICAgICAgICA8L21vdGlvbi5oMj5cbiAgICAgICAgPG1vdGlvbi5wXG4gICAgICAgICAgaW5pdGlhbD17eyB5OiA1MCwgb3BhY2l0eTogMCB9fVxuICAgICAgICAgIGFuaW1hdGU9e3sgeTogMCwgb3BhY2l0eTogMSwgdHJhbnNpdGlvbjogeyBkZWxheTogMC45IH0gfX1cbiAgICAgICAgPlxuICAgICAgICAgIFRoaXMgcmVkZXNpZ24gb2YgbXkgd2Vic2l0ZSBpcyBpbnNwaXJlZCBieSBtYW55IHdlYnNpdGUuIEkgb2Z0ZW4gZ290XG4gICAgICAgICAgbXkgaWRlYSBmcm9tIGxvb2tpbmcgYXQgb3RoZXIgcGVvcGxlIHdvcmsgYW5kIGFkZCBteSBvd24gZmxhdm9yLiBJXG4gICAgICAgICAgZm9sbG93IGEgbG90IG9mIHJlYWxseSBjb29sIHBlb3BsZSBpbiB0aGUgaW5kdXN0cnksIGxpc3RlbiB0byB3ZWJcbiAgICAgICAgICBkZXZlbG9wbWVudCBwb2RjYXN0cyBhbmQgcmVhZCBibG9ncy4gSWYgeW91IHdhbnQgdG8gY2hlY2sgdGhlbSBvdXRcbiAgICAgICAgICBoZXJlIGFyZSBzb21lLlxuICAgICAgICA8L21vdGlvbi5wPlxuXG4gICAgICAgIHttYWtlTGlzdCh7IGxpc3Q6IFBFT1BMRSwgdGl0bGU6ICdQZW9wbGUnIH0pfVxuICAgICAgICB7bWFrZUxpc3QoeyBsaXN0OiBQT0RDQVNULCB0aXRsZTogJ1BvZGNhc3QnIH0pfVxuICAgICAgICB7bWFrZUxpc3QoeyBsaXN0OiBJTlNQSVJBVElPTlMsIHRpdGxlOiAnSW5zcGlyYXRpb25zJyB9KX1cbiAgICAgIDwvZGl2PlxuICAgIDwvQ29udGFpbmVyPlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/about.js\n");

/***/ })

})