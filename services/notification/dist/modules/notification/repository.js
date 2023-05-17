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
  createNotification: () => createNotification,
  deleteNotificationById: () => deleteNotificationById,
  getAllNotifications: () => getAllNotifications,
  getNotificationByEmail: () => getNotificationByEmail,
  getNotificationById: () => getNotificationById,
  getNotificationByRole: () => getNotificationByRole,
  updateNotificationById: () => updateNotificationById
});
module.exports = __toCommonJS(repository_exports);
var import_models = require("./api/v1/models");
function createNotification(notification) {
  return import_models.Notification.create(notification);
}
__name(createNotification, "createNotification");
function getNotificationByEmail(email) {
  return import_models.Notification.findOne({ email }).lean();
}
__name(getNotificationByEmail, "getNotificationByEmail");
function getNotificationById(id) {
  return import_models.Notification.find({ user_id: id }).lean();
}
__name(getNotificationById, "getNotificationById");
function getNotificationByRole(role) {
  return import_models.Notification.findOne({ role }).lean();
}
__name(getNotificationByRole, "getNotificationByRole");
function getAllNotifications({ filters = {}, sorts = {}, page, limit }) {
  if (page && limit) {
    return import_models.Notification.paginate(filters, {
      page,
      limit,
      sorts,
      lean: true
    });
  }
  return import_models.Notification.find(filters).sort(sorts).lean();
}
__name(getAllNotifications, "getAllNotifications");
function updateNotificationById(id, data) {
  return import_models.Notification.findByIdAndUpdate(id, data, { new: true }).lean();
}
__name(updateNotificationById, "updateNotificationById");
function deleteNotificationById(id) {
  return import_models.Notification.findByIdAndDelete(id).lean();
}
__name(deleteNotificationById, "deleteNotificationById");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createNotification,
  deleteNotificationById,
  getAllNotifications,
  getNotificationByEmail,
  getNotificationById,
  getNotificationByRole,
  updateNotificationById
});
//# sourceMappingURL=repository.js.map
