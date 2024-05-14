// Funciones
import { useState, useEffect } from "react";
import getWeatherData from "../services/weatherAPI";
import { getWeatherIcon } from "../utils/auxiliary";

// Componentes
import Search from "../components/Search/Search";
import Weather from "../components/Weather/Weather";
import Presentation from "../components/Presentation/Presentation";

const LandingPage = () => {
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [weatherData, setWeatherData] = useState(null);
    const [classMain, setClassMain] = useState('default');

    // Obtener la información en la API
    const fetchWeatherData = async (location) => {
        try {
            setLoading(true)
            const weatherDataAPI = await getWeatherData(location)
            setWeatherData(weatherDataAPI);
            setClassMain(getClass(weatherDataAPI));
            setLoading(false);
            setShow(true);
        }
        catch (err) {
            console.error(err);
            setLoading(false)
            setShow(false)
        }
    }

    // Obtener el ícono para cambiar el background
    const getClass = (weatherData) => {
        const localHour = (weatherData.location.localtime.split(" "))[1];
        return getWeatherIcon(weatherData.current.condition.code, Number(localHour.match(/^\d+/)[0]));
    }

    // Al cargar la aplicación por primera vez
    // useEffect(() => {
    //     navigator.geolocation.getCurrentPosition(async position => {
    //         const latlong = `${position.coords.latitude},${position.coords.longitude}`;
    //         await fetchWeatherData(latlong);
    //     })
    // }, []);


    // Cuando se selecciona una ciudad en el buscador.
    const handleOnSearchChange = async (searchData) => {
        await fetchWeatherData(searchData.value);
    }

    return (
        <main className={`bg--${classMain}`}>
            <div className="container">
                {/* Esto después cambiarlo por el componente Header o similar */}
                <header style={{display: "flex", justifyContent: "space-between", fontSize: "1.5rem"}}>
                    <span>WeatherApp</span>
                    <nav>
                        <ul style={{display: "flex", gap: "8px"}}>
                            <li>Mi ubicación</li>
                            <li>Iniciar sesión</li>
                        </ul>
                    </nav>
                </header>

                <Search onSearchChange={handleOnSearchChange}/>
                {
                    weatherData
                    ?
                    <Weather isLoading={loading}
                            show={show}
                            weatherData={weatherData}/>
                    :
                    <Presentation/>
                }
            </div>
        </main>
    );
}

export default LandingPage;
