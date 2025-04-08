import { CreateAccountForm } from "../../../../features/create-account";
import styles from "./Page.module.css";

export function CreateAccount() {
  return (
    <div className={styles["create-account-wrapper"]}>
      <h1>회원가입</h1>
      <CreateAccountForm />
    </div>
  );
}
