import styles from "./LoggedInMenu.module.css";
import { LogoutButton } from "../../../../features/session/logout";

export function LoggedInMenu() {
  return (
    <div className={styles.wrapper}>
      <LogoutButton />
    </div>
  );
}
