import React, { useState } from "react";

//components
import Product from "../Layouts/Product";
//pagination package
import ReactPaginate from "react-paginate";
//css
import "../../css/Products/ProductsComponent.css";
function ProductsComponent({ products }) {
  // handle paginations variable
  const [pageNumber, setPageNumber] = useState(0);
  const productsPerPages = 20;
  const productsVisited = pageNumber * productsPerPages;
  const pageCount = Math.ceil(products?.length / productsPerPages);
  const currentProducts = products?.slice(
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
        {currentProducts?.map((product) => (
          <Product
            key={product?.id}
            img={product?.img}
            name={product?.name}
            price={product?.price}
          />
        ))}
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
          pageCount={pageCount}
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
