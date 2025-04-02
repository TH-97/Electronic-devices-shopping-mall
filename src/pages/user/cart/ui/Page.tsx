import { CartList } from "../../../../widgets/CartList";
import { CartSummary } from "../../../../widgets/CartSummary";
import styles from "./Page.module.css";

export function Cart() {
  return (
    <div className={styles.wrapper}>
      <h1>장바구니</h1>
      <div className={styles["cart-wrapper"]}>
        <div className={styles["cart-list"]}>
          <CartList />
        </div>
        <div className={styles["cart-summary"]}>
          <CartSummary />
        </div>
      </div>
    </div>
  );
}
