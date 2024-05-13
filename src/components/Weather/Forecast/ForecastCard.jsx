import "./ForecastCard.css";

const ForecastCard = ({time, icon, max, min}) => {
    return (
        <article className="forecast-card__container">
            <span className="forecast-card__time">{time}</span>
            <img className="current__icon--forecast" src={`/img/icons/${icon}.png`} alt={`${icon}`}/>
            {
                min ?
                    <div className="forecast-card__week">
                        <span className="forecast-card__max">{max}</span>
                        <span>/</span>
                        <span className="forecast-card__min">{min}</span>
                    </div>
                    :
                    <p className="forecast-card__max">{max}</p>
            }
        </article>
    );
}

export default ForecastCard;
