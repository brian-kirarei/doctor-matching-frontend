const CHUNK_PUBLIC_PATH = "server/pages/index.js";
const runtime = require("../chunks/ssr/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/ssr/node_modules_b4a6ed._.js");
runtime.loadChunk("server/chunks/ssr/pages_7e8be9._.js");
runtime.loadChunk("server/chunks/ssr/styles_globals_78d767.css");
module.exports = runtime.getOrInstantiateRuntimeModule("[project]/node_modules/next/dist/esm/build/templates/pages.js/(INNER_PAGE)/[project]/pages/index.js (ecmascript) (ecmascript, ssr)", CHUNK_PUBLIC_PATH).exports;
