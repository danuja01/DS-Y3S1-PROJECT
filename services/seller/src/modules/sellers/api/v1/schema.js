import { Joi } from "celebrate";

export const createProductSchema = Joi.object({
  user_id: Joi.string().required(),
  title: Joi.string().optional(),
  message: Joi.string().required(),
  category: Joi.string().required(),
  price: Joi.number().required(),
  seller: Joi.string().required(),
  tags: Joi.string().required(),
  selectedFile: Joi.string().required(),
  active: Joi.boolean().optional(),
});

export const updateProductSchema = Joi.object({
  title: Joi.string().optional(),
  message: Joi.string().optional(),
  category: Joi.string().optional(),
  price: Joi.number().optional(),
  seller: Joi.string().optional(),
  tags: Joi.string().optional(),
  selectedFile: Joi.string().optional(),
  active: Joi.boolean().optional(),
});
