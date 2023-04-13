import { Joi } from "celebrate";
// import { roles } from "@app/constants";

export const createNotificationSchema = Joi.object({
  user_id: Joi.string().required(),
  notification_title: Joi.string().required(),
  message: Joi.string().required(),
  isRead: Joi.boolean().required(),
});

export const updateNotificationSchema = Joi.object({
  notification_title: Joi.string().required(),
  message: Joi.string().required(),
  isRead: Joi.boolean().required(),
});
