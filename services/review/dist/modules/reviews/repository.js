var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var repository_exports = {};
__export(repository_exports, {
  createReview: () => createReview,
  deleteReviewById: () => deleteReviewById,
  getAllReviews: () => getAllReviews,
  getReviewById: () => getReviewById,
  getReviewByRating: () => getReviewByRating,
  getReviewsByProductId: () => getReviewsByProductId,
  updateReviewById: () => updateReviewById
});
module.exports = __toCommonJS(repository_exports);
var import_models = require("./api/v1/models");
function createReview(review) {
  return import_models.Review.create(review);
}
__name(createReview, "createReview");
function getReviewByRating(rating) {
  return import_models.Review.find({ rating }).lean().populate("item");
}
__name(getReviewByRating, "getReviewByRating");
function getReviewById(id) {
  return import_models.Review.findById(id).lean();
}
__name(getReviewById, "getReviewById");
function getReviewsByProductId(productId) {
  return import_models.Review.find({ productId }).lean();
}
__name(getReviewsByProductId, "getReviewsByProductId");
function getAllReviews({ filters = {}, sorts = {}, page, limit }) {
  if (page && limit) {
    return import_models.Review.paginate(filters, {
      page,
      limit,
      sorts,
      lean: true
    });
  }
  return import_models.Review.find(filters).sort(sorts).lean().populate("item").populate("user");
}
__name(getAllReviews, "getAllReviews");
function updateReviewById(id, data) {
  return import_models.Review.findByIdAndUpdate(id, data, { new: true }).lean();
}
__name(updateReviewById, "updateReviewById");
function deleteReviewById(id) {
  return import_models.Review.findByIdAndDelete(id).lean();
}
__name(deleteReviewById, "deleteReviewById");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createReview,
  deleteReviewById,
  getAllReviews,
  getReviewById,
  getReviewByRating,
  getReviewsByProductId,
  updateReviewById
});
//# sourceMappingURL=repository.js.map
