import axios from "axios";

const API = `https://dummyjson.com/auth/login`;

export const LoginService = {
  loginWithEmail(data) {
    return axios.post(`${API}`, data);
  },
};
