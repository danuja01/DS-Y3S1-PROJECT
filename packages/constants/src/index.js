import { Joi } from "celebrate";

export const correlationId = "x-correlation-id";
export const hostName = "x-host-name";

export const objectIdSchema = (name = "id") =>
  Joi.object({
    [name]: Joi.string().hex().length(24).required(),
  });
