import type { AppProps } from "next/app";

import { globalStyles } from "@/styles/globals";
import { Container, Header } from "@/styles/pages/app";

import logoImg from "../assets/logo.svg";
import Image from "next/image";
import { CartButton } from "@/components/CartButton";
import Link from "next/link";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Link href={"/"}>
          <Image src={logoImg} alt="" />
        </Link>
        <CartButton color="gray" size="sm" />
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}
