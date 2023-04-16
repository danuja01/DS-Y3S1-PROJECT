import express from "express";
import mongoose from "mongoose";
import { celebrate, Segments } from "celebrate";
import { default as filterQuery } from "@sliit-foss/mongoose-filter-query";
import { asyncHandler } from "@sliit-foss/functions";
import { objectIdSchema } from "@app/constants";
import { toSuccess } from "@app/middleware";
import {
  serviceCreatePayment,
  serviceGetPayments,
  serviceGetPaymentById,
  serviceUpdatePaymentById,
  serviceDeletePaymentById,
} from "./service";

import { createPaymentSchema, updatePaymentSchema } from "./schema";

const payment = express.Router();

payment.post(
  "/",
  celebrate({ [Segments.BODY]: createPaymentSchema }),
  asyncHandler(async function controllerCreatePayment(req, res) {
    const data = await serviceCreatePayment({
      ...req.body,
      user_id: mongoose.Types.ObjectId(req.body.user_id), // convert user_id to ObjectId
    });
    return toSuccess({ res, data, message: "Payment created successfully!" });
  })
);

payment.get(
  "/",
  filterQuery,
  asyncHandler(async function controllerGetPayments(req, res) {
    const data = await serviceGetPayments(
      req.query.filter,
      req.query.sort,
      req.query.page,
      req.query.limit
    );
    return toSuccess({ res, data, message: "Payments fetched successfully!" });
  })
);

payment.get(
  "/:id",
  celebrate({ [Segments.PARAMS]: objectIdSchema() }),
  asyncHandler(async function controllerGetPaymentById(req, res) {
    const data = await serviceGetPaymentById(req.params.id);
    return toSuccess({ res, data, message: "Payment fetched successfully!" });
  })
);

payment.patch(
  "/:id",
  celebrate({
    [Segments.PARAMS]: objectIdSchema(),
    [Segments.BODY]: updatePaymentSchema,
  }),
  asyncHandler(async function controllerUpdatePaymentById(req, res) {
    const data = await serviceUpdatePaymentById(req.params.id, req.body);
    return toSuccess({ res, data, message: "Payment updated successfully!" });
  })
);

payment.delete(
  "/:id",
  celebrate({ [Segments.PARAMS]: objectIdSchema() }),
  asyncHandler(async function controllerDeletePaymentById(req, res) {
    const data = await serviceDeletePaymentById(req.params.id);
    return toSuccess({ res, data, message: "Payment deleted successfully!" });
  })
);

export default payment;
