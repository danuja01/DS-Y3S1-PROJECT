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
var auth_service_exports = {};
__export(auth_service_exports, {
  getAuthUser: () => getAuthUser
});
module.exports = __toCommonJS(auth_service_exports);
var import_express_http_context = __toESM(require("express-http-context"));
var import_service_connector = __toESM(require("@sliit-foss/service-connector"));
var import_config = __toESM(require("../config"));
const connector = (0, import_service_connector.default)({
  baseURL: import_config.default.AUTH_SERVICE_BASE_URL,
  service: "Auth-Service",
  headerIntercepts: () => {
    var _a;
    return {
      authorization: (_a = import_express_http_context.default.get("headers")) == null ? void 0 : _a.authorization
    };
  }
});
const getAuthUser = /* @__PURE__ */ __name((v = "v1") => {
  return connector.get(`/api/${v}/auth/current`).then(connector.resolve);
}, "getAuthUser");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getAuthUser
});
//# sourceMappingURL=auth.service.js.map
