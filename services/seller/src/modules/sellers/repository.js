import { Product } from "./api/v1/models";

export function createProduct(product) {
  return Product.create(product);
}

export function getProductByTitle(title) {
  return Product.findOne({ title }).lean();
}

export function getProductById(id) {
  return Product.findById(id).lean();
}

export function getAllProducts({ filters = {}, sorts = {}, page, limit }) {
  if (page && limit) {
    return Product.paginate(filters, {
      page,
      limit,
      sorts,
      lean: true,
    });
  }
  return Product.find(filters).sort(sorts).lean();
}

export function updateProductById(id, data) {
  return Product.findByIdAndUpdate(id, data, { new: true }).lean();
}

export function deleteProductById(id) {
  return Product.findByIdAndDelete(id).lean();
}
