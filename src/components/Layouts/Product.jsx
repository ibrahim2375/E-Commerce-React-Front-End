import React, { useState } from "react";
//icons
import { AiOutlineHeart } from "react-icons/ai";
import { AiTwotoneHeart } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
//functions
import { truncate } from "../../functions/Truncate";
//redux
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "../../redux/reducers";
//css
import "../../css/Layouts/Product.css";
function Product({ id, img, name, price, quantity }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  //handle add items to cart
  const handleAddToCart = async (id, img, name, price, quantity) => {
    await dispatch(Actions.addToCart({ id, img, name, price, quantity }));
    console.log(cart);
  };
  return (
    <div className="product">
      <div className="product_image relative  rounded-md mb-2 grid place-content-center">
        {/* faviorite icon */}
        <div className="favorite_icon p-2 w-8 h-8 rounded-full bg-white grid place-content-center absolute top-2 right-2">
          <AiOutlineHeart className="text-xl text-slate-400" />
        </div>
        {/* img */}
        <img src={`${img}`} alt="product_img" className="object-contain" />
      </div>
      {/* product info */}
      <div className="product_info ">
        <div className="head flex items-center justify-between mt-2">
          <h2 className="name font-bold text-lg">{name}</h2>
          <h2 className="price font-bold text-lg">{price}</h2>
        </div>
        <p className="description text-sm text-slate-400">
          {truncate(
            " Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            30
          )}
        </p>
        <div className="stars flex items-center gap-0 ">
          {Array.from({ length: 5 }).map((star, i) => (
            <AiFillStar key={i} className="text-lg filled_star" />
          ))}
          <p>(121)</p>
        </div>
        <button
          onClick={() => handleAddToCart(id, img, name, price, quantity)}
          className="add_to_cart mt-4 text-sm py-2 px-4 outline outline-1 rounded-full outline-green-900"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default Product;
