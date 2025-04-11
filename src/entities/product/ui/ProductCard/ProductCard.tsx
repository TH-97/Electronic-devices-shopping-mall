import { Product } from "../../model/type";
import styles from "./ProductCard.module.css";
import truckIcon from "../../../../assets/truck_transport_icon.svg";
import clockIcon from "../../../../assets/clock_watch_icon.svg";

type Props = {
  product: Product;
  size: "base" | "cart";
};

export function ProductCard(props: Props) {
  const { product, size } = props;
  const isBase = size === "base";
  return (
    <div className={styles[`${size}-wrapper`]}>
      <div className={styles[`${size}-product-img-area`]}>
        <img
          className={styles[`${size}-product-img`]}
          src={`${product.imgUrl}`}
          alt=""
        />
      </div>
      <div className={styles[`${size}-product-info-area`]}>
        {isBase && <div>review</div>}
        <label className={styles[`${size}-product-category`]}>
          {product.catagory}
        </label>
        <div className={styles[`${size}-product-name-area`]}>
          <div className={styles[`${size}-product-name`]}>{product.name}</div>
        </div>
        <div className={styles[`${size}-product-price`]}>{product.price}원</div>
        {isBase && (
          <div className={styles[`${size}-icon-area`]}>
            <div className={styles[`${size}-benefits`]}>
              <img src={truckIcon} alt="" />
              <span>무료 배송</span>
            </div>
            <div className={styles[`${size}-benefits`]}>
              <img src={clockIcon} alt="" />
              <span>당일 출고</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
