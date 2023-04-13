import { useState } from "react";
import css from "../css/Card/Card.module.css";

export default function Card({ product }) {
  const [image, setImage] = useState(product.colors[0]);
  return (
    <div className={css.card}>
      <img src={image} alt={product.name} />
      <p className={css.price}>$ {product.price}</p>
      {product.colors.length > 1 && (
        <div className={css.colors}>
          {product.colors.map((p, index) => (
            <img
              onMouseOver={() => setImage(p)}
              onMouseOut={() => setImage(product.colors[0])}
              key={index}
              src={p}
              alt={product.name}
            />
          ))}
        </div>
      )}

      <span className={css.title}>{product.name}</span>
      <span>{product.category}</span>
      <span>{product.colors.length} colores</span>
    </div>
  );
}
