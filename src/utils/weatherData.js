import { getWeatherIcon } from "./auxiliary"

/**
 * Devolver un objeto con la información necesaria para el componente \<MainGrid/>,
 * tomando como argumento el objeto con toda la información del clima de la ciudad
 * seleccionada.
 * @param {Object} weatherData - Objeto con toda la información del clima de la ciudad seleccionada.
 * @returns {Object}
 */
const organizeCurrentForecast = (weatherData) => {
    const dateArray = weatherData.location.localtime.split(" ");
    // TODO: formatear fecha
    // const date = formateDate(dateArray[0]);
    const localHour = dateArray[1];
    const locate = `${weatherData.location.name}, ${weatherData.location.region}, ${weatherData.location.country}`;
    const icon = getWeatherIcon(weatherData.current.condition.code, Number(localHour.match(/^\d+/)[0]));
    const actualTemperature = `${weatherData.current.temp_c}°`;
    const thermalSensation = `${weatherData.current.feelslike_c}°`;
    const humidity = `${weatherData.current.humidity}%`;
    const wind = `${weatherData.current.wind_kph} km/h`;

    return {
        date: dateArray[0],
        localHour: localHour,
        locate: locate,
        icon: icon,
        actualTemperature: actualTemperature,
        thermalSensation: thermalSensation,
        humidity: humidity,
        wind: wind
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
    let repeat = 0;

    for (let hour = currentTime + 1; hour < 24 && repeat < 10; hour++, repeat++) {
        let hourForecast = {
            hour: `${hour}:00`,
            icon: getWeatherIcon(forecast[0].hour[hour].condition.code, Number(hour)),
            max: `${forecast[0].hour[hour].temp_c}°C`
        }
        dailyForecast.push(hourForecast);
    }

    // En el caso de ser necesario (se llegó al límite de horas del día actual),
    // se extraerá información del siguiente día hasta llegar a 10 repeticiones.
    for (let hour = 0; repeat < 10; hour++, repeat++) {
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
            day: forecast[i].date,
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
    organizeDailyForecast, 
    organizeWeekForecast
};
