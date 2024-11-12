"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/properties/[id]",{

/***/ "./src/pages/properties/[id].js":
/*!**************************************!*\
  !*** ./src/pages/properties/[id].js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PropertyInfo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_propertiesData_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../public/propertiesData.json */ \"./public/propertiesData.json\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/**\r\n * Property Information Page\r\n *\r\n * Property information component for all properties\r\n *\r\n * FILE NAME:   {id}.tsx\r\n * Location:    /src/pages/properties\r\n * Created:     12/11/2024\r\n * Author:      Michael Reed 20056066@tafe.wa.edu.au\r\n *\r\n */ \nvar _s = $RefreshSig$();\n\n\n\n\nconsole.log(\"Properties:\", _public_propertiesData_json__WEBPACK_IMPORTED_MODULE_2__);\nfunction PropertyInfo() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var id = router.query.id;\n    console.log(\"ID:\", id);\n    // Find the property by id\n    var property = _public_propertiesData_json__WEBPACK_IMPORTED_MODULE_2__.find(function(prop) {\n        return prop.id === id;\n    });\n    if (!property) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\xcal1\\\\source\\\\repos\\\\one-ring-rentals\\\\src\\\\pages\\\\properties\\\\[id].js\",\n            lineNumber: 27,\n            columnNumber: 16\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"columns pt-6 pb-6 flex-col\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"column is-full is-centered\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"title is-2\",\n                    children: property.title\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\xcal1\\\\source\\\\repos\\\\one-ring-rentals\\\\src\\\\pages\\\\properties\\\\[id].js\",\n                    lineNumber: 33,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: property.image,\n                    alt: property.title,\n                    className: \"w-full image-large object-cover pt-4 mt-4 mb-4 pb-4\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\xcal1\\\\source\\\\repos\\\\one-ring-rentals\\\\src\\\\pages\\\\properties\\\\[id].js\",\n                    lineNumber: 34,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"pb-4 mb-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                            className: \"title is-4\",\n                            children: [\n                                property.location,\n                                \", \",\n                                property.city\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\xcal1\\\\source\\\\repos\\\\one-ring-rentals\\\\src\\\\pages\\\\properties\\\\[id].js\",\n                            lineNumber: 38,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"title is-3\",\n                            children: [\n                                \"Price: $\",\n                                property.price,\n                                \" per night\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\xcal1\\\\source\\\\repos\\\\one-ring-rentals\\\\src\\\\pages\\\\properties\\\\[id].js\",\n                            lineNumber: 39,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                            className: \"title is-4\",\n                            children: [\n                                property.beds,\n                                \" beds, \",\n                                property.baths,\n                                \" baths\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\xcal1\\\\source\\\\repos\\\\one-ring-rentals\\\\src\\\\pages\\\\properties\\\\[id].js\",\n                            lineNumber: 40,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\xcal1\\\\source\\\\repos\\\\one-ring-rentals\\\\src\\\\pages\\\\properties\\\\[id].js\",\n                    lineNumber: 36,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center mt-8 w-full\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"/\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"button is-primary is-align-items-center mt-6\",\n                            children: \"Back to Properties\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\xcal1\\\\source\\\\repos\\\\one-ring-rentals\\\\src\\\\pages\\\\properties\\\\[id].js\",\n                            lineNumber: 44,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\xcal1\\\\source\\\\repos\\\\one-ring-rentals\\\\src\\\\pages\\\\properties\\\\[id].js\",\n                        lineNumber: 43,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\xcal1\\\\source\\\\repos\\\\one-ring-rentals\\\\src\\\\pages\\\\properties\\\\[id].js\",\n                    lineNumber: 42,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\xcal1\\\\source\\\\repos\\\\one-ring-rentals\\\\src\\\\pages\\\\properties\\\\[id].js\",\n            lineNumber: 32,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\xcal1\\\\source\\\\repos\\\\one-ring-rentals\\\\src\\\\pages\\\\properties\\\\[id].js\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, this);\n}\n_s(PropertyInfo, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = PropertyInfo;\nvar _c;\n$RefreshReg$(_c, \"PropertyInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvcGVydGllcy9baWRdLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7OztDQVVDOztBQUN1QztBQUNxQjtBQUNoQztBQUNIO0FBQzFCSSxRQUFRQyxHQUFHLENBQUMsZUFBZUosd0RBQVVBO0FBRXRCLFNBQVNLOztJQUNwQixJQUFNQyxTQUFTUCxzREFBU0E7SUFDeEIsSUFBTSxLQUFTTyxPQUFPRSxLQUFLLENBQW5CRDtJQUNSSixRQUFRQyxHQUFHLENBQUMsT0FBT0c7SUFFbkIsMEJBQTBCO0lBQzFCLElBQU1FLFdBQVdULDZEQUFlLENBQUMsU0FBQ1c7ZUFBU0EsS0FBS0osRUFBRSxLQUFLQTs7SUFFdkQsSUFBSSxDQUFDRSxVQUFVO1FBQ1gscUJBQU8sOERBQUNHO3NCQUFJOzs7Ozs7SUFDaEI7SUFFQSxxQkFDSSw4REFBQ0E7UUFBSUMsV0FBVTtrQkFDWCw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ1gsOERBQUNDO29CQUFHRCxXQUFVOzhCQUFjSixTQUFTTSxLQUFLOzs7Ozs7OEJBQzFDLDhEQUFDQztvQkFBSUMsS0FBS1IsU0FBU1MsS0FBSztvQkFBRUMsS0FBS1YsU0FBU00sS0FBSztvQkFDeENGLFdBQVU7Ozs7Ozs4QkFDZiw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUVYLDhEQUFDTzs0QkFBR1AsV0FBVTs7Z0NBQWNKLFNBQVNZLFFBQVE7Z0NBQUM7Z0NBQUdaLFNBQVNhLElBQUk7Ozs7Ozs7c0NBQzlELDhEQUFDQzs0QkFBR1YsV0FBVTs7Z0NBQWE7Z0NBQVNKLFNBQVNlLEtBQUs7Z0NBQUM7Ozs7Ozs7c0NBQ25ELDhEQUFDSjs0QkFBR1AsV0FBVTs7Z0NBQWNKLFNBQVNnQixJQUFJO2dDQUFDO2dDQUFRaEIsU0FBU2lCLEtBQUs7Z0NBQUM7Ozs7Ozs7Ozs7Ozs7OEJBRXJFLDhEQUFDZDtvQkFBSUMsV0FBVTs4QkFDWCw0RUFBQ1osa0RBQUlBO3dCQUFDMEIsTUFBSztrQ0FDUCw0RUFBQ0M7NEJBQU9mLFdBQVU7c0NBQStDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNekY7R0FoQ3dCUjs7UUFDTE4sa0RBQVNBOzs7S0FESk0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Byb3BlcnRpZXMvW2lkXS5qcz83YjQxIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBQcm9wZXJ0eSBJbmZvcm1hdGlvbiBQYWdlXHJcbiAqXHJcbiAqIFByb3BlcnR5IGluZm9ybWF0aW9uIGNvbXBvbmVudCBmb3IgYWxsIHByb3BlcnRpZXNcclxuICpcclxuICogRklMRSBOQU1FOiAgIHtpZH0udHN4XHJcbiAqIExvY2F0aW9uOiAgICAvc3JjL3BhZ2VzL3Byb3BlcnRpZXNcclxuICogQ3JlYXRlZDogICAgIDEyLzExLzIwMjRcclxuICogQXV0aG9yOiAgICAgIE1pY2hhZWwgUmVlZCAyMDA1NjA2NkB0YWZlLndhLmVkdS5hdVxyXG4gKlxyXG4gKi9cclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgcHJvcGVydGllcyBmcm9tICcuLi8uLi8uLi9wdWJsaWMvcHJvcGVydGllc0RhdGEuanNvbic7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5jb25zb2xlLmxvZygnUHJvcGVydGllczonLCBwcm9wZXJ0aWVzKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb3BlcnR5SW5mbygpIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gICAgY29uc29sZS5sb2coJ0lEOicsIGlkKTtcclxuXHJcbiAgICAvLyBGaW5kIHRoZSBwcm9wZXJ0eSBieSBpZFxyXG4gICAgY29uc3QgcHJvcGVydHkgPSBwcm9wZXJ0aWVzLmZpbmQoKHByb3ApID0+IHByb3AuaWQgPT09IGlkKTtcclxuXHJcbiAgICBpZiAoIXByb3BlcnR5KSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBwdC02IHBiLTYgZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtZnVsbCBpcy1jZW50ZXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlIGlzLTJcIj57cHJvcGVydHkudGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9wZXJ0eS5pbWFnZX0gYWx0PXtwcm9wZXJ0eS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGltYWdlLWxhcmdlIG9iamVjdC1jb3ZlciBwdC00IG10LTQgbWItNCBwYi00XCIvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYi00IG1iLTRcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlIGlzLTRcIj57cHJvcGVydHkubG9jYXRpb259LCB7cHJvcGVydHkuY2l0eX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZSBpcy0zXCI+UHJpY2U6ICR7cHJvcGVydHkucHJpY2V9IHBlciBuaWdodDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlIGlzLTRcIj57cHJvcGVydHkuYmVkc30gYmVkcywge3Byb3BlcnR5LmJhdGhzfSBiYXRoczwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtdC04IHctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uIGlzLXByaW1hcnkgaXMtYWxpZ24taXRlbXMtY2VudGVyIG10LTZcIj5CYWNrIHRvIFByb3BlcnRpZXM8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59Il0sIm5hbWVzIjpbInVzZVJvdXRlciIsInByb3BlcnRpZXMiLCJMaW5rIiwiUmVhY3QiLCJjb25zb2xlIiwibG9nIiwiUHJvcGVydHlJbmZvIiwicm91dGVyIiwiaWQiLCJxdWVyeSIsInByb3BlcnR5IiwiZmluZCIsInByb3AiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsInRpdGxlIiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJhbHQiLCJoNCIsImxvY2F0aW9uIiwiY2l0eSIsImgzIiwicHJpY2UiLCJiZWRzIiwiYmF0aHMiLCJocmVmIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/properties/[id].js\n"));

/***/ })

});