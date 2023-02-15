import React, { useState } from "react";
//redux
// import { useSelector } from "react-redux";
//components
import Product from "../Layouts/Product";
//pagination package
import ReactPaginate from "react-paginate";
//css
import "../../css/Products/ProductsComponent.css";

function ProductsComponent({ filterdProducts, loading }) {
  // const products = useSelector((state) => state.products);
  // handle paginations variable
  const [pageNumber, setPageNumber] = useState(0);
  const productsPerPages = 10;
  const productsVisited = pageNumber * productsPerPages;
  let pageCount = Math.ceil(filterdProducts?.length / productsPerPages);
  //get current products even its filterd or all products and get current products
  var currentProducts = filterdProducts?.slice(
    productsVisited,
    productsVisited + productsPerPages
  );

  //handlePageClick
  const handlePageClick = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="prosucts my-10">
      <div className="products_content flex flex-wrap gap-5 items-center justify-center">
        {/* when there is loading */}
        {loading ? (
          <h1 className="w-16 h-16 rounded-full border-1 border-l-4  border-solid border-l-gray-400 border-gray-200 animate-spin"></h1>
        ) : currentProducts?.length === 0 ? (
          // when there is no results
          <div className="flex gap-5 items-center">
            <img
              src="emptyData.svg"
              alt="img data"
              className="object-contain"
            />
            <h1 className="text-xl">No Data Founded</h1>
          </div>
        ) : (
          // when data exist
          currentProducts?.map((product) => (
            <Product
              key={product?.id}
              id={product?.id}
              img={product?.img}
              name={product?.name}
              price={product?.price}
              quantity={product?.quantity}
            />
          ))
        )}
      </div>
      {/* pagination links  */}
      <div className="pagination my-20">
        <ReactPaginate
          breakLabel="..."
          nextLabel=">>"
          previousLabel="<<"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          pageCount={parseInt(pageCount)}
          renderOnZeroPageCount={null}
          containerClassName="pagination_container"
          previousLinkClassName="pagination_prev"
          nextLinkClassName="pagination_next"
          disabledClassName="pagination_disabled"
          activeClassName="pagination_active"
          pageLinkClassName="pagination_link"
        />
      </div>
    </div>
  );
}

export default ProductsComponent;
