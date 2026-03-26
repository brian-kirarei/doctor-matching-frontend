module.exports = {

"[workspace]/components/DoctorMap.js (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {

__turbopack_esm__({
    "default": ()=>DiagnosisDashboard
});
var __TURBOPACK__external__react$2f$jsx$2d$runtime__ = __turbopack_external_require__("react/jsx-runtime", true);
var __TURBOPACK__external__react__ = __turbopack_external_require__("react", true);
var __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[workspace]/node_modules/react-chartjs-2/dist/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[workspace]/node_modules/chart.js/dist/chart.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
__TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$28$ecmascript$29$__["Chart"].register(__TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$28$ecmascript$29$__["CategoryScale"], __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$28$ecmascript$29$__["LinearScale"], __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$28$ecmascript$29$__["BarElement"], __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$28$ecmascript$29$__["Tooltip"], __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$28$ecmascript$29$__["Legend"]);
function DiagnosisDashboard() {
    const [mounted, setMounted] = __TURBOPACK__external__react__["useState"](false);
    const [symptoms, setSymptoms] = __TURBOPACK__external__react__["useState"]("");
    const [result, setResult] = __TURBOPACK__external__react__["useState"](null);
    const [loading, setLoading] = __TURBOPACK__external__react__["useState"](false);
    // Mounting to prevent hydration errors
    __TURBOPACK__external__react__["useEffect"](()=>{
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
    return /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("div", {
        style: styles.page,
        children: /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsxs"]("div", {
            style: styles.container,
            children: [
                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("h1", {
                    style: styles.header,
                    children: "AI Medical Dashboard"
                }),
                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("p", {
                    style: styles.subheader,
                    children: "Describe your symptoms and get AI-powered diagnosis + doctor recommendations."
                }),
                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("textarea", {
                    style: styles.input,
                    placeholder: "Type or select symptoms...",
                    value: symptoms,
                    onChange: (e)=>setSymptoms(e.target.value)
                }),
                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("div", {
                    style: styles.suggestions,
                    children: suggestions.map((symptom)=>/*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("button", {
                            style: styles.chip,
                            onClick: ()=>addSymptom(symptom),
                            children: symptom
                        }, symptom))
                }),
                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("button", {
                    style: styles.button,
                    onClick: handleDiagnose,
                    children: loading ? "Analyzing..." : "Run Diagnosis"
                }),
                result && /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsxs"]("div", {
                    style: styles.results,
                    children: [
                        /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("h2", {
                            children: "Diagnosis Result"
                        }),
                        /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsxs"]("div", {
                            style: styles.card,
                            children: [
                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("h3", {
                                    children: "Most Likely Condition"
                                }),
                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("p", {
                                    children: result.condition
                                }),
                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsxs"]("p", {
                                    children: [
                                        "Confidence: ",
                                        Math.round(result.confidence * 100),
                                        "%"
                                    ]
                                })
                            ]
                        }),
                        result.probabilities && /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("div", {
                            style: styles.chart,
                            children: /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"](__TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$28$ecmascript$29$__["Bar"], {
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
                        /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("h2", {
                            style: {
                                marginTop: "25px"
                            },
                            children: "Recommended Doctors"
                        }),
                        result.doctors?.map((doc)=>/*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsxs"]("div", {
                                style: styles.doctorCard,
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("h3", {
                                        children: doc.name
                                    }),
                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsxs"]("p", {
                                        children: [
                                            doc.specialty,
                                            " | ",
                                            doc.hospital_name
                                        ]
                                    }),
                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsxs"]("p", {
                                        children: [
                                            "Experience: ",
                                            doc.experience,
                                            " yrs | Rating: ",
                                            doc.rating
                                        ]
                                    }),
                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsxs"]("p", {
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
"[workspace]/components/BodySelector.js (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {

__turbopack_esm__({
    "default": ()=>BodySelector
});
var __TURBOPACK__external__react$2f$jsx$2d$runtime__ = __turbopack_external_require__("react/jsx-runtime", true);
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
function BodySelector({ addSymptom }) {
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
    return /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsxs"]("div", {
        style: styles.container,
        children: [
            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("h3", {
                children: "Select Body Area"
            }),
            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("div", {
                style: styles.grid,
                children: bodyParts.map((part)=>/*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("button", {
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
"[workspace]/pages/diagnose.js (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {

__turbopack_esm__({
    "default": ()=>Diagnose
});
var __TURBOPACK__external__react$2f$jsx$2d$runtime__ = __turbopack_external_require__("react/jsx-runtime", true);
var __TURBOPACK__external__react__ = __turbopack_external_require__("react", true);
var __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$axios$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[workspace]/node_modules/axios/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$28$ecmascript$29$__ = __turbopack_import__("[workspace]/node_modules/framer-motion/dist/es/index.mjs (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$28$ecmascript$29$__ = __turbopack_import__("[workspace]/node_modules/react-icons/fa/index.mjs (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$workspace$5d2f$components$2f$BodySelector$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[workspace]/components/BodySelector.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$workspace$5d2f$components$2f$DoctorMap$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[workspace]/components/DoctorMap.js (ecmascript, ssr)");
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
    const [mounted, setMounted] = __TURBOPACK__external__react__["useState"](false);
    const [symptoms, setSymptoms] = __TURBOPACK__external__react__["useState"]("");
    const [result, setResult] = __TURBOPACK__external__react__["useState"](null);
    const [loading, setLoading] = __TURBOPACK__external__react__["useState"](false);
    const [listening, setListening] = __TURBOPACK__external__react__["useState"](false);
    __TURBOPACK__external__react__["useEffect"](()=>{
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
    return /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsxs"]("div", {
        style: styles.page,
        children: [
            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsxs"]("h1", {
                style: styles.title,
                children: [
                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"](__TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$28$ecmascript$29$__["FaHeartbeat"], {}),
                    " AI Medical Diagnosis"
                ]
            }),
            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsxs"]("div", {
                style: styles.inputCard,
                children: [
                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("textarea", {
                        rows: "4",
                        placeholder: "Describe your symptoms...",
                        value: symptoms,
                        onChange: (e)=>setSymptoms(e.target.value),
                        style: styles.textarea
                    }),
                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsxs"]("button", {
                        onClick: startVoiceInput,
                        style: styles.voiceButton,
                        children: [
                            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"](__TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$28$ecmascript$29$__["FaMicrophone"], {}),
                            listening ? " Listening..." : " Speak Symptoms"
                        ]
                    }),
                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("button", {
                        onClick: analyze,
                        style: styles.button,
                        children: "Analyze Symptoms"
                    })
                ]
            }),
            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"](__TURBOPACK__imported__module__$5b$workspace$5d2f$components$2f$BodySelector$2e$js__$28$ecmascript$29$__["default"], {
                addSymptom: addSymptom
            }),
            loading && /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("p", {
                children: "Analyzing..."
            }),
            result && /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsxs"]("div", {
                style: styles.resultBox,
                children: [
                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("h2", {
                        children: "Detected Specialty"
                    }),
                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("p", {
                        style: styles.specialty,
                        children: result.specialty
                    }),
                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("h2", {
                        children: "Recommended Doctors"
                    }),
                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("div", {
                        style: styles.doctorGrid,
                        children: result.doctors.map((doc)=>/*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsxs"]("div", {
                                style: styles.card,
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("h3", {
                                        children: doc.name
                                    }),
                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("p", {
                                        children: doc.hospital_name
                                    }),
                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsxs"]("p", {
                                        children: [
                                            "Experience: ",
                                            doc.experience
                                        ]
                                    }),
                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsxs"]("p", {
                                        children: [
                                            "Rating ⭐ ",
                                            doc.rating
                                        ]
                                    })
                                ]
                            }, doc.id))
                    }),
                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"](__TURBOPACK__imported__module__$5b$workspace$5d2f$components$2f$DoctorMap$2e$js__$28$ecmascript$29$__["default"], {
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

//# sourceMappingURL=_d2b3a0._.js.map