import logo from "../../assets/logo/logo.svg";
import "./styles.scss";


function Sidebar () {
    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="Logo SportSee" />
            </div>
            <nav>
                <ul>
                    <li>Accueil</li>
                    <li>Profil</li>
                    <li>Réglage</li>
                    <li>Communauté</li>
                </ul>
            </nav>
        </header>
    )
}

export default Sidebar;