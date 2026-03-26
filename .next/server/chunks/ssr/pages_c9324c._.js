module.exports = {

"[project]/pages/diagnose.js (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {

__turbopack_esm__({
    "default": ()=>Diagnose
});
var __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__ = __turbopack_external_require__("react/jsx-dev-runtime", true);
var __TURBOPACK__external__react__ = __turbopack_external_require__("react", true);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/axios/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/index.mjs (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/fa/index.mjs (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
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
    const [error, setError] = __TURBOPACK__external__react__["useState"]("");
    const [listening, setListening] = __TURBOPACK__external__react__["useState"](false);
    __TURBOPACK__external__react__["useEffect"](()=>{
        setMounted(true);
    }, []);
    const analyze = async ()=>{
        if (!symptoms) {
            setError("Please describe your symptoms");
            return;
        }
        try {
            setLoading(true);
            setError("");
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$index$2e$js__$28$ecmascript$29$__["default"].post("http://localhost:5000/api/diagnosis", {
                symptoms
            });
            setResult(response.data);
        } catch (err) {
            console.error(err);
            setError("Diagnosis failed");
        }
        setLoading(false);
    };
    const startVoiceInput = ()=>{
        if (!mounted) return;
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) {
            alert("Voice recognition not supported in this browser");
            return;
        }
        const recognition = new SpeechRecognition();
        recognition.lang = "sw-KE";
        recognition.continuous = false;
        recognition.interimResults = false;
        setListening(true);
        recognition.start();
        recognition.onresult = (event)=>{
            const transcript = event.results[0][0].transcript;
            setSymptoms((prev)=>prev + " " + transcript);
        };
        recognition.onend = ()=>{
            setListening(false);
        };
    };
    const confidence = result ? Math.round(result.confidence * 100) : 0;
    const riskLevel = confidence > 85 ? "High" : confidence > 60 ? "Medium" : "Low";
    const riskColor = riskLevel === "High" ? "#ff4757" : riskLevel === "Medium" ? "#ffa502" : "#2ed573";
    const keywords = symptoms.split(" ").filter((word)=>word.length > 4);
    if (!mounted) return null;
    return /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
        style: styles.page,
        children: [
            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$28$ecmascript$29$__["motion"].h1, {
                initial: {
                    opacity: 0,
                    y: -20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                style: styles.title,
                children: [
                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$28$ecmascript$29$__["FaHeartbeat"], {}, void 0, false, {
                        fileName: "<[project]/pages/diagnose.js>",
                        lineNumber: 116,
                        columnNumber: 1
                    }, this),
                    " AI Medical Diagnosis"
                ]
            }, void 0, true, {
                fileName: "<[project]/pages/diagnose.js>",
                lineNumber: 111,
                columnNumber: 1
            }, this),
            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                style: styles.inputCard,
                children: [
                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("textarea", {
                        rows: "4",
                        placeholder: "Describe your symptoms (example: chest pain, headache, fever)...",
                        value: symptoms,
                        onChange: (e)=>setSymptoms(e.target.value),
                        style: styles.textarea
                    }, void 0, false, {
                        fileName: "<[project]/pages/diagnose.js>",
                        lineNumber: 121,
                        columnNumber: 1
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                        style: styles.voiceRow,
                        children: /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("button", {
                            onClick: startVoiceInput,
                            style: styles.voiceButton,
                            children: [
                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$28$ecmascript$29$__["FaMicrophone"], {}, void 0, false, {
                                    fileName: "<[project]/pages/diagnose.js>",
                                    lineNumber: 136,
                                    columnNumber: 1
                                }, this),
                                listening ? " Listening..." : " Speak Symptoms"
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/pages/diagnose.js>",
                            lineNumber: 131,
                            columnNumber: 1
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/pages/diagnose.js>",
                        lineNumber: 129,
                        columnNumber: 1
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$28$ecmascript$29$__["motion"].button, {
                        onClick: analyze,
                        style: styles.button,
                        whileHover: {
                            scale: 1.05
                        },
                        whileTap: {
                            scale: 0.95
                        },
                        children: loading ? "Analyzing..." : "Analyze Symptoms"
                    }, void 0, false, {
                        fileName: "<[project]/pages/diagnose.js>",
                        lineNumber: 144,
                        columnNumber: 1
                    }, this),
                    error && /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("p", {
                        style: styles.error,
                        children: error
                    }, void 0, false, {
                        fileName: "<[project]/pages/diagnose.js>",
                        lineNumber: 153,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/pages/diagnose.js>",
                lineNumber: 119,
                columnNumber: 1
            }, this),
            loading && /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$28$ecmascript$29$__["motion"].div, {
                animate: {
                    rotate: 360
                },
                transition: {
                    repeat: Infinity,
                    duration: 1
                },
                style: styles.loader
            }, void 0, false, {
                fileName: "<[project]/pages/diagnose.js>",
                lineNumber: 158,
                columnNumber: 1
            }, this),
            result && /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                style: styles.dashboard,
                children: [
                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                        style: styles.specialtyCard,
                        children: [
                            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("h2", {
                                children: "Detected Specialty"
                            }, void 0, false, {
                                fileName: "<[project]/pages/diagnose.js>",
                                lineNumber: 174,
                                columnNumber: 1
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("p", {
                                style: styles.specialty,
                                children: result.specialty
                            }, void 0, false, {
                                fileName: "<[project]/pages/diagnose.js>",
                                lineNumber: 175,
                                columnNumber: 1
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/pages/diagnose.js>",
                        lineNumber: 173,
                        columnNumber: 1
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                        style: styles.confidenceCard,
                        children: [
                            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("h3", {
                                children: "AI Confidence"
                            }, void 0, false, {
                                fileName: "<[project]/pages/diagnose.js>",
                                lineNumber: 180,
                                columnNumber: 1
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                                style: styles.progressBar,
                                children: /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$28$ecmascript$29$__["motion"].div, {
                                    style: {
                                        ...styles.progressFill,
                                        width: confidence + "%"
                                    },
                                    initial: {
                                        width: 0
                                    },
                                    animate: {
                                        width: confidence + "%"
                                    }
                                }, void 0, false, {
                                    fileName: "<[project]/pages/diagnose.js>",
                                    lineNumber: 184,
                                    columnNumber: 1
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/pages/diagnose.js>",
                                lineNumber: 182,
                                columnNumber: 1
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("p", {
                                children: [
                                    confidence,
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/pages/diagnose.js>",
                                lineNumber: 195,
                                columnNumber: 1
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/pages/diagnose.js>",
                        lineNumber: 178,
                        columnNumber: 1
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                        style: {
                            ...styles.riskBox,
                            background: riskColor
                        },
                        children: [
                            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$28$ecmascript$29$__["FaExclamationTriangle"], {}, void 0, false, {
                                fileName: "<[project]/pages/diagnose.js>",
                                lineNumber: 204,
                                columnNumber: 1
                            }, this),
                            "Risk Level: ",
                            riskLevel
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/pages/diagnose.js>",
                        lineNumber: 199,
                        columnNumber: 1
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                        style: styles.keywordBox,
                        children: [
                            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("h3", {
                                children: "Detected Symptom Keywords"
                            }, void 0, false, {
                                fileName: "<[project]/pages/diagnose.js>",
                                lineNumber: 212,
                                columnNumber: 1
                            }, this),
                            keywords.map((word, i)=>/*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("span", {
                                    style: styles.keyword,
                                    children: word
                                }, i, false, {
                                    fileName: "<[project]/pages/diagnose.js>",
                                    lineNumber: 215,
                                    columnNumber: 1
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/pages/diagnose.js>",
                        lineNumber: 210,
                        columnNumber: 1
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("h2", {
                        style: {
                            marginTop: 30
                        },
                        children: "Top Doctors"
                    }, void 0, false, {
                        fileName: "<[project]/pages/diagnose.js>",
                        lineNumber: 222,
                        columnNumber: 1
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                        style: styles.doctorGrid,
                        children: result.doctors.map((doc, index)=>/*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$28$ecmascript$29$__["motion"].div, {
                                style: styles.doctorCard,
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: index * 0.2
                                },
                                whileHover: {
                                    scale: 1.05
                                },
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("h3", {
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$28$ecmascript$29$__["FaUserMd"], {}, void 0, false, {
                                                fileName: "<[project]/pages/diagnose.js>",
                                                lineNumber: 238,
                                                columnNumber: 1
                                            }, this),
                                            " ",
                                            doc.name
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/pages/diagnose.js>",
                                        lineNumber: 237,
                                        columnNumber: 1
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("p", {
                                        children: doc.hospital_name
                                    }, void 0, false, {
                                        fileName: "<[project]/pages/diagnose.js>",
                                        lineNumber: 241,
                                        columnNumber: 1
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("p", {
                                        children: [
                                            "Experience: ",
                                            doc.experience,
                                            " years"
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/pages/diagnose.js>",
                                        lineNumber: 243,
                                        columnNumber: 1
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("p", {
                                        children: [
                                            "Rating ⭐ ",
                                            doc.rating
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/pages/diagnose.js>",
                                        lineNumber: 245,
                                        columnNumber: 1
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                                        style: styles.matchBar,
                                        children: /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$28$ecmascript$29$__["motion"].div, {
                                            style: {
                                                ...styles.matchFill,
                                                width: (doc.matchScore || 50) + "%"
                                            }
                                        }, void 0, false, {
                                            fileName: "<[project]/pages/diagnose.js>",
                                            lineNumber: 249,
                                            columnNumber: 1
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "<[project]/pages/diagnose.js>",
                                        lineNumber: 247,
                                        columnNumber: 1
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("p", {
                                        children: [
                                            "Match Score ",
                                            Math.round(doc.matchScore || 0),
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/pages/diagnose.js>",
                                        lineNumber: 258,
                                        columnNumber: 1
                                    }, this)
                                ]
                            }, doc.id, true, {
                                fileName: "<[project]/pages/diagnose.js>",
                                lineNumber: 228,
                                columnNumber: 1
                            }, this))
                    }, void 0, false, {
                        fileName: "<[project]/pages/diagnose.js>",
                        lineNumber: 224,
                        columnNumber: 1
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/pages/diagnose.js>",
                lineNumber: 167,
                columnNumber: 1
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/pages/diagnose.js>",
        lineNumber: 109,
        columnNumber: 1
    }, this);
}
const styles = {
    page: {
        minHeight: "100vh",
        padding: "40px",
        background: "linear-gradient(135deg,#141E30,#243B55)",
        fontFamily: "Segoe UI",
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
        margin: "0 auto 30px auto",
        boxShadow: "0 10px 25px rgba(0,0,0,0.25)"
    },
    textarea: {
        width: "100%",
        padding: "15px",
        borderRadius: "10px",
        border: "1px solid #ddd",
        fontSize: "16px",
        marginBottom: "10px",
        color: "#333",
        background: "#fafafa"
    },
    voiceRow: {
        display: "flex",
        gap: "10px",
        marginBottom: "15px"
    },
    voiceButton: {
        background: "#6c5ce7",
        border: "none",
        padding: "10px 16px",
        borderRadius: "8px",
        color: "white",
        cursor: "pointer",
        fontSize: "14px"
    },
    button: {
        padding: "12px 24px",
        borderRadius: "8px",
        border: "none",
        background: "#0984e3",
        color: "white",
        fontSize: "16px",
        cursor: "pointer"
    },
    error: {
        color: "#ff6b6b"
    },
    loader: {
        width: "50px",
        height: "50px",
        border: "6px solid white",
        borderTop: "6px solid transparent",
        borderRadius: "50%",
        margin: "30px auto"
    },
    dashboard: {
        marginTop: "30px",
        background: "rgba(255,255,255,0.08)",
        padding: "25px",
        borderRadius: "12px",
        backdropFilter: "blur(8px)"
    },
    specialtyCard: {
        marginBottom: "20px"
    },
    specialty: {
        fontSize: "24px",
        color: "#f1c40f"
    },
    confidenceCard: {
        marginBottom: "15px"
    },
    progressBar: {
        height: "10px",
        background: "rgba(255,255,255,0.2)",
        borderRadius: "10px"
    },
    progressFill: {
        height: "100%",
        background: "#00ffcc"
    },
    riskBox: {
        padding: "10px",
        borderRadius: "8px",
        marginTop: "15px",
        fontWeight: "bold"
    },
    keywordBox: {
        marginTop: "20px"
    },
    keyword: {
        background: "#00cec9",
        padding: "6px 10px",
        borderRadius: "6px",
        marginRight: "6px",
        display: "inline-block",
        color: "white"
    },
    doctorGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
        gap: "20px",
        marginTop: "20px"
    },
    doctorCard: {
        background: "white",
        color: "black",
        padding: "18px",
        borderRadius: "10px"
    },
    matchBar: {
        height: "8px",
        background: "#eee",
        borderRadius: "5px",
        marginTop: "8px"
    },
    matchFill: {
        height: "100%",
        background: "#6c5ce7"
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

//# sourceMappingURL=pages_c9324c._.js.map