"use strict";
exports.id = 4699;
exports.ids = [4699];
exports.modules = {

/***/ 4699:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ NextBigThing_NextBigThing)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/assets/images/next-big-thing-thumb.png
var next_big_thing_thumb = __webpack_require__(5059);
;// CONCATENATED MODULE: ./src/data/nextBigThing.js

const nextBigThing_text = "There are many variations of passages of available but the majority have in some form, by injected humou or words which don't look even slightly believable. There are many variations of but the majority have suffered.";
const nextBigThing = {
    tagline: "Get to Know Krowd",
    title: "Fund the Next Big Thing",
    image: next_big_thing_thumb["default"],
    text: nextBigThing_text,
    tabs: [
        {
            id: "pills-home",
            tagline: "Our Mission",
            text: nextBigThing_text
        },
        {
            id: "pills-profile",
            tagline: "Our Vision",
            text: nextBigThing_text
        },
        {
            id: "pills-contact",
            tagline: "Our History",
            text: nextBigThing_text
        }, 
    ],
    lists: [
        "Nsectetur cing elit.",
        "Suspe ndisse suscipit sagittis leo.",
        "Entum estibulum dignissim posuere.",
        "If you are going to use a passage.",
        "Lorem Ipsum on the tend to repeat.", 
    ]
};

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
;// CONCATENATED MODULE: ./src/components/NextBigThing/NextBigThing.js




const { tagline , title , tabs , text: NextBigThing_text , image: NextBigThing_image , lists  } = nextBigThing;
const NavItem = ({ tab ={} , current , handleCurrent  })=>{
    const { tagline: tagline1 , id  } = tab;
    const active = id === current;
    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
        className: "nav-item",
        role: "presentation",
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            onClick: ()=>handleCurrent(id)
            ,
            className: `nav-link cursor-pointer${active ? " active" : ""}`,
            role: "tab",
            children: tagline1
        })
    });
};
const TabContent = ({ tab ={} , current  })=>{
    const { id , text: text1  } = tab;
    const active = id === current;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `tab-pane animated${active ? " fadeIn show active" : ""}`,
        id: id,
        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
            children: text1
        })
    });
};
const NextBigThing = ({ className =""  })=>{
    const { 0: current1 , 1: setCurrent  } = (0,external_react_.useState)("pills-home");
    const handleCurrent = (current)=>{
        setCurrent(current);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: `next-big-thing-area ${className}`,
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                className: "align-items-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                        lg: 6,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "next-big-thing-content",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: tagline
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "title",
                                    children: title
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                    className: "nav nav-pills",
                                    id: "pills-tab",
                                    role: "tablist",
                                    children: tabs.map((tab)=>/*#__PURE__*/ jsx_runtime_.jsx(NavItem, {
                                            tab: tab,
                                            current: current1,
                                            handleCurrent: handleCurrent
                                        }, tab.id)
                                    )
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "tab-content",
                                    id: "pills-tabContent",
                                    children: tabs.map((tab)=>/*#__PURE__*/ jsx_runtime_.jsx(TabContent, {
                                            tab: tab,
                                            current: current1
                                        }, tab.id)
                                    )
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                        lg: 6,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "next-big-thing-content-2",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: NextBigThing_text
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "next-big-thing-list",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "thumb",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Image, {
                                                src: NextBigThing_image.src,
                                                alt: ""
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "list",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                children: lists.map((list, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "flaticon-check"
                                                            }),
                                                            " ",
                                                            list
                                                        ]
                                                    }, i)
                                                )
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const NextBigThing_NextBigThing = (NextBigThing);


/***/ })

};
;