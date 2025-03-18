import styles from "./BaseProductList.module.css";
import { ProductCard, useProductStore } from "../../../entities";
import { useEffect } from "react";
export function BaseProductList() {
  const { products, loadProducts, resetProducts } = useProductStore();

  useEffect(() => {
    loadProducts();
    return () => {
      resetProducts(); // 다른 페이지 갔다가 다시 올 때 초기화
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}
