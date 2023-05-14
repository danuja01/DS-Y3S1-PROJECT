var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var controller_exports = {};
__export(controller_exports, {
  default: () => controller_default
});
module.exports = __toCommonJS(controller_exports);
var import_express = __toESM(require("express"));
var import_celebrate = require("celebrate");
var import_mongoose_filter_query = __toESM(require("@sliit-foss/mongoose-filter-query"));
var import_functions = require("@sliit-foss/functions");
var import_constants = require("@app/constants");
var import_middleware = require("@app/middleware");
var import_service = require("./service");
var import_schema = require("./schema");
const user = import_express.default.Router();
user.post(
  "/",
  (0, import_celebrate.celebrate)({ [import_celebrate.Segments.BODY]: import_schema.createUserSchema }),
  (0, import_functions.asyncHandler)(/* @__PURE__ */ __name(async function controllerCreateUser(req, res) {
    const data = await (0, import_service.serviceCreateUser)(req.body);
    return (0, import_middleware.toSuccess)({ res, data, message: "User created successfully!" });
  }, "controllerCreateUser"))
);
user.get(
  "/",
  import_mongoose_filter_query.default,
  (0, import_functions.asyncHandler)(/* @__PURE__ */ __name(async function controllerGetUsers(req, res) {
    const data = await (0, import_service.serviceGetUsers)(
      req.query.filter,
      req.query.sort,
      req.query.page,
      req.query.limit
    );
    return (0, import_middleware.toSuccess)({ res, data, message: "Users fetched successfully!" });
  }, "controllerGetUsers"))
);
user.get(
  "/:id",
  (0, import_celebrate.celebrate)({ [import_celebrate.Segments.PARAMS]: (0, import_constants.objectIdSchema)() }),
  (0, import_functions.asyncHandler)(/* @__PURE__ */ __name(async function controllerGetUserById(req, res) {
    const data = await (0, import_service.serviceGetUserById)(req.params.id);
    return (0, import_middleware.toSuccess)({ res, data, message: "User fetched successfully!" });
  }, "controllerGetUserById"))
);
user.patch(
  "/:id",
  (0, import_celebrate.celebrate)({
    [import_celebrate.Segments.PARAMS]: (0, import_constants.objectIdSchema)(),
    [import_celebrate.Segments.BODY]: import_schema.updateUserSchema
  }),
  (0, import_functions.asyncHandler)(/* @__PURE__ */ __name(async function controllerUpdateUserById(req, res) {
    const data = await (0, import_service.serviceUpdateUserById)(req.params.id, req.body);
    return (0, import_middleware.toSuccess)({ res, data, message: "User updated successfully!" });
  }, "controllerUpdateUserById"))
);
user.patch(
  "/",
  import_mongoose_filter_query.default,
  (0, import_celebrate.celebrate)({ [import_celebrate.Segments.BODY]: import_schema.updateUserSchema }),
  (0, import_functions.asyncHandler)(/* @__PURE__ */ __name(async function controllerUpdateMultipleUsers(req, res) {
    const data = await (0, import_service.serviceUpdateMultipleUsers)(req.query.filter, req.body);
    return (0, import_middleware.toSuccess)({ res, data, message: "Users updated successfully!" });
  }, "controllerUpdateMultipleUsers"))
);
user.delete(
  "/:id",
  (0, import_celebrate.celebrate)({ [import_celebrate.Segments.PARAMS]: (0, import_constants.objectIdSchema)() }),
  (0, import_functions.asyncHandler)(/* @__PURE__ */ __name(async function controllerDeleteUserById(req, res) {
    const data = await (0, import_service.serviceDeleteUserById)(req.params.id);
    return (0, import_middleware.toSuccess)({ res, data, message: "User deleted successfully!" });
  }, "controllerDeleteUserById"))
);
var controller_default = user;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=controller.js.map
