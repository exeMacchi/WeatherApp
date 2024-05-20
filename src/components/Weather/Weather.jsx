import { Icon } from "@iconify-icon/react/dist/iconify.js";
import { organizeCurrentForecast, organizeDailyForecast, organizeWeekForecast } from "../../utils/weatherData";
import Forecast from "./Forecast/Forecast";
import Current from "./Current/Current";
import Spinner from "./Spinner/Spinner";
import './weather.css'
import '../../styles/inputs.css'
import { addFavorite } from "../../utils/firestore";
import { Fade } from "react-awesome-reveal"

const Weather = ({isLoading, show, weatherData, isLogged, favorite}) => {

    if (isLoading === true) {
        return (
            <section className="weather-container">
                <Fade cascade={true}
                      triggerOnce={true}
                      damping={0.5}>
                    <Spinner/>
                </Fade>
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

        // Handler para agregar un favorito
        const handleAddFavorite = async () => {
            const favorite_data = {
                tag: weatherData.location.name,
                location: currentForecast.locate,
                lat: weatherData.location.lat,
                lon: weatherData.location.lon,
            }
            await addFavorite(favorite_data)
        }

        // Si ya existe el favorito, se desactiva el botón de agregar
        const favoriteButton = ()  =>{
            if (isLogged.logged) {
                return favorite ? (
                    <div className="favorite-button-container">
                        <button disabled className="btn--fav btn--fav-disabled"><Icon icon="tabler:star-filled" /></button>
                    </div>
                ):(
                    <div className="favorite-button-container">
                        <button onClick={handleAddFavorite} className="btn--fav"><Icon icon="tabler:star" /><span>Agregar</span></button>
                    </div>
                )
            }
        }

        return (
            <Fade cascade={true}
                      triggerOnce={true}
                      damping={0.5}>
                            
                <section className="weather-container">
                    {favoriteButton()}
                    <Current weather={currentForecast}/>
                    <Forecast daily dailyForecast={dailyForecast}/>
                    <Forecast weekForecast={weekForecast}/>
                </section>
            </Fade>
        );
    }
    else {
        return <></>
    }
}

export default Weather;
