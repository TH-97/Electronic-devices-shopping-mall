import { OrderCard } from "../../../entities/order";
import { Order } from "../../../entities/order/model/type";

const mockOrders: Order[] = [
  {
    order_date: "2025-03-31",
    OrderDetails: [
      {
        order_product_img_url: [
          "https://via.placeholder.com/100",
          "https://via.placeholder.com/100",
        ],
        order_product_name: ["상품 A", "상품 B"],
        order_quantity: [2, 1],
        order_product_price: [5000, 12000],
      },
    ],
  },
  {
    order_date: "2025-04-01",
    OrderDetails: [
      {
        order_product_img_url: [
          "https://via.placeholder.com/100",
          "https://via.placeholder.com/100",
          "https://via.placeholder.com/100",
        ],
        order_product_name: ["상품 C", "상품 D", "상품 E"],
        order_quantity: [1, 2, 1],
        order_product_price: [7000, 3500, 15000],
      },
    ],
  },
];
type Props = {
  order: Order[];
};
export function BaseOrderList(props: Props) {
  const { order = [] } = props;
  return (
    <>
      {order.map((orderItem, index) => (
        <OrderCard key={index} orderItem={orderItem} />
      ))}
    </>
  );
}
