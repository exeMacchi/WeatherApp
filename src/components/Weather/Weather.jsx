import { useEffect, useState } from "react";
import { Icon } from "@iconify-icon/react/dist/iconify.js";
import { Fade } from "react-awesome-reveal";
import { organizeCurrentForecast, organizeDailyForecast, organizeWeekForecast, organizeCurrentDetails } from "../../utils/weatherData";
import { addFavorite } from "../../utils/firestore";
import Forecast from "./Forecast/Forecast";
import Current from "./Current/Current";
import Detail from "./Detail/Detail";
import Spinner from "./Spinner/Spinner";
import "./weather.css";
import "../../styles/inputs.css";

const Weather = ({ isLoading, show, weatherData, isLogged, favorite }) => {
    const [isFavorite, setIsFavorite] = useState(null);

    useEffect(() => {
        if (isLogged.logged) {
            setTimeout(() => {
                setIsFavorite(favorite);
            }, 100);
        }
    }, [favorite]);

    if (isLoading === true) {
        return (
            <section className="weather-container">
                <Fade cascade={true} triggerOnce={true} damping={0.5}>
                    <Spinner />
                </Fade>
            </section>
        );
    }

    if (show) {
        // Se actualiza el Current
        const currentForecast = organizeCurrentForecast(weatherData);

        // Se actualiza el Detail
        const currentDetails = organizeCurrentDetails(weatherData);

        // Se actualiza el Forecast daily
        const dailyForecast = organizeDailyForecast(
            weatherData.forecast.forecastday,
            weatherData.location.localtime.slice(-5)
        );

        // Se actualiza el Forecast week
        const weekForecast = organizeWeekForecast(
            weatherData.forecast.forecastday
        );

        // Handler para agregar un favorito
        const handleAddFavorite = async () => {
            setIsFavorite(true);
            const favorite_data = {
                tag: weatherData.location.name,
                location: currentForecast.locate,
                lat: weatherData.location.lat,
                lon: weatherData.location.lon,
            };
            await addFavorite(favorite_data);
        };

        // Si ya existe el favorito, se desactiva el botón de agregar
        const favoriteButton = () => {
            if (isLogged.logged) {
                return isFavorite ? (
                    <div className="favorite-button-container">
                        <button disabled className="btn--fav btn--fav-disabled">
                            <Icon icon="tabler:star-filled" />
                        </button>
                    </div>
                ) : (
                    <div className="favorite-button-container">
                        <button
                            onClick={handleAddFavorite}
                            className="btn--fav"
                        >
                            <Icon icon="tabler:star" />
                            <span>Agregar</span>
                        </button>
                    </div>
                );
            }
        };

        return (
            <Fade cascade triggerOnce damping={0.5}>
                <section className="weather-container">
                    {favoriteButton()}
                    <Current weather={currentForecast} />
                    <Forecast weekForecast={weekForecast} />
                    <Forecast
                        daily
                        dailyForecast={dailyForecast}
                        isLogged={isLogged.logged}
                    />
                    <Detail
                        detail={currentDetails}
                        isLogged={isLogged.logged}
                    />
                </section>
            </Fade>
        );
    } else {
        return <></>;
    }
};

export default Weather;
