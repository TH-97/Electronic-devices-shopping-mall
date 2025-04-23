import styles from "./ProductDetail.module.css";
import gray_img from "../../../assets/gray_image.png";
import { AddToCartButton } from "../../../features/cart";
import { ProductBuyNow } from "../../../features/product/productBuyNow";
import { PlusMinusButton } from "../../../shared";

export function ProductDetail() {
  return (
    <div className={styles["product-detail-wrapper"]}>
      <div className={styles[`product-detail-img`]}>
        <img src={gray_img} alt="" />
      </div>
      <div className={styles[`product-detail-info`]}>
        <div className={styles["product-detail-overview"]}>
          <span className={styles[`product-detail-category`]}>카테고리</span>
          <h1>상품명</h1>
          <div className={styles[`product-detail-review`]}>
            <span>별</span>
            <p>별점</p>
            <span>리뷰 개수</span>
            <span>재고 개수</span>
          </div>
          <h2>가격</h2>
        </div>
        <div className={styles["product-detail-option"]}>
          <div>
            <p>구매 수량</p>
            <PlusMinusButton />
          </div>
        </div>
        <div className={styles[`product-detail-button-area`]}>
          <AddToCartButton size="m" />
          <ProductBuyNow size="m" />
        </div>
      </div>
    </div>
  );
}
