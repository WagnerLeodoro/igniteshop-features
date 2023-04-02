import { HomeContainer, Product } from "@/styles/pages/home";
import Image from "next/image";

import Camiseta1 from "../assets/camisetas/1.png";
import { Handbag } from "@phosphor-icons/react";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import { Arrow } from "@/utils/Arrow";

export default function Home() {
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
      perView: 2,
      spacing: 48,
      origin: "center",
    },
  });

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product href="/" className="keen-slider__slide">
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
      <Product href="/" className="keen-slider__slide">
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
      <Product href="/" className="keen-slider__slide">
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
      <Product href="/" className="keen-slider__slide">
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
      <Product href="/" className="keen-slider__slide">
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
