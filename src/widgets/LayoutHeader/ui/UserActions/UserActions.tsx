import styles from "./UserActions.module.css";
import userIcon from "../../../../assets/user_icon.svg";
import soppingCartIcon from "../../../../assets/shopping_cart_icon.svg";
import fileTextIcon from "../../../../assets/file_text_icon.svg";
export function UserActions() {
  return (
    <div className={styles.wrapper}>
      <img className={styles.img} src={userIcon} alt="" />
      <img className={styles.img} src={fileTextIcon} alt="" />
      <img className={styles.img} src={soppingCartIcon} alt="" />
    </div>
  );
}
