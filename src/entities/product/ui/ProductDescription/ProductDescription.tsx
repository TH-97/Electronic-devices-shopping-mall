import styles from "./ProductDescription.module.css";

type Props = {
  images?: string[];
};
export function ProductDescription(props: Props) {
  const { images } = props;
  return (
    <div className={styles["productDescription-wrapper"]}>
      {images?.map((imgUrl, index) => (
        <img src={imgUrl} key={index} />
      ))}
    </div>
  );
}
