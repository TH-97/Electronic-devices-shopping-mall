import styles from "./CartSummary.module.css";

export function CartSummary() {
  return (
    <div className={styles.wrapper}>
      <div className={styles["products-price-info"]}>
        <h3>주문 예상 금액</h3>
        <div className={styles["products-price-info-item"]}>
          <p>총 상품 가격</p>
          <span>원</span>
        </div>
        <div className={styles["products-price-info-item"]}>
          <p>총 할인</p>
          <span className={styles["product-span"]}>원</span>
        </div>
        <div className={styles["products-price-info-item"]}>
          <p>총 배송비</p>
          <span className={styles["product-span"]}>원</span>
        </div>
      </div>
      <div className={styles["products-total-sum"]}>
        <span>총금액</span>
      </div>
      <div className={styles["total-products-purchase-button"]}>
        <div>구매하기 버튼</div>
      </div>
    </div>
  );
}
