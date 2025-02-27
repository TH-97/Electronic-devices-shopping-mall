import "../styles/global.css";
import { Link, Outlet } from "react-router-dom";
import Magnifier from "../assets/magnifier.svg";
import styles from "../styles/layout.module.css";
import NavigationBar from "./navigationbar";

export default function Layout() {
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
        <Link to="/">로그인</Link>
      </div>
      <NavigationBar />
      <Outlet />
    </div>
  );
}
