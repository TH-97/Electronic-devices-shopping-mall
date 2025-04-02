import "../../../../app/global.css";
import { Outlet } from "react-router-dom";
import styles from "./LayoutHeader.module.css";
import { TopHeader } from "../TopHeader/TopHeader";
import { MidHeader } from "../MidHeader/MidHeader";

export function LayoutHeader() {
  return (
    <div>
      <div className={styles["top-header"]}>
        <TopHeader />
      </div>
      <div className={styles["mid-header"]}>
        <MidHeader />
      </div>
      <Outlet />
    </div>
  );
}
