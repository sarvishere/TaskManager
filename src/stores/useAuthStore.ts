import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { User } from "../hooks/useAuth";

interface AuthStore {
  user: User | null;
  refreshToken: string;
  accessToken: string;
}

const useAuthStore = create(
  persist<AuthStore>(
    () => ({
      user: null,
      accessToken: "",
      refreshToken: "",
    }),
    {
      name: "authStore",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useAuthStore;
