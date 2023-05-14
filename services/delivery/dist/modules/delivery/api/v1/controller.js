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
const delivery = import_express.default.Router();
delivery.post(
  "/",
  (0, import_celebrate.celebrate)({ [import_celebrate.Segments.BODY]: import_schema.createDeliverySchema }),
  (0, import_functions.asyncHandler)(/* @__PURE__ */ __name(async function controllerCreateDelivery(req, res) {
    const data = await (0, import_service.serviceCreateDelivery)(req.body);
    return (0, import_middleware.toSuccess)({
      res,
      data,
      message: "Delivery created successfully!"
    });
  }, "controllerCreateDelivery"))
);
delivery.get(
  "/",
  import_mongoose_filter_query.default,
  (0, import_functions.asyncHandler)(/* @__PURE__ */ __name(async function controllerGetDeliveries(req, res) {
    const data = await (0, import_service.serviceGetDeliveries)(
      req.query.filter,
      req.query.sort,
      req.query.page,
      req.query.limit
    );
    return (0, import_middleware.toSuccess)({ res, data, message: "Deliverys fetched successfully!" });
  }, "controllerGetDeliveries"))
);
delivery.get(
  "/:id",
  (0, import_celebrate.celebrate)({ [import_celebrate.Segments.PARAMS]: (0, import_constants.objectIdSchema)() }),
  (0, import_functions.asyncHandler)(/* @__PURE__ */ __name(async function controllerGetDeliveryById(req, res) {
    const data = await (0, import_service.serviceGetDeliveryById)(req.params.id);
    return (0, import_middleware.toSuccess)({ res, data, message: "Delivery fetched successfully!" });
  }, "controllerGetDeliveryById"))
);
delivery.patch(
  "/:id",
  (0, import_celebrate.celebrate)({
    [import_celebrate.Segments.PARAMS]: (0, import_constants.objectIdSchema)(),
    [import_celebrate.Segments.BODY]: import_schema.updateDeliverySchema
  }),
  (0, import_functions.asyncHandler)(/* @__PURE__ */ __name(async function controllerUpdateDeliveryById(req, res) {
    const data = await (0, import_service.serviceUpdateDeliveryById)(req.params.id, req.body);
    return (0, import_middleware.toSuccess)({ res, data, message: "Delivery updated successfully!" });
  }, "controllerUpdateDeliveryById"))
);
delivery.delete(
  "/:id",
  (0, import_celebrate.celebrate)({ [import_celebrate.Segments.PARAMS]: (0, import_constants.objectIdSchema)() }),
  (0, import_functions.asyncHandler)(/* @__PURE__ */ __name(async function controllerDeleteDeliveryById(req, res) {
    const data = await (0, import_service.serviceDeleteDeliveryById)(req.params.id);
    return (0, import_middleware.toSuccess)({ res, data, message: "Delivery deleted successfully!" });
  }, "controllerDeleteDeliveryById"))
);
var controller_default = delivery;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=controller.js.map
