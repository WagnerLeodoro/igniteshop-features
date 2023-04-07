import { styled } from "..";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  height: 480,
  padding: "12px 0",
  minHeight: "100vh",
});

export const HeaderComponent = styled("header", {
  display: "flex",
  justifyContent: "space-between",
  padding: "1rem 0",
  width: "100%",
  maxWidth: 1180,
  margin: "0 auto",

  div: {
    display: "flex",
    position: "relative",
  },

  span: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    position: "absolute",
    width: 24,
    height: 24,
    top: -7,
    right: -7,
    zIndex: 1,

    background: "$green500",
    borderRadius: 50,
    border: "3px solid",
    borderColor: "$gray900",
    color: "$gray100",
  },
});
