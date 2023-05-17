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
var src_exports = {};
__export(src_exports, {
  cancellationStatus: () => cancellationStatus,
  correlationId: () => correlationId,
  hostName: () => hostName,
  objectIdSchema: () => objectIdSchema,
  protectedRoutes: () => protectedRoutes,
  ratingParamSchema: () => ratingParamSchema,
  roles: () => roles
});
module.exports = __toCommonJS(src_exports);
var import_celebrate = require("celebrate");
const correlationId = "x-correlation-id";
const hostName = "x-host-name";
const protectedRoutes = [
  "/v1/auth/login",
  "/v1/auth/register",
  "/v1/auth/refresh-token",
  "/v1/auth/verify/*",
  "/v1/system/health",
  "/v1/items"
];
const roles = ["admin", "seller", "buyer"].reduce((acc, role) => {
  acc[role] = role;
  return acc;
}, {});
const cancellationStatus = ["pending", "approved", "rejected"].reduce(
  (acc, status) => {
    acc[status] = status;
    return acc;
  },
  {}
);
const objectIdSchema = /* @__PURE__ */ __name((name = "id") => import_celebrate.Joi.object({
  [name]: import_celebrate.Joi.string().hex().length(24).required()
}), "objectIdSchema");
const ratingParamSchema = /* @__PURE__ */ __name((name = "rating") => import_celebrate.Joi.object({
  [name]: import_celebrate.Joi.number().integer().min(1).max(5).required()
}), "ratingParamSchema");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  cancellationStatus,
  correlationId,
  hostName,
  objectIdSchema,
  protectedRoutes,
  ratingParamSchema,
  roles
});
//# sourceMappingURL=index.js.map
