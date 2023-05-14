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
var service_exports = {};
__export(service_exports, {
  serviceCreateNotification: () => serviceCreateNotification,
  serviceDeleteNotificationById: () => serviceDeleteNotificationById,
  serviceGetNotificationById: () => serviceGetNotificationById,
  serviceGetNotifications: () => serviceGetNotifications,
  serviceUpdateNotificationById: () => serviceUpdateNotificationById
});
module.exports = __toCommonJS(service_exports);
var import_repository = require("../../repository");
const serviceCreateNotification = /* @__PURE__ */ __name(async (notification) => {
  return (0, import_repository.createNotification)(notification);
}, "serviceCreateNotification");
const serviceGetNotifications = /* @__PURE__ */ __name((filters, sorts, page, limit) => {
  return (0, import_repository.getAllNotifications)({ filters, sorts, page, limit });
}, "serviceGetNotifications");
const serviceGetNotificationById = /* @__PURE__ */ __name((id) => {
  const data = (0, import_repository.getNotificationById)(id);
  return data;
}, "serviceGetNotificationById");
const serviceUpdateNotificationById = /* @__PURE__ */ __name(async (id, data) => {
  return (0, import_repository.updateNotificationById)(id, data);
}, "serviceUpdateNotificationById");
const serviceDeleteNotificationById = /* @__PURE__ */ __name((id) => {
  return (0, import_repository.deleteNotificationById)(id);
}, "serviceDeleteNotificationById");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  serviceCreateNotification,
  serviceDeleteNotificationById,
  serviceGetNotificationById,
  serviceGetNotifications,
  serviceUpdateNotificationById
});
//# sourceMappingURL=service.js.map
