import { useAuthStore } from "../../../../shared";
import { LoggedInMenu } from "../LoggedInMenu/LoggedInMenu";
import { LoggedOutMenu } from "../LoggedOutMenu/LoggedOutMenu";
import styles from "./TopHeader.module.css";

export function TopHeader() {
  //로그인 기능 구현시 변경 예정
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <span>고객센터: 1588-1234</span>
      </div>
      <div className={styles.right}>
        {isLoggedIn ? <LoggedInMenu /> : <LoggedOutMenu />}
      </div>
    </div>
  );
}
