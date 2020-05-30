webpackHotUpdate("static/development/pages/about.js",{

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return About; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _about_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.module.scss */ \"./pages/about.module.scss\");\n/* harmony import */ var _about_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_about_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Container */ \"./components/Container.js\");\n/* harmony import */ var _components_ToolIcons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ToolIcons */ \"./components/ToolIcons.js\");\n/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Nav */ \"./components/Nav.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\nvar _jsxFileName = \"/home/macmac/Projects/markanthonyuy.github.io/pages/about.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nfunction About() {\n  var _this = this;\n\n  var PEOPLE = [{\n    name: 'Wes Bos',\n    link: 'https://wesbos.com/'\n  }, {\n    name: 'Chris Coyier',\n    link: 'https://css-tricks.com/'\n  }, {\n    name: 'Brad Traversy',\n    link: 'https://traversymedia.com/'\n  }, {\n    name: 'Kent Dodds',\n    link: 'https://kentcdodds.com/'\n  }];\n  var PODCAST = [{\n    name: 'Syntax.fm',\n    link: 'https://syntax.fm/'\n  }, {\n    name: 'Shop Talk Show',\n    link: 'https://shoptalkshow.com/'\n  }, {\n    name: 'Front End Happy Hour',\n    link: 'https://frontendhappyhour.com/'\n  }];\n  var INSPIRATIONS = [{\n    name: 'Codepen',\n    link: 'https://codepen.io/'\n  }, {\n    name: 'Smashing Magazine',\n    link: 'https://www.smashingmagazine.com/'\n  }, {\n    name: 'Design Code',\n    link: 'https://designcode.io/'\n  }];\n\n  var makeList = function makeList(_ref) {\n    var list = _ref.list,\n        title = _ref.title;\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"motion\"].h3, {\n      initial: {\n        y: 50,\n        opacity: 0\n      },\n      animate: {\n        y: 0,\n        opacity: 1,\n        transition: {\n          delay: 1\n        }\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 7\n      }\n    }, title), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"motion\"].ul, {\n      initial: {\n        y: 50,\n        opacity: 0\n      },\n      animate: {\n        y: 0,\n        opacity: 1,\n        transition: {\n          delay: 1.2\n        }\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 7\n      }\n    }, list.map(function (p, key) {\n      return __jsx(\"li\", {\n        key: \"\".concat(p.name, \"-\").concat(key),\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 11\n        }\n      }, __jsx(\"a\", {\n        href: p.link,\n        rel: \"noopener\",\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 13\n        }\n      }, p.name));\n    })));\n  };\n\n  return __jsx(_components_Container__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 5\n    }\n  }, __jsx(_components_Nav__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    active: \"about\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: _about_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.about,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 7\n    }\n  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"motion\"].h1, {\n    initial: {\n      y: 50,\n      opacity: 0\n    },\n    animate: {\n      y: 0,\n      opacity: 1\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 9\n    }\n  }, \"Hello There!\"), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"motion\"].p, {\n    initial: {\n      y: 50,\n      opacity: 0\n    },\n    animate: {\n      y: 0,\n      opacity: 1,\n      transition: {\n        delay: 0.2\n      }\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 9\n    }\n  }, \"I'm Mark a.k.a. \\\"Mac\\\", husband to Bev, son of Tony and Lerma and the youngest of their children. Me and my wife loves to travel, We've seen the best white sand beaches of the Philippines to the beautiful Islands of Maldives \", __jsx(\"s\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 31\n    }\n  }, \"to the Skyscrappers of New York\"), \". We love to explore, feel nature, marvel at city architectures, learn other cultures and taste the exotic flavor of their cuisines, meet different kinds of people and make new friends.\"), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"motion\"].p, {\n    initial: {\n      y: 50,\n      opacity: 0\n    },\n    animate: {\n      y: 0,\n      opacity: 1,\n      transition: {\n        delay: 0.2\n      }\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 9\n    }\n  }, \"I love playing basketball (I'm a huge NBA fan), reading manga, watching anime, Friends, The Big Bang Theory and Dota2 tournament.\"), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"motion\"].p, {\n    initial: {\n      y: 50,\n      opacity: 0\n    },\n    animate: {\n      y: 0,\n      opacity: 1,\n      transition: {\n        delay: 0.2\n      }\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 9\n    }\n  }, \"I also like Ancient History and Astronomy from studying our history to finding out our future. Those are the things that keeps me up at night and wonder.\"), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"motion\"].h2, {\n    initial: {\n      y: 50,\n      opacity: 0\n    },\n    animate: {\n      y: 0,\n      opacity: 1,\n      transition: {\n        delay: 0.3\n      }\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 9\n    }\n  }, \"Career\"), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"motion\"].p, {\n    initial: {\n      y: 50,\n      opacity: 0\n    },\n    animate: {\n      y: 0,\n      opacity: 1,\n      transition: {\n        delay: 0.4\n      }\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 124,\n      columnNumber: 9\n    }\n  }, \"I've been web developing for 8+ years now. Time does indeed fly when your having fun. It seems only yesterday when I started converting PSD's to HTML as my first web developer job. I work mostly on frontend development because that's where I found my passion. I love seeing fast, creative and intuitive websites. Lighthouse is my friend.\"), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"motion\"].blockquote, {\n    initial: {\n      y: 50,\n      opacity: 0\n    },\n    animate: {\n      y: 0,\n      opacity: 1,\n      transition: {\n        delay: 0.4\n      }\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 135,\n      columnNumber: 9\n    }\n  }, __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 139,\n      columnNumber: 11\n    }\n  }, \"\\\"Creating a website is a process of setting the right colors to define mood and apply the right contrast to give emphasize to an element, implementing the right font sizes to define hierarchy, adding animations to symbolize interaction and activity, intuitive enough so that visitors understands the flow of the website and faster than the speed of light.\\\" - Mark Anthony Uy\")), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"motion\"].p, {\n    initial: {\n      y: 50,\n      opacity: 0\n    },\n    animate: {\n      y: 0,\n      opacity: 1,\n      transition: {\n        delay: 0.4\n      }\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 149,\n      columnNumber: 9\n    }\n  }, \"I'm very passionate at what I do even though it's not easy keeping up with the technologies. It feels impossible to learn everything but if there's one thing I learn from using Linux, it's do one thing and do it really good. That's why I'm focusing on the frontend side.\"), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"motion\"].p, {\n    initial: {\n      y: 50,\n      opacity: 0\n    },\n    animate: {\n      y: 0,\n      opacity: 1,\n      transition: {\n        delay: 0.4\n      }\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 159,\n      columnNumber: 9\n    }\n  }, \"In the near future, I plan to learn Gatsby, GraphQL, Typscript, Strapijs, Redwoodjs, Sveltejs and Figma. Wish me luck!\"), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"motion\"].p, {\n    initial: {\n      y: 50,\n      opacity: 0\n    },\n    animate: {\n      y: 0,\n      opacity: 1,\n      transition: {\n        delay: 0.4\n      }\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 167,\n      columnNumber: 9\n    }\n  }, \"Big fan of open source.\"), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"motion\"].h2, {\n    initial: {\n      y: 50,\n      opacity: 0\n    },\n    animate: {\n      y: 0,\n      opacity: 1,\n      transition: {\n        delay: 0.5\n      }\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 174,\n      columnNumber: 9\n    }\n  }, \"Uses\"), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"motion\"].p, {\n    initial: {\n      y: 50,\n      opacity: 0\n    },\n    animate: {\n      y: 0,\n      opacity: 1,\n      transition: {\n        delay: 0.6\n      }\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 181,\n      columnNumber: 9\n    }\n  }, \"I use the following languages, libraries, frameworks and tools when creating a website.\"), __jsx(_components_ToolIcons__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    delay: 0.7,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 189,\n      columnNumber: 9\n    }\n  }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"motion\"].h2, {\n    initial: {\n      y: 50,\n      opacity: 0\n    },\n    animate: {\n      y: 0,\n      opacity: 1,\n      transition: {\n        delay: 0.8\n      }\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 191,\n      columnNumber: 9\n    }\n  }, \"Website\"), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"motion\"].p, {\n    initial: {\n      y: 50,\n      opacity: 0\n    },\n    animate: {\n      y: 0,\n      opacity: 1,\n      transition: {\n        delay: 0.9\n      }\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 197,\n      columnNumber: 9\n    }\n  }, \"This redesign of my website is inspired by many website. I often got my idea from looking at other people work and add my own flavor. I follow a lot of really cool people in the industry, listen to web development podcasts and read blogs. If you want to check them out here are some.\"), makeList({\n    list: PEOPLE,\n    title: 'People'\n  }), makeList({\n    list: PODCAST,\n    title: 'Podcast'\n  }), makeList({\n    list: INSPIRATIONS,\n    title: 'Inspirations'\n  })));\n}\n_c = About;\n\nvar _c;\n\n$RefreshReg$(_c, \"About\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hYm91dC5qcz8yNmVjIl0sIm5hbWVzIjpbIkFib3V0IiwiUEVPUExFIiwibmFtZSIsImxpbmsiLCJQT0RDQVNUIiwiSU5TUElSQVRJT05TIiwibWFrZUxpc3QiLCJsaXN0IiwidGl0bGUiLCJ5Iiwib3BhY2l0eSIsInRyYW5zaXRpb24iLCJkZWxheSIsIm1hcCIsInAiLCJrZXkiLCJzdHlsZXMiLCJhYm91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxLQUFULEdBQWlCO0FBQUE7O0FBQzlCLE1BQU1DLE1BQU0sR0FBRyxDQUNiO0FBQ0VDLFFBQUksRUFBRSxTQURSO0FBRUVDLFFBQUksRUFBRTtBQUZSLEdBRGEsRUFLYjtBQUNFRCxRQUFJLEVBQUUsY0FEUjtBQUVFQyxRQUFJLEVBQUU7QUFGUixHQUxhLEVBU2I7QUFDRUQsUUFBSSxFQUFFLGVBRFI7QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0FUYSxFQWFiO0FBQ0VELFFBQUksRUFBRSxZQURSO0FBRUVDLFFBQUksRUFBRTtBQUZSLEdBYmEsQ0FBZjtBQW1CQSxNQUFNQyxPQUFPLEdBQUcsQ0FDZDtBQUNFRixRQUFJLEVBQUUsV0FEUjtBQUVFQyxRQUFJLEVBQUU7QUFGUixHQURjLEVBS2Q7QUFDRUQsUUFBSSxFQUFFLGdCQURSO0FBRUVDLFFBQUksRUFBRTtBQUZSLEdBTGMsRUFTZDtBQUNFRCxRQUFJLEVBQUUsc0JBRFI7QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0FUYyxDQUFoQjtBQWVBLE1BQU1FLFlBQVksR0FBRyxDQUNuQjtBQUNFSCxRQUFJLEVBQUUsU0FEUjtBQUVFQyxRQUFJLEVBQUU7QUFGUixHQURtQixFQUtuQjtBQUNFRCxRQUFJLEVBQUUsbUJBRFI7QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0FMbUIsRUFTbkI7QUFDRUQsUUFBSSxFQUFFLGFBRFI7QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0FU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LEVBQUU7QUFBRUMsYUFBSyxFQUFFO0FBQVQ7QUFBaEMsS0FGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1TQWxIRixFQTZIR04sUUFBUSxDQUFDO0FBQUVDLFFBQUksRUFBRU4sTUFBUjtBQUFnQk8sU0FBSyxFQUFFO0FBQXZCLEdBQUQsQ0E3SFgsRUE4SEdGLFFBQVEsQ0FBQztBQUFFQyxRQUFJLEVBQUVILE9BQVI7QUFBaUJJLFNBQUssRUFBRTtBQUF4QixHQUFELENBOUhYLEVBK0hHRixRQUFRLENBQUM7QUFBRUMsUUFBSSxFQUFFRixZQUFSO0FBQXNCRyxTQUFLLEVBQUU7QUFBN0IsR0FBRCxDQS9IWCxDQUZGLENBREY7QUFzSUQ7S0EvTXVCUixLIiwiZmlsZSI6Ii4vcGFnZXMvYWJvdXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vYWJvdXQubW9kdWxlLnNjc3MnXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4uL2NvbXBvbmVudHMvQ29udGFpbmVyJ1xuaW1wb3J0IFRvb2xJY29ucyBmcm9tICcuLi9jb21wb25lbnRzL1Rvb2xJY29ucydcbmltcG9ydCBOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9OYXYnXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBYm91dCgpIHtcbiAgY29uc3QgUEVPUExFID0gW1xuICAgIHtcbiAgICAgIG5hbWU6ICdXZXMgQm9zJyxcbiAgICAgIGxpbms6ICdodHRwczovL3dlc2Jvcy5jb20vJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdDaHJpcyBDb3lpZXInLFxuICAgICAgbGluazogJ2h0dHBzOi8vY3NzLXRyaWNrcy5jb20vJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdCcmFkIFRyYXZlcnN5JyxcbiAgICAgIGxpbms6ICdodHRwczovL3RyYXZlcnN5bWVkaWEuY29tLycsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnS2VudCBEb2RkcycsXG4gICAgICBsaW5rOiAnaHR0cHM6Ly9rZW50Y2RvZGRzLmNvbS8nLFxuICAgIH0sXG4gIF1cblxuICBjb25zdCBQT0RDQVNUID0gW1xuICAgIHtcbiAgICAgIG5hbWU6ICdTeW50YXguZm0nLFxuICAgICAgbGluazogJ2h0dHBzOi8vc3ludGF4LmZtLycsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnU2hvcCBUYWxrIFNob3cnLFxuICAgICAgbGluazogJ2h0dHBzOi8vc2hvcHRhbGtzaG93LmNvbS8nLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0Zyb250IEVuZCBIYXBweSBIb3VyJyxcbiAgICAgIGxpbms6ICdodHRwczovL2Zyb250ZW5kaGFwcHlob3VyLmNvbS8nLFxuICAgIH0sXG4gIF1cblxuICBjb25zdCBJTlNQSVJBVElPTlMgPSBbXG4gICAge1xuICAgICAgbmFtZTogJ0NvZGVwZW4nLFxuICAgICAgbGluazogJ2h0dHBzOi8vY29kZXBlbi5pby8nLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ1NtYXNoaW5nIE1hZ2F6aW5lJyxcbiAgICAgIGxpbms6ICdodHRwczovL3d3dy5zbWFzaGluZ21hZ2F6aW5lLmNvbS8nLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0Rlc2lnbiBDb2RlJyxcbiAgICAgIGxpbms6ICdodHRwczovL2Rlc2lnbmNvZGUuaW8vJyxcbiAgICB9LFxuICBdXG5cbiAgY29uc3QgbWFrZUxpc3QgPSAoeyBsaXN0LCB0aXRsZSB9KSA9PiAoXG4gICAgPD5cbiAgICAgIDxtb3Rpb24uaDNcbiAgICAgICAgaW5pdGlhbD17eyB5OiA1MCwgb3BhY2l0eTogMCB9fVxuICAgICAgICBhbmltYXRlPXt7IHk6IDAsIG9wYWNpdHk6IDEsIHRyYW5zaXRpb246IHsgZGVsYXk6IDEgfSB9fVxuICAgICAgPlxuICAgICAgICB7dGl0bGV9XG4gICAgICA8L21vdGlvbi5oMz5cbiAgICAgIDxtb3Rpb24udWxcbiAgICAgICAgaW5pdGlhbD17eyB5OiA1MCwgb3BhY2l0eTogMCB9fVxuICAgICAgICBhbmltYXRlPXt7IHk6IDAsIG9wYWNpdHk6IDEsIHRyYW5zaXRpb246IHsgZGVsYXk6IDEuMiB9IH19XG4gICAgICA+XG4gICAgICAgIHtsaXN0Lm1hcCgocCwga2V5KSA9PiAoXG4gICAgICAgICAgPGxpIGtleT17YCR7cC5uYW1lfS0ke2tleX1gfT5cbiAgICAgICAgICAgIDxhIGhyZWY9e3AubGlua30gcmVsPVwibm9vcGVuZXJcIj5cbiAgICAgICAgICAgICAge3AubmFtZX1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvbW90aW9uLnVsPlxuICAgIDwvPlxuICApXG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPE5hdiBhY3RpdmU9XCJhYm91dFwiIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFib3V0fT5cbiAgICAgICAgPG1vdGlvbi5oMVxuICAgICAgICAgIGluaXRpYWw9e3sgeTogNTAsIG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICBhbmltYXRlPXt7IHk6IDAsIG9wYWNpdHk6IDEgfX1cbiAgICAgICAgPlxuICAgICAgICAgIEhlbGxvIFRoZXJlIVxuICAgICAgICA8L21vdGlvbi5oMT5cbiAgICAgICAgPG1vdGlvbi5wXG4gICAgICAgICAgaW5pdGlhbD17eyB5OiA1MCwgb3BhY2l0eTogMCB9fVxuICAgICAgICAgIGFuaW1hdGU9e3sgeTogMCwgb3BhY2l0eTogMSwgdHJhbnNpdGlvbjogeyBkZWxheTogMC4yIH0gfX1cbiAgICAgICAgPlxuICAgICAgICAgIEknbSBNYXJrIGEuay5hLiBcIk1hY1wiLCBodXNiYW5kIHRvIEJldiwgc29uIG9mIFRvbnkgYW5kIExlcm1hIGFuZCB0aGVcbiAgICAgICAgICB5b3VuZ2VzdCBvZiB0aGVpciBjaGlsZHJlbi4gTWUgYW5kIG15IHdpZmUgbG92ZXMgdG8gdHJhdmVsLCBXZSd2ZSBzZWVuXG4gICAgICAgICAgdGhlIGJlc3Qgd2hpdGUgc2FuZCBiZWFjaGVzIG9mIHRoZSBQaGlsaXBwaW5lcyB0byB0aGUgYmVhdXRpZnVsXG4gICAgICAgICAgSXNsYW5kcyBvZiBNYWxkaXZlcyA8cz50byB0aGUgU2t5c2NyYXBwZXJzIG9mIE5ldyBZb3JrPC9zPi4gV2UgbG92ZSB0b1xuICAgICAgICAgIGV4cGxvcmUsIGZlZWwgbmF0dXJlLCBtYXJ2ZWwgYXQgY2l0eSBhcmNoaXRlY3R1cmVzLCBsZWFybiBvdGhlclxuICAgICAgICAgIGN1bHR1cmVzIGFuZCB0YXN0ZSB0aGUgZXhvdGljIGZsYXZvciBvZiB0aGVpciBjdWlzaW5lcywgbWVldCBkaWZmZXJlbnRcbiAgICAgICAgICBraW5kcyBvZiBwZW9wbGUgYW5kIG1ha2UgbmV3IGZyaWVuZHMuXG4gICAgICAgIDwvbW90aW9uLnA+XG4gICAgICAgIDxtb3Rpb24ucFxuICAgICAgICAgIGluaXRpYWw9e3sgeTogNTAsIG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICBhbmltYXRlPXt7IHk6IDAsIG9wYWNpdHk6IDEsIHRyYW5zaXRpb246IHsgZGVsYXk6IDAuMiB9IH19XG4gICAgICAgID5cbiAgICAgICAgICBJIGxvdmUgcGxheWluZyBiYXNrZXRiYWxsIChJJ20gYSBodWdlIE5CQSBmYW4pLCByZWFkaW5nIG1hbmdhLFxuICAgICAgICAgIHdhdGNoaW5nIGFuaW1lLCBGcmllbmRzLCBUaGUgQmlnIEJhbmcgVGhlb3J5IGFuZCBEb3RhMiB0b3VybmFtZW50LlxuICAgICAgICA8L21vdGlvbi5wPlxuICAgICAgICA8bW90aW9uLnBcbiAgICAgICAgICBpbml0aWFsPXt7IHk6IDUwLCBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgYW5pbWF0ZT17eyB5OiAwLCBvcGFjaXR5OiAxLCB0cmFuc2l0aW9uOiB7IGRlbGF5OiAwLjIgfSB9fVxuICAgICAgICA+XG4gICAgICAgICAgSSBhbHNvIGxpa2UgQW5jaWVudCBIaXN0b3J5IGFuZCBBc3Ryb25vbXkgZnJvbSBzdHVkeWluZyBvdXIgaGlzdG9yeSB0b1xuICAgICAgICAgIGZpbmRpbmcgb3V0IG91ciBmdXR1cmUuIFRob3NlIGFyZSB0aGUgdGhpbmdzIHRoYXQga2VlcHMgbWUgdXAgYXQgbmlnaHRcbiAgICAgICAgICBhbmQgd29uZGVyLlxuICAgICAgICA8L21vdGlvbi5wPlxuXG4gICAgICAgIDxtb3Rpb24uaDJcbiAgICAgICAgICBpbml0aWFsPXt7IHk6IDUwLCBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgYW5pbWF0ZT17eyB5OiAwLCBvcGFjaXR5OiAxLCB0cmFuc2l0aW9uOiB7IGRlbGF5OiAwLjMgfSB9fVxuICAgICAgICA+XG4gICAgICAgICAgQ2FyZWVyXG4gICAgICAgIDwvbW90aW9uLmgyPlxuICAgICAgICA8bW90aW9uLnBcbiAgICAgICAgICBpbml0aWFsPXt7IHk6IDUwLCBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgYW5pbWF0ZT17eyB5OiAwLCBvcGFjaXR5OiAxLCB0cmFuc2l0aW9uOiB7IGRlbGF5OiAwLjQgfSB9fVxuICAgICAgICA+XG4gICAgICAgICAgSSd2ZSBiZWVuIHdlYiBkZXZlbG9waW5nIGZvciA4KyB5ZWFycyBub3cuIFRpbWUgZG9lcyBpbmRlZWQgZmx5IHdoZW5cbiAgICAgICAgICB5b3VyIGhhdmluZyBmdW4uIEl0IHNlZW1zIG9ubHkgeWVzdGVyZGF5IHdoZW4gSSBzdGFydGVkIGNvbnZlcnRpbmdcbiAgICAgICAgICBQU0QncyB0byBIVE1MIGFzIG15IGZpcnN0IHdlYiBkZXZlbG9wZXIgam9iLiBJIHdvcmsgbW9zdGx5IG9uIGZyb250ZW5kXG4gICAgICAgICAgZGV2ZWxvcG1lbnQgYmVjYXVzZSB0aGF0J3Mgd2hlcmUgSSBmb3VuZCBteSBwYXNzaW9uLiBJIGxvdmUgc2VlaW5nXG4gICAgICAgICAgZmFzdCwgY3JlYXRpdmUgYW5kIGludHVpdGl2ZSB3ZWJzaXRlcy4gTGlnaHRob3VzZSBpcyBteSBmcmllbmQuXG4gICAgICAgIDwvbW90aW9uLnA+XG5cbiAgICAgICAgPG1vdGlvbi5ibG9ja3F1b3RlXG4gICAgICAgICAgaW5pdGlhbD17eyB5OiA1MCwgb3BhY2l0eTogMCB9fVxuICAgICAgICAgIGFuaW1hdGU9e3sgeTogMCwgb3BhY2l0eTogMSwgdHJhbnNpdGlvbjogeyBkZWxheTogMC40IH0gfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgXCJDcmVhdGluZyBhIHdlYnNpdGUgaXMgYSBwcm9jZXNzIG9mIHNldHRpbmcgdGhlIHJpZ2h0IGNvbG9ycyB0b1xuICAgICAgICAgICAgZGVmaW5lIG1vb2QgYW5kIGFwcGx5IHRoZSByaWdodCBjb250cmFzdCB0byBnaXZlIGVtcGhhc2l6ZSB0byBhblxuICAgICAgICAgICAgZWxlbWVudCwgaW1wbGVtZW50aW5nIHRoZSByaWdodCBmb250IHNpemVzIHRvIGRlZmluZSBoaWVyYXJjaHksXG4gICAgICAgICAgICBhZGRpbmcgYW5pbWF0aW9ucyB0byBzeW1ib2xpemUgaW50ZXJhY3Rpb24gYW5kIGFjdGl2aXR5LCBpbnR1aXRpdmVcbiAgICAgICAgICAgIGVub3VnaCBzbyB0aGF0IHZpc2l0b3JzIHVuZGVyc3RhbmRzIHRoZSBmbG93IG9mIHRoZSB3ZWJzaXRlIGFuZFxuICAgICAgICAgICAgZmFzdGVyIHRoYW4gdGhlIHNwZWVkIG9mIGxpZ2h0LlwiIC0gTWFyayBBbnRob255IFV5XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L21vdGlvbi5ibG9ja3F1b3RlPlxuXG4gICAgICAgIDxtb3Rpb24ucFxuICAgICAgICAgIGluaXRpYWw9e3sgeTogNTAsIG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICBhbmltYXRlPXt7IHk6IDAsIG9wYWNpdHk6IDEsIHRyYW5zaXRpb246IHsgZGVsYXk6IDAuNCB9IH19XG4gICAgICAgID5cbiAgICAgICAgICBJJ20gdmVyeSBwYXNzaW9uYXRlIGF0IHdoYXQgSSBkbyBldmVuIHRob3VnaCBpdCdzIG5vdCBlYXN5IGtlZXBpbmcgdXBcbiAgICAgICAgICB3aXRoIHRoZSB0ZWNobm9sb2dpZXMuIEl0IGZlZWxzIGltcG9zc2libGUgdG8gbGVhcm4gZXZlcnl0aGluZyBidXQgaWZcbiAgICAgICAgICB0aGVyZSdzIG9uZSB0aGluZyBJIGxlYXJuIGZyb20gdXNpbmcgTGludXgsIGl0J3MgZG8gb25lIHRoaW5nIGFuZCBkb1xuICAgICAgICAgIGl0IHJlYWxseSBnb29kLiBUaGF0J3Mgd2h5IEknbSBmb2N1c2luZyBvbiB0aGUgZnJvbnRlbmQgc2lkZS5cbiAgICAgICAgPC9tb3Rpb24ucD5cblxuICAgICAgICA8bW90aW9uLnBcbiAgICAgICAgICBpbml0aWFsPXt7IHk6IDUwLCBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgYW5pbWF0ZT17eyB5OiAwLCBvcGFjaXR5OiAxLCB0cmFuc2l0aW9uOiB7IGRlbGF5OiAwLjQgfSB9fVxuICAgICAgICA+XG4gICAgICAgICAgSW4gdGhlIG5lYXIgZnV0dXJlLCBJIHBsYW4gdG8gbGVhcm4gR2F0c2J5LCBHcmFwaFFMLCBUeXBzY3JpcHQsXG4gICAgICAgICAgU3RyYXBpanMsIFJlZHdvb2RqcywgU3ZlbHRlanMgYW5kIEZpZ21hLiBXaXNoIG1lIGx1Y2shXG4gICAgICAgIDwvbW90aW9uLnA+XG5cbiAgICAgICAgPG1vdGlvbi5wXG4gICAgICAgICAgaW5pdGlhbD17eyB5OiA1MCwgb3BhY2l0eTogMCB9fVxuICAgICAgICAgIGFuaW1hdGU9e3sgeTogMCwgb3BhY2l0eTogMSwgdHJhbnNpdGlvbjogeyBkZWxheTogMC40IH0gfX1cbiAgICAgICAgPlxuICAgICAgICAgIEJpZyBmYW4gb2Ygb3BlbiBzb3VyY2UuXG4gICAgICAgIDwvbW90aW9uLnA+XG5cbiAgICAgICAgPG1vdGlvbi5oMlxuICAgICAgICAgIGluaXRpYWw9e3sgeTogNTAsIG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICBhbmltYXRlPXt7IHk6IDAsIG9wYWNpdHk6IDEsIHRyYW5zaXRpb246IHsgZGVsYXk6IDAuNSB9IH19XG4gICAgICAgID5cbiAgICAgICAgICBVc2VzXG4gICAgICAgIDwvbW90aW9uLmgyPlxuXG4gICAgICAgIDxtb3Rpb24ucFxuICAgICAgICAgIGluaXRpYWw9e3sgeTogNTAsIG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICBhbmltYXRlPXt7IHk6IDAsIG9wYWNpdHk6IDEsIHRyYW5zaXRpb246IHsgZGVsYXk6IDAuNiB9IH19XG4gICAgICAgID5cbiAgICAgICAgICBJIHVzZSB0aGUgZm9sbG93aW5nIGxhbmd1YWdlcywgbGlicmFyaWVzLCBmcmFtZXdvcmtzIGFuZCB0b29scyB3aGVuXG4gICAgICAgICAgY3JlYXRpbmcgYSB3ZWJzaXRlLlxuICAgICAgICA8L21vdGlvbi5wPlxuXG4gICAgICAgIDxUb29sSWNvbnMgZGVsYXk9ezAuN30gLz5cblxuICAgICAgICA8bW90aW9uLmgyXG4gICAgICAgICAgaW5pdGlhbD17eyB5OiA1MCwgb3BhY2l0eTogMCB9fVxuICAgICAgICAgIGFuaW1hdGU9e3sgeTogMCwgb3BhY2l0eTogMSwgdHJhbnNpdGlvbjogeyBkZWxheTogMC44IH0gfX1cbiAgICAgICAgPlxuICAgICAgICAgIFdlYnNpdGVcbiAgICAgICAgPC9tb3Rpb24uaDI+XG4gICAgICAgIDxtb3Rpb24ucFxuICAgICAgICAgIGluaXRpYWw9e3sgeTogNTAsIG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICBhbmltYXRlPXt7IHk6IDAsIG9wYWNpdHk6IDEsIHRyYW5zaXRpb246IHsgZGVsYXk6IDAuOSB9IH19XG4gICAgICAgID5cbiAgICAgICAgICBUaGlzIHJlZGVzaWduIG9mIG15IHdlYnNpdGUgaXMgaW5zcGlyZWQgYnkgbWFueSB3ZWJzaXRlLiBJIG9mdGVuIGdvdFxuICAgICAgICAgIG15IGlkZWEgZnJvbSBsb29raW5nIGF0IG90aGVyIHBlb3BsZSB3b3JrIGFuZCBhZGQgbXkgb3duIGZsYXZvci4gSVxuICAgICAgICAgIGZvbGxvdyBhIGxvdCBvZiByZWFsbHkgY29vbCBwZW9wbGUgaW4gdGhlIGluZHVzdHJ5LCBsaXN0ZW4gdG8gd2ViXG4gICAgICAgICAgZGV2ZWxvcG1lbnQgcG9kY2FzdHMgYW5kIHJlYWQgYmxvZ3MuIElmIHlvdSB3YW50IHRvIGNoZWNrIHRoZW0gb3V0XG4gICAgICAgICAgaGVyZSBhcmUgc29tZS5cbiAgICAgICAgPC9tb3Rpb24ucD5cblxuICAgICAgICB7bWFrZUxpc3QoeyBsaXN0OiBQRU9QTEUsIHRpdGxlOiAnUGVvcGxlJyB9KX1cbiAgICAgICAge21ha2VMaXN0KHsgbGlzdDogUE9EQ0FTVCwgdGl0bGU6ICdQb2RjYXN0JyB9KX1cbiAgICAgICAge21ha2VMaXN0KHsgbGlzdDogSU5TUElSQVRJT05TLCB0aXRsZTogJ0luc3BpcmF0aW9ucycgfSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/about.js\n");

/***/ })

})