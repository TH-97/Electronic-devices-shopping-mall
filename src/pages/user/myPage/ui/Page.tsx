import { Link } from "react-router-dom";
import { UserSummary } from "../../../../widgets/UserSummary";
import styles from "./Page.module.css";
import { MyPageSideNavigation } from "../../../../widgets/MyPageSideNavigation";
import { BaseOrderList } from "../../../../widgets/BaseOrderList";
import { Order } from "../../../../entities/order/model/type";
import gray_img from "../../../../assets/gray_image.png";

const mockOrders: Order[] = [
  {
    order_date: "2025-03-31",
    OrderDetails: [
      {
        order_product_img_url: gray_img,
        order_product_name: "상품 A",
        order_quantity: 2,
        order_product_price: 5000,
      },
      {
        order_product_img_url: gray_img,
        order_product_name: "상품 B",
        order_quantity: 3,
        order_product_price: 12000,
      },
    ],
  },
  {
    order_date: "2025-04-01",
    OrderDetails: [
      {
        order_product_img_url: gray_img,
        order_product_name: "상품 C",
        order_quantity: 3,
        order_product_price: 11000,
      },
      {
        order_product_img_url: gray_img,
        order_product_name: "상품 D",
        order_quantity: 1,
        order_product_price: 3000,
      },
      {
        order_product_img_url: gray_img,
        order_product_name: "상품 E",
        order_quantity: 2,
        order_product_price: 1000,
      },
    ],
  },
];

export function MyPage() {
  return (
    <div className={styles[`my-page-wrapper`]}>
      <h1 className={styles[`my-page-title`]}>마이페이지</h1>
      <p className={styles[`my-page-sub-title`]}>
        계정 정보와 주문 내역을 관리하세요
      </p>
      <div className={styles[`my-page-info-wrapper`]}>
        <div>
          <UserSummary />
          <MyPageSideNavigation />
        </div>
        <div className={styles[`my-page-latest-order-wrapper`]}>
          <div className={styles[`my-page-latest-order-history`]}>
            <p>최근 주문</p>
            <Link to="/">전체보기</Link>
          </div>
          <BaseOrderList order={mockOrders} />
        </div>
      </div>
    </div>
  );
}
