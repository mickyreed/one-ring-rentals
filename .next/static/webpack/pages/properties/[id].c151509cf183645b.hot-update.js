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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PropertyInfo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_propertiesData_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../public/propertiesData.json */ \"./public/propertiesData.json\");\n/* harmony import */ var _components_homePage_featuredProperties_PropertyCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/homePage/featuredProperties/PropertyCard */ \"./src/components/homePage/featuredProperties/PropertyCard.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/**\r\n * Property Information Page\r\n *\r\n * Property information component for all properties\r\n *\r\n * FILE NAME:   {id}.tsx\r\n * Location:    /src/pages/properties\r\n * Created:     12/11/2024\r\n * Author:      Michael Reed 20056066@tafe.wa.edu.au\r\n *\r\n */ \nvar _s = $RefreshSig$();\n\n\n\n\nconsole.log(\"Properties:\", _public_propertiesData_json__WEBPACK_IMPORTED_MODULE_2__);\nfunction PropertyInfo() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var id = router.query.id;\n    console.log(\"ID:\", id);\n    // Find the property by id\n    var property = _public_propertiesData_json__WEBPACK_IMPORTED_MODULE_2__.find(function(prop) {\n        return prop.id === id;\n    });\n    if (!property) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\xcal1\\\\source\\\\repos\\\\one-ring-rentals\\\\src\\\\pages\\\\properties\\\\[id].js\",\n            lineNumber: 27,\n            columnNumber: 16\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"columns\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"column is-full-desktop\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_homePage_featuredProperties_PropertyCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    id: property.id,\n                    title: property.title,\n                    location: property.location,\n                    city: property.city,\n                    image: property.image,\n                    price: property.price,\n                    beds: property.beds,\n                    baths: property.baths,\n                    centered: true,\n                    width: \"60%\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\xcal1\\\\source\\\\repos\\\\one-ring-rentals\\\\src\\\\pages\\\\properties\\\\[id].js\",\n                    lineNumber: 33,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center mt-8\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        href: \"/\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded\",\n                            children: \"Back to Properties\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\xcal1\\\\source\\\\repos\\\\one-ring-rentals\\\\src\\\\pages\\\\properties\\\\[id].js\",\n                            lineNumber: 47,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\xcal1\\\\source\\\\repos\\\\one-ring-rentals\\\\src\\\\pages\\\\properties\\\\[id].js\",\n                        lineNumber: 46,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\xcal1\\\\source\\\\repos\\\\one-ring-rentals\\\\src\\\\pages\\\\properties\\\\[id].js\",\n                    lineNumber: 45,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\xcal1\\\\source\\\\repos\\\\one-ring-rentals\\\\src\\\\pages\\\\properties\\\\[id].js\",\n            lineNumber: 32,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\xcal1\\\\source\\\\repos\\\\one-ring-rentals\\\\src\\\\pages\\\\properties\\\\[id].js\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, this);\n}\n_s(PropertyInfo, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = PropertyInfo;\nvar _c;\n$RefreshReg$(_c, \"PropertyInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvcGVydGllcy9baWRdLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7O0NBVUM7O0FBQ3VDO0FBQ3FCO0FBQ3dCO0FBQ3hEO0FBQzdCSSxRQUFRQyxHQUFHLENBQUMsZUFBZUosd0RBQVVBO0FBRXRCLFNBQVNLOztJQUNwQixJQUFNQyxTQUFTUCxzREFBU0E7SUFDeEIsSUFBTSxLQUFTTyxPQUFPRSxLQUFLLENBQW5CRDtJQUNSSixRQUFRQyxHQUFHLENBQUMsT0FBT0c7SUFFbkIsMEJBQTBCO0lBQzFCLElBQU1FLFdBQVdULDZEQUFlLENBQUMsU0FBQ1c7ZUFBU0EsS0FBS0osRUFBRSxLQUFLQTs7SUFFdkQsSUFBSSxDQUFDRSxVQUFVO1FBQ1gscUJBQU8sOERBQUNHO3NCQUFJOzs7Ozs7SUFDaEI7SUFFQSxxQkFDSSw4REFBQ0E7UUFBSUMsV0FBVTtrQkFDWCw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ1gsOERBQUNaLDRGQUFZQTtvQkFDVE0sSUFBSUUsU0FBU0YsRUFBRTtvQkFDZk8sT0FBT0wsU0FBU0ssS0FBSztvQkFDckJDLFVBQVVOLFNBQVNNLFFBQVE7b0JBQzNCQyxNQUFNUCxTQUFTTyxJQUFJO29CQUNuQkMsT0FBT1IsU0FBU1EsS0FBSztvQkFDckJDLE9BQU9ULFNBQVNTLEtBQUs7b0JBQ3JCQyxNQUFNVixTQUFTVSxJQUFJO29CQUNuQkMsT0FBT1gsU0FBU1csS0FBSztvQkFDckJDLFFBQVE7b0JBQ1JDLE9BQU07Ozs7Ozs4QkFFViw4REFBQ1Y7b0JBQUlDLFdBQVU7OEJBQ1gsNEVBQUNYLGtEQUFJQTt3QkFBQ3FCLE1BQUs7a0NBQ1AsNEVBQUNDOzRCQUFPWCxXQUFVO3NDQUF1RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUWpIO0dBckN3QlI7O1FBQ0xOLGtEQUFTQTs7O0tBREpNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9wcm9wZXJ0aWVzL1tpZF0uanM/N2I0MSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogUHJvcGVydHkgSW5mb3JtYXRpb24gUGFnZVxyXG4gKlxyXG4gKiBQcm9wZXJ0eSBpbmZvcm1hdGlvbiBjb21wb25lbnQgZm9yIGFsbCBwcm9wZXJ0aWVzXHJcbiAqXHJcbiAqIEZJTEUgTkFNRTogICB7aWR9LnRzeFxyXG4gKiBMb2NhdGlvbjogICAgL3NyYy9wYWdlcy9wcm9wZXJ0aWVzXHJcbiAqIENyZWF0ZWQ6ICAgICAxMi8xMS8yMDI0XHJcbiAqIEF1dGhvcjogICAgICBNaWNoYWVsIFJlZWQgMjAwNTYwNjZAdGFmZS53YS5lZHUuYXVcclxuICpcclxuICovXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHByb3BlcnRpZXMgZnJvbSAnLi4vLi4vLi4vcHVibGljL3Byb3BlcnRpZXNEYXRhLmpzb24nO1xyXG5pbXBvcnQgUHJvcGVydHlDYXJkIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaG9tZVBhZ2UvZmVhdHVyZWRQcm9wZXJ0aWVzL1Byb3BlcnR5Q2FyZCc7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuY29uc29sZS5sb2coJ1Byb3BlcnRpZXM6JywgcHJvcGVydGllcyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9wZXJ0eUluZm8oKSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcclxuICAgIGNvbnNvbGUubG9nKCdJRDonLCBpZCk7XHJcblxyXG4gICAgLy8gRmluZCB0aGUgcHJvcGVydHkgYnkgaWRcclxuICAgIGNvbnN0IHByb3BlcnR5ID0gcHJvcGVydGllcy5maW5kKChwcm9wKSA9PiBwcm9wLmlkID09PSBpZCk7XHJcblxyXG4gICAgaWYgKCFwcm9wZXJ0eSkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtZnVsbC1kZXNrdG9wXCI+XHJcbiAgICAgICAgICAgICAgICA8UHJvcGVydHlDYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9e3Byb3BlcnR5LmlkfVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtwcm9wZXJ0eS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbj17cHJvcGVydHkubG9jYXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgY2l0eT17cHJvcGVydHkuY2l0eX1cclxuICAgICAgICAgICAgICAgICAgICBpbWFnZT17cHJvcGVydHkuaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2U9e3Byb3BlcnR5LnByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgIGJlZHM9e3Byb3BlcnR5LmJlZHN9XHJcbiAgICAgICAgICAgICAgICAgICAgYmF0aHM9e3Byb3BlcnR5LmJhdGhzfVxyXG4gICAgICAgICAgICAgICAgICAgIGNlbnRlcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI2MCVcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtdC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQmFjayB0byBQcm9wZXJ0aWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0iXSwibmFtZXMiOlsidXNlUm91dGVyIiwicHJvcGVydGllcyIsIlByb3BlcnR5Q2FyZCIsIkxpbmsiLCJjb25zb2xlIiwibG9nIiwiUHJvcGVydHlJbmZvIiwicm91dGVyIiwiaWQiLCJxdWVyeSIsInByb3BlcnR5IiwiZmluZCIsInByb3AiLCJkaXYiLCJjbGFzc05hbWUiLCJ0aXRsZSIsImxvY2F0aW9uIiwiY2l0eSIsImltYWdlIiwicHJpY2UiLCJiZWRzIiwiYmF0aHMiLCJjZW50ZXJlZCIsIndpZHRoIiwiaHJlZiIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/properties/[id].js\n"));

/***/ })

});