import React, { useEffect, useState } from "react";
//router
import { useLocation } from "react-router-dom";
//redux
import { useSelector } from "react-redux";
//components
import Results from "../components/Search/Results";
function Search() {
  const products = useSelector((state) => state.products);
  const [noResult, setNoResult] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const location = useLocation();
  //handle search

  useEffect(() => {
    //get products by search input from store when search change
    const getFilteredProducts = () => {
      if (location.search === "") {
        setNoResult(true);
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
      <Results filteredProducts={filteredProducts} noResult={noResult} />
    </div>
  );
}

export default Search;
