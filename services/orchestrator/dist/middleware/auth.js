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
var auth_exports = {};
__export(auth_exports, {
  authorizer: () => authorizer,
  permittedRoles: () => permittedRoles
});
module.exports = __toCommonJS(auth_exports);
var import_express_http_context = __toESM(require("express-http-context"));
var import_http_errors = __toESM(require("http-errors"));
var import_functions = require("@sliit-foss/functions");
var import_module_logger = require("@sliit-foss/module-logger");
var import_constants = require("@app/constants");
var import_services = require("../services");
const logger = (0, import_module_logger.moduleLogger)("Auth-middleware");
const authorizer = (0, import_functions.tracedAsyncHandler)(/* @__PURE__ */ __name(async function authorizer2(req) {
  if (import_constants.protectedRoutes.find((route) => req.path.match(new RegExp(route)))) {
    return;
  }
  import_express_http_context.default.set("headers", req.headers);
  const user = await (0, import_services.getAuthUser)();
  req.user = user;
}, "authorizer"));
const permittedRoles = /* @__PURE__ */ __name((roles) => (0, import_functions.asyncHandler)(/* @__PURE__ */ __name(function roleGuard(req) {
  if (roles && !roles.includes(req.user.role)) {
    logger.error(
      `Forbidden route - access denied - user_id: ${req.user._id} - role: ${req.user.role}`
    );
    throw (0, import_http_errors.default)(403, "Route forbidden");
  }
}, "roleGuard")), "permittedRoles");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  authorizer,
  permittedRoles
});
//# sourceMappingURL=auth.js.map
