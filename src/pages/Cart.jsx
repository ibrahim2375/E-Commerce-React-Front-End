import React from "react";
//components
import CartComponent from "../components/Cart/CartComponent";
import OrderSummery from "../components/Cart/OrderSummrey";
//redux fetch cart data from store
import { useSelector } from "react-redux";
function Cart() {
  const cart = useSelector((state) => state?.cart);
  return (
    <>
      {cart?.length === 0 ? (
        <div className="h-96 relative my-24">
          <img src="/emptyCart2.jpg" className="w-full h-full object-contain" />
        </div>
      ) : (
        <div className="cart flex flex-col lg:flex-row lg:justify-between gap-10 my-20 container mx-auto px-4">
          <CartComponent cart={cart} />
          <OrderSummery />
        </div>
      )}
    </>
  );
}

export default Cart;
