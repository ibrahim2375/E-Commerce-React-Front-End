import React from "react";

//components
import Product from "../Layouts/Product";
function Results({ filteredProducts, loading }) {
  return (
    <div className="products_result my-10">
      {/* products result */}
      <div className="flex flex-col gap-5">
        {/* single product */}
        <div className="flex flex-col gap-4 items-center justify-center md:justify-start md:items-start ">
          {/* when there is loading */}
          {loading && (
            <div className="loading outline-1 outline-l-4 animate-spin outline-gray-200 w-8 h-8 rounded-full"></div>
          )}
          {
            // when data exist
            filteredProducts?.map((product) => (
              <Product
                key={product?._id}
                id={product?._id}
                img={product?.img}
                name={product?.name}
                price={product?.price}
                quantity={1}
                searchPage={true}
              />
            ))
          }
          {filteredProducts?.length === 0 && (
            // when there is no results
            <div className="flex gap-5 items-center justify-center w-full h-96">
              <img
                src="emptyData.svg"
                alt="img data"
                className="object-contain"
              />
              <h1 className="text-xl">No Data Founded</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Results;
