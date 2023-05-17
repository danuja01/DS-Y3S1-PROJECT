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
  createReviewSchema: () => createReviewSchema,
  updateReviewSchema: () => updateReviewSchema
});
module.exports = __toCommonJS(schema_exports);
var import_celebrate = require("celebrate");
const createReviewSchema = import_celebrate.Joi.object({
  item: import_celebrate.Joi.string().optional(),
  // needs to integrate with item id in items collection
  user: import_celebrate.Joi.string().optional(),
  // needs to integrate with user id in users collection
  rating: import_celebrate.Joi.number().required(),
  text: import_celebrate.Joi.string().required()
});
const updateReviewSchema = import_celebrate.Joi.object({
  rating: import_celebrate.Joi.number().optional(),
  text: import_celebrate.Joi.string().optional()
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createReviewSchema,
  updateReviewSchema
});
//# sourceMappingURL=schema.js.map
