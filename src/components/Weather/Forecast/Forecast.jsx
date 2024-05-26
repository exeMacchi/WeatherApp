import ForecastCard from "./ForecastCard";
import "./Forecast.css";
import "../../../styles/slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const Forecast = ({ daily, dailyForecast, weekForecast, isLogged }) => {
    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: daily ? 7 : 5,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    swipeToSlide: true,
                },
            },
        ],
    };

    return (
        <section className={`card forecast__container`}>
            {daily && !isLogged ? (
                <div className="forecast__overlay">
                    <p className="forecast__overlay-text">
                        Información disponible solo para usuarios registrados
                    </p>
                    <Link className="forecast__overlay-link btn" to={"/login"}>
                        Iniciar sesión
                    </Link>
                </div>
            ) : (
                <></>
            )}
            <section
                className={`card__header ${
                    daily && !isLogged ? "forecast__blur" : ""
                }`}
            >
                <h2 className="card__title text-dg-primary">
                    {daily ? "Pronóstico del día" : "Pronóstico de la semana"}
                </h2>
            </section>
            <section className="card__body">
                <section className="slider-container">
                    <Slider
                        className={`slider ${
                            daily && !isLogged ? "forecast__blur" : ""
                        }`}
                        {...settings}
                    >
                        {daily
                            ? dailyForecast.map((day) => (
                                  <ForecastCard
                                      key={day.hour}
                                      time={day.hour}
                                      icon={day.icon}
                                      max={day.max}
                                  />
                              ))
                            : weekForecast.map((week) => (
                                  <ForecastCard
                                      key={week.day}
                                      time={week.day}
                                      icon={week.icon}
                                      max={week.max}
                                      min={week.min}
                                  />
                              ))}
                    </Slider>
                </section>
            </section>
        </section>
    );
};

export default Forecast;
