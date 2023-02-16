import React from "react";
//zoom image
// import ReactImageZoom from "react-image-zoom";
//css
import "../../css/SingleProduct/ProductImage.css";
function ProductImage({ data, loading }) {
  //   const props = {
  //     width: 400,
  //     height: 250,
  //     zoomWidth: 500,
  //     img: "https://th.bing.com/th/id/OIP.JDa_1X-NqdM1K-bZxp99DQHaEo?pid=ImgDet&rs=1",
  //   };
  return (
    <div
      className={`product_Single_page_image object-cover relative bg-no-repeat rounded-md mb-2 grid
      place-content-center bg-gray-200 h-96 ${loading && "animate-pulse"}`}
    >
      {!loading && (
        <img src={`/${data?.img}`} alt="img" className="w-full h-full" />
      )}
    </div>
  );
}

export default ProductImage;
