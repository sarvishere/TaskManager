import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import TokenManager from "./token-service";

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

class APIClient<TData, TResponse> {
  constructor(readonly endpoint: string) {}

  getAll = async (): Promise<AxiosResponse<TResponse[]>> => {
    return axiosInstance.get<TResponse[]>(this.endpoint);
  };

  get = async (id: number): Promise<AxiosResponse<TResponse>> => {
    return axiosInstance.get<TResponse>(`${this.endpoint}${id}/`);
  };

  create = async (data: TData): Promise<AxiosResponse<TResponse>> => {
    return axiosInstance.post<TData, AxiosResponse<TResponse>>(
      this.endpoint,
      data
    );
  };

  update = async (
    data: TData,
    id: number
  ): Promise<AxiosResponse<TResponse>> => {
    return axiosInstance.put<TData, AxiosResponse<TResponse>>(
      `${this.endpoint}${id}/`,
      data
    );
  };

  patch = async (
    data: TData,
    config?: AxiosRequestConfig,
    id?: number
  ): Promise<AxiosResponse<TResponse>> => {
    return axiosInstance.patch<TData, AxiosResponse<TResponse>>(
      `${this.endpoint}${id ?? ""}/`,
      data,
      config
    );
  };

  delete = async (id: number): Promise<AxiosResponse<void>> => {
    return axiosInstance.delete<void>(`${this.endpoint}${id}/`);
  };
}

export default APIClient;
