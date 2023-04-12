import css from "../css/Marcas/Marcas.module.css";

export default function Marcas() {
  return (
    <div className={css.container}>
      <div className={css.card}>
        <h2>MUJER</h2>
        <img src="../../public/img/Woman.jpg" alt="" />
      </div>
      <div className={css.card}>
        <h2>HOMBRE</h2>
        <img src="../../public/img/Man.jpeg" alt="" />
      </div>
    </div>
  );
}
