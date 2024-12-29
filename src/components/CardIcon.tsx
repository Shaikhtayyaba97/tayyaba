'use client';

import React from 'react';
import { useCart } from '@/context/Cartcontext'; // Import the Cart context
import { AiOutlineShoppingCart } from 'react-icons/ai'; // Import a cart icon from react-icons
import Link from 'next/link'; // Import Link for navigation

const CartIcon = () => {
  const { cartItems } = useCart(); // Get the cart items from the context

  // Calculate total items in the cart
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="relative">
      {/* Cart Icon */}
      <Link href="/cart">
        <div className="flex items-center space-x-2 cursor-pointer p-2 hover:bg-gray-200 rounded-lg transition-all duration-200 ease-in-out">
          <AiOutlineShoppingCart size={30} color="purple" />
          
          {/* Item Count Badge */}
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </div>
      </Link>

      {/* Optionally add a tooltip */}
      {totalItems > 0 && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-gray-800 text-white text-xs p-2 rounded-md shadow-lg w-max">
          You have {totalItems} item{totalItems > 1 ? 's' : ''} in your cart!
        </div>
      )}
    </div>
  );
};

export default CartIcon;