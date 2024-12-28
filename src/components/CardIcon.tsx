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
        
          <AiOutlineShoppingCart size={30} color='purple' />
        
      </Link>

      {/* Item Count Badge */}
      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
          {totalItems}
        </span>
      )}
    </div>
  );
};

export default CartIcon;