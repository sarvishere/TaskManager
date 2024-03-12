import { useState } from "react";
import APIClient from "../services/api-client";
import TokenManager from "../services/token-service";
import useAuthStore from "../stores/useAuthStore";
import { AxiosError } from "axios";

interface LoginData {
  username: string;
  password: string;
}

interface RegisterData extends LoginData {
  email: string;
}

interface SendResetLinkData {
  email: string;
}

interface ResetLinkResponse {
  url: string;
}

interface ResetPasswordData {
  password: string;
  password1: string;
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

interface RegisterErrorResponse {
  email?: string[];
  username?: string[];
}
export interface User extends Omit<LoginResponse, "access" | "refresh"> {}

const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);

  const login = async (data: LoginData) => {
    try {
      setIsLoading(true);
      const {
        status,
        data: { access, refresh, ...userData },
      } = await new APIClient<LoginData, LoginResponse>(
        "/accounts/login/"
      ).create(data);

      TokenManager.setAccessToken(access);
      TokenManager.setRefreshToken(refresh);
      useAuthStore.setState({ user: userData });

      return status;
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const signUp = async (data: RegisterData) => {
    try {
      setIsLoading(true);
      const res = await new APIClient<RegisterData, RegisterResponse>(
        "/accounts/"
      ).create(data);
      if (res.status === 201) {
        return res.data;
      }
    } catch (error) {
      const errorMessages = (error as AxiosError).response
        ?.data as RegisterErrorResponse;

      throw {
        emailError: errorMessages?.email?.[0] ?? "",
        usernameError: errorMessages?.username?.[0] ?? "",
      };
    } finally {
      setIsLoading(false);
    }
  };

  const sendResetLink = async (data: SendResetLinkData) => {
    try {
      setIsLoading(true);

      const response = await new APIClient<
        SendResetLinkData,
        ResetLinkResponse
      >("/accounts/reset-password/").create(data);
      return response;
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const resetPassword = async (data: ResetPasswordData, token: string) => {
    try {
      setIsLoading(true);

      const response = await new APIClient<ResetPasswordData, any>(
        "/accounts/reset-password/set-password/"
      ).patch(data, { params: { token } });
      return response;
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    useAuthStore.setState({}, true);
  };

  const user = useAuthStore((s) => s.user);

  return {
    login,
    isLoading,
    sendResetLink,
    resetPassword,
    signUp,
    logout,
    user,
  };
};

export default useAuth;
