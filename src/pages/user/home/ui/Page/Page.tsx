import { BaseProductList } from "../../../../../widgets/BaseProductList";
import { ImgSlider } from "../../../../../widgets/ImgSlider";
import { ShoppingBenefits } from "../../../../../widgets/ShoppingBenefits";
import styles from "./Page.module.css";

export function Home() {
  return (
    <div className={styles.wrapper}>
      <ImgSlider />
      <ShoppingBenefits />
      <BaseProductList />
    </div>
  );
}
