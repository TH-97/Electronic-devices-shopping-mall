import React, { useState } from "react";
import styles from "../styles/navigationvar.module.css";
import CategoryScreen from "./category-screen";
import { Link } from "react-router-dom";

export default function NavigationBar() {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const handleCategoryClick = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target instanceof HTMLLIElement) {
      setIsCategoryOpen((prev) => !prev);
      setIsActive((prevState) => !prevState);
    }
  };
  return (
    <nav className={styles.nav}>
      <ul>
        <li
          className={isActive ? styles.itemActive : styles.item}
          onClick={handleCategoryClick}
        >
          카테고리
        </li>
        <li>
          <Link to="/parcel-tracking">택배 조회 서비스</Link>
        </li>
        {isCategoryOpen && <CategoryScreen />}
      </ul>
    </nav>
  );
}
