module.exports = {

"[workspace]/pages/history.js (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {

__turbopack_esm__({
    "default": ()=>History
});
var __TURBOPACK__external__react$2f$jsx$2d$runtime__ = __turbopack_external_require__("react/jsx-runtime", true);
var __TURBOPACK__external__react__ = __turbopack_external_require__("react", true);
var __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$axios$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[workspace]/node_modules/axios/index.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
function History() {
    const [diagnoses, setDiagnoses] = __TURBOPACK__external__react__["useState"]([]);
    const [loading, setLoading] = __TURBOPACK__external__react__["useState"](true);
    __TURBOPACK__external__react__["useEffect"](()=>{
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
    if (loading) return /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("p", {
        style: {
            padding: "2rem"
        },
        children: "Loading records..."
    });
    return /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsxs"]("div", {
        style: {
            padding: "2rem",
            fontFamily: "sans-serif"
        },
        children: [
            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("h1", {
                children: "Diagnosis History"
            }),
            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsxs"]("table", {
                border: "1",
                cellPadding: "10",
                style: {
                    width: "100%"
                },
                children: [
                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("thead", {
                        children: /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsxs"]("tr", {
                            children: [
                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("th", {
                                    children: "Patient"
                                }),
                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("th", {
                                    children: "Symptoms"
                                }),
                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("th", {
                                    children: "Diagnosis"
                                }),
                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("th", {
                                    children: "Severity"
                                }),
                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("th", {
                                    children: "Confidence"
                                }),
                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("th", {
                                    children: "Doctor"
                                }),
                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("th", {
                                    children: "Hospital"
                                }),
                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("th", {
                                    children: "Date"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("tbody", {
                        children: diagnoses.map((d)=>/*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsxs"]("tr", {
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("td", {
                                        children: d.patient_name
                                    }),
                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("td", {
                                        children: d.symptoms
                                    }),
                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("td", {
                                        children: d.diagnosis
                                    }),
                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("td", {
                                        children: d.severity
                                    }),
                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsxs"]("td", {
                                        children: [
                                            (d.confidence * 100).toFixed(0),
                                            "%"
                                        ]
                                    }),
                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("td", {
                                        children: d.doctor_name
                                    }),
                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("td", {
                                        children: d.hospital
                                    }),
                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("td", {
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

};

//# sourceMappingURL=pages_5a3549._.js.map