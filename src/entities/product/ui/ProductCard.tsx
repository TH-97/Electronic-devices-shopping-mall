import { Product } from "../model/type";
import styles from "./ProductCard.module.css";
import truckIcon from "../../../assets/truck_transport_icon.svg";
import clockIcon from "../../../assets/clock_watch_icon.svg";

type Props = {
  product: Product;
};

export function ProductCard(props: Props) {
  const { product } = props;
  return (
    <div className={styles.wrapper}>
      <div className={styles["product-img-area"]}>
        <img
          className={styles["product-img"]}
          src={`${product.imgUrl}`}
          alt=""
        />
      </div>
      <div className={styles["product-info-area"]}>
        <div>review</div>
        <label className={styles["product-category"]}>{product.catagory}</label>
        <div className={styles["product-name-area"]}>
          <div className={styles["product-name"]}>{product.name}</div>
        </div>
        <div className={styles["product-price"]}>{product.price}원</div>
        <div className={styles["icon-area"]}>
          <div className={styles["benefits"]}>
            <img src={truckIcon} alt="" />
            <span>무료 배송</span>
          </div>
          <div className={styles["benefits"]}>
            <img src={clockIcon} alt="" />
            <span>당일 출고</span>
          </div>
        </div>
      </div>
    </div>
  );
}
