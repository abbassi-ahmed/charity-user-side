"use strict";
exports.id = 9844;
exports.ids = [9844];
exports.modules = {

/***/ 9844:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Reuseable_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8129);




const SingleProject = ({ project , projectSums ={}  })=>{
    const { 0: imageLoad , 1: setImageLoad  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { id , image , startDate , name , description , target  } = project;
    const amount = projectSums[id] || 0;
    const progress = target ? amount / target * 100 : 0;
    const handleImageLoad = ()=>{
        setImageLoad(true);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "explore-projects-item mt-30",
        style: {
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)"
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "explore-projects-thumb",
                style: {
                    height: "300px",
                    width: "100%",
                    overflow: "hidden"
                },
                children: [
                    !imageLoad && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "d-flex justify-content-center align-items-center",
                        style: {
                            height: "300px",
                            width: "100%"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "pageLoader"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Image, {
                        src: image,
                        alt: name,
                        style: {
                            height: "300px",
                            width: "100%",
                            display: imageLoad ? "block" : "none"
                        },
                        onLoad: handleImageLoad
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "explore-projects-content",
                style: {
                    padding: "20px"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "item d-flex align-items-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: startDate
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Reuseable_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        href: `/projects/${project.id}`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            className: "title",
                            children: name
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        style: {
                            width: "100%",
                            backgroundColor: "#e0e0df",
                            borderRadius: "8px",
                            overflow: "hidden"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: {
                                width: `${progress}%`,
                                height: "20px",
                                backgroundColor: "#76c7c0",
                                borderRadius: "8px",
                                transition: "width 0.3s ease-in-out"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                style: {
                                    color: "white",
                                    textAlign: "center"
                                },
                                children: amount === 0 ? "" : amount
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "projects-goal",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                            children: [
                                "Goal: ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: target
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SingleProject);


/***/ })

};
;