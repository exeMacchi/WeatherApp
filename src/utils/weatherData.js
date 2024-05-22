import { getWeatherIcon } from "./auxiliary";
import { formatFullDate, formatDayOfWeek } from "./dateFormat";

/**
 * Devolver un objeto con la información necesaria para el componente \<MainGrid/>,
 * tomando como argumento el objeto con toda la información del clima de la ciudad
 * seleccionada.
 * @param {Object} weatherData - Objeto con toda la información del clima de la ciudad seleccionada.
 * @returns {Object}
 */
const organizeCurrentForecast = (weatherData) => {
    const dateArray = weatherData.location.localtime.split(" ");
    const date = formatFullDate(dateArray[0]);
    const localHour = dateArray[1];
    const locate = `${weatherData.location.name}, ${weatherData.location.region}, ${weatherData.location.country}`;
    const icon = getWeatherIcon(weatherData.current.condition.code, Number(localHour.match(/^\d+/)[0]));
    const actualTemperature = `${weatherData.current.temp_c}°`;
    const thermalSensation = `${weatherData.current.feelslike_c}°`;
    const humidity = `${weatherData.current.humidity}%`;
    const wind = `${weatherData.current.wind_kph} km/h`;
    const condition = weatherData.current.condition.text;

    return { date, localHour, locate, icon, actualTemperature, thermalSensation, humidity, wind, condition }
}

const organizeCurrentDetails = (weatherData) => {
    return {
        feelslike: weatherData.current.feelslike_c,
        uv: weatherData.current.uv,
        cloud: weatherData.current.cloud,
        humidity: weatherData.current.humidity,
        pressure_mb: weatherData.current.pressure_mb,
        visibility_km: weatherData.current.vis_km,
        precip_mm: weatherData.current.precip_mm,
        wind_kph: weatherData.current.wind_kph,
        wind_deg: weatherData.current.wind_degree,
        wind_dir: weatherData.current.wind_dir,
    }
}

/**
 * Devolver un array de objetos donde cada objeto representa un pronostico hora
 * por hora hasta 6 veces.
 * @param {Array} forecast - Array de objetos donde cada objeto es un día
 * @param {String} localHour - Hora local que aparece en el MainForecast
 * @returns {Array} - Array de objetos
 */
const organizeDailyForecast = (forecast, localHour) => {
    const currentTime = Number(localHour.trimStart().match(/^\d+/)[0]);
    const dailyForecast = [];
    const MAX_HOURS = 12;
    let repeat = 0;
    

    for (let hour = currentTime + 1; hour < 24 && repeat < MAX_HOURS; hour++, repeat++) {
        let hourForecast = {
            hour: `${hour}:00`,
            icon: getWeatherIcon(forecast[0].hour[hour].condition.code, Number(hour)),
            max: `${forecast[0].hour[hour].temp_c}°C`
        }
        dailyForecast.push(hourForecast);
    }

    // En el caso de ser necesario (se llegó al límite de horas del día actual),
    // se extraerá información del siguiente día hasta llegar a 10 repeticiones.
    for (let hour = 0; repeat < MAX_HOURS; hour++, repeat++) {
        let hourForecast = {
            hour: `${hour}:00`,
            icon: getWeatherIcon(forecast[1].hour[hour].condition.code, Number(hour)),
            max: `${forecast[1].hour[hour].temp_c}°C`
        }
        dailyForecast.push(hourForecast);
    }
    console.groupCollapsed("dailyForecast")
        console.log(dailyForecast);
    console.groupEnd();
    return dailyForecast;
}

/**
 * Devolver un array de objetos donde cada objeto representa el pronóstico de los días
 * posteriores al día actual
 * @param {Array} forecast - Array de objetos donde cada objeto es un día
 * @returns 
 */
const organizeWeekForecast = (forecast) => {
    const weekForecast = [];

    // i es 1 porque es el día posterior al día actual (0)
    for (let i = 1; i <= 7; i++) {
        let dayForecast = {
            day: formatDayOfWeek(forecast[i].date),
            icon: getWeatherIcon(forecast[i].day.condition.code, 12),
            max: `${forecast[i].day.maxtemp_c}°C`,
            min: `${forecast[i].day.mintemp_c}°C`
        }
        weekForecast.push(dayForecast);
    }
    return weekForecast;
}

export { 
    organizeCurrentForecast, 
    organizeCurrentDetails,
    organizeDailyForecast, 
    organizeWeekForecast
};
