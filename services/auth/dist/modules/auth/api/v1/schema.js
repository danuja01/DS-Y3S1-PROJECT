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
  loginSchema: () => loginSchema,
  refreshTokenSchema: () => refreshTokenSchema,
  registerSchema: () => registerSchema
});
module.exports = __toCommonJS(schema_exports);
var import_celebrate = require("celebrate");
const loginSchema = import_celebrate.Joi.object({
  email: import_celebrate.Joi.string().email().required(),
  password: import_celebrate.Joi.string().required()
});
const registerSchema = import_celebrate.Joi.object({
  name: import_celebrate.Joi.string().required(),
  email: import_celebrate.Joi.string().email().required(),
  password: import_celebrate.Joi.string().regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&^()._*?]{8,30}$/
  ).required().error(
    (errors) => errors.map((err) => {
      if (err.code === "string.pattern.base")
        err.message = `Password should have at least one lowercase letter, one uppercase letter, one number and one special character and should be at least 8 characters long`;
      return err;
    })
  ),
  address: import_celebrate.Joi.string().optional(),
  role: import_celebrate.Joi.string().valid("buyer", "seller").default("buyer"),
  verification_code: import_celebrate.Joi.string().optional().allow(null)
});
const refreshTokenSchema = import_celebrate.Joi.object({
  refresh_token: import_celebrate.Joi.string().required()
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  loginSchema,
  refreshTokenSchema,
  registerSchema
});
//# sourceMappingURL=schema.js.map
