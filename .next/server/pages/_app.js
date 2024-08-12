"use strict";
(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 2280:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ useRootContext),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const useRootContext = ()=>{
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(context);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (context);


/***/ }),

/***/ 858:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/hooks/useToggle.js

/**
 * @param {boolean} defaultValue
 * @returns {[boolean, (value?: boolean) => void]}
 */ const useToggle = (defaultValue = false)=>{
    const { 0: toggle , 1: setToggle  } = (0,external_react_.useState)(defaultValue);
    /**
   * @param {boolean} value
   */ const toggler = (0,external_react_.useCallback)((value = undefined)=>{
        setToggle((preToggle)=>typeof value === "boolean" ? value : !preToggle
        );
    }, []);
    return [
        toggle,
        toggler
    ];
};
/* harmony default export */ const hooks_useToggle = (useToggle);

// EXTERNAL MODULE: ./src/context/context.js
var context = __webpack_require__(2280);
;// CONCATENATED MODULE: ./src/context/ContextProvider.js




const ContextProvider = ({ children  })=>{
    const [menuStatus, toggleMenu] = hooks_useToggle(false);
    const [openSearch, toggleSearch] = hooks_useToggle(false);
    const value = {
        menuStatus,
        toggleMenu,
        openSearch,
        toggleSearch
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(context/* default.Provider */.Z.Provider, {
        value: value,
        children: children
    });
};
/* harmony default export */ const context_ContextProvider = (ContextProvider);

;// CONCATENATED MODULE: ./src/pages/_app.js








// extra css






const MyApp = ({ Component , pageProps  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(context_ContextProvider, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
};
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(858));
module.exports = __webpack_exports__;

})();