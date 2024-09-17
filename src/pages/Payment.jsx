import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();
  const [paymentInfo, setPaymentInfo] = useState(""); // Payment info state
  const [orderPlaced, setOrderPlaced] = useState(false); // Track if order is placed

  // Handle payment submission
  const handlePayment = () => {
    // Logic to handle payment submission
    setOrderPlaced(true); // Mark order as placed
  };

  return (
    <div className="flex justify-center align-center min-h-screen bg-gray-100 p-8 mt-20">
      <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg">
        {!orderPlaced ? (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Payment Information</h2>
            <input
              type="text"
              className="w-full p-2 border rounded-lg mb-4"
              placeholder="Card Number"
              value={paymentInfo}
              onChange={(e) => setPaymentInfo(e.target.value)}
            />
            <input
              type="text"
              className="w-full p-2 border rounded-lg mb-4"
              placeholder="Expiration Date"
              value={paymentInfo}
              onChange={(e) => setPaymentInfo(e.target.value)}
            />
            <input
              type="text"
              className="w-full p-2 border rounded-lg mb-4"
              placeholder="CVV"
              value={paymentInfo}
              onChange={(e) => setPaymentInfo(e.target.value)}
            />

            <div className="text-right">
              <button
                className="bg-green-600 text-white py-2 px-6 rounded mt-4 hover:bg-green-700"
                onClick={handlePayment} // Make payment
              >
                Make Payment
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <h3 className="text-2xl font-bold mt-4 text-green-600">
              Order Placed Successfully!
            </h3>
            <img
              src="./images/tick.jpg"
              alt="Order Placed"
              className="w-16 h-16 mx-auto mt-4"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Payment;
