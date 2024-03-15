import useAuthStore from "../stores/useAuthStore";

class TokenManager {
  static getAccessToken = () => useAuthStore.getState().accessToken;

  static setAccessToken = (token: string) => {
    useAuthStore.setState({ accessToken: token });
  };

  static getRefreshToken = () => useAuthStore.getState().refreshToken;

  static setRefreshToken = (token: string) =>
    useAuthStore.setState({ refreshToken: token });
}

export default TokenManager;
