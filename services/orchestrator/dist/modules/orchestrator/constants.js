var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var constants_exports = {};
__export(constants_exports, {
  serviceHosts: () => serviceHosts
});
module.exports = __toCommonJS(constants_exports);
var import_config = __toESM(require("../../config"));
const serviceHosts = {
  auth: import_config.default.AUTH_SERVICE_BASE_URL,
  users: import_config.default.USER_SERVICE_BASE_URL,
  emails: import_config.default.EMAIL_SERVICE_BASE_URL,
  orders: import_config.default.ORDER_SERVICE_BASE_URL,
  payments: import_config.default.PAYMENT_SERVICE_BASE_URL,
  reviews: import_config.default.REVIEW_SERVICE_BASE_URL,
  notification: import_config.default.NOTIFICATION_SERVICE_BASE_URL,
  delivery: import_config.default.DELIVERY_SERVICE_BASE_URL,
  item: import_config.default.ITEM_SERVICE_BASE_URL
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  serviceHosts
});
//# sourceMappingURL=constants.js.map
