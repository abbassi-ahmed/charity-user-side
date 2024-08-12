"use strict";
exports.id = 1029;
exports.ids = [1029];
exports.modules = {

/***/ 1029:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ CtaArea_CtaArea)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/assets/images/cta-bg.jpg
var cta_bg = __webpack_require__(8674);
;// CONCATENATED MODULE: ./src/data/ctaArea.js

const ctaArea = {
    bg: cta_bg["default"],
    title: "Ready to Raise Funds for Idea?"
};

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
;// CONCATENATED MODULE: ./src/components/CtaArea/CtaArea.js




const { bg , title  } = ctaArea;
const CtaArea = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "cta-area",
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Row, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                    lg: 12,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "cta-item bg_cover",
                        style: {
                            backgroundImage: `url(${bg.src})`
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "cta-content d-block d-lg-flex justify-content-between align-items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "title",
                                    children: title
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "main-btn main-btn-2",
                                    href: "#",
                                    children: "Make it happen"
                                })
                            ]
                        })
                    })
                })
            })
        })
    });
};
/* harmony default export */ const CtaArea_CtaArea = (CtaArea);


/***/ })

};
;