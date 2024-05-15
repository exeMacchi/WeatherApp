import { Icon } from "@iconify-icon/react/dist/iconify.js"
import { Link, BrowserRouter, Route, Router } from "react-router-dom"
import "./Navbar.css"

const Navbar = ({isLogged}) => {
    return(
            <nav className="nav">
                <div className="nav__logo">
                    <Icon className="nav__logo-icon" icon="tabler:cloud" />
                    <span className="nav__logo-text">WeatherAPP</span>
                </div>

                {isLogged?
                (<ul className="nav__ul">
                    <li className="nav__li">
                        <Link className="nav__link" to="/" >
                            <Icon className="nav__icon" icon="tabler:home" />
                            <span className="nav__icon-text">Home</span>
                        </Link>
                    </li>
                    <li className="nav__li">
                        <Link className="nav__link" to="/" >
                            <Icon className="nav__icon" icon="tabler:map-pin" />
                            <span className="nav__icon-text">Mi ubicación</span>
                        </Link>
                    </li>
                    <li className="nav__li">
                        <Link className="nav__link" to="/" >
                            <Icon className="nav__icon" icon="tabler:star" />
                            <span className="nav__icon-text">Favoritos v</span>
                        </Link>
                    </li>
                    <li className="nav__li">
                        <Link className="nav__link" to="/" >
                            <Icon className="nav__icon" icon="tabler:logout" />
                            <span className="nav__icon-text">Salir</span>
                        </Link>
                    </li>
                </ul>)
                :(
                    <ul className="nav__ul">
                    <li className="nav__li">
                        <Link className="nav__link" to="/" >
                            <Icon className="nav__icon" icon="tabler:map-pin" />
                            <span className="nav__icon-text">Mi ubicación</span>
                        </Link>
                    </li>
                    <li className="nav__li">
                        <Link className="nav__link" to="/" >
                            <Icon className="nav__icon" icon="tabler:user-circle" />
                            <span className="nav__icon-text">Iniciar sesión</span>
                        </Link>
                    </li>
                </ul>
                )}

                
            </nav>
    )
}

export default Navbar