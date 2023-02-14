import React from "react";

//css
import "../../css/Cart/OrderSummery.css";
function OrderSummery() {
  return (
    <div className="order_summery outline outline-1 outline-gray-300 px-5 py-4 rounded-lg flex-1 lg:flex-none">
      <h1 className="text-xl font-bold my-4">Order Summery</h1>
      <div className="divider h-1 bg-gray-200 w-full "></div>
      {/* Coupon Code */}
      <form className="form flex flex-wrap gap-2 items-center my-10">
        <input
          type="text"
          placeholder="Coupon Code"
          className="coupon_input rounded-full"
        />
        <button type="submit" className="coupon_btn rounded-full">
          Apply
        </button>
      </form>
      <div className="divider h-1 bg-gray-200 w-full"></div>
      {/* orders details */}
      <h1 className="text-xl font-bold my-4">Orders Details</h1>
      <div className="divider h-1 bg-gray-200 w-full"></div>
      <div className="orders ">
        <div className="order flex justify-between items-center my-2 font-light">
          <p>product Name</p>
          <p>100$</p>
        </div>
      </div>
      {/* total */}
      <div className="total flex justify-between">
        <h1 className="text-xl font-bold">Total</h1>
        <h1 className="text-xl font-bold">400$</h1>
      </div>
      {/* check out */}
      <button className="checkout rounded-full my-10">Check Out</button>
    </div>
  );
}

export default OrderSummery;
