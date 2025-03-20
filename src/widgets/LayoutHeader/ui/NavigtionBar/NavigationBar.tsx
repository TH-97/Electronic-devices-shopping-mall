import styles from "./NavigationBar.module.css";
import { Link } from "react-router-dom";

export function NavigationBar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link to="/">전체</Link>
        </li>
        <li className={styles.li}>
          <Link to="/">스마트폰</Link>
        </li>
        <li className={styles.li}>
          <Link to="/">노트북</Link>
        </li>
        <li className={styles.li}>
          <Link to="/">태블릿</Link>
        </li>
        <li className={styles.li}>
          <Link to="/">악세서리</Link>
        </li>
        <li className={styles.li}>
          <Link to="/parcel-tracking">택배 조회 서비스</Link>
        </li>
      </ul>
    </nav>
  );
}
