module.exports = {

"[project]/pages/diagnose.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports }) { !function() {

const { jsxDEV: _jsxDEV } = __turbopack_external_require__("react/jsx-dev-runtime");
{
    result && /*#__PURE__*/ _jsxDEV("div", {
        style: {
            marginTop: "20px"
        },
        children: [
            /*#__PURE__*/ _jsxDEV("h2", {
                children: "Recommended Specialty"
            }, void 0, false, {
                fileName: "<[project]/pages/diagnose.js>",
                lineNumber: 3,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ _jsxDEV("p", {
                children: result.specialty
            }, void 0, false, {
                fileName: "<[project]/pages/diagnose.js>",
                lineNumber: 4,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ _jsxDEV("p", {
                children: [
                    "Confidence: ",
                    Math.round(result.confidence * 100),
                    "%"
                ]
            }, void 0, true, {
                fileName: "<[project]/pages/diagnose.js>",
                lineNumber: 6,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ _jsxDEV("h2", {
                children: "Best Doctors"
            }, void 0, false, {
                fileName: "<[project]/pages/diagnose.js>",
                lineNumber: 8,
                columnNumber: 5
            }, this),
            result.doctors.map((doctor)=>/*#__PURE__*/ _jsxDEV("div", {
                    style: {
                        border: "1px solid #ddd",
                        padding: "12px",
                        marginBottom: "10px",
                        borderRadius: "8px"
                    },
                    children: [
                        /*#__PURE__*/ _jsxDEV("h3", {
                            children: doctor.name
                        }, void 0, false, {
                            fileName: "<[project]/pages/diagnose.js>",
                            lineNumber: 20,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ _jsxDEV("p", {
                            children: doctor.hospital_name
                        }, void 0, false, {
                            fileName: "<[project]/pages/diagnose.js>",
                            lineNumber: 21,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ _jsxDEV("p", {
                            children: [
                                "Experience: ",
                                doctor.experience,
                                " years"
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/pages/diagnose.js>",
                            lineNumber: 22,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ _jsxDEV("p", {
                            children: [
                                "Rating: ",
                                doctor.rating
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/pages/diagnose.js>",
                            lineNumber: 23,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ _jsxDEV("p", {
                            children: [
                                "Match: ",
                                Math.round(doctor.matchScore),
                                "%"
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/pages/diagnose.js>",
                            lineNumber: 24,
                            columnNumber: 9
                        }, this)
                    ]
                }, doctor.id, true, {
                    fileName: "<[project]/pages/diagnose.js>",
                    lineNumber: 11,
                    columnNumber: 7
                }, this))
        ]
    }, void 0, true, {
        fileName: "<[project]/pages/diagnose.js>",
        lineNumber: 2,
        columnNumber: 3
    }, this);
}
}.call(this) }),
"[project]/pages/_app.js (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {

__turbopack_esm__({
    "default": ()=>MyApp
});
var __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__ = __turbopack_external_require__("react/jsx-dev-runtime", true);
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function MyApp({ Component, pageProps }) {
    return /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](Component, {
        ...pageProps
    }, void 0, false, {
        fileName: "<[project]/pages/_app.js>",
        lineNumber: 4,
        columnNumber: 10
    }, this);
}

})()),
"[project]/node_modules/next/dist/esm/build/templates/helpers.js (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {

/**
 * Hoists a name from a module or promised module.
 *
 * @param module the module to hoist the name from
 * @param name the name to hoist
 * @returns the value on the module (or promised module)
 */ __turbopack_esm__({
    "hoist": ()=>hoist
});
function hoist(module, name) {
    // If the name is available in the module, return it.
    if (name in module) {
        return module[name];
    }
    // If a property called `then` exists, assume it's a promise and
    // return a promise that resolves to the name.
    if ("then" in module && typeof module.then === "function") {
        return module.then((mod)=>hoist(mod, name));
    }
    // If we're trying to hoise the default export, and the module is a function,
    // return the module itself.
    if (typeof module === "function" && name === "default") {
        return module;
    }
    // Otherwise, return undefined.
    return undefined;
} //# sourceMappingURL=helpers.js.map

})()),
"[project]/node_modules/next/dist/esm/server/future/route-kind.js (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {

__turbopack_esm__({
    "RouteKind": ()=>RouteKind
});
var RouteKind;
(function(RouteKind) {
    RouteKind[/**
   * `PAGES` represents all the React pages that are under `pages/`.
   */ "PAGES"] = "PAGES";
    RouteKind[/**
   * `PAGES_API` represents all the API routes under `pages/api/`.
   */ "PAGES_API"] = "PAGES_API";
    RouteKind[/**
   * `APP_PAGE` represents all the React pages that are under `app/` with the
   * filename of `page.{j,t}s{,x}`.
   */ "APP_PAGE"] = "APP_PAGE";
    RouteKind[/**
   * `APP_ROUTE` represents all the API routes and metadata routes that are under `app/` with the
   * filename of `route.{j,t}s{,x}`.
   */ "APP_ROUTE"] = "APP_ROUTE";
})(RouteKind || (RouteKind = {})); //# sourceMappingURL=route-kind.js.map

})()),
"[project]/node_modules/next/dist/esm/server/future/route-modules/pages/module.compiled.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports }) { !function() {

if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    if ("TURBOPACK compile-time truthy", 1) {
        module.exports = __turbopack_external_require__("next/dist/compiled/next-server/pages.runtime.dev.js");
    } else {
        "TURBOPACK unreachable";
    }
} //# sourceMappingURL=module.compiled.js.map

}.call(this) }),
"[project]/node_modules/next/dist/esm/build/templates/pages.js/(INNER_PAGE)/[project]/pages/diagnose.js (ecmascript) (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {

__turbopack_esm__({
    "config": ()=>config,
    "default": ()=>__TURBOPACK__default__export__,
    "getServerSideProps": ()=>getServerSideProps,
    "getStaticPaths": ()=>getStaticPaths,
    "getStaticProps": ()=>getStaticProps,
    "reportWebVitals": ()=>reportWebVitals,
    "routeModule": ()=>routeModule,
    "unstable_getServerProps": ()=>unstable_getServerProps,
    "unstable_getServerSideProps": ()=>unstable_getServerSideProps,
    "unstable_getStaticParams": ()=>unstable_getStaticParams,
    "unstable_getStaticPaths": ()=>unstable_getStaticPaths,
    "unstable_getStaticProps": ()=>unstable_getStaticProps
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$future$2f$route$2d$modules$2f$pages$2f$module$2e$compiled$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/future/route-modules/pages/module.compiled.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$future$2f$route$2d$kind$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/future/route-kind.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/build/templates/helpers.js (ecmascript, ssr)");
var __TURBOPACK__external__next$2f$document__ = __turbopack_external_require__("next/document", true);
var __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$_app$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/pages/_app.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$diagnose$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/pages/diagnose.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$28$ecmascript$29$__["hoist"](__TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$diagnose$2e$js__$28$ecmascript$29$__, "default");
const getStaticProps = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$28$ecmascript$29$__["hoist"](__TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$diagnose$2e$js__$28$ecmascript$29$__, "getStaticProps");
const getStaticPaths = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$28$ecmascript$29$__["hoist"](__TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$diagnose$2e$js__$28$ecmascript$29$__, "getStaticPaths");
const getServerSideProps = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$28$ecmascript$29$__["hoist"](__TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$diagnose$2e$js__$28$ecmascript$29$__, "getServerSideProps");
const config = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$28$ecmascript$29$__["hoist"](__TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$diagnose$2e$js__$28$ecmascript$29$__, "config");
const reportWebVitals = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$28$ecmascript$29$__["hoist"](__TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$diagnose$2e$js__$28$ecmascript$29$__, "reportWebVitals");
const unstable_getStaticProps = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$28$ecmascript$29$__["hoist"](__TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$diagnose$2e$js__$28$ecmascript$29$__, "unstable_getStaticProps");
const unstable_getStaticPaths = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$28$ecmascript$29$__["hoist"](__TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$diagnose$2e$js__$28$ecmascript$29$__, "unstable_getStaticPaths");
const unstable_getStaticParams = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$28$ecmascript$29$__["hoist"](__TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$diagnose$2e$js__$28$ecmascript$29$__, "unstable_getStaticParams");
const unstable_getServerProps = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$28$ecmascript$29$__["hoist"](__TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$diagnose$2e$js__$28$ecmascript$29$__, "unstable_getServerProps");
const unstable_getServerSideProps = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$28$ecmascript$29$__["hoist"](__TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$diagnose$2e$js__$28$ecmascript$29$__, "unstable_getServerSideProps");
const routeModule = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$future$2f$route$2d$modules$2f$pages$2f$module$2e$compiled$2e$js__$28$ecmascript$29$__["PagesRouteModule"]({
    definition: {
        kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$future$2f$route$2d$kind$2e$js__$28$ecmascript$29$__["RouteKind"].PAGES,
        page: "/diagnose",
        pathname: "/diagnose",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$_app$2e$js__$28$ecmascript$29$__["default"],
        Document: __TURBOPACK__external__next$2f$document__["default"]
    },
    userland: __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$diagnose$2e$js__$28$ecmascript$29$__
}); //# sourceMappingURL=pages.js.map

})()),

};

//# sourceMappingURL=_9f0eed._.js.map