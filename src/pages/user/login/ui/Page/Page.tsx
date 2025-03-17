import { Link } from "react-router-dom";
import styles from "./Page.module.css";
import { LoginForm } from "../../../../../features/session/login";
export function LoginPage() {
  return (
    <div className={styles.body}>
      <div className={styles.wrapper}>
        <h1 className={styles.loginTitle}>로그인</h1>
        <LoginForm />
        <span className={styles.switcher}>
          혹시 아이디가 없으신가요?
          <Link to="/create-account"> 만들기 &rarr;</Link>
        </span>
      </div>
    </div>
  );
}
