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
  serviceLogin: () => serviceLogin,
  serviceLogout: () => serviceLogout,
  serviceRefreshToken: () => serviceRefreshToken,
  serviceRegister: () => serviceRegister,
  serviceVerifyUser: () => serviceVerifyUser
});
module.exports = __toCommonJS(service_exports);
var import_crypto = __toESM(require("crypto"));
var import_bcryptjs = __toESM(require("bcryptjs"));
var import_http_errors = __toESM(require("http-errors"));
var import_functions = require("@sliit-foss/functions");
var import_services = require("../../../../services");
var import_utils = require("../../../../utils");
var import_mappers = require("./mappers");
const serviceLogin = /* @__PURE__ */ __name(async ({ email, password }) => {
  const user = await (0, import_services.getUserByEmail)(email);
  if (!user)
    throw import_utils.errors.invalid_email;
  if (!user.is_active)
    throw import_utils.errors.user_deactivated;
  const isMatch = await import_bcryptjs.default.compare(password, user.password);
  if (!isMatch)
    throw import_utils.errors.invalid_password;
  if (!user.is_verified)
    throw import_utils.errors.unverified_user;
  return (0, import_functions.traced)(import_utils.generateTokens)(user);
}, "serviceLogin");
const serviceRegister = /* @__PURE__ */ __name(async ({ name, email, password, address }) => {
  const user = await (0, import_services.getUserByEmail)(email);
  if (user) {
    throw (0, import_http_errors.default)(400, "User already exists");
  }
  const code = import_crypto.default.randomUUID();
  (0, import_services.sendVerificationEmail)((0, import_mappers.constructVerificationEmailPayload)(name, email, code));
  return (0, import_services.createUser)({
    name,
    email,
    password,
    address,
    verification_code: code
  });
}, "serviceRegister");
const serviceRefreshToken = /* @__PURE__ */ __name(async (token) => {
  const decodedRefreshToken = (0, import_utils.verify)(token);
  const decodedUser = (0, import_utils.verify)(decodedRefreshToken.access_token, true);
  const user = await (0, import_services.getUserById)(decodedUser._id);
  if (!user) {
    throw import_utils.errors.invalid_token;
  }
  if (!user.is_active) {
    throw import_utils.errors.user_deactivated;
  }
  return (0, import_functions.traced)(import_utils.generateTokens)(user);
}, "serviceRefreshToken");
const serviceVerifyUser = /* @__PURE__ */ __name(async (code) => {
  const result = await (0, import_services.verifyUser)(code);
  if (!result.matchedCount) {
    throw import_utils.errors.invalid_code;
  }
  return;
}, "serviceVerifyUser");
const serviceLogout = /* @__PURE__ */ __name((token) => {
}, "serviceLogout");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  serviceLogin,
  serviceLogout,
  serviceRefreshToken,
  serviceRegister,
  serviceVerifyUser
});
//# sourceMappingURL=service.js.map
