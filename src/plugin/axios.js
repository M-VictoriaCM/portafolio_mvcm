
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api/",
  withCredentials: true,
});

export default {
  install(app) {
    app.config.globalProperties.$axios = axios;
    app.config.globalProperties.$api = api;
  }
};

export { api };
