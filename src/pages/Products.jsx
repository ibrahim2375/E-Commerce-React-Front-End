import React, { useEffect, useState } from "react";
//hook
import UseFetch from "../Hooks/UseFetch";
//redux
// import * as Actions from "../redux/reducers";
// import { useSelector } from "react-redux";
//react router
import { useLocation } from "react-router-dom";
//components
import Advertisement from "../components/Layouts/Advertisement";
import ProductsComponent from "../components/Products/ProductsComponent";
import ProductsFilter from "../components/Products/ProductsFilter";
function Products() {
  const location = useLocation();
  // const products = useSelector((state) => state.products);
  const [filterdProducts, setFilterdProducts] = useState([]);
  const [filters, setFilters] = useState({});
  //get all products
  const { data, loading, error } = UseFetch(
    !location.search
      ? `products`
      : `products?category=${location.search?.replace("?", "")}`
  );
  //get fillters values
  const FilterValuesOnChange = (e) => {
    // if (e.target.value.length === 0) {
    //   delete filters?.[e.target.name];
    // } else {
    setFilters({ ...filters, [e.target.name]: e.target.value });
    // }
  };
  //filter products
  useEffect(() => {
    // get all  data if ther is no filters or get data depend on filters
    setFilterdProducts(
      Object.keys(filters).length === 0
        ? data
        : data
            ?.filter((product) =>
              product?.avilableSizes?.includes(filters?.Size) ||
              product?.avilableColors?.includes(filters?.Color) ||
              filters?.Type === "Type"
                ? product
                : product?.category === filters?.Type
            )
            .sort((a, b) =>
              filters?.SortBy === "asc"
                ? a?.price - b?.price
                : filters?.SortBy === "dec"
                ? b?.price - a?.price
                : null
            )
    );
  }, [data, filters]);
  return (
    <div className="products container mx-auto px-4">
      <Advertisement />
      <ProductsFilter
        onChange={FilterValuesOnChange}
        isCategoryPage={location.search}
      />
      {error ? (
        <h1>There is a problem try again</h1>
      ) : (
        <ProductsComponent
          loading={loading}
          filterdProducts={filterdProducts}
        />
      )}
    </div>
  );
}

export default Products;
