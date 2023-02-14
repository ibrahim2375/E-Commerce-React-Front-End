import React from "react";

//icons
import { MdOutlineDeleteOutline } from "react-icons/md";
function CartComponent() {
  return (
    <div className="shopping_items outline outline-1 outline-gray-300 px-3 py-4 rounded-lg flex-auto">
      <h1 className="text-xl font-bold my-4">Reviw Items And Shipping</h1>
      {/* items in cart */}
      <div className="items flex flex-col justify-center gap-10">
        {/* item */}
        <div className="item relative outline outline-1 outline-gray-300 px-3 py-4 rounded-md flex gap-10  justify-between ">
          {/* item informtion */}
          <div className="item_info flex gap-5 lg:gap-10">
            {/* image */}
            <div className="image w-24 sm:h-24 relative bg-gray-300 rounded-lg">
              <img
                src={`products/tv.png`}
                alt="product_img"
                className="object-contain w-full h-full"
              />
            </div>
            {/* info */}
            <div className="product_info flex flex-col gap-2">
              <h3>head phone</h3>
              <p>sm</p>
              <p className="w-4 h-4 bg-green-400 rounded-full"></p>
            </div>
          </div>

          {/* price and quantity */}
          <div className="product_info flex flex-col gap-1">
            <h3>100$</h3>
            <input
              type="number"
              className="outline outline-1 outline-gray-300 pl-2 rounded-md bg-gray-200 w-10"
            />
          </div>
          {/* delete icon */}
          <div className="delete_icon transform hover:scale-75 cursor-pointer absolute bottom-4 right-4">
            <MdOutlineDeleteOutline className="text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartComponent;
