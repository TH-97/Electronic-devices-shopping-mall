import { useCallback, useState } from "react";
import { Button } from "../../../../shared/ui";
import { useNavigate } from "react-router-dom";

type Props = {
  size?: "m" | "s";
  // product: Product
};

export function AddToCartButton(props: Props) {
  const { size } = props;
  //로그인 기능 구현후 변경 예정
  const [auth] = useState(false);
  const navigate = useNavigate();

  const onAddToCart = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    if (!auth) {
      alert("로그인이 필요합니다");
      navigate("/login");
      return;
    } else {
      //cart에 product 추가
    }
  }, []);
  return (
    <>
      <Button theme="black" size={size} onClick={onAddToCart}>
        장바구니 추가
      </Button>
    </>
  );
}
