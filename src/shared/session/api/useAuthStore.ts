import { create } from "zustand";

interface AuthState {
  token: string | null;
  isLoggedIn: boolean;
  login: (id: string, pw: string) => Promise<void>;
  logout: () => void;
  init: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  isLoggedIn: false,
  login: async (id, pw) => {
    try {
      if (id === "test" && pw === "1234") {
        console.log("백도어 로그인 성공");
        const fakeToken = "testToken";
        set({ token: fakeToken, isLoggedIn: true });
        localStorage.setItem("token", fakeToken);
        return;
      }

      const response = await fetch("", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: id, password: pw }),
      });

      if (!response.ok) {
        throw new Error("로그인 실패");
      }

      const authHeader = response.headers.get("Authorization");
      if (!authHeader) {
        throw new Error("토큰 없음");
      }

      set({ token: authHeader, isLoggedIn: true });
      localStorage.setItem("token", authHeader);
    } catch {
      throw new Error();
    }
  },

  logout: () => {
    set({ token: null, isLoggedIn: false });
    localStorage.removeItem("token");
  },

  init: () => {
    const token = localStorage.getItem("token");
    if (token) {
      set({ token, isLoggedIn: true });
    }
  },
}));
