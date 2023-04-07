import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import logoImg from "../assets/logo.svg";
import { CartModal } from "./CartModal";
import { HeaderComponent } from "@/styles/pages/app";

export function Header() {
  const { pathname } = useRouter();

  const showCartButton = pathname !== "/success";

  return (
    <HeaderComponent>
      <Link href={"/"}>
        <Image src={logoImg} alt="" />
      </Link>
      {showCartButton && <CartModal />}
    </HeaderComponent>
  );
}
