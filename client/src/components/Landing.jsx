import { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import css from "../css/Landing/Landing.module.css";

export default function Landing() {
  const arrayContent = [
    {
      image: "../../public/img/vans.jpg",
      N: 0,
    },
    {
      image: "../../public/img/jordan.jpg",
      N: 1,
    },
    {
      image: "../../public/img/nike.jpg",
      N: 2,
    },
  ];
  const [content, setContent] = useState(arrayContent[0]);

  const Next = () => {
    if (content.N === 0) {
      setContent(arrayContent[1]);
    }
    if (content.N === 1) {
      setContent(arrayContent[2]);
    }
    if (content.N === 2) {
      setContent(arrayContent[0]);
    }
  };
  const Back = () => {
    if (content.N === 0) {
      setContent(arrayContent[2]);
    }
    if (content.N === 1) {
      setContent(arrayContent[0]);
    }
    if (content.N === 2) {
      setContent(arrayContent[1]);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (content.N === 0) {
        setContent(arrayContent[1]);
      }
      if (content.N === 1) {
        setContent(arrayContent[2]);
      }
      if (content.N === 2) {
        setContent(arrayContent[0]);
      }
    }, 4000);

    return () => clearInterval(intervalId);
  }, [content]);

  return (
    <div className={css.container}>
      <img src={content.image} />
      <button onClick={Back} className={css.arrowLeft}>
        <IoIosArrowBack />
      </button>
      <div>
        <button
          onClick={() => setContent(arrayContent[0])}
          className={content.N === 0 ? css.buttonActive : css.button}
        ></button>
        <button
          onClick={() => setContent(arrayContent[1])}
          className={content.N === 1 ? css.buttonActive : css.button}
        ></button>
        <button
          onClick={() => setContent(arrayContent[2])}
          className={content.N === 2 ? css.buttonActive : css.button}
        ></button>
      </div>
      <button onClick={Next} className={css.arrowRight}>
        <IoIosArrowForward />
      </button>
    </div>
  );
}
