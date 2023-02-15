import React, { useEffect, useState } from "react";
//hook
import UseFetch from "../Hooks/UseFetch";
//redux
import * as Actions from "../redux/reducers";
import { useSelector } from "react-redux";
//components
import Advertisement from "../components/Layouts/Advertisement";
import ProductsComponent from "../components/Products/ProductsComponent";
import ProductsFilter from "../components/Products/ProductsFilter";
function Products() {
  // const products = useSelector((state) => state.products);
  const [filterdProducts, setFilterdProducts] = useState([]);
  const [filters, setFilters] = useState({});
  //get all products
  const { data, loading, error } = UseFetch("/products", Actions.Products);
  //get fillters values
  const FilterValuesOnChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };
  //filter products
  useEffect(() => {
    // get all filtered
    filters &&
      setFilterdProducts(
        data?.filter(
          (product) =>
            // product?.avilableSizes.includes(filters?.Size) ||
            product?.avilableColors?.includes(filters?.Color) ||
            product?.category === filters?.Type
        )
      );
  }, [data, filters]);
  return (
    <div className="products container mx-auto px-4">
      <Advertisement />
      <ProductsFilter onChange={FilterValuesOnChange} />
      <ProductsComponent
        products={data}
        loading={loading}
        filterdProducts={filterdProducts}
      />
    </div>
  );
}

export default Products;
