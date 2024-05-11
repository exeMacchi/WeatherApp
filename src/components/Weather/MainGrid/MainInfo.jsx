import ExtraInfo from "./ExtraInfo";
import "./MainInfo.css";

const MainInfo = ({weather}) => {
    return (
        <article className="main-info__container">
            <span className="material-symbols-outlined main-info__icon">
                {weather.icon}
            </span>

            <span className="main-info__temperature">{weather.actualTemperature}</span>

            <div className="main-info__extra">
                <ExtraInfo icon="thermometer" info={weather.thermalSensation}/>
                <ExtraInfo icon="humidity_mid" info={weather.humidity}/>
                <ExtraInfo icon="air" info={weather.wind}/>
            </div>
        </article>
    );
}

export default MainInfo;
