import { axiosInstance, apiRequest } from './core/axios'

export const addNotifications = async (data, showLoader) => {
  return await apiRequest(() => axiosInstance.post(`/api/v1/notification/`, data), showLoader)
}

export const getNotifications = async (showLoader) => {
  return await apiRequest(() => axiosInstance.get(`/api/v1/notification`), showLoader)
}

export const getNotificationById = async (id, showLoader) => {
  return await apiRequest(() => axiosInstance.get(`/api/v1/notification/${id}`), showLoader)
}

export const updateNotifications = async (id, data, showLoader) => {
  return await apiRequest(() => axiosInstance.patch(`/api/v1/notification/${id}`, data), showLoader)
}
