var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var repository_exports = {};
__export(repository_exports, {
  createUser: () => createUser,
  deleteUserById: () => deleteUserById,
  getAllUsers: () => getAllUsers,
  getUserByEmail: () => getUserByEmail,
  getUserById: () => getUserById,
  getUsersByRole: () => getUsersByRole,
  updateMultipleUsers: () => updateMultipleUsers,
  updateUserById: () => updateUserById
});
module.exports = __toCommonJS(repository_exports);
var import_models = require("./api/v1/models");
function createUser(user) {
  return import_models.User.create(user);
}
__name(createUser, "createUser");
function getUserByEmail(email) {
  return import_models.User.findOne({ email }).lean();
}
__name(getUserByEmail, "getUserByEmail");
function getUserById(id) {
  return import_models.User.findById(id).lean();
}
__name(getUserById, "getUserById");
function getUsersByRole(role) {
  return import_models.User.findOne({ role }).lean();
}
__name(getUsersByRole, "getUsersByRole");
function getAllUsers({ filters = {}, sorts = {}, page, limit }) {
  if (page && limit) {
    return import_models.User.paginate(filters, {
      page,
      limit,
      sorts,
      lean: true
    });
  }
  return import_models.User.find(filters).sort(sorts).lean();
}
__name(getAllUsers, "getAllUsers");
function updateUserById(id, data) {
  return import_models.User.findByIdAndUpdate(id, data, { new: true }).lean();
}
__name(updateUserById, "updateUserById");
function updateMultipleUsers(filters, data) {
  return import_models.User.updateMany(filters, data, { new: true }).lean();
}
__name(updateMultipleUsers, "updateMultipleUsers");
function deleteUserById(id) {
  return import_models.User.findByIdAndDelete(id).lean();
}
__name(deleteUserById, "deleteUserById");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createUser,
  deleteUserById,
  getAllUsers,
  getUserByEmail,
  getUserById,
  getUsersByRole,
  updateMultipleUsers,
  updateUserById
});
//# sourceMappingURL=repository.js.map
