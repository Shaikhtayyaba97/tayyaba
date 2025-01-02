'use client';

import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useCart } from '@/context/Cartcontext';

interface ButtonProps {
  productId: number;
  productName: string;
  productPrice: number;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  productId,
  productName,
  productPrice,
  className,
}) => {
  const { addToCart, updateCart } = useCart(); // Ensure useCart is properly typed in its context.
  const [quantity, setQuantity] = useState<number>(1);

  const incrementQuantity = () => setQuantity((prev) => prev + 1);

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(productId, productName, productPrice); // Add initial product to the cart.
  };

  const handleUpdateCart = () => {
    updateCart(productId, quantity); // Update product quantity in the cart.
  };

  return (
    <div className={`flex items-center gap-4 ${className || ''}`}>
      {/* Decrement Button */}
      <button
        onClick={decrementQuantity}
        className="px-3 py-2 bg-gray-600 rounded hover:bg-gray-300"
        aria-label="Decrement Quantity"
      >
        <AiOutlineMinus />
      </button>

      {/* Display Quantity */}
      <span className="text-lg font-bold">{quantity}</span>

      {/* Increment Button */}
      <button
        onClick={incrementQuantity}
        className="px-3 py-2 bg-gray-600 rounded hover:bg-gray-300"
        aria-label="Increment Quantity"
      >
        <AiOutlinePlus />
      </button>

      {/* Add to Cart Button */}
      <button
        onClick={() => {
          handleAddToCart();
          handleUpdateCart();
        }}
        className="px-6 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
        aria-label="Add to Cart"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Button;