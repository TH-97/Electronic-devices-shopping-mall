import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/loggedIn.module.css";

export default function LoggedIn() {
  const navigate = useNavigate();

  const logOut = (e: React.MouseEvent<HTMLButtonElement>) => {
    //임의 토큰 삭제
    document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
    navigate("/");
    window.location.reload();
  };

  return (
    <div className={styles.wrapper}>
      <label className={styles.logOut} htmlFor="logout">
        로그아웃
      </label>
      <button className={styles.logOutBtn} onClick={logOut} id="logout" />
      <Link to="">마이페이지</Link>
      <Link to="">장바구니</Link>
    </div>
  );
}
