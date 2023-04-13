import css from "../css/Marcas/Marcas.module.css";

export default function Marcas() {
  return (
    <div className={css.container}>
      <div className={css.marca}>
        <img src="../../public/img/background-VANS.jpg" alt="VANS" />
        <div>
          <h2>VANS</h2>
          <button>VER MÁS</button>
        </div>
      </div>
      <div className={css.marca}>
        <img src="../../public/img/background-DCSHOES.jpg" alt="DC SHOES" />
        <div>
          <h2>DC SHOES</h2>
          <button>VER MÁS</button>
        </div>
      </div>
    </div>
  );
}
