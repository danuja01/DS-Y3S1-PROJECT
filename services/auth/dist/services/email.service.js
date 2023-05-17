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
var email_service_exports = {};
__export(email_service_exports, {
  sendVerificationEmail: () => sendVerificationEmail
});
module.exports = __toCommonJS(email_service_exports);
var import_service_connector = __toESM(require("@sliit-foss/service-connector"));
var import_config = __toESM(require("../config"));
const connector = (0, import_service_connector.default)({
  baseURL: import_config.default.EMAIL_SERVICE_BASE_URL,
  service: "Email-Service"
});
const sendVerificationEmail = /* @__PURE__ */ __name((payload, v = "v1") => {
  console.log();
  return connector.post(`/api/${v}/emails`, payload).then(connector.resolve);
}, "sendVerificationEmail");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  sendVerificationEmail
});
//# sourceMappingURL=email.service.js.map
