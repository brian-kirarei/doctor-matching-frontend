(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/[root of the server]__dcf510._.js", {

"[workspace]/pages/doctors/[id].js (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>DoctorProfile
});
var __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[workspace]/node_modules/react/jsx-runtime.js (ecmascript)");
var __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$next$2f$router$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[workspace]/node_modules/next/router.js (ecmascript)");
var __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$swr$2f$core$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__ = __turbopack_import__("[workspace]/node_modules/swr/core/dist/index.mjs (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
const fetcher = (url)=>fetch(url).then((r)=>r.json());
function DoctorProfile() {
    const router = __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$next$2f$router$2e$js__$28$ecmascript$29$__["useRouter"]();
    const { id } = router.query;
    const { data } = __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$swr$2f$core$2f$dist$2f$index$2e$mjs__$28$ecmascript$29$__["default"](id ? `/api/proxy/doctors/${id}` : null, fetcher);
    if (!data) return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("div", {
        className: "p-6",
        children: "Loading..."
    });
    const d = data;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsxs"]("div", {
        className: "max-w-4xl mx-auto p-6 bg-white rounded shadow",
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsxs"]("h1", {
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
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("p", {
                className: "text-sm text-gray-600",
                children: (d.specialties || []).join(', ')
            }),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("div", {
                className: "mt-4",
                children: d.bio || 'No bio provided.'
            }),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsxs"]("div", {
                className: "mt-4",
                children: [
                    "Primary hospital: ",
                    d.hospital_name,
                    " (",
                    d.hospital_city,
                    ")"
                ]
            }),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("div", {
                className: "mt-6",
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$workspace$5d2f$node_modules$2f$react$2f$jsx$2d$runtime$2e$js__$28$ecmascript$29$__["jsx"]("button", {
                    className: "px-4 py-2 bg-green-600 text-white rounded",
                    children: "Request Appointment"
                })
            })
        ]
    });
}

})()),
"[next]/entry/page-loader.ts/(PAGE)/[workspace]/pages/doctors/[id].js (ecmascript) (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports }) { !function() {

const PAGE_PATH = "/doctors/[id]";
(window.__NEXT_P = window.__NEXT_P || []).push([
    PAGE_PATH,
    ()=>{
        return __turbopack_require__("[workspace]/pages/doctors/[id].js (ecmascript)");
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

//# sourceMappingURL=[root of the server]__dcf510._.js.map