'use client';

import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useCart } from '@/context/Cartcontext';

interface ButtonProps {
  productId: number;
  productName: string;
  productPrice: number;
}

const Button: React.FC<ButtonProps> = ({ productId, productName, productPrice }) => {
  const { addToCart, updateCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    addToCart(productId, productName, productPrice);
  };

  const handleUpdateCart = () => {
    updateCart(productId, quantity);
  };

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={decrementQuantity}
        className="px-3 py-2 bg-gray-200 rounded hover:bg-gray-300"
      >
        <AiOutlineMinus />
      </button>
      <span className="text-lg font-bold">{quantity}</span>
      <button
        onClick={incrementQuantity}
        className="px-3 py-2 bg-gray-200 rounded hover:bg-gray-300"
      >
        <AiOutlinePlus />
      </button>
      <button
        onClick={() => {
          handleAddToCart();
          handleUpdateCart();
        }}
        className="px-6 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Button;