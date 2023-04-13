import { useState } from "react";
import css from "../css/Carrusel/Carrusel.module.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import Card from "./Card";

export default function Carrusel({ product, title }) {
  const arrayProduct = product.map((p, index) => {
    return { ...p, productId: index };
  });

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex(
      activeIndex === 0 ? arrayProduct.length - 4 : activeIndex - 1
    );
  };
  const handleNext = () => {
    setActiveIndex(
      activeIndex === arrayProduct.length - 4 ? 0 : activeIndex + 1
    );
  };

  return (
    <div className={css.container}>
      {title && <h1>{title}</h1>}

      <div className={css.conatinerCards}>
        <button onClick={handlePrev}>
          <IoIosArrowBack />
        </button>
        {arrayProduct.slice(activeIndex, activeIndex + 4).map((card) => (
          <Card key={card.productId} product={card} />
        ))}
        <button onClick={handleNext}>
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
}
