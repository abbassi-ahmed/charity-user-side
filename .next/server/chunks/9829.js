"use strict";
exports.id = 9829;
exports.ids = [9829];
exports.modules = {

/***/ 9829:
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
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3877);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3015);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9648);
/* harmony import */ var _Reuseable_Title__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7539);
/* harmony import */ var _SingleProject__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9844);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_3__, swiper_react__WEBPACK_IMPORTED_MODULE_4__, axios__WEBPACK_IMPORTED_MODULE_5__]);
([swiper__WEBPACK_IMPORTED_MODULE_3__, swiper_react__WEBPACK_IMPORTED_MODULE_4__, axios__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








swiper__WEBPACK_IMPORTED_MODULE_3__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_3__.Autoplay,
    swiper__WEBPACK_IMPORTED_MODULE_3__.Pagination
]);
const options = {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: false,
    autoplay: {
        delay: 3000
    },
    pagination: {
        clickable: true
    },
    breakpoints: {
        1200: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        0: {
            slidesPerView: 1,
            spaceBetween: 0
        }
    }
};
const ProjectsArea = ({ className =""  })=>{
    const { 0: projects , 1: setProjects  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: tagline , 1: setTagline  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("Explore projects");
    const { 0: title , 1: setTitle  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("Projects");
    const { 0: projectSums , 1: setProjectSums  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const hasFetchedProjects = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false); // Ref to track if the data has been fetched
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const fetchProjects = async ()=>{
            try {
                const response1 = await axios__WEBPACK_IMPORTED_MODULE_5__["default"].get("http://194.164.54.216:3636/projects/find-all");
                setProjects(response1.data);
                const projectSumsCopy = {
                    ...projectSums
                };
                await Promise.all(projects.map(async (project)=>{
                    try {
                        const response = await axios__WEBPACK_IMPORTED_MODULE_5__["default"].get(`http://194.164.54.216:3636/project-donation/get-sum-of-donations/${project.id}`);
                        projectSumsCopy[project.id] = response.data.sum;
                    } catch (error) {
                        console.error(`Error fetching sum of donations for project ${project.id}:`, error);
                    }
                }));
                setProjectSums(projectSumsCopy);
            } catch (error) {
                console.error("Error fetching the projects", error);
            }
        };
        if (!hasFetchedProjects.current) {
            fetchProjects();
            hasFetchedProjects.current = true;
        }
    }, [
        projectSums,
        projects
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
            className: `explore-projects-area ${className}`,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Container, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {
                        className: "justify-content-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                            lg: 8,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Reuseable_Title__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                tagline: tagline,
                                title: title,
                                className: "text-center"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "explore-project-active",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__.Swiper, {
                            ...options,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "swiper-wrapper",
                                children: projects.slice(0, 4).map((project)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__.SwiperSlide, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SingleProject__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                            project: project,
                                            projectSums: projectSums
                                        })
                                    }, project.id)
                                )
                            })
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectsArea);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;