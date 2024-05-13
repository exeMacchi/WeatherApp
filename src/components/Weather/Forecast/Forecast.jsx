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
        slidesToShow: 5,
    }

    return (
        <section className="card forecast__container">
            <h3 className="card__title">{daily ? "Pronóstico del día" : "Pronóstico de la semana"}</h3>
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
    );
}

export default Forecast;
