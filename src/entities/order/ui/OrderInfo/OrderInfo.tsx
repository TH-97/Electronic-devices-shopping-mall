import styles from "./OrderInfo.module.css";

type Props = {
  order_product_img_url: string;
  order_product_name: string;
  order_quantity: number;
  order_product_price: number;
};
export function OrderInfo(props: Props) {
  const {
    order_product_img_url,
    order_product_name,
    order_quantity,
    order_product_price,
  } = props;
  return (
    <div className={styles[`order-small-info`]}>
      <div className={styles[`order-info-item`]}>
        <img
          className={styles[`order-info-img`]}
          src={order_product_img_url}
          alt=""
        />
        <div className={styles[`order-product-info`]}>
          <div>
            <p className={styles[`order-product-name`]}>{order_product_name}</p>
          </div>
          <div className={styles[`order-product-quantity-and-price`]}>
            <p className={styles[`order-product-quantity`]}>
              {order_quantity}개
            </p>
            /
            <p className={styles[`order-product-price`]}>
              {order_product_price}원
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
