var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
var schema_exports = {};
__export(schema_exports, {
  createDeliverySchema: () => createDeliverySchema,
  updateDeliverySchema: () => updateDeliverySchema
});
module.exports = __toCommonJS(schema_exports);
var import_celebrate = require("celebrate");
const createDeliverySchema = import_celebrate.Joi.object({
  user_id: import_celebrate.Joi.string().optional(),
  order_id: import_celebrate.Joi.string().optional(),
  shippingPrice: import_celebrate.Joi.number().required(),
  shippingAddress: import_celebrate.Joi.string().required(),
  status: import_celebrate.Joi.string().required()
});
const updateDeliverySchema = import_celebrate.Joi.object({
  user_id: import_celebrate.Joi.string().optional(),
  order_id: import_celebrate.Joi.string().optional(),
  shippingPrice: import_celebrate.Joi.number().optional(),
  shippingAddress: import_celebrate.Joi.string().optional(),
  status: import_celebrate.Joi.string().optional()
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createDeliverySchema,
  updateDeliverySchema
});
//# sourceMappingURL=schema.js.map
