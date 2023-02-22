import React, { useEffect } from "react";
//axios request
import axios from "../api/axios";
//components
import CartComponent from "../components/Cart/CartComponent";
import OrderSummery from "../components/Cart/OrderSummrey";
//redux fetch cart data from store
import * as Actions from "../redux/reducers";
import { useSelector, useDispatch } from "react-redux";

function Cart() {
  const userId = useSelector((state) => state?.user?.userId);
  const cart = useSelector((state) => state?.cart);
  const dispatch = useDispatch();
  //fetch cart items for user from data base
  useEffect(() => {
    const getOrders = async () => {
      await axios
        .get(`/orders/get/${userId}`)
        .then((res) => {
          if (res.status === 200 || res.status === 201) {
            dispatch(Actions.Cart(res.data));
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
    if (userId) {
      getOrders();
    }
  }, []);

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
