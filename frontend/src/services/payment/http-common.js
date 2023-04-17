import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:4003/api/v1/payments",
  headers: {
    "Content-type": "application/json",
  },
});
