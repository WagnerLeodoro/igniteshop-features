import { CartButtonContainer } from "@/styles/pages/home";
import { Handbag } from "@phosphor-icons/react";
import { ComponentProps } from "react";

type CartButtonProps = ComponentProps<typeof CartButtonContainer> & {
  color: "green" | "gray";
  size: "sm" | "md";
  quantity?: number;
};

export function CartButton({ quantity = 0, ...rest }: CartButtonProps) {
  return (
    <CartButtonContainer {...rest}>
      {quantity > 0 && <span>{quantity}</span>}
      <Handbag size={32} weight="bold" color="white" />
    </CartButtonContainer>
  );
}
