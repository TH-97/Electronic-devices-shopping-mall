import { useState } from "react";
import styles from "./PlusMinusButton.module.css";

export function PlusMinusButton() {
  const [count, setCount] = useState(1);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className={styles.wrapper}>
      <button onClick={decrement} className={styles.button}>
        −
      </button>
      <span className={styles.count}>{count}</span>
      <button onClick={increment} className={styles.button}>
        ＋
      </button>
    </div>
  );
}
