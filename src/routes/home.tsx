import ProductFeed from "../components/product-feed";
import styles from "../styles/home.module.css";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <ProductFeed />
    </div>
  );
}
