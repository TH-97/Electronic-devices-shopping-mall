import { AllProductList } from "../../../../../widgets/AllProductList";
import { ImgSlider } from "../../../../../widgets/ImgSlider";
import { ShoppingBenefits } from "../../../../../widgets/ShoppingBenefits";
import styles from "./Page.module.css";

export function Home() {
  return (
    <div className={styles.wrapper}>
      <ImgSlider />
      <ShoppingBenefits />
      <AllProductList />
    </div>
  );
}
