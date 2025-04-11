import styles from "./ProductSpecs.module.css";

type Props = {
  specs?: string;
};

export function ProductSpecs(props: Props) {
  const { specs } = props;
  return <div className={styles["productSpecs-wrapper"]}>{specs}</div>;
}
