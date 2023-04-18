import http from "./http-common";

class PaymentDataService {
  getAll() {
    return http.get(`/`);
  }

  get(id) {
    return http.get(`/id/${id}`);
  }

  find(query, by = "name", page = 0) {
    return http.get(`?${by}=${query}&page=${page}`);
  }

  createPayment(data) {
    return http.post("/", data);
  }

  postToPayPal() {
    return http.post("/pay");
  }

  updateReview(data) {
    return http.put("/review", data);
  }

  deleteReview(id, userId) {
    return http.delete(`/review?id=${id}`, { data: { user_id: userId } });
  }

  getCuisines(id) {
    return http.get(`/cuisines`);
  }
}

export default new PaymentDataService();
