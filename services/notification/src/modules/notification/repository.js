import { Notification } from "./api/v1/models";

export function createNotification(notification) {
  return Notification.create(notification);
}

export function getNotificationByEmail(email) {
  return Notification.findOne({ email }).lean();
}

export function getNotificationById(id) {
  return Notification.findById(id).lean();
}

export function getNotificationByRole(role) {
  return Notification.findOne({ role }).lean();
}

export function getAllNotifications({ filters = {}, sorts = {}, page, limit }) {
  if (page && limit) {
    return Notification.paginate(filters, {
      page,
      limit,
      sorts,
      lean: true,
    });
  }
  return Notification.find(filters).sort(sorts).lean();
}

export function updateNotificationById(id, data) {
  return Notification.findByIdAndUpdate(id, data, { new: true }).lean();
}

export function deleteNotificationById(id) {
  return Notification.findByIdAndDelete(id).lean();
}

// ------------------------------------------
// import mongoose from "mongoose";
// import { getNotificationAggregateOptions } from "./helper";

// export async function getNotification(notificationId) {
//   const aggregateOptions = getNotificationAggregateOptions();

//   aggregateOptions.push({
//     $match: {
//       _id: mongoose.Types.ObjectId(notificationId),
//     },
//   });

//   const Notification = await Notification.aggregate(aggregateOptions).exec();

//   return Notification;
// }

// export function getAllNotifications(filters = {}, sorts = {}, page, limit) {
//   const aggregateOptions = getNotificationAggregateOptions(
//     filters,
//     sorts,
//     page,
//     limit
//   );

//   const Notifications = Notification.aggregate(aggregateOptions).exec();

//   return Notifications;
// }

// export function getNotificationsByUser(
//   userId,
//   filters = {},
//   sorts = {},
//   page,
//   limit
// ) {
//   const aggregateOptions = getNotificationAggregateOptions(
//     filters,
//     sorts,
//     page,
//     limit
//   );

//   aggregateOptions.push({
//     $match: {
//       user_id: mongoose.Types.ObjectId(userId),
//     },
//   });

//   return Notification.aggregate(aggregateOptions).exec();
// }

// export async function updateNotificationRead(notificationId, isRead) {
//   const Notification = await Notification.findById(notificationId).exec();

//   Notification.status = status;
//   if (isRead === true) {
//     Notification.isRead = true;
//     Notification.time = Date.now();
//   }
//   return Notification.save();
// }
