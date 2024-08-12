"use strict";
exports.id = 7032;
exports.ids = [7032];
exports.modules = {

/***/ 7032:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ TeamArea_TeamMainArea)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/data/teamArea.js
var teamArea = __webpack_require__(1261);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
;// CONCATENATED MODULE: ./src/components/TeamArea/TeamItem.js



const TeamItem = ({ team ={}  })=>{
    const { image , socials , name , tagline  } = team;
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
        lg: 4,
        md: 7,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "team-item mt-30",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "team-thumb",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Image, {
                            src: __webpack_require__(990)(`./${image}`).default.src,
                            alt: "team"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "share",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fa fa-share-alt"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                    children: socials.map(({ id , icon , href  })=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: href,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: icon
                                                })
                                            })
                                        }, id)
                                    )
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "team-content text-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                            className: "title",
                            children: name
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: tagline
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const TeamArea_TeamItem = (TeamItem);

;// CONCATENATED MODULE: ./src/components/TeamArea/TeamMainArea.js





const TeamMainArea = ({ className ="" , count =3  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `team-main-area ${className}`,
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Row, {
                className: "justify-content-center",
                children: teamArea/* teamMainArea.slice */._.slice(0, count).map((team)=>/*#__PURE__*/ jsx_runtime_.jsx(TeamArea_TeamItem, {
                        team: team
                    }, team.id)
                )
            })
        })
    });
};
/* harmony default export */ const TeamArea_TeamMainArea = (TeamMainArea);


/***/ }),

/***/ 1261:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ teamArea),
/* harmony export */   "_": () => (/* binding */ teamMainArea)
/* harmony export */ });
/* harmony import */ var _images_team_bg_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3278);
/* harmony import */ var _siteFooter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4280);


const teamArea = {
    bg: _images_team_bg_jpg__WEBPACK_IMPORTED_MODULE_0__["default"],
    tagline: "Meet Our Team Members",
    title: "Experienced People"
};
const teamMainArea = [
    {
        id: 1,
        image: "team-1.jpg",
        socials: _siteFooter__WEBPACK_IMPORTED_MODULE_1__/* .socials2 */ .b,
        name: "Sarah Albert",
        tagline: "Founder"
    },
    {
        id: 2,
        image: "team-2.jpg",
        socials: _siteFooter__WEBPACK_IMPORTED_MODULE_1__/* .socials2 */ .b,
        name: "Mike Hardson",
        tagline: "Founder"
    },
    {
        id: 3,
        image: "team-3.jpg",
        socials: _siteFooter__WEBPACK_IMPORTED_MODULE_1__/* .socials2 */ .b,
        name: "Aisha Martin",
        tagline: "Founder"
    },
    {
        id: 4,
        image: "team-4.jpg",
        socials: _siteFooter__WEBPACK_IMPORTED_MODULE_1__/* .socials2 */ .b,
        name: "Sarah Albert",
        tagline: "Founder"
    },
    {
        id: 5,
        image: "team-5.jpg",
        socials: _siteFooter__WEBPACK_IMPORTED_MODULE_1__/* .socials2 */ .b,
        name: "Mike Hardson",
        tagline: "Founder"
    },
    {
        id: 6,
        image: "team-6.jpg",
        socials: _siteFooter__WEBPACK_IMPORTED_MODULE_1__/* .socials2 */ .b,
        name: "Aisha Martin",
        tagline: "Founder"
    }, 
];


/***/ })

};
;