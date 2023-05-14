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
var nodemailer_service_exports = {};
__export(nodemailer_service_exports, {
  sendMail: () => sendMail
});
module.exports = __toCommonJS(nodemailer_service_exports);
var import_nodemailer = __toESM(require("nodemailer"));
var import_handlebars = __toESM(require("handlebars"));
var import_config = __toESM(require("../config"));
const transport = import_nodemailer.default.createTransport({
  service: "gmail",
  auth: {
    user: import_config.default.MAIL_USER,
    pass: import_config.default.MAIL_PASSWORD
  },
  pool: true
});
const sendMail = /* @__PURE__ */ __name(({
  to,
  cc = [],
  bcc = [],
  templateHTML,
  replacements,
  subject,
  attachments = []
}) => {
  const template = import_handlebars.default.compile(templateHTML);
  const htmlToSend = template(replacements);
  const mailOptions = {
    from: import_config.default.MAIL_USER,
    to,
    cc,
    bcc,
    subject,
    html: htmlToSend,
    attachments
  };
  return new Promise((resolve, reject) => {
    transport.sendMail(mailOptions, (error) => {
      if (error)
        reject(error);
      resolve(true);
    });
  });
}, "sendMail");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  sendMail
});
//# sourceMappingURL=nodemailer.service.js.map
