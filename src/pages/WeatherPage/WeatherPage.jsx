import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import getWeatherData from "../../services/weatherAPI"
import { getWeatherIcon } from "../../utils/auxiliary";

// Componentes
import Search from "../../components/Search/Search"
import Weather from "../../components/Weather/Weather"
import { existFavorite } from "../../utils/firestore";

const WeatherPage = ({ setBgClass, isLogged }) => {
    const [searchParams] = useSearchParams() // Obtiene los querys de lat y lon de la URL
    const [show, setShow] = useState(false); // Mostrar el componente del weather
    const [loading, setLoading] = useState(false); // Mostrar el spinner de carga
    const [weatherData, setWeatherData] = useState(null); // Cargar la respuesta de la API
    const [favorite, setFavorite] = useState(false); // Mostrar el button de favorito

    // Obtener la información en la API
    const handlerWeather = async (lat, lon) => {
        try {
            setLoading(true)
            const weatherDataAPI = await getWeatherData(lat, lon)
            if (isLogged.logged) {setFavorite(await existFavorite(isLogged.uid, `${weatherDataAPI.location.name}, ${weatherDataAPI.location.region}, ${weatherDataAPI.location.country}`))}
            setWeatherData(weatherDataAPI);
            setBgClass(getClass(weatherDataAPI));
            setLoading(false);
            setShow(true);
        }
        catch (err) {
            setLoading(false)
            setShow(false)
        }
    }

    // Obtener el ícono para cambiar el background
    const getClass = (weatherData) => {
        const localHour = (weatherData.location.localtime.split(" "))[1];
        return getWeatherIcon(weatherData.current.condition.code, Number(localHour.match(/^\d+/)[0]));
    }

    useEffect(() => {
        handlerWeather(searchParams.get('lat'), searchParams.get('lon'))
    },[searchParams])

    return(
        <>
            <Search/>
            <Weather isLoading={loading}
                     show={show}
                     weatherData={weatherData}
                     isLogged={isLogged}
                     favorite={favorite}/>
        </>
    )
}

export default WeatherPage
