import axios, { AxiosResponse } from "axios";
import TokenManager from "./token-service";

const axiosInstance = axios.create({
  baseURL: "http://185.8.174.74:8000",
});

axiosInstance.interceptors.request.use((config) => {
  const accessToken = TokenManager.getAccessToken();
  if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
});

axiosInstance.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config;

    try {
      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        const newAccessToken = await TokenManager.refreshToken();

        TokenManager.setAccessToken(newAccessToken);

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return axios(originalRequest);
      }
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

class APIClient<TData, TResponse> {
  constructor(readonly endpoint: string) {}

  getAll = async (): Promise<AxiosResponse<TResponse[]>> => {
    return axiosInstance.get<TResponse[]>(this.endpoint);
  };

  get = async (id: number): Promise<AxiosResponse<TResponse>> => {
    return axiosInstance.get<TResponse>(this.endpoint + "/" + id);
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
      this.endpoint + "/" + id,
      data
    );
  };

  patch = async (
    data: TData,
    id: number
  ): Promise<AxiosResponse<TResponse>> => {
    return axiosInstance.patch<TData, AxiosResponse<TResponse>>(
      this.endpoint + "/" + id,
      data
    );
  };

  delete = async (id: number): Promise<AxiosResponse<void>> => {
    return axiosInstance.delete<void>(this.endpoint + "/" + id);
  };
}

export default APIClient;
