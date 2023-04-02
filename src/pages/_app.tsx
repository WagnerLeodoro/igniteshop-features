import type { AppProps } from "next/app";

import { globalStyles } from "@/styles/globals";
import { Container, Header } from "@/styles/pages/app";

import logoImg from "../assets/logo.svg";
import Image from "next/image";
import { CartButton } from "@/components/CartButton";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />
        <CartButton color="gray" size="sm" />
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}
