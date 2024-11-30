"use client"; // For client-side rendering

import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa"; // Cart icon

export default function ProductsPage() {
  const router = useRouter();

  // State to track cart items
  const [cartItems, setCartItems] = useState([]);

  // Example list of products
  const products = [
    {
      id: 1,
      name: "Sample Product 1",
      description: "This is an amazing product.",
      price: 99.99,
      imageUrl: "/images/sample-product1.jpg", // Ensure you have this image
    },
    {
      id: 2,
      name: "Sample Product 2",
      description: "This product is top-rated.",
      price: 129.99,
      imageUrl: "/images/sample-product2.jpg", // Ensure you have this image
    },
    {
      id: 3,
      name: "Sample Product 3",
      description: "Best-selling product of the month.",
      price: 79.99,
      imageUrl: "/images/sample-product3.jpg", // Ensure you have this image
    },
  ];

  // Add product to cart
  const addToCart = (product) => {
    setCartItems([...cartItems, product]); // Add the product to the cart
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center p-4 bg-gray-800 text-white shadow-md">
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="mr-2"
          />
          <h1 className="text-xl font-bold text-gray-100">
            <span className="text-black">Pixel</span> <span className="text-red-500">Craft</span>
          </h1>
        </div>
        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => router.push("/")}
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Home
          </button>
          <button
            onClick={() => router.push("/products")}
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Shop
          </button>
          <button
            onClick={() => router.push("/about")}
            className="text-white hover:text-gray-300 transition duration-300"
          >
            About
          </button>
          <button
            onClick={() => router.push("/contact")}
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Contact
          </button>
        </div>

        {/* Cart Icon */}
        <div className="relative flex items-center gap-4">
          <FaShoppingCart
            onClick={() => router.push("/cart")}
            size={30}
            className="text-white cursor-pointer"
          />
          {/* Cart item count (only display if there are items in the cart) */}
          {cartItems.length > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartItems.length}
            </span>
          )}

          {/* Login Button */}
          <button
            onClick={() => router.push("/login")}
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </div>
      </nav>

      {/* Product List Section */}
      <div className="flex-grow flex flex-wrap items-center justify-center py-20 px-6 sm:px-12 md:px-20">
        {products.map((product) => (
          <div key={product.id} className="max-w-xs flex flex-col items-center bg-white shadow-lg rounded-lg p-6 m-4">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h2>
            <p className="text-lg text-gray-600 mb-4">{product.description}</p>
            <p className="text-xl font-semibold text-gray-800 mb-6">${product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="px-8 py-3 bg-red-500 text-white font-semibold rounded-full shadow-lg hover:bg-red-600 transition duration-300 transform hover:scale-105"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="p-4 bg-gray-800 text-white text-center">
        <p>&copy; 2024 Pixel Craft. All rights reserved.</p>
      </footer>
    </div>
  );
}
