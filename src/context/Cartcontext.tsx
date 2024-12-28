'use client'

// src/components/contexts/CardContext.tsx
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface CartItem {
  productId: number;
  productName: string;
  productPrice: number;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (productId: number, productName: string, productPrice: number) => void;
  updateCart: (productId: number, quantity: number) => void;
  removeFromCart: (productId: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const saveToLocalStorage = (cartItems: CartItem[]) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }
};

const getFromLocalStorage = (): CartItem[] => {
  if (typeof window !== 'undefined') {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  }
  return [];
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = getFromLocalStorage();
    setCartItems(savedCart);
  }, []);

  const addToCart = (productId: number, productName: string, productPrice: number) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.productId === productId);
      if (existingItem) {
        return prev.map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      const updatedCart = [...prev, { productId, productName, productPrice, quantity: 1 }];
      saveToLocalStorage(updatedCart);
      return updatedCart;
    });
  };

  const updateCart = (productId: number, quantity: number) => {
    setCartItems((prev) => {
      const updatedCart = prev.map((item) =>
        item.productId === productId ? { ...item, quantity: Math.max(quantity, 1) } : item
      );
      saveToLocalStorage(updatedCart);
      return updatedCart;
    });
  };

  const removeFromCart = (productId: number) => {
    setCartItems((prev) => {
      const updatedCart = prev.filter((item) => item.productId !== productId);
      saveToLocalStorage(updatedCart);
      return updatedCart;
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};