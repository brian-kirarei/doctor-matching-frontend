module.exports = {

"[workspace]/pages/search.js (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {

__turbopack_esm__({
    "default": ()=>SearchDoctor
});
var __TURBOPACK__external__react$2f$jsx$2d$runtime__ = __turbopack_external_require__("react/jsx-runtime", true);
var __TURBOPACK__external__react__ = __turbopack_external_require__("react", true);
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function SearchDoctor() {
    const [condition, setCondition] = __TURBOPACK__external__react__["useState"]("");
    const [results, setResults] = __TURBOPACK__external__react__["useState"]([]);
    const [loading, setLoading] = __TURBOPACK__external__react__["useState"](false);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        setResults([]);
        try {
            const res = await fetch("http://localhost:5000/api/diagnose", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    condition
                })
            });
            const data = await res.json();
            if (data.matches) {
                setResults(data.matches);
            } else if (data.error) {
                setResults([
                    {
                        error: data.error
                    }
                ]);
            }
        } catch (err) {
            console.error(err);
            setResults([
                {
                    error: "Failed to connect to backend"
                }
            ]);
        }
        setLoading(false);
    };
    return /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsxs"]("div", {
        className: "p-6 max-w-xl mx-auto",
        children: [
            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("h1", {
                className: "text-2xl font-bold mb-4",
                children: "Find a Doctor by Your Condition"
            }),
            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsxs"]("form", {
                onSubmit: handleSubmit,
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("textarea", {
                        className: "w-full border rounded p-2",
                        rows: 4,
                        placeholder: "Describe your symptoms...",
                        value: condition,
                        onChange: (e)=>setCondition(e.target.value)
                    }),
                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("button", {
                        type: "submit",
                        className: "bg-blue-500 text-white px-4 py-2 rounded",
                        children: loading ? "Analyzing..." : "Find Doctor"
                    })
                ]
            }),
            results.length > 0 && /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("div", {
                className: "mt-6 space-y-4",
                children: results.map((result, index)=>/*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("div", {
                        className: "p-4 border rounded bg-gray-50",
                        children: result.error ? /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("p", {
                            className: "text-red-500",
                            children: result.error
                        }) : /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsxs"](__TURBOPACK__external__react$2f$jsx$2d$runtime__["Fragment"], {
                            children: [
                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsxs"]("p", {
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("strong", {
                                            children: "Condition:"
                                        }),
                                        " ",
                                        result.condition
                                    ]
                                }),
                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsxs"]("p", {
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("strong", {
                                            children: "Doctor:"
                                        }),
                                        " ",
                                        result.doctor
                                    ]
                                }),
                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsxs"]("p", {
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("strong", {
                                            children: "Specialty:"
                                        }),
                                        " ",
                                        result.specialty || "N/A"
                                    ]
                                }),
                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsxs"]("p", {
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("strong", {
                                            children: "Hospital:"
                                        }),
                                        " ",
                                        result.hospital
                                    ]
                                }),
                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsxs"]("p", {
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("strong", {
                                            children: "Recommendation:"
                                        }),
                                        " ",
                                        result.recommendation
                                    ]
                                })
                            ]
                        })
                    }, index))
            })
        ]
    });
}

})()),
"[workspace]/pages/_app.js (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {

__turbopack_esm__({
    "default": ()=>MyApp
});
var __TURBOPACK__external__react$2f$jsx$2d$runtime__ = __turbopack_external_require__("react/jsx-runtime", true);
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function MyApp({ Component, pageProps }) {
    return /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"](Component, {
        ...pageProps
    });
}

})()),
"[workspace]/node_modules/next/dist/esm/build/templates/helpers.js (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {

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
"[workspace]/node_modules/next/dist/esm/server/future/route-kind.js (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {

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
"[workspace]/node_modules/next/dist/esm/server/future/route-modules/pages/module.compiled.js (ecmascript, ssr)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports }) { !function() {

if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    } else if ("TURBOPACK compile-time truthy", 1) {
        module.exports = __turbopack_external_require__("next/dist/compiled/next-server/pages-turbo.runtime.prod.js");
    } else {
        "TURBOPACK unreachable";
    }
} //# sourceMappingURL=module.compiled.js.map

}.call(this) }),
"[workspace]/node_modules/next/dist/esm/build/templates/pages.js/(INNER_PAGE)/[workspace]/pages/search.js (ecmascript) (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {

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
var __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$future$2f$route$2d$modules$2f$pages$2f$module$2e$compiled$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[workspace]/node_modules/next/dist/esm/server/future/route-modules/pages/module.compiled.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$future$2f$route$2d$kind$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[workspace]/node_modules/next/dist/esm/server/future/route-kind.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[workspace]/node_modules/next/dist/esm/build/templates/helpers.js (ecmascript, ssr)");
var __TURBOPACK__external__next$2f$document__ = __turbopack_external_require__("next/document", true);
var __TURBOPACK__imported__module__$5b$workspace$5d2f$pages$2f$_app$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[workspace]/pages/_app.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$workspace$5d2f$pages$2f$search$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[workspace]/pages/search.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$28$ecmascript$29$__["hoist"](__TURBOPACK__imported__module__$5b$workspace$5d2f$pages$2f$search$2e$js__$28$ecmascript$29$__, "default");
const getStaticProps = __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$28$ecmascript$29$__["hoist"](__TURBOPACK__imported__module__$5b$workspace$5d2f$pages$2f$search$2e$js__$28$ecmascript$29$__, "getStaticProps");
const getStaticPaths = __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$28$ecmascript$29$__["hoist"](__TURBOPACK__imported__module__$5b$workspace$5d2f$pages$2f$search$2e$js__$28$ecmascript$29$__, "getStaticPaths");
const getServerSideProps = __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$28$ecmascript$29$__["hoist"](__TURBOPACK__imported__module__$5b$workspace$5d2f$pages$2f$search$2e$js__$28$ecmascript$29$__, "getServerSideProps");
const config = __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$28$ecmascript$29$__["hoist"](__TURBOPACK__imported__module__$5b$workspace$5d2f$pages$2f$search$2e$js__$28$ecmascript$29$__, "config");
const reportWebVitals = __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$28$ecmascript$29$__["hoist"](__TURBOPACK__imported__module__$5b$workspace$5d2f$pages$2f$search$2e$js__$28$ecmascript$29$__, "reportWebVitals");
const unstable_getStaticProps = __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$28$ecmascript$29$__["hoist"](__TURBOPACK__imported__module__$5b$workspace$5d2f$pages$2f$search$2e$js__$28$ecmascript$29$__, "unstable_getStaticProps");
const unstable_getStaticPaths = __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$28$ecmascript$29$__["hoist"](__TURBOPACK__imported__module__$5b$workspace$5d2f$pages$2f$search$2e$js__$28$ecmascript$29$__, "unstable_getStaticPaths");
const unstable_getStaticParams = __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$28$ecmascript$29$__["hoist"](__TURBOPACK__imported__module__$5b$workspace$5d2f$pages$2f$search$2e$js__$28$ecmascript$29$__, "unstable_getStaticParams");
const unstable_getServerProps = __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$28$ecmascript$29$__["hoist"](__TURBOPACK__imported__module__$5b$workspace$5d2f$pages$2f$search$2e$js__$28$ecmascript$29$__, "unstable_getServerProps");
const unstable_getServerSideProps = __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$28$ecmascript$29$__["hoist"](__TURBOPACK__imported__module__$5b$workspace$5d2f$pages$2f$search$2e$js__$28$ecmascript$29$__, "unstable_getServerSideProps");
const routeModule = new __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$future$2f$route$2d$modules$2f$pages$2f$module$2e$compiled$2e$js__$28$ecmascript$29$__["PagesRouteModule"]({
    definition: {
        kind: __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$future$2f$route$2d$kind$2e$js__$28$ecmascript$29$__["RouteKind"].PAGES,
        page: "search",
        pathname: "/search",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: __TURBOPACK__imported__module__$5b$workspace$5d2f$pages$2f$_app$2e$js__$28$ecmascript$29$__["default"],
        Document: __TURBOPACK__external__next$2f$document__["default"]
    },
    userland: __TURBOPACK__imported__module__$5b$workspace$5d2f$pages$2f$search$2e$js__$28$ecmascript$29$__
}); //# sourceMappingURL=pages.js.map

})()),

};

//# sourceMappingURL=_368ae7._.js.map