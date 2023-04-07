import type { AppProps } from "next/app";

import { globalStyles } from "@/styles/globals";
import { Container } from "@/styles/pages/app";

import { ShoppingCartProvider } from "@/context/CartContext";
import { Header } from "@/components/Header";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ShoppingCartProvider>
      <Container>
        <Header />
        <Component {...pageProps} />
      </Container>
    </ShoppingCartProvider>
  );
}
