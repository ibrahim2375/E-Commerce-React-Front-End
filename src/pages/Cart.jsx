import React from "react";
//components
import CartComponent from "../components/Cart/CartComponent";
import OrderSummery from "../components/Cart/OrderSummrey";

function Cart() {
  return (
    <div className="cart flex flex-col lg:flex-row lg:justify-between gap-10 my-20 container mx-auto px-4">
      <CartComponent />
      <OrderSummery />
    </div>
  );
}

export default Cart;
