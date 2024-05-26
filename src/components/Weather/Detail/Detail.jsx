import { Icon } from "@iconify-icon/react/dist/iconify.js";
import { Link } from "react-router-dom";
import "./Detail.css";

const Detail = ({ detail, isLogged }) => {
    return (
        <section className="card">
            {!isLogged ? (
                <div className="forecast__overlay">
                    <p className="forecast__overlay-text">
                        Información disponible solo para usuarios registrados
                    </p>
                    <Link className="forecast__overlay-link btn" to={"/login"}>
                        Iniciar sesión
                    </Link>
                </div>
            ) : (
                <></>
            )}

            <section
                className={`card__header ${!isLogged ? "forecast__blur" : ""}`}
            >
                <h2 className="card__title text-dg-primary">
                    Detalle del pronóstico
                </h2>
            </section>

            <section
                className={`card__body detail-container ${
                    !isLogged ? "forecast__blur" : ""
                }`}
            >
                <article className="detail__item">
                    <div className="detail__icon-container">
                        <Icon icon="tabler:temperature" />
                    </div>
                    <div className="detail__content">
                        <h3 className="detail__title">Sensación térmica</h3>
                        <span className="detail__description">
                            {detail.feelslike}°
                        </span>
                    </div>
                </article>

                <article className="detail__item">
                    <div className="detail__icon-container">
                        <Icon icon="tabler:droplet-half-2-filled" />
                    </div>
                    <div className="detail__content">
                        <h3 className="detail__title">Humedad</h3>
                        <span className="detail__description">
                            {detail.humidity}%
                        </span>
                    </div>
                </article>

                <article className="detail__item">
                    <div className="detail__icon-container">
                        <Icon icon="tabler:uv-index" />
                    </div>
                    <div className="detail__content">
                        <h3 className="detail__title">Índice UV</h3>
                        <span className="detail__description">{detail.uv}</span>
                    </div>
                </article>

                <article className="detail__item">
                    <div className="detail__icon-container">
                        <Icon icon="tabler:cloud-rain" />
                    </div>
                    <div className="detail__content">
                        <h3 className="detail__title">Precipitación</h3>
                        <span className="detail__description">
                            {detail.precip_mm} mm
                        </span>
                    </div>
                </article>

                <article className="detail__item">
                    <div className="detail__icon-container">
                        <Icon icon="tabler:wind" />
                    </div>
                    <div className="detail__content">
                        <h3 className="detail__title">Viento</h3>
                        <span className="detail__description">
                            {detail.wind_dir} ({detail.wind_deg}°),{" "}
                            {detail.wind_kph} km/h
                        </span>
                    </div>
                </article>

                <article className="detail__item">
                    <div className="detail__icon-container">
                        <Icon icon="tabler:brand-soundcloud" />
                    </div>
                    <div className="detail__content">
                        <h3 className="detail__title">Cobertura de nubes</h3>
                        <span className="detail__description">
                            {detail.cloud}%
                        </span>
                    </div>
                </article>

                <article className="detail__item">
                    <div className="detail__icon-container">
                        <Icon icon="tabler:eye" />
                    </div>
                    <div className="detail__content">
                        <h3 className="detail__title">Visibilidad</h3>
                        <span className="detail__description">
                            {detail.visibility_km} km
                        </span>
                    </div>
                </article>

                <article className="detail__item">
                    <div className="detail__icon-container">
                        <Icon icon="tabler:sunset" />
                    </div>
                    <div className="detail__content">
                        <h3 className="detail__title">Presión atmosférica</h3>
                        <span className="detail__description">
                            {detail.pressure_mb} hPa
                        </span>
                    </div>
                </article>
            </section>
        </section>
    );
};

export default Detail;
