import { Logo } from "../Logo/Logo";
import { NavigationBar } from "../NavigtionBar/NavigationBar";
import { SearhBox } from "../SearchBox/SearchBox";
import { UserActions } from "../UserActions/UserActions";
import styles from "./MidHeader.module.css";

export function MidHeader() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper2}>
        <Logo />
        <NavigationBar />
        <SearhBox />
      </div>
      <div>
        <UserActions />
      </div>
    </div>
  );
}
