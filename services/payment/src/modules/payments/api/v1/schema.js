import { Joi } from "celebrate";

export const createPaymentSchema = Joi.object({
  user_id: Joi.string().optional(),
  amount: Joi.number().required(),
  currency: Joi.string().required(),
  payment_method: Joi.string()
    .valid("Credit Card", "Debit Card", "PayPal")
    .required(),
  transactionId: Joi.string().required(),
  payment_status: Joi.string().default("Pending"),
});

export const updatePaymentSchema = Joi.object({
  amount: Joi.number().optional(),
  currency: Joi.string().optional(),
  payment_method: Joi.string()
    .valid("Credit Card", "Debit Card", "PayPal")
    .optional(),
  transactionId: Joi.string().optional(),
  payment_status: Joi.string()
    .valid("Pending", "Processing", "Completed", "Failed")
    .optional(),
});
