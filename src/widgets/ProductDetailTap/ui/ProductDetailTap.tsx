import { useState } from "react";
import styles from "./ProductDetailTap.module.css";
import {
  ProductDescription,
  ProductReviews,
  ProductSpecs,
} from "../../../entities/product";

const TABS = ["상품설명", "상품스펙", "리뷰"] as const;

export function ProductDetailTap() {
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]>("상품설명");

  return (
    <div className={styles["tabList-wrapper"]}>
      <div className={styles.tabList}>
        {TABS.map((tab) => (
          <button
            key={tab}
            className={`${styles.tabButton} ${
              activeTab === tab ? styles.active : ""
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className={styles.tabPanel}>
        {activeTab === "상품설명" && <ProductDescription />}
        {activeTab === "상품스펙" && <ProductSpecs />}
        {activeTab === "리뷰" && <ProductReviews />}
      </div>
    </div>
  );
}
