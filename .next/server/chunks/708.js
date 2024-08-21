"use strict";
exports.id = 708;
exports.ids = [708];
exports.modules = {

/***/ 708:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ TogetherArea_TogetherArea)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/assets/images/footer-bg.jpg
var footer_bg = __webpack_require__(6957);
;// CONCATENATED MODULE: ./src/data/togetherArea.js

const togetherArea = {
    bg: footer_bg["default"],
    tagline: "World is Full with Creativity",
    title: "Together We can Bring More Creativity into the World"
};

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
// EXTERNAL MODULE: ./src/components/Reuseable/Link.js
var Link = __webpack_require__(8129);
;// CONCATENATED MODULE: ./src/components/TogetherArea/TogetherArea.js





const { bg , tagline , title  } = togetherArea;
const TogetherArea = ({ className =""  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: `together-area bg_cover ${className}`,
        style: {
            backgroundImage: `url(${bg.src})`
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Row, {
                className: "justify-content-center",
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                    lg: 10,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "together-content text-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: tagline
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: "title",
                                children: title
                            })
                        ]
                    })
                })
            })
        })
    });
};
/* harmony default export */ const TogetherArea_TogetherArea = (TogetherArea);


/***/ })

};
;