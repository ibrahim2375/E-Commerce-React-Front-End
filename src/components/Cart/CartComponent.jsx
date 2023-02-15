// import React, { useState } from "react";
//icons
import { MdOutlineDeleteOutline } from "react-icons/md";
//redux
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "../../redux/reducers";
function CartComponent({ cart }) {
  const cart_data = useSelector((state) => state.cart);
  // const [newQuantity, setNewQuantity] = useState(0);
  const dispatch = useDispatch();
  //handle remove item from cart
  const removeItem = async (id) => {
    await dispatch(Actions.removeItemFromCart(id));
  };
  //handle new Quantity
  const handleNewQuantity = async (quantity, id) => {
    if (quantity > 0) {
      // setNewQuantity(quantity);
      await dispatch(Actions.updateCart({ id, quantity }));
      console.log(cart_data);
    } else if (quantity <= 0) {
      removeItem(id);
    }
  };
  return (
    <div className="shopping_items outline outline-1 outline-gray-300 px-3 py-4 rounded-lg flex-auto">
      <h1 className="text-xl font-bold my-4">Reviw Items And Shipping</h1>
      {/* items in cart */}
      <div className="items flex flex-col justify-center gap-10">
        {/* loop on cart items */}
        {/* item */}
        {cart?.map((data) => (
          <div
            key={data?.id}
            className="item relative outline outline-1 outline-gray-300 px-3 py-4 rounded-md flex gap-10  justify-between "
          >
            {/* item informtion */}
            <div className="item_info flex gap-5 lg:gap-10">
              {/* image */}
              <div className="image w-24 sm:h-24 relative bg-gray-300 rounded-lg">
                <img
                  src={`${data?.img}`}
                  alt="product_img"
                  className="object-contain w-full h-full"
                />
              </div>
              {/* info */}
              <div className="product_info flex flex-col gap-2">
                <h3>{data?.name}</h3>
                <p>SM</p>
                <p className="w-4 h-4 bg-green-400 rounded-full"></p>
              </div>
            </div>

            {/* price and quantity */}
            <div className="product_info flex flex-col gap-1">
              <h3>{data?.quantity * data?.price}$</h3>
              <input
                type="number"
                defaultValue={data?.quantity}
                onChange={(e) =>
                  handleNewQuantity(parseInt(e.target.value), data?.id)
                }
                className="outline outline-1 outline-gray-300 pl-2 rounded-md bg-gray-200 w-10"
              />
            </div>
            {/* delete icon */}
            <div
              className="delete_icon transform hover:scale-75 cursor-pointer absolute bottom-4 right-4"
              onClick={() => removeItem(data?.id)}
            >
              <MdOutlineDeleteOutline className="text-2xl" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CartComponent;
