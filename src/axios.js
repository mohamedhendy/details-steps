import axios from "axios";
import Cookies from "js-cookie";
import { refreshAccessToken } from "./lib/auth";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(async (config) => {
  if (config.withCredentials) {
    config.withCredentials = false;

    const accessToken = Cookies.get("accessToken");
    const refreshToken = Cookies.get("refreshToken");

    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    } else if (refreshToken) {
      await refreshAccessToken()
        .then((token) => {
          config.headers["Authorization"] = `Bearer ${token}`;
        })
        .catch(() => {
          Cookies.remove("refreshToken");
          window.location.replace("/signin");
        });
    } else {
      window.location.replace("/signin");
    }
  }

  return config;
});

export default instance;
