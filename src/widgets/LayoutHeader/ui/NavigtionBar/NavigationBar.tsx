import styles from "./NavigationBar.module.css";
import { Link } from "react-router-dom";

export function NavigationBar() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>카테고리</li>
        <li>
          <Link to="/parcel-tracking">택배 조회 서비스</Link>
        </li>
      </ul>
    </nav>
  );
}
