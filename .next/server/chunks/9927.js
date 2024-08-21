"use strict";
exports.id = 9927;
exports.ids = [9927];
exports.modules = {

/***/ 9855:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_categories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8450);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9648);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _skeletonLoader_skeletonLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8318);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);
axios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const { text  } = _data_categories__WEBPACK_IMPORTED_MODULE_1__/* .categoriesSection */ .z;

const CategoriesBoxItem = ({ categories =[]  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "categories-box-item",
        children: categories.length > 0 ? categories.map(({ id , icon , title  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "item",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                    href: "#",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Image, {
                            src: icon,
                            alt: "icon",
                            style: {
                                width: 80,
                                height: 80,
                                objectFit: "cover",
                                boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)"
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: title
                        })
                    ]
                })
            }, id)
        ) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            children: "No categories available"
        })
    });
};
const Categories = ()=>{
    const { 0: categoriesSection1 , 1: setCategoriesSection  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);
    const fetchCategories = async ()=>{
        try {
            setLoading(true);
            const res = await axios__WEBPACK_IMPORTED_MODULE_2__["default"].get("https://api.olympiquemnihla.com/categories-section/find-all");
            setCategoriesSection(res.data);
        } catch (error) {
            console.error("Error fetching categories:", error);
        } finally{
            setLoading(false);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        fetchCategories();
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "categories-area bg_cover",
        style: {
            backgroundImage: `url(${categoriesSection1 && categoriesSection1[0]?.bg})`
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Container, {
            children: loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_skeletonLoader_skeletonLoader__WEBPACK_IMPORTED_MODULE_5__/* .SkeletonLoader */ .gi, {}) : categoriesSection1 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Row, {
                className: "align-items-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
                        lg: 5,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "categories-content",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: categoriesSection1[0]?.tagline || ""
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: "title",
                                    children: categoriesSection1[0]?.title || ""
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    style: {
                                        wordWrap: "break-word",
                                        overflowWrap: "break-word",
                                        wordBreak: "break-word"
                                    },
                                    children: categoriesSection1[0]?.description || ""
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "item d-flex align-items-center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "thumb",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Image, {
                                                src: categoriesSection1[0]?.categoriesUser || "",
                                                alt: "",
                                                style: {
                                                    width: 72,
                                                    height: 72,
                                                    borderRadius: 50,
                                                    objectFit: "cover"
                                                }
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: categoriesSection1[0]?.signature || ""
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {
                        lg: 7,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "categories-box",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_3__.Suspense, {
                                fallback: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_skeletonLoader_skeletonLoader__WEBPACK_IMPORTED_MODULE_5__/* .SkeletonCategoriesBoxItem */ .WT, {}),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CategoriesBoxItem, {
                                        categories: categoriesSection1[0]?.categories.slice(0, 3) || []
                                    }),
                                    categoriesSection1[0]?.categories.slice(3).length > 3 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CategoriesBoxItem, {
                                        categories: categoriesSection1[0]?.categories.slice(3) || []
                                    })
                                ]
                            })
                        })
                    })
                ]
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: "No categories section available"
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Categories);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

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
        className: "cta-area mb-5",
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


/***/ }),

/***/ 8450:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ categoriesSection)
/* harmony export */ });
/* harmony import */ var _images_categories_bg_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9008);
/* harmony import */ var _images_bg4_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8172);
/* harmony import */ var _images_singin_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7250);



const categoriesSection = {
    bg: _images_categories_bg_jpg__WEBPACK_IMPORTED_MODULE_0__["default"],
    tagline: "Which Category Intrest You",
    title: "Top Categories",
    text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown was popularised.",
    categoriesUser: _images_bg4_jpg__WEBPACK_IMPORTED_MODULE_1__["default"],
    signIn: _images_singin_png__WEBPACK_IMPORTED_MODULE_2__["default"],
    categories: [
        {
            id: 1,
            icon: "flaticon-networking",
            title: "Technology"
        },
        {
            id: 2,
            icon: "flaticon-photograph",
            title: "Film & Videos"
        },
        {
            id: 3,
            icon: "flaticon-translation",
            title: "Education"
        },
        {
            id: 4,
            icon: "flaticon-stethoscope",
            title: "Medical"
        },
        {
            id: 5,
            icon: "flaticon-skincare",
            title: "Fashion"
        },
        {
            id: 6,
            icon: "flaticon-design",
            title: "Design"
        }, 
    ]
};


/***/ })

};
;