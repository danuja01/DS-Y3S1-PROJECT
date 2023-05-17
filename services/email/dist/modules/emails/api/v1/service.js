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
var service_exports = {};
__export(service_exports, {
  serviceSendEmail: () => serviceSendEmail
});
module.exports = __toCommonJS(service_exports);
var import_fs = __toESM(require("fs"));
var import_http_errors = __toESM(require("http-errors"));
var import_functions = require("@sliit-foss/functions");
var import_services = require("../../../../services");
const serviceSendEmail = /* @__PURE__ */ __name(async ({
  template,
  data,
  options: { to, cc, bcc, subject, attachments }
}) => {
  let html;
  try {
    html = import_fs.default.readFileSync(`${__dirname}/templates/${template}.html`, "utf8");
  } catch (error) {
    throw (0, import_http_errors.default)(400, "Template not found", { template });
  }
  const result = await (0, import_functions.traced)(import_services.sendMail)({
    to,
    cc,
    bcc,
    templateHTML: html,
    replacements: data,
    subject,
    attachments
  });
  if (result)
    return;
  throw (0, import_http_errors.default)(424, "Failed to send email");
}, "serviceSendEmail");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  serviceSendEmail
});
//# sourceMappingURL=service.js.map
