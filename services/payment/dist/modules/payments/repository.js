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
  createPayment: () => createPayment,
  deletePaymentById: () => deletePaymentById,
  getAllPayments: () => getAllPayments,
  getPaymentById: () => getPaymentById,
  getPaymentByRating: () => getPaymentByRating,
  getPaymentsByProductId: () => getPaymentsByProductId,
  updatePaymentById: () => updatePaymentById
});
module.exports = __toCommonJS(repository_exports);
var import_models = require("./api/v1/models");
function createPayment(payment) {
  return import_models.Payment.create(payment);
}
__name(createPayment, "createPayment");
function getPaymentByRating(rating) {
  return import_models.Payment.findOne({ rating }).lean();
}
__name(getPaymentByRating, "getPaymentByRating");
function getPaymentById(id) {
  return import_models.Payment.findById(id).lean();
}
__name(getPaymentById, "getPaymentById");
function getPaymentsByProductId(productId) {
  return import_models.Payment.find({ productId }).lean();
}
__name(getPaymentsByProductId, "getPaymentsByProductId");
function getAllPayments({ filters = {}, sorts = {}, page, limit }) {
  if (page && limit) {
    return import_models.Payment.paginate(filters, {
      page,
      limit,
      sorts,
      lean: true
    });
  }
  return import_models.Payment.find(filters).sort(sorts).lean();
}
__name(getAllPayments, "getAllPayments");
function updatePaymentById(id, data) {
  return import_models.Payment.findByIdAndUpdate(id, data, { new: true }).lean();
}
__name(updatePaymentById, "updatePaymentById");
function deletePaymentById(id) {
  return import_models.Payment.findByIdAndDelete(id).lean();
}
__name(deletePaymentById, "deletePaymentById");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createPayment,
  deletePaymentById,
  getAllPayments,
  getPaymentById,
  getPaymentByRating,
  getPaymentsByProductId,
  updatePaymentById
});
//# sourceMappingURL=repository.js.map
