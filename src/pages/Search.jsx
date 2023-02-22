import React, { useEffect, useState } from "react";
//router
import { useLocation } from "react-router-dom";
//redux
import * as Actions from "../redux/reducers";
import { useSelector } from "react-redux";
//hook
import UseFetch from "../Hooks/UseFetch";
//components
import Results from "../components/Search/Results";
function Search() {
  const products = useSelector((state) => state.products);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const location = useLocation();
  //handle search
  //get all products
  const { data, loading, error } = UseFetch(`/products/get`, Actions.Products);
  useEffect(() => {
    //get products by search input from store when search change
    const getFilteredProducts = () => {
      if (location.search === "") {
        setFilteredProducts([]);
      } else {
        setFilteredProducts(
          products?.filter((product) =>
            product.name
              .toLowerCase()
              .includes(location.search.replace("?", "").toLowerCase())
          )
        );
      }
    };
    getFilteredProducts();
  }, [location.search]);
  return (
    <div className="container mx-auto px-4">
      <Results filteredProducts={filteredProducts} loading={loading} />
    </div>
  );
}

export default Search;
