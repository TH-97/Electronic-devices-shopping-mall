import { Product } from "../model/type";
import styles from "./ProductCard.module.css";

type Props = {
  product: Product;
};

export function ProductCard(props: Props) {
  const { product } = props;
  return (
    <div className={styles.wrapper}>
      <img className={styles["product-img"]} src={`${product.imgUrl}`} alt="" />
      <label className={styles["product-category"]}>{product.catagory}</label>
      <div className={styles["product-name"]}>{product.name}</div>
      <div className={styles["product-price"]}>{product.price}</div>
    </div>
  );
}
