import { ImageContainer, SuccessContainer } from "@/styles/pages/success";
import Image from "next/image";
import Link from "next/link";

import Camiseta1 from "../assets/camisetas/1.png";

export default function Success() {
  return (
    <SuccessContainer>
      <h1>Compra efetuada</h1>

      <ImageContainer>
        <Image src={Camiseta1} width={120} height={110} alt="" />
      </ImageContainer>
      <p>
        Uhuul. <strong>Wagner Leodoro</strong>, sua <strong>Camiseta</strong> já
        está a caminho da sua casa.
      </p>

      <Link href="/">Voltar ao catálogo</Link>
    </SuccessContainer>
  );
}
