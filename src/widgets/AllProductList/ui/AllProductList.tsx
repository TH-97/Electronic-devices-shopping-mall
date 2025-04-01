import { useEffect } from "react";
import { useProductStore } from "../../../entities/product";
import { BaseProductList } from "../../BaseProductList";
import styles from "./AllProductList.module.css";

export function AllProductList() {
  const { products, loadProducts } = useProductStore();

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);
  return (
    <div>
      <p className={styles.title}>전제 상품</p>
      <div className={styles["wrapper"]}>
        <BaseProductList size={"base"} products={products} />
      </div>
    </div>
  );
}
