import styles from "../styles/category-screen.module.css";

export default function CategoryScreen() {
  return (
    <nav className={styles.dropdown}>
      <ul>
        <li>노트북</li>
        <li>휴대폰</li>
        <li>테블릿</li>
      </ul>
    </nav>
  );
}
