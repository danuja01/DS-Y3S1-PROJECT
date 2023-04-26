import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const { Schema } = mongoose;

const ProductSchema = new Schema(
  {
    user_id: {
      type: String,
      ref: "User",
      required: false,
    },
    title: {
      type: String,
      required: false,
    },
    message: {
      type: String,
      required: false,
    },
    category: {
      type: String,
      required: false,
    },
    price: {
      type: Number,
      required: false,
    },
    seller: {
      type: String,
      required: false,
    },
    tags: {
      type: [String],
      required: false,
    },
    selectedFile: {
      type: String,
      required: false,
    },
  },
  {
    versionKey: false,
    minimize: false,
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

ProductSchema.index({ createdAt: 1 });

ProductSchema.plugin(mongoosePaginate);

const Product = mongoose.model("Product", ProductSchema);

Product.syncIndexes();

export { Product };
