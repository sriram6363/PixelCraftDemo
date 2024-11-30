"use client"; // For client-side rendering

import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa"; // Cart icon

export default function CartPage() {
  // Example cart items, you would typically retrieve this from a global state or context
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Sample Product 1",
      price: 99.99,
      quantity: 1,
      imageUrl: "/images/sample-product1.jpg", // Ensure you have this image
    },
    {
      id: 2,
      name: "Sample Product 2",
      price: 129.99,
      quantity: 1,
      imageUrl: "/images/sample-product2.jpg", // Ensure you have this image
    },
  ]);

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  const increaseQuantity = (productId) => {
    setCartItems(cartItems.map(item => 
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseQuantity = (productId) => {
    setCartItems(cartItems.map(item => 
      item.id === productId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <nav className="flex justify-between items-center p-4 bg-gray-800 text-white shadow-md">
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="mr-2 transform hover:scale-110 transition duration-300"
          />
          <h1 className="text-xl font-bold text-gray-100">
            <span className="text-black">Pixel</span> <span className="text-red-500">Craft</span>
          </h1>
        </div>
      </nav>

      {/* Cart Items */}
      <div className="flex-grow py-10 px-6 sm:px-12 md:px-20">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Your Cart</h2>

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-600">Your cart is empty!</p>
        ) : (
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between border-b py-4">
                <div className="flex items-center space-x-4">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-gray-600">${item.price}</p>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="px-3 py-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-300"
                  >
                    -
                  </button>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="px-3 py-1 bg-green-500 text-white rounded-full hover:bg-green-600 transition duration-300"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 transition duration-300"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Total Price */}
        <div className="mt-6 flex justify-between items-center text-xl font-semibold text-gray-800">
          <p>Total: </p>
          <p>${calculateTotal()}</p>
        </div>

        {/* Checkout Button */}
        <div className="mt-8 flex justify-center">
          <button
            className="px-8 py-3 bg-green-500 text-white font-semibold rounded-full shadow-lg hover:bg-green-600 transition duration-300 transform hover:scale-105"
          >
            Checkout
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="p-4 bg-gray-800 text-white text-center">
        <p>&copy; 2024 Pixel Craft. All rights reserved.</p>
      </footer>
    </div>
  );
}
