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
var error_handler_exports = {};
__export(error_handler_exports, {
  errorHandler: () => errorHandler
});
module.exports = __toCommonJS(error_handler_exports);
var import_celebrate = require("celebrate");
var import_module_logger = require("@sliit-foss/module-logger");
const logger = (0, import_module_logger.moduleLogger)("Error-handler");
const errorHandler = /* @__PURE__ */ __name((err, _req, res, next) => {
  if (!res.errorLogged) {
    logger.error(err.message, err);
    res.errorLogged = true;
  }
  if ((0, import_celebrate.isCelebrateError)(err)) {
    for (const [, value] of err.details.entries()) {
      return res.status(422).json({ message: value.details[0].message });
    }
  }
  let message = err.message;
  if (res.polyglot)
    message = res.polyglot.t(message);
  return res.status(err.status ?? 500).json({
    message
  });
}, "errorHandler");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  errorHandler
});
//# sourceMappingURL=index.js.map
