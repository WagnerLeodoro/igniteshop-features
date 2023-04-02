import { HomeContainer, Product } from "@/styles/pages/home";
import Image from "next/image";

import Camiseta1 from "../assets/camisetas/1.png";
import { Handbag } from "@phosphor-icons/react";

export default function Home() {
  return (
    <HomeContainer>
      <Product href="/">
        <Image src={Camiseta1} width={520} height={480} alt="" />
        <footer>
          <div className="product-info">
            <strong>Camiseta Beyond the Limits</strong>
            <span>R$ 79,90</span>
          </div>
          <button className="cart-icon">
            <Handbag size={32} weight="bold" color="white" />
          </button>
        </footer>
      </Product>
    </HomeContainer>
  );
}
