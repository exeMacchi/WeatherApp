// Funciones
import { useState } from "react"
import { Routes, Route } from "react-router-dom";

// Paginas
import HomePage from "./HomePage/HomePage";
import WeatherPage from "./WeatherPage/WeatherPage";
import Login from "./Login/Login";

// Componentes
import Navbar from "../components/Nav/Navbar";

const LandingPage = () => {
    const [ bgClass, setBgClass ] = useState("default"); // Controlar el background

    return (
        <div className={`bg--${bgClass}`}>
            <header className="container">
                <Navbar isLogged={false}/>
            </header>
            <main className="container">
                <Routes>
                    <Route path='/' element={<HomePage setBgClass={setBgClass}/>}/>
                    <Route path="/weather" element={<WeatherPage setBgClass={setBgClass}/>}/>
                    <Route path="/login" element={<Login/>}/>
                </Routes>
            </main>
        </div>
    );
}

export default LandingPage;
