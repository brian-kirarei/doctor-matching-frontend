const CHUNK_PUBLIC_PATH = "server/pages/_app.js";
const runtime = require("../chunks/ssr/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/ssr/styles_globals_b093e1.css");
runtime.loadChunk("server/chunks/ssr/_0f365a._.js");
module.exports = runtime.getOrInstantiateRuntimeModule("[workspace]/node_modules/next/dist/esm/build/templates/pages.js/(INNER_PAGE)/[workspace]/pages/_app.js (ecmascript) (ecmascript, ssr)", CHUNK_PUBLIC_PATH).exports;
