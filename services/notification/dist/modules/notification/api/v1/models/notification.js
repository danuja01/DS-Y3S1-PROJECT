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
var notification_exports = {};
__export(notification_exports, {
  Notification: () => Notification
});
module.exports = __toCommonJS(notification_exports);
var import_mongoose = __toESM(require("mongoose"));
var import_mongoose_paginate_v2 = __toESM(require("mongoose-paginate-v2"));
const { Schema } = import_mongoose.default;
const NotificationSchema = new Schema(
  {
    user_id: {
      type: import_mongoose.default.Schema.Types.ObjectId,
      ref: "User",
      required: false
    },
    notification_title: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true
    },
    isRead: {
      type: Boolean,
      default: false
    }
  },
  {
    versionKey: false,
    minimize: false,
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
  }
);
NotificationSchema.index({ createdAt: 1 });
NotificationSchema.plugin(import_mongoose_paginate_v2.default);
const Notification = import_mongoose.default.model("Notification", NotificationSchema);
Notification.syncIndexes();
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Notification
});
//# sourceMappingURL=notification.js.map
