import { Review } from "./api/v1/models";

const mongoose = require("mongoose");

// export function createReview(review) {
//   return Review.create(review);
// }

// export function getReviewByRating(rating) {
//   return Review.findOne({ rating }).lean();
// }

// export function getReviewById(id) {
//   return Review.findById(id).lean();
// }

// export function getReviewsByProductId(productId) {
//   return Review.find({ productId }).lean();
// }

// export function getAllReviews({ filters = {}, sorts = {}, page, limit }) {
//   if (page && limit) {
//     return Review.paginate(filters, {
//       page,
//       limit,
//       sorts,
//       lean: true,
//     });
//   }
//   return Review.find(filters).sort(sorts).lean();
// }

// export function updateReviewById(id, data) {
//   return Review.findByIdAndUpdate(id, data, { new: true }).lean();
// }

// export function deleteReviewById(id) {
//   return Review.findByIdAndDelete(id).lean();
// }

// *******************************************************************************

// sample product collection
// sample schemas
const productSchema = new mongoose.Schema({
  name: String,
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
});

// sample models
const Product_sample = mongoose.model("Product", productSchema);

// add sample data
const product1 = new Product_sample({ name: "Herbal" });
const product2 = new Product_sample({ name: "Natural" });

// save data to MongoDB
Promise.all([product1.save(), product2.save()])
  .then(() => {
    // find all reviews and populate the products field
    Review.find()
      .populate("product_id")
      .exec((err, products) => {
        if (err) console.log(err);
        console.log(products);
      });
  })
  .catch((err) => console.log(err));

export function createReview(review) {
  return Review.create(review);
}

export function getReviewByRating(rating) {
  return Review.findOne({ rating }).populate("product_id").lean();
}

export function getReviewById(id) {
  return Review.findById(id).populate("product_id").lean();
}

export function getReviewsByProductId(productId) {
  return Review.find({ productId }).populate("product_id").lean();
}

export function getAllReviews({ filters = {}, sorts = {}, page, limit }) {
  if (page && limit) {
    return Review.paginate(filters, {
      page,
      limit,
      sorts,
      populate: "product_id",
      lean: true,
    });
  }
  return Review.find(filters).populate("product_id").sort(sorts).lean();
}

export function updateReviewById(id, data) {
  return Review.findByIdAndUpdate(id, data, { new: true })
    .populate("product_id")
    .lean();
}

export function deleteReviewById(id) {
  return Review.findByIdAndDelete(id).populate("product_id").lean();
}
