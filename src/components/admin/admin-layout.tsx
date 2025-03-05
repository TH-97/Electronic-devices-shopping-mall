import { Outlet } from "react-router-dom";
import styles from "../../styles/admin-layout.module.css";

export default function AdminLayout() {
  return (
    <div className={styles.wrapper}>
      <aside className={styles.adminSidebar}>
        <h1>logo</h1>
        <nav>
          <ul>
            <li>대시보드</li>
            <li>사용자 관리</li>
            <li>상품 관리</li>
            <li>주문 내역</li>
          </ul>
        </nav>
      </aside>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
}
