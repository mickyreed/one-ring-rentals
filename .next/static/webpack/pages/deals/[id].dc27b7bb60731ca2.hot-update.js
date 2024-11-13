"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/deals/[id]",{

/***/ "./src/pages/deals/[id].js":
/*!*********************************!*\
  !*** ./src/pages/deals/[id].js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DealsInfo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_dealsData_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../public/dealsData.json */ \"./public/dealsData.json\");\n/* harmony import */ var _js_dateUtility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../js/dateUtility */ \"./src/js/dateUtility.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/**\r\n * deals Information Page\r\n *\r\n * deals information component for all deals\r\n *\r\n * FILE NAME:   {id}.tsx\r\n * Location:    /src/pages/deals\r\n * Created:     13/11/2024\r\n * Author:      Michael Reed 20056066@tafe.wa.edu.au\r\n *\r\n */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n//console.log('Deals:', deals);\nfunction DealsInfo() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var id = router.query.id;\n    //console.log('ID:', id);\n    // Find the property by id\n    var deal = _public_dealsData_json__WEBPACK_IMPORTED_MODULE_2__.find(function(prop) {\n        return prop.id === id;\n    });\n    if (!deal) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\xcal1\\\\source\\\\repos\\\\one-ring-rentals\\\\src\\\\pages\\\\deals\\\\[id].js\",\n            lineNumber: 28,\n            columnNumber: 16\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"columns pt-6 pb-6 flex-col\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"column is-full is-centered\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"title is-2\",\n                    children: deal[\"title\"]\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\xcal1\\\\source\\\\repos\\\\one-ring-rentals\\\\src\\\\pages\\\\deals\\\\[id].js\",\n                    lineNumber: 34,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                    className: \"title is-4\",\n                    children: [\n                        deal.location,\n                        \", \",\n                        deal.region\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\xcal1\\\\source\\\\repos\\\\one-ring-rentals\\\\src\\\\pages\\\\deals\\\\[id].js\",\n                    lineNumber: 35,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: deal.image,\n                    alt: deal.title,\n                    className: \"w-full image-large object-cover pt-4 mt-4 mb-4 pb-4\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\xcal1\\\\source\\\\repos\\\\one-ring-rentals\\\\src\\\\pages\\\\deals\\\\[id].js\",\n                    lineNumber: 37,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"pb-4 mb-4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"title is-3\",\n                        children: [\n                            \"Availability: \",\n                            (0,_js_dateUtility__WEBPACK_IMPORTED_MODULE_3__.checkDateAvailable)(deal[\"availability\"])\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\xcal1\\\\source\\\\repos\\\\one-ring-rentals\\\\src\\\\pages\\\\deals\\\\[id].js\",\n                        lineNumber: 41,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\xcal1\\\\source\\\\repos\\\\one-ring-rentals\\\\src\\\\pages\\\\deals\\\\[id].js\",\n                    lineNumber: 39,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center mt-8 w-full\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        href: \"/\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"button is-primary is-align-items-center mt-6\",\n                            children: \"Back to Last Minute Deals\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\xcal1\\\\source\\\\repos\\\\one-ring-rentals\\\\src\\\\pages\\\\deals\\\\[id].js\",\n                            lineNumber: 45,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\xcal1\\\\source\\\\repos\\\\one-ring-rentals\\\\src\\\\pages\\\\deals\\\\[id].js\",\n                        lineNumber: 44,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\xcal1\\\\source\\\\repos\\\\one-ring-rentals\\\\src\\\\pages\\\\deals\\\\[id].js\",\n                    lineNumber: 43,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\xcal1\\\\source\\\\repos\\\\one-ring-rentals\\\\src\\\\pages\\\\deals\\\\[id].js\",\n            lineNumber: 33,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\xcal1\\\\source\\\\repos\\\\one-ring-rentals\\\\src\\\\pages\\\\deals\\\\[id].js\",\n        lineNumber: 32,\n        columnNumber: 9\n    }, this);\n}\n_s(DealsInfo, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = DealsInfo;\nvar _c;\n$RefreshReg$(_c, \"DealsInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZGVhbHMvW2lkXS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7O0NBVUM7O0FBQ3VDO0FBQ1c7QUFDTztBQUM3QjtBQUNIO0FBQzFCLCtCQUErQjtBQUVoQixTQUFTSzs7SUFDcEIsSUFBTUMsU0FBU04sc0RBQVNBO0lBQ3hCLElBQU0sS0FBU00sT0FBT0UsS0FBSyxDQUFuQkQ7SUFDUix5QkFBeUI7SUFFekIsMEJBQTBCO0lBQzFCLElBQU1FLE9BQU9SLHdEQUFVLENBQUMsU0FBQ1U7ZUFBU0EsS0FBS0osRUFBRSxLQUFLQTs7SUFFOUMsSUFBSSxDQUFDRSxNQUFNO1FBQ1AscUJBQU8sOERBQUNHO3NCQUFJOzs7Ozs7SUFDaEI7SUFFQSxxQkFDSSw4REFBQ0E7UUFBSUMsV0FBVTtrQkFDWCw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ1gsOERBQUNDO29CQUFHRCxXQUFVOzhCQUFjSixJQUFJLENBQUMsUUFBUTs7Ozs7OzhCQUN6Qyw4REFBQ007b0JBQUdGLFdBQVU7O3dCQUFjSixLQUFLTyxRQUFRO3dCQUFDO3dCQUFHUCxLQUFLUSxNQUFNOzs7Ozs7OzhCQUV4RCw4REFBQ0M7b0JBQUlDLEtBQUtWLEtBQUtXLEtBQUs7b0JBQUVDLEtBQUtaLEtBQUthLEtBQUs7b0JBQ2hDVCxXQUFVOzs7Ozs7OEJBQ2YsOERBQUNEO29CQUFJQyxXQUFVOzhCQUVYLDRFQUFDVTt3QkFBR1YsV0FBVTs7NEJBQWE7NEJBQWVYLG1FQUFrQkEsQ0FBQ08sSUFBSSxDQUFDLGVBQWU7Ozs7Ozs7Ozs7Ozs4QkFFckYsOERBQUNHO29CQUFJQyxXQUFVOzhCQUNYLDRFQUFDVixrREFBSUE7d0JBQUNxQixNQUFLO2tDQUNQLDRFQUFDQzs0QkFBT1osV0FBVTtzQ0FBK0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU16RjtHQWhDd0JSOztRQUNMTCxrREFBU0E7OztLQURKSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvZGVhbHMvW2lkXS5qcz9lZTYzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBkZWFscyBJbmZvcm1hdGlvbiBQYWdlXHJcbiAqXHJcbiAqIGRlYWxzIGluZm9ybWF0aW9uIGNvbXBvbmVudCBmb3IgYWxsIGRlYWxzXHJcbiAqXHJcbiAqIEZJTEUgTkFNRTogICB7aWR9LnRzeFxyXG4gKiBMb2NhdGlvbjogICAgL3NyYy9wYWdlcy9kZWFsc1xyXG4gKiBDcmVhdGVkOiAgICAgMTMvMTEvMjAyNFxyXG4gKiBBdXRob3I6ICAgICAgTWljaGFlbCBSZWVkIDIwMDU2MDY2QHRhZmUud2EuZWR1LmF1XHJcbiAqXHJcbiAqL1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBkZWFscyBmcm9tICcuLi8uLi8uLi9wdWJsaWMvZGVhbHNEYXRhLmpzb24nO1xyXG5pbXBvcnQgeyBjaGVja0RhdGVBdmFpbGFibGUgfSBmcm9tICcuLi8uLi9qcy9kYXRlVXRpbGl0eSc7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG4vL2NvbnNvbGUubG9nKCdEZWFsczonLCBkZWFscyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZWFsc0luZm8oKSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcclxuICAgIC8vY29uc29sZS5sb2coJ0lEOicsIGlkKTtcclxuXHJcbiAgICAvLyBGaW5kIHRoZSBwcm9wZXJ0eSBieSBpZFxyXG4gICAgY29uc3QgZGVhbCA9IGRlYWxzLmZpbmQoKHByb3ApID0+IHByb3AuaWQgPT09IGlkKTtcclxuXHJcbiAgICBpZiAoIWRlYWwpIHtcclxuICAgICAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIHB0LTYgcGItNiBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy1mdWxsIGlzLWNlbnRlcmVkXCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGUgaXMtMlwiPntkZWFsW1widGl0bGVcIl19PC9oMj5cclxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZSBpcy00XCI+e2RlYWwubG9jYXRpb259LCB7ZGVhbC5yZWdpb259PC9oND5cclxuXHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZGVhbC5pbWFnZX0gYWx0PXtkZWFsLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaW1hZ2UtbGFyZ2Ugb2JqZWN0LWNvdmVyIHB0LTQgbXQtNCBtYi00IHBiLTRcIi8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiLTQgbWItNFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGl0bGUgaXMtM1wiPkF2YWlsYWJpbGl0eToge2NoZWNrRGF0ZUF2YWlsYWJsZShkZWFsW1wiYXZhaWxhYmlsaXR5XCJdKX08L2gzPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbXQtOCB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1wcmltYXJ5IGlzLWFsaWduLWl0ZW1zLWNlbnRlciBtdC02XCI+QmFjayB0byBMYXN0IE1pbnV0ZSBEZWFsczwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiZGVhbHMiLCJjaGVja0RhdGVBdmFpbGFibGUiLCJMaW5rIiwiUmVhY3QiLCJEZWFsc0luZm8iLCJyb3V0ZXIiLCJpZCIsInF1ZXJ5IiwiZGVhbCIsImZpbmQiLCJwcm9wIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJoNCIsImxvY2F0aW9uIiwicmVnaW9uIiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJhbHQiLCJ0aXRsZSIsImgzIiwiaHJlZiIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/deals/[id].js\n"));

/***/ })

});