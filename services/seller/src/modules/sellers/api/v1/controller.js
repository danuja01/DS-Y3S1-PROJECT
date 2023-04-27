import express from "express";
import { celebrate, Segments } from "celebrate";
import { default as filterQuery } from "@sliit-foss/mongoose-filter-query";
import { asyncHandler } from "@sliit-foss/functions";
import { objectIdSchema } from "@app/constants";
import { toSuccess } from "@app/middleware";
import {
  serviceCreateProduct,
  serviceGetProducts,
  serviceGetProductById,
  serviceUpdateProductById,
  serviceDeleteProductById,
} from "./service";

import { createProductSchema, updateProductSchema } from "./schema";

const product = express.Router();

product.post(
  "/",
  celebrate({ [Segments.BODY]: createProductSchema }),
  asyncHandler(async function controllerCreateProduct(req, res) {
    const data = await serviceCreateProduct(req.body);
    return toSuccess({ res, data, message: "Product created successfully!" });
  })
);

product.get(
  "/",
  filterQuery,
  asyncHandler(async function controllerGetProducts(req, res) {
    const data = await serviceGetProducts(
      req.query.filter,
      req.query.sort,
      req.query.page,
      req.query.limit
    );
    return toSuccess({ res, data, message: "Products fetched successfully!" });
  })
);

product.get(
  "/:id",
  celebrate({ [Segments.PARAMS]: objectIdSchema() }),
  asyncHandler(async function controllerGetProductById(req, res) {
    const data = await serviceGetProductById(req.params.id);
    return toSuccess({ res, data, message: "Product fetched successfully!" });
  })
);

product.patch(
  "/:id",
  celebrate({
    [Segments.PARAMS]: objectIdSchema(),
    [Segments.BODY]: updateProductSchema,
  }),
  asyncHandler(async function controllerUpdateProductById(req, res) {
    const data = await serviceUpdateProductById(req.params.id, req.body);
    return toSuccess({ res, data, message: "Product updated successfully!" });
  })
);

product.delete(
  "/:id",
  celebrate({ [Segments.PARAMS]: objectIdSchema() }),
  asyncHandler(async function controllerDeleteProductById(req, res) {
    const data = await serviceDeleteProductById(req.params.id);
    return toSuccess({ res, data, message: "Product deleted successfully!" });
  })
);

export default product;
