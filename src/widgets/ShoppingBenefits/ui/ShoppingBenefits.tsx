import styles from "./ShoppingBenefits.module.css";
import truckIcon from "../../../assets/truck_transport_icon.svg";
import checkIcon from "../../../assets/check_circle_icon.svg";
import reFreshIcon from "../../../assets/refresh_cw_icon.svg";
import clockIcon from "../../../assets/clock_watch_icon.svg";

export function ShoppingBenefits() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.item}>
        <img className={styles.icon} src={truckIcon} alt="" />
        <p className={styles.title}>무료 배송</p>
        <p className={styles.text}>5만원 이상 구매 시 전국 무료배송</p>
      </div>
      <div className={styles.item}>
        <img className={styles.icon} src={checkIcon} alt="" />
        <p className={styles.title}>정품 보증</p>
        <p className={styles.text}>100% 정품 보증 및 A/S 지원</p>
      </div>
      <div className={styles.item}>
        <img className={styles.icon} src={reFreshIcon} alt="" />
        <p className={styles.title}>14일 교환/환불</p>
        <p className={styles.text}>구매 후 14일 이내 교환 및 환불</p>
      </div>
      <div className={styles.item}>
        <img className={styles.icon} src={clockIcon} alt="" />
        <p className={styles.title}>당일 출고</p>
        <p className={styles.text}>오후 3시 이전 주문 시 당일 출고</p>
      </div>
    </div>
  );
}
