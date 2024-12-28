// src/components/ComponentCard.tsx
import React from 'react';
import { useCart } from '@/context/Cartcontext'; // Make sure the path is correct

// Define the types for the product prop
interface Product {
  productId: number;
  productName: string;
  productPrice: number;
  productDescription: string;
}

interface ComponentCardProps {
  product: Product;
}

const ComponentCard: React.FC<ComponentCardProps> = ({ product }) => {
  const { addToCart } = useCart(); // Access the cart functions from context

  const handleAddToCart = () => {
    addToCart(product.productId, product.productName, product.productPrice);
  };

  return (
    <div className="border p-4 rounded-md shadow-md">
      <h3 className="text-xl font-bold">{product.productName}</h3>
      <p>{product.productDescription}</p>
      <p className="text-lg font-semibold">${product.productPrice}</p>
      <button
        onClick={handleAddToCart}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ComponentCard;