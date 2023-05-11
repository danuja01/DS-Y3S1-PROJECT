// import crypto from "crypto";
import {
  createNotification,
  getAllNotifications,
  getNotificationById,
  updateNotificationById,
  deleteNotificationById,
  // -----------------
  // getNotification,
  // getAllNotifications,
  // getNotificationsByUser,
  // updateNotificationRead
  // ------------------
} from "../../repository";

// import { hashPasswordIfProvided } from "./helpers";

// eslint-disable-next-line
export const serviceCreateNotification = async (notification) => {
  return createNotification(notification);
};

export const serviceGetNotifications = (filters, sorts, page, limit) => {
  return getAllNotifications({ filters, sorts, page, limit });
};

export const serviceGetNotificationById = (id) => {
  const data = getNotificationById(id);
  return data;
};

// eslint-disable-next-line
export const serviceUpdateNotificationById = async (id, data) => {
  return updateNotificationById(id, data);
};

export const serviceDeleteNotificationById = (id) => {
  return deleteNotificationById(id);
};

// --------------------------------

// export const serviceGetNotification = (notificationId) => {
//   return getNotification(notificationId);
// };

// export const serviceNotificationsByUser = (
//   userId,
//   filters,
//   sorts,
//   page,
//   limit
// ) => {
//   return getNotificationsByUser(userId, filters, sorts, page, limit);
// };

// export const serviceUpdateNotificationRead = (notificationId, isRead) => {
//   return updateNotificationRead(notificationId, isRead);
// };
