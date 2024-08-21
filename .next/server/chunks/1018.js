"use strict";
exports.id = 1018;
exports.ids = [1018];
exports.modules = {

/***/ 1018:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
const TextSplitItem = ({ splittedText ="" , i  })=>{
    const { lastIndex , newHighlight , highlight , highlightSeparator , renderText , renderSeparator , renderHighlight , renderNonHighlight , highlightClassName ,  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(context);
    const newT = splittedText.trim();
    const lowerT = newT.toLowerCase();
    const render = ()=>{
        if (highlight && lowerT.includes(newHighlight)) {
            if (lowerT === newHighlight) {
                return renderHighlight?.(newT, i === lastIndex, highlightClassName);
            }
            const highlightInArr = newT.split(highlightSeparator);
            const highlightInArrLast = highlightInArr.length - 1;
            return highlightInArr.map((st, j)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
                    children: [
                        st.toLowerCase() === newHighlight ? renderHighlight?.(st, highlightInArrLast === j, highlightClassName) : renderNonHighlight?.(st, highlightInArrLast === j),
                        highlightSeparator
                    ]
                }, j)
            );
        }
        return renderText?.(newT, i === lastIndex);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [
            render(),
            " ",
            i !== lastIndex && renderSeparator?.()
        ]
    });
};
const TextSplit = ({ text: text1 = "" , separator ="\n" , children ="" , highlight ="" , highlightSeparator =" " , highlightClassName ="" , as: Tag = react__WEBPACK_IMPORTED_MODULE_1__.Fragment , renderText =(text = "", isLast = false)=>text
 , renderSeparator =()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
 , renderHighlight =(highlightedText = "", isLast = false, className = "")=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: highlightClassName,
        children: highlightedText
    })
 , renderNonHighlight =(nonHighlightedText = "", isLast = false)=>nonHighlightedText
 , ...props })=>{
    const newText = children || text1;
    const arr = newText.split(separator);
    const lastIndex = arr.length - 1;
    const newHighlight = highlight.toLowerCase();
    const contextValue = {
        lastIndex,
        newHighlight,
        highlight,
        highlightSeparator,
        renderText,
        renderSeparator,
        renderHighlight,
        renderNonHighlight,
        highlightClassName
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(context.Provider, {
        value: contextValue,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Tag, {
            ...props,
            children: arr.map((splittedText, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TextSplitItem, {
                    i: i,
                    splittedText: splittedText
                }, i)
            )
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextSplit);


/***/ })

};
;