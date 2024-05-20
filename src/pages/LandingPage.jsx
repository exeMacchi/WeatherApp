// Funciones
import { useState } from "react"
import { Routes, Route } from "react-router-dom";

// Paginas
import HomePage from "./HomePage/HomePage";
import WeatherPage from "./WeatherPage/WeatherPage";
import Login from "./Login/Login";

// Componentes
import Navbar from "../components/Nav/Navbar";
import Register from "./Register/Register";
import Favorites from "./Favorites/Favorites";
import Footer from "../components/Footer/Footer";
import About from "./About/About";

const LandingPage = () => {
    const [ bgClass, setBgClass ] = useState("default"); // Controlar el background
    const [ isLogged, setIsLogged] = useState(false); // Controlar la sesión

    return (
        <div className={`wrapper bg--${bgClass}`}>
            <header className="container">
                <Navbar isLogged={isLogged} setIsLogged={setIsLogged}/>
            </header>
            <main className="container container--main">
                <Routes>
                    <Route path='/' element={<HomePage setBgClass={setBgClass}/>}/>
                    <Route path="/weather" element={<WeatherPage setBgClass={setBgClass} isLogged={isLogged}/>}/>
                    <Route path="/login" element={<Login setBgClass={setBgClass} setIsLogged={setIsLogged}/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/favorites" element={<Favorites setBgClass={setBgClass} isLogged={isLogged}/>}/>
                    <Route path="/about" element={<About setBgClass={setBgClass}/>}/>
                </Routes>
            </main>
            <Footer/>
        </div>
    );
}

export default LandingPage;
