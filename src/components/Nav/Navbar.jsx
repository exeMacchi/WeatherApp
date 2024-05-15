import { Icon } from "@iconify-icon/react/dist/iconify.js"
import { Link, useNavigate } from "react-router-dom"
import { signOut } from "firebase/auth"
import { auth } from "../../services/firebase"
import "./Navbar.css"

const Navbar = ({ isLogged, setIsLogged }) => {
    const navigate = useNavigate()

    const getPosition = () => {
        navigator.geolocation.getCurrentPosition(async position => {
            navigate(`weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}`)
        })
    }

    const handleLogout = async () => {
        try {
            await signOut(auth);
            console.log("Se cierra la sesión");
            setIsLogged(false);
            navigate("/");
        }
        catch (err) {
            console.error(err);
        }
    }


    return(
            <nav className="nav">
                <div className="nav__logo nav__link">
                    <Link className="nav__logo" to="/" >
                        <Icon className="nav__logo-icon" icon="tabler:cloud" />
                        <span className="nav__logo-text">WeatherAPP</span>
                    </Link>
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
                        <button type="button" className="nav__logout" onClick={handleLogout}>
                            <Icon className="nav__icon" icon="tabler:logout" />
                            <span className="nav__icon-text">Salir</span>
                        </button>
                    </li>
                </ul>)
                :(
                    <ul className="nav__ul">
                    <li className="nav__li" onClick={getPosition}>
                        <span className="nav__link">
                            <Icon className="nav__icon" icon="tabler:map-pin" />
                            <span className="nav__icon-text">Mi ubicación</span>
                        </span>
                    </li>
                    <li className="nav__li">
                        <Link className="nav__link" to="/login" >
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
