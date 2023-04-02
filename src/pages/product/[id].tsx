import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "@/styles/pages/product";
import Image from "next/image";
import React from "react";

import Camiseta1 from "../../assets/camisetas/1.png";

export default function Product() {
  return (
    <ProductContainer>
      <ImageContainer>
        <Image src={Camiseta1} width={520} height={480} alt="" />
      </ImageContainer>
      <ProductDetails>
        <h1>Camiseta </h1>
        <span>R$ 79,90</span>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Perspiciatis, earum non laboriosam nihil voluptatibus corporis minus
          nesciunt? Quisquam natus labore vero laudantium assumenda corporis
          excepturi itaque quibusdam eius, doloremque voluptatem?
        </p>
        <button
        /* disabled={isCreatingCheckoutSession}
            onClick={handleBuyProduct} */
        >
          Colocar na sacola
        </button>
      </ProductDetails>
    </ProductContainer>
  );
}
