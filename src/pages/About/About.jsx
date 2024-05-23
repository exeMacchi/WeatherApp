import { Icon } from "@iconify-icon/react/dist/iconify.js"
import "./About.css"
import { useEffect } from "react";


const About = ({setBgClass}) => {
    useEffect(() => {
        setBgClass("default");
    }, [])

    return (
        <div className="about">
            <section className="card">
                <div className="card__header">
                    <h1 className="card__title text-dg-primary">Sobre Nosotros</h1>
                </div>
                <div className="card__body">
                    <article className="article">
                        <h2 className="article__title">WeatherApp</h2>
                        <p className="article__text">Les presentamos WeatherApp, una aplicación diseñada para consultar el clima en cualquier lugar del mundo, sea donde sea que estés.</p>
                        <br/>
                        <p className="article__text">Este proyecto fue creado gracias al curso de especialización en React de Codo a Codo. El principal objetivo de WeatherApp era crear una web funcional aplicando todos nuestros conocimientos en React y utilizando tecnologías como Firebase y cualquier otro tipo de herramienta que nos ayude a concluir nuestra tarea.</p>
                    </article>
                    <article className="article">
                        <h2 className="article__title">Características</h2>
                        <p className="article__text">Dentro de esta aplicación podremos consultar el clima en tiempo real de cualquier parte del mundo, con su pronóstico diario y semanal, crear un usuario para así lograr gestionar nuestros lugares favoritos y también poder acceder mediante nuestra ubicación a la información del clima de donde nos encontremos.</p>
                    </article>
                    <article className="article">
                        <h2 className="article__title">Tecnologías</h2>
                        <div className="article__img__container">
                            <img className="article__img" src="/img/logos/html-css-js.png" alt="Logo" />
                            <img className="article__img" src="/img/logos/react.png" alt="Logo" />
                            <img className="article__img" src="/img/logos/firebase.png" alt="Logo" />
                        </div>
                    </article>
                    <article className="article">
                        <h2 className="article__title">APIs</h2>
                        <p className="article__text">Para consultar los datos del clima utilizamos GeoDB Cities y WeatherApi.</p>
                    </article>
                    <article className="article">
                        <h2 className="article__title">Librerías</h2>
                        <ul className="article__ul">
                            <li className="article__li"><span className="dot">•</span> React-router-dom.</li>
                            <li className="article__li"><span className="dot">•</span> Slick-carousel.</li>
                            <li className="article__li"><span className="dot">•</span> SweetAlert2 entre otras dependencias NPM.</li>
                        </ul>
                    </article>
                    <article className="article">
                        <h2 className="article__title">Equipo</h2>
                        <ul className="article__ul">
                            <li className="article__li"><span className="dot">•</span> Cavalli Diego</li>
                            <li className="article__li"><span className="dot">•</span> Derecho Maxi</li>
                            <li className="article__li"><span className="dot">•</span> Macchi Exequiel Lautaro</li>
                            <li className="article__li"><span className="dot">•</span> Martinez Christian Fabian</li>
                        </ul>
                    </article>
                    <article className="article">
                        <a className="article__link--repo" href="https://github.com/exeMacchi/WeatherApp" target="_blank">Repositorio en Github <Icon icon="tabler:brand-github" /></a>
                    </article>
                </div>
            </section>
        </div>
    )
}

export default About