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
var user_exports = {};
__export(user_exports, {
  User: () => User
});
module.exports = __toCommonJS(user_exports);
var import_mongoose = __toESM(require("mongoose"));
var import_mongoose_paginate_v2 = __toESM(require("mongoose-paginate-v2"));
var import_constants = require("@app/constants");
const { Schema } = import_mongoose.default;
const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      unique: true
    },
    password: {
      type: String,
      unique: true
    },
    role: {
      type: String,
      enum: Object.values(import_constants.roles),
      default: import_constants.roles.buyer
    },
    address: {
      type: String
    },
    is_active: {
      type: String,
      default: true
    },
    is_verified: {
      type: Boolean,
      default: false
    },
    verification_code: {
      type: String,
      index: {
        unique: true,
        partialFilterExpression: { verification_code: { $type: "string" } }
      }
    }
  },
  {
    versionKey: false,
    minimize: false,
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
  }
);
UserSchema.index({ createdAt: 1 });
UserSchema.plugin(import_mongoose_paginate_v2.default);
const User = import_mongoose.default.model("User", UserSchema);
User.syncIndexes();
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  User
});
//# sourceMappingURL=user.js.map
