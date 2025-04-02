import { OrderCard } from "../../../entities/order";
import { Order } from "../../../entities/order/model/type";


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
