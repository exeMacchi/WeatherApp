import ForecastCard from "./ForecastCard";
import "./Forecast.css";
import "../../../styles/slider.css"
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { Icon } from '@iconify-icon/react';
import { useRef } from "react";

const Forecast = ({ daily, dailyForecast, weekForecast }) => {
    const slider = useRef(null)

    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: 5,
        arrows:false
    }

    return (
        <section className="card forecast__container">
            <h3 className="card__title">{daily ? "Pronóstico del día" : "Pronóstico de la semana"}</h3>
            <section className="slider-container">
                <Slider className="slider" ref={slider} {...settings}>
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
                <button className="slider-btn slider-btn--left" onClick={() => slider?.current?.slickPrev()}><Icon icon="iconamoon:arrow-left-6-circle-fill"/></button>
                <button className="slider-btn slider-btn--right" onClick={() => slider?.current?.slickNext()}><Icon icon="iconamoon:arrow-right-6-circle-fill"/></button>
            </section>
        </section>
    );
}

export default Forecast;
