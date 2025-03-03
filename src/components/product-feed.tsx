import { useEffect, useState } from "react";
import styles from "../styles/product-feed.module.css";
import { Product } from "../model/product";

export default function ProductFeed() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/product");
      const data: Product[] = await response.json();
      setProducts(data); // 상태 업데이트
    };

    fetchData();
  }, []);

  return (
    <div className={styles.wrapper} id="product-card">
      {products.map((product, index) => (
        <div key={`product" + ${index}`} className={styles.productItem}>
          <div className={styles.imgArea}>
            <img
              className={styles.img}
              src={product.imgUrl}
              alt={product.name}
            />
          </div>
          <div>{product.name}</div>
          <div>{product.price}</div>
        </div>
      ))}
    </div>
  );
}
