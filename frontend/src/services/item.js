import { axiosInstance, apiRequest } from './core/axios'

export const getSingleProduct = async (id) => {
  return await apiRequest(() => axiosInstance.get(`/api/v1/items/${id}`))
}

export const getAllProducts = async (filterQuery = '', sortQuery = '', page = 1) => {
  return await apiRequest(() => axiosInstance.get(`/api/v1/items?${filterQuery}&${sortQuery}page=${page}&limit=${20}`))
}

export const createProduct = async (data) => {
  return await apiRequest(() => axiosInstance.post(`/api/v1/items`, data))
}

export const updateProduct = async (id, data) => {
  return await apiRequest(() => axiosInstance.patch(`/api/v1/items/${id}`, data));
};

export const deleteProduct = async (id) => {
  return await apiRequest(() => axiosInstance.delete(`/api/v1/items/${id}`));
};
