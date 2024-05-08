// TODO: importar todos los componentes necesarios de la landingpage
import Search from "../components/Search/Search";
import MainGrid from "../components/MainGrid/MainGrid";
import Forecast from "../components/Forecast/Forecast";
import "./LandingPage.css";

// Toda la siguiente información se conseguiría en la API.
// MainGrid
const weather = {
    date: "Jueves, 2 de mayo de 2024",
    localHour: "01:50",
    locate: "CABA, Buenos Aires",
    icon: "sunny",
    actualTemperature: "18" + "°C",
    thermalSensation: "0" + "°C",
    humidity: "5" + " %",
    wind: "4" + " km/h"
}
// Forecast
const dailyForecast = [
    {
        hour: "02:00",
        icon: "rainy",
        max: "4" + "°C",
    },
    {
        hour: "03:00",
        icon: "rainy",
        max: "3" + "°C",
    },
    {
        hour: "04:00",
        icon: "rainy",
        max: "3" + "°C",
    },
    {
        hour: "05:00",
        icon: "cloud",
        max: "4" + "°C",
    },
    {
        hour: "06:00",
        icon: "cloud",
        max: "5" + "°C",
    }
]

const weekForecast = [
    {
        day: "Viernes",
        icon: "cloud",
        max: "8" + "°C",
        min: "2" + "°C",
    },
    {
        day: "Sábado",
        icon: "rainy",
        max: "5" + "°C",
        min: "0" + "°C",
    },
    {
        day: "Domingo",
        icon: "cloud",
        max: "12" + "°C",
        min: "4" + "°C",
    },
    {
        day: "Lunes",
        icon: "partly_cloudy_day",
        max: "15" + "°C",
        min: "5" + "°C",
    },
    {
        day: "Martes",
        icon: "partly_cloudy_day",
        max: "16" + "°C",
        min: "7" + "°C",
    }
]

// El color del background se cambia según la información de la API. El ícono depende de
// la información que se recibe.
if (weather.icon === "rainy") {
    document.body.classList.add("background__rainy");
}
else if (weather.icon === "sunny") {
    document.body.classList.add("background__sunny");
}

const LandingPage = () => {

    return (
        <main className="container">
            <Search/>
            <MainGrid weather={weather}/>
            <Forecast daily dailyForecast={dailyForecast}/>
            <Forecast weekForecast={weekForecast}/>
        </main>
    );
}

export default LandingPage;
