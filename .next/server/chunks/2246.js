"use strict";
exports.id = 2246;
exports.ids = [2246];
exports.modules = {

/***/ 2246:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_bannerSlider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3948);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3877);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3015);
/* harmony import */ var _SingleBanner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2581);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_3__, swiper_react__WEBPACK_IMPORTED_MODULE_4__, _SingleBanner__WEBPACK_IMPORTED_MODULE_5__]);
([swiper__WEBPACK_IMPORTED_MODULE_3__, swiper_react__WEBPACK_IMPORTED_MODULE_4__, _SingleBanner__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







swiper__WEBPACK_IMPORTED_MODULE_3__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_3__.EffectFade,
    swiper__WEBPACK_IMPORTED_MODULE_3__.Navigation,
    swiper__WEBPACK_IMPORTED_MODULE_3__.Autoplay
]);
const options = {
    slidesPerView: 1,
    loop: true,
    effect: "fade",
    navigation: {
        nextEl: "#main-slider__swiper-button-next",
        prevEl: "#main-slider__swiper-button-prev"
    },
    autoplay: {
        delay: 5000
    }
};
const banners1 = _data_bannerSlider__WEBPACK_IMPORTED_MODULE_1__/* .bannerSlider.slice */ .T.slice(0, 2);
const banners2 = _data_bannerSlider__WEBPACK_IMPORTED_MODULE_1__/* .bannerSlider.slice */ .T.slice(2, 4);
const banners3 = _data_bannerSlider__WEBPACK_IMPORTED_MODULE_1__/* .bannerSlider.slice */ .T.slice(4, 6);
const BannerSlider = ({ className ="" , isBannerTwo =false , isBannerThree =false , slides =[] ,  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: `banner-slider ${className}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_4__.Swiper, {
            ...options,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "swiper-wrapper",
                    children: slides.map((singleSlide)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__.SwiperSlide, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SingleBanner__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                singleSlide: singleSlide,
                                isBannerTwo: isBannerTwo,
                                isBannerThree: isBannerThree
                            })
                        }, singleSlide.id)
                    )
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "prev slick-arrow",
                            id: "main-slider__swiper-button-prev",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "flaticon-back"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "next slick-arrow",
                            id: "main-slider__swiper-button-next",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "flaticon-next"
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BannerSlider);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2581:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3015);
/* harmony import */ var _Reuseable_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8129);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_3__]);
swiper_react__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const SingleBanner = ({ singleSlide ={} , isBannerTwo =false , isBannerThree =false ,  })=>{
    const { isActive  } = (0,swiper_react__WEBPACK_IMPORTED_MODULE_3__.useSwiperSlide)();
    const { bg , text , title , banner , banner1 , banner2  } = singleSlide;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `banner-area bg_cover d-flex ${isBannerThree ? "banner-3-area align-items-end" : "align-items-center"}`,
        style: {
            backgroundImage: `url(${bg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Container, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {
                    className: isBannerTwo || isBannerThree ? "justify-content-start" : "justify-content-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                        lg: 8,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: `banner-content${!isBannerTwo && !isBannerThree ? " text-center" : ""}`,
                            children: [
                                !isBannerTwo && !isBannerThree && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: `box${isActive ? " animated fadeInDown" : ""}`
                                }),
                                !isBannerTwo && !isBannerThree && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                !isBannerTwo && !isBannerThree && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: isActive ? " animated fadeInLeft" : "",
                                    children: text
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: `title${isActive ? " animated fadeInRightBig" : ""}`,
                                    style: {
                                        maxWidth: "100%",
                                        width: "100%",
                                        wordWrap: "break-word",
                                        overflowWrap: "break-word"
                                    },
                                    children: title
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Reuseable_Link__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                    className: `main-btn${isActive ? " animated zoomIn" : ""}`,
                                    href: "/news",
                                    children: "Latest News"
                                })
                            ]
                        })
                    })
                })
            }),
            !isBannerTwo && !isBannerThree && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `banner-line${isActive ? " animated fadeInRightBig" : ""}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Image, {
                    src: banner,
                    alt: ""
                })
            }),
            isBannerTwo && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "banner-color-shadow",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Image, {
                            src: banner,
                            alt: ""
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "banner-line",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Image, {
                            src: banner1,
                            alt: ""
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "banner-line-2",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Image, {
                            src: banner2,
                            alt: ""
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SingleBanner);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3948:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ bannerSlider)
/* harmony export */ });
/* harmony import */ var _images_banner_color_shadow_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3838);
/* harmony import */ var _images_banner_line_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8826);
/* harmony import */ var _images_shape_banner_line_1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5363);
/* harmony import */ var _images_shape_banner_line_2_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1953);




const bannerSlider = [
    {
        id: 1,
        bg: "bg.jpg",
        text: "Raising Money Has Never Been So Easy",
        title: "Crowdfunding Platforms",
        banner: _images_banner_line_png__WEBPACK_IMPORTED_MODULE_1__["default"]
    },
    {
        id: 2,
        bg: "bg2.jpg",
        text: "Raising Money Has Never Been So Easy",
        title: "Crowdfunding Platforms",
        banner: _images_banner_line_png__WEBPACK_IMPORTED_MODULE_1__["default"]
    },
    {
        id: 3,
        bg: "bg3.jpg",
        title: "Join the Journey From Idea to Market",
        banner: _images_banner_color_shadow_png__WEBPACK_IMPORTED_MODULE_0__["default"],
        banner1: _images_shape_banner_line_1_png__WEBPACK_IMPORTED_MODULE_2__["default"],
        banner2: _images_shape_banner_line_2_png__WEBPACK_IMPORTED_MODULE_3__["default"]
    },
    {
        id: 4,
        bg: "bg4.jpg",
        title: "Join the Journey From Idea to Market",
        banner: _images_banner_color_shadow_png__WEBPACK_IMPORTED_MODULE_0__["default"],
        banner1: _images_shape_banner_line_1_png__WEBPACK_IMPORTED_MODULE_2__["default"],
        banner2: _images_shape_banner_line_2_png__WEBPACK_IMPORTED_MODULE_3__["default"]
    },
    {
        id: 5,
        bg: "bg5.jpg",
        title: "We help surface innovations in tech"
    },
    {
        id: 6,
        bg: "banner-bg-2.jpg",
        title: "We help surface innovations in tech"
    }, 
];


/***/ })

};
;