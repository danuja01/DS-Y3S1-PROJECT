import { axiosInstance, apiRequest } from './core/axios'

export const getAllProducts = async (showLoader) => {
  return await apiRequest(() => axiosInstance.get('/api/v1/sellers'), showLoader)
}

export const getProductById = async (id, showLoader) => {
  return await apiRequest(() => axiosInstance.get(`/api/v1/sellers/${id}`), showLoader)
}

export const searchPayments = async (query, by = 'name', page = 0, showLoader) => {
  return await apiRequest(() => axiosInstance.get(`/api/v1/sellers?${by}=${query}&page=${page}`), showLoader)
}

export const createPost = async (newPost) => {
  return await apiRequest(() => axiosInstance.post('/api/v1/sellers', newPost), showLoader)
}

export const updatePost = async (id, data, showLoader) => {
  return await apiRequest(() => axiosInstance.put('/api/v1/sellers/${id}', data), showLoader)
}

export const deleteProduct = async (id, userId, showLoader) => {
  return await apiRequest(() => axiosInstance.delete(`/api/v1/payments/reviews?id=${id}`, { data: { user_id: userId } }), showLoader)
}
