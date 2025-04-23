import { Logo } from "../Logo/Logo";
import { NavigationBar } from "../NavigtionBar/NavigationBar";
import { SearchBox } from "../SearchBox/SearchBox";
import { UserActions } from "../UserActions/UserActions";
import styles from "./MidHeader.module.css";

export function MidHeader() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftGroup}>
        <Logo />
        <NavigationBar />
        <SearchBox />
      </div>
      <div className={styles.rightGroup}>
        <UserActions />
      </div>
    </div>
  );
}
