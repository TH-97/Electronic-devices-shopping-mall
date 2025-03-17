import styles from "./BaseProductList.module.css";
import { ProductCard, type Product } from "../../../entities";
import { useEffect, useState } from "react";
import { ProductApi } from "../api/productApi";

export function BaseProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = ProductApi;
      const data: Product[] = await response.json();
      setProducts(data); // 상태 업데이트
    };

    fetchData();
  }, []);
  return (
    <div className={styles.wrapper}>
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
      ;
    </div>
  );
}
