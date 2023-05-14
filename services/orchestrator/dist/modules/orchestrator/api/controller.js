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
var controller_exports = {};
__export(controller_exports, {
  default: () => controller_default
});
module.exports = __toCommonJS(controller_exports);
var import_express = __toESM(require("express"));
var import_service_connector = __toESM(require("@sliit-foss/service-connector"));
var import_functions = require("@sliit-foss/functions");
var import_constants = require("../constants");
var import_middleware = require("../../../middleware");
var import_middleware2 = require("./middleware");
const orchestrator = import_express.default.Router();
const connector = (0, import_service_connector.default)({ service: "Proxy" });
orchestrator.all(
  "/:api_version/:module*",
  (0, import_functions.tracedAsyncHandler)(/* @__PURE__ */ __name(function attachMiddleware(req, res, next) {
    switch (req.params.module) {
      case "users":
        return import_middleware2.routeGuards[req.params.module](req, res, next);
      case "emails":
        return import_middleware.permittedRoles["admin", "seller"](req, res, next);
      default:
        return;
    }
  }, "attachMiddleware"))
);
orchestrator.all(
  "/:api_version/:module*",
  (0, import_functions.tracedAsyncHandler)(/* @__PURE__ */ __name(function redirect(req, res) {
    return connector.proxy(import_constants.serviceHosts[req.params.module], req, res);
  }, "redirect"))
);
var controller_default = orchestrator;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=controller.js.map
