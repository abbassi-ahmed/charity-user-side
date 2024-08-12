"use strict";
exports.id = 2765;
exports.ids = [2765];
exports.modules = {

/***/ 7585:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);



const BlogAuthor = ({ author  })=>{
    const { avatar , firstName , lastName , bio  } = author;
    return /*#__PURE__*/ _jsxs("div", {
        className: "blog-author",
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: "blog-author__image",
                children: /*#__PURE__*/ _jsx(Image, {
                    src: avatar,
                    alt: "author"
                })
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: "blog-author__content",
                children: [
                    /*#__PURE__*/ _jsx("h3", {
                        children: `${firstName} ${lastName}`
                    }),
                    /*#__PURE__*/ _jsx("p", {
                        children: bio
                    })
                ]
            })
        ]
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (BlogAuthor)));


/***/ }),

/***/ 2765:
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
/* harmony import */ var _BlogAuthor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7585);
/* harmony import */ var _BlogDetailsMain__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2146);
/* harmony import */ var _BlogDetailsSidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(232);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_6__]);
axios__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// import { useParams } from "react-router-dom";





const BlogDetails = ({ id  })=>{
    // const { id } = useParams();
    const { 0: blog , 1: setBlog  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const fetchBlog = async ()=>{
            try {
                if (!id) {
                    return;
                }
                const response = await axios__WEBPACK_IMPORTED_MODULE_6__["default"].get(`http://194.164.54.216:3636/blogs/find-one/${id}`);
                setBlog(response.data);
            } catch (error) {
                console.error("Error fetching blog details:", error);
            }
        };
        fetchBlog();
    }, [
        id
    ]);
    if (!blog) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: "Loading..."
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "blog-details",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Container, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {
                className: "justify-content-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                        lg: 8,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BlogDetailsMain__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            blog: blog
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                        lg: 4,
                        md: 6,
                        sm: 7,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BlogDetailsSidebar__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogDetails);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2146:
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



const BlogDetailsMain = ({ blog  })=>{
    const { image , createdAt , admin , title , content , tags  } = blog;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "blog-details__main",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "blog-details__image",
                style: {
                    width: "100%",
                    height: "400px"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Image, {
                    src: image,
                    alt: "thumb",
                    style: {
                        width: "100%",
                        height: "100%",
                        objectFit: "contain"
                    }
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "blog-details__content",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: new Date(createdAt).toLocaleDateString()
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "blog-one__meta",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                            href: "#",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "fa fa-user-o"
                                }),
                                " ",
                                `${admin.firstName} ${admin.lastName}`
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        children: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: content
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogDetailsMain);


/***/ }),

/***/ 232:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ BlogDetails_BlogDetailsSidebar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/Header/SearchIcon.js
var SearchIcon = __webpack_require__(5970);
// EXTERNAL MODULE: ./src/components/Reuseable/Link.js
var Link = __webpack_require__(8129);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
// EXTERNAL MODULE: ./src/assets/images/author.jpg
var author = __webpack_require__(5269);
// EXTERNAL MODULE: ./src/assets/images/blog-details-thumb.jpg
var blog_details_thumb = __webpack_require__(4103);
// EXTERNAL MODULE: ./src/data/headerData.js
var headerData = __webpack_require__(5200);
;// CONCATENATED MODULE: ./src/data/newsArea.js



const newsArea = {
    tagline: "All From the Blog",
    title: "News & Articles",
    newses: [
        {
            id: 1,
            image: "news-1.jpg",
            image2: "news-item-1.jpg",
            date: "3 April, 2020",
            admin: "Admin",
            comments: 2,
            title: "A day in the life of entrepreneur & co-founders"
        },
        {
            id: 2,
            image: "news-1.jpg",
            image2: "news-item-2.jpg",
            date: "3 April, 2020",
            admin: "Admin",
            comments: 2,
            title: "A day in the life of entrepreneur & co-founders"
        },
        {
            id: 3,
            image: "news-1.jpg",
            image2: "news-item-3.jpg",
            date: "3 April, 2020",
            admin: "Admin",
            comments: 2,
            title: "A day in the life of entrepreneur & co-founders"
        },
        {
            id: 4,
            image: "news-1.jpg",
            image2: "news-item-4.jpg",
            date: "3 April, 2020",
            admin: "Admin",
            comments: 2,
            title: "A day in the life of entrepreneur & co-founders"
        },
        {
            id: 5,
            image: "news-1.jpg",
            image2: "news-item-5.jpg",
            date: "3 April, 2020",
            admin: "Admin",
            comments: 2,
            title: "A day in the life of entrepreneur & co-founders"
        },
        {
            id: 6,
            image: "news-1.jpg",
            image2: "news-item-6.jpg",
            date: "3 April, 2020",
            admin: "Admin",
            comments: 2,
            title: "A day in the life of entrepreneur & co-founders"
        }, 
    ]
};
const comments = [
    {
        id: 1,
        image: "comment-1-1.jpg",
        name: "Kevin Martin",
        date: "3 March, 2020",
        text: "Lorem Ipsum is simply dummy text of the rinting and typesetting been the industry standard dummy text ever sincer condimentum purus. In non ex at ligula fringilla lobortis."
    },
    {
        id: 2,
        image: "comment-1-2.jpg",
        name: "Sarah albert",
        date: "3 March, 2020",
        text: "Lorem Ipsum is simply dummy text of the rinting and typesetting been the industry standard dummy text ever sincer condimentum purus. In non ex at ligula fringilla lobortis."
    }, 
];
const blogDetailsMain = {
    image: blog_details_thumb["default"],
    date: "3 April, 2022",
    admin: "admin",
    comments: 2,
    title: "A day in the life of entrepreneur & co-founders",
    text1: "Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ndustry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. Lorem Ipsum is simply dummy text of the new design printng and type setting Ipsum Take a look at our round up of the best shows coming soon to your telly box has been the is industrys. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has industr standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    text2: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    tags: [
        "Construction",
        "Build",
        "Factory"
    ],
    socials: headerData/* socials */.UY
};
const blogAuthor = {
    image: author["default"],
    name: "Christine Eve",
    text: "Lorem Ipsum is simply dummy text of the rinting and typesetting been the industry standard dummy text ever sincer condimentum purus."
};
const blogDetailsSidebar = {
    categories: [
        "Business",
        "Coworking",
        "Freelancers",
        "Creative people",
        "Technology",
        "Startups", 
    ],
    tags: [
        "Coworking",
        "Business",
        "Virtual office",
        "Private office",
        "Cabin",
        "Creatives",
        "Office suites", 
    ],
    posts: [
        {
            id: 1,
            image: "post-1.jpg",
            title: "A day in the life of entrepreneur & co-founder"
        },
        {
            id: 2,
            image: "post-2.jpg",
            title: "A day in the life of entrepreneur & co-founder"
        },
        {
            id: 3,
            image: "post-3.jpg",
            title: "A day in the life of entrepreneur & co-founder"
        }, 
    ]
};

;// CONCATENATED MODULE: ./src/components/NewsArea/BlogDetails/BlogDetailsSidebar.js







const { categories , tags  } = blogDetailsSidebar;
const SidebarPostSingle = ({ post ={}  })=>{
    const { image , title , id  } = post;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "sidebar__post__single",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "sidebar__post-image",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "inner-block",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Image, {
                        src: image,
                        alt: "Awesome Image",
                        style: {
                            width: 150,
                            height: 80,
                            objectFit: "cover"
                        }
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "sidebar__post-content",
                children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                    className: "sidebar__post-title",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.Z, {
                        href: `/blog/${id}`,
                        children: title
                    })
                })
            })
        ]
    });
};
const BlogDetailsSidebar = ()=>{
    const { 0: posts , 1: setPosts  } = (0,external_react_.useState)([]);
    (0,external_react_.useEffect)(()=>{
        const fetchPosts = async ()=>{
            try {
                const response = await fetch("http://194.164.54.216:3636/blogs/find-all");
                const data = await response.json();
                // Sorted posts by createdAt date in descending order
                const sortedPosts = data.sort((a, b)=>new Date(b.createdAt) - new Date(a.createdAt)
                );
                setPosts(sortedPosts);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };
        fetchPosts();
    }, []);
    const onSubmit = (data)=>console.log(data)
    ;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "sidebar",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "sidebar__single sidebar__post",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                    className: "sidebar__title",
                    children: "Recent Posts"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "sidebar__post-wrap",
                    children: posts.map((post)=>/*#__PURE__*/ jsx_runtime_.jsx(SidebarPostSingle, {
                            post: post
                        }, post.id)
                    )
                })
            ]
        })
    });
};
/* harmony default export */ const BlogDetails_BlogDetailsSidebar = (BlogDetailsSidebar);


/***/ })

};
;