import { organizeMainForecast, organizeDailyForecast, organizeWeekForecast } from "../../utils/weatherData";
import Forecast from "./Forecast/Forecast";
import MainGrid from "./MainGrid/MainGrid";
import Spinner from "../Spinner";


const Weather = ({isLoading, show, weatherData}) => {

    if (isLoading == true) {return <Spinner/>}

    if (show) {
        // Se actualiza el MainGrid
        const mainForecast = organizeMainForecast(weatherData);
        // Se actualiza el Forecast daily
        const dailyForecast = organizeDailyForecast(weatherData.forecast.forecastday, weatherData.location.localtime.slice(-5));
        // Se actualiza el Forecast week
        const weekForecast = organizeWeekForecast(weatherData.forecast.forecastday);
        return (
            <section>
                <MainGrid weather={mainForecast}/>
                <Forecast daily dailyForecast={dailyForecast}/>
                <Forecast weekForecast={weekForecast}/>
            </section>
        );
    }else{
        return <></>
    }
}

export default Weather;
