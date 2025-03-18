import { create } from "zustand";
import { Product } from "./type";
import { fetchProducts } from "../api/productApi";

interface ProductState {
  products: Product[];
  isLoading: boolean;
  error: string | null;
  loadProducts: () => Promise<void>;
  resetProducts: () => void;
}

export const useProductStore = create<ProductState>((set) => ({
  products: [],
  isLoading: false,
  error: null,
  loadProducts: async () => {
    set({ isLoading: true, error: null });
    try {
      const products = await fetchProducts();
      set({ products, isLoading: false });
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Failed to load products";
      set({ error: errorMessage, isLoading: false });
    }
  },
  resetProducts: () => set({ products: [] }), // 홈에 다시 올 때 초기화
}));
