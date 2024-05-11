import CurrentDetail from "./CurrentDetail";
import "./Current.css";

const Current = ({weather}) => {
    return (
        <section className="card current-container">
            <section className="current-location">
                <h2 className="current__local-date"><span>Hora local:</span> {weather.localHour}</h2>
                <h1 className="current__location">{weather.locate}</h1>
            </section>

            <section className="current-temp">
                <span className="current__temp-icon material-symbols-outlined">{weather.icon}</span>
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
