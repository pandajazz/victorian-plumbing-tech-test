import { FC, useEffect, useState } from "react";
import apiClient from "@src/api/apiClient";
import Product from "@components/ProductsListing/Product";
import { ProductType } from "@src/types";
import { PRODUCTS_PER_PAGE } from "@src/constants";

const API_KEY = import.meta.env.VITE_API_KEY;

const ProductsListing: FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<ProductType[]>([]);
  const [errorMsg, setErrorMsg] = useState<string>();

  const fetchProducts = () => {
    setLoading(true);
    apiClient
      .post(`/interviews/listings?apikey=${API_KEY}`, {
        query: "toilets",
        size: PRODUCTS_PER_PAGE,
      })
      .then((res) => {
        const { products, pagination } = res.data;
        setProducts(products);
      })
      .catch(() => setErrorMsg("Something went wrong!"))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (errorMsg) return <div>{errorMsg}</div>;
  return (
    <div>
      <div className=" fixed left-0 top-0 right-0 bg-white z-50 w-full p-4">
        <div className="text-2xl text-center font-bold">
          E-COMMERCE LISTING PAGE
        </div>
        <div className="flex gap-4 flex-wrap justify-center mx-4 md:mx-8 mt-[180px] mb-[80px]">
          {loading ? (
            <div className="text-indigo-400 text-base font-semibold md:text-2xl text-center">
              Loading...
            </div>
          ) : (
            products?.map((product, key) => (
              <Product key={key} product={product} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsListing;
