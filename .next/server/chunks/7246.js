"use strict";
exports.id = 7246;
exports.ids = [7246];
exports.modules = {

/***/ 6658:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ProjectDetails_ProjectDetailsArea)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
// EXTERNAL MODULE: ./src/components/Reuseable/Link.js
var Link = __webpack_require__(8129);
;// CONCATENATED MODULE: ./src/components/circularProgress/progress.js

const CircularProgressBar = ({ progress  })=>{
    const radius = 35; // Adjust as needed
    const strokeWidth = 5; // Adjust as needed
    const normalizedRadius = radius - strokeWidth * 0.5;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - progress / 100 * circumference;
    return /*#__PURE__*/ _jsxs("svg", {
        width: radius * 2,
        height: radius * 2,
        children: [
            /*#__PURE__*/ _jsx("circle", {
                stroke: "#e0e0df",
                fill: "white",
                strokeWidth: strokeWidth,
                r: normalizedRadius,
                cx: radius,
                cy: radius
            }),
            /*#__PURE__*/ _jsx("circle", {
                stroke: "#76c7c0",
                fill: "transparent",
                strokeWidth: strokeWidth,
                strokeDasharray: circumference + " " + circumference,
                strokeDashoffset: strokeDashoffset,
                r: normalizedRadius,
                cx: radius,
                cy: radius
            }),
            /*#__PURE__*/ _jsx("text", {
                x: "50%",
                y: "50%",
                alignmentBaseline: "middle",
                textAnchor: "middle",
                fill: "#76c7c0",
                children: `${Math.round(progress)}%`
            })
        ]
    });
};
/* harmony default export */ const progress = ((/* unused pure expression or super */ null && (CircularProgressBar)));

;// CONCATENATED MODULE: ./src/components/ProjectsArea/ProjectDetails/ProjectDetailsArea.js





const ProjectDetailsArea = ({ project , sum  })=>{
    const { name , image , description , target , startDate , targetDate , Status  } = project;
    const { 0: imageLoad , 1: setImageLoad  } = (0,external_react_.useState)(false);
    const amount = sum && sum.sum ? sum.sum : 0;
    const progress = amount / parseInt(target) * 100;
    const handleImageLoad = ()=>{
        setImageLoad(true);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "project-details-area pt-120 pb-50",
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                        lg: 6,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "project-details-thumb",
                            children: [
                                !imageLoad && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "d-flex justify-content-center align-items-center",
                                    style: {
                                        height: "300px",
                                        width: "100%"
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "pageLoader"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Image, {
                                    src: image,
                                    alt: name,
                                    width: 450,
                                    height: 490,
                                    onLoad: handleImageLoad,
                                    style: {
                                        display: imageLoad ? "block" : "none"
                                    }
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "icon",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fa fa-heart"
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                        lg: 6,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "project-details-content",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "details-btn",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: typeof Status === "string" ? Status : "Unknown Status"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "title",
                                    children: typeof name === "string" ? name : "Project Name"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: typeof description === "string" ? description : "No description available."
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "project-details-item mt-5",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "item text-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                    className: "title",
                                                    children: target
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "Target"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "item text-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                    className: "title",
                                                    children: amount
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "Amount Raised"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "item text-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                    className: "title",
                                                    children: new Date(startDate).toLocaleDateString()
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "Start Date"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "item text-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                    className: "title",
                                                    children: new Date(targetDate).toLocaleDateString()
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "Target Date"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "d-flex justify-content-between mt-30",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "project-btn mt-25 mr-15",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.Z, {
                                            href: `/donation-project/${project.id}`,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "main-btn",
                                                href: "#",
                                                children: "Donate Now"
                                            })
                                        })
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const ProjectDetails_ProjectDetailsArea = (ProjectDetailsArea);


/***/ }),

/***/ 7914:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_projectsArea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7513);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Reuseable_Title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7539);
/* harmony import */ var _SingleProject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9844);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_6__]);
axios__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const { tagline , title  } = _data_projectsArea__WEBPACK_IMPORTED_MODULE_1__/* .similarProjects */ .wp;
const SimilarProjects = ({ projects  })=>{
    const { 0: projectSums , 1: setProjectSums  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const fetchProjectSums = async ()=>{
            const newProjectSums = {}; // Create a new object
            await Promise.all(projects.map(async (project)=>{
                try {
                    const response = await axios__WEBPACK_IMPORTED_MODULE_6__["default"].get(`https://api.olympiquemnihla.com/project-donation/get-sum-of-donations/${project.id}`);
                    newProjectSums[project.id] = response.data.sum;
                } catch (error) {
                    console.error(`Error fetching sum of donations for project ${project.id}:`, error);
                }
            }));
            setProjectSums(newProjectSums); // Set the new object as state
        };
        fetchProjectSums();
    }, [
        projects
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "explore-projects-area explore-projects-page-area",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Container, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Row, {
                    className: "justify-content-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
                        lg: 8,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Reuseable_Title__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            title: title,
                            tagline: tagline,
                            className: "text-center"
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Row, {
                    className: "justify-content-center",
                    children: projects.length > 0 && projects.map((project)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
                            lg: 4,
                            md: 6,
                            sm: 9,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SingleProject__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                project: project,
                                projectSums: projectSums
                            })
                        }, project.id)
                    )
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SimilarProjects);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;