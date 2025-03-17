import "../../../../app/global.css";
import { Outlet } from "react-router-dom";
import Magnifier from "../../../../assets/magnifier.svg";
import styles from "./LayoutHeader.module.css";
import { NavigationBar } from "../NavigtionBar/NavigationBar";
import { LoggedInMenu } from "../LoggedInMenu/LoggedInMenu";
import { LoggedOutMenu } from "../LoggedOutMenu/LoggedOutMenu";
import { Logo } from "../Logo/Logo";

export function LayoutHeader() {
  const isLoggedIn = document.cookie.includes("jwt=");
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles["search-area"]}>
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
        </div>
        <div className={styles.isLoggedIn}>
          {isLoggedIn ? <LoggedInMenu /> : <LoggedOutMenu />}
        </div>
      </div>
      <NavigationBar />
      <Outlet />
    </div>
  );
}
