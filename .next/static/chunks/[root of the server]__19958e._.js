(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/[root of the server]__19958e._.js", {

"[project]/components/DoctorMap.js (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>DiagnosisDashboard
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/jsx-dev-runtime.js (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/index.js (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-chartjs-2/dist/index.js (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/chart.js/dist/chart.js (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$28$ecmascript$29$__["Chart"].register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$28$ecmascript$29$__["CategoryScale"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$28$ecmascript$29$__["LinearScale"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$28$ecmascript$29$__["BarElement"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$28$ecmascript$29$__["Tooltip"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$28$ecmascript$29$__["Legend"]);
function DiagnosisDashboard() {
    _s();
    const [mounted, setMounted] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
    const [symptoms, setSymptoms] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]("");
    const [result, setResult] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](null);
    const [loading, setLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
    // Mounting to prevent hydration errors
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        setMounted(true);
    }, []);
    if (!mounted) return null;
    // Predefined symptom suggestions
    const suggestions = [
        "Fever",
        "Headache",
        "Cough",
        "Chest Pain",
        "Body Weakness",
        "Vomiting",
        "Stomach Pain"
    ];
    const addSymptom = (symptom)=>{
        setSymptoms((prev)=>prev + (prev ? ", " : "") + symptom);
    };
    const handleDiagnose = async ()=>{
        if (!symptoms) {
            alert("Please enter symptoms");
            return;
        }
        setLoading(true);
        try {
            const res = await fetch("http://localhost:5000/api/diagnosis", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    symptoms
                })
            });
            const data = await res.json();
            setResult(data);
        } catch (error) {
            console.error(error);
            alert("Server connection failed");
        }
        setLoading(false);
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
        style: styles.page,
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
            style: styles.container,
            children: [
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h1", {
                    style: styles.header,
                    children: "AI Medical Dashboard"
                }, void 0, false, {
                    fileName: "<[project]/components/DoctorMap.js>",
                    lineNumber: 64,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                    style: styles.subheader,
                    children: "Describe your symptoms and get AI-powered diagnosis + doctor recommendations."
                }, void 0, false, {
                    fileName: "<[project]/components/DoctorMap.js>",
                    lineNumber: 65,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("textarea", {
                    style: styles.input,
                    placeholder: "Type or select symptoms...",
                    value: symptoms,
                    onChange: (e)=>setSymptoms(e.target.value)
                }, void 0, false, {
                    fileName: "<[project]/components/DoctorMap.js>",
                    lineNumber: 70,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                    style: styles.suggestions,
                    children: suggestions.map((symptom)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                            style: styles.chip,
                            onClick: ()=>addSymptom(symptom),
                            children: symptom
                        }, symptom, false, {
                            fileName: "<[project]/components/DoctorMap.js>",
                            lineNumber: 80,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "<[project]/components/DoctorMap.js>",
                    lineNumber: 78,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                    style: styles.button,
                    onClick: handleDiagnose,
                    children: loading ? "Analyzing..." : "Run Diagnosis"
                }, void 0, false, {
                    fileName: "<[project]/components/DoctorMap.js>",
                    lineNumber: 91,
                    columnNumber: 9
                }, this),
                result && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                    style: styles.results,
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h2", {
                            children: "Diagnosis Result"
                        }, void 0, false, {
                            fileName: "<[project]/components/DoctorMap.js>",
                            lineNumber: 98,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                            style: styles.card,
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h3", {
                                    children: "Most Likely Condition"
                                }, void 0, false, {
                                    fileName: "<[project]/components/DoctorMap.js>",
                                    lineNumber: 102,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                    children: result.condition
                                }, void 0, false, {
                                    fileName: "<[project]/components/DoctorMap.js>",
                                    lineNumber: 103,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                    children: [
                                        "Confidence: ",
                                        Math.round(result.confidence * 100),
                                        "%"
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/components/DoctorMap.js>",
                                    lineNumber: 104,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/components/DoctorMap.js>",
                            lineNumber: 101,
                            columnNumber: 13
                        }, this),
                        result.probabilities && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                            style: styles.chart,
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$28$ecmascript$29$__["Bar"], {
                                data: {
                                    labels: Object.keys(result.probabilities),
                                    datasets: [
                                        {
                                            label: "Probability (%)",
                                            data: Object.values(result.probabilities).map((v)=>Math.round(v * 100)),
                                            backgroundColor: "#1CB5E0"
                                        }
                                    ]
                                },
                                options: {
                                    responsive: true,
                                    plugins: {
                                        legend: {
                                            display: false
                                        }
                                    }
                                }
                            }, void 0, false, {
                                fileName: "<[project]/components/DoctorMap.js>",
                                lineNumber: 110,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/components/DoctorMap.js>",
                            lineNumber: 109,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h2", {
                            style: {
                                marginTop: "25px"
                            },
                            children: "Recommended Doctors"
                        }, void 0, false, {
                            fileName: "<[project]/components/DoctorMap.js>",
                            lineNumber: 132,
                            columnNumber: 13
                        }, this),
                        result.doctors?.map((doc)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                style: styles.doctorCard,
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h3", {
                                        children: doc.name
                                    }, void 0, false, {
                                        fileName: "<[project]/components/DoctorMap.js>",
                                        lineNumber: 135,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                        children: [
                                            doc.specialty,
                                            " | ",
                                            doc.hospital_name
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/components/DoctorMap.js>",
                                        lineNumber: 136,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                        children: [
                                            "Experience: ",
                                            doc.experience,
                                            " yrs | Rating: ",
                                            doc.rating
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/components/DoctorMap.js>",
                                        lineNumber: 137,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                        children: [
                                            "Match Score: ",
                                            Math.round(doc.matchScore || 0),
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/components/DoctorMap.js>",
                                        lineNumber: 138,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, doc.id, true, {
                                fileName: "<[project]/components/DoctorMap.js>",
                                lineNumber: 134,
                                columnNumber: 15
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "<[project]/components/DoctorMap.js>",
                    lineNumber: 97,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/components/DoctorMap.js>",
            lineNumber: 63,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/components/DoctorMap.js>",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
_s(DiagnosisDashboard, "aLwdkHhuZURRniDrI7vIEOyaRmg=");
_c = DiagnosisDashboard;
// ====== Styles ======
const styles = {
    page: {
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "50px",
        fontFamily: "Arial, sans-serif",
        background: "linear-gradient(120deg,#1CB5E0,#000851)"
    },
    container: {
        width: "700px",
        background: "white",
        padding: "40px",
        borderRadius: "20px",
        boxShadow: "0px 20px 50px rgba(0,0,0,0.3)"
    },
    header: {
        textAlign: "center",
        color: "#1CB5E0",
        fontSize: "36px"
    },
    subheader: {
        textAlign: "center",
        marginBottom: "30px",
        color: "#444"
    },
    input: {
        width: "100%",
        height: "100px",
        borderRadius: "12px",
        border: "2px solid #1CB5E0",
        padding: "15px",
        fontSize: "16px",
        background: "#fff",
        color: "#000",
        outline: "none"
    },
    suggestions: {
        marginTop: "15px",
        display: "flex",
        flexWrap: "wrap",
        gap: "10px"
    },
    chip: {
        border: "none",
        padding: "8px 15px",
        borderRadius: "25px",
        background: "#e8f6ff",
        cursor: "pointer",
        fontSize: "14px",
        transition: "0.2s"
    },
    button: {
        marginTop: "20px",
        width: "100%",
        padding: "15px",
        borderRadius: "12px",
        border: "none",
        background: "linear-gradient(90deg,#00c6ff,#0072ff)",
        color: "white",
        fontSize: "18px",
        fontWeight: "bold",
        cursor: "pointer"
    },
    results: {
        marginTop: "30px"
    },
    card: {
        background: "#f4f9ff",
        padding: "20px",
        borderRadius: "12px",
        marginTop: "15px",
        borderLeft: "6px solid #1CB5E0"
    },
    chart: {
        marginTop: "20px"
    },
    doctorCard: {
        background: "#e0f0ff",
        padding: "20px",
        borderRadius: "12px",
        marginTop: "15px",
        transition: "0.3s",
        cursor: "pointer"
    }
};
var _c;
__turbopack_refresh__.register(_c, "DiagnosisDashboard");

})()),
"[project]/components/BodySelector.js (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>BodySelector
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/jsx-dev-runtime.js (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
function BodySelector(param) {
    let { addSymptom } = param;
    const bodyParts = [
        {
            name: "Head",
            symptom: "headache"
        },
        {
            name: "Chest",
            symptom: "chest pain"
        },
        {
            name: "Stomach",
            symptom: "stomach pain"
        },
        {
            name: "Throat",
            symptom: "sore throat"
        },
        {
            name: "Back",
            symptom: "back pain"
        },
        {
            name: "Leg",
            symptom: "leg pain"
        }
    ];
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
        style: styles.container,
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h3", {
                children: "Select Body Area"
            }, void 0, false, {
                fileName: "<[project]/components/BodySelector.js>",
                lineNumber: 18,
                columnNumber: 1
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                style: styles.grid,
                children: bodyParts.map((part)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                        onClick: ()=>addSymptom(part.symptom),
                        style: styles.button,
                        children: part.name
                    }, part.name, false, {
                        fileName: "<[project]/components/BodySelector.js>",
                        lineNumber: 23,
                        columnNumber: 1
                    }, this))
            }, void 0, false, {
                fileName: "<[project]/components/BodySelector.js>",
                lineNumber: 20,
                columnNumber: 1
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/components/BodySelector.js>",
        lineNumber: 16,
        columnNumber: 1
    }, this);
}
_c = BodySelector;
const styles = {
    container: {
        marginTop: "20px"
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: "10px"
    },
    button: {
        padding: "10px",
        borderRadius: "8px",
        border: "none",
        background: "#00b894",
        color: "white",
        cursor: "pointer"
    }
};
var _c;
__turbopack_refresh__.register(_c, "BodySelector");

})()),
"[project]/pages/diagnose.js (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>Diagnose
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/jsx-dev-runtime.js (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/index.js (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/axios/index.js (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/index.mjs (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/fa/index.mjs (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BodySelector$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/BodySelector.js (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DoctorMap$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/DoctorMap.js (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
function Diagnose() {
    _s();
    const [mounted, setMounted] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
    const [symptoms, setSymptoms] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]("");
    const [result, setResult] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](null);
    const [loading, setLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
    const [listening, setListening] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        setMounted(true);
    }, []);
    const addSymptom = (symptom)=>{
        setSymptoms((prev)=>prev + " " + symptom);
    };
    const analyze = async ()=>{
        if (!symptoms) return;
        setLoading(true);
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$index$2e$js__$28$ecmascript$29$__["default"].post("http://localhost:5000/api/diagnosis", {
                symptoms
            });
            setResult(res.data);
        } catch (err) {
            console.error(err);
        }
        setLoading(false);
    };
    const startVoiceInput = ()=>{
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) {
            alert("Voice not supported");
            return;
        }
        const recognition = new SpeechRecognition();
        recognition.lang = "en-US";
        recognition.start();
        setListening(true);
        recognition.onresult = (event)=>{
            const text = event.results[0][0].transcript;
            setSymptoms((prev)=>prev + " " + text);
        };
        recognition.onend = ()=>setListening(false);
    };
    if (!mounted) return null;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
        style: styles.page,
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h1", {
                style: styles.title,
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$28$ecmascript$29$__["FaHeartbeat"], {}, void 0, false, {
                        fileName: "<[project]/pages/diagnose.js>",
                        lineNumber: 88,
                        columnNumber: 1
                    }, this),
                    " AI Medical Diagnosis"
                ]
            }, void 0, true, {
                fileName: "<[project]/pages/diagnose.js>",
                lineNumber: 87,
                columnNumber: 1
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                style: styles.inputCard,
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("textarea", {
                        rows: "4",
                        placeholder: "Describe your symptoms...",
                        value: symptoms,
                        onChange: (e)=>setSymptoms(e.target.value),
                        style: styles.textarea
                    }, void 0, false, {
                        fileName: "<[project]/pages/diagnose.js>",
                        lineNumber: 93,
                        columnNumber: 1
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                        onClick: startVoiceInput,
                        style: styles.voiceButton,
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$28$ecmascript$29$__["FaMicrophone"], {}, void 0, false, {
                                fileName: "<[project]/pages/diagnose.js>",
                                lineNumber: 106,
                                columnNumber: 1
                            }, this),
                            listening ? " Listening..." : " Speak Symptoms"
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/pages/diagnose.js>",
                        lineNumber: 101,
                        columnNumber: 1
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                        onClick: analyze,
                        style: styles.button,
                        children: "Analyze Symptoms"
                    }, void 0, false, {
                        fileName: "<[project]/pages/diagnose.js>",
                        lineNumber: 112,
                        columnNumber: 1
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/pages/diagnose.js>",
                lineNumber: 91,
                columnNumber: 1
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BodySelector$2e$js__$28$ecmascript$29$__["default"], {
                addSymptom: addSymptom
            }, void 0, false, {
                fileName: "<[project]/pages/diagnose.js>",
                lineNumber: 121,
                columnNumber: 1
            }, this),
            loading && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                children: "Analyzing..."
            }, void 0, false, {
                fileName: "<[project]/pages/diagnose.js>",
                lineNumber: 123,
                columnNumber: 13
            }, this),
            result && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                style: styles.resultBox,
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h2", {
                        children: "Detected Specialty"
                    }, void 0, false, {
                        fileName: "<[project]/pages/diagnose.js>",
                        lineNumber: 129,
                        columnNumber: 1
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                        style: styles.specialty,
                        children: result.specialty
                    }, void 0, false, {
                        fileName: "<[project]/pages/diagnose.js>",
                        lineNumber: 131,
                        columnNumber: 1
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h2", {
                        children: "Recommended Doctors"
                    }, void 0, false, {
                        fileName: "<[project]/pages/diagnose.js>",
                        lineNumber: 135,
                        columnNumber: 1
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                        style: styles.doctorGrid,
                        children: result.doctors.map((doc)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                style: styles.card,
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h3", {
                                        children: doc.name
                                    }, void 0, false, {
                                        fileName: "<[project]/pages/diagnose.js>",
                                        lineNumber: 142,
                                        columnNumber: 1
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                        children: doc.hospital_name
                                    }, void 0, false, {
                                        fileName: "<[project]/pages/diagnose.js>",
                                        lineNumber: 144,
                                        columnNumber: 1
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                        children: [
                                            "Experience: ",
                                            doc.experience
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/pages/diagnose.js>",
                                        lineNumber: 146,
                                        columnNumber: 1
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                        children: [
                                            "Rating ⭐ ",
                                            doc.rating
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/pages/diagnose.js>",
                                        lineNumber: 148,
                                        columnNumber: 1
                                    }, this)
                                ]
                            }, doc.id, true, {
                                fileName: "<[project]/pages/diagnose.js>",
                                lineNumber: 140,
                                columnNumber: 1
                            }, this))
                    }, void 0, false, {
                        fileName: "<[project]/pages/diagnose.js>",
                        lineNumber: 137,
                        columnNumber: 1
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DoctorMap$2e$js__$28$ecmascript$29$__["default"], {
                        doctors: result.doctors
                    }, void 0, false, {
                        fileName: "<[project]/pages/diagnose.js>",
                        lineNumber: 155,
                        columnNumber: 1
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/pages/diagnose.js>",
                lineNumber: 127,
                columnNumber: 1
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/pages/diagnose.js>",
        lineNumber: 85,
        columnNumber: 1
    }, this);
}
_s(Diagnose, "EqIXcc+ICvS6Wx59wsaRsIyyYto=");
_c = Diagnose;
const styles = {
    page: {
        padding: "40px",
        minHeight: "100vh",
        background: "linear-gradient(135deg,#141E30,#243B55)",
        color: "white"
    },
    title: {
        textAlign: "center",
        marginBottom: "30px"
    },
    inputCard: {
        background: "white",
        padding: "25px",
        borderRadius: "12px",
        maxWidth: "800px",
        margin: "auto",
        color: "black"
    },
    textarea: {
        width: "100%",
        padding: "14px",
        borderRadius: "10px",
        border: "1px solid #ddd",
        marginBottom: "10px"
    },
    voiceButton: {
        background: "#6c5ce7",
        border: "none",
        padding: "10px",
        borderRadius: "8px",
        color: "white",
        marginRight: "10px",
        cursor: "pointer"
    },
    button: {
        background: "#0984e3",
        border: "none",
        padding: "10px",
        borderRadius: "8px",
        color: "white",
        cursor: "pointer"
    },
    resultBox: {
        marginTop: "30px"
    },
    specialty: {
        fontSize: "22px",
        color: "#f1c40f"
    },
    doctorGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
        gap: "20px"
    },
    card: {
        background: "white",
        color: "black",
        padding: "15px",
        borderRadius: "10px"
    }
};
var _c;
__turbopack_refresh__.register(_c, "Diagnose");

})()),
"[next]/entry/page-loader.ts/(PAGE)/[project]/pages/diagnose.js (ecmascript) (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

const PAGE_PATH = "/diagnose";
(window.__NEXT_P = window.__NEXT_P || []).push([
    PAGE_PATH,
    ()=>{
        return __turbopack_require__("[project]/pages/diagnose.js (ecmascript)");
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
"[turbopack]/dev/client/websocket.ts (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {

// Adapted from https://github.com/vercel/next.js/blob/canary/packages/next/client/dev/error-overlay/websocket.ts
__turbopack_esm__({
    "addMessageListener": ()=>addMessageListener,
    "connectHMR": ()=>connectHMR,
    "sendMessage": ()=>sendMessage
});
let source;
const eventCallbacks = [];
// TODO: add timeout again
// let lastActivity = Date.now()
function getSocketProtocol(assetPrefix) {
    let protocol = location.protocol;
    try {
        // assetPrefix is a url
        protocol = new URL(assetPrefix).protocol;
    } catch (_) {}
    return protocol === "http:" ? "ws" : "wss";
}
function addMessageListener(cb) {
    eventCallbacks.push(cb);
}
function sendMessage(data) {
    if (!source || source.readyState !== source.OPEN) return;
    return source.send(data);
}
function connectHMR(options) {
    const { timeout = 5 * 1000 } = options;
    function init() {
        if (source) source.close();
        console.log("[HMR] connecting...");
        function handleOnline() {
            const connected = {
                type: "turbopack-connected"
            };
            eventCallbacks.forEach((cb)=>{
                cb(connected);
            });
            if (options.log) console.log("[HMR] connected");
        // lastActivity = Date.now()
        }
        function handleMessage(event) {
            // lastActivity = Date.now()
            const message = {
                type: "turbopack-message",
                data: JSON.parse(event.data)
            };
            eventCallbacks.forEach((cb)=>{
                cb(message);
            });
        }
        // let timer: NodeJS.Timeout
        function handleDisconnect() {
            source.close();
            setTimeout(init, timeout);
        }
        const { hostname, port } = location;
        const protocol = getSocketProtocol(options.assetPrefix || "");
        const assetPrefix = options.assetPrefix.replace(/^\/+/, "");
        let url = `${protocol}://${hostname}:${port}${assetPrefix ? `/${assetPrefix}` : ""}`;
        if (assetPrefix.startsWith("http")) {
            url = `${protocol}://${assetPrefix.split("://")[1]}`;
        }
        source = new window.WebSocket(`${url}${options.path}`);
        source.onopen = handleOnline;
        source.onerror = handleDisconnect;
        source.onmessage = handleMessage;
    }
    init();
}

})()),
"[turbopack]/dev/client/hmr-client.ts (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {

/// <reference path="../../shared/runtime-types.d.ts" />
/// <reference path="../runtime/base/globals.d.ts" />
/// <reference path="../runtime/base/protocol.d.ts" />
/// <reference path="../runtime/base/extensions.d.ts" />
__turbopack_esm__({
    "connect": ()=>connect,
    "setHooks": ()=>setHooks,
    "subscribeToUpdate": ()=>subscribeToUpdate
});
var __TURBOPACK__imported__module__$5b$turbopack$5d2f$dev$2f$client$2f$websocket$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[turbopack]/dev/client/websocket.ts (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
function connect(param) {
    let { // TODO(WEB-1465) Remove this backwards compat fallback once
    // vercel/next.js#54586 is merged.
    addMessageListener = __TURBOPACK__imported__module__$5b$turbopack$5d2f$dev$2f$client$2f$websocket$2e$ts__$28$ecmascript$29$__["addMessageListener"], // TODO(WEB-1465) Remove this backwards compat fallback once
    // vercel/next.js#54586 is merged.
    sendMessage = __TURBOPACK__imported__module__$5b$turbopack$5d2f$dev$2f$client$2f$websocket$2e$ts__$28$ecmascript$29$__["sendMessage"] } = param;
    addMessageListener((msg)=>{
        switch(msg.type){
            case "turbopack-connected":
                handleSocketConnected(sendMessage);
                break;
            default:
                if (Array.isArray(msg.data)) {
                    for(let i = 0; i < msg.data.length; i++){
                        handleSocketMessage(msg.data[i], i !== msg.data.length - 1);
                    }
                } else {
                    handleSocketMessage(msg.data);
                }
                break;
        }
    });
    const queued = globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS;
    if (queued != null && !Array.isArray(queued)) {
        throw new Error("A separate HMR handler was already registered");
    }
    globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS = {
        push: (param)=>{
            let [chunkPath, callback] = param;
            subscribeToChunkUpdate(chunkPath, sendMessage, callback);
        }
    };
    if (Array.isArray(queued)) {
        for (const [chunkPath, callback] of queued){
            subscribeToChunkUpdate(chunkPath, sendMessage, callback);
        }
    }
}
const updateCallbackSets = new Map();
function sendJSON(sendMessage, message) {
    sendMessage(JSON.stringify(message));
}
function resourceKey(resource) {
    return JSON.stringify({
        path: resource.path,
        headers: resource.headers || null
    });
}
function subscribeToUpdates(sendMessage, resource) {
    sendJSON(sendMessage, {
        type: "turbopack-subscribe",
        ...resource
    });
    return ()=>{
        sendJSON(sendMessage, {
            type: "turbopack-unsubscribe",
            ...resource
        });
    };
}
function handleSocketConnected(sendMessage) {
    for (const key of updateCallbackSets.keys()){
        subscribeToUpdates(sendMessage, JSON.parse(key));
    }
}
// we aggregate all pending updates until the issues are resolved
const chunkListsWithPendingUpdates = new Map();
function aggregateUpdates(msg, aggregate) {
    const key = resourceKey(msg.resource);
    let aggregated = chunkListsWithPendingUpdates.get(key);
    if (msg.type === "issues" && aggregated != null) {
        if (!aggregate) {
            chunkListsWithPendingUpdates.delete(key);
        }
        return {
            ...msg,
            type: "partial",
            instruction: aggregated.update
        };
    }
    if (msg.type !== "partial") return msg;
    if (aggregated == null) {
        if (aggregate) {
            chunkListsWithPendingUpdates.set(key, {
                resource: msg.resource,
                update: msg.instruction
            });
        }
        return msg;
    }
    aggregated = {
        resource: msg.resource,
        update: mergeChunkListUpdates(aggregated.update, msg.instruction)
    };
    if (aggregate) {
        chunkListsWithPendingUpdates.set(key, aggregated);
    } else {
        // Once we receive a partial update with no critical issues, we can stop aggregating updates.
        // The aggregated update will be applied.
        chunkListsWithPendingUpdates.delete(key);
    }
    return {
        ...msg,
        instruction: aggregated.update
    };
}
function mergeChunkListUpdates(updateA, updateB) {
    let chunks;
    if (updateA.chunks != null) {
        if (updateB.chunks == null) {
            chunks = updateA.chunks;
        } else {
            chunks = mergeChunkListChunks(updateA.chunks, updateB.chunks);
        }
    } else if (updateB.chunks != null) {
        chunks = updateB.chunks;
    }
    let merged;
    if (updateA.merged != null) {
        if (updateB.merged == null) {
            merged = updateA.merged;
        } else {
            // Since `merged` is an array of updates, we need to merge them all into
            // one, consistent update.
            // Since there can only be `EcmascriptMergeUpdates` in the array, there is
            // no need to key on the `type` field.
            let update = updateA.merged[0];
            for(let i = 1; i < updateA.merged.length; i++){
                update = mergeChunkListEcmascriptMergedUpdates(update, updateA.merged[i]);
            }
            for(let i = 0; i < updateB.merged.length; i++){
                update = mergeChunkListEcmascriptMergedUpdates(update, updateB.merged[i]);
            }
            merged = [
                update
            ];
        }
    } else if (updateB.merged != null) {
        merged = updateB.merged;
    }
    return {
        type: "ChunkListUpdate",
        chunks,
        merged
    };
}
function mergeChunkListChunks(chunksA, chunksB) {
    const chunks = {};
    for (const [chunkPath, chunkUpdateA] of Object.entries(chunksA)){
        const chunkUpdateB = chunksB[chunkPath];
        if (chunkUpdateB != null) {
            const mergedUpdate = mergeChunkUpdates(chunkUpdateA, chunkUpdateB);
            if (mergedUpdate != null) {
                chunks[chunkPath] = mergedUpdate;
            }
        } else {
            chunks[chunkPath] = chunkUpdateA;
        }
    }
    for (const [chunkPath, chunkUpdateB] of Object.entries(chunksB)){
        if (chunks[chunkPath] == null) {
            chunks[chunkPath] = chunkUpdateB;
        }
    }
    return chunks;
}
function mergeChunkUpdates(updateA, updateB) {
    if (updateA.type === "added" && updateB.type === "deleted" || updateA.type === "deleted" && updateB.type === "added") {
        return undefined;
    }
    if (updateA.type === "partial") {
        invariant(updateA.instruction, "Partial updates are unsupported");
    }
    if (updateB.type === "partial") {
        invariant(updateB.instruction, "Partial updates are unsupported");
    }
    return undefined;
}
function mergeChunkListEcmascriptMergedUpdates(mergedA, mergedB) {
    const entries = mergeEcmascriptChunkEntries(mergedA.entries, mergedB.entries);
    const chunks = mergeEcmascriptChunksUpdates(mergedA.chunks, mergedB.chunks);
    return {
        type: "EcmascriptMergedUpdate",
        entries,
        chunks
    };
}
function mergeEcmascriptChunkEntries(entriesA, entriesB) {
    return {
        ...entriesA,
        ...entriesB
    };
}
function mergeEcmascriptChunksUpdates(chunksA, chunksB) {
    if (chunksA == null) {
        return chunksB;
    }
    if (chunksB == null) {
        return chunksA;
    }
    const chunks = {};
    for (const [chunkPath, chunkUpdateA] of Object.entries(chunksA)){
        const chunkUpdateB = chunksB[chunkPath];
        if (chunkUpdateB != null) {
            const mergedUpdate = mergeEcmascriptChunkUpdates(chunkUpdateA, chunkUpdateB);
            if (mergedUpdate != null) {
                chunks[chunkPath] = mergedUpdate;
            }
        } else {
            chunks[chunkPath] = chunkUpdateA;
        }
    }
    for (const [chunkPath, chunkUpdateB] of Object.entries(chunksB)){
        if (chunks[chunkPath] == null) {
            chunks[chunkPath] = chunkUpdateB;
        }
    }
    if (Object.keys(chunks).length === 0) {
        return undefined;
    }
    return chunks;
}
function mergeEcmascriptChunkUpdates(updateA, updateB) {
    if (updateA.type === "added" && updateB.type === "deleted") {
        // These two completely cancel each other out.
        return undefined;
    }
    if (updateA.type === "deleted" && updateB.type === "added") {
        const added = [];
        const deleted = [];
        const deletedModules = new Set(updateA.modules ?? []);
        const addedModules = new Set(updateB.modules ?? []);
        for (const moduleId of addedModules){
            if (!deletedModules.has(moduleId)) {
                added.push(moduleId);
            }
        }
        for (const moduleId of deletedModules){
            if (!addedModules.has(moduleId)) {
                deleted.push(moduleId);
            }
        }
        if (added.length === 0 && deleted.length === 0) {
            return undefined;
        }
        return {
            type: "partial",
            added,
            deleted
        };
    }
    if (updateA.type === "partial" && updateB.type === "partial") {
        const added = new Set([
            ...updateA.added ?? [],
            ...updateB.added ?? []
        ]);
        const deleted = new Set([
            ...updateA.deleted ?? [],
            ...updateB.deleted ?? []
        ]);
        if (updateB.added != null) {
            for (const moduleId of updateB.added){
                deleted.delete(moduleId);
            }
        }
        if (updateB.deleted != null) {
            for (const moduleId of updateB.deleted){
                added.delete(moduleId);
            }
        }
        return {
            type: "partial",
            added: [
                ...added
            ],
            deleted: [
                ...deleted
            ]
        };
    }
    if (updateA.type === "added" && updateB.type === "partial") {
        const modules = new Set([
            ...updateA.modules ?? [],
            ...updateB.added ?? []
        ]);
        for (const moduleId of updateB.deleted ?? []){
            modules.delete(moduleId);
        }
        return {
            type: "added",
            modules: [
                ...modules
            ]
        };
    }
    if (updateA.type === "partial" && updateB.type === "deleted") {
        // We could eagerly return `updateB` here, but this would potentially be
        // incorrect if `updateA` has added modules.
        const modules = new Set(updateB.modules ?? []);
        if (updateA.added != null) {
            for (const moduleId of updateA.added){
                modules.delete(moduleId);
            }
        }
        return {
            type: "deleted",
            modules: [
                ...modules
            ]
        };
    }
    // Any other update combination is invalid.
    return undefined;
}
function invariant(never, message) {
    throw new Error(`Invariant: ${message}`);
}
const CRITICAL = [
    "bug",
    "error",
    "fatal"
];
function compareByList(list, a, b) {
    const aI = list.indexOf(a) + 1 || list.length;
    const bI = list.indexOf(b) + 1 || list.length;
    return aI - bI;
}
const chunksWithIssues = new Map();
function emitIssues() {
    const issues = [];
    const deduplicationSet = new Set();
    for (const [_, chunkIssues] of chunksWithIssues){
        for (const chunkIssue of chunkIssues){
            if (deduplicationSet.has(chunkIssue.formatted)) continue;
            issues.push(chunkIssue);
            deduplicationSet.add(chunkIssue.formatted);
        }
    }
    sortIssues(issues);
    hooks.issues(issues);
}
function handleIssues(msg) {
    const key = resourceKey(msg.resource);
    let hasCriticalIssues = false;
    for (const issue of msg.issues){
        if (CRITICAL.includes(issue.severity)) {
            hasCriticalIssues = true;
        }
    }
    if (msg.issues.length > 0) {
        chunksWithIssues.set(key, msg.issues);
    } else if (chunksWithIssues.has(key)) {
        chunksWithIssues.delete(key);
    }
    emitIssues();
    return hasCriticalIssues;
}
const SEVERITY_ORDER = [
    "bug",
    "fatal",
    "error",
    "warning",
    "info",
    "log"
];
const CATEGORY_ORDER = [
    "parse",
    "resolve",
    "code generation",
    "rendering",
    "typescript",
    "other"
];
function sortIssues(issues) {
    issues.sort((a, b)=>{
        const first = compareByList(SEVERITY_ORDER, a.severity, b.severity);
        if (first !== 0) return first;
        return compareByList(CATEGORY_ORDER, a.category, b.category);
    });
}
const hooks = {
    beforeRefresh: ()=>{},
    refresh: ()=>{},
    buildOk: ()=>{},
    issues: (issues)=>{}
};
function setHooks(newHooks) {
    Object.assign(hooks, newHooks);
}
function handleSocketMessage(msg) {
    let aggregate = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    sortIssues(msg.issues);
    const hasCriticalIssues = handleIssues(msg);
    // TODO(WEB-582) Disable update aggregation for now.
    // if(hasCriticalIssues) {
    //   aggregate = true;
    // }
    const aggregatedMsg = aggregateUpdates(msg, aggregate);
    if (aggregate) return;
    const runHooks = chunkListsWithPendingUpdates.size === 0;
    if (aggregatedMsg.type !== "issues") {
        if (runHooks) hooks.beforeRefresh();
        triggerUpdate(aggregatedMsg);
        if (runHooks) hooks.refresh();
    }
    if (runHooks) hooks.buildOk();
    // This is used by the Next.js integration test suite to notify it when HMR
    // updates have been completed.
    // TODO: Only run this in test environments (gate by `process.env.__NEXT_TEST_MODE`)
    if (aggregatedMsg.type !== "issues" && globalThis.__NEXT_HMR_CB) {
        globalThis.__NEXT_HMR_CB();
        globalThis.__NEXT_HMR_CB = null;
    }
}
function subscribeToChunkUpdate(chunkPath, sendMessage, callback) {
    return subscribeToUpdate({
        path: chunkPath
    }, sendMessage, callback);
}
function subscribeToUpdate(resource, sendMessage, callback) {
    // TODO(WEB-1465) Remove this backwards compat fallback once
    // vercel/next.js#54586 is merged.
    if (callback === undefined) {
        callback = sendMessage;
        sendMessage = __TURBOPACK__imported__module__$5b$turbopack$5d2f$dev$2f$client$2f$websocket$2e$ts__$28$ecmascript$29$__["sendMessage"];
    }
    const key = resourceKey(resource);
    let callbackSet;
    const existingCallbackSet = updateCallbackSets.get(key);
    if (!existingCallbackSet) {
        callbackSet = {
            callbacks: new Set([
                callback
            ]),
            unsubscribe: subscribeToUpdates(sendMessage, resource)
        };
        updateCallbackSets.set(key, callbackSet);
    } else {
        existingCallbackSet.callbacks.add(callback);
        callbackSet = existingCallbackSet;
    }
    return ()=>{
        callbackSet.callbacks.delete(callback);
        if (callbackSet.callbacks.size === 0) {
            callbackSet.unsubscribe();
            updateCallbackSets.delete(key);
        }
    };
}
function triggerUpdate(msg) {
    const key = resourceKey(msg.resource);
    const callbackSet = updateCallbackSets.get(key);
    if (!callbackSet) {
        return;
    }
    try {
        for (const callback of callbackSet.callbacks){
            callback(msg);
        }
        if (msg.type === "notFound") {
            // This indicates that the resource which we subscribed to either does not exist or
            // has been deleted. In either case, we should clear all update callbacks, so if a
            // new subscription is created for the same resource, it will send a new "subscribe"
            // message to the server.
            // No need to send an "unsubscribe" message to the server, it will have already
            // dropped the update stream before sending the "notFound" message.
            updateCallbackSets.delete(key);
        }
    } catch (err) {
        console.error(`An error occurred during the update of resource \`${msg.resource.path}\``, err);
        location.reload();
    }
}

})()),
}]);

//# sourceMappingURL=[root of the server]__19958e._.js.map