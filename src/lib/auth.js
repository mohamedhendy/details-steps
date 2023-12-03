import axios from "../axios";
import Cookies from "js-cookie";

export const signin = (credentials) => {
  return axios.post("/api/v1/auth/signin/", credentials).then((response) => {
    Cookies.set("accessToken", response.data.access, { expires: 1 });
    Cookies.set("refreshToken", response.data.refresh, { expires: 60 });

    return true;
  });
};

export const signout = () => {
  Cookies.remove("accessToken");
  Cookies.remove("refreshToken");
};

export const refreshAccessToken = () => {
  const refreshToken = Cookies.get("refreshToken");

  return axios
    .post("/api/v1/auth/token/refresh/", { refresh: refreshToken })
    .then((response) => {
      Cookies.set("accessToken", response.data.access, { expires: 1 });

      return response.data.access;
    });
};

export const validateTokens = () => {
  const accessToken = Cookies.get("accessToken");
  const refreshToken = Cookies.get("refreshToken");

  return accessToken || refreshToken ? true : false;
};

export const getUser = () => {
  return axios
    .get("/api/v1/auth/user/", { withCredentials: true })
    .then((response) => response.data);
};

export const getUsers = () => {
  return axios
    .get("/api/v1/auth/users/", { withCredentials: true })
    .then((response) => response.data);
};
