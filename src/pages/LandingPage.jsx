// Funciones
import { useState } from "react";
import getWeatherData from "../services/weatherAPI";
import {getWeatherIcon} from "../utils/auxiliary";

// Componentes
import Search from "../components/Search/Search";
import "./LandingPage.css";
import Weather from "../components/Weather/Weather";


// El color del background se cambia según la información de la API. El ícono depende de
// la información que se recibe.
/* if (weatherTest.icon === "rainy") {
    document.body.classList.add("background__rainy");
}
else if (weatherTest.icon === "sunny") {
    document.body.classList.add("background__sunny");
} */

const LandingPage = () => {
    const [show, setShow] = useState(false)
    const [loading, setLoading] = useState(false)
    const [weatherData, setWeatherData] = useState(null)
    const [classMain, setClassMain] = useState('default')

    // Aux: obtiene el icono del weather para cambiar el bg
    const getClass = (weatherData) => {
        const localHour = (weatherData.location.localtime.split(" "))[1];
        return getWeatherIcon(weatherData.current.condition.code, Number(localHour.match(/^\d+/)[0]));
    }

    // Cuando se selecciona una ciudad en el buscador.
    const handleOnSearchChange = async (searchData) => {
        try {
            setLoading(true)
            await getWeatherData(searchData.value).then ((data) => {
                setWeatherData(data)
                setClassMain(getClass(data))
                setLoading(false)
                setShow(true)
            });
        }
        catch (err) {
            console.error(err);
            setLoading(false)
            setShow(false)
        }
    }

    return (
        <main className={`bg--${classMain}`}>
            <div className="container">
                <Search onSearchChange={handleOnSearchChange}/>
                <Weather
                    isLoading={loading}
                    show={show}
                    weatherData={weatherData}
                    />
            </div>
        </main>
    );
}

export default LandingPage;
