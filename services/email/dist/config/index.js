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
var config_exports = {};
__export(config_exports, {
  default: () => config_default
});
module.exports = __toCommonJS(config_exports);
var import_celebrate = require("celebrate");
var import_module_logger = require("@sliit-foss/module-logger");
const logger = (0, import_module_logger.moduleLogger)("Config");
class Base {
  static get schema() {
    return {
      PORT: import_celebrate.Joi.number().optional(),
      MAIL_HOST: import_celebrate.Joi.string().required(),
      MAIL_USER: import_celebrate.Joi.string().required(),
      MAIL_PASSWORD: import_celebrate.Joi.string().required()
    };
  }
  static get values() {
    return {
      PORT: process.env.PORT ?? 2003,
      MAIL_HOST: process.env.MAIL_HOST,
      MAIL_USER: process.env.MAIL_USER,
      MAIL_PASSWORD: process.env.MAIL_PASSWORD
    };
  }
}
__name(Base, "Base");
const config = Base.values;
const { error } = import_celebrate.Joi.object(Base.schema).validate(config);
if (error) {
  logger.error(
    `Environment validation failed. 
Details - ${error.details[0].message}
Exiting...`
  );
  process.exit(1);
}
var config_default = config;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=index.js.map
