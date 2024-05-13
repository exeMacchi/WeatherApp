import { organizeCurrentForecast, organizeDailyForecast, organizeWeekForecast } from "../../utils/weatherData";
import Forecast from "./Forecast/Forecast";
import Current from "./Current/Current";
import Spinner from "./Spinner/Spinner";
import './weather.css'

const Weather = ({isLoading, show, weatherData}) => {

    if (isLoading === true) {
        return (
            <section className="weather-container">
                <Spinner/>
            </section>
        )
    }

    if (show) {
        // Se actualiza el Current
        const currentForecast = organizeCurrentForecast(weatherData);

        // Se actualiza el Forecast daily
        const dailyForecast = organizeDailyForecast(weatherData.forecast.forecastday, 
                                                    weatherData.location.localtime.slice(-5));

        // Se actualiza el Forecast week
        const weekForecast = organizeWeekForecast(weatherData.forecast.forecastday);

        return (
            <section className="weather-container" 
                     style={{ opacity: !show ? "0" : "1",
                              visibility: !show ? "hidden" : "visible",}}>
                <Current weather={currentForecast}/>
                <Forecast daily dailyForecast={dailyForecast}/>
                <Forecast weekForecast={weekForecast}/>
            </section>
        );
    }
    else {
        return <></>
    }
}

export default Weather;
