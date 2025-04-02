import Magnifier from "../../../../assets/magnifier.svg";
import styles from "./SearchBox.module.css";
export function SearhBox() {
  return (
    <>
      <div className={styles["search-area"]}>
        <form className={styles.searchBox}>
          <input
            className={styles.searchText}
            type="text"
            placeholder="검색어를 입력하세요"
          />
          <button className={styles.searchBtn} type="submit">
            <img src={Magnifier} alt="검색하기" />
          </button>
        </form>
      </div>
    </>
  );
}
