module.exports = {

"[project]/lib/api.js (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {

// lib/api.js
__turbopack_esm__({
    "bookAppointment": ()=>bookAppointment,
    "diagnosePatient": ()=>diagnosePatient,
    "fetchHistory": ()=>fetchHistory
});
const API_BASE = ("TURBOPACK compile-time value", JSON.parse('"https://doctor-matching-backend.onrender.com"'));
const diagnosePatient = async (symptoms)=>{
    const response = await fetch(`${API_BASE}/diagnosis`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            symptoms
        })
    });
    return response.json();
};
const fetchHistory = async ()=>{
    const response = await fetch(`${API_BASE}/diagnoses`);
    return response.json();
};
const bookAppointment = async (data)=>{
    const response = await fetch(`${API_BASE}/appointments/book`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    return response.json();
};

})()),
"[project]/pages/dashboard.js (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {

__turbopack_esm__({
    "default": ()=>Dashboard
});
var __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__ = __turbopack_external_require__("react/jsx-dev-runtime", true);
var __TURBOPACK__external__react__ = __turbopack_external_require__("react", true);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/api.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
function Dashboard() {
    const [patientName, setPatientName] = __TURBOPACK__external__react__["useState"]("");
    const [symptoms, setSymptoms] = __TURBOPACK__external__react__["useState"]("");
    const [diagnoses, setDiagnoses] = __TURBOPACK__external__react__["useState"]([]);
    const [loading, setLoading] = __TURBOPACK__external__react__["useState"](false);
    const [error, setError] = __TURBOPACK__external__react__["useState"]("");
    __TURBOPACK__external__react__["useEffect"](()=>{
        const getHistory = async ()=>{
            try {
                const data = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$28$ecmascript$29$__["fetchHistory"]();
                setDiagnoses(data);
            } catch (err) {
                setError("Failed to fetch diagnosis history");
            }
        };
        getHistory();
    }, []);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        setError("");
        try {
            const data = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$28$ecmascript$29$__["diagnosePatient"]({
                patient_name: patientName,
                symptoms
            });
            setDiagnoses((prev)=>[
                    data,
                    ...prev
                ]);
            setPatientName("");
            setSymptoms("");
        } catch  {
            setError("Diagnosis failed");
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
        style: {
            maxWidth: "800px",
            margin: "auto",
            padding: "2rem"
        },
        children: [
            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("h1", {
                children: "Patient Diagnosis Dashboard"
            }, void 0, false, {
                fileName: "<[project]/pages/dashboard.js>",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("form", {
                onSubmit: handleSubmit,
                style: {
                    marginBottom: "2rem"
                },
                children: [
                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("input", {
                        placeholder: "Patient Name",
                        value: patientName,
                        onChange: (e)=>setPatientName(e.target.value),
                        required: true
                    }, void 0, false, {
                        fileName: "<[project]/pages/dashboard.js>",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("textarea", {
                        placeholder: "Symptoms",
                        value: symptoms,
                        onChange: (e)=>setSymptoms(e.target.value),
                        required: true
                    }, void 0, false, {
                        fileName: "<[project]/pages/dashboard.js>",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("button", {
                        type: "submit",
                        disabled: loading,
                        children: loading ? "Diagnosing..." : "Diagnose"
                    }, void 0, false, {
                        fileName: "<[project]/pages/dashboard.js>",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/pages/dashboard.js>",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("p", {
                style: {
                    color: "red"
                },
                children: error
            }, void 0, false, {
                fileName: "<[project]/pages/dashboard.js>",
                lineNumber: 61,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("h2", {
                children: "Diagnosis History"
            }, void 0, false, {
                fileName: "<[project]/pages/dashboard.js>",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("table", {
                children: [
                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("thead", {
                        children: /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("tr", {
                            children: [
                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("th", {
                                    children: "Patient"
                                }, void 0, false, {
                                    fileName: "<[project]/pages/dashboard.js>",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("th", {
                                    children: "Symptoms"
                                }, void 0, false, {
                                    fileName: "<[project]/pages/dashboard.js>",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("th", {
                                    children: "Diagnosis"
                                }, void 0, false, {
                                    fileName: "<[project]/pages/dashboard.js>",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("th", {
                                    children: "Confidence"
                                }, void 0, false, {
                                    fileName: "<[project]/pages/dashboard.js>",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("th", {
                                    children: "Severity"
                                }, void 0, false, {
                                    fileName: "<[project]/pages/dashboard.js>",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("th", {
                                    children: "Doctor"
                                }, void 0, false, {
                                    fileName: "<[project]/pages/dashboard.js>",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("th", {
                                    children: "Hospital"
                                }, void 0, false, {
                                    fileName: "<[project]/pages/dashboard.js>",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("th", {
                                    children: "Date"
                                }, void 0, false, {
                                    fileName: "<[project]/pages/dashboard.js>",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/pages/dashboard.js>",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/pages/dashboard.js>",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("tbody", {
                        children: diagnoses.map((d)=>/*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("tr", {
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("td", {
                                        children: d.patient_name
                                    }, void 0, false, {
                                        fileName: "<[project]/pages/dashboard.js>",
                                        lineNumber: 80,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("td", {
                                        children: d.symptoms
                                    }, void 0, false, {
                                        fileName: "<[project]/pages/dashboard.js>",
                                        lineNumber: 81,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("td", {
                                        children: d.diagnosis
                                    }, void 0, false, {
                                        fileName: "<[project]/pages/dashboard.js>",
                                        lineNumber: 82,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("td", {
                                        children: [
                                            (d.confidence * 100).toFixed(1),
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/pages/dashboard.js>",
                                        lineNumber: 83,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("td", {
                                        children: d.severity
                                    }, void 0, false, {
                                        fileName: "<[project]/pages/dashboard.js>",
                                        lineNumber: 84,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("td", {
                                        children: d.doctor_name
                                    }, void 0, false, {
                                        fileName: "<[project]/pages/dashboard.js>",
                                        lineNumber: 85,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("td", {
                                        children: d.hospital
                                    }, void 0, false, {
                                        fileName: "<[project]/pages/dashboard.js>",
                                        lineNumber: 86,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("td", {
                                        children: new Date(d.created_at).toLocaleString()
                                    }, void 0, false, {
                                        fileName: "<[project]/pages/dashboard.js>",
                                        lineNumber: 87,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, d.id, true, {
                                fileName: "<[project]/pages/dashboard.js>",
                                lineNumber: 79,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "<[project]/pages/dashboard.js>",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/pages/dashboard.js>",
                lineNumber: 64,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/pages/dashboard.js>",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}

})()),
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
"[project]/node_modules/next/dist/esm/build/templates/pages.js/(INNER_PAGE)/[project]/pages/dashboard.js (ecmascript) (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {

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
var __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$dashboard$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/pages/dashboard.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$28$ecmascript$29$__["hoist"](__TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$dashboard$2e$js__$28$ecmascript$29$__, "default");
const getStaticProps = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$28$ecmascript$29$__["hoist"](__TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$dashboard$2e$js__$28$ecmascript$29$__, "getStaticProps");
const getStaticPaths = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$28$ecmascript$29$__["hoist"](__TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$dashboard$2e$js__$28$ecmascript$29$__, "getStaticPaths");
const getServerSideProps = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$28$ecmascript$29$__["hoist"](__TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$dashboard$2e$js__$28$ecmascript$29$__, "getServerSideProps");
const config = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$28$ecmascript$29$__["hoist"](__TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$dashboard$2e$js__$28$ecmascript$29$__, "config");
const reportWebVitals = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$28$ecmascript$29$__["hoist"](__TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$dashboard$2e$js__$28$ecmascript$29$__, "reportWebVitals");
const unstable_getStaticProps = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$28$ecmascript$29$__["hoist"](__TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$dashboard$2e$js__$28$ecmascript$29$__, "unstable_getStaticProps");
const unstable_getStaticPaths = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$28$ecmascript$29$__["hoist"](__TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$dashboard$2e$js__$28$ecmascript$29$__, "unstable_getStaticPaths");
const unstable_getStaticParams = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$28$ecmascript$29$__["hoist"](__TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$dashboard$2e$js__$28$ecmascript$29$__, "unstable_getStaticParams");
const unstable_getServerProps = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$28$ecmascript$29$__["hoist"](__TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$dashboard$2e$js__$28$ecmascript$29$__, "unstable_getServerProps");
const unstable_getServerSideProps = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$28$ecmascript$29$__["hoist"](__TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$dashboard$2e$js__$28$ecmascript$29$__, "unstable_getServerSideProps");
const routeModule = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$future$2f$route$2d$modules$2f$pages$2f$module$2e$compiled$2e$js__$28$ecmascript$29$__["PagesRouteModule"]({
    definition: {
        kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$future$2f$route$2d$kind$2e$js__$28$ecmascript$29$__["RouteKind"].PAGES,
        page: "/dashboard",
        pathname: "/dashboard",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$_app$2e$js__$28$ecmascript$29$__["default"],
        Document: __TURBOPACK__external__next$2f$document__["default"]
    },
    userland: __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$dashboard$2e$js__$28$ecmascript$29$__
}); //# sourceMappingURL=pages.js.map

})()),

};

//# sourceMappingURL=_caef89._.js.map