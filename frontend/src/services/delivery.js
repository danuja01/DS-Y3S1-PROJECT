import { axiosInstance, apiRequest } from './core/axios'

export const getDelivery = async (showLoader) => {
  return await apiRequest(() => axiosInstance.get(`/api/v1/delivery/643a39f152466cece5a7a501`), showLoader)
}

export const addDelivery = async (data, showLoader) => {
  return await apiRequest(() => axiosInstance.post(`/api/v1/delivery`, data), showLoader)
}

export const getDeliveryById = async (id, showLoader) => {
  return await apiRequest(() => axiosInstance.get(`/api/v1/delivery/${id}`), showLoader)
}

export const updateDelivery = async (id, data, showLoader) => {
  return await apiRequest(() => axiosInstance.patch(`/api/v1/delivery/${id}`, data), showLoader)
}
