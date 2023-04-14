import { useEffect, useRef, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import css from "../css/Slice/Slice.module.css";
import Card from "./Card";

export default function Slice({ product, title }) {
  const [spaceCard, setSpaceCard] = useState(0);
  const myRefs = product.map(() => useRef());
  const sliceShow = useRef(null);

  useEffect(() => {
    const rect1 = myRefs[0].current.getBoundingClientRect();
    const rect2 = myRefs[1].current.getBoundingClientRect();

    setSpaceCard(rect2.left - rect1.left - 250);
  }, []);

  const handleNext = () => {
    if (sliceShow.current.children.length > 0) {
      const firstElement = sliceShow.current.children[0];

      sliceShow.current.style.transition = `1000ms ease-out all`;

      const sizeSlice = spaceCard + sliceShow.current.children[0].offsetWidth;

      sliceShow.current.style.transform = `translateX(-${sizeSlice}px)`;

      const transitionEvent = () => {
        sliceShow.current.style.transition = `none`;
        sliceShow.current.style.transform = `translateX(0)`;

        sliceShow.current.appendChild(firstElement);
        sliceShow.current.removeEventListener("transitionend", transitionEvent);
      };

      sliceShow.current.addEventListener("transitionend", transitionEvent);
    }
  };
  const handlePrev = () => {
    if (sliceShow.current.children.length > 0) {
      const index = sliceShow.current.children.length - 1;
      const lastElement = sliceShow.current.children[index];

      sliceShow.current.insertBefore(lastElement, sliceShow.current.firstChild);

      sliceShow.current.style.transition = `none`;

      const sizeSlice = spaceCard + sliceShow.current.children[0].offsetWidth;

      sliceShow.current.style.transform = `translateX(-${sizeSlice}px)`;

      setTimeout(() => {
        sliceShow.current.style.transition = `1000ms ease-out all`;
        sliceShow.current.style.transform = `translateX(0)`;
      }, 30);
    }
  };

  return (
    <div className={css.container}>
      <div className={css.containerSlice}>
        <div className={css.header}>
          <h1>{title}</h1>
          <div>
            <button onClick={handlePrev}>
              <IoIosArrowBack />
            </button>
            <button onClick={handleNext}>
              <IoIosArrowForward />
            </button>
          </div>
        </div>

        <div ref={sliceShow} className={css.containerSliceShow}>
          {product.map((product, index) => (
            <div
              id={"slice" + index}
              ref={myRefs[index]}
              key={index}
              className={css.slice}
            >
              <Card product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
