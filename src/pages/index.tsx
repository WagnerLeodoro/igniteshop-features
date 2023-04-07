import Image from "next/image";
import { useState, MouseEvent } from "react";
import { GetStaticProps } from "next";

import { Arrow } from "@/utils/Arrow";
import { CartButton } from "@/components/CartButton";
import { HomeContainer, Product } from "@/styles/pages/home";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";

import { useCart } from "@/hooks/useCart";
import { IProduct } from "@/context/CartContext";

interface HomeProps {
  products: IProduct[];
}

export default function Home({ products }: HomeProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    slides: {
      perView: 3,
      spacing: 48,
      origin: "center",
    },
  });

  const { addToCart, checkItemAlreadyExists } = useCart();

  function handleAddToCart(
    e: MouseEvent<HTMLButtonElement>,
    product: IProduct
  ) {
    e.preventDefault();
    addToCart(product);
    console.log(product);
  }

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {products.map((product) => {
        return (
          <Product
            key={product.id}
            href={`/product/${product.id}`}
            prefetch={false}
            className="keen-slider__slide"
            passHref
          >
            <Image src={product.imageUrl} width={520} height={480} alt="" />
            <footer>
              <div className="product-info">
                <strong>{product.name}</strong>
                <span>{product.price}</span>
              </div>
              <CartButton
                color="green"
                size="md"
                disabled={checkItemAlreadyExists(product.id)}
                onClick={(e) => handleAddToCart(e, product)}
              />
            </footer>
          </Product>
        );
      })}
      {loaded && instanceRef.current && (
        <>
          <Arrow
            left
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.prev()
            }
            disabled={currentSlide === 0}
          />

          <Arrow
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.next()
            }
            disabled={
              currentSlide ===
              instanceRef.current.track.details.slides.length - 1
            }
          />
        </>
      )}
    </HomeContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format((price.unit_amount as number) / 100),
      numberPrice: price.unit_amount / 100,
      defaultPriceId: price.id,
    };
  });

  return {
    props: { products },
  };
};
