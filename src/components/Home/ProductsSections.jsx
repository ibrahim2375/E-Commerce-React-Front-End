import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
//functions
import { ScrollByMouse } from "../../functions/ScrollByMouse";
//hook
import UseFetch from "../../Hooks/UseFetch";
//components
import Button from "../Layouts/Button";
import Product from "../Layouts/Product";
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
    `/products?category=${currentQuery}`
  );
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
            key={c?.id}
            value={c?.category}
            active={currentQuery === c?.category}
            fanc={handleSelect}
          />
        ))}
      </div>
      {/* products */}
      <div className="products flex flex-wrap justify-center  gap-10 py-10 px-5 ">
        {data?.map((product) => (
          <Product
            key={product?.id}
            id={product?.id}
            img={product?.img}
            name={product?.name}
            price={product?.price}
            quantity={product?.quantity}
          />
        ))}
      </div>
    </section>
  );
}
export default ProductsSections;
