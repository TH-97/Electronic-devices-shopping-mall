import { Link } from "react-router-dom";
import styles from "./LoggedOutMenu.module.css";

export function LoggedOutMenu() {
  return (
    <div className={styles.wrapper}>
      <Link to="/login">로그인</Link>
      <Link to="">회원가입</Link>
    </div>
  );
}
