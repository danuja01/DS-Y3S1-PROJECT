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
var import_functions = require("@sliit-foss/functions");
var import_middleware = require("@app/middleware");
var import_service = require("./service");
var import_schema = require("./schema");
const auth = import_express.default.Router();
auth.post(
  "/login",
  (0, import_celebrate.celebrate)({ [import_celebrate.Segments.BODY]: import_schema.loginSchema }),
  (0, import_functions.tracedAsyncHandler)(/* @__PURE__ */ __name(async function controllerLogin(req, res) {
    const data = await (0, import_functions.traced)(import_service.serviceLogin)(req.body);
    return (0, import_middleware.toSuccess)({ res, data, message: "Login successfull!" });
  }, "controllerLogin"))
);
auth.post(
  "/register",
  (0, import_celebrate.celebrate)({ [import_celebrate.Segments.BODY]: import_schema.registerSchema }),
  (0, import_functions.tracedAsyncHandler)(/* @__PURE__ */ __name(async function controllerRegister(req, res) {
    const data = await (0, import_functions.traced)(import_service.serviceRegister)(req.body);
    return (0, import_middleware.toSuccess)({ res, data, message: "Registration successfull!" });
  }, "controllerRegister"))
);
auth.post(
  "/refresh-token",
  (0, import_celebrate.celebrate)({ [import_celebrate.Segments.BODY]: import_schema.refreshTokenSchema }),
  (0, import_functions.tracedAsyncHandler)(/* @__PURE__ */ __name(async function controllerRefreshToken(req, res) {
    const data = await (0, import_functions.traced)(import_service.serviceRefreshToken)(req.body.refresh_token);
    return (0, import_middleware.toSuccess)({ res, data, message: "Token refresh successfull!" });
  }, "controllerRefreshToken"))
);
auth.get(
  "/verify/:code",
  (0, import_functions.tracedAsyncHandler)(/* @__PURE__ */ __name(async function controllerVerifyUser(req, res) {
    await (0, import_functions.traced)(import_service.serviceVerifyUser)(req.params.code);
    return (0, import_middleware.toSuccess)({ res, message: "User verified successfully!" });
  }, "controllerVerifyUser"))
);
auth.get(
  "/current",
  (0, import_functions.tracedAsyncHandler)(/* @__PURE__ */ __name(function controllerGetAuthUser(req, res) {
    delete req.user.password;
    return (0, import_middleware.toSuccess)({
      res,
      data: req.user,
      message: "Auth user fetched successfully!"
    });
  }, "controllerGetAuthUser"))
);
auth.post(
  "/logout",
  (0, import_functions.tracedAsyncHandler)(/* @__PURE__ */ __name(async function controllerLogout(req, res) {
    await (0, import_functions.traced)(import_service.serviceLogout)(req.token);
    return (0, import_middleware.toSuccess)({ res, message: "Logout successfull!" });
  }, "controllerLogout"))
);
var controller_default = auth;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=controller.js.map
