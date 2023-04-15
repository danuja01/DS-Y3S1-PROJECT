import http from "../http-common";

class NotificationDataService {
  getAll() {
    return http.get(`/`);
  }

  get(id) {
    return http.get(`/id/${id}`);
  }

  find(query, by = "name", page = 0) {
    return http.get(`?${by}=${query}&page=${page}`);
  }

  createNotification(data) {
    return http.post("/notification", data);
  }

  updateNotification(data) {
    return http.put("/notification", data);
  }

  deleteNotification(id, notificationId) {
    return http.delete(`/notification?id=${id}`, {
      data: { notification_id: notificationId },
    });
  }

  getCuisines(id) {
    return http.get(`/cuisines`);
  }
}

export default new NotificationDataService();
