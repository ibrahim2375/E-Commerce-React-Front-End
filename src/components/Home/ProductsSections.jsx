import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
//functions
import { ScrollByMouse } from "../../functions/ScrollByMouse";
//hook
import UseFetch from "../../Hooks/UseFetch";
//components
import Button from "../Layouts/Button";
import Product from "../Layouts/Product";
//skeleton
import ProductSkeleton from "../../skeleton/ProductSkeleton";
//variables
let scrollLeft = 0;
let startX;
let isDown = false;
function ProductsSections() {
  const categories = useSelector((state) => state.categories);
  const [currentQuery, setCurrentQuery] = useState("Furniture");
  const categories_ref = useRef();
  //shoud be limited data depnd on category
  const { data, loading, error } = UseFetch(
    `/products/by-category?category=${currentQuery}`
  );
  let limitedProducts = data?.slice(0, 20);
  //handle select when select btn add his category
  const handleSelect = (value) => {
    setCurrentQuery(value);
  };
  //handle scrolling
  useEffect(() => {
    ScrollByMouse(categories_ref, startX, scrollLeft, isDown);
  }, [isDown]);
  return (
    <section className="products_home_section">
      <h1 className="text-2xl font-extrabold my-4 ">Beast Deals For You.</h1>
      <div
        ref={categories_ref}
        className="filters flex  items-center gap-4  row overflow-x-auto p-4"
      >
        {categories?.map((c) => (
          <Button
            key={c?._id}
            value={c?.category}
            active={currentQuery === c?.category}
            fanc={handleSelect}
          />
        ))}
      </div>
      {/* products */}
      <div className="products flex flex-wrap justify-center  gap-10 py-10 px-5 ">
        {/* when loading */}
        {loading && <ProductSkeleton count={10} />}
        {/* data success */}
        {limitedProducts?.map((product) => (
          <Product
            key={product?._id}
            id={product?._id}
            img={product?.img}
            name={product?.name}
            price={product?.price}
            quantity={1}
          />
        ))}
      </div>
      {/* show message when ther is error */}
      {error && (
        <h1 className="text-center my-10 text-2xl">
          There is a problem try again
        </h1>
      )}
    </section>
  );
}
export default ProductsSections;
