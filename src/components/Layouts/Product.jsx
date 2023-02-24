import React from "react";
//api req
import axios from "../../api/axios";
//icons
import { AiOutlineHeart } from "react-icons/ai";
import { GrFormView } from "react-icons/gr";
// import { AiTwotoneHeart } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
//functions
import { truncate } from "../../functions/Truncate";
//redux
//components
import AddToCartButton from "./AddToCartButton";
//css
import "../../css/Layouts/Product.css";
import { Link } from "react-router-dom";
function Product({
  id,
  img,
  name,
  price,
  quantity,
  description,
  views,
  searchPage,
}) {
  //view product

  const viewProduct = async (id) => {
    await axios
      .post(`/product/view/${id}`)
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          console.log(res?.data?.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      className={`relative ${
        searchPage &&
        "block md:flex gap-10 md:shadow-md pr-5 md:w-full rounded-lg "
      }`}
    >
      <Link
        onClick={() => viewProduct(id)}
        to={`/product/${id}`}
        className={`product_image relative  rounded-md  grid place-content-center ${
          searchPage && "md:w-96"
        }`}
      >
        {/* faviorite icon */}
        <div className="favorite_icon p-2 w-8 h-8 rounded-full bg-white grid place-content-center absolute top-2 right-2">
          <AiOutlineHeart className="text-xl text-slate-400" />
        </div>
        {/* img */}
        <img
          src={`${import.meta.env.VITE_IMG_URL}/${img}`}
          alt="product_img"
          className={`object-contain`}
        />
      </Link>
      {/* product info */}
      <div
        className={`product_info relative ${
          searchPage && "lg:flex lg:flex-col  gap-2  md:w-full"
        }`}
      >
        <div className="head flex items-center justify-between mt-2">
          <h2 className="name font-bold text-lg">{name}</h2>
          <h2 className="price font-bold text-lg">{price}$</h2>
        </div>
        <p className="description text-sm text-slate-400">
          {truncate(description, 30)}
        </p>
        <div className="stars flex items-center gap-0 ">
          {Array.from({ length: 5 }).map((star, i) =>
            i < 4 ? (
              <AiFillStar key={i} className="text-lg filled_star" />
            ) : (
              <AiOutlineStar key={i} className="text-lg filled_star" />
            )
          )}
          <p>(121)</p>
        </div>
        <div className={`${searchPage && "md:absolute bottom-4 right-2"}`}>
          <AddToCartButton
            id={id}
            img={img}
            name={name}
            price={price}
            quantity={quantity}
          />
        </div>
      </div>
      {/* views */}
      <div className="flex items-center absolute bottom-0 right-0">
        <span className="text-sm">{views}</span>
        <GrFormView />
      </div>
    </div>
  );
}
Product.prototype = {
  searchPage: false,
};

export default Product;
