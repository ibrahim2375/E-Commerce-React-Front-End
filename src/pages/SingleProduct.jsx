import React, { useState } from "react";
//router
import { useParams } from "react-router-dom";
//hook
import UseFetch from "../Hooks/UseFetch";

//components
import ProductImage from "../components/SingleProduct/ProductImage";
import ProductInfo from "../components/SingleProduct/ProductInfo";

function SingleProduct() {
  const params = useParams();
  const { data, loading, error } = UseFetch(`/products/${params?.id}`);

  return (
    <div className="single_product flex flex-col lg:flex-row gap-10  py-20 container mx-auto px-4">
      {/* product image */}
      <div className="flex-1">
        <ProductImage data={data} loading={loading} />
      </div>
      {/* product Information */}
      <div className="flex-1">
        <ProductInfo
          product={data}
          loading={loading}
        />
      </div>
    </div>
  );
}

export default SingleProduct;
