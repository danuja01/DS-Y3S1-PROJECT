import { Joi } from "celebrate";

export const createReviewSchema = Joi.object({
  user_id: Joi.string().required(),
  product_id: Joi.string().required(),
  rating: Joi.number().required(),
  title: Joi.string().optional(),
  description: Joi.string().required(),
  active: Joi.boolean().optional(),
});

export const updateReviewSchema = Joi.object({
  rating: Joi.number().optional(),
  title: Joi.string().optional(),
  description: Joi.string().optional(),
  active: Joi.boolean().optional(),
});
