"use strict";
exports.id = 5839;
exports.ids = [5839];
exports.modules = {

/***/ 5839:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: default

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/data/projectsArea.js
var projectsArea = __webpack_require__(7513);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
;// CONCATENATED MODULE: ./src/components/NewsArea/BlogDetails/CommentForm.js




const CommentForm_CommentForm = ()=>{
    const onSubmit = (data)=>console.log(data)
    ;
    return /*#__PURE__*/ _jsxs("div", {
        className: "comment-form me-1",
        children: [
            /*#__PURE__*/ _jsx("h3", {
                className: "comment-one__block-title",
                children: "Leave a Comment"
            }),
            /*#__PURE__*/ _jsx("form", {
                onSubmit: handleSubmit(onSubmit),
                className: "contact-one__form",
                children: /*#__PURE__*/ _jsxs(Row, {
                    children: [
                        /*#__PURE__*/ _jsx(Col, {
                            lg: 6,
                            children: /*#__PURE__*/ _jsx("div", {
                                className: "input-box",
                                children: /*#__PURE__*/ _jsx("input", {
                                    type: "text",
                                    placeholder: "Name",
                                    name: "name"
                                })
                            })
                        }),
                        /*#__PURE__*/ _jsx(Col, {
                            lg: 6,
                            children: /*#__PURE__*/ _jsx("div", {
                                className: "input-box",
                                children: /*#__PURE__*/ _jsx("input", {
                                    type: "text",
                                    placeholder: "Email",
                                    name: "email"
                                })
                            })
                        }),
                        /*#__PURE__*/ _jsx(Col, {
                            lg: 12,
                            children: /*#__PURE__*/ _jsx("div", {
                                className: "input-box",
                                children: /*#__PURE__*/ _jsx("textarea", {
                                    placeholder: "Write Comment",
                                    name: "message"
                                })
                            })
                        }),
                        /*#__PURE__*/ _jsx(Col, {
                            lg: 12,
                            className: "text-left",
                            children: /*#__PURE__*/ _jsx("div", {
                                className: "input-box",
                                children: /*#__PURE__*/ _jsx("button", {
                                    type: "submit",
                                    className: "main-btn",
                                    children: "Submit comment"
                                })
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const BlogDetails_CommentForm = ((/* unused pure expression or super */ null && (CommentForm_CommentForm)));

;// CONCATENATED MODULE: ./src/components/NewsArea/BlogDetails/CommentOne.js



const CommentOneSingle = ({ comment ={}  })=>{
    const { image , name , date , text  } = comment;
    return /*#__PURE__*/ _jsxs("div", {
        className: "comment-one__single",
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: "comment-one__image",
                children: /*#__PURE__*/ _jsx(Image, {
                    src: __webpack_require__(990)(`./${image}`).default.src,
                    alt: ""
                })
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: "comment-one__content",
                children: [
                    /*#__PURE__*/ _jsxs("h3", {
                        children: [
                            name,
                            " ",
                            /*#__PURE__*/ _jsxs("span", {
                                className: "comment-one__date",
                                children: [
                                    " ",
                                    date
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsx("p", {
                        children: text
                    })
                ]
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "blog-btn",
                children: /*#__PURE__*/ _jsx("a", {
                    href: "#",
                    className: "main-btn",
                    children: "Reply"
                })
            })
        ]
    });
};
const CommentOne_CommentOne = ({ comments =[] , className =""  })=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: `comment-one ${className}`,
        children: [
            /*#__PURE__*/ _jsxs("h3", {
                className: "comment-one__block-title",
                children: [
                    comments.length,
                    " Comments"
                ]
            }),
            comments.map((comment)=>/*#__PURE__*/ _jsx(CommentOneSingle, {
                    comment: comment
                }, comment.id)
            )
        ]
    });
};
/* harmony default export */ const BlogDetails_CommentOne = ((/* unused pure expression or super */ null && (CommentOne_CommentOne)));

;// CONCATENATED MODULE: ./src/components/ProjectsArea/ProjectDetails/ProjectDetailsComments.js





const { id , comments  } = projectsArea/* projectDetailsComments */.tC;
const ProjectDetailsComments_ProjectDetailsComments = ({ getClassName  })=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: getClassName(id),
        id: "pills-4",
        role: "tabpanel",
        children: [
            /*#__PURE__*/ _jsx(CommentOne, {
                comments: comments,
                className: "mt-50"
            }),
            /*#__PURE__*/ _jsx(CommentForm, {})
        ]
    });
};
/* harmony default export */ const ProjectDetails_ProjectDetailsComments = ((/* unused pure expression or super */ null && (ProjectDetailsComments_ProjectDetailsComments)));

// EXTERNAL MODULE: ./src/components/FaqArea/Faqs.js
var FaqArea_Faqs = __webpack_require__(9322);
;// CONCATENATED MODULE: ./src/components/ProjectsArea/ProjectDetails/ProjectDetailsFaq.js




const { faqs , id: ProjectDetailsFaq_id  } = projectsArea/* projectDetailsFaq */.Ar;
const ProjectDetailsFaq_ProjectDetailsFaq = ({ getClassName  })=>{
    return /*#__PURE__*/ _jsx("div", {
        className: getClassName(ProjectDetailsFaq_id),
        id: ProjectDetailsFaq_id,
        role: "tabpanel",
        children: /*#__PURE__*/ _jsx(Faqs, {
            faqs: faqs,
            className: "mt-70"
        })
    });
};
/* harmony default export */ const ProjectDetails_ProjectDetailsFaq = ((/* unused pure expression or super */ null && (ProjectDetailsFaq_ProjectDetailsFaq)));

;// CONCATENATED MODULE: ./src/components/ProjectsArea/ProjectDetails/ProjectDetailsSidebar.js




const { info , perks  } = projectsArea/* projectDetailsSidebar */.tL;
const ProjectDetailsPark = ({ perk ={}  })=>{
    const { id , image , sold , off , amount , date , claimed , totalClaimed  } = perk;
    return /*#__PURE__*/ _jsxs("div", {
        className: `project-details-park mt-30 box${id === 2 ? " item-2" : ""}`,
        children: [
            /*#__PURE__*/ _jsx("h4", {
                className: "title",
                children: "Select a Perk"
            }),
            image && /*#__PURE__*/ _jsx(Image, {
                src: image.src,
                alt: ""
            }),
            /*#__PURE__*/ _jsxs("span", {
                children: [
                    "SAPPHIRE(",
                    sold,
                    " sold already)"
                ]
            }),
            /*#__PURE__*/ _jsxs("p", {
                children: [
                    "$",
                    amount,
                    " (",
                    off,
                    "% OFF)"
                ]
            }),
            /*#__PURE__*/ _jsxs("ul", {
                children: [
                    /*#__PURE__*/ _jsx("li", {
                        children: "Estimated Shipping"
                    }),
                    /*#__PURE__*/ _jsx("li", {
                        children: /*#__PURE__*/ _jsx("span", {
                            children: date
                        })
                    }),
                    /*#__PURE__*/ _jsxs("li", {
                        children: [
                            claimed,
                            " out of ",
                            totalClaimed,
                            " ",
                            /*#__PURE__*/ _jsx("span", {
                                children: "claimed"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ _jsx("a", {
                className: "main-btn",
                href: "#",
                children: "Continue now"
            })
        ]
    });
};
const ProjectDetailsSidebar_ProjectDetailsSidebar = ()=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: "project-details-sidebar",
        children: [
            /*#__PURE__*/ _jsxs("div", {
                className: "project-details-info mt-70 box",
                children: [
                    /*#__PURE__*/ _jsxs("div", {
                        className: "info",
                        children: [
                            /*#__PURE__*/ _jsx(Image, {
                                src: info.image.src,
                                alt: ""
                            }),
                            /*#__PURE__*/ _jsx("h5", {
                                className: "title",
                                children: info.name
                            }),
                            /*#__PURE__*/ _jsxs("span", {
                                children: [
                                    info.backed,
                                    " backed"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsx("p", {
                        children: info.text
                    })
                ]
            }),
            perks.map((perk)=>/*#__PURE__*/ _jsx(ProjectDetailsPark, {
                    perk: perk
                }, perk.id)
            )
        ]
    });
};
/* harmony default export */ const ProjectDetails_ProjectDetailsSidebar = ((/* unused pure expression or super */ null && (ProjectDetailsSidebar_ProjectDetailsSidebar)));

;// CONCATENATED MODULE: ./src/components/ProjectsArea/ProjectDetails/ProjectDetailsStory.js




const { id: ProjectDetailsStory_id , text: ProjectDetailsStory_text , lists , text2 , items , text3 , image: ProjectDetailsStory_image , images: ProjectDetailsStory_images  } = projectsArea/* projectDetailsStory */.jw;
const ProjectDetailsStory_ProjectDetailsStory = ({ getClassName  })=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: getClassName?.(ProjectDetailsStory_id),
        id: ProjectDetailsStory_id,
        role: "tabpanel",
        children: [
            /*#__PURE__*/ _jsxs("div", {
                className: "project-details-content-top",
                children: [
                    /*#__PURE__*/ _jsx("p", {
                        children: ProjectDetailsStory_text
                    }),
                    /*#__PURE__*/ _jsx("ul", {
                        children: lists.map((list, i)=>/*#__PURE__*/ _jsxs("li", {
                                children: [
                                    /*#__PURE__*/ _jsx("i", {
                                        className: "flaticon-check"
                                    }),
                                    " ",
                                    list
                                ]
                            }, i)
                        )
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "project-details-thumb",
                        children: /*#__PURE__*/ _jsx(Image, {
                            src: ProjectDetailsStory_image.src,
                            alt: ""
                        })
                    })
                ]
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: "project-details-item",
                children: [
                    /*#__PURE__*/ _jsx("p", {
                        children: text2
                    }),
                    items.map(({ id: id1 , title , text: text1 , className =""  })=>/*#__PURE__*/ _jsxs("div", {
                            className: `item ${className}`,
                            children: [
                                /*#__PURE__*/ _jsx("i", {
                                    className: "flaticon-checkmark"
                                }),
                                /*#__PURE__*/ _jsx("h5", {
                                    className: "title",
                                    children: title
                                }),
                                /*#__PURE__*/ _jsx("p", {
                                    children: text1
                                })
                            ]
                        }, id1)
                    ),
                    /*#__PURE__*/ _jsx(Row, {
                        children: ProjectDetailsStory_images.map((image1, i)=>/*#__PURE__*/ _jsx(Col, {
                                lg: 6,
                                md: 6,
                                sm: 6,
                                children: /*#__PURE__*/ _jsx("div", {
                                    className: "project-details-thumb",
                                    children: /*#__PURE__*/ _jsx(Image, {
                                        src: image1.src,
                                        alt: ""
                                    })
                                })
                            }, i)
                        )
                    }),
                    /*#__PURE__*/ _jsx("p", {
                        className: "text",
                        children: text3
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const ProjectDetails_ProjectDetailsStory = ((/* unused pure expression or super */ null && (ProjectDetailsStory_ProjectDetailsStory)));

;// CONCATENATED MODULE: ./src/components/ProjectsArea/ProjectDetails/ProjectDetailsUpdates.js




const { id: ProjectDetailsUpdates_id , updates  } = projectsArea/* projectDetailsUpdates */.qZ;
const ProjectDetailsUpdate = ({ update ={}  })=>{
    const { title , info , text , text2 , image , id: id1  } = update;
    return /*#__PURE__*/ _jsxs("div", {
        className: "project-details-updates",
        children: [
            /*#__PURE__*/ _jsxs("div", {
                className: "project-details-updates-top",
                children: [
                    /*#__PURE__*/ _jsx("h3", {
                        className: "title",
                        children: title
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: "info-updates d-block d-sm-flex justify-content-between align-items-center",
                        children: [
                            /*#__PURE__*/ _jsxs("div", {
                                className: "info",
                                children: [
                                    /*#__PURE__*/ _jsx(Image, {
                                        src: info.image.src,
                                        alt: ""
                                    }),
                                    /*#__PURE__*/ _jsxs("span", {
                                        children: [
                                            "by",
                                            " ",
                                            /*#__PURE__*/ _jsxs("span", {
                                                children: [
                                                    info.name,
                                                    /*#__PURE__*/ _jsxs("span", {
                                                        children: [
                                                            " ",
                                                            info.date
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ _jsx("div", {
                                className: "update",
                                children: /*#__PURE__*/ _jsxs("span", {
                                    children: [
                                        "#",
                                        id1,
                                        " Update"
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: "project-details-updates-content",
                children: [
                    /*#__PURE__*/ _jsx("p", {
                        children: text
                    }),
                    /*#__PURE__*/ _jsx("p", {
                        className: "text",
                        children: text2
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "project-updates-thumb mt-50",
                        children: /*#__PURE__*/ _jsx(Image, {
                            src: __webpack_require__(990)(`./${image}`).default.src,
                            alt: ""
                        })
                    })
                ]
            })
        ]
    });
};
const ProjectDetailsUpdates_ProjectDetailsUpdates = ({ getClassName  })=>{
    return /*#__PURE__*/ _jsx("div", {
        className: getClassName(ProjectDetailsUpdates_id),
        id: ProjectDetailsUpdates_id,
        children: updates.map((update)=>/*#__PURE__*/ _jsx(ProjectDetailsUpdate, {
                update: update
            }, update.id)
        )
    });
};
/* harmony default export */ const ProjectDetails_ProjectDetailsUpdates = ((/* unused pure expression or super */ null && (ProjectDetailsUpdates_ProjectDetailsUpdates)));

;// CONCATENATED MODULE: ./src/components/ProjectsArea/ProjectDetails/ProjectDetailsContent.js









const ProjectDetailsContent = ()=>{
    const { 0: current , 1: setCurrent  } = useState("pills-home");
    const getClassName = (id = "")=>{
        const active = current === id;
        return `tab-pane animated${active ? " fadeIn show active" : ""}`;
    };
    return /*#__PURE__*/ _jsx("section", {
        className: "project-details-content-area pb-110",
        children: /*#__PURE__*/ _jsx(Container, {
            children: /*#__PURE__*/ _jsxs(Row, {
                className: "justify-content-center",
                children: [
                    /*#__PURE__*/ _jsxs(Col, {
                        lg: 8,
                        children: [
                            /*#__PURE__*/ _jsx("div", {
                                className: "tab-btns",
                                children: /*#__PURE__*/ _jsx("ul", {
                                    className: "nav nav-pills",
                                    id: "pills-tab",
                                    role: "tablist",
                                    children: projectDetailsTabBtns.map(({ id , name  })=>/*#__PURE__*/ _jsx("li", {
                                            className: "nav-item",
                                            role: "presentation",
                                            children: /*#__PURE__*/ _jsx("a", {
                                                onClick: ()=>setCurrent(id)
                                                ,
                                                className: `nav-link cursor-pointer${id === current ? " active" : ""}`,
                                                role: "tab",
                                                children: name
                                            })
                                        }, id)
                                    )
                                })
                            }),
                            /*#__PURE__*/ _jsxs("div", {
                                className: "tab-content",
                                id: "pills-tabContent",
                                children: [
                                    /*#__PURE__*/ _jsx(ProjectDetailsStory, {
                                        getClassName: getClassName
                                    }),
                                    /*#__PURE__*/ _jsx(ProjectDetailsFaq, {
                                        getClassName: getClassName
                                    }),
                                    /*#__PURE__*/ _jsx(ProjectDetailsUpdates, {
                                        getClassName: getClassName
                                    }),
                                    /*#__PURE__*/ _jsx(ProjectDetailsComments, {
                                        getClassName: getClassName
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsx(Col, {
                        lg: 4,
                        md: 7,
                        sm: 9,
                        children: /*#__PURE__*/ _jsx(ProjectDetailsSidebar, {})
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const ProjectDetails_ProjectDetailsContent = ((/* unused pure expression or super */ null && (ProjectDetailsContent)));


/***/ })

};
;