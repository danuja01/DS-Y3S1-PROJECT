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
  createUserSchema: () => createUserSchema,
  updateUserSchema: () => updateUserSchema
});
module.exports = __toCommonJS(schema_exports);
var import_celebrate = require("celebrate");
var import_constants = require("@app/constants");
const createUserSchema = import_celebrate.Joi.object({
  name: import_celebrate.Joi.string().required(),
  email: import_celebrate.Joi.string().email().required(),
  password: import_celebrate.Joi.string().optional(),
  role: import_celebrate.Joi.string().valid(...Object.values(import_constants.roles)).optional(),
  address: import_celebrate.Joi.string().optional(),
  verification_code: import_celebrate.Joi.string().optional().allow(null)
});
const updateUserSchema = import_celebrate.Joi.object({
  name: import_celebrate.Joi.string().optional(),
  password: import_celebrate.Joi.string().optional(),
  address: import_celebrate.Joi.string().optional(),
  is_verified: import_celebrate.Joi.boolean().optional(),
  verification_code: import_celebrate.Joi.string().optional().allow(null)
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createUserSchema,
  updateUserSchema
});
//# sourceMappingURL=schema.js.map
