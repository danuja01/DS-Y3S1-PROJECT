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
var src_exports = {};
__export(src_exports, {
  connect: () => connect
});
module.exports = __toCommonJS(src_exports);
var import_mongoose = __toESM(require("mongoose"));
var import_module_logger = require("@sliit-foss/module-logger");
const logger = (0, import_module_logger.moduleLogger)("Mongoose-DB-Connector");
const connect = /* @__PURE__ */ __name(async () => {
  try {
    import_mongoose.default.set("strictQuery", false);
    await import_mongoose.default.connect(process.env.DB_URL, {
      keepAlive: true,
      socketTimeoutMS: 3e4,
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    logger.info("Connected to the database");
  } catch (error) {
    logger.error(`Database connection Failed | message: ${error.message}`);
  }
  import_mongoose.default.connection.on("error", (err) => {
    logger.error(`Database connection Error | message: ${err.message}`);
  });
  import_mongoose.default.connection.on("disconnected", () => {
    logger.error("Database disconnected");
  });
  import_mongoose.default.connection.on("connected", () => {
    logger.info("Database connected");
  });
}, "connect");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  connect
});
//# sourceMappingURL=index.js.map
