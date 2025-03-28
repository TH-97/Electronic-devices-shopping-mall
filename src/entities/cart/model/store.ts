import { create } from "zustand";
import { Product } from "./type";
import { fetchCart } from "../api/cartApi";

interface CartState {
  products: Product[];
  loadCart: () => Promise<void>; // 장바구니 데이터를 불러오는 액션
}

export const useCartStore = create<CartState>((set) => ({
  products: [],

  loadCart: async () => {
    try {
      const cartData = await fetchCart(); // API 호출
      set({ products: cartData }); // 상태 업데이트
    } catch (error) {
      console.error("Failed to load cart:", error);
    }
  },
}));
