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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PropertyInfo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_propertiesData_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../public/propertiesData.json */ \"./public/propertiesData.json\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/**\r\n * Property Information Page\r\n *\r\n * Property information component for all properties\r\n *\r\n * FILE NAME:   {id}.tsx\r\n * Location:    /src/pages/properties\r\n * Created:     12/11/2024\r\n * Author:      Michael Reed 20056066@tafe.wa.edu.au\r\n *\r\n */ \nvar _s = $RefreshSig$();\n\n\n\nconsole.log(\"Properties:\", _public_propertiesData_json__WEBPACK_IMPORTED_MODULE_2__);\nfunction PropertyInfo() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var id = router.query.id;\n    console.log(\"ID:\", id);\n    // Find the property by id\n    var property = _public_propertiesData_json__WEBPACK_IMPORTED_MODULE_2__.find(function(prop) {\n        return prop.id === id;\n    });\n    if (!property) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\xcal1\\\\source\\\\repos\\\\one-ring-rentals\\\\src\\\\pages\\\\properties\\\\[id].js\",\n            lineNumber: 26,\n            columnNumber: 16\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"columns pt-6 pb-6 min-h-screen flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"column is-half is-centered\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: property.image,\n                        alt: property.title,\n                        className: \"w-full h-[500px] object-cover\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\xcal1\\\\source\\\\repos\\\\one-ring-rentals\\\\src\\\\pages\\\\properties\\\\[id].js\",\n                        lineNumber: 34,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\xcal1\\\\source\\\\repos\\\\one-ring-rentals\\\\src\\\\pages\\\\properties\\\\[id].js\",\n                    lineNumber: 33,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\xcal1\\\\source\\\\repos\\\\one-ring-rentals\\\\src\\\\pages\\\\properties\\\\[id].js\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"column is-half is-align-content-center is-centered\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"title is-2\",\n                            children: property.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\xcal1\\\\source\\\\repos\\\\one-ring-rentals\\\\src\\\\pages\\\\properties\\\\[id].js\",\n                            lineNumber: 40,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                            className: \"title is-4\",\n                            children: [\n                                property.location,\n                                \", \",\n                                property.city\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\xcal1\\\\source\\\\repos\\\\one-ring-rentals\\\\src\\\\pages\\\\properties\\\\[id].js\",\n                            lineNumber: 41,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                            className: \"title is-4\",\n                            children: [\n                                \"Price: $\",\n                                property.price,\n                                \" per night\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\xcal1\\\\source\\\\repos\\\\one-ring-rentals\\\\src\\\\pages\\\\properties\\\\[id].js\",\n                            lineNumber: 42,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                            className: \"title is-4\",\n                            children: [\n                                property.beds,\n                                \" beds, \",\n                                property.baths,\n                                \" baths\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\xcal1\\\\source\\\\repos\\\\one-ring-rentals\\\\src\\\\pages\\\\properties\\\\[id].js\",\n                            lineNumber: 43,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\xcal1\\\\source\\\\repos\\\\one-ring-rentals\\\\src\\\\pages\\\\properties\\\\[id].js\",\n                    lineNumber: 39,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\xcal1\\\\source\\\\repos\\\\one-ring-rentals\\\\src\\\\pages\\\\properties\\\\[id].js\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center mt-8 w-full\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded\",\n                        children: \"Back to Properties\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\xcal1\\\\source\\\\repos\\\\one-ring-rentals\\\\src\\\\pages\\\\properties\\\\[id].js\",\n                        lineNumber: 49,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\xcal1\\\\source\\\\repos\\\\one-ring-rentals\\\\src\\\\pages\\\\properties\\\\[id].js\",\n                    lineNumber: 48,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\xcal1\\\\source\\\\repos\\\\one-ring-rentals\\\\src\\\\pages\\\\properties\\\\[id].js\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\xcal1\\\\source\\\\repos\\\\one-ring-rentals\\\\src\\\\pages\\\\properties\\\\[id].js\",\n        lineNumber: 30,\n        columnNumber: 9\n    }, this);\n}\n_s(PropertyInfo, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = PropertyInfo;\nvar _c;\n$RefreshReg$(_c, \"PropertyInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvcGVydGllcy9baWRdLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Q0FVQzs7QUFDdUM7QUFDcUI7QUFDaEM7QUFDN0JHLFFBQVFDLEdBQUcsQ0FBQyxlQUFlSCx3REFBVUE7QUFFdEIsU0FBU0k7O0lBQ3BCLElBQU1DLFNBQVNOLHNEQUFTQTtJQUN4QixJQUFNLEtBQVNNLE9BQU9FLEtBQUssQ0FBbkJEO0lBQ1JKLFFBQVFDLEdBQUcsQ0FBQyxPQUFPRztJQUVuQiwwQkFBMEI7SUFDMUIsSUFBTUUsV0FBV1IsNkRBQWUsQ0FBQyxTQUFDVTtlQUFTQSxLQUFLSixFQUFFLEtBQUtBOztJQUV2RCxJQUFJLENBQUNFLFVBQVU7UUFDWCxxQkFBTyw4REFBQ0c7c0JBQUk7Ozs7OztJQUNoQjtJQUVBLHFCQUNJLDhEQUFDQTtRQUFJQyxXQUFVOzswQkFFWCw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNEOzhCQUNHLDRFQUFDRTt3QkFBSUMsS0FBS04sU0FBU08sS0FBSzt3QkFBRUMsS0FBS1IsU0FBU1MsS0FBSzt3QkFBRUwsV0FBVTs7Ozs7Ozs7Ozs7Ozs7OzswQkFJakUsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNYLDRFQUFDRDs7c0NBQ0csOERBQUNPOzRCQUFHTixXQUFVO3NDQUFjSixTQUFTUyxLQUFLOzs7Ozs7c0NBQzFDLDhEQUFDRTs0QkFBR1AsV0FBVTs7Z0NBQWNKLFNBQVNZLFFBQVE7Z0NBQUM7Z0NBQUdaLFNBQVNhLElBQUk7Ozs7Ozs7c0NBQzlELDhEQUFDRjs0QkFBR1AsV0FBVTs7Z0NBQWE7Z0NBQVNKLFNBQVNjLEtBQUs7Z0NBQUM7Ozs7Ozs7c0NBQ25ELDhEQUFDSDs0QkFBR1AsV0FBVTs7Z0NBQWNKLFNBQVNlLElBQUk7Z0NBQUM7Z0NBQVFmLFNBQVNnQixLQUFLO2dDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSXpFLDhEQUFDYjtnQkFBSUMsV0FBVTswQkFDWCw0RUFBQ1gsa0RBQUlBO29CQUFDd0IsTUFBSzs4QkFDUCw0RUFBQ0M7d0JBQU9kLFdBQVU7a0NBQXVFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzdHO0dBdkN3QlI7O1FBQ0xMLGtEQUFTQTs7O0tBREpLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9wcm9wZXJ0aWVzL1tpZF0uanM/N2I0MSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogUHJvcGVydHkgSW5mb3JtYXRpb24gUGFnZVxyXG4gKlxyXG4gKiBQcm9wZXJ0eSBpbmZvcm1hdGlvbiBjb21wb25lbnQgZm9yIGFsbCBwcm9wZXJ0aWVzXHJcbiAqXHJcbiAqIEZJTEUgTkFNRTogICB7aWR9LnRzeFxyXG4gKiBMb2NhdGlvbjogICAgL3NyYy9wYWdlcy9wcm9wZXJ0aWVzXHJcbiAqIENyZWF0ZWQ6ICAgICAxMi8xMS8yMDI0XHJcbiAqIEF1dGhvcjogICAgICBNaWNoYWVsIFJlZWQgMjAwNTYwNjZAdGFmZS53YS5lZHUuYXVcclxuICpcclxuICovXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHByb3BlcnRpZXMgZnJvbSAnLi4vLi4vLi4vcHVibGljL3Byb3BlcnRpZXNEYXRhLmpzb24nO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmNvbnNvbGUubG9nKCdQcm9wZXJ0aWVzOicsIHByb3BlcnRpZXMpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvcGVydHlJbmZvKCkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgICBjb25zb2xlLmxvZygnSUQ6JywgaWQpO1xyXG5cclxuICAgIC8vIEZpbmQgdGhlIHByb3BlcnR5IGJ5IGlkXHJcbiAgICBjb25zdCBwcm9wZXJ0eSA9IHByb3BlcnRpZXMuZmluZCgocHJvcCkgPT4gcHJvcC5pZCA9PT0gaWQpO1xyXG5cclxuICAgIGlmICghcHJvcGVydHkpIHtcclxuICAgICAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIHB0LTYgcGItNiBtaW4taC1zY3JlZW4gZmxleC1jb2xcIj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGlzLWhhbGYgaXMtY2VudGVyZWRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Byb3BlcnR5LmltYWdlfSBhbHQ9e3Byb3BlcnR5LnRpdGxlfSBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1bNTAwcHhdIG9iamVjdC1jb3ZlclwiLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGlzLWhhbGYgaXMtYWxpZ24tY29udGVudC1jZW50ZXIgaXMtY2VudGVyZWRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlIGlzLTJcIj57cHJvcGVydHkudGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGUgaXMtNFwiPntwcm9wZXJ0eS5sb2NhdGlvbn0sIHtwcm9wZXJ0eS5jaXR5fTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlIGlzLTRcIj5QcmljZTogJHtwcm9wZXJ0eS5wcmljZX0gcGVyIG5pZ2h0PC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGl0bGUgaXMtNFwiPntwcm9wZXJ0eS5iZWRzfSBiZWRzLCB7cHJvcGVydHkuYmF0aHN9IGJhdGhzPC9oND5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtdC04IHctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJhY2sgdG8gUHJvcGVydGllc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0iXSwibmFtZXMiOlsidXNlUm91dGVyIiwicHJvcGVydGllcyIsIkxpbmsiLCJjb25zb2xlIiwibG9nIiwiUHJvcGVydHlJbmZvIiwicm91dGVyIiwiaWQiLCJxdWVyeSIsInByb3BlcnR5IiwiZmluZCIsInByb3AiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJpbWFnZSIsImFsdCIsInRpdGxlIiwiaDIiLCJoNCIsImxvY2F0aW9uIiwiY2l0eSIsInByaWNlIiwiYmVkcyIsImJhdGhzIiwiaHJlZiIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/properties/[id].js\n"));

/***/ })

});