import "../styles/global.css";
import { Outlet } from "react-router-dom";
import Magnifier from "../assets/magnifier.svg";
import styles from "../styles/layout.module.css";
import NavigationBar from "./navigationbar";
import LoggedIn from "./loggedIn";
import LoggedOut from "./loggedOut";

export default function Layout() {
  const isLoggedIn = document.cookie.includes("jwt=");
  return (
    <div>
      <div className={styles.header}>
        <h1>logo</h1>
        <form className={styles.searchBox}>
          <input
            className={styles.searchText}
            type="text"
            placeholder="검색어를 입력하세요"
          />
          <button className={styles.searchBtn} type="submit">
            <img src={Magnifier} alt="검색하기" />
          </button>
        </form>
        {isLoggedIn ? <LoggedIn /> : <LoggedOut />}
      </div>
      <NavigationBar />
      <Outlet />
    </div>
  );
}
