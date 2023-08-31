import { FC } from "react";
import { ProductType } from "@src/types";
import { PRODUCT_TITLE_CHARACTER_LIMIT } from "@src/constants";

interface ProductProps {
  product: ProductType;
}

function truncateString(str: string, n: number) {
  return str.length > n ? str.slice(0, n - 1).trim() + "..." : str;
}

const Product: FC<ProductProps> = ({ product }) => {
  if (!product) return null;

  const stockStatus =
    product?.stockStatus.status === "G" ? "IN STOCK" : "OUT OF STOCK";

  return (
    <div className="w-full md:w-72 border-2 border-indigo-400 rounded-lg p-4">
      <img
        className="w-full h-min-40 h-max-40"
        alt={product.image?.attributes?.imageAltText}
        src={product.image?.url}
      />
      <div className="h-48 flex flex-col">
        <img
          className="h-8 aspect-auto m-auto py-2"
          src={product.brand?.brandImage?.url}
          alt={product.brand?.brandImage?.attributes?.imageAltText}
        />
        <div className="text-base md:text-lg font-semibold my-2">
          {truncateString(product?.productName, PRODUCT_TITLE_CHARACTER_LIMIT)}
        </div>
        <p className="text-indigo-400 font-semibold text-xl">{`${product.price?.priceIncTax} ${product.price?.currencyCode}`}</p>
        <div>{stockStatus}</div>
      </div>
    </div>
  );
};

export default Product;
