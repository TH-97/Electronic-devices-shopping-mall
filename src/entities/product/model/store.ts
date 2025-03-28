import { create } from "zustand";
import { Product } from "./type";
import { fetchProducts } from "../api/productApi";

interface ProductState {
  products: Product[];
  loadProducts: () => Promise<void>; // 장바구니 데이터를 불러오는 액션
}

export const useProductStore = create<ProductState>((set) => ({
  products: [],
  loadProducts: async () => {
    try {
      const productData = await fetchProducts(); // API 호출
      set({ products: productData }); // 상태 업데이트
    } catch (error) {
      console.error("Failed to load cart:", error);
    }
  },
}));
