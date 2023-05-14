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
  createDelivery: () => createDelivery,
  deleteDeliveryById: () => deleteDeliveryById,
  getAllDeliveries: () => getAllDeliveries,
  getDeliveryByEmail: () => getDeliveryByEmail,
  getDeliveryById: () => getDeliveryById,
  getDeliveryByRole: () => getDeliveryByRole,
  updateDeliveryById: () => updateDeliveryById
});
module.exports = __toCommonJS(repository_exports);
var import_models = require("./api/v1/models");
function createDelivery(delivery) {
  return import_models.Delivery.create(delivery);
}
__name(createDelivery, "createDelivery");
function getDeliveryByEmail(email) {
  return import_models.Delivery.findOne({ email }).lean();
}
__name(getDeliveryByEmail, "getDeliveryByEmail");
function getDeliveryById(id) {
  return import_models.Delivery.findById({ order_id: id }).lean();
}
__name(getDeliveryById, "getDeliveryById");
function getDeliveryByRole(role) {
  return import_models.Delivery.findOne({ role }).lean();
}
__name(getDeliveryByRole, "getDeliveryByRole");
function getAllDeliveries({ filters = {}, sorts = {}, page, limit }) {
  if (page && limit) {
    return import_models.Delivery.paginate(filters, {
      page,
      limit,
      sorts,
      lean: true
    });
  }
  return import_models.Delivery.find(filters).sort(sorts).lean();
}
__name(getAllDeliveries, "getAllDeliveries");
function updateDeliveryById(id, data) {
  return import_models.Delivery.findByIdAndUpdate(id, data, { new: true }).lean();
}
__name(updateDeliveryById, "updateDeliveryById");
function deleteDeliveryById(id) {
  return import_models.Delivery.findByIdAndDelete(id).lean();
}
__name(deleteDeliveryById, "deleteDeliveryById");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createDelivery,
  deleteDeliveryById,
  getAllDeliveries,
  getDeliveryByEmail,
  getDeliveryById,
  getDeliveryByRole,
  updateDeliveryById
});
//# sourceMappingURL=repository.js.map
