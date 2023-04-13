// import crypto from "crypto";
import {
  createDelivery,
  getAllDeliveries,
  getDeliveryById,
  updateDeliveryById,
  deleteDeliveryById,
} from "../../repository";

import { hashPasswordIfProvided } from "./helpers";

export const serviceCreateDelivery = async (delivery) => {
  if (!delivery.message) throw new Error("Delivery not created");
  await hashPasswordIfProvided(delivery);
  return createDelivery(delivery);
};

export const serviceGetDeliveries = (filters, sorts, page, limit) => {
  return getAllDeliveries({ filters, sorts, page, limit });
};

export const serviceGetDeliveryById = (id) => {
  return getDeliveryById(id);
};

export const serviceUpdateDeliveryById = async (id, data) => {
  await hashPasswordIfProvided(data);
  return updateDeliveryById(id, data);
};

export const serviceDeleteDeliveryById = (id) => {
  return deleteDeliveryById(id);
};
