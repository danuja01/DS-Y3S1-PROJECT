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
var jwt_exports = {};
__export(jwt_exports, {
  generateTokens: () => generateTokens,
  verify: () => verify
});
module.exports = __toCommonJS(jwt_exports);
var import_jsonwebtoken = __toESM(require("jsonwebtoken"));
var import_module_logger = require("@sliit-foss/module-logger");
var import_config = __toESM(require("../config"));
var import_constants = require("./constants");
const logger = (0, import_module_logger.moduleLogger)("Jwt-util");
const verify = /* @__PURE__ */ __name((token, ignoreExpiry = false) => {
  try {
    const verificationMethod = ignoreExpiry ? "decode" : "verify";
    return import_jsonwebtoken.default[verificationMethod](token, import_config.default.JWT_SECRET);
  } catch (error) {
    logger.error(`Jwt verification failed - ${error.message}`);
    if (error.message === "jwt expired") {
      throw import_constants.errors.token_expired;
    }
    throw import_constants.errors.invalid_token;
  }
}, "verify");
const generateTokens = /* @__PURE__ */ __name((user) => {
  ["password", "created_at", "updated_at"].forEach((key) => delete user[key]);
  const accessToken = import_jsonwebtoken.default.sign(user, import_config.default.JWT_SECRET, {
    expiresIn: import_config.default.ACCESS_TOKEN_EXPIRY
  });
  const refreshToken = import_jsonwebtoken.default.sign(
    {
      access_token: accessToken
    },
    import_config.default.JWT_SECRET,
    {
      expiresIn: import_config.default.REFRESH_TOKEN_EXPIRY
    }
  );
  return { access_token: accessToken, refresh_token: refreshToken };
}, "generateTokens");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  generateTokens,
  verify
});
//# sourceMappingURL=jwt.js.map
