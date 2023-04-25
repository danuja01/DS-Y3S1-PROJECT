import { axiosInstance, apiRequest } from './core/axios'

// export const getNotifications = async (data, showLoader) => {
//   return await apiRequest(() => axiosInstance.post(`/api/notification/`, data), showLoader)
// }

export const getDelivery = async (showLoader) => {
  return await apiRequest(() => axiosInstance.get(`/api/v1/delivery/6447acda10a4d65c02dc2270`), showLoader)
}
