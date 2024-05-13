const BASE_URL = "https://api.weatherapi.com/v1/forecast.json";
const API_KEY = '820ab2966c224b35ad7212216240805'

/**
 * Devolver la información del clima de una ciudad específica escogida en el buscador.
 * @param {string} latlong - Cadena con la latitud y longitud de la ciudad
 * @returns 
 */
const getWeatherData = async (latlong) => {
    const res = await fetch(`${BASE_URL}?key=${API_KEY}&q=${latlong}&days=16&aqi=no&alerts=no`);
    const data = await res.json();
    console.groupCollapsed("WeatherAPI");
        console.log(data);
    console.groupEnd();
    return data;
}

export default getWeatherData;
