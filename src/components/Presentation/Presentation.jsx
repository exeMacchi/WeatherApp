import { Fade } from "react-awesome-reveal";
import { Icon } from "@iconify-icon/react/dist/iconify.js";
import { useState } from "react";
import "./Presentation.css";

const Presentation = () => {
    const [isPhone, setIsPhone] = useState(window.innerWidth > 768);

    return (
        <div className="presentation__container">
            <section className="hero__container">
                <Fade triggerOnce>
                    <div className="hero__title-container">
                        <Icon
                            className="hero__title-logo"
                            icon="tabler:cloud"
                        />
                        <h1 className="hero__title text-dg-primary">
                            WeatherAPP
                        </h1>
                    </div>
                </Fade>

                <div className="hero__description-container">
                    <Fade
                        cascade={isPhone}
                        triggerOnce
                        delay={0.5}
                        damping={0.5}
                    >
                        <figure className="hero__image-container">
                            <img
                                src="/img/home/Sunny.webp"
                                alt="test"
                                className="hero__image"
                            />
                        </figure>
                        <figure className="hero__image-container">
                            <img
                                src="/img/home/Rainy.webp"
                                alt="test"
                                className="hero__image"
                            />
                        </figure>
                        <figure className="hero__image-container">
                            <img
                                src="/img/home/PartlyCloudy.webp"
                                alt="test"
                                className="hero__image"
                            />
                        </figure>
                        <figure className="hero__image-container">
                            <img
                                src="/img/home/Foggy.webp"
                                alt="test"
                                className="hero__image"
                            />
                        </figure>
                        <div className="hero__description">
                            <h2 className="hero__description__title text-dg-primary">
                                Clima en tiempo real
                            </h2>
                            <p className="hero__description__text">
                                Obtenga el clima de cualquier ciudad del mundo
                                al alcance de un solo click, con pronósticos
                                detallados y dinámicos acompañados de una
                                interfaz agradable e intuitiva.
                            </p>
                        </div>
                    </Fade>
                </div>
            </section>

            <div className="functionalities__container">
                {/* WEEK */}
                <section className="functionality__container">
                    <Fade
                        cascade={isPhone}
                        triggerOnce
                        damping={0.5}
                        fraction={0.5}
                    >
                        <div className="functionality__bubble">
                            <h2 className="functionality__title text-dg-primary">
                                Pronóstico semanal
                            </h2>
                            <p className="functionality__text">
                                Manténgase informado sobre el clima de la semana
                                con nuestro pronóstico extendido. Obtenga una
                                vista general del clima que se espera en su
                                ciudad durante los próximos 7 días, para que
                                pueda planificar con anticipación.
                            </p>
                        </div>
                        <div className="functionality__image--flex">
                            <figure className="functionality__image-container">
                                <img
                                    src="/img/home/WeekForecast.webp"
                                    alt="test"
                                    className="functionality__image"
                                />
                            </figure>
                        </div>
                    </Fade>
                </section>

                {/* DAILY */}
                <section className="functionality__container">
                    <Fade
                        cascade={isPhone}
                        triggerOnce
                        damping={0.5}
                        fraction={0.5}
                    >
                        <div className="functionality__bubble">
                            <h2 className="functionality__title text-dg-primary">
                                Pronóstico diario
                            </h2>
                            <p className="functionality__text">
                                Planifique su día con confianza con nuestro
                                pronóstico detallado hora por hora. Conozca las
                                condiciones meteorológicas que se esperan en su
                                ciudad a lo largo del día, para que pueda tomar
                                decisiones informadas sobre sus actividades.
                            </p>
                            <span className="only-users text-dg-primary">
                                <Icon
                                    className="user-icon"
                                    icon="tabler:user-circle"
                                />
                                Funcionalidad de usuario
                            </span>
                        </div>
                        <div className="functionality__image--flex">
                            <figure className="functionality__image-container">
                                <img
                                    src="/img/home/DailyForecast.webp"
                                    alt="test"
                                    className="functionality__image"
                                />
                            </figure>
                        </div>
                    </Fade>
                </section>

                {/* DETAIL */}
                <section className="functionality__container">
                    <Fade
                        cascade={isPhone}
                        triggerOnce
                        damping={0.5}
                        fraction={0.5}
                    >
                        <div className="functionality__bubble">
                            <h2 className="functionality__title text-dg-primary">
                                Pronóstico detallado
                            </h2>
                            <p className="functionality__text">
                                Obtenga información precisa y completa sobre el
                                clima, incluyendo sensación térmica, humedad,
                                velocidad del viento, presión atmosférica y
                                mucho más.
                            </p>
                            <span className="only-users text-dg-primary">
                                <Icon
                                    className="user-icon"
                                    icon="tabler:user-circle"
                                />
                                Funcionalidad de usuario
                            </span>
                        </div>
                        <div className="functionality__image--flex">
                            <figure className="functionality__image-container">
                                <img
                                    src="/img/home/ForecastDetail.webp"
                                    alt="test"
                                    className="functionality__image"
                                />
                            </figure>
                        </div>
                    </Fade>
                </section>

                {/* FAVORITES */}
                <section className="functionality__container">
                    <Fade
                        cascade={isPhone}
                        triggerOnce
                        damping={0.5}
                        fraction={0.5}
                    >
                        <div className="functionality__bubble">
                            <h2 className="functionality__title text-dg-primary">
                                Destinos favoritos
                            </h2>
                            <p className="functionality__text">
                                Agregue y acceda rápidamente a tus destinos
                                favoritos y mantente siempre al tanto del clima
                                que más le importa.
                            </p>
                            <span className="only-users text-dg-primary">
                                <Icon
                                    className="user-icon"
                                    icon="tabler:user-circle"
                                />
                                Funcionalidad de usuario
                            </span>
                        </div>
                        <div className="functionality__image--flex">
                            <figure className="user-favorites__image-container">
                                <img
                                    src="/img/home/Favorites.webp"
                                    alt="test"
                                    className="functionality__image"
                                />
                            </figure>
                        </div>
                    </Fade>
                </section>
            </div>
        </div>
    );
};

export default Presentation;
