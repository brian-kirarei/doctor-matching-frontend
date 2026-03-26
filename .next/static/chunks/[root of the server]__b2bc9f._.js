(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/[root of the server]__b2bc9f._.js", {

"[project]/pages/diagnose.js (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>Diagnose
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/jsx-dev-runtime.js (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/index.js (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/axios/index.js (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/index.mjs (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/fa/index.mjs (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
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
    const [error, setError] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]("");
    const [listening, setListening] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
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
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
        style: styles.page,
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$28$ecmascript$29$__["motion"].h1, {
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
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$28$ecmascript$29$__["FaHeartbeat"], {}, void 0, false, {
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
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                style: styles.inputCard,
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("textarea", {
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
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                        style: styles.voiceRow,
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                            onClick: startVoiceInput,
                            style: styles.voiceButton,
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$28$ecmascript$29$__["FaMicrophone"], {}, void 0, false, {
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
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$28$ecmascript$29$__["motion"].button, {
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
                    error && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
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
            loading && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$28$ecmascript$29$__["motion"].div, {
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
            result && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                style: styles.dashboard,
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                        style: styles.specialtyCard,
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h2", {
                                children: "Detected Specialty"
                            }, void 0, false, {
                                fileName: "<[project]/pages/diagnose.js>",
                                lineNumber: 174,
                                columnNumber: 1
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
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
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                        style: styles.confidenceCard,
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h3", {
                                children: "AI Confidence"
                            }, void 0, false, {
                                fileName: "<[project]/pages/diagnose.js>",
                                lineNumber: 180,
                                columnNumber: 1
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                style: styles.progressBar,
                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$28$ecmascript$29$__["motion"].div, {
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
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
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
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                        style: {
                            ...styles.riskBox,
                            background: riskColor
                        },
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$28$ecmascript$29$__["FaExclamationTriangle"], {}, void 0, false, {
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
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                        style: styles.keywordBox,
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h3", {
                                children: "Detected Symptom Keywords"
                            }, void 0, false, {
                                fileName: "<[project]/pages/diagnose.js>",
                                lineNumber: 212,
                                columnNumber: 1
                            }, this),
                            keywords.map((word, i)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
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
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h2", {
                        style: {
                            marginTop: 30
                        },
                        children: "Top Doctors"
                    }, void 0, false, {
                        fileName: "<[project]/pages/diagnose.js>",
                        lineNumber: 222,
                        columnNumber: 1
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                        style: styles.doctorGrid,
                        children: result.doctors.map((doc, index)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$28$ecmascript$29$__["motion"].div, {
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
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h3", {
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$28$ecmascript$29$__["FaUserMd"], {}, void 0, false, {
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
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                        children: doc.hospital_name
                                    }, void 0, false, {
                                        fileName: "<[project]/pages/diagnose.js>",
                                        lineNumber: 241,
                                        columnNumber: 1
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
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
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                        children: [
                                            "Rating ⭐ ",
                                            doc.rating
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/pages/diagnose.js>",
                                        lineNumber: 245,
                                        columnNumber: 1
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        style: styles.matchBar,
                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$28$ecmascript$29$__["motion"].div, {
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
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
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
_s(Diagnose, "bUlSjwZZI36N2v1SNg/GS2n2Jwc=");
_c = Diagnose;
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

//# sourceMappingURL=[root of the server]__b2bc9f._.js.map