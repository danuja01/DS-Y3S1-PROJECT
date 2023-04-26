import { axiosInstance, apiRequest } from './core/axios'

export const getAllProducts = async (showLoader) => {
  return await apiRequest(() => axiosInstance.get('/api/v1/sellers'), showLoader)
}

export const getProductById = async (id, showLoader) => {
  return await apiRequest(() => axiosInstance.get(`/api/v1/sellers/${id}`), showLoader)
}

export const updateProduct = async (id, data, showLoader) => {
  return await apiRequest(() => axiosInstance.patch(`/api/v1/sellers/${id}`, data), showLoader)
}

export const deleteProduct = async (id, showLoader) => {
  return await apiRequest(() => axiosInstance.delete(`/api/v1/sellers/${id}`), showLoader)
}
