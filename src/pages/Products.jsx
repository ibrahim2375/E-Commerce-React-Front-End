import React, { useEffect, useState } from "react";
//api request
import axios from "../api/axios";
//components
import Advertisement from "../components/Layouts/Advertisement";
import ProductsComponent from "../components/Ptoducts/ProductsComponent";
import ProductsFilter from "../components/Ptoducts/ProductsFilter";
function Products() {
  const [products, setProducts] = useState([]);

  //get all products
  useEffect(() => {
    const getProducts = async () => {
      await axios
        .get("/products")
        .then((response) => setProducts(response.data));
    };
    getProducts();
  }, []);
  return (
    <div className="products container mx-auto px-4">
      <Advertisement />
      <ProductsFilter />
      <ProductsComponent products={products} />
    </div>
  );
}

export default Products;
