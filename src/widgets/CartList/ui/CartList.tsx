import { useEffect } from "react";
import { useCartStore } from "../../../entities/cart";
import { BaseProductList } from "../../BaseProductList";
import styles from "./CartList.module.css";

export function CartList() {
  const { products, loadCart } = useCartStore();

  useEffect(() => {
    loadCart();
  }, [loadCart]);
  return (
    <>
      <div className={styles["wrapper"]}>
        <BaseProductList size={"cart"} products={products} />
      </div>
    </>
  );
}
