import { useCallback } from "react";
import { Button } from "../../../../shared/ui";

type Props = {
  size?: "m" | "s";
};

export function ProductBuyNow(props: Props) {
  const { size } = props;

  const onProductBuyNow = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      e.preventDefault();
    },
    []
  );

  return (
    <>
      <Button size={size} theme="white" onClick={onProductBuyNow}>
        바로구매하기
      </Button>
    </>
  );
}
