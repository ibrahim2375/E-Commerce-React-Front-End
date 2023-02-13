import React, { useEffect, useRef, useState } from "react";
//pi request
import axios from "../../api/axios";
//functions
import { ScrollByMouse } from "../../functions/ScrollByMouse";
//components
import Product from "../Layouts/Product";
//variables
let scrollLeft = 0;
let startX;
let isDown = false;
//css
import "../../css/Home/ProductsRow.css";
function ProductsRow({title}) {
  const [products, setProducts] = useState([]);
  const product_row = useRef();

  useEffect(() => {
    const getProducts = async () => {
      await axios
        .get("/products")
        .then((response) => setProducts(response.data));
    };
    getProducts();
  }, []);
  //handle scrolling
  useEffect(() => {
    ScrollByMouse(product_row, startX, scrollLeft, isDown);
  }, [isDown]);
  return (
    <div className="Row ">
      <h1 className="my-4 font-bold text-2xl">{title}</h1>
      <div
        ref={product_row}
        className="row py-4 px-2 content flex items-center gap-5 overflow-x-auto cursor-pointer"
      >
        {products?.map((product) => (
          <Product
            key={product?.id}
            img={product?.img}
            name={product?.name}
            price={product?.price}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductsRow;
