import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const { Schema } = mongoose;

const ProductSchema = new Schema(
  {
    user_id: {
      type: String,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    seller: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],
      required: true,
    },
    selectedFile: {
      type: String,
      required: true,
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
