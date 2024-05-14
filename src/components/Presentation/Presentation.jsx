import { Fade } from "react-awesome-reveal"
import "./Presentation.css";

const Presentation = () => {

    return (
        <>
            <section className="hero__container">
                <Fade triggerOnce={true}>
                    <h1 className="hero__title">Weather App</h1>
                </Fade>
                <div className="hero__description-container">
                    <Fade cascade={true}
                          triggerOnce={true}
                          delay={500} 
                          damping={0.5}>
                        <figure className="hero__image-container">
                            <img src="/img/presentation/Weather.png"
                                 alt="test"
                                 className="hero__image"/>
                        </figure>

                        <div className="hero__description">
                            <h2 className="hero__description__title">Clima en tiempo real</h2>
                            <p className="hero__description__text">
                                Obtenga el clima de cualquier ciudad del mundo al
                                alcance de un click.
                            </p>
                        </div>
                    </Fade>
                </div>
            </section>

            <section className="daily-forecast__container">
                <Fade cascade={true}
                      triggerOnce={true}
                      damping={0.8}>
                    <div className="daily-forecast__description-container">
                        <h2 className="daily-forecast__title">Pronóstico diario</h2>
                        <p className="daily-forecast__text">
                            Planifique su día con confianza con nuestro pronóstico 
                            detallado hora por hora.
                            Conozca las condiciones meteorológicas que se esperan 
                            en su ciudad a lo largo del día, para que pueda tomar 
                            decisiones informadas sobre sus actividades.
                        </p>
                    </div>
                    <figure className="daily-forecast__image-container">
                        <img src="/img/presentation/Forecast-Daily.png"
                            alt="test"
                            className="daily-forecast__image"/>
                    </figure>
                </Fade>
            </section>

            <section className="week-forecast__container">
                <Fade cascade={true} 
                      damping={0.8}
                      triggerOnce={true}
                      style={{display: "flex", justifyContent: "flex-end"}}>
                    <div className="week-forecast__description-container">
                        <h2 className="week-forecast__title">Pronóstico semanal</h2>
                        <p className="week-forecast__text">
                            Manténgase informado sobre el clima de la semana con 
                            nuestro pronóstico extendido.
                            Obtenga una vista general del clima que se espera en su 
                            ciudad durante los próximos 7 días, para que pueda 
                            planificar con anticipación.
                        </p>
                    </div>
                    <figure className="week-forecast__image-container">
                        <img src="/img/presentation/Forecast-Week.png"
                            alt="test"
                            className="week-forecast__image"/>
                    </figure>
                </Fade>
            </section>
        </>
    );
}

export default Presentation;
