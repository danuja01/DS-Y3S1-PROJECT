import { axiosInstance, apiRequest } from './core/axios'

export const getAllOrders = async (filterQuery = '', sortQuery = '', page = 1) => {
  return await apiRequest(() => axiosInstance.get(`/api/v1/orders?${filterQuery}&${sortQuery}page=${page}&limit=${20}`))
}

export const getAllOrdersNoPagination = async (filterQuery = '', sortQuery = '') => {
  return await apiRequest(() => axiosInstance.get(`/api/v1/orders?${filterQuery}&${sortQuery}`))
}

export const createOrder = async (order) => {
  return await apiRequest(() => axiosInstance.post('/api/v1/orders', order), true)
}

export const updateOrderPaymentStatus = async (id, data) => {
  return await apiRequest(() => axiosInstance.patch(`/api/v1/orders/${id}/payment-status`, data), true)
}
