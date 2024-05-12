import CurrentDetail from "./CurrentDetail";
import "./Current.css";

const Current = ({weather}) => {
    return (
        <section className={`current-container
                             ${weather.icon == "snowy" ? "--weather_snowy":""}
                             `}>

            <section className="current-location">
                <h2 className="current__local-date"><span>Hora local:</span> {weather.localHour}</h2>
                <h1 className="current__location">{weather.locate}</h1>
            </section>

            <section className="current-temp">
                <img className="current__icon" src={`/img/icons/${weather.icon}.png`} alt={`${weather.icon}`} />
                <span className="current__temp">{weather.actualTemperature}</span>
            </section>

            <section className="current-detail card">
                <CurrentDetail icon="thermometer" info={weather.thermalSensation}/>
                <CurrentDetail icon="humidity_mid" info={weather.humidity}/>
                <CurrentDetail icon="air" info={weather.wind}/>
            </section>
        </section>
    );
}

export default Current;
