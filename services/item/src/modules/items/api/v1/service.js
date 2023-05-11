import { createItem, getAllItems, getItemById } from "../../repository";

export const serviceCreateItem = (review) => {
  return createItem(review);
};

export const serviceGetItems = (filters, sorts, page, limit) => {
  return getAllItems({ filters, sorts, page, limit });
};

export const serviceGetItemById = (id) => {
  return getItemById(id);
};

// export const serviceUpdateReviewById = (id, data) => {
//   // await hashPasswordIfProvided(data);
//   return updateReviewById(id, data);
// };

// export const serviceDeleteReviewById = (id) => {
//   return deleteReviewById(id);
// };
