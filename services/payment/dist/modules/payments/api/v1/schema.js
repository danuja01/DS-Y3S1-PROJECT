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
  createPaymentSchema: () => createPaymentSchema,
  updatePaymentSchema: () => updatePaymentSchema
});
module.exports = __toCommonJS(schema_exports);
var import_celebrate = require("celebrate");
const createPaymentSchema = import_celebrate.Joi.object({
  amount: import_celebrate.Joi.number().required(),
  currency: import_celebrate.Joi.string().valid("USD", "EUR", "GBP").required(),
  card: import_celebrate.Joi.object({
    cardNumber: import_celebrate.Joi.string().creditCard().required(),
    cvv: import_celebrate.Joi.string().length(3).required(),
    expirationDate: import_celebrate.Joi.string().pattern(/^\d{2}\/\d{4}$/).required(),
    nameOnCard: import_celebrate.Joi.string().required()
  }).required()
});
const updatePaymentSchema = import_celebrate.Joi.object({
  amount: import_celebrate.Joi.number(),
  currency: import_celebrate.Joi.string().valid("USD", "EUR", "GBP"),
  card: import_celebrate.Joi.object({
    cardNumber: import_celebrate.Joi.string().creditCard(),
    cvv: import_celebrate.Joi.string().length(3),
    expirationDate: import_celebrate.Joi.string().pattern(/^\d{2}\/\d{4}$/),
    nameOnCard: import_celebrate.Joi.string()
  })
}).min(1);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createPaymentSchema,
  updatePaymentSchema
});
//# sourceMappingURL=schema.js.map
