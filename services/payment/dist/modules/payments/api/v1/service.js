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
  serviceCreatePayment: () => serviceCreatePayment,
  serviceDeletePaymentById: () => serviceDeletePaymentById,
  serviceGetPaymentById: () => serviceGetPaymentById,
  serviceGetPayments: () => serviceGetPayments,
  serviceUpdatePaymentById: () => serviceUpdatePaymentById
});
module.exports = __toCommonJS(service_exports);
var import_repository = require("../../repository");
const serviceCreatePayment = /* @__PURE__ */ __name((payment) => {
  return (0, import_repository.createPayment)(payment);
}, "serviceCreatePayment");
const serviceGetPayments = /* @__PURE__ */ __name((filters, sorts, page, limit) => {
  return (0, import_repository.getAllPayments)({ filters, sorts, page, limit });
}, "serviceGetPayments");
const serviceGetPaymentById = /* @__PURE__ */ __name((id) => {
  return (0, import_repository.getPaymentById)(id);
}, "serviceGetPaymentById");
const serviceUpdatePaymentById = /* @__PURE__ */ __name((id, data) => {
  return (0, import_repository.updatePaymentById)(id, data);
}, "serviceUpdatePaymentById");
const serviceDeletePaymentById = /* @__PURE__ */ __name((id) => {
  return (0, import_repository.deletePaymentById)(id);
}, "serviceDeletePaymentById");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  serviceCreatePayment,
  serviceDeletePaymentById,
  serviceGetPaymentById,
  serviceGetPayments,
  serviceUpdatePaymentById
});
//# sourceMappingURL=service.js.map
