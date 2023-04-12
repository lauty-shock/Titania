import css from "../css/Navbar/Navbar.module.css";
import { BsCart3 } from "react-icons/bs";
import { RxPerson } from "react-icons/rx";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoMdArrowDropdown } from "react-icons/io";

export default function Navbar() {
  return (
    <>
      <div className={css.containerNavbar}>
        <img src="img/logo.png" alt="Titania" />
        <div className={css.search}>
          <input type="text" placeholder="¿Qué estás buscando?" />
          <span>
            <HiMagnifyingGlass />
          </span>
        </div>
        <div className={css.containerLinks}>
          <div className={css.link}>
            <RxPerson />
            <span>Mi cuenta</span>
            <ul>
              <a href="#">Iniciar sesión</a>
              <a href="#">Crear cuenta</a>
            </ul>
          </div>
          <div className={css.link}>
            <BsCart3 />
            <span className="text-xs">Mi carrito</span>
          </div>
        </div>
      </div>

      <div className={css.containerOptions}>
        <span>
          Indumentaria Hombre
          <span className={css.arrow}>
            <IoMdArrowDropdown />
          </span>
        </span>
        <span>
          Indumentaria Mujer
          <span className={css.arrow}>
            <IoMdArrowDropdown />
          </span>
        </span>
        <span>
          Accesorios
          <span className={css.arrow}>
            <IoMdArrowDropdown />
          </span>
        </span>
        <span>
          Calzado
          <span className={css.arrow}>
            <IoMdArrowDropdown />
          </span>
        </span>
      </div>
    </>
  );
}
