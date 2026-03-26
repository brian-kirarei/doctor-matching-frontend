module.exports = {

"[workspace]/pages/index.js (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {

__turbopack_esm__({
    "default": ()=>Login
});
var __TURBOPACK__external__react$2f$jsx$2d$runtime__ = __turbopack_external_require__("react/jsx-runtime", true);
var __TURBOPACK__external__react__ = __turbopack_external_require__("react", true);
var __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$next$2f$router$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[workspace]/node_modules/next/router.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
function Login() {
    const router = __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$next$2f$router$2e$js__$28$ecmascript$29$__["useRouter"]();
    const [email, setEmail] = __TURBOPACK__external__react__["useState"]("");
    const [password, setPassword] = __TURBOPACK__external__react__["useState"]("");
    const handleLogin = async (e)=>{
        e.preventDefault();
        const res = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        });
        const data = await res.json();
        if (data.success) {
            localStorage.setItem("token", data.token);
            router.push("/dashboard");
        } else {
            alert("Invalid credentials");
        }
    };
    return /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("div", {
        className: "min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-white",
        children: /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsxs"]("div", {
            className: "bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md",
            children: [
                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("h2", {
                    className: "text-3xl font-bold text-center text-primary mb-6",
                    children: "Smart Doctor Matching"
                }),
                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsxs"]("form", {
                    onSubmit: handleLogin,
                    className: "space-y-5",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("input", {
                            type: "email",
                            placeholder: "Email",
                            className: "w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent",
                            value: email,
                            onChange: (e)=>setEmail(e.target.value),
                            required: true
                        }),
                        /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("input", {
                            type: "password",
                            placeholder: "Password",
                            className: "w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent",
                            value: password,
                            onChange: (e)=>setPassword(e.target.value),
                            required: true
                        }),
                        /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("button", {
                            type: "submit",
                            className: "w-full bg-accent text-white py-3 rounded-lg hover:bg-blue-700 transition",
                            children: "Login"
                        })
                    ]
                })
            ]
        })
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

//# sourceMappingURL=pages_773773._.js.map