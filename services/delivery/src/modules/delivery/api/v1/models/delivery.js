import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
// import { roles } from "@app/constants";

const { Schema } = mongoose;

const DeliverySchema = new Schema(
  {
    user_id: {
      type: String,
      // ref: "User",
      required: true,
    },
    product_id: {
      type: String,
      // ref: "User",
      required: true,
    },
    delivery_title: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    isRead: {
      type: Boolean,
      default: false,
    },
  },
  {
    versionKey: false,
    minimize: false,
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

DeliverySchema.index({ createdAt: 1 });

DeliverySchema.plugin(mongoosePaginate);

const Delivery = mongoose.model("Delivery", DeliverySchema);

Delivery.syncIndexes();

export { Delivery };
