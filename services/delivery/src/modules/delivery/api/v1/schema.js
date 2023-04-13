import { Joi } from "celebrate";
// import { roles } from "@app/constants";

export const createDeliverySchema = Joi.object({
  user_id: Joi.string().required(),
  product_id: Joi.string().required(),
  delivery_title: Joi.string().required(),
  message: Joi.string().required(),
  isRead: Joi.boolean().required(),
});

export const updateDeliverySchema = Joi.object({
  user_id: Joi.string().required(),
  product_id: Joi.string().required(),
  delivery_title: Joi.string().required(),
  message: Joi.string().required(),
  isRead: Joi.boolean().required(),
});
