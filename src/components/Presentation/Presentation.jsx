import { Fade } from "react-awesome-reveal"
import { Icon } from "@iconify-icon/react/dist/iconify.js"
import "./Presentation.css";

const Presentation = () => {

    return (
        <div className="presentation__container">
            <section className="hero__container">
                <Fade triggerOnce>
                    <div className="hero__title-container">
                        <Icon className="hero__title-logo" icon="tabler:cloud" />
                        <h1 className="hero__title">WeatherAPP</h1>
                    </div>
                </Fade>

                <div className="hero__description-container">
                    <Fade cascade triggerOnce delay={500} damping={0.5}>
                        <figure className="hero__image-container">
                            <img src="/img/home/Sunny.webp"
                                 alt="test"
                                 className="hero__image"/>
                        </figure>
                        <figure className="hero__image-container">
                            <img src="/img/home/Rainy.webp"
                                 alt="test"
                                 className="hero__image"/>
                        </figure>
                        <figure className="hero__image-container">
                            <img src="/img/home/PartlyCloudy.webp"
                                 alt="test"
                                 className="hero__image"/>
                        </figure>
                        <figure className="hero__image-container">
                            <img src="/img/home/Foggy.webp"
                                 alt="test"
                                 className="hero__image"/>
                        </figure>

                        <div className="hero__description">
                            <h2 className="hero__description__title">Clima en tiempo real</h2>
                            <p className="hero__description__text">
                                Obtenga el clima de cualquier ciudad del mundo al 
                                alcance de un solo click, con pronósticos detallados 
                                y dinámicos acompañados de una interfaz agradable e intuitiva.
                            </p>
                        </div>
                    </Fade>
                </div>
            </section>

            <section className="week-forecast__container">
                <Fade cascade triggerOnce damping={0.5} fraction={.5}>
                    <div className="week-forecast__bubble">
                        <h2 className="week-forecast__title">Pronóstico semanal</h2>
                        <p className="week-forecast__text">
                            Manténgase informado sobre el clima de la semana con 
                            nuestro pronóstico extendido.
                            Obtenga una vista general del clima que se espera en su 
                            ciudad durante los próximos 7 días, para que pueda 
                            planificar con anticipación.
                        </p>
                    </div>
                    <div className="week-forecast__image--flex">
                        <figure className="week-forecast__image-container">
                            <img src="/img/home/WeekForecast.webp"
                                alt="test"
                                className="week-forecast__image"/>
                        </figure>
                    </div>
                </Fade>
            </section>


            <section className="daily-forecast__container">
                <Fade cascade triggerOnce damping={0.5} fraction={0.5}>
                    <div className="daily-forecast__bubble">
                        <h2 className="daily-forecast__title">Pronóstico diario</h2>
                        <p className="daily-forecast__text">
                            Planifique su día con confianza con nuestro pronóstico 
                            detallado hora por hora.
                            Conozca las condiciones meteorológicas que se esperan 
                            en su ciudad a lo largo del día, para que pueda tomar 
                            decisiones informadas sobre sus actividades.
                        </p>
                        <span className="only-users">
                            <Icon className="user-icon" icon="tabler:user-circle" />
                            Funcionalidad de usuario
                        </span>
                    </div>
                    <div className="daily-forecast__image--flex">
                        <figure className="daily-forecast__image-container">
                            <img src="/img/home/DailyForecast.webp"
                                alt="test"
                                className="daily-forecast__image"/>
                        </figure>
                    </div>
                </Fade>
            </section>

            <section className="forecast-detail__container">
                <Fade cascade triggerOnce damping={0.5} fraction={0.5}>
                <div className="forecast-detail__bubble">
                    <h2 className="forecast-detail__title">Pronóstico detallado</h2>
                    <p className="forecast-detail__text">
                        Obtenga información precisa y completa sobre el clima, 
                        incluyendo sensación térmica, humedad, velocidad del viento,
                        presión atmosférica y mucho más.
                    </p>
                    <span className="only-users">
                        <Icon className="user-icon" icon="tabler:user-circle" />
                        Funcionalidad de usuario
                    </span>
                </div>
                <div className="forecast-detail__image--flex">
                    <figure className="forecast-detail__image-container">
                        <img src="/img/home/ForecastDetail.webp"
                            alt="test"
                            className="forecast-detail__image"/>
                    </figure>
                </div>
                </Fade>
            </section>
        </div>
    );
}

export default Presentation;
