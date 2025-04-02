import { Product } from "../model/type";

export const fetchCart = async (): Promise<Product[]> => {
  const response = await fetch("http://localhost:3000/product");
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return response.json();
};
