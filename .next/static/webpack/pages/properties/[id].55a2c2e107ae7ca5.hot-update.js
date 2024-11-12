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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PropertyInfo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_propertiesData_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../public/propertiesData.json */ \"./public/propertiesData.json\");\n/* harmony import */ var _components_homePage_featuredProperties_PropertyCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/homePage/featuredProperties/PropertyCard */ \"./src/components/homePage/featuredProperties/PropertyCard.js\");\n/**\r\n * Property Information Page\r\n *\r\n * Property information component for all properties\r\n *\r\n * FILE NAME:   {id}.tsx\r\n * Location:    /src/pages/properties\r\n * Created:     12/11/2024\r\n * Author:      Michael Reed 20056066@tafe.wa.edu.au\r\n *\r\n */ \nvar _s = $RefreshSig$();\n\n\n\nconsole.log(\"Properties:\", _public_propertiesData_json__WEBPACK_IMPORTED_MODULE_2__);\nfunction PropertyInfo() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var id = router.query.id;\n    console.log(\"ID:\", id);\n    // Find the property by id\n    var property = _public_propertiesData_json__WEBPACK_IMPORTED_MODULE_2__.find(function(prop) {\n        return prop.id === id;\n    });\n    if (!property) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\xcal1\\\\source\\\\repos\\\\one-ring-rentals\\\\src\\\\pages\\\\properties\\\\[id].js\",\n            lineNumber: 26,\n            columnNumber: 16\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: property.title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\xcal1\\\\source\\\\repos\\\\one-ring-rentals\\\\src\\\\pages\\\\properties\\\\[id].js\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    property.location,\n                    \", \",\n                    property.city\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\xcal1\\\\source\\\\repos\\\\one-ring-rentals\\\\src\\\\pages\\\\properties\\\\[id].js\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Price: $\",\n                    property.price,\n                    \" per night\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\xcal1\\\\source\\\\repos\\\\one-ring-rentals\\\\src\\\\pages\\\\properties\\\\[id].js\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    property.beds,\n                    \" beds, \",\n                    property.baths,\n                    \" baths\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\xcal1\\\\source\\\\repos\\\\one-ring-rentals\\\\src\\\\pages\\\\properties\\\\[id].js\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: property.image,\n                alt: property.title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\xcal1\\\\source\\\\repos\\\\one-ring-rentals\\\\src\\\\pages\\\\properties\\\\[id].js\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\xcal1\\\\source\\\\repos\\\\one-ring-rentals\\\\src\\\\pages\\\\properties\\\\[id].js\",\n        lineNumber: 30,\n        columnNumber: 9\n    }, this);\n}\n_s(PropertyInfo, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = PropertyInfo;\nvar _c;\n$RefreshReg$(_c, \"PropertyInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvcGVydGllcy9baWRdLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7OztDQVVDOztBQUN1QztBQUNxQjtBQUN3QjtBQUNyRkcsUUFBUUMsR0FBRyxDQUFDLGVBQWVILHdEQUFVQTtBQUV0QixTQUFTSTs7SUFDcEIsSUFBTUMsU0FBU04sc0RBQVNBO0lBQ3hCLElBQU0sS0FBU00sT0FBT0UsS0FBSyxDQUFuQkQ7SUFDUkosUUFBUUMsR0FBRyxDQUFDLE9BQU9HO0lBRW5CLDBCQUEwQjtJQUMxQixJQUFNRSxXQUFXUiw2REFBZSxDQUFDLFNBQUNVO2VBQVNBLEtBQUtKLEVBQUUsS0FBS0E7O0lBRXZELElBQUksQ0FBQ0UsVUFBVTtRQUNYLHFCQUFPLDhEQUFDRztzQkFBSTs7Ozs7O0lBQ2hCO0lBRUEscUJBQ0ksOERBQUNBOzswQkFDRyw4REFBQ0M7MEJBQUlKLFNBQVNLLEtBQUs7Ozs7OzswQkFDbkIsOERBQUNDOztvQkFBR04sU0FBU08sUUFBUTtvQkFBQztvQkFBR1AsU0FBU1EsSUFBSTs7Ozs7OzswQkFDdEMsOERBQUNGOztvQkFBRTtvQkFBU04sU0FBU1MsS0FBSztvQkFBQzs7Ozs7OzswQkFDM0IsOERBQUNIOztvQkFBR04sU0FBU1UsSUFBSTtvQkFBQztvQkFBUVYsU0FBU1csS0FBSztvQkFBQzs7Ozs7OzswQkFDekMsOERBQUNDO2dCQUFJQyxLQUFLYixTQUFTYyxLQUFLO2dCQUFFQyxLQUFLZixTQUFTSyxLQUFLOzs7Ozs7Ozs7Ozs7QUFHekQ7R0FyQndCVDs7UUFDTEwsa0RBQVNBOzs7S0FESksiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Byb3BlcnRpZXMvW2lkXS5qcz83YjQxIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBQcm9wZXJ0eSBJbmZvcm1hdGlvbiBQYWdlXHJcbiAqXHJcbiAqIFByb3BlcnR5IGluZm9ybWF0aW9uIGNvbXBvbmVudCBmb3IgYWxsIHByb3BlcnRpZXNcclxuICpcclxuICogRklMRSBOQU1FOiAgIHtpZH0udHN4XHJcbiAqIExvY2F0aW9uOiAgICAvc3JjL3BhZ2VzL3Byb3BlcnRpZXNcclxuICogQ3JlYXRlZDogICAgIDEyLzExLzIwMjRcclxuICogQXV0aG9yOiAgICAgIE1pY2hhZWwgUmVlZCAyMDA1NjA2NkB0YWZlLndhLmVkdS5hdVxyXG4gKlxyXG4gKi9cclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgcHJvcGVydGllcyBmcm9tICcuLi8uLi8uLi9wdWJsaWMvcHJvcGVydGllc0RhdGEuanNvbic7XHJcbmltcG9ydCBQcm9wZXJ0eUNhcmQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9ob21lUGFnZS9mZWF0dXJlZFByb3BlcnRpZXMvUHJvcGVydHlDYXJkJztcclxuY29uc29sZS5sb2coJ1Byb3BlcnRpZXM6JywgcHJvcGVydGllcyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9wZXJ0eUluZm8oKSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcclxuICAgIGNvbnNvbGUubG9nKCdJRDonLCBpZCk7XHJcblxyXG4gICAgLy8gRmluZCB0aGUgcHJvcGVydHkgYnkgaWRcclxuICAgIGNvbnN0IHByb3BlcnR5ID0gcHJvcGVydGllcy5maW5kKChwcm9wKSA9PiBwcm9wLmlkID09PSBpZCk7XHJcblxyXG4gICAgaWYgKCFwcm9wZXJ0eSkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDE+e3Byb3BlcnR5LnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgIDxwPntwcm9wZXJ0eS5sb2NhdGlvbn0sIHtwcm9wZXJ0eS5jaXR5fTwvcD5cclxuICAgICAgICAgICAgPHA+UHJpY2U6ICR7cHJvcGVydHkucHJpY2V9IHBlciBuaWdodDwvcD5cclxuICAgICAgICAgICAgPHA+e3Byb3BlcnR5LmJlZHN9IGJlZHMsIHtwcm9wZXJ0eS5iYXRoc30gYmF0aHM8L3A+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9wZXJ0eS5pbWFnZX0gYWx0PXtwcm9wZXJ0eS50aXRsZX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0iXSwibmFtZXMiOlsidXNlUm91dGVyIiwicHJvcGVydGllcyIsIlByb3BlcnR5Q2FyZCIsImNvbnNvbGUiLCJsb2ciLCJQcm9wZXJ0eUluZm8iLCJyb3V0ZXIiLCJpZCIsInF1ZXJ5IiwicHJvcGVydHkiLCJmaW5kIiwicHJvcCIsImRpdiIsImgxIiwidGl0bGUiLCJwIiwibG9jYXRpb24iLCJjaXR5IiwicHJpY2UiLCJiZWRzIiwiYmF0aHMiLCJpbWciLCJzcmMiLCJpbWFnZSIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/properties/[id].js\n"));

/***/ })

});