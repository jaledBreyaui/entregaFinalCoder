import { NavLink } from "react-router-dom"
import { BsInstagram, BsWhatsapp } from "react-icons/bs"


export default function Footer() {
    return (
        <div className="footer">
            <div className="contacto" >
                <ul >
                    <li><a href="#">impoflex@impoflex.com.ar</a></li>
                    <li className="redes">
                        <span className="ig"><BsInstagram /></span>
                        <span className="wpp"><BsWhatsapp /></span>
                    </li>
                </ul>
            </div>
            <div className="logo logo__footer">
                <NavLink to="/">
                    <p className="brand"><span className="brand brand__color">IMPO</span>FLEX <span className="copy">&copy;</span></p>

                </NavLink>
            </div>
            <div className="tyc">
                <ul >
                    <li><a href="#">Términos y condiciones</a></li>
                    <li><a href="#">Cómo comprar</a></li>
                </ul>
            </div>
        </div>
    )
}
/* <div className="categorias">
    <Link to="/products/guitarras">
        <span>Guitarras</span>
    </Link>
    <Link to="/products/pedales" >
        <span>Pedales</span>
    </Link>
</div> */