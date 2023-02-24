import React, { useEffect, useState } from "react";
//axios request
import axios from "../api/axios";
//router
import { useLocation } from "react-router-dom";
//hook
// import UseFetch from "../Hooks/UseFetch";
//components
import Results from "../components/Search/Results";
function Search() {
  // const products = useSelector((state) => state.products);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  //handle search
  //get all products
  // const { data, loading, error } = UseFetch(`/products/get`, Actions.Products);
  // const { data, loading, error } = UseFetch(
  //   `/products/search/?search=${location.search.replace("?", "")}`
  // );
  useEffect(() => {
    //get products by search input from store when search change
    const getFilteredProducts = async () => {
      if (location.search.trim() === "") {
        setFilteredProducts([]);
      } else {
        await axios
          .get(`/products/search/?search=${location.search.replace("?", "")}`)
          .then((res) => {
            setFilteredProducts(res?.data);
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
          });
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
