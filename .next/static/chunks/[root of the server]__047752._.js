(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/[root of the server]__047752._.js", {

"[workspace]/pages/dashboard.js (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>Dashboard
});
var __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[workspace]/node_modules/react/jsx-runtime.js (ecmascript)");
var __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[workspace]/node_modules/react/index.js (ecmascript)");
var __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$axios$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[workspace]/node_modules/axios/index.js (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
function Dashboard() {
    const [patientName, setPatientName] = __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]("");
    const [symptoms, setSymptoms] = __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]("");
    const [diagnoses, setDiagnoses] = __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]([]);
    const [loading, setLoading] = __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
    const [error, setError] = __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]("");
    // Fetch diagnosis history from backend
    const fetchHistory = async ()=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$axios$2f$index$2e$js__$28$ecmascript$29$__["default"].get("http://localhost:5000/api/diagnoses");
            setDiagnoses(res.data);
        } catch (err) {
            console.error(err);
            setError("Failed to fetch diagnosis history");
        }
    };
    __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        fetchHistory();
    }, []);
    // Handle form submission
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        setError("");
        try {
            const res = await __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$axios$2f$index$2e$js__$28$ecmascript$29$__["default"].post("http://localhost:5000/api/diagnose", {
                patient_name: patientName,
                symptoms
            });
            if (res.data) {
                // Add new diagnosis to the list
                setDiagnoses((prev)=>[
                        res.data,
                        ...prev
                    ]);
                setPatientName("");
                setSymptoms("");
            }
        } catch (err) {
            console.error(err);
            setError("Diagnosis failed");
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsxs"]("div", {
        style: {
            maxWidth: "800px",
            margin: "auto",
            padding: "2rem"
        },
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("h1", {
                children: "Patient Diagnosis Dashboard"
            }),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsxs"]("form", {
                onSubmit: handleSubmit,
                style: {
                    marginBottom: "2rem"
                },
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsxs"]("div", {
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("label", {
                                children: "Patient Name:"
                            }),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("input", {
                                type: "text",
                                value: patientName,
                                onChange: (e)=>setPatientName(e.target.value),
                                required: true,
                                style: {
                                    width: "100%",
                                    padding: "0.5rem",
                                    margin: "0.5rem 0"
                                }
                            })
                        ]
                    }),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsxs"]("div", {
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("label", {
                                children: "Symptoms:"
                            }),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("textarea", {
                                value: symptoms,
                                onChange: (e)=>setSymptoms(e.target.value),
                                required: true,
                                rows: 4,
                                style: {
                                    width: "100%",
                                    padding: "0.5rem",
                                    margin: "0.5rem 0"
                                }
                            })
                        ]
                    }),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("button", {
                        type: "submit",
                        disabled: loading,
                        children: loading ? "Diagnosing..." : "Diagnose"
                    })
                ]
            }),
            error && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("p", {
                style: {
                    color: "red"
                },
                children: error
            }),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("h2", {
                children: "Diagnosis History"
            }),
            diagnoses.length === 0 ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("p", {
                children: "No diagnoses yet."
            }) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsxs"]("table", {
                style: {
                    width: "100%",
                    borderCollapse: "collapse",
                    marginTop: "1rem"
                },
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("thead", {
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsxs"]("tr", {
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("th", {
                                    style: {
                                        border: "1px solid #ddd",
                                        padding: "0.5rem"
                                    },
                                    children: "Patient"
                                }),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("th", {
                                    style: {
                                        border: "1px solid #ddd",
                                        padding: "0.5rem"
                                    },
                                    children: "Symptoms"
                                }),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("th", {
                                    style: {
                                        border: "1px solid #ddd",
                                        padding: "0.5rem"
                                    },
                                    children: "Diagnosis"
                                }),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("th", {
                                    style: {
                                        border: "1px solid #ddd",
                                        padding: "0.5rem"
                                    },
                                    children: "Confidence"
                                }),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("th", {
                                    style: {
                                        border: "1px solid #ddd",
                                        padding: "0.5rem"
                                    },
                                    children: "Severity"
                                }),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("th", {
                                    style: {
                                        border: "1px solid #ddd",
                                        padding: "0.5rem"
                                    },
                                    children: "Doctor"
                                }),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("th", {
                                    style: {
                                        border: "1px solid #ddd",
                                        padding: "0.5rem"
                                    },
                                    children: "Hospital"
                                }),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("th", {
                                    style: {
                                        border: "1px solid #ddd",
                                        padding: "0.5rem"
                                    },
                                    children: "Date"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("tbody", {
                        children: diagnoses.map((d)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsxs"]("tr", {
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("td", {
                                        style: {
                                            border: "1px solid #ddd",
                                            padding: "0.5rem"
                                        },
                                        children: d.patient_name
                                    }),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("td", {
                                        style: {
                                            border: "1px solid #ddd",
                                            padding: "0.5rem"
                                        },
                                        children: d.symptoms
                                    }),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("td", {
                                        style: {
                                            border: "1px solid #ddd",
                                            padding: "0.5rem"
                                        },
                                        children: d.diagnosis
                                    }),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsxs"]("td", {
                                        style: {
                                            border: "1px solid #ddd",
                                            padding: "0.5rem"
                                        },
                                        children: [
                                            (d.confidence * 100).toFixed(1),
                                            "%"
                                        ]
                                    }),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("td", {
                                        style: {
                                            border: "1px solid #ddd",
                                            padding: "0.5rem"
                                        },
                                        children: d.severity
                                    }),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("td", {
                                        style: {
                                            border: "1px solid #ddd",
                                            padding: "0.5rem"
                                        },
                                        children: d.doctor_name
                                    }),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("td", {
                                        style: {
                                            border: "1px solid #ddd",
                                            padding: "0.5rem"
                                        },
                                        children: d.hospital
                                    }),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("td", {
                                        style: {
                                            border: "1px solid #ddd",
                                            padding: "0.5rem"
                                        },
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
"[next]/entry/page-loader.ts/(PAGE)/[workspace]/pages/dashboard.js (ecmascript) (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

const PAGE_PATH = "/dashboard";
(window.__NEXT_P = window.__NEXT_P || []).push([
    PAGE_PATH,
    ()=>{
        return __turbopack_require__("[workspace]/pages/dashboard.js (ecmascript)");
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

//# sourceMappingURL=[root of the server]__047752._.js.map