import React from "react";
//axios request
import axios from "../../api/axios";
//redux
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "../../redux/reducers";
function AddToCartButton({ id, img, name, price, quantity, color, size }) {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  //handle add items to cart
  const handleAddToCart = async () => {
    await dispatch(
      Actions.addToCart({
        productId: id,
        img,
        name,
        price,
        quantity,
        color: color ? color : null,
        size: size ? size : null,
      })
    );
    if (user) {
      await axios
        .post("/order/add", {
          userId: user?.userId,
          productId: id,
          img,
          name,
          price,
          quantity,
          color: color ? color : null,
          size: size ? size : null,
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <button
      onClick={handleAddToCart}
      className="add_to_cart mt-4 text-sm py-2 px-4 outline outline-1 rounded-full outline-green-900"
    >
      Add To Cart
    </button>
  );
}

export default AddToCartButton;
