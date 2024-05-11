import MainInfo from "./MainInfo";

import "./MainGrid.css";


const MainGrid = ({weather}) => {
    return (
        <section className="main-grid__container">
            <h2 className="main-grid__subtitle">{weather.date} | Hora local: {weather.localHour}</h2>
            <h1 className="main-grid__title">{weather.locate}</h1>
            <MainInfo weather={weather}/>
        </section>
    );
}

export default MainGrid;
