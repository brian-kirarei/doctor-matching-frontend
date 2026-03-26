(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/[root of the server]__2e399e._.js", {

"[workspace]/components/DoctorMap.js (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>DiagnosisDashboard
});
var __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[workspace]/node_modules/react/jsx-runtime.js (ecmascript)");
var __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[workspace]/node_modules/react/index.js (ecmascript)");
var __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[workspace]/node_modules/react-chartjs-2/dist/index.js (ecmascript)");
var __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[workspace]/node_modules/chart.js/dist/chart.js (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
__TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$28$ecmascript$29$__["Chart"].register(__TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$28$ecmascript$29$__["CategoryScale"], __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$28$ecmascript$29$__["LinearScale"], __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$28$ecmascript$29$__["BarElement"], __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$28$ecmascript$29$__["Tooltip"], __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$28$ecmascript$29$__["Legend"]);
function DiagnosisDashboard() {
    const [mounted, setMounted] = __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
    const [symptoms, setSymptoms] = __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]("");
    const [result, setResult] = __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](null);
    const [loading, setLoading] = __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
    // Mounting to prevent hydration errors
    __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
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
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("div", {
        style: styles.page,
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsxs"]("div", {
            style: styles.container,
            children: [
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("h1", {
                    style: styles.header,
                    children: "AI Medical Dashboard"
                }),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("p", {
                    style: styles.subheader,
                    children: "Describe your symptoms and get AI-powered diagnosis + doctor recommendations."
                }),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("textarea", {
                    style: styles.input,
                    placeholder: "Type or select symptoms...",
                    value: symptoms,
                    onChange: (e)=>setSymptoms(e.target.value)
                }),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("div", {
                    style: styles.suggestions,
                    children: suggestions.map((symptom)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("button", {
                            style: styles.chip,
                            onClick: ()=>addSymptom(symptom),
                            children: symptom
                        }, symptom))
                }),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("button", {
                    style: styles.button,
                    onClick: handleDiagnose,
                    children: loading ? "Analyzing..." : "Run Diagnosis"
                }),
                result && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsxs"]("div", {
                    style: styles.results,
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("h2", {
                            children: "Diagnosis Result"
                        }),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsxs"]("div", {
                            style: styles.card,
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("h3", {
                                    children: "Most Likely Condition"
                                }),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("p", {
                                    children: result.condition
                                }),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsxs"]("p", {
                                    children: [
                                        "Confidence: ",
                                        Math.round(result.confidence * 100),
                                        "%"
                                    ]
                                })
                            ]
                        }),
                        result.probabilities && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("div", {
                            style: styles.chart,
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"](__TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$28$ecmascript$29$__["Bar"], {
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
                            })
                        }),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("h2", {
                            style: {
                                marginTop: "25px"
                            },
                            children: "Recommended Doctors"
                        }),
                        result.doctors?.map((doc)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsxs"]("div", {
                                style: styles.doctorCard,
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("h3", {
                                        children: doc.name
                                    }),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsxs"]("p", {
                                        children: [
                                            doc.specialty,
                                            " | ",
                                            doc.hospital_name
                                        ]
                                    }),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsxs"]("p", {
                                        children: [
                                            "Experience: ",
                                            doc.experience,
                                            " yrs | Rating: ",
                                            doc.rating
                                        ]
                                    }),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsxs"]("p", {
                                        children: [
                                            "Match Score: ",
                                            Math.round(doc.matchScore || 0),
                                            "%"
                                        ]
                                    })
                                ]
                            }, doc.id))
                    ]
                })
            ]
        })
    });
}
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

})()),
"[workspace]/components/BodySelector.js (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>BodySelector
});
var __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[workspace]/node_modules/react/jsx-runtime.js (ecmascript)");
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
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsxs"]("div", {
        style: styles.container,
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("h3", {
                children: "Select Body Area"
            }),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("div", {
                style: styles.grid,
                children: bodyParts.map((part)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("button", {
                        onClick: ()=>addSymptom(part.symptom),
                        style: styles.button,
                        children: part.name
                    }, part.name))
            })
        ]
    });
}
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

})()),
"[workspace]/pages/diagnose.js (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>Diagnose
});
var __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[workspace]/node_modules/react/jsx-runtime.js (ecmascript)");
var __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[workspace]/node_modules/react/index.js (ecmascript)");
var __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$axios$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[workspace]/node_modules/axios/index.js (ecmascript)");
var __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$28$ecmascript$29$__ = __turbopack_import__("[workspace]/node_modules/framer-motion/dist/es/index.mjs (ecmascript)");
var __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$28$ecmascript$29$__ = __turbopack_import__("[workspace]/node_modules/react-icons/fa/index.mjs (ecmascript)");
var __TURBOPACK__imported__module__$5b$workspace$5d2f$components$2f$BodySelector$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[workspace]/components/BodySelector.js (ecmascript)");
var __TURBOPACK__imported__module__$5b$workspace$5d2f$components$2f$DoctorMap$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[workspace]/components/DoctorMap.js (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
;
;
;
function Diagnose() {
    const [mounted, setMounted] = __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
    const [symptoms, setSymptoms] = __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]("");
    const [result, setResult] = __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](null);
    const [loading, setLoading] = __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
    const [listening, setListening] = __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
    __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        setMounted(true);
    }, []);
    const addSymptom = (symptom)=>{
        setSymptoms((prev)=>prev + " " + symptom);
    };
    const analyze = async ()=>{
        if (!symptoms) return;
        setLoading(true);
        try {
            const res = await __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$axios$2f$index$2e$js__$28$ecmascript$29$__["default"].post("http://localhost:5000/api/diagnosis", {
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
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsxs"]("div", {
        style: styles.page,
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsxs"]("h1", {
                style: styles.title,
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"](__TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$28$ecmascript$29$__["FaHeartbeat"], {}),
                    " AI Medical Diagnosis"
                ]
            }),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsxs"]("div", {
                style: styles.inputCard,
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("textarea", {
                        rows: "4",
                        placeholder: "Describe your symptoms...",
                        value: symptoms,
                        onChange: (e)=>setSymptoms(e.target.value),
                        style: styles.textarea
                    }),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsxs"]("button", {
                        onClick: startVoiceInput,
                        style: styles.voiceButton,
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"](__TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$28$ecmascript$29$__["FaMicrophone"], {}),
                            listening ? " Listening..." : " Speak Symptoms"
                        ]
                    }),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("button", {
                        onClick: analyze,
                        style: styles.button,
                        children: "Analyze Symptoms"
                    })
                ]
            }),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"](__TURBOPACK__imported__module__$5b$workspace$5d2f$components$2f$BodySelector$2e$js__$28$ecmascript$29$__["default"], {
                addSymptom: addSymptom
            }),
            loading && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("p", {
                children: "Analyzing..."
            }),
            result && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsxs"]("div", {
                style: styles.resultBox,
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("h2", {
                        children: "Detected Specialty"
                    }),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("p", {
                        style: styles.specialty,
                        children: result.specialty
                    }),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("h2", {
                        children: "Recommended Doctors"
                    }),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("div", {
                        style: styles.doctorGrid,
                        children: result.doctors.map((doc)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsxs"]("div", {
                                style: styles.card,
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("h3", {
                                        children: doc.name
                                    }),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("p", {
                                        children: doc.hospital_name
                                    }),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsxs"]("p", {
                                        children: [
                                            "Experience: ",
                                            doc.experience
                                        ]
                                    }),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsxs"]("p", {
                                        children: [
                                            "Rating ⭐ ",
                                            doc.rating
                                        ]
                                    })
                                ]
                            }, doc.id))
                    }),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"](__TURBOPACK__imported__module__$5b$workspace$5d2f$components$2f$DoctorMap$2e$js__$28$ecmascript$29$__["default"], {
                        doctors: result.doctors
                    })
                ]
            })
        ]
    });
}
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

})()),
"[next]/entry/page-loader.ts/(PAGE)/[workspace]/pages/diagnose.js (ecmascript) (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

const PAGE_PATH = "/diagnose";
(window.__NEXT_P = window.__NEXT_P || []).push([
    PAGE_PATH,
    ()=>{
        return __turbopack_require__("[workspace]/pages/diagnose.js (ecmascript)");
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

//# sourceMappingURL=[root of the server]__2e399e._.js.map