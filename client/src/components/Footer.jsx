import css from "../css/Footer/Footer.module.css";
import { ImLocation } from "react-icons/im";
import { HiOutlineMail } from "react-icons/hi";
import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <div className={css.container}>
      <div>
        <a>Guía de talles</a>
        <a>Preguntas frecuentes</a>
      </div>
      <div>
        <h4>CONTACTANOS</h4>
        <a>
          <BsWhatsapp /> +54 3511234567
        </a>
        <a>
          <HiOutlineMail /> hello@titania.com
        </a>
        <a>
          <ImLocation /> Calle Titania 160 Córdoba capital
        </a>
      </div>
      <div>
        <h4>SIGAMOS CONECTADOS</h4>
        <div className={css.containerRedes}>
          <a className={css.redSocial}>
            <BsInstagram />
          </a>
          <a className={css.redSocial}>
            <FaFacebookF />
          </a>
          <a className={css.redSocial}>
            <BsTwitter />
          </a>
        </div>
      </div>
    </div>
  );
}
