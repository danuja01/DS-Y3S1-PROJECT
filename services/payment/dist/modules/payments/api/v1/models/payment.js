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
var payment_exports = {};
__export(payment_exports, {
  Payment: () => Payment
});
module.exports = __toCommonJS(payment_exports);
var import_mongoose = __toESM(require("mongoose"));
var import_mongoose_paginate_v2 = __toESM(require("mongoose-paginate-v2"));
const { Schema } = import_mongoose.default;
const PaymentSchema = new Schema(
  // {
  //   user_id: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "User",
  //     required: false,
  //   },
  //   amount: {
  //     type: Number,
  //     required: true,
  //   },
  //   currency: {
  //     type: String,
  //     required: true,
  //   },
  //   payment_method: {
  //     type: String,
  //     required: true,
  //     enum: ["Credit Card", "Debit Card", "PayPal"],
  //   },
  //   transactionId: {
  //     type: String,
  //     required: true,
  //   },
  //   payment_status: {
  //     type: String,
  //     enum: ["Pending", "Processing", "Completed", "Failed"],
  //     default: "Pending",
  //     required: true,
  //   },
  //   paypal_payment_details: {
  //     type: {
  //       intent: {
  //         type: String,
  //         required: true,
  //         enum: ["sale"],
  //       },
  //       payer: {
  //         payment_method: {
  //           type: String,
  //           required: true,
  //           enum: ["paypal"],
  //         },
  //       },
  //       redirect_urls: {
  //         return_url: {
  //           type: String,
  //           default: "http://localhost:4003/api/v1/payments/success",
  //           required: false,
  //         },
  //         cancel_url: {
  //           type: String,
  //           default: "http://localhost:4003/api/v1/payments/cancel",
  //           required: false,
  //         },
  //       },
  //       transactions: [
  //         {
  //           item_list: {
  //             items: [
  //               {
  //                 name: {
  //                   type: String,
  //                   required: true,
  //                 },
  //                 sku: {
  //                   type: String,
  //                   required: true,
  //                 },
  //                 price: {
  //                   type: String,
  //                   required: true,
  //                 },
  //                 currency: {
  //                   type: String,
  //                   required: true,
  //                 },
  //                 quantity: {
  //                   type: Number,
  //                   required: true,
  //                 },
  //               },
  //             ],
  //           },
  //           amount: {
  //             currency: {
  //               type: String,
  //               required: true,
  //             },
  //             total: {
  //               type: String,
  //               required: true,
  //             },
  //           },
  //           description: {
  //             type: String,
  //             required: true,
  //           },
  //         },
  //       ],
  //     },
  //     required: false,
  //   },
  // },
  {
    amount: {
      type: Number,
      required: true
    },
    currency: {
      type: String,
      enum: ["USD", "EUR", "GBP"],
      required: true
    },
    card: {
      cardNumber: {
        type: String,
        required: true
      },
      cvv: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 3
      },
      expirationDate: {
        type: String,
        required: true,
        match: /^\d{2}\/\d{4}$/
      },
      nameOnCard: {
        type: String,
        required: true
      }
    }
  },
  {
    versionKey: "_version",
    minimize: false,
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
  }
);
PaymentSchema.index({ createdAt: 1 });
PaymentSchema.plugin(import_mongoose_paginate_v2.default);
const Payment = import_mongoose.default.model("Payment", PaymentSchema);
Payment.syncIndexes();
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Payment
});
//# sourceMappingURL=payment.js.map
