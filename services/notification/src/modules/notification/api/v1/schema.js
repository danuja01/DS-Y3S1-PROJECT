import { Joi } from "celebrate";
// import { roles } from "@app/constants";

export const createNotificationSchema = Joi.object({
  user_id: Joi.string().optional(),
  notification_title: Joi.string().required(),
  message: Joi.string().required(),
  time: Joi.date().required(),
  isRead: Joi.boolean().required(),
});

export const updateNotificationSchema = Joi.object({
  user_id: Joi.string().optional(),
  notification_title: Joi.string().optional(),
  message: Joi.string().optional(),
  time: Joi.date().optional(),
  isRead: Joi.boolean().optional(),
});
