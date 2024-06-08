import axios, { InternalAxiosRequestConfig } from "axios";
import TokenManager from "./token-service";

export interface IPassword{
    old_password: string,
    new_password: string,
    new_password1: string
}
const baseURL = "http://185.8.174.74:8000";
const axiosInstance = axios.create({
  baseURL,
});

axiosInstance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    if (config.url === "/accounts/login/") return config;
    try {
      const accessToken = TokenManager.getAccessToken();
      const refreshToken = TokenManager.getRefreshToken();

      if (!accessToken) {
        throw new Error("Access token not found");
      }

      const decodedAccessToken = JSON.parse(atob(accessToken.split(".")[1]));
      const isExpired = new Date(decodedAccessToken.exp * 1000) < new Date();

      if (isExpired && refreshToken) {
        const {
          data: { access },
        } = await axios.post<{ access: string }>(
          `${baseURL}/accounts/refresh/`,
          { refresh: refreshToken }
        );
        TokenManager.setAccessToken(access);
        config.headers.Authorization = `Bearer ${access}`;
      } else {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
    } catch (error) {
      window.location.href = "/";
    }

    return config;
  },
  (error) => Promise.reject(error)
);


const passwordService=<TData=IPassword,TResponse=any>(data:IPassword)=>{
return axiosInstance.put<TData,TResponse>('/accounts/change-password/',data)
}

export default passwordService;