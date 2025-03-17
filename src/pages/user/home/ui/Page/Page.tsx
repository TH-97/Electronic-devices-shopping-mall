import { BaseProductList } from "../../../../../widgets/BaseProductList";
import styles from "./Page.module.css";

export function Home() {
  return (
    <div className={styles.wrapper}>
      <h1>home</h1>
      <BaseProductList />
    </div>
  );
}
