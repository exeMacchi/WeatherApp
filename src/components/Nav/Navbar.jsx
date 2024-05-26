import { Icon } from "@iconify-icon/react/dist/iconify.js"
import { Link, useNavigate } from "react-router-dom"
import { signOut } from "firebase/auth"
import { auth } from "../../services/firebase"
import "./Navbar.css"
import { useState } from 'react';
import { documentId } from "firebase/firestore"


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
            setIsLogged({logged: false, uid: ""});
            navigate("/");
        }
        catch (err) {
            console.error(err);
        }
    }

    const open_close_burger = () => {
        let menu_deploy = document.getElementById('menu');
        let close_menu = document.getElementById('x');
        menu_deploy.classList.toggle('open_menu');
        close_menu.classList.toggle('place_x');
       
    }

    return (
        <>
        <li className="bars" >
            <button id="x" className="menu_button" onClick={open_close_burger}></button>
        </li>
        
        {/* agrege id menu e clase desplegable */}
            <nav className="nav desplegable" id="menu">
                <div className="nav__logo nav__link">
                    <Link className="nav__logo" to="/" >
                        <Icon className="nav__logo-icon" icon="tabler:cloud" />
                        <span className="nav__logo-text">WeatherAPP</span>
                    </Link>
                </div>
                
                <ul className= "nav__ul">
                    <li className="nav__li" onClick={getPosition}>
                        <span className="nav__link">
                            <Icon className="nav__icon" icon="tabler:map-pin" />
                            <span className="nav__icon-text">Mi ubicación</span>
                        </span>
                    </li>
                    <li className="nav__li">
                        <Link className="nav__link" to="/about" >
                            <span className="nav__link">
                                <Icon className="nav__icon" icon="tabler:code" />
                                <span className="nav__icon-text">Sobre Nosotros</span>
                            </span>
                        </Link>
                    </li>
            
                    {
                        isLogged.logged
                        ? 
                        <>
                        <li className="nav__li">
                        <Link className="nav__link" to="/favorites" >
                            <Icon className="nav__icon" icon="tabler:star" />
                            <span className="nav__icon-text">Favoritos</span>
                        </Link>
                        </li>
                        <li className="nav__li">
                            <span type="button" className="nav__link" onClick={handleLogout}>
                                <Icon className="nav__icon" icon="tabler:logout" />
                                <span className="nav__icon-text">Salir</span>
                            </span>
                        </li>
                        </>
                        :
                        <>
                        <li className="nav__li">
                            <Link className="nav__link" to="/login" >
                                <Icon className="nav__icon" icon="tabler:user-circle" />
                                <span className="nav__icon-text">Iniciar sesión</span>
                            </Link>
                        </li>
                        </>
                    }
                </ul>
            </nav>
            </>
    )
}

export default Navbar
