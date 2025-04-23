import { useNavigate } from "react-router-dom";
import { Button } from "../../../../../shared";
import { useAuthStore } from "../../../../../shared";
import { useState } from "react";

type Props = {
  size?: "m" | "s" | "max";
  userId: string;
  userPw: string;
};
export function LoginButton(props: Props) {
  const { size, userId, userPw } = props;
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const handleLogin = async () => {
    try {
      await login(userId, userPw);
      navigate("/");
    } catch {
      setError("아이디 또는 비밀번호를 확인해주십시오");
    }
  };
  return (
    <>
      <Button size={size} theme="black" onClick={handleLogin}>
        로그인
      </Button>
      {error !== "" ? <span style={{ color: "red" }}>{error}</span> : null}
    </>
  );
}
