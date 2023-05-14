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
var email_exports = {};
__export(email_exports, {
  constructVerificationEmailPayload: () => constructVerificationEmailPayload
});
module.exports = __toCommonJS(email_exports);
var import_config = __toESM(require("../../../../../config"));
const constructVerificationEmailPayload = /* @__PURE__ */ __name((name, email, code) => ({
  template: "call_to_action",
  data: {
    header: "Activate Account",
    text: "Your almost there. To finish activating your account please click the link below.",
    c2a_name: name,
    c2a_link: `${import_config.default.FRONTEND_BASE_URL}/verify/${code}`,
    c2a_button: "Activate Account"
  },
  options: {
    to: [email],
    subject: "Activate your account"
  }
}), "constructVerificationEmailPayload");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  constructVerificationEmailPayload
});
//# sourceMappingURL=email.js.map
