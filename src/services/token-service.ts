import APIClient from "./api-client";

interface TokenData {
  refresh: string;
}

interface TokenResponse {
  access: string;
}

class TokenManager {
  static getAccessToken = () => localStorage.getItem("accessToken");

  static setAccessToken = (token: string) =>
    localStorage.setItem("accessToken", token);

  static getRefreshToken = () => localStorage.getItem("RefreshToken");

  static setRefreshToken = (token: string) =>
    localStorage.setItem("RefreshToken", token);

  static refreshToken = (): Promise<string> =>
    new APIClient<TokenData, TokenResponse>("/accounts/refresh/")
      .create({ refresh: TokenManager.getRefreshToken() ?? "" })
      .then((res) => res.data.access)
      .catch((err) => {
        throw new Error("Failed to get a new access token! " + err.message);
      });
}

export default TokenManager;
