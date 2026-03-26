module.exports = {

"[project]/components/BodySelector.js (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {

__turbopack_esm__({
    "default": ()=>BodySelector
});
var __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__ = __turbopack_external_require__("react/jsx-dev-runtime", true);
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
    return /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
        style: styles.container,
        children: [
            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("h3", {
                children: "Select Body Area"
            }, void 0, false, {
                fileName: "<[project]/components/BodySelector.js>",
                lineNumber: 18,
                columnNumber: 1
            }, this),
            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                style: styles.grid,
                children: bodyParts.map((part)=>/*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("button", {
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
"[project]/components/DoctorMap.js (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {

__turbopack_esm__({
    "default": ()=>Diagnosis
});
var __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__ = __turbopack_external_require__("react/jsx-dev-runtime", true);
var __TURBOPACK__external__react__ = __turbopack_external_require__("react", true);
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function Diagnosis() {
    const [mounted, setMounted] = __TURBOPACK__external__react__["useState"](false);
    const [symptoms, setSymptoms] = __TURBOPACK__external__react__["useState"]("");
    const [result, setResult] = __TURBOPACK__external__react__["useState"](null);
    const [loading, setLoading] = __TURBOPACK__external__react__["useState"](false);
    __TURBOPACK__external__react__["useEffect"](()=>{
        setMounted(true);
    }, []);
    if (!mounted) return null;
    const handleDiagnose = async ()=>{
        if (!symptoms) return alert("Please enter symptoms");
        setLoading(true);
        try {
            const res = await fetch("http://localhost:5000/api/diagnose", {
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
            alert("Error contacting server");
        }
        setLoading(false);
    };
    return /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
        style: styles.page,
        children: /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
            style: styles.card,
            children: [
                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("h1", {
                    style: styles.title,
                    children: "AI Medical Diagnosis"
                }, void 0, false, {
                    fileName: "<[project]/components/DoctorMap.js>",
                    lineNumber: 42,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("p", {
                    style: styles.subtitle,
                    children: "Enter your symptoms and get suggested medical conditions."
                }, void 0, false, {
                    fileName: "<[project]/components/DoctorMap.js>",
                    lineNumber: 43,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("textarea", {
                    style: styles.input,
                    placeholder: "Example: fever, headache, body pain...",
                    value: symptoms,
                    onChange: (e)=>setSymptoms(e.target.value)
                }, void 0, false, {
                    fileName: "<[project]/components/DoctorMap.js>",
                    lineNumber: 47,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("button", {
                    style: styles.button,
                    onClick: handleDiagnose,
                    children: loading ? "Analyzing..." : "Diagnose"
                }, void 0, false, {
                    fileName: "<[project]/components/DoctorMap.js>",
                    lineNumber: 54,
                    columnNumber: 9
                }, this),
                result && /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                    style: styles.result,
                    children: [
                        /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("h2", {
                            style: styles.resultTitle,
                            children: "Diagnosis Result"
                        }, void 0, false, {
                            fileName: "<[project]/components/DoctorMap.js>",
                            lineNumber: 60,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                            style: styles.resultBox,
                            children: [
                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("p", {
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("strong", {
                                            children: "Possible Condition:"
                                        }, void 0, false, {
                                            fileName: "<[project]/components/DoctorMap.js>",
                                            lineNumber: 64,
                                            columnNumber: 17
                                        }, this),
                                        " ",
                                        result.condition
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/components/DoctorMap.js>",
                                    lineNumber: 63,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("p", {
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("strong", {
                                            children: "Recommended Doctor:"
                                        }, void 0, false, {
                                            fileName: "<[project]/components/DoctorMap.js>",
                                            lineNumber: 68,
                                            columnNumber: 17
                                        }, this),
                                        " ",
                                        result.doctor
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/components/DoctorMap.js>",
                                    lineNumber: 67,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/components/DoctorMap.js>",
                            lineNumber: 62,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/components/DoctorMap.js>",
                    lineNumber: 59,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/components/DoctorMap.js>",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/components/DoctorMap.js>",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
const styles = {
    page: {
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg,#6dd5ed,#2193b0,#3a7bd5,#00c6ff)",
        padding: "40px"
    },
    card: {
        background: "white",
        padding: "40px",
        borderRadius: "20px",
        width: "600px",
        boxShadow: "0px 10px 40px rgba(0,0,0,0.2)"
    },
    title: {
        textAlign: "center",
        fontSize: "32px",
        color: "#2193b0"
    },
    subtitle: {
        textAlign: "center",
        marginBottom: "20px",
        color: "#555"
    },
    input: {
        width: "100%",
        height: "120px",
        padding: "15px",
        borderRadius: "10px",
        border: "2px solid #2193b0",
        background: "#ffffff",
        color: "#000",
        fontSize: "16px",
        resize: "none"
    },
    button: {
        marginTop: "20px",
        width: "100%",
        padding: "15px",
        borderRadius: "10px",
        border: "none",
        background: "linear-gradient(90deg,#36d1dc,#5b86e5)",
        color: "white",
        fontSize: "18px",
        fontWeight: "bold",
        cursor: "pointer"
    },
    result: {
        marginTop: "30px"
    },
    resultTitle: {
        textAlign: "center",
        color: "#2193b0"
    },
    resultBox: {
        background: "#f4f9ff",
        padding: "20px",
        borderRadius: "12px",
        border: "1px solid #d0e7ff"
    }
};

})()),
"[project]/pages/diagnose.js (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {

__turbopack_esm__({
    "default": ()=>Diagnose
});
var __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__ = __turbopack_external_require__("react/jsx-dev-runtime", true);
var __TURBOPACK__external__react__ = __turbopack_external_require__("react", true);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/axios/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/index.mjs (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/fa/index.mjs (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BodySelector$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/BodySelector.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DoctorMap$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/DoctorMap.js (ecmascript, ssr)");
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
    return /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
        style: styles.page,
        children: [
            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("h1", {
                style: styles.title,
                children: [
                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$28$ecmascript$29$__["FaHeartbeat"], {}, void 0, false, {
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
            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                style: styles.inputCard,
                children: [
                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("textarea", {
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
                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("button", {
                        onClick: startVoiceInput,
                        style: styles.voiceButton,
                        children: [
                            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$28$ecmascript$29$__["FaMicrophone"], {}, void 0, false, {
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
                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("button", {
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
            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BodySelector$2e$js__$28$ecmascript$29$__["default"], {
                addSymptom: addSymptom
            }, void 0, false, {
                fileName: "<[project]/pages/diagnose.js>",
                lineNumber: 121,
                columnNumber: 1
            }, this),
            loading && /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("p", {
                children: "Analyzing..."
            }, void 0, false, {
                fileName: "<[project]/pages/diagnose.js>",
                lineNumber: 123,
                columnNumber: 13
            }, this),
            result && /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                style: styles.resultBox,
                children: [
                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("h2", {
                        children: "Detected Specialty"
                    }, void 0, false, {
                        fileName: "<[project]/pages/diagnose.js>",
                        lineNumber: 129,
                        columnNumber: 1
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("p", {
                        style: styles.specialty,
                        children: result.specialty
                    }, void 0, false, {
                        fileName: "<[project]/pages/diagnose.js>",
                        lineNumber: 131,
                        columnNumber: 1
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("h2", {
                        children: "Recommended Doctors"
                    }, void 0, false, {
                        fileName: "<[project]/pages/diagnose.js>",
                        lineNumber: 135,
                        columnNumber: 1
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                        style: styles.doctorGrid,
                        children: result.doctors.map((doc)=>/*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                                style: styles.card,
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("h3", {
                                        children: doc.name
                                    }, void 0, false, {
                                        fileName: "<[project]/pages/diagnose.js>",
                                        lineNumber: 142,
                                        columnNumber: 1
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("p", {
                                        children: doc.hospital_name
                                    }, void 0, false, {
                                        fileName: "<[project]/pages/diagnose.js>",
                                        lineNumber: 144,
                                        columnNumber: 1
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("p", {
                                        children: [
                                            "Experience: ",
                                            doc.experience
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/pages/diagnose.js>",
                                        lineNumber: 146,
                                        columnNumber: 1
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("p", {
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
                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DoctorMap$2e$js__$28$ecmascript$29$__["default"], {
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

};

//# sourceMappingURL=_a3bf52._.js.map