const BASE_URL = "https://api.weatherapi.com/v1/forecast.json";
const API_KEY = '820ab2966c224b35ad7212216240805'

/**
 * Devolver la información del clima de una ciudad específica escogida en el buscador.
 * @param {string} latlong - Cadena con la latitud y longitud de la ciudad
 * @returns 
 */
const getWeatherData = async (lat,lon) => {
    const res = await fetch(`${BASE_URL}?key=${API_KEY}&q=${lat},${lon}&days=16&aqi=no&alerts=no&lang=es&units=si`);
    return await res.json();
}

export default getWeatherData;
