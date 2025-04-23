import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../../../shared";
import styles from "./LogoutButton.module.css";

export function LogoutButton() {
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/");
    window.location.reload();
  };
  return (
    <div className={styles.logout} onClick={handleLogout}>
      로그아웃
    </div>
  );
}
