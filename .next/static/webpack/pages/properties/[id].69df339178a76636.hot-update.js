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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PropertyInfo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_propertiesData_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../public/propertiesData.json */ \"./public/propertiesData.json\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/**\r\n * Property Information Page\r\n *\r\n * Property information component for all properties\r\n *\r\n * FILE NAME:   {id}.tsx\r\n * Location:    /src/pages/properties\r\n * Created:     12/11/2024\r\n * Author:      Michael Reed 20056066@tafe.wa.edu.au\r\n *\r\n */ \nvar _s = $RefreshSig$();\n\n\n\n\nconsole.log(\"Properties:\", _public_propertiesData_json__WEBPACK_IMPORTED_MODULE_2__);\nfunction PropertyInfo() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var id = router.query.id;\n    console.log(\"ID:\", id);\n    // Find the property by id\n    var property = _public_propertiesData_json__WEBPACK_IMPORTED_MODULE_2__.find(function(prop) {\n        return prop.id === id;\n    });\n    if (!property) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\xcal1\\\\source\\\\repos\\\\one-ring-rentals\\\\src\\\\pages\\\\properties\\\\[id].js\",\n            lineNumber: 27,\n            columnNumber: 16\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"columns pt-6 pb-6 flex-col\",\n        children: [\n            \"height\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"column is-full is-centered\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: property.image,\n                        alt: property.title,\n                        className: \"w-full image-large object-cover pt-4 mt-4 mb-4 pb-4\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\xcal1\\\\source\\\\repos\\\\one-ring-rentals\\\\src\\\\pages\\\\properties\\\\[id].js\",\n                        lineNumber: 34,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"pb-4 mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"title is-2\",\n                                children: property.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\xcal1\\\\source\\\\repos\\\\one-ring-rentals\\\\src\\\\pages\\\\properties\\\\[id].js\",\n                                lineNumber: 37,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                className: \"title is-4\",\n                                children: [\n                                    property.location,\n                                    \", \",\n                                    property.city\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\xcal1\\\\source\\\\repos\\\\one-ring-rentals\\\\src\\\\pages\\\\properties\\\\[id].js\",\n                                lineNumber: 38,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                className: \"title is-4\",\n                                children: [\n                                    \"Price: $\",\n                                    property.price,\n                                    \" per night\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\xcal1\\\\source\\\\repos\\\\one-ring-rentals\\\\src\\\\pages\\\\properties\\\\[id].js\",\n                                lineNumber: 39,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                className: \"title is-4\",\n                                children: [\n                                    property.beds,\n                                    \" beds, \",\n                                    property.baths,\n                                    \" baths\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\xcal1\\\\source\\\\repos\\\\one-ring-rentals\\\\src\\\\pages\\\\properties\\\\[id].js\",\n                                lineNumber: 40,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\xcal1\\\\source\\\\repos\\\\one-ring-rentals\\\\src\\\\pages\\\\properties\\\\[id].js\",\n                        lineNumber: 36,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center mt-8 w-full\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: \"/\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"button is-primary is-align-items-center mt-4\",\n                                children: \"Back to Properties\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\xcal1\\\\source\\\\repos\\\\one-ring-rentals\\\\src\\\\pages\\\\properties\\\\[id].js\",\n                                lineNumber: 47,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\xcal1\\\\source\\\\repos\\\\one-ring-rentals\\\\src\\\\pages\\\\properties\\\\[id].js\",\n                            lineNumber: 43,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\xcal1\\\\source\\\\repos\\\\one-ring-rentals\\\\src\\\\pages\\\\properties\\\\[id].js\",\n                        lineNumber: 42,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\xcal1\\\\source\\\\repos\\\\one-ring-rentals\\\\src\\\\pages\\\\properties\\\\[id].js\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\xcal1\\\\source\\\\repos\\\\one-ring-rentals\\\\src\\\\pages\\\\properties\\\\[id].js\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, this);\n}\n_s(PropertyInfo, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = PropertyInfo;\nvar _c;\n$RefreshReg$(_c, \"PropertyInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvcGVydGllcy9baWRdLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7OztDQVVDOztBQUN1QztBQUNxQjtBQUNoQztBQUNIO0FBQzFCSSxRQUFRQyxHQUFHLENBQUMsZUFBZUosd0RBQVVBO0FBRXRCLFNBQVNLOztJQUNwQixJQUFNQyxTQUFTUCxzREFBU0E7SUFDeEIsSUFBTSxLQUFTTyxPQUFPRSxLQUFLLENBQW5CRDtJQUNSSixRQUFRQyxHQUFHLENBQUMsT0FBT0c7SUFFbkIsMEJBQTBCO0lBQzFCLElBQU1FLFdBQVdULDZEQUFlLENBQUMsU0FBQ1c7ZUFBU0EsS0FBS0osRUFBRSxLQUFLQTs7SUFFdkQsSUFBSSxDQUFDRSxVQUFVO1FBQ1gscUJBQU8sOERBQUNHO3NCQUFJOzs7Ozs7SUFDaEI7SUFFQSxxQkFDSSw4REFBQ0E7UUFBSUMsV0FBVTs7WUFBNkI7MEJBRXhDLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNDO3dCQUFJQyxLQUFLTixTQUFTTyxLQUFLO3dCQUFFQyxLQUFLUixTQUFTUyxLQUFLO3dCQUN4Q0wsV0FBVTs7Ozs7O2tDQUNmLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ1gsOERBQUNNO2dDQUFHTixXQUFVOzBDQUFjSixTQUFTUyxLQUFLOzs7Ozs7MENBQzFDLDhEQUFDRTtnQ0FBR1AsV0FBVTs7b0NBQWNKLFNBQVNZLFFBQVE7b0NBQUM7b0NBQUdaLFNBQVNhLElBQUk7Ozs7Ozs7MENBQzlELDhEQUFDRjtnQ0FBR1AsV0FBVTs7b0NBQWE7b0NBQVNKLFNBQVNjLEtBQUs7b0NBQUM7Ozs7Ozs7MENBQ25ELDhEQUFDSDtnQ0FBR1AsV0FBVTs7b0NBQWNKLFNBQVNlLElBQUk7b0NBQUM7b0NBQVFmLFNBQVNnQixLQUFLO29DQUFDOzs7Ozs7Ozs7Ozs7O2tDQUVyRSw4REFBQ2I7d0JBQUlDLFdBQVU7a0NBQ1gsNEVBQUNaLGtEQUFJQTs0QkFBQ3lCLE1BQUs7c0NBSVAsNEVBQUNDO2dDQUFPZCxXQUFVOzBDQUErQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVF6RjtHQXJDd0JSOztRQUNMTixrREFBU0E7OztLQURKTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcHJvcGVydGllcy9baWRdLmpzPzdiNDEiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIFByb3BlcnR5IEluZm9ybWF0aW9uIFBhZ2VcclxuICpcclxuICogUHJvcGVydHkgaW5mb3JtYXRpb24gY29tcG9uZW50IGZvciBhbGwgcHJvcGVydGllc1xyXG4gKlxyXG4gKiBGSUxFIE5BTUU6ICAge2lkfS50c3hcclxuICogTG9jYXRpb246ICAgIC9zcmMvcGFnZXMvcHJvcGVydGllc1xyXG4gKiBDcmVhdGVkOiAgICAgMTIvMTEvMjAyNFxyXG4gKiBBdXRob3I6ICAgICAgTWljaGFlbCBSZWVkIDIwMDU2MDY2QHRhZmUud2EuZWR1LmF1XHJcbiAqXHJcbiAqL1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBwcm9wZXJ0aWVzIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9wcm9wZXJ0aWVzRGF0YS5qc29uJztcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmNvbnNvbGUubG9nKCdQcm9wZXJ0aWVzOicsIHByb3BlcnRpZXMpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvcGVydHlJbmZvKCkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgICBjb25zb2xlLmxvZygnSUQ6JywgaWQpO1xyXG5cclxuICAgIC8vIEZpbmQgdGhlIHByb3BlcnR5IGJ5IGlkXHJcbiAgICBjb25zdCBwcm9wZXJ0eSA9IHByb3BlcnRpZXMuZmluZCgocHJvcCkgPT4gcHJvcC5pZCA9PT0gaWQpO1xyXG5cclxuICAgIGlmICghcHJvcGVydHkpIHtcclxuICAgICAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIHB0LTYgcGItNiBmbGV4LWNvbFwiPlxyXG5oZWlnaHRcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtZnVsbCBpcy1jZW50ZXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3Byb3BlcnR5LmltYWdlfSBhbHQ9e3Byb3BlcnR5LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaW1hZ2UtbGFyZ2Ugb2JqZWN0LWNvdmVyIHB0LTQgbXQtNCBtYi00IHBiLTRcIi8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiLTQgbWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZSBpcy0yXCI+e3Byb3BlcnR5LnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlIGlzLTRcIj57cHJvcGVydHkubG9jYXRpb259LCB7cHJvcGVydHkuY2l0eX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZSBpcy00XCI+UHJpY2U6ICR7cHJvcGVydHkucHJpY2V9IHBlciBuaWdodDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlIGlzLTRcIj57cHJvcGVydHkuYmVkc30gYmVkcywge3Byb3BlcnR5LmJhdGhzfSBiYXRoczwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtdC04IHctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxidXR0b24gY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWRcIj4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgIEJhY2sgdG8gUHJvcGVydGllcyovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyo8L2J1dHRvbj4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24gaXMtcHJpbWFyeSBpcy1hbGlnbi1pdGVtcy1jZW50ZXIgbXQtNFwiPkJhY2sgdG8gUHJvcGVydGllczwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJwcm9wZXJ0aWVzIiwiTGluayIsIlJlYWN0IiwiY29uc29sZSIsImxvZyIsIlByb3BlcnR5SW5mbyIsInJvdXRlciIsImlkIiwicXVlcnkiLCJwcm9wZXJ0eSIsImZpbmQiLCJwcm9wIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJhbHQiLCJ0aXRsZSIsImgyIiwiaDQiLCJsb2NhdGlvbiIsImNpdHkiLCJwcmljZSIsImJlZHMiLCJiYXRocyIsImhyZWYiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/properties/[id].js\n"));

/***/ })

});