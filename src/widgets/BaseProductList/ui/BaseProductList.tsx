import { Product, ProductCard } from "../../../entities/product";
type Props<T extends Product> = {
  products: T[];
  size: "base" | "cart";
};
export function BaseProductList<T extends Product>(props: Props<T>) {
  const { products = [], size } = props;
  return (
    <>
      {products.map((product, index) => (
        //key = {product.id}로 변경 예정
        <ProductCard key={index} product={product} size={size} />
      ))}
    </>
  );
}
