(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/[root of the server]__effebf._.js", {

"[workspace]/pages/history.js (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>History
});
var __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[workspace]/node_modules/react/jsx-runtime.js (ecmascript)");
var __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[workspace]/node_modules/react/index.js (ecmascript)");
var __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$axios$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[workspace]/node_modules/axios/index.js (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
function History() {
    const [diagnoses, setDiagnoses] = __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]([]);
    const [loading, setLoading] = __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](true);
    __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        fetchDiagnoses();
    }, []);
    const fetchDiagnoses = async ()=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$axios$2f$index$2e$js__$28$ecmascript$29$__["default"].get("http://localhost:5000/api/diagnoses");
            setDiagnoses(res.data);
        } catch (err) {
            console.error(err);
        } finally{
            setLoading(false);
        }
    };
    if (loading) return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("p", {
        style: {
            padding: "2rem"
        },
        children: "Loading records..."
    });
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsxs"]("div", {
        style: {
            padding: "2rem",
            fontFamily: "sans-serif"
        },
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("h1", {
                children: "Diagnosis History"
            }),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsxs"]("table", {
                border: "1",
                cellPadding: "10",
                style: {
                    width: "100%"
                },
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("thead", {
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsxs"]("tr", {
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("th", {
                                    children: "Patient"
                                }),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("th", {
                                    children: "Symptoms"
                                }),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("th", {
                                    children: "Diagnosis"
                                }),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("th", {
                                    children: "Severity"
                                }),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("th", {
                                    children: "Confidence"
                                }),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("th", {
                                    children: "Doctor"
                                }),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("th", {
                                    children: "Hospital"
                                }),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("th", {
                                    children: "Date"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("tbody", {
                        children: diagnoses.map((d)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsxs"]("tr", {
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("td", {
                                        children: d.patient_name
                                    }),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("td", {
                                        children: d.symptoms
                                    }),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("td", {
                                        children: d.diagnosis
                                    }),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("td", {
                                        children: d.severity
                                    }),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsxs"]("td", {
                                        children: [
                                            (d.confidence * 100).toFixed(0),
                                            "%"
                                        ]
                                    }),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("td", {
                                        children: d.doctor_name
                                    }),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("td", {
                                        children: d.hospital
                                    }),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("td", {
                                        children: new Date(d.created_at).toLocaleString()
                                    })
                                ]
                            }, d.id))
                    })
                ]
            })
        ]
    });
}

})()),
"[next]/entry/page-loader.ts/(PAGE)/[workspace]/pages/history.js (ecmascript) (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

const PAGE_PATH = "/history";
(window.__NEXT_P = window.__NEXT_P || []).push([
    PAGE_PATH,
    ()=>{
        return __turbopack_require__("[workspace]/pages/history.js (ecmascript)");
    }
]);
if (module.hot) {
    module.hot.dispose(function() {
        window.__NEXT_P.push([
            PAGE_PATH
        ]);
    });
}

}.call(this) }),
"[next]/build/shims.ts (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

// This ensures Next.js uses React 18's APIs (hydrateRoot) instead of React 17's
// (hydrate).
var __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[workspace]/node_modules/next/dist/build/polyfills/process.js (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
__TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$28$ecmascript$29$__["default"].env.__NEXT_REACT_ROOT = 'true';

}.call(this) }),
"[next]/build/client/bootstrap.ts (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {

/**
 * This is the runtime entry point for Next.js Page Router client-side bundles.
 */ var __TURBOPACK__imported__module__$5b$next$5d2f$build$2f$shims$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[next]/build/shims.ts (ecmascript)");
var __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[workspace]/node_modules/next/dist/client/index.js (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
window.next = {
    version: `${__TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$index$2e$js__$28$ecmascript$29$__["version"]}-turbo`,
    // router is initialized later so it has to be live-binded
    get router () {
        return __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$index$2e$js__$28$ecmascript$29$__["router"];
    },
    emitter: __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$index$2e$js__$28$ecmascript$29$__["emitter"]
};
self.__next_set_public_path__ = ()=>{};
__TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$index$2e$js__$28$ecmascript$29$__["initialize"]({}).then(()=>__TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$index$2e$js__$28$ecmascript$29$__["hydrate"]()).catch(console.error);

})()),
}]);

//# sourceMappingURL=[root of the server]__effebf._.js.map