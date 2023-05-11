import express from "express";
import { celebrate, Segments } from "celebrate";
import { default as filterQuery } from "@sliit-foss/mongoose-filter-query";
import { asyncHandler } from "@sliit-foss/functions";
import { objectIdSchema } from "@app/constants";
import { toSuccess } from "@app/middleware";
import {
  serviceCreateItem,
  serviceGetItems,
  serviceGetItemById,
} from "./service";

import { createItemSchema } from "./schema";

const item = express.Router();

item.post(
  "/",
  celebrate({ [Segments.BODY]: createItemSchema }),
  asyncHandler(async function controllerCreateReview(req, res) {
    const data = await serviceCreateItem(req.body);
    return toSuccess({ res, data, message: "Item created successfully!" });
  })
);

item.get(
  "/",
  filterQuery,
  asyncHandler(async function controllerGetReviews(req, res) {
    const data = await serviceGetItems(
      req.query.filter,
      req.query.sort,
      req.query.page,
      req.query.limit
    );
    return toSuccess({ res, data, message: "Items fetched successfully!" });
  })
);

item.get(
  "/:id",
  celebrate({ [Segments.PARAMS]: objectIdSchema() }),
  asyncHandler(async function controllerGetReviewById(req, res) {
    const data = await serviceGetItemById(req.params.id);
    return toSuccess({ res, data, message: "Item fetched successfully!" });
  })
);

// review.patch(
//   "/:id",
//   celebrate({
//     [Segments.PARAMS]: objectIdSchema(),
//     [Segments.BODY]: updateReviewSchema,
//   }),
//   asyncHandler(async function controllerUpdateReviewById(req, res) {
//     const data = await serviceUpdateReviewById(req.params.id, req.body);
//     return toSuccess({ res, data, message: "Review updated successfully!" });
//   })
// );

// review.delete(
//   "/:id",
//   celebrate({ [Segments.PARAMS]: objectIdSchema() }),
//   asyncHandler(async function controllerDeleteReviewById(req, res) {
//     const data = await serviceDeleteReviewById(req.params.id);
//     return toSuccess({ res, data, message: "Review deleted successfully!" });
//   })
// );

export default item;
