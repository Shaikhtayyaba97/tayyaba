'use client';

import React from 'react';
import { useCart } from '@/context/Cartcontext'; // Import the Cart context

const Cart = () => {
  const { cartItems, updateCart, removeFromCart, clearCart } = useCart(); // Get the cart context functions

  const handleRemoveFromCart = (productId: number) => {
    removeFromCart(productId);
  };

  const handleUpdateQuantity = (productId: number, quantity: number) => {
    updateCart(productId, quantity);
  };

  const handleClearCart = () => {
    clearCart();
  };

  // Total price calculation
  const totalPrice = cartItems.reduce((sum, item) => sum + item.productPrice * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Your Cart</h1>

      {/* Cart Items */}
      {cartItems.length === 0 ? (
        <p className="text-center text-lg text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.productId}
              className="flex items-center justify-between bg-white p-4 rounded-lg shadow-lg border border-gray-200"
            >
              <div className="flex items-center space-x-4">
                {/* Product Image (conditionally rendered) */}
                {item.productImage && (
                  <img
                    src={item.productImage}
                    alt={item.productName}
                    className="w-20 h-20 object-cover rounded-md border border-gray-200"
                  />
                )}

                {/* Product Name and Price */}
                <div className="flex flex-col">
                  <h3 className="text-xl font-semibold text-gray-800">{item.productName}</h3>
                  <p className="text-sm text-gray-600">${item.productPrice}</p>
                </div>
              </div>

              {/* Quantity */}
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => handleUpdateQuantity(item.productId, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                  className="px-3 py-1 bg-gray-300 text-white rounded-full hover:bg-gray-400 transition duration-200"
                >
                  -
                </button>
                <span className="text-lg text-gray-700">{item.quantity}</span>
                <button
                  onClick={() => handleUpdateQuantity(item.productId, item.quantity + 1)}
                  className="px-3 py-1 bg-gray-300 text-white rounded-full hover:bg-gray-400 transition duration-200"
                >
                  +
                </button>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => handleRemoveFromCart(item.productId)}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Total Price */}
      {cartItems.length > 0 && (
        <div className="mt-8 flex items-center justify-between bg-white p-4 rounded-lg shadow-lg border border-gray-200">
          <h3 className="text-2xl font-semibold text-gray-800">Total: ${totalPrice.toFixed(2)}</h3>
          <button
            onClick={handleClearCart}
            className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;