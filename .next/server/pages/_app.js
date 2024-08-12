/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/context/ContextProvider.js":
/*!****************************************!*\
  !*** ./src/context/ContextProvider.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_useToggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hooks/useToggle */ \"./src/hooks/useToggle.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context */ \"./src/context/context.js\");\n\n\n\n\nconst ContextProvider = ({ children  })=>{\n    const [menuStatus, toggleMenu] = (0,_hooks_useToggle__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(false);\n    const [openSearch, toggleSearch] = (0,_hooks_useToggle__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(false);\n    const value = {\n        menuStatus,\n        toggleMenu,\n        openSearch,\n        toggleSearch\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\abbas\\\\Desktop\\\\Donation\\\\charity-user-side\\\\src\\\\context\\\\ContextProvider.js\",\n        lineNumber: 15,\n        columnNumber: 10\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContextProvider);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9Db250ZXh0UHJvdmlkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQTBDO0FBQ2hCO0FBQ007QUFFaEMsTUFBTUcsZUFBZSxHQUFHLENBQUMsRUFBRUMsUUFBUSxHQUFFLEdBQUs7SUFDeEMsTUFBTSxDQUFDQyxVQUFVLEVBQUVDLFVBQVUsQ0FBQyxHQUFHTiw0REFBUyxDQUFDLEtBQUssQ0FBQztJQUNqRCxNQUFNLENBQUNPLFVBQVUsRUFBRUMsWUFBWSxDQUFDLEdBQUdSLDREQUFTLENBQUMsS0FBSyxDQUFDO0lBRW5ELE1BQU1TLEtBQUssR0FBRztRQUNaSixVQUFVO1FBQ1ZDLFVBQVU7UUFDVkMsVUFBVTtRQUNWQyxZQUFZO0tBQ2I7SUFDRCxxQkFBTyw4REFBQ04seURBQWdCO1FBQUNPLEtBQUssRUFBRUEsS0FBSztrQkFBR0wsUUFBUTs7Ozs7aUJBQW9CLENBQUM7Q0FDdEU7QUFFRCxpRUFBZUQsZUFBZSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va3Jvd2QvLi9zcmMvY29udGV4dC9Db250ZXh0UHJvdmlkZXIuanM/MmRiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlVG9nZ2xlIGZyb20gXCJAL2hvb2tzL3VzZVRvZ2dsZVwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjb250ZXh0IGZyb20gXCIuL2NvbnRleHRcIjtcclxuXHJcbmNvbnN0IENvbnRleHRQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbbWVudVN0YXR1cywgdG9nZ2xlTWVudV0gPSB1c2VUb2dnbGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtvcGVuU2VhcmNoLCB0b2dnbGVTZWFyY2hdID0gdXNlVG9nZ2xlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgdmFsdWUgPSB7XHJcbiAgICBtZW51U3RhdHVzLFxyXG4gICAgdG9nZ2xlTWVudSxcclxuICAgIG9wZW5TZWFyY2gsXHJcbiAgICB0b2dnbGVTZWFyY2gsXHJcbiAgfTtcclxuICByZXR1cm4gPGNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3ZhbHVlfT57Y2hpbGRyZW59PC9jb250ZXh0LlByb3ZpZGVyPjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRleHRQcm92aWRlcjtcclxuIl0sIm5hbWVzIjpbInVzZVRvZ2dsZSIsIlJlYWN0IiwiY29udGV4dCIsIkNvbnRleHRQcm92aWRlciIsImNoaWxkcmVuIiwibWVudVN0YXR1cyIsInRvZ2dsZU1lbnUiLCJvcGVuU2VhcmNoIiwidG9nZ2xlU2VhcmNoIiwidmFsdWUiLCJQcm92aWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/context/ContextProvider.js\n");

/***/ }),

/***/ "./src/context/context.js":
/*!********************************!*\
  !*** ./src/context/context.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"useRootContext\": () => (/* binding */ useRootContext)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});\nconst useRootContext = ()=>{\n    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(context);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (context);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9jb250ZXh0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBa0Q7QUFFbEQsTUFBTUUsT0FBTyxpQkFBR0Ysb0RBQWEsQ0FBQyxFQUFFLENBQUM7QUFFMUIsTUFBTUcsY0FBYyxHQUFHLElBQU07SUFDbEMsT0FBT0YsaURBQVUsQ0FBQ0MsT0FBTyxDQUFDLENBQUM7Q0FDNUIsQ0FBQztBQUVGLGlFQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rcm93ZC8uL3NyYy9jb250ZXh0L2NvbnRleHQuanM/NDZjNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBjb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlUm9vdENvbnRleHQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHVzZUNvbnRleHQoY29udGV4dCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb250ZXh0O1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJjb250ZXh0IiwidXNlUm9vdENvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/context/context.js\n");

/***/ }),

/***/ "./src/hooks/useToggle.js":
/*!********************************!*\
  !*** ./src/hooks/useToggle.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n/**\r\n * @param {boolean} defaultValue\r\n * @returns {[boolean, (value?: boolean) => void]}\r\n */ const useToggle = (defaultValue = false)=>{\n    const { 0: toggle , 1: setToggle  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultValue);\n    /**\r\n   * @param {boolean} value\r\n   */ const toggler = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((value = undefined)=>{\n        setToggle((preToggle)=>typeof value === \"boolean\" ? value : !preToggle\n        );\n    }, []);\n    return [\n        toggle,\n        toggler\n    ];\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useToggle);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlVG9nZ2xlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQUU5QztJQU1FLE1BQU0sRUFSUixHQVFTSSxNQUFNLEdBUmYsR0FRaUJDO0lBRWYsdUNBRUcsQ0FDSCxNQUFNQztRQUNKRCxTQUFTLENBQUMsQ0FBQ0ksU0FBUyxHQUFNLE9BQU9GLEtBQUs7UUFBb0MsQ0FBQyxDQUFDO0tBQzdFLEVBQUU7SUFFSCxPQUFPO1FBQUNILE1BQU07UUFBRUUsT0FBTztLQUFDLENBQUM7Q0FDMUI7QUFFRCIsInNvdXJjZXMiOlsid2VicGFjazovL2tyb3dkLy4vc3JjL2hvb2tzL3VzZVRvZ2dsZS5qcz85OGEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gZGVmYXVsdFZhbHVlXHJcbiAqIEByZXR1cm5zIHtbYm9vbGVhbiwgKHZhbHVlPzogYm9vbGVhbikgPT4gdm9pZF19XHJcbiAqL1xyXG5cclxuY29uc3QgdXNlVG9nZ2xlID0gKGRlZmF1bHRWYWx1ZSA9IGZhbHNlKSA9PiB7XHJcbiAgY29uc3QgW3RvZ2dsZSwgc2V0VG9nZ2xlXSA9IHVzZVN0YXRlKGRlZmF1bHRWYWx1ZSk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gdmFsdWVcclxuICAgKi9cclxuICBjb25zdCB0b2dnbGVyID0gdXNlQ2FsbGJhY2soKHZhbHVlID0gdW5kZWZpbmVkKSA9PiB7XHJcbiAgICBzZXRUb2dnbGUoKHByZVRvZ2dsZSkgPT4gKHR5cGVvZiB2YWx1ZSA9PT0gXCJib29sZWFuXCIgPyB2YWx1ZSA6ICFwcmVUb2dnbGUpKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiBbdG9nZ2xlLCB0b2dnbGVyXTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZVRvZ2dsZTtcclxuIl0sIm5hbWVzIjpbInVzZUNhbGxiYWNrIiwidXNlU3RhdGUiLCJ1c2VUb2dnbGUiLCJkZWZhdWx0VmFsdWUiLCJ0b2dnbGUiLCJzZXRUb2dnbGUiLCJ0b2dnbGVyIiwidmFsdWUiLCJ1bmRlZmluZWQiLCJwcmVUb2dnbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/hooks/useToggle.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_ContextProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/ContextProvider */ \"./src/context/ContextProvider.js\");\n/* harmony import */ var _vendors_animate_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/vendors/animate.min.css */ \"./src/assets/vendors/animate.min.css\");\n/* harmony import */ var _vendors_animate_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_vendors_animate_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _vendors_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/vendors/font-awesome.min.css */ \"./src/assets/vendors/font-awesome.min.css\");\n/* harmony import */ var _vendors_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_vendors_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _vendors_flaticon_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/vendors/flaticon.css */ \"./src/assets/vendors/flaticon.css\");\n/* harmony import */ var _vendors_flaticon_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_vendors_flaticon_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var node_modules_swiper_swiper_bundle_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! node_modules/swiper/swiper-bundle.min.css */ \"./node_modules/swiper/swiper-bundle.min.css\");\n/* harmony import */ var node_modules_swiper_swiper_bundle_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(node_modules_swiper_swiper_bundle_min_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_modal_video_css_modal_video_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-modal-video/css/modal-video.css */ \"./node_modules/react-modal-video/css/modal-video.css\");\n/* harmony import */ var react_modal_video_css_modal_video_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_modal_video_css_modal_video_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _styles_default_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/styles/default.css */ \"./src/styles/default.css\");\n/* harmony import */ var _styles_default_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_default_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/styles/style.css */ \"./src/styles/style.css\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_style_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _styles_menu_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/styles/menu.css */ \"./src/styles/menu.css\");\n/* harmony import */ var _styles_menu_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_menu_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _styles_modalPayment_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/styles/modalPayment.css */ \"./src/styles/modalPayment.css\");\n/* harmony import */ var _styles_modalPayment_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_modalPayment_css__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _styles_subscriptionCard_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/styles/subscriptionCard.css */ \"./src/styles/subscriptionCard.css\");\n/* harmony import */ var _styles_subscriptionCard_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_subscriptionCard_css__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _styles_skeletonLoader_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/styles/skeletonLoader.css */ \"./src/styles/skeletonLoader.css\");\n/* harmony import */ var _styles_skeletonLoader_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_skeletonLoader_css__WEBPACK_IMPORTED_MODULE_13__);\n\n\n\n\n\n\n\n\n// extra css\n\n\n\n\n\n\nconst MyApp = ({ Component , pageProps  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_ContextProvider__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\abbas\\\\Desktop\\\\Donation\\\\charity-user-side\\\\src\\\\pages\\\\_app.js\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\abbas\\\\Desktop\\\\Donation\\\\charity-user-side\\\\src\\\\pages\\\\_app.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBd0Q7QUFDckI7QUFDSztBQUNSO0FBQ2M7QUFDSztBQUNKO0FBRS9DLFlBQVk7QUFDa0I7QUFDRjtBQUNEO0FBQ1E7QUFDSTtBQUNGO0FBRXJDLE1BQU1DLEtBQUssR0FBRyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFFLEdBQUs7SUFDMUMscUJBQ0UsOERBQUNILGdFQUFlO2tCQUNkLDRFQUFDRSxTQUFTO1lBQUUsR0FBR0MsU0FBUzs7Ozs7cUJBQUk7Ozs7O2lCQUNaLENBQ2xCO0NBQ0g7QUFFRCxpRUFBZUYsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va3Jvd2QvLi9zcmMvcGFnZXMvX2FwcC5qcz84ZmRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb250ZXh0UHJvdmlkZXIgZnJvbSBcIkAvY29udGV4dC9Db250ZXh0UHJvdmlkZXJcIjtcclxuaW1wb3J0IFwiQC92ZW5kb3JzL2FuaW1hdGUubWluLmNzc1wiO1xyXG5pbXBvcnQgXCJAL3ZlbmRvcnMvZm9udC1hd2Vzb21lLm1pbi5jc3NcIjtcclxuaW1wb3J0IFwiQC92ZW5kb3JzL2ZsYXRpY29uLmNzc1wiO1xyXG5pbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIjtcclxuaW1wb3J0IFwibm9kZV9tb2R1bGVzL3N3aXBlci9zd2lwZXItYnVuZGxlLm1pbi5jc3NcIjtcclxuaW1wb3J0IFwicmVhY3QtbW9kYWwtdmlkZW8vY3NzL21vZGFsLXZpZGVvLmNzc1wiO1xyXG5cclxuLy8gZXh0cmEgY3NzXHJcbmltcG9ydCBcIkAvc3R5bGVzL2RlZmF1bHQuY3NzXCI7XHJcbmltcG9ydCBcIkAvc3R5bGVzL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgXCJAL3N0eWxlcy9tZW51LmNzc1wiO1xyXG5pbXBvcnQgXCJAL3N0eWxlcy9tb2RhbFBheW1lbnQuY3NzXCI7XHJcbmltcG9ydCBcIkAvc3R5bGVzL3N1YnNjcmlwdGlvbkNhcmQuY3NzXCI7XHJcbmltcG9ydCBcIkAvc3R5bGVzL3NrZWxldG9uTG9hZGVyLmNzc1wiO1xyXG5cclxuY29uc3QgTXlBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250ZXh0UHJvdmlkZXI+XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgIDwvQ29udGV4dFByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcclxuIl0sIm5hbWVzIjpbIkNvbnRleHRQcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/react-modal-video/css/modal-video.css":
/*!************************************************************!*\
  !*** ./node_modules/react-modal-video/css/modal-video.css ***!
  \************************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/swiper/swiper-bundle.min.css":
/*!***************************************************!*\
  !*** ./node_modules/swiper/swiper-bundle.min.css ***!
  \***************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/assets/vendors/animate.min.css":
/*!********************************************!*\
  !*** ./src/assets/vendors/animate.min.css ***!
  \********************************************/
/***/ (() => {



/***/ }),

/***/ "./src/assets/vendors/flaticon.css":
/*!*****************************************!*\
  !*** ./src/assets/vendors/flaticon.css ***!
  \*****************************************/
/***/ (() => {



/***/ }),

/***/ "./src/assets/vendors/font-awesome.min.css":
/*!*************************************************!*\
  !*** ./src/assets/vendors/font-awesome.min.css ***!
  \*************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/default.css":
/*!********************************!*\
  !*** ./src/styles/default.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/menu.css":
/*!*****************************!*\
  !*** ./src/styles/menu.css ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/modalPayment.css":
/*!*************************************!*\
  !*** ./src/styles/modalPayment.css ***!
  \*************************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/skeletonLoader.css":
/*!***************************************!*\
  !*** ./src/styles/skeletonLoader.css ***!
  \***************************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/subscriptionCard.css":
/*!*****************************************!*\
  !*** ./src/styles/subscriptionCard.css ***!
  \*****************************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();