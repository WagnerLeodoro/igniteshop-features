import React, { ReactNode, createContext, useState } from "react";

export interface IProduct {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  numberPrice: number;
  quantity: number;
  description: string;
  defaultPriceId: string;
}

interface CartProps {
  totalCart: number;
  cartItems: IProduct[];
  addToCart: (product: IProduct) => void;
  removeCartItem: (productId: string) => void;
  checkItemAlreadyExists: (productId: string) => boolean;
}

interface ContextProps {
  children: ReactNode;
}

export const ShoppingCartContext = createContext({} as CartProps);

export function ShoppingCartProvider({ children }: ContextProps) {
  const [cartItems, setCartItems] = useState<IProduct[]>([]);

  const totalCart = cartItems.reduce((total, item) => {
    return total + item.numberPrice;
  }, 0);

  function addToCart(product: IProduct) {
    setCartItems((state) => [...state, product]);
  }

  function removeCartItem(productId: string) {
    setCartItems((state) => state.filter((item) => item.id !== productId));
  }

  function checkItemAlreadyExists(productId: string) {
    return cartItems.some((item) => item.id === productId);
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeCartItem,
        checkItemAlreadyExists,
        totalCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
