import { styled } from "..";
import Link from "next/link";

export const HomeContainer = styled("main", {
  display: "flex",
  width: "100%",
  marginLeft: "auto",
});

export const Product = styled(Link, {
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  overflow: "hidden",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },

  footer: {
    position: "absolute",
    bottom: "0.25rem",
    left: "0.25rem",
    right: "0.25rem",
    padding: "2rem",

    borderRadius: 6,

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    backgroundColor: "rgba(0, 0, 0, 0.6)",

    transform: "translateY(110%)",
    opacity: 0,
    transition: "all 0.2s ease-in-out",

    ".product-info": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      padding: 0,
      gap: 4,

      width: 252,
      height: 70,
    },

    strong: {
      fontSize: "$lg",
      color: "$gray100",
    },

    span: {
      fontSize: "$xl",
      fontWeight: "bold",
      color: "$green300",
    },
  },

  "&:hover": {
    footer: {
      transform: "translateY(0%)",
      opacity: 1,
    },
  },
});

export const ArrowButton = styled("button", {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  width: "8.5rem",
  height: "100%",
  background:
    "linear-gradient(270deg, rgba(18, 18, 20, 0) 0%, rgba(18, 18, 20, 0.75) 100%)",
  cursor: "pointer",
  border: "none",
  outline: "none",
  color: "$white",
  fill: "$white",
  padding: "0 1rem",

  variants: {
    direction: {
      left: {
        left: 0,
        textAlign: "left",
      },
      right: {
        right: 0,
        textAlign: "right",
        background:
          "linear-gradient(90deg, rgba(18, 18, 20, 0) 0%, rgba(18, 18, 20, 0.75) 100%)",
      },
    },
    disabled: {
      true: {
        opacity: 0.5,
      },
    },
  },
});

export const CartButtonContainer = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "none",
  borderRadius: 6,
  position: "relative",

  "&:disabled": {
    opacity: 0.6,
    cursor: "not-allowed",
  },

  span: {
    background: "$green500",
    color: "$white",
    borderRadius: "50%",
    width: "1.5rem",
    height: "1.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "0.875rem",
    fontWeight: "bold",
    position: "absolute",
    top: "calc(-1.5rem / 2)",
    right: "calc(-1.5rem / 2)",
    outline: "3px solid $gray900",
  },

  variants: {
    color: {
      green: {
        color: "$gray100",
        backgroundColor: "$green500",

        "&:hover": {
          backgroundColor: "$green300",
        },
      },
      gray: {
        color: "$gray500",
        backgroundColor: "$gray800",
      },
    },
    size: {
      sm: {
        width: 48,
        height: 48,
      },
      md: {
        width: 56,
        height: 56,
      },
    },
  },
});
