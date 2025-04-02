export type Order = {
  order_date: string;
  OrderDetails: OrderDetails[];
};
export type OrderDetails = {
  order_product_img_url: string;
  order_product_name: string;
  order_quantity: number;
  order_product_price: number;
};
