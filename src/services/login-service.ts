import APIClient from "./api-client";
import TokenManager from "./token-service";

interface LoginData {
  username: string;
  password: string;
}

interface LoginResponse {
  access: string;
  email: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  refresh: string;
  thumbnail: string;
  user_id: string;
  username: string;
}

const login = async (data: LoginData) => {
  try {
    const response = await new APIClient<LoginData, LoginResponse>(
      "/accounts/login/"
    ).create(data);

    TokenManager.setAccessToken(response.data.access);
    TokenManager.setRefreshToken(response.data.refresh);

    return response.data;
  } catch (error) {
    throw new Error("Failed to login");
  }
};

export default login;
