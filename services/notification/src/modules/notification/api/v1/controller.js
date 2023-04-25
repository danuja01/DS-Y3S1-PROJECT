import express from "express";
import mongoose from "mongoose";
import { celebrate, Segments } from "celebrate";
import { default as filterQuery } from "@sliit-foss/mongoose-filter-query";
import { asyncHandler } from "@sliit-foss/functions";
import { objectIdSchema } from "@app/constants";
import { toSuccess } from "@app/middleware";
import {
  serviceCreateNotification,
  serviceGetNotifications,
  serviceGetNotificationById,
  serviceUpdateNotificationById,
  serviceDeleteNotificationById,
} from "./service";

import { createNotificationSchema, updateNotificationSchema } from "./schema";

const notification = express.Router();

notification.post(
  "/",
  celebrate({ [Segments.BODY]: createNotificationSchema }),
  asyncHandler(async function controllerCreateNotification(req, res) {
    const data = await serviceCreateNotification({
      ...req.body,

      user_id: mongoose.Types.ObjectId(req.body.user_id), // convert product_id to ObjectId
    });
    return toSuccess({
      res,
      data,
      message: "Notification created successfully!",
    });
  })
);

notification.get(
  "/",
  filterQuery,
  asyncHandler(async function controllerGetNotifications(req, res) {
    const data = await serviceGetNotifications(
      req.query.filter,
      req.query.sort,
      req.query.page,
      req.query.limit
    );
    return toSuccess({
      res,
      data,
      message: "Notifications fetched successfully!",
    });
  })
);

notification.get(
  "/:id",
  celebrate({ [Segments.PARAMS]: objectIdSchema() }),
  asyncHandler(async function controllerGetNotificationById(req, res) {
    const data = await serviceGetNotificationById(req.params.id);
    return toSuccess({
      res,
      data,
      message: "Notification fetched successfully!",
    });
  })
);

notification.patch(
  "/:id",
  celebrate({
    [Segments.PARAMS]: objectIdSchema(),
    [Segments.BODY]: updateNotificationSchema,
  }),
  asyncHandler(async function controllerUpdateNotificationById(req, res) {
    const data = await serviceUpdateNotificationById(req.params.id, req.body);
    return toSuccess({
      res,
      data,
      message: "Notification updated successfully!",
    });
  })
);

notification.delete(
  "/:id",
  celebrate({ [Segments.PARAMS]: objectIdSchema() }),
  asyncHandler(async function controllerDeleteNotificationById(req, res) {
    const data = await serviceDeleteNotificationById(req.params.id);
    return toSuccess({
      res,
      data,
      message: "Notification deleted successfully!",
    });
  })
);

export default notification;
