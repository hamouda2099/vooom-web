"use strict";
(() => {
var exports = {};
exports.id = 743;
exports.ids = [743];
exports.modules = {

/***/ 4663:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2Fbecome_partner_preferredRegion_absolutePagePath_private_next_pages_2Fbecome_partner_jsx_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_),
  getServerSideProps: () => (/* binding */ getServerSideProps),
  getStaticPaths: () => (/* binding */ getStaticPaths),
  getStaticProps: () => (/* binding */ next_route_loaderpage_2Fbecome_partner_preferredRegion_absolutePagePath_private_next_pages_2Fbecome_partner_jsx_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./pages/become-partner.jsx
var become_partner_namespaceObject = {};
__webpack_require__.r(become_partner_namespaceObject);
__webpack_require__.d(become_partner_namespaceObject, {
  "default": () => (become_partner),
  getStaticProps: () => (getStaticProps)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(3185);
var module_default = /*#__PURE__*/__webpack_require__.n(pages_module);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7182);
// EXTERNAL MODULE: ./pages/_document.js
var _document = __webpack_require__(6088);
// EXTERNAL MODULE: ./pages/_app.js + 1 modules
var _app = __webpack_require__(3604);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./src/layouts/Layout.js + 7 modules
var Layout = __webpack_require__(374);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: external "next-i18next/serverSideTranslations"
var serverSideTranslations_ = __webpack_require__(5460);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./pages/become-partner.jsx





const BecomePartner = ()=>{
    const { t } = (0,external_next_i18next_.useTranslation)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Layout/* default */.Z, {
        headerExtaClass: "two",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("section", {
                className: "hero-section about blog-page gap",
                style: {
                    backgroundImage: "url(/assets/img/blog-img-1.jpg)"
                },
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "row align-items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-lg-6",
                                "data-aos": "fade-up",
                                "data-aos-delay": 200,
                                "data-aos-duration": 300,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "about-text",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                            className: "crumbs d-flex",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                        href: "/",
                                                        children: t("vendor.Home")
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                    className: "two",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                        href: "/",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                className: "fa-solid fa-right-long"
                                                            }),
                                                            t("vendor.Vendor")
                                                        ]
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("h2", {
                                            children: [
                                                "                ",
                                                t("vendor.Want to join partnership?")
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-lg-6",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "join-courier",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("h3", {
                                            children: [
                                                "                ",
                                                t("vendor.Join As Partner")
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            children: t("vendor.line_1")
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            children: t("vendor.line_2")
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            children: t("vendor.line_3")
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("br", {})
                                    ]
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("section", {
                className: "Benefit-section gap",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "offset-xl-1 col-lg-5",
                            "data-aos": "flip-up",
                            "data-aos-delay": 300,
                            "data-aos-duration": 400,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "benefit-text",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                        children: t("vendor.Benefits you get with VOOOM")
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        children: t("vendor.benefits")
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                            href: "contacts",
                                            className: "button button-2",
                                            children: [
                                                t("home.join"),
                                                " ",
                                                /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                    className: "fa-solid fa-arrow-right"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("section", {
                className: "Benefit-team gap no-top",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-lg-4 col-md-6 col-sm-12",
                                "data-aos": "flip-up",
                                "data-aos-delay": 200,
                                "data-aos-duration": 300,
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "team-description",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("h4", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                className: "fa-solid fa-people-group"
                                            }),
                                            t("vendor.Friendly Team")
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-lg-4 col-md-6 col-sm-12",
                                "data-aos": "flip-up",
                                "data-aos-delay": 300,
                                "data-aos-duration": 400,
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "team-description",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("h4", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                className: "fa-regular fa-calendar-days"
                                            }),
                                            t("vendor.Flexible Schedule")
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-lg-4 col-md-6 col-sm-12",
                                "data-aos": "flip-up",
                                "data-aos-delay": 400,
                                "data-aos-duration": 500,
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "team-description",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("h4", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                className: "fa-solid fa-briefcase"
                                            }),
                                            t("vendor.Official Employment")
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-lg-4 col-md-6 col-sm-12",
                                "data-aos": "flip-up",
                                "data-aos-delay": 200,
                                "data-aos-duration": 300,
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "team-description end",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("h4", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                className: "fa-solid fa-money-bill-1-wave"
                                            }),
                                            t("vendor.Stable Income")
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-lg-4 col-md-6 col-sm-12",
                                "data-aos": "flip-up",
                                "data-aos-delay": 300,
                                "data-aos-duration": 400,
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "team-description end",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("h4", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                className: "fa-solid fa-arrow-up-right-dots"
                                            }),
                                            t("vendor.Career Growth")
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-lg-4 col-md-6 col-sm-12",
                                "data-aos": "flip-up",
                                "data-aos-delay": 400,
                                "data-aos-duration": 500,
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "team-description end",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("h4", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                className: "fa-solid fa-folder-open"
                                            }),
                                            t("vendor.Full Insurance")
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const become_partner = (BecomePartner);
async function getStaticProps({ locale }) {
    return {
        props: {
            ...await (0,serverSideTranslations_.serverSideTranslations)(locale, [
                "common"
            ])
        }
    };
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2Fbecome-partner&preferredRegion=&absolutePagePath=private-next-pages%2Fbecome-partner.jsx&absoluteAppPath=private-next-pages%2F_app.js&absoluteDocumentPath=private-next-pages%2F_document.js&middlewareConfigBase64=e30%3D!

        // Next.js Route Loader
        
        

        // Import the app and document modules.
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2Fbecome_partner_preferredRegion_absolutePagePath_private_next_pages_2Fbecome_partner_jsx_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(become_partner_namespaceObject, "default"));

        // Re-export methods.
        const next_route_loaderpage_2Fbecome_partner_preferredRegion_absolutePagePath_private_next_pages_2Fbecome_partner_jsx_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_getStaticProps = (0,helpers/* hoist */.l)(become_partner_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(become_partner_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(become_partner_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(become_partner_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(become_partner_namespaceObject, "reportWebVitals")
        

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(become_partner_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(become_partner_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(become_partner_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(become_partner_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(become_partner_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/become-partner","pathname":"/become-partner","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({
          ...options,
          components: {
            App: _app["default"],
            Document: _document["default"],
          },
          userland: become_partner_namespaceObject,
        })
        
        
    

/***/ }),

/***/ 9783:
/***/ ((module) => {

module.exports = require("aos");

/***/ }),

/***/ 1377:
/***/ ((module) => {

module.exports = require("next-i18next");

/***/ }),

/***/ 5460:
/***/ ((module) => {

module.exports = require("next-i18next/serverSideTranslations");

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 4140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3431:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-locale.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9051:
/***/ ((module) => {

module.exports = require("react-nice-select");

/***/ }),

/***/ 8924:
/***/ ((module) => {

module.exports = require("react-player");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [207,664,269,374], () => (__webpack_exec__(4663)));
module.exports = __webpack_exports__;

})();