import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const { Schema } = mongoose;

const ReviewSchema = new Schema(
  {
    product_id: {
      type: mongoose.Types.ObjectId,
      ref: "Product",
      required: false,
    },
    user_name: {
      type: String,
      ref: "User",
      required: false,
    },
    user_id: {
      type: Number,
      ref: "User",
      required: false,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
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

ReviewSchema.index({ createdAt: 1 });

ReviewSchema.plugin(mongoosePaginate);

const Review = mongoose.model("Review", ReviewSchema);

Review.syncIndexes();

export { Review };
