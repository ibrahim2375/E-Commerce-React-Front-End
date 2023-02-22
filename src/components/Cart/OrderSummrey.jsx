import React from "react";
//router
import { useNavigate } from "react-router-dom";
//redux
import { useSelector } from "react-redux";
//toast message
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//css
import "../../css/Cart/OrderSummery.css";
function OrderSummery() {
  // const [totalPrice, setTotalPrice] = useState(0);
  const user = useSelector((state) => state.user);
  const orders = useSelector((state) => state.cart);
  const navigate = useNavigate();

  //handle total price
  const getTotalPrice = () => {
    return orders
      ?.map((order) => order?.quantity * order?.price)
      .reduce((prev, currnt) => prev + currnt, 0);
  };

  //handle checkout products
  const checkout = async () => {
    if (!user) {
      navigate("/login");
    } else {
      toast.success("Successfully Orderd!", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

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
        {orders?.map((order, i) => (
          <div
            key={i}
            className="order flex justify-between items-center my-2 font-light"
          >
            <p>{order?.name}</p>
            <p>{order?.quantity * order?.price}$</p>
          </div>
        ))}
      </div>
      {/* total */}
      <div className="total flex justify-between">
        <h1 className="text-xl font-bold">Total</h1>
        <h1 className="text-xl font-bold">{getTotalPrice()}$</h1>
      </div>
      {/* check out */}
      <button onClick={checkout} className="checkout rounded-full my-10">
        Check Out
      </button>
      {/* // checkout message container */}
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default OrderSummery;
