import { axiosInstance, apiRequest } from './core/axios'

// export const getNotifications = async (data, showLoader) => {
//   return await apiRequest(() => axiosInstance.post(`/api/notification/`, data), showLoader)
// }

export const getNotifications = async (showLoader) => {
  return await apiRequest(() => axiosInstance.get(`/api/v1/notification`), showLoader)
}
