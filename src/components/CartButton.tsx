import { CartButtonContainer } from "@/styles/pages/home";
import { Handbag } from "@phosphor-icons/react";

export function CartButton(props: {
  color: "green" | "gray";
  size: "sm" | "md";
}) {
  return (
    <CartButtonContainer color={props.color} size={props.size}>
      <Handbag size={32} weight="bold" color="white" />
    </CartButtonContainer>
  );
}
