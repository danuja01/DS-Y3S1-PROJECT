import { axiosInstance, apiRequest } from './core/axios'

export const getAllPayments = async (showLoader) => {
  return await apiRequest(() => axiosInstance.get('/api/v1/payments'), showLoader)
}

export const getPaymentById = async (id, showLoader) => {
  return await apiRequest(() => axiosInstance.get(`/api/v1/payments/${id}`), showLoader)
}

export const searchPayments = async (query, by = 'name', page = 0, showLoader) => {
  return await apiRequest(() => axiosInstance.get(`/api/v1/payments?${by}=${query}&page=${page}`), showLoader)
}

export const createPayment = async (data, showLoader) => {
  return await apiRequest(() => axiosInstance.post('/api/v1/payments', data), showLoader)
}

export const createPayPalPayment = async (data, showLoader) => {
  return await apiRequest(() => axiosInstance.post('/api/v1/payments/pay', data), showLoader)
}

export const updateReview = async (data, showLoader) => {
  return await apiRequest(() => axiosInstance.put('/api/v1/payments/review', data), showLoader)
}

export const deleteReview = async (id, userId, showLoader) => {
  return await apiRequest(() => axiosInstance.delete(`/api/v1/payments/review?id=${id}`, { data: { user_id: userId } }), showLoader)
}

export const getCuisines = async (showLoader) => {
  return await apiRequest(() => axiosInstance.get('/api/v1/payments/cuisines'), showLoader)
}
