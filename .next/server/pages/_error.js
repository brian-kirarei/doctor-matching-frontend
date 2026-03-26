const CHUNK_PUBLIC_PATH = "server/pages/_error.js";
const runtime = require("../chunks/ssr/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/ssr/[root of the server]__e21770._.js");
runtime.loadChunk("server/chunks/ssr/styles_globals_b093e1.css");
module.exports = runtime.getOrInstantiateRuntimeModule("[workspace]/node_modules/next/dist/esm/build/templates/pages.js/(INNER_PAGE)/[next]/entry/pages/_error.tsx (ecmascript) (ecmascript, ssr)", CHUNK_PUBLIC_PATH).exports;
