/**
 * Devolver un objeto con la información necesaria para el componente \<MainGrid/>,
 * tomando como argumento el objeto con toda la información del clima de la ciudad
 * seleccionada.
 * @param {Object} weatherData - Objeto con toda la información del clima de la ciudad seleccionada.
 * @returns {Object}
 */
const organizeMainForecast = (weatherData) => {
    const dateArray = weatherData.location.localtime.split(" ");
    // TODO: formatear fecha
    // const date = formateDate(dateArray[0]);
    const localHour = dateArray[1];
    const locate = `${weatherData.location.name}, ${weatherData.location.region}, ${weatherData.location.country}`;
    // TODO: formatear icono
    // const icon = weatherData.current.condition.text.toLowerCase();
    const icon = "routine";
    const actualTemperature = `${weatherData.current.temp_c}°C`;
    const thermalSensation = `${weatherData.current.feelslike_c}°C`;
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
    const currentTime = Number(localHour.slice(0, 2));
    const dailyForecast = [];
    
    // Si el horario es menor a 18:00, se extraerán correctamente la información
    // de 6 horas restantes del día actual.
    if (currentTime < 18) {
        for (let hour = currentTime + 1, repeat = 0; repeat < 6; hour++, repeat++) {
            let hourForecast = {
                hour: forecast[0].hour[hour].time.slice(-5),
                // icon: forecast[0].hour[hour].condition.text,
                icon: "routine",
                max: `${forecast[0].hour[hour].temp_c}°C`
            }
            dailyForecast.push(hourForecast);
        }
    }
    // En cambio, si el horario es de 18:00 para arriba, se necesitará extraer
    // información del otro día, ya que el array del día actual solo llega hasta
    // 23 (el 00:00hs es del otro día)
    else {
        let repeat = 0;
        for (let hour = currentTime + 1; hour < 24; hour++, repeat++) {
            let hourForecast = {
                hour: forecast[0].hour[hour].time.slice(-5),
                // icon: forecast[0].hour[hour].condition.text,
                icon: "routine",
                max: `${forecast[0].hour[hour].temp_c}°C`
            }
            dailyForecast.push(hourForecast);
        }

        for (let hour = 0; repeat < 6; hour++, repeat++) {
            let hourForecast = {
                hour: forecast[1].hour[hour].time.slice(-5),
                // icon: forecast[1].hour[hour].condition.text,
                icon: "routine",
                max: `${forecast[1].hour[hour].temp_c}°C`
            }
            dailyForecast.push(hourForecast);
        }
    }
    console.log(dailyForecast);
    return dailyForecast;
}

const organizeWeekForecast = (forecast) => {
    const weekForecast = [];

    for (let i = 1; i < 7; i++) {
        let dayForecast = {
            day: forecast[i].date,
            // icon: forecast[i].day.condition.text,
            icon: "routine",
            max: `${forecast[i].day.maxtemp_c}°C`,
            min: `${forecast[i].day.mintemp_c}°C`
        }
        weekForecast.push(dayForecast);
    }

    return weekForecast;
}

export { 
    organizeMainForecast, 
    organizeDailyForecast, 
    organizeWeekForecast
};
