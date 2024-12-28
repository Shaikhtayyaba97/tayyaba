// src/app/card/checkout/page.tsx
import React from 'react';
import { useCart } from '@/context/Cartcontext'; // Import the custom hook to access the cart context
import Link from 'next/link';

const CheckoutPage: React.FC = () => {
  const { cartItems } = useCart(); // Access cart items from the context

  // If there are no items in the cart, display a message
  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-xl font-bold">Your Cart is Empty</h1>
        <Link href="/card" className="mt-4 inline-block text-blue-500">
          Go back to cart
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>

      <div className="space-y-4">
        {cartItems.map((item) => (
          <div key={item.productId} className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
            <div>
              <img src={`/images/${item.productName.toLowerCase()}.jpg`} alt={item.productName} className="w-16 h-16 object-cover" />
              <p className="font-semibold">{item.productName}</p>
            </div>
            <p>${item.productPrice}</p>
            <p>Qty: {item.quantity}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-between items-center">
        <p className="text-lg font-bold">Total: ${cartItems.reduce((total, item) => total + item.productPrice * item.quantity, 0).toFixed(2)}</p>
        <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
          Complete Order
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;