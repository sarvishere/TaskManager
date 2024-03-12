import useAuthStore from "../stores/useAuthStore";
import APIClient from "./api-client";

interface TokenData {
  refresh: string;
}

interface TokenResponse {
  access: string;
}

class TokenManager {
  static getAccessToken = () => useAuthStore.getState().accessToken;

  static setAccessToken = (token: string) => {
    useAuthStore.setState({ accessToken: token });
  };

  static getRefreshToken = () => useAuthStore.getState().refreshToken;

  static setRefreshToken = (token: string) =>
    useAuthStore.setState({ refreshToken: token });

  static refreshToken = () =>
    new APIClient<TokenData, TokenResponse>("/accounts/refresh/")
      .create({ refresh: TokenManager.getRefreshToken() })
      .then(({ data: { access } }) => {
        TokenManager.setAccessToken(access);
        return access;
      })
      .catch((err) => {
        throw new Error("Failed to get a new access token! " + err.message);
      });
}

export default TokenManager;
