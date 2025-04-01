import styles from "./MyPageSideNavigation.module.css";
import right_arrow_icon from "../../../assets/chevron_right_arrow_icon.svg";
import user_icon from "../../../assets/user_icon.svg";
import package_delivery_icon from "../../../assets/package_delivery_icon.svg";
import shoppimg_cart_icon from "../../../assets/shopping_cart_icon.svg";
import bell_icon from "../../../assets/bell_icon.svg";

export function MyPageSideNavigation() {
  return (
    <div className={styles["side-navigtion-wrapper"]}>
      <div className={styles[`side-navigtion-item`]}>
        <div className={styles[`side-navigtion-text`]}>
          <img src={user_icon} alt="" />
          <p>계정 정보</p>
        </div>
        <img src={right_arrow_icon} alt="" />
      </div>
      <div className={styles[`side-navigtion-item`]}>
        <div className={styles[`side-navigtion-text`]}>
          <img src={package_delivery_icon} alt="" />
          <p>주문 내역</p>
        </div>
        <img src={right_arrow_icon} alt="" />
      </div>
      <div className={styles[`side-navigtion-item`]}>
        <div className={styles[`side-navigtion-text`]}>
          <img src={shoppimg_cart_icon} alt="" />
          <p>장바구니</p>
        </div>
        <img src={right_arrow_icon} alt="" />
      </div>
      <div className={styles[`side-navigtion-item`]}>
        <div className={styles[`side-navigtion-text`]}>
          <img src={bell_icon} alt="" />
          <p>알림</p>
        </div>
        <img src={right_arrow_icon} alt="" />
      </div>
    </div>
  );
}
