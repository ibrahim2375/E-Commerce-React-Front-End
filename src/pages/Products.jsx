import React, { useEffect, useState } from "react";
//hook
import UseFetch from "../Hooks/UseFetch";
//components
import Advertisement from "../components/Layouts/Advertisement";
import ProductsComponent from "../components/Products/ProductsComponent";
import ProductsFilter from "../components/Products/ProductsFilter";
function Products() {
  //get all products
  const { data, loading, error } = UseFetch("/products");
  return (
    <div className="products container mx-auto px-4">
      <Advertisement />
      <ProductsFilter />
      <ProductsComponent products={data} />
    </div>
  );
}

export default Products;
