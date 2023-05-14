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
var user_service_exports = {};
__export(user_service_exports, {
  createUser: () => createUser,
  getUserByEmail: () => getUserByEmail,
  getUserById: () => getUserById,
  verifyUser: () => verifyUser
});
module.exports = __toCommonJS(user_service_exports);
var import_service_connector = __toESM(require("@sliit-foss/service-connector"));
var import_lodash = require("lodash");
var import_config = __toESM(require("../config"));
const connector = (0, import_service_connector.default)({
  baseURL: import_config.default.USER_SERVICE_BASE_URL,
  service: "User-Service"
});
const createUser = /* @__PURE__ */ __name((payload, v = "v1") => {
  return connector.post(`/api/${v}/users`, payload).then(connector.resolve);
}, "createUser");
const getUserByEmail = /* @__PURE__ */ __name(async (email, v = "v1") => {
  const users = await connector.get(`/api/${v}/users?filter[email]=${email}`).then(connector.resolve);
  return (0, import_lodash.head)(users);
}, "getUserByEmail");
const verifyUser = /* @__PURE__ */ __name((verificationCode, v = "v1") => {
  return connector.patch(`/api/${v}/users?filter[verification_code]=${verificationCode}`, {
    is_verified: true,
    verification_code: null
  }).then(connector.resolve);
}, "verifyUser");
const getUserById = /* @__PURE__ */ __name((id, v = "v1") => {
  return connector.get(`/api/${v}/users/${id}`).then(connector.resolve);
}, "getUserById");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createUser,
  getUserByEmail,
  getUserById,
  verifyUser
});
//# sourceMappingURL=user.service.js.map
