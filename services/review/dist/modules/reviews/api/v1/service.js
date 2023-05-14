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
var service_exports = {};
__export(service_exports, {
  serviceCreateReview: () => serviceCreateReview,
  serviceDeleteReviewById: () => serviceDeleteReviewById,
  serviceGetReviewById: () => serviceGetReviewById,
  serviceGetReviewByRating: () => serviceGetReviewByRating,
  serviceGetReviews: () => serviceGetReviews,
  serviceUpdateReviewById: () => serviceUpdateReviewById
});
module.exports = __toCommonJS(service_exports);
var import_repository = require("../../repository");
const serviceCreateReview = /* @__PURE__ */ __name((review) => {
  return (0, import_repository.createReview)(review);
}, "serviceCreateReview");
const serviceGetReviews = /* @__PURE__ */ __name((filters, sorts, page, limit) => {
  return (0, import_repository.getAllReviews)({ filters, sorts, page, limit });
}, "serviceGetReviews");
const serviceGetReviewById = /* @__PURE__ */ __name((id) => {
  return (0, import_repository.getReviewById)(id);
}, "serviceGetReviewById");
const serviceGetReviewByRating = /* @__PURE__ */ __name((rating) => {
  return (0, import_repository.getReviewByRating)(rating);
}, "serviceGetReviewByRating");
const serviceUpdateReviewById = /* @__PURE__ */ __name((id, data) => {
  return (0, import_repository.updateReviewById)(id, data);
}, "serviceUpdateReviewById");
const serviceDeleteReviewById = /* @__PURE__ */ __name((id) => {
  return (0, import_repository.deleteReviewById)(id);
}, "serviceDeleteReviewById");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  serviceCreateReview,
  serviceDeleteReviewById,
  serviceGetReviewById,
  serviceGetReviewByRating,
  serviceGetReviews,
  serviceUpdateReviewById
});
//# sourceMappingURL=service.js.map
