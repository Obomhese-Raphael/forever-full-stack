import React from "react";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify"
import axios from "axios";

const Verify = () => {
  const { navigate, token, setCartItems, backendUrl } = useContext(ShopContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");

  const verifyPayment = async () => {
    try {
      if (!token) {
        return null;
      }
      const response = await axios.post(
        backendUrl + "/api/order/verifyStripe",
        { success, orderId },
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success("Payment successful!");
        setCartItems([]);
        navigate("/orders");
      } else {
        toast.error("Payment failed. Try Again.");
        navigate("/cart");
      }
    } catch (error) {
        console.error("Error verifying payment: ", error);
        toast.error("Error verifying payment: "+error.message);
    }
  };

  useEffect(() => {
    verifyPayment();
  }, [token]);
  return <div>Verify</div>;
};

export default Verify;
