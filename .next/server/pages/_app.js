"use strict";
(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 1716:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ context_ContextProvider)
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


/***/ }),

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

/***/ 2730:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_ContextProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1716);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9752);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__]);
_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









// extra css







const queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.QueryClient();
const MyApp = ({ Component , pageProps  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.QueryClientProvider, {
        client: queryClient,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_context_ContextProvider__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                ...pageProps
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9752:
/***/ ((module) => {

module.exports = import("@tanstack/react-query");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2730));
module.exports = __webpack_exports__;

})();