module.exports = {

"[workspace]/pages/dashboard.js (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {

__turbopack_esm__({
    "default": ()=>Dashboard
});
var __TURBOPACK__external__react$2f$jsx$2d$runtime__ = __turbopack_external_require__("react/jsx-runtime", true);
var __TURBOPACK__external__react__ = __turbopack_external_require__("react", true);
var __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$axios$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[workspace]/node_modules/axios/index.js (ecmascript, ssr)");
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
    __TURBOPACK__external__react__["useEffect"](()=>{
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
    return /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsxs"]("div", {
        style: {
            maxWidth: "800px",
            margin: "auto",
            padding: "2rem"
        },
        children: [
            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("h1", {
                children: "Patient Diagnosis Dashboard"
            }),
            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsxs"]("form", {
                onSubmit: handleSubmit,
                style: {
                    marginBottom: "2rem"
                },
                children: [
                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsxs"]("div", {
                        children: [
                            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("label", {
                                children: "Patient Name:"
                            }),
                            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("input", {
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
                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsxs"]("div", {
                        children: [
                            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("label", {
                                children: "Symptoms:"
                            }),
                            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("textarea", {
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
                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("button", {
                        type: "submit",
                        disabled: loading,
                        children: loading ? "Diagnosing..." : "Diagnose"
                    })
                ]
            }),
            error && /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("p", {
                style: {
                    color: "red"
                },
                children: error
            }),
            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("h2", {
                children: "Diagnosis History"
            }),
            diagnoses.length === 0 ? /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("p", {
                children: "No diagnoses yet."
            }) : /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsxs"]("table", {
                style: {
                    width: "100%",
                    borderCollapse: "collapse",
                    marginTop: "1rem"
                },
                children: [
                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("thead", {
                        children: /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsxs"]("tr", {
                            children: [
                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("th", {
                                    style: {
                                        border: "1px solid #ddd",
                                        padding: "0.5rem"
                                    },
                                    children: "Patient"
                                }),
                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("th", {
                                    style: {
                                        border: "1px solid #ddd",
                                        padding: "0.5rem"
                                    },
                                    children: "Symptoms"
                                }),
                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("th", {
                                    style: {
                                        border: "1px solid #ddd",
                                        padding: "0.5rem"
                                    },
                                    children: "Diagnosis"
                                }),
                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("th", {
                                    style: {
                                        border: "1px solid #ddd",
                                        padding: "0.5rem"
                                    },
                                    children: "Confidence"
                                }),
                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("th", {
                                    style: {
                                        border: "1px solid #ddd",
                                        padding: "0.5rem"
                                    },
                                    children: "Severity"
                                }),
                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("th", {
                                    style: {
                                        border: "1px solid #ddd",
                                        padding: "0.5rem"
                                    },
                                    children: "Doctor"
                                }),
                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("th", {
                                    style: {
                                        border: "1px solid #ddd",
                                        padding: "0.5rem"
                                    },
                                    children: "Hospital"
                                }),
                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("th", {
                                    style: {
                                        border: "1px solid #ddd",
                                        padding: "0.5rem"
                                    },
                                    children: "Date"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("tbody", {
                        children: diagnoses.map((d)=>/*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsxs"]("tr", {
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("td", {
                                        style: {
                                            border: "1px solid #ddd",
                                            padding: "0.5rem"
                                        },
                                        children: d.patient_name
                                    }),
                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("td", {
                                        style: {
                                            border: "1px solid #ddd",
                                            padding: "0.5rem"
                                        },
                                        children: d.symptoms
                                    }),
                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("td", {
                                        style: {
                                            border: "1px solid #ddd",
                                            padding: "0.5rem"
                                        },
                                        children: d.diagnosis
                                    }),
                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsxs"]("td", {
                                        style: {
                                            border: "1px solid #ddd",
                                            padding: "0.5rem"
                                        },
                                        children: [
                                            (d.confidence * 100).toFixed(1),
                                            "%"
                                        ]
                                    }),
                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("td", {
                                        style: {
                                            border: "1px solid #ddd",
                                            padding: "0.5rem"
                                        },
                                        children: d.severity
                                    }),
                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("td", {
                                        style: {
                                            border: "1px solid #ddd",
                                            padding: "0.5rem"
                                        },
                                        children: d.doctor_name
                                    }),
                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("td", {
                                        style: {
                                            border: "1px solid #ddd",
                                            padding: "0.5rem"
                                        },
                                        children: d.hospital
                                    }),
                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("td", {
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

//# sourceMappingURL=pages_283b1a._.js.map