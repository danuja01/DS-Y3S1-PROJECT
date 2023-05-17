import { axiosInstance, apiRequest } from './core/axios'

export const addNotifications = async (data) => {
  return await apiRequest(() => axiosInstance.post(`/api/v1/notification/`, data), false)
}

export const getNotifications = async () => {
  return await apiRequest(() => axiosInstance.get(`/api/v1/notification`), false)
}

export const getNotificationById = async (id) => {
  return await apiRequest(() => axiosInstance.get(`/api/v1/notification/${id}`), false)
}

export const updateNotifications = async (id, data) => {
  return await apiRequest(() => axiosInstance.patch(`/api/v1/notification/${id}`, data), false)
}
