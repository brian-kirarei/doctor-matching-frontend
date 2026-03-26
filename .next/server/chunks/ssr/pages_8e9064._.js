module.exports = {

"[workspace]/pages/doctors/[id].js (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {

__turbopack_esm__({
    "default": ()=>DoctorProfile
});
var __TURBOPACK__external__react$2f$jsx$2d$runtime__ = __turbopack_external_require__("react/jsx-runtime", true);
var __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$next$2f$router$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[workspace]/node_modules/next/router.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$swr$2f$core$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__ = __turbopack_import__("[workspace]/node_modules/swr/core/dist/index.mjs (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
const fetcher = (url)=>fetch(url).then((r)=>r.json());
function DoctorProfile() {
    const router = __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$next$2f$router$2e$js__$28$ecmascript$29$__["useRouter"]();
    const { id } = router.query;
    const { data } = __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$swr$2f$core$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__["default"](id ? `/api/proxy/doctors/${id}` : null, fetcher);
    if (!data) return /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("div", {
        className: "p-6",
        children: "Loading..."
    });
    const d = data;
    return /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsxs"]("div", {
        className: "max-w-4xl mx-auto p-6 bg-white rounded shadow",
        children: [
            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsxs"]("h1", {
                className: "text-2xl font-bold",
                children: [
                    "Dr ",
                    d.first_name,
                    " ",
                    d.last_name,
                    " ",
                    d.verified ? '✅' : ''
                ]
            }),
            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("p", {
                className: "text-sm text-gray-600",
                children: (d.specialties || []).join(', ')
            }),
            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("div", {
                className: "mt-4",
                children: d.bio || 'No bio provided.'
            }),
            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsxs"]("div", {
                className: "mt-4",
                children: [
                    "Primary hospital: ",
                    d.hospital_name,
                    " (",
                    d.hospital_city,
                    ")"
                ]
            }),
            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("div", {
                className: "mt-6",
                children: /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$runtime__["jsx"]("button", {
                    className: "px-4 py-2 bg-green-600 text-white rounded",
                    children: "Request Appointment"
                })
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

//# sourceMappingURL=pages_8e9064._.js.map