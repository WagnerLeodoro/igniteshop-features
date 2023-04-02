import { ArrowButton } from "@/styles/pages/home";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

export function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
  return (
    <ArrowButton
      direction={props.left ? "left" : "right"}
      disabled={props.disabled}
    >
      <svg onClick={props.onClick}>
        {props.left && <CaretLeft width={48} height={48} weight="regular" />}
        {!props.left && <CaretRight width={48} height={48} weight="regular" />}
      </svg>
    </ArrowButton>
  );
}
