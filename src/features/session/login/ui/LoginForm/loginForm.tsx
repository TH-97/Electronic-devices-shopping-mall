import { useState } from "react";
import styles from "./loginForm.module.css";
import { LoginButton } from "../LoginButton/LoginButton";

export function LoginForm() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    if (name === "id") {
      setId(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <>
      <form className={styles.loginForm}>
        <input
          className={styles.loginInput}
          onChange={onChange}
          name="id"
          value={id}
          placeholder="id"
          type="id"
          required
        />
        <input
          className={styles.loginInput}
          onChange={onChange}
          name="password"
          value={password}
          placeholder="password"
          type="password"
          required
        />
        <LoginButton size="max" userId={id} userPw={password} />
      </form>
    </>
  );
}
