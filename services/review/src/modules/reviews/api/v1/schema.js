import { Joi } from "celebrate";

export const createReviewSchema = Joi.object({
  product_id: Joi.string().optional(), // needs to integrate with product id in product collection
  user_name: Joi.string().required(),
  user_id: Joi.string().required(),
  rating: Joi.number().required(),
  title: Joi.string().required(),
  description: Joi.string().required(),
});

export const updateReviewSchema = Joi.object({
  rating: Joi.number().optional(),
  title: Joi.string().optional(),
  description: Joi.string().optional(),
});
