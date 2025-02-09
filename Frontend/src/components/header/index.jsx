import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.svg";
import "./styles.scss";


function Header () {
    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="Logo SportSee" />
            </div>
            <nav>
                <ul>
                <li><Link to="/" className="homeLink">Accueil</Link></li>
                    <li>Profil</li>
                    <li>Réglage</li>
                    <li>Communauté</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;