var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var src_exports = {};
__export(src_exports, {
  default: () => src_default
});
module.exports = __toCommonJS(src_exports);
var import_fs = __toESM(require("fs"));
var import_crypto = __toESM(require("crypto"));
var import_express = __toESM(require("express"));
var import_express_health_middleware = __toESM(require("express-health-middleware"));
var import_compression = __toESM(require("compression"));
var import_helmet = __toESM(require("helmet"));
var import_cors = __toESM(require("cors"));
var import_express_http_context = __toESM(require("express-http-context"));
var import_callsite = __toESM(require("callsite"));
var import_module_logger = require("@sliit-foss/module-logger");
var import_constants = require("@app/constants");
var import_middleware = require("@app/middleware");
var import_mongoose = require("@app/mongoose");
const initialize = /* @__PURE__ */ __name(({
  service,
  routes,
  lMiddleware = [],
  cors: isCorsEnable,
  database,
  config
}) => {
  var _a, _b, _c, _d;
  const logger = (0, import_module_logger.moduleLogger)("Server");
  const app = (0, import_express.default)();
  app.use((0, import_helmet.default)());
  app.use((0, import_compression.default)());
  app.use(import_express.default.json({ limit: "1mb" }));
  app.use(import_express.default.urlencoded({ extended: true }));
  if (isCorsEnable) {
    app.use((0, import_cors.default)());
  }
  app.use(import_express_http_context.default.middleware);
  app.use((req, _res, next) => {
    _res.header("Access-Control-Allow-Origin", "*");
    _res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    import_express_http_context.default.set(
      "correlationId",
      req.headers[import_constants.correlationId] ?? import_crypto.default.randomBytes(16).toString("hex")
    );
    next();
  });
  if (database) {
    (0, import_mongoose.connect)(database);
  }
  app.use("/system", (0, import_express_health_middleware.default)());
  if (!routes) {
    routes = import_express.default.Router();
    const root = (_c = (_b = (_a = (0, import_callsite.default)().find((site) => site.getFileName().endsWith("server.js"))) == null ? void 0 : _a.getFileName()) == null ? void 0 : _b.replace("/server.js", "")) == null ? void 0 : _c.replace("\\server.js", "");
    (_d = import_fs.default.readdirSync(`${root}/modules`)) == null ? void 0 : _d.forEach((module2) => {
      var _a2;
      (_a2 = import_fs.default.readdirSync(`${root}/modules/${module2}/api`)) == null ? void 0 : _a2.forEach((v) => {
        routes.use(
          `/${v}/${module2}`,
          require(`${root}/modules/${module2}/api/${v}/controller`).default
        );
      });
    });
  }
  app.use(`/api`, ...lMiddleware, routes);
  app.use(import_middleware.responseInterceptor);
  app.use(import_middleware.errorHandler);
  const HOST = config.HOST ?? "0.0.0.0";
  app.listen(config.PORT, () => {
    logger.info(`${service} listening on ${HOST}:${config.PORT}`);
  });
}, "initialize");
var src_default = initialize;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=index.js.map
