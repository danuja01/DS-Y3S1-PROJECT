import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:4002/api/v1/reviews",
  headers: {
    "Content-type": "application/json",
  },
});
