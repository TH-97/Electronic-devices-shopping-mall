import { BaseProductList } from "../../../../../widgets/BaseProductList";
import { ImgSlider } from "../../../../../widgets/ImgSlider/ImgSlider";
import styles from "./Page.module.css";

export function Home() {
  return (
    <div className={styles.wrapper}>
      <ImgSlider />
      <BaseProductList />
    </div>
  );
}
