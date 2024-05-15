import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import getWeatherData from "../../services/weatherAPI"
import Search from "../../components/Search/Search"
import UserLocation from "../../components/Search/UserLocation"
import Weather from "../../components/Weather/Weather"

const WeatherPage = () => {
    const [searchParams] = useSearchParams() // Obtiene los querys de lat y lon de la URL
    const [show, setShow] = useState(false); // Mostrar el componente del weather
    const [loading, setLoading] = useState(false); // Mostrar el spinner de carga
    const [weatherData, setWeatherData] = useState(null); // Cargar la respuesta de la API

    // Obtener la información en la API
    const handlerWeather = async (lat, lon) => {
        try {
            setLoading(true)
            const weatherDataAPI = await getWeatherData(lat, lon)
            setWeatherData(weatherDataAPI);
            setLoading(false);
            setShow(true);
        }
        catch (err) {
            console.error(err);
            setLoading(false)
            setShow(false)
        }

    }

    useEffect(() => {
        handlerWeather(searchParams.get('lat'), searchParams.get('lon'))
    },[searchParams])

    return(
        <>
            <UserLocation/>
            <Search/>
            <Weather isLoading={loading}
                     show={show}
                     weatherData={weatherData}/>
        </>
    )
}

export default WeatherPage