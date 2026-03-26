(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/[root of the server]__e5467a._.js", {

"[workspace]/pages/search.js (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>SearchDoctor
});
var __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[workspace]/node_modules/react/jsx-runtime.js (ecmascript)");
var __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[workspace]/node_modules/react/index.js (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function SearchDoctor() {
    const [condition, setCondition] = __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]("");
    const [results, setResults] = __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]([]);
    const [loading, setLoading] = __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
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
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsxs"]("div", {
        className: "p-6 max-w-xl mx-auto",
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("h1", {
                className: "text-2xl font-bold mb-4",
                children: "Find a Doctor by Your Condition"
            }),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsxs"]("form", {
                onSubmit: handleSubmit,
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("textarea", {
                        className: "w-full border rounded p-2",
                        rows: 4,
                        placeholder: "Describe your symptoms...",
                        value: condition,
                        onChange: (e)=>setCondition(e.target.value)
                    }),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("button", {
                        type: "submit",
                        className: "bg-blue-500 text-white px-4 py-2 rounded",
                        children: loading ? "Analyzing..." : "Find Doctor"
                    })
                ]
            }),
            results.length > 0 && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("div", {
                className: "mt-6 space-y-4",
                children: results.map((result, index)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("div", {
                        className: "p-4 border rounded bg-gray-50",
                        children: result.error ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("p", {
                            className: "text-red-500",
                            children: result.error
                        }) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsxs"](__TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsxs"]("p", {
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("strong", {
                                            children: "Condition:"
                                        }),
                                        " ",
                                        result.condition
                                    ]
                                }),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsxs"]("p", {
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("strong", {
                                            children: "Doctor:"
                                        }),
                                        " ",
                                        result.doctor
                                    ]
                                }),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsxs"]("p", {
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("strong", {
                                            children: "Specialty:"
                                        }),
                                        " ",
                                        result.specialty || "N/A"
                                    ]
                                }),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsxs"]("p", {
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("strong", {
                                            children: "Hospital:"
                                        }),
                                        " ",
                                        result.hospital
                                    ]
                                }),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsxs"]("p", {
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("strong", {
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
"[next]/entry/page-loader.ts/(PAGE)/[workspace]/pages/search.js (ecmascript) (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

const PAGE_PATH = "/search";
(window.__NEXT_P = window.__NEXT_P || []).push([
    PAGE_PATH,
    ()=>{
        return __turbopack_require__("[workspace]/pages/search.js (ecmascript)");
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

//# sourceMappingURL=[root of the server]__e5467a._.js.map