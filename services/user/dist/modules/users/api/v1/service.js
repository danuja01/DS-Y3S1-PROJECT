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
  serviceCreateUser: () => serviceCreateUser,
  serviceDeleteUserById: () => serviceDeleteUserById,
  serviceGetUserById: () => serviceGetUserById,
  serviceGetUsers: () => serviceGetUsers,
  serviceUpdateMultipleUsers: () => serviceUpdateMultipleUsers,
  serviceUpdateUserById: () => serviceUpdateUserById
});
module.exports = __toCommonJS(service_exports);
var import_crypto = __toESM(require("crypto"));
var import_repository = require("../../repository");
var import_helpers = require("./helpers");
const serviceCreateUser = /* @__PURE__ */ __name(async (user) => {
  if (!user.password)
    user.password = import_crypto.default.randomBytes(20).toString("hex");
  await (0, import_helpers.hashPasswordIfProvided)(user);
  return (0, import_repository.createUser)(user);
}, "serviceCreateUser");
const serviceGetUsers = /* @__PURE__ */ __name((filters, sorts, page, limit) => {
  return (0, import_repository.getAllUsers)({ filters, sorts, page, limit });
}, "serviceGetUsers");
const serviceGetUserById = /* @__PURE__ */ __name((id) => {
  return (0, import_repository.getUserById)(id);
}, "serviceGetUserById");
const serviceUpdateUserById = /* @__PURE__ */ __name(async (id, data) => {
  await (0, import_helpers.hashPasswordIfProvided)(data);
  return (0, import_repository.updateUserById)(id, data);
}, "serviceUpdateUserById");
const serviceUpdateMultipleUsers = /* @__PURE__ */ __name(async (filters, data) => {
  await (0, import_helpers.hashPasswordIfProvided)(data);
  return (0, import_repository.updateMultipleUsers)(filters, data);
}, "serviceUpdateMultipleUsers");
const serviceDeleteUserById = /* @__PURE__ */ __name((id) => {
  return (0, import_repository.deleteUserById)(id);
}, "serviceDeleteUserById");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  serviceCreateUser,
  serviceDeleteUserById,
  serviceGetUserById,
  serviceGetUsers,
  serviceUpdateMultipleUsers,
  serviceUpdateUserById
});
//# sourceMappingURL=service.js.map
