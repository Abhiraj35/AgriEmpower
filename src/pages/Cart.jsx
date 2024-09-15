import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  
  // Sample product list
  const seedProducts = [
    { id: 1, name: "Rice Seed", price: 2000, quantity: 0 },
    { id: 2, name: "Wheat Seed", price: 1500, quantity: 0 },
    { id: 3, name: "Corn Seed", price: 1000, quantity: 0 },
  ];

  // State to manage cart items
  const [cart, setCart] = useState(seedProducts);
  const [checkout, setCheckout] = useState(false); // Track checkout stage
  const [address, setAddress] = useState(""); // Address input state
  const [customerName, setCustomerName] = useState(""); // Customer name
  const [mobile, setMobile] = useState(""); // Mobile number
  const [paymentInfo, setPaymentInfo] = useState(""); // Payment info
  const [orderPlaced, setOrderPlaced] = useState(false); // Track if order is placed

  // Update quantity of a specific item
  const handleQuantityChange = (id, quantity) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(0, quantity) } : item
      )
    );
  };

  // Calculate total price
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Handle order placement
  const handleOrderPlacement = () => {
    // Logic to handle order placement
    setOrderPlaced(true); // Mark order as placed
  };

  // Navigate to payment page
  const handleDelivery = () => {
    navigate('/payment'); // Assuming '/payment' is the route to the payment page
  };

  return (
    <div className="flex  bg-gradient-to-b from-gray-900 to-blue-200 p-5 mt-20 min-h-screen justify-center align-center">
      <div className="max-w-4xl w-full bg-white p-5 rounded-lg shadow-lg">
        {!checkout ? (
          <>
            <h1 className="text-3xl font-semibold text-center mb-4">
              Your Cart
            </h1>

            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center mb-6"
              >
                <div>
                  <h2 className="text-xl font-medium">{item.name}</h2>
                  <p className="text-gray-500">Price: ₹{item.price}</p>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    className="px-3 py-1 bg-gray-300 rounded"
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity - 1)
                    }
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="px-3 py-1 bg-gray-300 rounded"
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                </div>

                <div className="text-right">
                  <p className="font-semibold">₹{item.price * item.quantity}</p>
                </div>
              </div>
            ))}

            <div className="text-right">
              <h3 className="text-2xl font-bold">Total: ₹{calculateTotal()}</h3>
              <button
                className="bg-green-600 text-white py-2 px-6 rounded mt-4 hover:bg-green-700"
                onClick={() => setCheckout(true)} // Proceed to checkout
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        ) : (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Delivery Address</h2>
            <input
              type="text"
              className="w-full p-2 border rounded-lg mb-4"
              placeholder="Customer Name"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
            />
            <input
              type="text"
              className="w-full p-2 border rounded-lg mb-4"
              placeholder="Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
            <textarea
              className="w-full p-4 border rounded-lg mb-4"
              rows="4"
              placeholder="Enter your delivery address..."
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />

            <div className="text-right">
              <button
                className="bg-green-600 text-white py-2 px-6 rounded mt-4 hover:bg-green-700"
                onClick={handleDelivery} // Go to payment
              >
                Deliver Here
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

