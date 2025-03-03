import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/login.module.css";
import { User } from "../model/user";

export default function Login() {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

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

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:3000/users");
      const data: User[] = await response.json();
      const checkUser = data.find(
        (user) => user.id === id && user.password === password
      );
      if (!checkUser) {
        throw "아이디 또는 비밀번호를 확인하세요";
      }
      setLoading(false);

      //모의 토큰 생성
      document.cookie = `jwt=${id}; path=/; max-age=${60 * 60 * 24}`;

      navigate("/");
      window.location.reload();
    } catch (e) {
      setError(e as string);
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLoading || id === "" || password === "") return;
    setLoading(true);
    await fetchUsers();
  };
  return (
    <div className={styles.body}>
      <div className={styles.wrapper}>
        <h1 className={styles.loginTitle}>로그인</h1>
        <form className={styles.loginForm} onSubmit={onSubmit}>
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
