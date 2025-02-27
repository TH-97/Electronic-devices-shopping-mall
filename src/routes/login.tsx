import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/login.module.css";

export default function Login() {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLoading || email === "" || password === "") return;
    try {
      setLoading(true);
      /*
      db접근 및 로그인
      */
      navigate("/");
    } catch (e) {
      if (e) {
        setError("error");
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className={styles.body}>
      <div className={styles.wrapper}>
        <h1 className={styles.loginTitle}>로그인</h1>
        <form className={styles.loginForm} onSubmit={onSubmit}>
          <input
            className={styles.loginInput}
            onChange={onChange}
            name="email"
            value={email}
            placeholder="email"
            type="email"
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
          <input
            className={styles.loginInput}
            type="submit"
            value={isLoading ? "Loading" : "Log in"}
          />
        </form>
        {error !== "" ? <span className={styles.error}>{error}</span> : null}
        <span className={styles.switcher}>
          혹시 아이디가 없으신가요?
          <Link to="/create-account"> 만들기 &rarr;</Link>
        </span>
      </div>
    </div>
  );
}
