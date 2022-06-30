
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";



export default function NavBar() {


    return (
        <header className="header">
            <div className="logo">
                <NavLink to="/">
                    <p className="brand"><span className="brand brand__color">IMPO</span>FLEX</p>
                </NavLink>
            </div>
            <div className="navSearch">
                <SearchBar />
            </div>
            <nav className="nav">
                <ul className="nav__ul">
                    <li>
                        <NavLink to="/" className="a">Home</NavLink>
                    </li>
                    <li className="productos">
                        <NavLink to="/products/guitarras" className="a" id="">Guitarras</NavLink>
                    </li>
                    <li>
                        <NavLink to="/products/pedales" className="a">Pedales</NavLink>
                    </li>
                    <li>
                        <CartWidget count={0} />
                    </li>
                </ul>
            </nav>
        </header>
    );
}