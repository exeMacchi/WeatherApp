import ForecastCard from "./ForecastCard";
import "./Forecast.css";
import "../../../styles/slider.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Forecast = ({ daily, dailyForecast, weekForecast }) => {
    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: daily ? 7 : 5,
    }

    return (
        <section className="card forecast__container">
            <section className="card__header">
                <h2 className="card__title text-dg-primary">{daily ? "Pronóstico del día" : "Pronóstico de la semana"}</h2>
            </section>
            <section className="card__body">
                <section className="slider-container">
                    <Slider className="slider" {...settings}>
                        {
                            daily 
                            ?
                            dailyForecast.map(day => (
                                <ForecastCard key={day.hour} time={day.hour} icon={day.icon} max={day.max}/>
                            ))
                            :
                            weekForecast.map(week => (
                                <ForecastCard key={week.day} time={week.day} icon={week.icon} max={week.max} min={week.min}/>
                            ))
                        }
                    </Slider>
                </section>
            </section>
        </section>
    );
}

export default Forecast;
