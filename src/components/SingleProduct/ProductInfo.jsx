import { useState } from "react";
//functions
import { truncate } from "../../functions/Truncate";
//icons
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
//components
import AddToCartButton from "../Layouts/AddToCartButton";
// import * as Actions from "../../redux/reducers";
// import { useDispatch } from "react-redux";
//css
import "../../css/SingleProduct/ProductInfo.css";

function ProductInfo({ product, loading }) {
  const [quantity, setQuantity] = useState(1);
  const [choosedColor, setChoosedColor] = useState(null);
  // const dispatch = useDispatch();
  //handle add items to cart
  // const handleAddToCart = async () => {
  //   await dispatch(
  //     Actions.addToCart({ ...product, quantity, color: choosedColor })
  //   );
  // };
  return (
    <div className="product_Info flex flex-col gap-5">
      <div className="main_data flex flex-col gap-4">
        {/*title  */}
        <h1 className="text-2xl font-extrabold">{product?.name}</h1>
        {/* description */}
        <p className="text-sm text-gray-400 w-full md:w-96">
          {truncate(`${product?.description}`, 140)}
        </p>
        {/* stars */}
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
        {/* price */}
        <h1 className="text-3xl font-extrabold">{product?.price}$</h1>
        {/* divider */}
        <div className="h-1 bg-gray-100 w-full"></div>
      </div>
      {/* check if there is colors or not */}
      {product?.avilableColors?.length !== 0 && (
        <div className="avilable_colors">
          <h2 className="text-lg font-bold">Choose a Color</h2>
          {/* colors */}
          <div className="flex gap-2 my-10">
            {product?.avilableColors?.map((color, i) => (
              <div
                key={i}
                className="h-8 w-8 rounded-full cursor-pointer outline outline-1 outline-gray-500"
                style={{
                  background: color,
                  outline: color === choosedColor && "3px solid #999",
                }}
                onClick={(e) => setChoosedColor(color)}
              ></div>
            ))}
          </div>
          {/* divider */}
          <div className="h-1 bg-gray-100 w-full"></div>
        </div>
      )}
      <div className="quantity_and_add_to_cart flex flex-col gap-10">
        {/* quantity */}
        <div className="flex gap-5">
          {/* input quantity */}
          <input
            type="number"
            defaultValue={1}
            onChange={(e) => setQuantity(e.target.value)}
            className="outline outline-1 outline-gray-300 pl-2 rounded-md bg-gray-200 w-24 h-8"
          />
          <p>
            Only
            <span className="text-orange-400">
              {product?.leftedItems} items
            </span>
            left!
          </p>
        </div>
        <AddToCartButton
          id={product?._id}
          img={product?.img}
          name={product?.name}
          price={product?.price}
          quantity={quantity}
          color={choosedColor}
        />
        {/* <button
          onClick={handleAddToCart}
          className="add_to_cart_single_btn py-2 px-3 rounded-full"
        >
          Add To Cart
        </button> */}
      </div>
    </div>
  );
}

export default ProductInfo;
