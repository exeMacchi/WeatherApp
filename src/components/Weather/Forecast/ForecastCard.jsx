import "./ForecastCard.css";

const ForecastCard = ({time, icon, max, min}) => {
    return (
        <article className="forecast-card__container">
            <span className="forecast-card__time">{time}</span>
            <span className="material-symbols-outlined forecast-card__icon">
                {icon}
            </span>
            {
                min ?
                    <div className="forecast-card__week">
                        <p className="forecast-card__max">{max}</p>
                        <p className="forecast-card__min">{min}</p>
                    </div>
                    :
                    <p className="forecast-card__max">{max}</p>
            }
        </article>
    );
}

export default ForecastCard;
