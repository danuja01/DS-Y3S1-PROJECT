import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
} from "../../repository";

import { hashPasswordIfProvided } from "./helpers";

export const serviceCreateProduct = async (product) => {
  if (!product.title) throw new Error("Title is required");
  await hashPasswordIfProvided(product);
  return createProduct(product);
};

export const serviceGetProducts = (filters, sorts, page, limit) => {
  return getAllProducts({ filters, sorts, page, limit });
};

export const serviceGetProductById = (id) => {
  return getProductById(id);
};

export const serviceUpdateProductById = async (id, data) => {
  await hashPasswordIfProvided(data);
  return updateProductById(id, data);
};

export const serviceDeleteProductById = (id) => {
  return deleteProductById(id);
};
