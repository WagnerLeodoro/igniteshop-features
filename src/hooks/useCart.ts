import { useContext } from "react";
import { ShoppingCartContext } from "@/context/CartContext";

export function useCart() {
  return useContext(ShoppingCartContext);
}
