import cn from "classnames";
import styles from "./Button.module.css";
import { ReactNode } from "react";

type Props = {
  size?: "s" | "m" | "max";
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  theme?: "black" | "white";
  children: ReactNode;
};

export function Button(props: Props) {
  const { size, onClick, theme, children } = props;
  return (
    <>
      <label
        htmlFor={styles.button}
        className={cn(
          styles.button,
          styles[`button_size_${size}`],
          styles[`button_theme_${theme}`]
        )}
      >
        {children}
      </label>
      <button type="button" id={styles.button} onClick={onClick}></button>
    </>
  );
}
