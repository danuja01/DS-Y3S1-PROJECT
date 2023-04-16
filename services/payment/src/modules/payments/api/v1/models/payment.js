import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const { Schema } = mongoose;

const PaymentSchema = new Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      required: true,
    },
    payment_method: {
      type: String,
      required: true,
      enum: ["Credit Card", "Debit Card", "PayPal"],
    },
    transactionId: {
      type: String,
      required: true,
    },
    payment_status: {
      type: String,
      enum: ["Pending", "Processing", "Completed", "Failed"],
      default: "Pending",
      required: true,
    },
  },
  {
    versionKey: "_version",
    minimize: false,
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

PaymentSchema.index({ createdAt: 1 });

PaymentSchema.plugin(mongoosePaginate);

const Payment = mongoose.model("Payment", PaymentSchema);

Payment.syncIndexes();

export { Payment };
