// Funciones
import { useState } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { getWeatherIcon } from "../utils/auxiliary";

// Paginas
import HomePage from "./HomePage/HomePage";
import WeatherPage from "./WeatherPage/WeatherPage";
import Login from "./Login/Login";

// Componentes
import Navbar from "../components/Nav/Navbar";

const LandingPage = () => {
    const [classMain, setClassMain] = useState('default');

    // Obtener el ícono para cambiar el background
    const getClass = (weatherData) => {
        const localHour = (weatherData.location.localtime.split(" "))[1];
        return getWeatherIcon(weatherData.current.condition.code, Number(localHour.match(/^\d+/)[0]));
    }

    // Cuando se selecciona una ciudad en el buscador.
    const handleOnSearchChange = async (searchData) => {
        await fetchWeatherData(searchData.lat, searchData.lon);
    }

    return (
        <BrowserRouter>
            <div className={`bg--${classMain}`}>
                <header className="container">
                    <Navbar isLogged={false}/>
                </header>
                <main className="container">
                    <Routes>
                        <Route path='/' element={<HomePage/>}/>
                        <Route path="/weather" element={<WeatherPage/>}/>
                        <Route path="/login" element={<Login/>}/>
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default LandingPage;
