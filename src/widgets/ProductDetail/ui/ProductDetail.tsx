import styles from "./ProductDetail.module.css";
import gray_img from "../../../assets/gray_image.png";

export function ProductDetail() {
  return (
    <div className={styles["product-detail-wrapper"]}>
      <div className={styles[`product-detail-img`]}>
        <img src={gray_img} alt="" />
      </div>
      <div className={styles[`product-detail-info`]}>
        <span className={styles[`product-detail-category`]}>카테고리</span>
        <h1>상품명</h1>
        <div className={styles[`product-detail-review`]}>
          <span>별</span>
          <p>별점</p>
          <span>리뷰 개수</span>
          <span>재고 개수</span>
        </div>
        <h2>가격</h2>
        <p>구매 수량</p>
        <div className={styles[`product-detail-button-area`]}>
          <p>장바구니 담기</p>
          <p>바로 구매하기</p>
        </div>
      </div>
    </div>
  );
}
