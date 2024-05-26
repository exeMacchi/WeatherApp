import CurrentDetail from "./CurrentDetail";
import "./Current.css";

const Current = ({ weather }) => {
    return (
        <section className={`current-container ${ weather.icon === "snowy" ? "--weather_snowy" : "" }`}>

            <section className="current-location">
                <div className="current__local-date">
                    <span>{weather.date}</span>
                    {
                        window.innerWidth > 768 ? <span> | </span> : <></>
                    }
                    <span>Hora local: {weather.localHour}</span> 
                </div>
                <h1 className="current__location">{weather.locate}</h1>
            </section>

            <section className="current__temperature">
                <div className="current__icon-container">
                    <img className="current__icon" src={`/img/icons/${weather.icon}.png`} alt={`${weather.icon}`} />
                    <span>{weather.condition}</span>
                </div>
                <span className="current__temp-c">{weather.actualTemperature}</span>
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
