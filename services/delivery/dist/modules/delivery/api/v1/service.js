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
  serviceCreateDelivery: () => serviceCreateDelivery,
  serviceDeleteDeliveryById: () => serviceDeleteDeliveryById,
  serviceGetDeliveries: () => serviceGetDeliveries,
  serviceGetDeliveryById: () => serviceGetDeliveryById,
  serviceUpdateDeliveryById: () => serviceUpdateDeliveryById
});
module.exports = __toCommonJS(service_exports);
var import_repository = require("../../repository");
const serviceCreateDelivery = /* @__PURE__ */ __name(async (delivery) => {
  return (0, import_repository.createDelivery)(delivery);
}, "serviceCreateDelivery");
const serviceGetDeliveries = /* @__PURE__ */ __name((filters, sorts, page, limit) => {
  return (0, import_repository.getAllDeliveries)({ filters, sorts, page, limit });
}, "serviceGetDeliveries");
const serviceGetDeliveryById = /* @__PURE__ */ __name((id) => {
  const data = (0, import_repository.getDeliveryById)(id);
  return data;
}, "serviceGetDeliveryById");
const serviceUpdateDeliveryById = /* @__PURE__ */ __name(async (id, data) => {
  return (0, import_repository.updateDeliveryById)(id, data);
}, "serviceUpdateDeliveryById");
const serviceDeleteDeliveryById = /* @__PURE__ */ __name((id) => {
  return (0, import_repository.deleteDeliveryById)(id);
}, "serviceDeleteDeliveryById");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  serviceCreateDelivery,
  serviceDeleteDeliveryById,
  serviceGetDeliveries,
  serviceGetDeliveryById,
  serviceUpdateDeliveryById
});
//# sourceMappingURL=service.js.map
