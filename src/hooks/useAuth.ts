import APIClient from "../services/api-client";
import TokenManager from "../services/token-service";
import useAuthStore from "../stores/useAuthStore";

interface LoginData {
  username: string;
  password: string;
}

interface RegisterData {
  username: string;
  email: string;
  password: string;
}

interface RegisterResponse {
  id: number;
  username: string;
  email: string;
}

export interface LoginResponse {
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
export interface User extends Omit<LoginResponse, "access" | "refresh"> {}

const useAuth = () => {
  const login = async (data: LoginData) => {
    try {
      const {
        data: { access, refresh, ...userData },
      } = await new APIClient<LoginData, LoginResponse>(
        "/accounts/login/"
      ).create(data);

      TokenManager.setAccessToken(access);
      TokenManager.setRefreshToken(refresh);
      useAuthStore.setState({ user: userData });
    } catch (error) {
      throw new Error("Failed to login");
    }
  };

  const register = async (data: RegisterData) => {
    try {
      const res = await new APIClient<RegisterData, RegisterResponse>(
        "/accounts/"
      ).create(data);
      if (res.status === 201) {
        return res.data;
      } else {
        throw new Error("Registration failed");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      throw error;
    }
  };

  const logout = () => {
    useAuthStore.setState({}, true);
  };

  const user = useAuthStore((s) => s.user);

  return { login, register, logout, user };
};

export default useAuth;
