import { axiosInstance, apiRequest } from './core/axios'

// export const getNotifications = async (data, showLoader) => {
//   return await apiRequest(() => axiosInstance.post(`/api/notification/`, data), showLoader)
// }

export const getDelivery = async (showLoader) => {
  return await apiRequest(() => axiosInstance.get(`/api/v1/delivery/6447acda10a4d65c02dc2270`), showLoader)
}

export const addDelivery = async (data, showLoader) => {
  return await apiRequest(() => axiosInstance.post(`/api/v1/delivery`, data), showLoader)
}

export const updateDelivery = async (id, data, showLoader) => {
  return await apiRequest(() => axiosInstance.patch(`/api/v1/delivery/${id}`, data), showLoader)
}
