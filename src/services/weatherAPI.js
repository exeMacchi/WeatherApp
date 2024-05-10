const BASE_URL = "https://api.weatherapi.com/v1/forecast.json";
const API_KEY = '820ab2966c224b35ad7212216240805'

const getWeatherData = async (city) => {
    const res = await fetch(`${BASE_URL}?key=${API_KEY}&q=${city}&days=16&aqi=no&alerts=no`);
    const data = await res.json();
    console.groupCollapsed("WeatherAPI");
        console.log(data);
    console.groupEnd();
    return data;
}

export default getWeatherData;
