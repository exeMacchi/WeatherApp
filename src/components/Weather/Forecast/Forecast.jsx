import ForecastCard from "./ForecastCard";
import "./Forecast.css";

const Forecast = ({ daily, dailyForecast, weekForecast }) => {
    return (
        <section className="card forecast__container">
            <h3 className="card__title">{daily ? "Temperatura del día" : "Temperatura de la semana"}</h3>
            <ul className="forecast__cards">
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
            </ul>
        </section>
    );
}

export default Forecast;
