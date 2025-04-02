import styles from "./UserActions.module.css";
import userIcon from "../../../../assets/user_icon.svg";
import soppingCartIcon from "../../../../assets/shopping_cart_icon.svg";
import fileTextIcon from "../../../../assets/file_text_icon.svg";
import { Link } from "react-router-dom";
export function UserActions() {
  return (
    <div className={styles.wrapper}>
      <img className={styles.img} src={userIcon} alt="" />
      <img className={styles.img} src={fileTextIcon} alt="" />
      <Link to="/cart">
        <img className={styles.img} src={soppingCartIcon} alt="" />
      </Link>
    </div>
  );
}
