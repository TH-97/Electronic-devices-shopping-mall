import { Order } from "../model/type";
import styles from "./OrderCard.module.css";
import { OrderInfo } from "./OrderInfo/OrderInfo";

type Props = {
  orderItem: Order;
};

export function OrderCard(props: Props) {
  const { orderItem } = props;
  // 총 결제금액 계산
  // 총 결제금액 계산
  const totalPrice = orderItem.OrderDetails.reduce(
    (total, orderItemDetail) =>
      total +
      orderItemDetail.order_quantity * orderItemDetail.order_product_price,
    0
  );
  return (
    <div className={styles["orderCard-wrapper"]}>
      <div className={styles[`order-info`]}>
        <p className={styles[`order-date`]}>{orderItem.order_date}</p>
        {orderItem.OrderDetails.map((orderItemDetail, index) => (
          <OrderInfo
            key={index}
            order_product_img_url={orderItemDetail.order_product_img_url}
            order_product_name={orderItemDetail.order_product_name}
            order_quantity={orderItemDetail.order_quantity}
            order_product_price={orderItemDetail.order_product_price}
          />
        ))}
      </div>
      <div className={styles[`order-total-price`]}>
        <p>총 결제금액: {totalPrice}원</p>
      </div>
    </div>
  );
}
