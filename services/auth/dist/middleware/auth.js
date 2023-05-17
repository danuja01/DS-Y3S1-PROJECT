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
var auth_exports = {};
__export(auth_exports, {
  authorizer: () => authorizer
});
module.exports = __toCommonJS(auth_exports);
var import_functions = require("@sliit-foss/functions");
var import_constants = require("@app/constants");
var import_services = require("../services");
var import_utils = require("../utils");
const authorizer = (0, import_functions.tracedAsyncHandler)(/* @__PURE__ */ __name(async function authorizer2(req) {
  var _a, _b;
  if (import_constants.protectedRoutes.find((route) => req.path.match(new RegExp(route)))) {
    return;
  }
  const token = (_b = (_a = req.headers.authorization) == null ? void 0 : _a.replace("Bearer ", "")) == null ? void 0 : _b.replace("null", "");
  if (!token)
    throw import_utils.errors.missing_token;
  const decodedUser = (0, import_utils.verify)(token);
  const user = await (0, import_services.getUserById)(decodedUser._id);
  if (!user)
    throw import_utils.errors.invalid_token;
  if (!user.is_active)
    throw import_utils.errors.user_deactivated;
  req.user = user;
  req.token = token;
}, "authorizer"));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  authorizer
});
//# sourceMappingURL=auth.js.map
