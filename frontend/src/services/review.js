import { axiosInstance, apiRequest } from './core/axios'

export const getAllReviews = async (showLoader) => {
  return await apiRequest(() => axiosInstance.get('/api/v1/reviews'), showLoader)
}

export const getReviewById = async (id, showLoader) => {
  return await apiRequest(() => axiosInstance.get(`/api/v1/reviews/${id}`), showLoader)
}

export const getReviewsByRating = async (rating, showLoader) => {
  return await apiRequest(() => axiosInstance.get(`/api/v1/reviews/rating/${rating}`), showLoader)
}

export const createReview = async (data, showLoader) => {
  return await apiRequest(() => axiosInstance.post('/api/v1/reviews', data), showLoader)
}

export const updateReview = async (id, data, showLoader) => {
  return await apiRequest(() => axiosInstance.patch(`/api/v1/reviews/${id}`, data), showLoader)
}

export const deleteReview = async (id, showLoader) => {
  return await apiRequest(() => axiosInstance.delete(`/api/v1/reviews/${id}`), showLoader)
}
