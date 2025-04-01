import styles from "./UserSummary.module.css";

export function UserSummary() {
  return (
    <div className={styles.wrapper}>
      <img className={styles[`my-profile-img`]} src="" alt="" />
      <p className={styles[`my-profile-name`]}>김민준</p>
      <p className={styles[`my-profile-email`]}>ladkgaa1132@naver.com</p>
      <button>프로필 수정</button>
    </div>
  );
}
