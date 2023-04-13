// import crypto from "crypto";
import {
  createNotification,
  getAllNotifications,
  getNotificationById,
  updateNotificationById,
  deleteNotificationById,
} from "../../repository";

import { hashPasswordIfProvided } from "./helpers";

export const serviceCreateNotification = async (notification) => {
  if (!notification.message) throw new Error("Message not created");
  await hashPasswordIfProvided(notification);
  return createNotification(notification);
};

export const serviceGetNotifications = (filters, sorts, page, limit) => {
  return getAllNotifications({ filters, sorts, page, limit });
};

export const serviceGetNotificationById = (id) => {
  return getNotificationById(id);
};

export const serviceUpdateNotificationById = async (id, data) => {
  await hashPasswordIfProvided(data);
  return updateNotificationById(id, data);
};

export const serviceDeleteNotificationById = (id) => {
  return deleteNotificationById(id);
};
